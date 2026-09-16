> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> marked inline as `[COUNSEL: …]`.

# Purpose Source License 1.0 — working draft

**Draft status:** pre-counsel working paper · **This draft:** `1.0-draft.2` · **Date of this revision:** 2026-09-16

---

## 1. Purpose Notice

These lines are part of the licence text and identical in every copy:

```
SPDX-License-Identifier: {{LICENSE_ID}}
Steward Organization:    Purpose Source Association
UID:                     {{STEWARD_ORG_UID}}
Steward Registry:        {{STEWARD_REGISTRY_URL}}
Canonical text:          {{LICENSE_TEXT_URL}}
```

---

## 2. Definitions

**These terms** are this text. **The software** is the work they come with; **a part** is any
material in it.

A part is **made available to the public** on the first day it is publicly obtainable under
these terms — in a public commit, tag, release or package. A date an author wrote into a file
does not count.

**A version** is a release that the project — the people who maintain the software's canonical
repository — publishes and identifies as such; it is **published** when the project first makes
it available to the public.

**You** are the individual or organization exercising permissions under these terms.

**An organization's group** is that organization plus all organizations that have control
over, are under the control of, or are under common control with it.

**Control** means ownership of substantially all the assets of an entity, or the power to
direct its management and policies by vote, contract, or otherwise. Control can be direct or
indirect.

> [COUNSEL: "control" is the PolyForm Small Business 1.0.0 definition copied verbatim, and
> "group" follows PolyForm's "your company" (LEG-018); attribution is in LICENSE-NOTICE §4.
> Confirm the attribution form, and whether Swiss or German group-of-companies terminology
> should be added alongside it rather than instead of it.]

**A Large Organization** is an organization that does not meet the threshold in §5.

**The Steward Organization**, called **the Association** here, is the Purpose Source
Association named in §1, or the successor it has publicly designated under §8. In software it
registers for others it is never a licensor, sublicensor or rights-holder; the permissions in
§3 come from the software's own licensors. Where it owns registered software, it is an
ordinary licensor of it and says so.

**The Steward Registry** is the public record the Association keeps at
{{STEWARD_REGISTRY_URL}}, with its transparency log and that log's published mirrors held
outside the Association's control. Anyone may read it without an account. A credential is
**recorded** when published there, and counts from that day.

**An Entitlement** is a credential recorded for an organization and issued by the
Association under a separate agreement between them, which these terms neither create nor
price. **A Donation Entitlement** is a credential recorded for an organization that donated
the amount the published schedule states directly to a charity the Association lists; the
money never passes through the Association. Each covers the software it names, or every work
licensed under these terms if it says so.

**A Waiver** is a record the Project Steward makes for the software, naming an organization
that may use it without an Entitlement.

**A credential** is any of the three. Its **term** is what the Steward Registry records for
it: for an Entitlement or Donation Entitlement, the start date, end date and schedule version
recorded at issue, which no later schedule change alters; for a Waiver, until it is recorded
as revoked or expired. A credential is **current** on every day of its term.

**The Project Steward** is whoever holds administrative control of the software's canonical
repository, or whoever they designate through the Steward Registry's verified claim process.
A designation made anywhere else has no effect.

---

## 3. Grants

Each licensor of the software grants you, subject to §4:

- a **copyright licence** under all copyright they hold in their contributions, to do
  everything with the software that would otherwise infringe it; and
- a **patent licence**, to make, have made, use, offer to sell, sell, import and otherwise
  transfer the software, under the patent claims they can license that are necessarily
  infringed by their contributions alone or combined with the software they contributed them
  to.

The grants are per licensor and non-exclusive. Nobody grants on anyone else's behalf, and
nobody assigns copyright to anyone.

**Patent defence.** If you file patent litigation against anyone (including a cross-claim or
counterclaim in a lawsuit) alleging that the software, or a contribution in it, infringes a
patent or contributes to infringing one, every patent licence granted to you under these
terms for that software ends on the day you file. Your copyright licences and vested versions
are unaffected.

> [COUNSEL: the patent grant and its defence trigger follow Apache-2.0 §3 so that
> conversion under §7 changes nothing for patents. Confirm the alignment is close enough to
> achieve that, and confirm the per-licensor grant reaches claims held by a contributor's
> employer.]

---

## 4. The Purpose Condition

The permissions in §3 apply only while at least one of the following is true:

- **(a)** you are not exercising them for the benefit of a Large Organization;
- **(b)** the Large Organization for whose benefit you exercise them holds a current
  Entitlement covering the software;
