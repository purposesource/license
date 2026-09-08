// Honesty gate. This is the gate this repository exists to have.
//
// No counsel has drafted anything here. The single failure mode that would matter most is a
// draft that stops LOOKING like a draft — a banner deleted in a tidy-up commit, a
// [COUNSEL] marker quietly resolved by an author with no standing to resolve it, a
// placeholder replaced by a plausible-looking constant nobody decided. Each of those is a
// one-line diff, and each would turn a working paper into something a reader could mistake
// for operative legal text. So each is a build failure.
//
// Five independent failure modes, all fatal:
//   1. a legal text — a draft, a decision note, or a canonical rendering under canonical/ —
//      whose first non-empty lines are not the byte-identical banner from
//      copy-lint/required-banner.md,
//   2. README.md missing either the pre-launch status banner or the draft banner,
//   3. a {{TOKEN}} that is not declared in placeholders.json, or a declared token that
//      nothing uses (the list must stay a complete, auditable inventory of the undecided),
//   4. a malformed counsel marker — the form is exactly `[COUNSEL: …]`,
//   5. fewer counsel markers in the licence draft than MIN_COUNSEL_MARKERS, or a missing
//      Purpose Notice identifier line.
import { walk, read, fail } from './lib/files.mjs';

const BANNER_FILE = 'copy-lint/required-banner.md';
const STATUS_BANNER =
  '**Pre-launch.** This repository is part of the Purpose Source Network build; ' +
  'nothing here is a public commitment yet.';
const LICENSE_DRAFT = 'drafts/purpose-source-license-1.0-draft.md';
// Nine is not a target to hit; it is a floor that a "cleanup" commit cannot walk under
// without a reviewer noticing. Every open drafting question the record hands to counsel is
// listed in the draft's own counsel-agenda section.
const MIN_COUNSEL_MARKERS = 9;

// canonical/*.txt is a legal text like any other here. It is MACHINE-produced from a draft
// (scripts/render-canonical.mjs), which is exactly why it must be gated the same way: a
// rendering is the artefact a reader is most likely to meet on its own, stripped of the
// markdown that made the draft look provisional, and the banner and the markers are all that
// remain to say what it is. The renderer carries the banner through byte-for-byte, so this
// check costs nothing and would catch a renderer that stopped doing so.
const isLegalText = (rel) =>
  ((rel.startsWith('drafts/') || rel.startsWith('decisions/')) && rel.endsWith('.md')) ||
  (rel.startsWith('canonical/') && rel.endsWith('.txt'))
    ? true
    : rel === 'ANNOTATIONS.md' || rel === 'FAQ-OSPO.md';

const banner = read(BANNER_FILE).trimEnd().split(/\r?\n/);
const files = walk('.', isLegalText);
let problems = 0;

function problem(msg) {
  fail(msg);
  problems += 1;
}

if (files.length === 0) {
  problem('no legal texts were found — check the isLegalText filter in scripts/check-drafts.mjs.');
}

// ---- 1. Banner on every legal text -----------------------------------------------------
for (const file of files) {
  const lines = read(file).split(/\r?\n/);
  let i = 0;
  while (i < lines.length && lines[i].trim() === '') i += 1;
  const head = lines.slice(i, i + banner.length);
  if (head.join('\n') !== banner.join('\n')) {
    problem(
      `${file} does not open with the banner from ${BANNER_FILE}. Every legal text in this ` +
        `repository must carry it byte-identically, as its first content. Got:\n    ` +
        `${head[0] ?? '(empty file)'}`
    );
  }
}

// ---- 2. README banners -----------------------------------------------------------------
const readme = read('README.md');
if (!readme.includes(STATUS_BANNER)) {
  problem(`README.md must carry the movement status banner verbatim: "${STATUS_BANNER}"`);
}
if (!readme.includes(banner[0])) {
  problem(`README.md must carry the ${BANNER_FILE} draft banner near the top.`);
}

// ---- 3. Placeholder inventory ----------------------------------------------------------
const declared = new Set(Object.keys(JSON.parse(read('placeholders.json')).tokens));
const used = new Map();
for (const file of [...files, 'README.md']) {
  for (const m of read(file).matchAll(/\{\{\s*([A-Z0-9_]+)\s*\}\}/g)) {
    if (!used.has(m[1])) used.set(m[1], new Set());
    used.get(m[1]).add(file);
  }
}
for (const [token, where] of used) {
  if (!declared.has(token)) {
    problem(
      `{{${token}}} is used in ${[...where].join(', ')} but not declared in placeholders.json. ` +
        `Every undecided constant in the draft texts must be listed there with what blocks it.`
    );
  }
}
for (const token of declared) {
  if (!used.has(token)) {
    problem(
      `placeholders.json declares {{${token}}} but nothing uses it — remove it, or the ` +
        `inventory stops being an honest list of what is still undecided.`
    );
  }
}

// ---- 4. Counsel-marker shape -----------------------------------------------------------
for (const file of [...files, 'README.md']) {
  read(file)
    .split(/\r?\n/)
    .forEach((line, i) => {
      // A bare [COUNSEL] or [COUNSEL - …] hides the question. The form carries the question.
      for (const m of line.matchAll(/\[COUNSEL(.{0,3})/g)) {
        if (!m[1].startsWith(':')) {
          problem(
            `${file}:${i + 1} malformed counsel marker — the form is exactly "[COUNSEL: …]" ` +
              `so the open question is always stated where it arises.`
          );
        }
      }
    });
}

// ---- 5. Licence-draft specifics --------------------------------------------------------
const draft = read(LICENSE_DRAFT);
const markers = [...draft.matchAll(/\[COUNSEL:/g)].length;
if (markers < MIN_COUNSEL_MARKERS) {
  problem(
    `${LICENSE_DRAFT} carries ${markers} counsel markers, below the floor of ` +
      `${MIN_COUNSEL_MARKERS}. Nothing in this draft has been resolved by a lawyer; if a ` +
      `marker was removed, say who resolved it and how in the same commit.`
  );
}
if (!/^SPDX-Style-Identifier:\s+\{\{LICENSE_ID\}\}\s*$/m.test(draft)) {
  problem(
    `${LICENSE_DRAFT} must carry the Purpose Notice identifier line ` +
      `"SPDX-Style-Identifier: {{LICENSE_ID}}" (GH-009 canonical token, working form ` +
      `pending OPEN-20).`
  );
}

if (problems > 0) {
  console.error(`\ndraft gate: ${problems} problem(s).`);
  process.exit(1);
}

console.log(
  `draft gate clean — ${files.length} legal texts banner-checked, ` +
    `${declared.size} placeholders accounted for, ${markers} counsel markers in the licence draft.`
);
