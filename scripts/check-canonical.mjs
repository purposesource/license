// The canonical-rendering gate. The committed canonical text must be exactly what the
// renderer produces from the draft, byte for byte.
//
// WHY THIS IS A GATE AND NOT A CONVENTION
// The canonical text is published at a tag, hashed, vendored by the website, and pinned
// there. From the moment the tag exists, the website's own gate fails the build on any
// disagreement. So the failure that matters is not "somebody edited the licence" — that one
// is loud — but "somebody edited the DRAFT and forgot to re-render", which would leave two
// texts claiming to be the same licence. This gate makes that impossible to commit.
//
// Four failure modes, all fatal:
//   1. a canonical file missing, or differing by a single byte from the re-render;
//   2. a CR byte, or a UTF-8 BOM, in a committed canonical file — its bytes are hashed, and
//      a line-ending rewrite would make the hash depend on the committer's operating system;
//   3. a .txt in canonical/ that no rendering produces — an orphan nobody can reproduce is
//      exactly the untraceable artefact this whole exercise removes;
//   4. an empty RENDERINGS list, so the gate cannot pass vacuously.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, fail } from './lib/files.mjs';
import { BANNER_FILE, RENDERINGS, renderCanonical } from './lib/render-canonical.mjs';

const CANONICAL_DIR = 'canonical';

let problems = 0;
const problem = (msg) => {
  fail(msg);
  problems += 1;
};

if (RENDERINGS.length === 0) {
  problem('RENDERINGS is empty — the canonical gate would pass vacuously.');
}

const banner = readFileSync(join(ROOT, BANNER_FILE), 'utf8');
const produced = new Set();

for (const { source, target } of RENDERINGS) {
  produced.add(target);

  let expected;
  try {
    expected = Buffer.from(renderCanonical(readFileSync(join(ROOT, source), 'utf8'), banner), 'utf8');
  } catch (err) {
    problem(`${source} does not render — ${err.message}`);
    continue;
  }

  const absolute = join(ROOT, target);
  if (!existsSync(absolute)) {
    problem(`${target} is missing. Run \`npm run render:canonical\` and commit the result.`);
    continue;
  }

  const actual = readFileSync(absolute);

  if (actual.includes(0x0d)) {
    problem(`${target} contains CR bytes. Canonical texts are LF-only (see .gitattributes).`);
  }
  if (actual[0] === 0xef && actual[1] === 0xbb && actual[2] === 0xbf) {
    problem(`${target} starts with a UTF-8 BOM. Canonical texts are UTF-8 without a BOM.`);
  }

  if (!actual.equals(expected)) {
    problem(
      `${target} is not what ${source} renders to. The canonical text is a FUNCTION of the ` +
        'draft, never edited in place: change the draft, run `npm run render:canonical`, and ' +
        'commit both.\n    ' +
        `committed ${actual.length} bytes, re-render ${expected.length} bytes.`,
    );
  }
}

if (existsSync(join(ROOT, CANONICAL_DIR))) {
  for (const name of readdirSync(join(ROOT, CANONICAL_DIR)).filter((f) => f.endsWith('.txt'))) {
    const rel = `${CANONICAL_DIR}/${name}`;
    if (!produced.has(rel)) {
      problem(
        `${rel} is not produced by any entry in RENDERINGS — a canonical text nobody can ` +
          'reproduce from a draft is not a canonical text.',
      );
    }
  }
}

if (problems > 0) {
  console.error(`\ncanonical gate: ${problems} problem(s).`);
  process.exit(1);
}

console.log(
  `canonical gate clean — ${RENDERINGS.length} rendering(s) byte-identical to their drafts.`,
);
