// Link check over the repository's Markdown. This repository ships no build output, so the
// links that matter are the internal ones between documents and their headings — the exact
// links a reviewer follows when tracing a clause to the decision that produced it.
//
// Four independent failure modes, all fatal:
//   1. an internal link whose target file or directory does not exist,
//   2. an internal anchor that matches no heading in the target file,
//   3. a scanned link count of zero (a gate that cannot fail is worse than no gate),
//   4. a link that points outside the repository root.
//
// External http(s) links are NOT fetched: the gate must pass offline and must never depend
// on third-party uptime. They are validated for shape only, and every one of them is listed
// in the run summary so a reviewer can see exactly which outside sources the drafts lean on.
import { walk, read, exists, isDir, resolveFrom, fail } from './lib/files.mjs';

const MD = (rel) => rel.endsWith('.md') && !rel.startsWith('node_modules/');

// [text](target) and bare <target> autolinks, skipping fenced code blocks.
const LINK_RE = /\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g;

/** GitHub's heading-slug algorithm, close enough for our own headings. */
function slug(heading) {
  return heading
    .trim()
    .toLowerCase()
    .replace(/[`*_~]/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, '-');
}

const headingCache = new Map();
function headingsOf(rel) {
  if (!headingCache.has(rel)) {
    const set = new Set();
    let inFence = false;
    for (const line of read(rel).split(/\r?\n/)) {
      if (/^\s*```/.test(line)) inFence = !inFence;
      if (inFence) continue;
      const m = /^(#{1,6})\s+(.*?)\s*#*\s*$/.exec(line);
      if (m) {
        const base = slug(m[2]);
        // Duplicate headings get -1, -2 … suffixes, same as GitHub.
        let candidate = base;
        let n = 0;
        while (set.has(candidate)) candidate = `${base}-${++n}`;
        set.add(candidate);
      }
      const explicit = /<a\s+(?:id|name)="([^"]+)"/i.exec(line);
      if (explicit) set.add(explicit[1].toLowerCase());
    }
    headingCache.set(rel, set);
  }
  return headingCache.get(rel);
}

function contentOutsideFences(text) {
  let inFence = false;
  return text.split(/\r?\n/).map((line) => {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      return '';
    }
    return inFence ? '' : line;
  });
}

const files = walk('.', MD);
let internal = 0;
let broken = 0;
const external = new Set();

for (const file of files) {
  const lines = contentOutsideFences(read(file));
  lines.forEach((line, i) => {
    for (const m of line.matchAll(LINK_RE)) {
      const raw = m[1];
      const where = `${file}:${i + 1}`;

      if (/^(https?:)?\/\//i.test(raw)) {
        if (!/^https:\/\//i.test(raw)) {
          fail(`${where} external link is not https — ${raw}`);
          broken += 1;
        }
        external.add(raw);
        continue;
      }
      if (/^(mailto:|tel:)/i.test(raw)) {
        external.add(raw);
        continue;
      }

      internal += 1;
      const [pathPart, anchor] = raw.split('#');

      if (!pathPart) {
        // Same-file anchor.
        if (anchor && !headingsOf(file).has(decodeURIComponent(anchor).toLowerCase())) {
          fail(`${where} anchor #${anchor} matches no heading in this file`);
          broken += 1;
        }
        continue;
      }

      const target = resolveFrom(file, decodeURIComponent(pathPart));
      if (target.startsWith('..')) {
        fail(`${where} link escapes the repository root — ${raw}`);
        broken += 1;
        continue;
      }
      if (!exists(target)) {
        fail(`${where} link target does not exist — ${raw} (resolved to ${target})`);
        broken += 1;
        continue;
      }
      if (anchor && !isDir(target)) {
        if (!target.endsWith('.md')) continue; // anchors only checkable in Markdown
        if (!headingsOf(target).has(decodeURIComponent(anchor).toLowerCase())) {
          fail(`${where} anchor #${anchor} matches no heading in ${target}`);
          broken += 1;
        }
      }
    }
  });
}

if (internal === 0) {
  fail('the link check found zero internal links — it would pass vacuously.');
  process.exit(1);
}

if (broken > 0) {
  console.error(`\nlink check: ${broken} problem(s) across ${files.length} Markdown files.`);
  process.exit(1);
}

console.log(
  `link check clean — ${internal} internal links in ${files.length} files; ` +
    `${external.size} external link(s) not fetched:`
);
for (const url of [...external].sort()) console.log(`  ${url}`);
