// The markdown → canonical plain text rendering, as a pure function.
//
// WHY THIS EXISTS
// There is exactly one canonical text per version (D10), and the website vendors it rather
// than retyping it (FS01-011). Until now the draft lived here as markdown and the website
// carried a hand-written placeholder — two artefacts, not a copy and its original. This
// module makes the second one a FUNCTION of the first: the canonical text is the draft with
// its markdown syntax removed, and nothing else. No wording is added, removed, reordered or
// reflowed, so "did somebody edit the licence?" is answerable by re-running the render.
//
// WHAT IS PRESERVED, AND WHY EACH MATTERS
//   - the six-line counsel banner, BYTE-FOR-BYTE from copy-lint/required-banner.md. It is
//     the one span the renderer copies rather than transforms, because check-drafts.mjs
//     compares it byte-for-byte against that file, and a banner that survived a
//     transformation would be a DIFFERENT string that no gate could pin. A draft that stops
//     looking like a draft is the failure this repository exists to prevent, so the warning
//     is the last thing that may be reworded by a tool.
//   - every `[COUNSEL: …]` marker, verbatim and on its own line. The line structure of the
//     source is kept exactly, so the marker count in the rendering equals the marker count
//     in the draft and neither can drift from the other.
//   - every `{{TOKEN}}` placeholder, verbatim. These name constants nobody has decided yet;
//     resolving one silently would be inventing a decision.
//
// DETERMINISM
// Same input, same bytes, on every machine:
//   - the transformation is line-local. Nothing re-wraps, nothing consults a clock, a
//     locale, an environment variable, or the filesystem;
//   - upper-casing uses String.prototype.toUpperCase (Unicode default case conversion), NOT
//     toLocaleUpperCase, whose result depends on the host locale (tr-TR maps i to İ);
//   - a CR byte in the input is refused rather than normalised, because a checkout that
//     rewrote line endings would otherwise produce a different canonical text — and this
//     file's bytes are hashed, published, and pinned.
//
// WHAT IS DELIBERATELY NOT IMPLEMENTED
// Underscore emphasis (`_x_`). Every placeholder token name contains underscores
// (`{{STEWARD_ORG_LEGAL_NAME}}`), and a rule that matched `_ORG_` would silently eat the
// middle of a token this repository promises to preserve verbatim. Markdown that the draft
// does not use is not guessed at: the draft is the input, and it is in this repository.

/** Draft → canonical rendering pairs. `check-canonical.mjs` walks exactly this list. */
export const RENDERINGS = [
  {
    source: 'drafts/purpose-source-license-1.0-draft.md',
    target: 'canonical/PurposeSource-1.0-draft.txt',
  },
];

export const BANNER_FILE = 'copy-lint/required-banner.md';

/** Width of a thematic break, matching the house plain-text rule width. */
const RULE_WIDTH = 78;
const RULE = '-'.repeat(RULE_WIDTH);

const trimEnd = (s) => s.replace(/[ \t]+$/, '');

/**
 * Inline markdown → plain text, over a whole run of prose rather than one line at a time.
 *
 * WHY NOT LINE BY LINE
 * The draft is hard-wrapped, and five of its bold spans open on one line and close on the
 * next — `**The software comes with no warranty … to you\narising from … allows.**` is one
 * of them. A line-local rule leaves both markers standing, which is stray markdown in a
 * legal text. So emphasis is matched across newlines. Nothing here ever adds or removes a
 * newline, which is what lets the line pass run afterwards on the same line numbers, and
 * renderCanonical asserts exactly that.
 *
 * WHAT STAYS LINE-LOCAL, AND WHY
 * A link's label and a code span may NOT cross a newline. `[COUNSEL: …]` markers run to
 * several lines and end in `]`; a label allowed to span lines could pair one marker's `[`
 * with a later `]` that happens to be followed by `(` and swallow the question between
 * them. Single-asterisk emphasis is line-local for the same reason: two unrelated
 * asterisks on different lines are not a span.
 *
 * Links are handled first, because their label may itself carry emphasis or a code span.
 * `[x](x)` — every link in the draft, because the drafts link by path — collapses to `x`
 * rather than to the absurd `x (x)`.
 */
function inline(text) {
  return text
    .replace(
      /!?\[([^\]\n]*)\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g,
      (_m, label, target) => (label === target ? label : `${label} (${target})`),
    )
    .replace(/`([^`\n]+)`/g, '$1')
    .replace(/\*\*([^*]+?)\*\*/g, '$1')
    .replace(/\*([^*\n]+)\*/g, '$1');
}

/**
 * Strip inline syntax from every run of prose, leaving fenced blocks untouched.
 *
 * The fence markers are kept in the output for the line pass to drop, so this function and
 * the one after it agree on where the fences are without either guessing.
 */
function inlineOutsideFences(lines) {
  const out = [];
  let prose = [];
  let inFence = false;

  const flush = () => {
    if (prose.length === 0) return;
    out.push(...inline(prose.join('\n')).split('\n'));
    prose = [];
  };

  for (const line of lines) {
    if (/^\s*(?:```|~~~)/.test(line)) {
      flush();
      out.push(line);
      inFence = !inFence;
      continue;
    }
    if (inFence) out.push(line);
    else prose.push(line);
  }
  flush();
  return out;
}

