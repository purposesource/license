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
one-line sign-off. It says three things: that you have the right to submit your contribution,
that you accept the steward roles the licence itself defines, and — the part to read
carefully — that **your contribution may also be licensed under later versions of the licence
that the steward organization publishes, provided they are materially consistent with the
version in force when you contributed.**

That forward delegation is **bounded**. A later version applied to your contribution under it
may never change any of five things:

1. the free-tier threshold — it may only ever be **widened**;
2. the conversion delay — it may only ever be **shortened**;
3. the charity destination and the no-private-profit rule;
4. the steward organization's character as registrar, never licensor;
5. the existence of the project steward's waiver power.

A change touching any of those reaches only contributions made after it is published, unless
you separately agree.

And the permanent part: **no copyright assignment, ever.** No version of the instrument, and
no version of the licence, may require you to assign copyright or transfer economic ownership
of your work. You keep your copyright.

The full draft, with its open questions, is
[drafts/contributor-sign-off.md](drafts/contributor-sign-off.md). Whether a git trailer
carries enough contract strength or a minimal signed agreement is needed is a question for
counsel — which is why the public promise is about copyright, never about ceremony.

**None of this applies to contributions to *this* repository**, which is documentation and
scripts under the terms in [LICENSE-NOTICE.md](LICENSE-NOTICE.md). No sign-off is asked for
here, because there is no licence in force to delegate forward to.

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
- the steward organization as **registrar, never licensor**;
- **per-licensor** grants;
- the dual AND threshold, group-consolidated, self-assessed, with **no audit clause**;
- the **fixed four-year** Apache-2.0 conversion per version, and the steward-lapse backstop;
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

---

## Before you push

```sh
npm ci
npm run build   # copy lint + link check + honesty gate; about a second
```

CI runs exactly these three gates on every push and pull request, with no secrets and no
write permissions. If a gate fails, the message names the file, the line, and the rule.

---

## Tone

The drafts state their own weaknesses — that the architecture is untested, that scanner
support will be poor at first, that some organizations will bar contribution to
source-available projects. Keep that register. A contribution that makes the record sound
better than it is makes the record worse.