- **(c)** that organization holds a current Waiver for the software; or
- **(d)** that organization holds a current Donation Entitlement covering the software.

You exercise permissions **for the benefit of** an organization when you use the software as
that organization, or in work you do for it as its employee, contractor or service provider —
the client is judged, not the contractor. Incidental benefit does not count, nor does merely
passing the software on.

Use for the benefit of a Large Organization while none of (a) to (d) is true is simply
unlicensed: no promise is broken, there is no permission. These terms oblige nobody to pay
anyone; money, if any, changes hands under the separate agreement in §2, to which the
licensors are not parties. The cure in §6 is the only grace these terms know.

> [COUNSEL: this is the load-bearing clause. Under US law the line between a licence
> condition and a contractual covenant turns on the nexus to the exclusive rights (MDY v.
> Blizzard, 9th Cir. 2010); a condition satisfied by a third party's registry record has a
> weaker nexus than a classic scope limit. Footnote 4 of that opinion distinguishes payment
> conditions in commercial copyright licences, so the case neither validates nor defeats
> this model. Assess the grant as actually drafted: its formation, the enforcement route, and
> the fallback remedy if a court reads §4 as a covenant. Memos required in US, CH and DE
> before publication (LEG-051).]

> [COUNSEL: limb (d)'s proof standard is open (OQ-LEG-1 / OPEN-27): what documentation of a
> direct donation is sufficient for the registry to record a Donation Entitlement, who bears
> the consequence of a false record, and what is the payer-side tax character in the main
> payer jurisdictions. The clause deliberately says only that the credential must be
> recorded; the evidentiary standard belongs in the registry's published terms.]

---

## 5. The threshold

An organization meets the threshold — and so is not a Large Organization — if two things were
true in its prior tax year, counted across its whole group: fewer than 100 individuals in
total worked for it as employees and independent contractors, **and** its total revenue was
less than the revenue limit.

**The revenue limit** is USD 1,000,000 in 2026 dollars, adjusted for inflation according to
the United States Bureau of Labor Statistics' consumer price index for all urban consumers,
U.S. city average, for all items, not seasonally adjusted, with 1982–1984=100 reference base.
To find the limit for a tax year, multiply USD 1,000,000 by the latest calendar-year average
of that index published when the tax year ended, divide by the 2026 calendar-year average, and
round to the nearest USD 1,000. The limit never falls below USD 1,000,000. If the Bureau
discontinues the series, use the successor series it designates, or else the last limit so
calculated. Other currencies convert at the tax year's average exchange rate published by the
central bank that issues the currency. The Association publishes the current limit yearly for
information; the calculation governs.

**Non-profits, education and public bodies** meet the threshold whatever their size: a
non-profit or public-benefit body under the law it is organized under, a public educational
institution, or a public body performing public functions. A commercial organization such a
body controls does not inherit this and is measured like any other, and work done for a
commercial client is judged by that client under §4.

You assess the threshold yourself. **Nobody may audit you under these terms**: neither a
licensor nor the Association may demand your books, headcount or any certification. **These
terms contain no prices, tiers or bands**; those are in the schedule the Association
publishes, and a buyer certifies its own band in its purchase, outside these terms.

> [COUNSEL: confirm the counting rules a real filer will ask about: part-time individuals,
> agency staff, mid-year headcount changes, a group whose members have different tax
> year-ends, a first tax year shorter than twelve months, and an organization that has no
> prior tax year yet. Confirm that "non-profit or
> public-benefit body under the law it is organized under" is determinable by a licensee in
> the US, CH, DE and the main adopter jurisdictions, and that the inflation mechanic as
> drafted is unambiguous.]

---

## 6. Cure

When none of (a) to (d) in §4 is true, the permissions in §3 still continue for 60 days from:

- **(a)** where an organization grew past the threshold, the end of the tax year in which it
  first exceeded it;
- **(b)** the day an acquisition, merger or other change of control made an organization a
  Large Organization;
- **(c)** the day a credential's term ended or a Waiver was recorded as revoked; or
- **(d)** otherwise, the first day the software was used while none of (a) to (d) in §4 was
  true.

If one of (a) to (d) in §4 becomes true again within the 60 days, the permissions continue
uninterrupted. If none does, they end after the 60th day. They resume the moment one becomes
true again, for use from then on, and this section applies afresh to any later failure.
Vested versions need no cure.

> [COUNSEL: confirm that the four trigger days are determinable by a licensee without
> litigation, that (a) works with a threshold measured on the prior tax year (the failure is
> discoverable only after that year closes), and how (b) applies to a target organization
> mid-acquisition. This is the difference between a workable cure window and a trap.]

---

## 7. These terms become Apache-2.0

Each part of the software becomes available to everyone under the Apache License, Version
2.0, four years after the day it was first made available to the public under these terms, in
any form. From that day, §4 no longer restricts anyone's use of that part.

Each part has its own clock; material added later starts its own when first made available to
the public. Forking, copying, repackaging or re-releasing an existing part never restarts its
clock.

This is fixed and licence-wide: nobody — no project, no licensor, not the Association — can
extend it for anything already public.

> [COUNSEL: draft the conversion as a present grant with a deferred effective date, so that
> it survives the Association's dissolution, a licensor's later choices and the transfer of a
> licensor's copyright to a successor in title or an estate, and so that no part's conversion
> can be undone. Confirm the "first made available to the public" day is provable from public
> records (a commit, tag, release or package) and cannot be set by an author's own timestamp.
> Confirm the interaction with Apache-2.0 §4's notice requirements and with §11 for code that
> arrived from a permissively licensed predecessor.]

---

## 8. If the Association lapses

The Purpose Condition in §4 lapses — the permissions in §3 apply from then on without it, for
everyone — on the earliest of these days:

- **(a)** the day the Association ceases to exist, if no successor has been publicly
  designated under this section;
- **(b)** the last day of any 12 consecutive months in which the Association recorded no
  Entitlement and no Donation Entitlement, if no successor has been publicly designated under
  this section; or
- **(c)** the day named in a **declaration of lapse**: a signed record, published in the
  Steward Registry and its transparency log, by which the Association declares that it has
  ceased to issue Entitlements and Donation Entitlements and names that day. It cannot be
  withdrawn, and the day cannot be moved later.

Anyone may determine whether (a), (b) or (c) has occurred from the Steward Registry's
transparency log and its published mirrors held outside the Association's control. A Waiver
is the Project Steward's record, not the Association's, and keeps nothing in (b) running.

A successor is **publicly designated** only by a signed record, published like a declaration
of lapse, naming an organization that has accepted in writing. From that day it is the Steward
Organization for every purpose of these terms. A successor that records no Entitlement and no
Donation Entitlement for 12 consecutive months counts as none, and (b) runs against it.

> [COUNSEL: the lapse must be objectively determinable by a licensee without litigation. The
> evidentiary handle drafted above is the transparency log and its mirrors outside the
> Association's control (statutes Art. 9 para. 4 and Art. 23 para. 5 — the archive
> custodian); confirm it suffices, and say what a licensee may rely on if the log and a
> mirror disagree. Draft the formality of the declaration of lapse and of the successor
> designation — the resolution of the board or of the liquidators cited in the record, two
> signatures under the published key set, irreversibility — so that a compromised key or a
> hostile board cannot do what the published constitution forbids, and a paper successor
> cannot reset the clock. Confirm (i) how the clock in (b) runs where no Entitlement was ever
> recorded — the intent is from the later of this text's first publication and the last
> recorded credential; and (ii) whether the identity anchor in §1 — the legal name, the UID
> and the registry address — keeps "the organization named in §1" verifiable after a name
> change, a merger with universal succession or the loss of the domain, or whether a key
> thumbprint must be added.]

