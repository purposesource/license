// Writes the canonical plain-text rendering of every draft in RENDERINGS.
//
//     npm run render:canonical
//
// The rendering itself lives in lib/render-canonical.mjs and is a pure function; this file
// only does the I/O, so the gate (check-canonical.mjs) and the writer can never disagree
// about what the canonical text is.
//
// Bytes are written with an explicit UTF-8 Buffer and LF-only content: no BOM, and no
// platform newline translation. This file's hash is published on the website and pinned in
// its licence metadata, so a Windows checkout and a Linux runner must produce the same one.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { ROOT } from './lib/files.mjs';
import { BANNER_FILE, RENDERINGS, renderCanonical } from './lib/render-canonical.mjs';

const banner = readFileSync(join(ROOT, BANNER_FILE), 'utf8');

for (const { source, target } of RENDERINGS) {
  const markdown = readFileSync(join(ROOT, source), 'utf8');

  let text;
  try {
    text = renderCanonical(markdown, banner);
  } catch (err) {
    console.error(`::error::render-canonical: ${source} — ${err.message}`);
    process.exit(1);
  }

  const absolute = join(ROOT, target);
  mkdirSync(dirname(absolute), { recursive: true });
  writeFileSync(absolute, Buffer.from(text, 'utf8'));
  console.log(`rendered ${source} -> ${target} (${Buffer.byteLength(text, 'utf8')} bytes)`);
}
