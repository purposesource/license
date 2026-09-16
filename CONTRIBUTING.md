# Contributing to the licence development record

**Pre-launch.** This repository is part of the Purpose Source Network build; nothing here is a public commitment yet.

> **Nothing in this repository is operative, counsel-issued, or legal advice.** No lawyer has
> drafted or reviewed any text here. Contributing to a draft does not make it a licence, and
> nothing on this issue tracker creates a lawyer-client relationship with anyone.

You are contributing to a **development record**, not to software. The valuable contributions
are arguments: a clause that does not do what it claims, an ambiguity a hostile reader could
exploit, a requirement your organization's review would fail the licence on.

---

## The forward-delegation clause — read this before you contribute anywhere in the movement

This flag lives here because the record requires it to be prominent and in plain language
(LEG-035), and because it is the one thing a contributor to *any* Purpose Source project
should understand before they contribute.

The designed contribution instrument for projects using the Purpose Source License is a
**contributor sign-off** — by design, one line in the commit message. It says three things:
that you have the right to submit your contribution, that you accept the steward roles the
licence itself defines, and — the part to read carefully — that **your contribution may also
be licensed under later versions of the licence that the Purpose Source Association (or the
successor it has publicly designated) publishes, provided they are materially consistent with
the version in force when you contributed.**

That forward delegation is **bounded**. A later version applied to your contribution under it
may never change any of six things:

1. the free-use threshold — it may only ever be **widened**;
2. the conversion delay — the time after which the software becomes available under
   Apache-2.0 may only ever be **shortened**, never removed;
3. the charity destination and the no-private-profit rule;
4. the Association's character as registrar, never a licensor of code it registers for others
   (scoped 2026-09-05 per movement decision D29 §6.3 and written into licence §2 as "for
   others" on 2026-09-16 — see [ANNOTATIONS.md](ANNOTATIONS.md) §2; superseded phrase, kept as
   history: "registrar, never licensor");
5. the existence of the project steward's free-of-charge waiver power;
6. the steward-lapse backstop — its existence, and its clock, which may only ever be
   **shortened** (added 2026-09-16, D46).

A change touching any of those reaches only contributions made after it is published, unless
you separately agree.

And the permanent part: **no copyright assignment, ever.** No version of the instrument, and
no version of the licence, may require you to assign copyright or transfer economic ownership
of your work. You keep your copyright.

The full draft, with its open questions, is
[drafts/contributor-sign-off.md](drafts/contributor-sign-off.md). Whether a git trailer
carries enough contract strength or a minimal signed agreement is needed is a question for
counsel — which is why the public promise is about copyright, never about ceremony.

### What you are signing off, in practice

Before you sign off a contribution to a project under the licence, check which of these you
are dealing with:

- **Your own original work** — the normal case; the sign-off states it.
- **Work your employer owns** — if you wrote it in your job, or under a contract that gives
  the rights to someone else, get that party's permission first. The sign-off cannot give
  what you do not hold.
- **Code you copied from a permissively licensed project** — keep its licence and its
  notices with it. Licence §11 says such material stays under the terms it came with; the
  Purpose Source License covers only the contributions made under it.
- **Dependencies whose licences do not fit** — that is not the licence's job to solve. It is
  the project's job, in its own dependency policy, before the code is merged.

**None of this applies to contributions to *this* repository**, which is documentation and
scripts under the terms in [LICENSE-NOTICE.md](LICENSE-NOTICE.md). No sign-off is asked for
here, because there is no licence in force to delegate forward to.

### The identifier adopting projects will use

When a version of the licence is published — none is today — adopting projects will mark
files with `SPDX-License-Identifier: LicenseRef-PurposeSource-1.0`. That is the SPDX form for
a licence not on the SPDX list (decided 2026-09-16, D48 item 9); inclusion on the list is
requested later, when adoption exists, and scanners may flag the identifier until then. The
short adoption steps are in the README's ["How a project adopts"](README.md#how-a-project-adopts).
Nothing may be adopted from this repository today.

---

