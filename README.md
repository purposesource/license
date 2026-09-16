# Purpose Source License — text and development record

**Pre-launch.** This repository is part of the Purpose Source Network build; nothing here is a public commitment yet.

> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> marked inline as `[COUNSEL: …]`.

This repository holds the **draft text of the Purpose Source License and the public record of
how it is being developed** — drafts, decisions, annotations, and the review conversation.
The licence text is the movement's product; this repository is where it is built in the open,
argued with, and versioned.

---

## What the Purpose Source License is

A **source-available** software licence with one idea in it: code stays public and free for
individuals, non-profits, public bodies, education and small organizations, and organizations
above a size threshold need a recorded credential — bought from the steward organization,
which passes the funds on to listed charitable recipients with no distributable private
profit (only the movement's direct costs, capped and published to the invoice, are ever
charged to those funds); or earned by donating that amount directly to a listed charity; or
waived by the project. Every publicly available part of the software becomes available under
Apache-2.0 four years after it first became public, guaranteed in the licence text itself.

**It is not an open source licence** under the Open Source Definition, because it restricts
use by large organizations. The movement says that plainly rather than arguing about the
term: open source is the predecessor this category is built on, and claiming the label would
be both false and self-defeating.

### The Purpose Condition, in plain English

The licence never says anyone must pay. It says what the permissions cover, and permission
holds **while any one of these four things is true**:

1. **You are not acting for the benefit of a large organization.** Individuals and
   organizations below the threshold — fewer than 100 people **and** under USD 1,000,000 of
   prior-year revenue in 2026 dollars, adjusted by a fixed consumer-price-index rule and
   measured across the whole group under common control — need nothing at all. No account,
   no registration, no notification. **"Free for non-profits" is in the text, not only
   here:** a non-profit or public-benefit body, a public educational institution or a public
   body meets the threshold whatever its size (draft §5). Its commercial subsidiaries do not
   inherit that, and work done for a commercial client is judged by the client.
2. **The organization holds a current Entitlement** recorded in the steward's public registry
   — the credential it buys, under an ordinary contract that has nothing to do with the
   licence. An Entitlement covers software by name, or because it covers every work under
   the licence; coverage never depends on a project being registered.
3. **The organization holds a Waiver** recorded in that registry, granted by the project
   itself. Waivers are public and free; private exemptions do not exist in the design.
4. **The organization holds a Donation Entitlement** — recorded when it donates the schedule
   amount directly to a listed charity. That money never passes through the steward.

If none of the four is true, there is no permission for the use — it is unlicensed in the
ordinary copyright sense, with a **60-day cure window** that starts on a defined day (the end
of the tax year you grew past the threshold in; the day of an acquisition; the day a
credential ended or a Waiver was revoked; otherwise the first day of uncovered use) so that
growing past the threshold never makes anyone an overnight infringer. And whatever an organization was covered for, it keeps: **a version is vested if
it was published on or before the end of the credential's term**, permanently, whatever
happens afterwards to the credential, the project, or the steward. The only exceptions are a
credential recorded as void for fraud, forgery or a compromised key, and a term refunded.
Vesting is permission from now on; it does not excuse use before the credential.

What the licence deliberately does **not** contain: no copyleft, no share-alike, no network
clause, no disclosure duty, no audit right, no reporting duty, no prices, no governing-law
clause, and no obligation of any kind on the adopter's own code. The clause-level proof is in
[ANNOTATIONS.md](ANNOTATIONS.md).

---

## Status: nothing here is counsel-issued

Stated plainly, because everything else in this repository depends on it being understood:

| | |
|---|---|
| **Counsel engaged?** | No. |
| **Any text drafted or reviewed by a lawyer?** | No — not one line. |
| **Licence published?** | No. No version, no tag and no release exists, so no four-year conversion clock is running. |
| **Steward organization formed?** | The **Purpose Source Association** held its founding assembly on 16 September 2026. Its commercial-register entry, and with it its enterprise identifier (UID), are pending. |
| **Demand gate (D26) passed?** | Yes — 14 September 2026 (movement decision D39, on the operator's confirmation; the evidence filing is pending). What remains before a full drafting engagement is counsel's own work: the three jurisdiction memos (US, CH, DE) and the engagement itself. |
| **Registry, credentials, coverage lookup built?** | The curated registry entries (`registry-v0`) are public. No credential has been issued. The coverage lookup exists as a specification (`spec`, cov-v1) and is not operating; where it and the licence disagree, the licence governs and the specification follows (see [decisions/](decisions/), D48). |
| **Identifier registered with SPDX?** | No. The form is decided: `LicenseRef-PurposeSource-1.0`, valid SPDX for a licence not on the list. Inclusion on the list is requested later, when adoption exists; scanners may flag the identifier until then. |
| **Can I adopt this in my project?** | No. Nothing is published, and adopting a draft would misrepresent it. |

Every open drafting question is marked inline as `[COUNSEL: …]`, and each draft collects its
own markers into a counsel agenda at the end. Three jurisdiction memos (US, CH, DE) on the
condition architecture are prerequisites for publishing anything, and none exists.

**Publication is a procedure, not a tag.** When a version is published, the canonical text is
rendered and committed; a release manifest (`releases/license-release.v1.json` — version id,
status `working-draft` or `counsel-issued`, the text's path and SHA-256) is committed beside
it; and a GitHub Release whose tag equals the version id (which begins `PurposeSource-` and
is also the canonical file's name) is published on that commit. The website reads GitHub
Releases, imports only releases that carry the manifest, and pins the
text's hash; the platform vendors the same bytes. A tag alone is not the whole procedure, and
**no release is made now** — this repository has no tag and no release. Until the movement's
own gate opens, a working paper is not an announcement, and nothing is announced before it
exists.

---

## How a project adopts

**Not today** — no version is published, and the banner on every draft forbids committing it
anywhere. When a version is published, adoption is one commit:

1. Copy the canonical text, unchanged, into the repository as `LICENSE` — or, under
   [REUSE](https://reuse.software/), as `LICENSES/LicenseRef-PurposeSource-1.0.txt`.
2. Put the identifier line `SPDX-License-Identifier: LicenseRef-PurposeSource-1.0` in the
   source files, or declare it once in `REUSE.toml`.

A URL alone is not enough: REUSE and the scanners want the text in the repository, and the
licence's own §12 lets a project say it is under the licence only when the text it ships is the
published text, unchanged. There are no per-project parameters to fill in, and no manifest is
required — the licence file is self-sufficient.

---

## What is in here

| Path | What it is |
|---|---|
| [drafts/purpose-source-license-1.0-draft.md](drafts/purpose-source-license-1.0-draft.md) | The licence draft (`1.0-draft.2`) — the decided architecture in short, plain clauses, with 14 isolated counsel questions and a revision log |
| [drafts/contributor-sign-off.md](drafts/contributor-sign-off.md) | The contributor sign-off draft: right-to-submit warranty, steward-role acceptance, and bounded forward delegation with a six-item immutable core — plus the permanent promise that contributors keep their copyright |
| [canonical/](canonical/) | The plain-text rendering of each draft — the one text per version everything else points at, produced from the draft by `npm run render:canonical` and re-verified byte-for-byte by CI. Still a draft, banner and all |
| [ANNOTATIONS.md](ANNOTATIONS.md) | Plain-English walkthrough, clause by clause, the "why" behind each clause, and the proof that the three corporate fears are absent |
| [FAQ-OSPO.md](FAQ-OSPO.md) | The legal-review pack: what triggers payment, what happens at year four, what if the steward dies, what the fee buys, and whether the licence qualifies as open source (it does not) |
| [decisions/](decisions/) | The trace from text back to the decisions it implements, including D48 (the operator decisions of 16 September 2026) |
| [placeholders.json](placeholders.json) | Every `{{…}}` constant the drafts still write, with its status and what blocks it. CI fails if a draft uses one that is not listed here, or lists one nothing uses |
| [copy-lint/banned.txt](copy-lint/banned.txt) | The banned-copy patterns CI enforces over this repository (a hand-synced mirror of the movement's canonical list) |
| [LICENSE-NOTICE.md](LICENSE-NOTICE.md) | How this repository's own contents are licensed — **not** the Purpose Source License |

The drafts still carry a few `{{…}}` tokens: the Association's enterprise identifier (pending
the register entry), the registry and canonical-text URLs, and the identifier string whose
form is decided but whose SPDX listing is not. The Association's name is written as a literal.
The finished text has **zero** fill-in fields: one canonical text per version, identical in
every copy, for every project. The tokens mark undecided constants, never per-project
parameters.

---

## How to run the checks

There is nothing to compile — this repository is text. `npm run build` runs the same gates CI
runs, and takes about a second:

```sh
npm ci          # no dependencies; installs nothing, verifies the lockfile
npm run build   # == npm run check
```

Five gates, each with its own failure modes documented in the script header:

| Command | Gate | Fails on |
|---|---|---|
| `npm run lint:no-records` | The private recording store stays out | any path shaped like the Association's private evidence store |
| `npm run lint:copy` | Copy lint over every prose file | any pattern in `copy-lint/banned.txt`; zero files scanned; an unparseable pattern |
| `npm run lint:links` | Internal links and heading anchors across all Markdown | a missing target; an anchor matching no heading; a non-https external link; zero links found |
| `npm run lint:drafts` | The honesty gate | a legal text missing the draft banner; a missing README banner; an undeclared or unused `{{…}}` token; a malformed counsel marker; too few counsel markers in the licence draft; a missing Purpose Notice identifier line |
| `npm run check:canonical` | The canonical rendering | a `canonical/*.txt` that is not byte-identical to what its draft renders to; a CR byte or a BOM in one; a canonical text no draft produces |

The honesty gate is the one that matters. A draft that stops *looking* like a draft — a banner
deleted in a tidy-up, a counsel marker quietly resolved by someone with no standing to
resolve it — is a one-line diff, and would turn a working paper into something a reader could
mistake for operative legal text. So it is a build failure.

---

## How to comment

Comment on the drafts. Argument is what this repository is for, and it is cheaper now than
after publication.

- **A drafting concern** — wording that does not do what it is meant to, an ambiguity, a
  clause that would fail review at your organization: open a
  [drafting comment](.github/ISSUE_TEMPLATE/drafting-comment.yml) issue. Quote the file and
  section; say what breaks and, if you can, what would fix it.
- **A new question for counsel** — a legal issue the drafts have not spotted: open a
  [counsel question](.github/ISSUE_TEMPLATE/counsel-question.yml) issue. These become
  `[COUNSEL: …]` markers in the text.
- **A wording suggestion you can express as a diff** — open a pull request against the draft,
  with the reasoning in the description. Read [CONTRIBUTING.md](CONTRIBUTING.md) first: there
  are rules about what may be changed and what may not.

Two things this repository cannot accept:

1. **Legal advice, or anything that would create a lawyer-client relationship.** Comments here
   are public argument about a public draft. If you are counsel and want to be engaged,
   nothing on an issue tracker does that.
2. **Confidential material.** Do not paste your organization's internal policies, contracts,
   or advice. Describe the requirement instead.

If your comment is "this whole structure does not work, and here is why" — that is the most
valuable issue this repository can receive. The architecture is untested by design admission,
and the failure modes are written down rather than hidden:
[FAQ-OSPO.md](FAQ-OSPO.md) is where they are collected.

---

## What this repository is NOT

- **Not a licence you can use.** Nothing here is operative. See the banner.
- **Not counsel-issued, and not legal advice** to anyone, for any purpose.
- **Not an announcement.** No launch, no availability, no date is claimed.
- **Not the platform.** The registry, the coverage lookup, the credentials, and the site live
  in other repositories under `github.com/{{GITHUB_ORG}}`. The registry is there and public —
  the curated entries in `registry-v0`, the contract set they validate against in `spec`. The
  site is a private preview until it is published. The coverage lookup and the credentials are
  later-phase components and do not exist yet. *(Corrected 2026-09-08 — the bullet used to end
  by saying that none of the four existed yet, which was true when it was written and is now
  true of two of them.)*
- **Not a decision register.** [decisions/](decisions/) is an index that traces text to
  decisions; the register itself is the movement's own internal document.
- **Not a place for confidential or privileged material**, ever.