---

## 9. Recorded credentials, and what stays yours

A current credential satisfies §4 for the software it covers, for every licensor's grant, and
vests versions permanently: **a version is vested for an organization if it was published on
or before the end of that organization's credential's term.**

Once vested, nothing takes a version away — not the project leaving the registry, not a
Waiver revoked, not a term ending, not a schedule change, not the Association failing.

**The only exceptions.** A credential the Steward Registry records as void — obtained by
fraud, forged, or issued through a compromised signing key — vests nothing. A credential
cancelled for a refund vests nothing for the refunded term. Two things are not exceptions: an
honest under-certification of a revenue band is a matter for the purchase agreement, never a
loss of vesting; and patent litigation under §3 ends only the patent licence, never a vested
version.

**What vesting is not.** Vesting is permission to use covered versions from now on. It does
not excuse use before the credential was recorded; whoever offers that offers it in their own
agreement, never through these terms.

Everyone who licenses their contributions on these terms accepts that recorded Entitlements,
Donation Entitlements and Waivers satisfy §4 for their grant. The Project Steward may record a
Waiver, free of charge, and may revoke it going forward.

> [COUNSEL: the sentence above is the in-licence bootstrap of the steward roles — a licensor
> accepting, by using this text, that a third party's registry record satisfies a condition
> in their own grant. Confirm its formation and prominence under Swiss and German
> standard-terms doctrine (AGB), and under drive-by-contributor conditions where the
> contributor's only act is a pull request. Confirm that a Waiver travels with the work as it
> stood when granted while an Entitlement travels with the registry, and draft the fork and
> hostile-takeover cases (OQ-LEG-3 / OPEN-29; LEG-040). Confirm the position of an
> organization that relied in good faith on a credential later recorded as void.]

