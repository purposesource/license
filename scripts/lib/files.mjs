// Shared file-walking helpers for the three gates. Kept dependency-free on purpose: this
// repository is text, `npm ci` must stay instant, and a gate that cannot run offline is a
// gate that goes inert the first time a registry is slow.
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { join, relative, sep, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

// fileURLToPath, not URL.pathname: on Windows the latter yields "/C:/..." and percent-encodes
// spaces, so a checkout under a path with a space would break every gate at once.
export const ROOT = fileURLToPath(new URL('../../', import.meta.url));

/** Directories never scanned by any gate. */
const SKIP_DIRS = new Set(['.git', 'node_modules', '.github/workflows-cache']);

/**
 * Every file under `dir` (recursively) whose name matches `test`.
 * Paths come back repo-relative with forward slashes, so gate output is identical on
 * Windows and on the Linux runner.
 */
export function walk(dir, test = () => true, out = []) {
  let entries;
  try {
    entries = readdirSync(join(ROOT, dir), { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const rel = dir === '.' ? e.name : `${dir}/${e.name}`;
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name) || SKIP_DIRS.has(rel)) continue;
      walk(rel, test, out);
    } else if (e.isFile() && test(rel)) {
      out.push(rel);
    }
  }
  return out;
}

export function read(rel) {
  return readFileSync(join(ROOT, rel), 'utf8');
}

export function exists(rel) {
  try {
    statSync(join(ROOT, rel));
    return true;
  } catch {
    return false;
  }
}

export function isDir(rel) {
  try {
    return statSync(join(ROOT, rel)).isDirectory();
  } catch {
    return false;
  }
}

/** Resolve `target` (a link written inside `fromFile`) to a repo-relative path. */
export function resolveFrom(fromFile, target) {
  const baseDir = fromFile.includes('/') ? fromFile.slice(0, fromFile.lastIndexOf('/')) : '.';
  const joined = target.startsWith('/')
    ? target.slice(1)
    : posix.normalize(`${baseDir}/${target}`);
  return joined.replace(/^\.\//, '');
}

export function fail(msg) {
  // The ::error:: prefix is GitHub Actions' annotation syntax; it is inert locally.
  console.error(`::error::${msg}`);
}

export { relative, sep, join };
