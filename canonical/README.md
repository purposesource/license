# canonical/ — the plain-text rendering of each draft

> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> marked inline as `[COUNSEL: …]`.

Every file in this directory is a **draft**, and every one of them says so on its first six
lines. `canonical` names the ROLE the file plays — the one text per version that everything
else points at (D10) — not a state of legal readiness. No version has been published, no
identifier has been filed, and no conversion clock is running.

## What these files are

| File | Rendered from |
|---|---|
| [PurposeSource-1.0-draft.txt](PurposeSource-1.0-draft.txt) | [../drafts/purpose-source-license-1.0-draft.md](../drafts/purpose-source-license-1.0-draft.md) |

A canonical text is a **function of its draft**, produced by `npm run render:canonical` and
verified by `npm run check:canonical`, which re-renders and fails on a single differing byte.
So the two can never drift: the draft is the thing people argue about in pull requests, and
the rendering is the same words with the markdown taken out.

The renderer changes syntax and nothing else. It removes headings' `#`, emphasis markers,
code-span backticks, link brackets and table rules; it never rewords, reorders, re-wraps, or
resolves anything. Three things survive untouched, and each is load-bearing:

- **the six-line counsel banner**, copied byte-for-byte from
  [../copy-lint/required-banner.md](../copy-lint/required-banner.md) — the one span the
  renderer refuses to transform, because `scripts/check-drafts.mjs` compares it byte-for-byte
  against that file and a transformed warning is a warning no gate can pin;
- **every `[COUNSEL: …]` marker**, on its own line, so the marker count in the rendering
  equals the count in the draft;
- **every `{{TOKEN}}`** from [../placeholders.json](../placeholders.json). These name
  constants nobody has decided yet — the Association's enterprise identifier, the registry and
  canonical-text URLs, the final identifier string. Resolving one silently would be inventing a decision.

## The bytes are load-bearing

LF line endings, UTF-8 with no byte-order mark, one final newline. Not a style preference:
these files are hashed, and the hash is published. `.gitattributes` pins the line endings in
every working copy on every platform, `check-canonical.mjs` fails on a CR byte or a BOM, and
the renderer refuses to run against a draft that carries CR bytes rather than normalising
them — otherwise the canonical text would depend on the operating system of whoever last
touched the draft.

## How a tag activates the website's gate

The movement's website vendors this text rather than retyping it (FS01-011): it keeps a
byte-identical copy under `src/data/license/`, pins its SHA-256 in the licence metadata, and
serves it from a `.txt` endpoint whose ETag is that hash.

Its `check-license-sync` gate already looks for the upstream text at
`https://raw.githubusercontent.com/purposesource/license/<tag>/canonical/<file>`, where
`<tag>` is the version id. Today it finds nothing and prints a notice naming exactly the tag
and path that would satisfy it; the moment a tag exists at that name, the same code path
fetches the text and fails the website's build on any mismatch. That gate only re-checks a
text the website has already imported. A NEW version reaches the website through its release
importer, which reads GitHub Releases (never bare tags): a `PurposeSource-*` Release whose
tagged commit carries `releases/license-release.v1.json` with the text's path and SHA-256.
Publication is that procedure, not a tag — see [../README.md](../README.md) — and it is the
operator's act, not an engineering one.

## Do not adopt these files

Committing one of these into a project as its licence would misrepresent a working paper as
operative terms. There is nothing to adopt yet. See [../README.md](../README.md) for the
status table and [../LICENSE-NOTICE.md](../LICENSE-NOTICE.md) for how this repository's own
contents are licensed.