---

## 10. What these terms do not require

1. **Nothing on your own software**: §4 attaches to this software only.
2. **No disclosure** of source, architecture, deployment, customers or documents.
3. **No network clause** and no source-offer duty.
4. **No share-alike**: your modifications are yours, on any terms, subject only to §4 and §11.
5. **No audit and no reporting** (§5): you file, register and notify nothing.

---

## 11. Notices

The permissions in §3 cover a copy or substantial portion of the software you distribute only
if it keeps a copy of these terms and of every copyright, patent and attribution notice you
received with the software. Material that came to the project under other terms stays under
those terms, with its notices; these terms cover the contributions made under them.

> [COUNSEL: §11 is drafted as a scope condition like §4, in the MIT/Apache §4(a)–(c)
> tradition; confirm that form and its interaction with §7 conversion.]

---

## 12. The name

The name of these terms and the name of the Association are trademarks of the Association.
You may say that software is licensed under these terms only if the text you distribute with
it is this text, unchanged, at a version the Association published. Nothing here grants you
any other right in those trademarks, or restricts your ability to describe the software
factually.

> [COUNSEL: the verbatim-text condition is the enforcement handle that keeps the canonical
> text canonical (the MariaDB/BUSL mechanism). Draft it so it survives the trademark not yet
> being registered anywhere, and confirm it does not collide with nominative-use doctrine in
> the US or with §23 UWG-style rules in DE/CH. The trademark filings are a separate
> workstream (D4; LEG-037) and no application exists today.]

---

## 13. No warranty, no liability

As far as the law allows, the software comes as is, without any warranty or condition, and no
licensor will be liable to you for any damages arising out of these terms or the use or
nature of the software, under any kind of legal claim. These terms exclude nothing the law
says cannot be excluded.

> [COUNSEL: confirm this disclaimer and exclusion, in the Blue Oak/PolyForm register with the
> mandatory-law carve-out, is portable across the US, CH, DE and the main adopter
> jurisdictions, including against consumers. Note separately — it belongs in the Entitlement
> terms and not here — that a credential is expressly not a warranty that the software is
> free of third-party rights (LEG-083).]

---

## 14. Interpretation

If any part of these terms cannot be enforced, the rest still applies. Nobody loses a right
under these terms by not enforcing it at once.

> [COUNSEL: these terms are silent on governing law and forum by the operator's decision of
> 2026-09-16, following Blue Oak and PolyForm practice; the applicable conflict-of-laws rules
> decide, and the Entitlement agreement chooses its own law. Confirm the consequences of that
> silence for enforcement in the US, CH and DE, and that the Entitlement agreement's choice
> of law and forum cannot be read into these terms.]

---

## 15. Counsel agenda carried by this draft

Every marker above, collected, so the engagement can be scoped from one list. This is the
licence-text subset of the priority list in the movement's licence-architecture record
(LEG-050); it is not the whole engagement.

