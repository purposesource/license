// Copy lint. Runs copy-lint/banned.txt (a hand-synced mirror of the movement's canonical
// MKT-018 pattern file in the website repository) over every published-content source in
// this repository, and fails the build on any match.
//
// Three independent failure modes, all fatal:
//   1. any banned pattern matching any scanned line,
//   2. a scanned file count of zero — a gate that cannot fail is worse than no gate
//      (the Rendlio link-check lesson, ported),
//   3. a pattern file that parses to zero usable patterns.
//
// Scope: prose and templates. copy-lint/ and scripts/ are excluded because they CONTAIN the
// banned strings by construction (that is their job) — the same carve-out reasoning the
// Rendlio site applies to its dated internal records, and for the same reason: making the
// gate's own data pass the gate would mean deleting the gate.
import { walk, read, fail } from './lib/files.mjs';

const PATTERN_FILE = 'copy-lint/banned.txt';

const SCAN = (rel) => {
  if (rel.startsWith('copy-lint/') || rel.startsWith('scripts/')) return false;
  if (rel.startsWith('node_modules/')) return false;
  return /\.(md|txt|ya?ml|json)$/i.test(rel) || rel === 'LICENSE';
};

const patterns = read(PATTERN_FILE)
  .split(/\r?\n/)
  .map((line, i) => ({ line: line.trim(), lineNo: i + 1 }))
  .filter(({ line }) => line && !line.startsWith('#'))
  .map(({ line, lineNo }) => {
    try {
      return { source: line, lineNo, re: new RegExp(line, 'i') };
    } catch (err) {
      fail(`${PATTERN_FILE}:${lineNo} is not a valid regular expression — ${err.message}`);
      process.exitCode = 1;
      return null;
    }
  })
  .filter(Boolean);

if (process.exitCode === 1) process.exit(1);

if (patterns.length === 0) {
  fail(`${PATTERN_FILE} yielded no patterns — the copy lint would pass vacuously.`);
  process.exit(1);
}

const files = walk('.', SCAN);

if (files.length === 0) {
  fail('the copy lint scanned zero files — check the SCAN filter in scripts/check-copy.mjs.');
  process.exit(1);
}

let hits = 0;
for (const file of files) {
  const lines = read(file).split(/\r?\n/);
  lines.forEach((text, i) => {
    for (const { source, lineNo, re } of patterns) {
      if (re.test(text)) {
        hits += 1;
        fail(
          `${file}:${i + 1} matches banned pattern ${PATTERN_FILE}:${lineNo} ` +
            `(/${source}/i)\n    ${text.trim()}`
        );
      }
    }
  });
}

if (hits > 0) {
  console.error(`\ncopy lint: ${hits} banned-copy match(es) in ${files.length} files.`);
  process.exit(1);
}

console.log(`copy lint clean — ${patterns.length} patterns over ${files.length} files.`);