## What to open

| You have | Open |
|---|---|
| A concern about wording, scope, or a clause that would fail your review | A [drafting comment](.github/ISSUE_TEMPLATE/drafting-comment.yml) issue |
| A legal question the drafts have not spotted | A [counsel question](.github/ISSUE_TEMPLATE/counsel-question.yml) issue — these become `[COUNSEL: …]` markers |
| A wording change you can express as a diff | A pull request against the draft, with the reasoning in the description |
| An error in the decision trace (text cites a decision it does not implement) | A drafting comment; mis-traces are defects |

Always quote the **file and section** (for example `drafts/purpose-source-license-1.0-draft.md`
§4). Section numbers are stable within a draft revision.

---

## What may and may not change in a pull request

**Open to argument — everything about how the text achieves the decisions:**

- wording, structure, definitions, clause order, readability;
- the plain-English annotations and the review pack;
- new `[COUNSEL: …]` markers (adding one is always welcome, and never needs permission);
- the decision trace, where it is wrong.

**Not changeable here — the decided architecture.** These are recorded decisions, and a pull
request that quietly reverses one will be closed with a pointer to
[decisions/](decisions/). Argue with the decision in an issue instead; several are explicitly
pre-registered for revisit, and the register records the disputes rather than hiding them:

- permission scoped by a **condition**, never a payment obligation in the licence;
- the Association as **registrar, never a licensor of code it registers for others**
  (scoped 2026-09-05 per movement decision D29 §6.3 and written into licence §2 as "for others"
  on 2026-09-16 — see [ANNOTATIONS.md](ANNOTATIONS.md) §2);
- **per-licensor** grants;
- the dual AND threshold, group-consolidated, self-assessed, with **no audit clause**; the
  non-profit, education and public-body limb; no investment prong (D48, 2026-09-16);
- the **fixed four-year** Apache-2.0 conversion, attached to each publicly available part of
  the software (D48 item 4), and the steward-lapse backstop;
- coverage that attaches to the licence, not to registration (D48 item 5);
- **one canonical text** per version, zero per-project parameters;
- **no copyright assignment, ever**;
- never self-describing as open source, and never stapling purpose terms onto an existing
  open-source licence.

**Never acceptable, and closed on sight:**

- removing or weakening a draft banner, or removing a `[COUNSEL: …]` marker without saying in
  the same commit who resolved it and how (CI fails on both);
- adding a plausible-looking value for a `{{TOKEN}}` that nobody has decided — put it in
  `placeholders.json` with what blocks it instead;
- language that reads as operative, available, launched, or endorsed;
- any impact figure, franc amount, or adoption number (nothing is claimed before it is real,
  and there is no ledger row yet);
- confidential, privileged, or internal material from any organization, including yours.

*(Dated note, 2026-09-11: the process above gained its mechanical half. `.github/CODEOWNERS`
is new on this date and names the organisation team `@purposesource/stewards` on `drafts/`,
`canonical/`, `placeholders.json` and `copy-lint/` — so a pull request touching the text, the
substitution table or the pattern file asks a steward to read it rather than relying on
whoever happens to look. Read that file's own note before you rely on it: measured read-only
the same day, the team holds no repository access yet and this branch carries no
required-review rule, so the review is **requested** and not yet **required**. Both are
operator acts, in that order. A code owner here is an editorial reader against the recorded
decisions, never counsel: nothing in this repository becomes operative because someone
approved a pull request.)*

---

## Before you push

```sh
npm ci
npm run build   # no-records gate + copy lint + link check + honesty gate + canonical check; about a second
```

CI runs exactly these five gates on every push and pull request, with no secrets and no
write permissions. If a gate fails, the message names the file, the line, and the rule. If you
changed the licence draft, run `npm run render:canonical` first, or the canonical check fails.

---

## Tone

The drafts state their own weaknesses — that the architecture is untested, that scanner
support will be poor at first, that some organizations will bar contribution to
source-available projects. Keep that register. A contribution that makes the record sound
better than it is makes the record worse.