| # | Section | Question | Record |
|---|---|---|---|
| 1 | §2 | Attribution form for the verbatim PolyForm "control" definition and the PolyForm-modelled group definition; group-of-companies terminology alongside | LEG-018 |
| 2 | §3 | Apache-2.0 §3 alignment of the patent grant and the litigation trigger; claims held by a contributor's employer | LEG-015 |
| 3 | §4 | Condition-vs-covenant enforceability (US MDY nexus and its footnote 4, CH CO, DE AGB); formation, enforcement route, fallback remedy | LEG-010, LEG-013, LEG-051 |
| 4 | §4 | Donate-direct proof standard, false-record consequence, payer-side tax character | LEG-012, OPEN-27 |
| 5 | §5 | Threshold counting rules; determinability of the non-profit and public-body limb; the inflation mechanic | LEG-017, LEG-019 |
| 6 | §6 | Determinability of the four cure triggers; the prior-tax-year interaction; a target mid-acquisition | LEG-014 |
| 7 | §7 | Conversion as a present grant with deferred effect; successor in title; provable public-availability day; Apache-2.0 notice interaction | LEG-023 |
| 8 | §8 | Evidentiary handle (transparency log and mirrors); formality of the declaration of lapse and the successor designation; the never-issued clock; the §1 identity anchor (UID, key thumbprint); merger and name change | LEG-024, LEG-040 |
| 9 | §9 | In-licence steward bootstrap under AGB and drive-by formation; fork and takeover rules; good-faith reliance on a credential recorded as void | LEG-039, LEG-040, OPEN-29 |
| 10 | §11 | Notice-keeping drafted as a scope condition in the MIT/Apache tradition; its form and its interaction with §7 conversion | LEG-042 |
| 11 | §12 | Verbatim-text trademark condition against nominative use / unregistered marks | LEG-037 |
| 12 | §13 | Warranty and liability portability, including against consumers | — |
| 13 | §14 | Consequences of silence on governing law and forum | — |
| 14 | whole text | AI-generated contributions: training-use position, and condition robustness where many lines carry thin copyright | LEG-043, OPEN-24 |

**Sequencing that binds this draft.** The D26 gate passed on 2026-09-14 (D39, on the
operator's confirmation; the evidence filing is pending). What remains before publication is
counsel's own work: the three jurisdiction memos (US, CH, DE) on the condition architecture,
and the full drafting engagement that follows them. This file is that engagement's input,
not its output.

---

## 16. Revision log

| Revision | Date | Change |
|---|---|---|
| `1.0-draft.0` | 2026-09-02 | First structural draft. Implements D6–D10, D23, D25 and D7 as amended into clause skeletons; isolates 13 counsel questions. No text reviewed by counsel. |
| `1.0-draft.1` | 2026-09-16 | D46 (dissolution and steward lapse). §8 gains the declaration of lapse (c), counts Donation Entitlements in (b), says a Waiver keeps no clock running, and drafts the successor designation; §2 gains the successor limb; the §8 counsel marker and agenda row 8 are widened. No text reviewed by counsel. |
| `1.0-draft.2` | 2026-09-16 | The operator decisions of 2026-09-16 (recorded as D48), one line each. (1) §5: non-profit, public-benefit, public educational and public bodies meet the threshold whatever their size; a commercial subsidiary does not inherit it. (2) §5: the revenue limit keeps PolyForm Small Business 1.0.0's CPI-U indexing, made deterministic — calendar-year average, nearest USD 1,000, never below USD 1,000,000, successor series or last value. (3) §5: no investment prong; the marker that asked is removed. (4) §7: conversion attaches to each part from its first verifiable public availability; forks and repackaging never restart a clock; material added later has its own. (5) §2: an Entitlement covers software by name or because it covers every work under these terms — coverage no longer depends on registration. (6) §3: patent defence with the Apache-2.0 §3 litigation trigger; copyright and vesting untouched. (7) §14: silent on governing law and forum; the decision marker becomes a confirmation marker. (8) §13: one plain-English warranty and liability section with the mandatory-law carve-out. (9) §1: `SPDX-License-Identifier` with the LicenseRef form; "SPDX-Style-Identifier" dropped. (10) The finished text will be published under CC BY 4.0 — no change to the body. (11) §2 and §9: a credential's term is its recorded start date, end date and schedule version; a later schedule change never alters it. (12) §6: four defined cure triggers, resumption, and re-application to a later failure. (13) §1 and §2: "Purpose Source Association" and "the Association" written as literals; the UID token joins the Purpose Notice. Also: §4 defines "for the benefit of" by cases; a credential counts from recording and §6 is the only grace; §9 names the only exceptions to permanence and says what vesting is not; §11 keeps inbound terms; §2 scopes the registrar rule to software registered "for others"; the PolyForm "control" definition is verbatim; §8 names the transparency log and its mirrors as the evidentiary handle; the §4 MDY marker is balanced; every "Why" paragraph and framing note moves to ANNOTATIONS.md; the body is rewritten short and plain. Same-day verification pass: §11 is drafted as a scope condition with its own marker (agenda row 10); the Waiver in §9 is free of charge, as the statutes require; §8(c) counts Donation Entitlements; §3 drops the after-acquired patent claims and adds contributory infringement to the trigger; §2, §5, §6, §8 and §9 are reworded for a reader and the body is cut further. No text reviewed by counsel. |