const isThematicBreak = (line) => /^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/.test(line);
const isTableRow = (line) => /^\s*\|.*\|\s*$/.test(line);
const isTableDelimiter = (line) => /^\s*\|[\s:|-]*-[\s:|-]*\|\s*$/.test(line);

const splitRow = (line) =>
  line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());

/**
 * A markdown pipe table → an aligned plain-text table.
 *
 * The delimiter row carries alignment syntax and no content, so it is replaced by a rule of
 * the measured column widths. Columns are padded to their widest cell: a thirteen-row
 * counsel agenda read in a terminal is the reason this is worth the twenty lines.
 */
function renderTable(rows) {
  const width = Math.max(...rows.map((r) => r.length));
  const padded = rows.map((r) => [...r, ...Array(width - r.length).fill('')]);
  const columns = Array.from({ length: width }, (_, i) =>
    Math.max(...padded.map((r) => r[i].length)),
  );
  const line = (cells) => trimEnd(cells.map((c, i) => c.padEnd(columns[i])).join(' | '));
  const [header, ...body] = padded;
  return [line(header), columns.map((n) => '-'.repeat(n)).join('-+-'), ...body.map(line)];
}

/** One non-fence, non-table line → one output line. Inline syntax is already gone by here. */
function renderLine(line) {
  if (isThematicBreak(line)) return RULE;

  const heading = /^(#{1,6})\s+(.*?)\s*#*\s*$/.exec(line);
  if (heading) return trimEnd(heading[2].toUpperCase());

  // Block quotes are the draft's editorial voice — the "why this clause is here" notes and
  // the counsel questions. Plain text has no quote mark, so they are indented: a legal text
  // whose commentary reads as clause text is a defect, not a formatting nit.
  let quoted = line;
  let depth = 0;
  let quote;
  while ((quote = /^\s*>\s?(.*)$/.exec(quoted)) !== null) {
    quoted = quote[1];
    depth += 1;
  }
  if (depth > 0) return trimEnd(quoted === '' ? '' : '  '.repeat(depth) + quoted);

  return trimEnd(line);
}

/**
 * Render a draft markdown text to its canonical plain text.
 *
 * @param {string} markdown the draft, LF-only.
 * @param {string} bannerText contents of copy-lint/required-banner.md.
 * @returns {string} the canonical text, LF-only, one final newline.
 * @throws if the input carries CR bytes, or does not open with the banner.
 */
export function renderCanonical(markdown, bannerText) {
  if (markdown.includes('\r')) {
    throw new Error(
      'the draft contains CR bytes. The canonical rendering is hashed and pinned, so its ' +
        'bytes may not depend on the line endings of whoever last touched the draft — see ' +
        '.gitattributes.',
    );
  }

  const banner = bannerText.trimEnd().split('\n');
  const lines = markdown.split('\n');

  let start = 0;
  while (start < lines.length && lines[start].trim() === '') start += 1;
  const head = lines.slice(start, start + banner.length);
  if (head.join('\n') !== banner.join('\n')) {
    throw new Error(
      `the draft does not open with the banner from ${BANNER_FILE}. The canonical rendering ` +
        'copies it byte-for-byte and cannot invent one.',
    );
  }

  // Pass 1 — inline syntax, over runs of prose, so a bold span that wraps is still a span.
  const source = lines.slice(start + banner.length);
  const body = inlineOutsideFences(source);
  if (body.length !== source.length) {
    throw new Error(
      `the inline pass changed the line count (${source.length} -> ${body.length}). It may ` +
        'only remove syntax, never a line break: the draft is hard-wrapped and the marker ' +
        'count of the rendering depends on its line structure being the draft\'s.',
    );
  }

  // Pass 2 — line-level syntax: fences, tables, headings, block quotes, thematic breaks.
  const out = [...banner];
  let i = 0;
  let inFence = false;

  while (i < body.length) {
    const line = body[i];

    // A fence is syntax; its contents are the Purpose Notice, which is copied into adopting
    // repositories exactly as it stands. Nothing inside is transformed.
    if (/^\s*(?:```|~~~)/.test(line)) {
      inFence = !inFence;
      i += 1;
      continue;
    }
    if (inFence) {
      out.push(trimEnd(line));
      i += 1;
      continue;
    }

    if (isTableRow(line)) {
      const rows = [];
      while (i < body.length && isTableRow(body[i])) {
        if (!isTableDelimiter(body[i])) rows.push(splitRow(body[i]));
        i += 1;
      }
      out.push(...renderTable(rows));
      continue;
    }

    out.push(renderLine(line));
    i += 1;
  }

  while (out.length > 0 && out[out.length - 1] === '') out.pop();
  return `${out.join('\n')}\n`;
}
