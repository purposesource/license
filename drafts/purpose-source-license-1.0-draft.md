> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> marked inline as `[COUNSEL: …]`.

# Purpose Source License 1.0 — working draft

**Draft status:** pre-counsel working paper · **This draft:** `1.0-draft.3` · **Date of this revision:** 2026-09-16

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

**These terms** are this text; **the software** is the work they come with; **a part** is any
material in it. A part is **made available to the public** on the first day anyone can obtain
it under these terms — by a public commit, tag, release or package, never by an author's own
timestamp. **A version** is a release the project (those who maintain the software's canonical
repository) identifies as such; it is **published** when first made available to the public.

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

**The Steward Organization** — **the Association** — is the Purpose Source Association
named in §1, or the successor it has publicly designated under §8. For software
it registers for others it is never a licensor, sublicensor or rights-holder — the permissions
in §3 come from the software's own licensors; for software it owns it is an ordinary licensor
and says so.

**The Steward Registry** is the public record the Association keeps at
{{STEWARD_REGISTRY_URL}}, with its transparency log and the log's published mirrors outside
the Association's control. A credential is **recorded** when published there, and counts from
that day.

**An Entitlement** is a credential the Association records for an organization under a
separate agreement between them, which these terms neither create nor price. **A Donation
Entitlement** is a credential recorded for an organization that donated the amount the
published schedule states directly to a charity the Association lists. Both are issued only
under the Association's published schedule, on the same terms for everyone, for at most one
year at a time. Each covers the software it names, or every work licensed under these terms
if it says so.

**A Waiver** is a record the Project Steward makes for the software, naming an organization
that may use it without an Entitlement.

**A credential** is any of the three; its **term** is what the Steward Registry records: for
an Entitlement or Donation Entitlement, the recorded start date, end date and schedule
version, which no later schedule change alters; for a Waiver, until it is recorded as revoked
or expired. A credential is **current** throughout its term.

**The Project Steward** is whoever holds administrative control of the software's canonical
repository, or whoever they designate through the Steward Registry's verified claim process,
and nowhere else.

---

## 3. Grants

Each licensor of the software grants you, subject to §4:

- a **copyright licence** under all copyright they hold in their contributions, to do
  everything with the software that would otherwise infringe it; and
- a **patent licence**, to make, have made, use, offer to sell, sell, import and otherwise
  transfer the software, under the patent claims they can license that are necessarily
  infringed by their contributions alone or combined with the software they contributed them
  to.

The grants are per licensor and non-exclusive. These grants are irrevocable except as these
terms say. Nobody grants on anyone else's behalf. Unless the contributor clearly says
otherwise, a contribution intentionally submitted to the project is offered under these
terms. Contributors keep their copyright; nothing here assigns it.

**Patent defence.** If you file patent litigation (including a cross-claim or counterclaim)
alleging that the software or a contribution in it infringes or contributes to infringing a
patent, every patent licence you hold under these terms for that software ends on the day you
file. Your copyright licences and vested versions are unaffected.

> [COUNSEL: the patent grant and its defence trigger follow Apache-2.0 §3 so that
> conversion under §7 changes nothing for patents. Confirm the alignment is close enough to
> achieve that, and confirm the per-licensor grant reaches claims held by a contributor's
> employer.]

---

## 4. The Purpose Condition

The permissions in §3 apply only while at least one of these is true:

- **(a)** you are not exercising them for the benefit of a Large Organization;
- **(b)** the Large Organization you exercise them for holds a current Entitlement covering
  the software;
- **(c)** it holds a current Waiver for the software; or
- **(d)** it holds a current Donation Entitlement covering the software.

The permissions in §3 also apply, with no credential, to non-production evaluation, security
review, and preparing and submitting contributions to the project; not to production use or
offering the software's functionality to others.

You exercise permissions **for the benefit of** an organization when you use the software as
that organization, or in work you do for it as its employee, contractor or service provider.
A client's coverage, or its meeting the threshold, also covers work others do solely for it. Running a general
service for many customers is your own use; a dedicated deployment for one customer is work
for that customer. Incidental benefit does not count, nor does merely passing the software
on. Personal use, unrelated to work for such an organization, needs no coverage.

Use while none of (a) to (d) is true is simply unlicensed: no promise is broken, there is no
permission. These terms oblige nobody to pay anyone. The cure in §6 is the only grace these
terms know.

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
> recorded; the evidentiary standard belongs in the registry's published terms. Confirm also
> the scope of the evaluation and contribution exception: that "non-production evaluation"
> and "security review" are determinable, and that a staged rollout, a pilot with real users
> or an internal tool in daily use cannot shelter under it.]

---

## 5. The threshold

An organization meets the threshold — so it is not a Large Organization — if, across its
whole group and for each member's latest completed tax year, its headcount was under 100
**and** its revenue was below the revenue limit.

**Counting.** Headcount is the average month-end number of employees and individual
contractors with ongoing engagements, each counted once, part-time included. Revenue excludes
transactions within the group; investment raised is not revenue. Without a completed tax
year, use current headcount and revenue since formation, annualized. Group changes count when
they occur. Convert other currencies at a published central-bank or IMF average rate for the
period, chosen consistently.

**The revenue limit** is USD 1,000,000 for 2026. For each later calendar year it is
USD 1,000,000 multiplied by the preceding June's value of the US BLS CPI-U series CUUR0000SA0
(U.S. city average, all items, not seasonally adjusted, 1982–84=100) divided by its June 2026
value, rounded to the nearest USD 1,000. The limit never falls below the previous year's. If a
value is unavailable, the previous year's limit stands, and an officially linked successor
series replaces a discontinued one. The limit for a tax year is the one for the calendar year
in which that tax year ended. The Association publishes each year's limit for information; the
calculation governs.

**Non-profits, education and public bodies** meet the threshold whatever their size: a
non-profit or public-benefit body under the law it is organized under, a public educational
institution, or a public body performing public functions. A commercial organization such a
body controls is measured like any other, and work for a commercial client is judged by that
client under §4.

You assess the threshold yourself. **Nobody may audit you under these terms**: neither a
licensor nor the Association may demand your books, headcount or any certification.

> [COUNSEL: the counting rules above are the operator's defaults. Confirm they are
> determinable by a filer in the US, CH, DE and the main adopter jurisdictions — in
> particular "ongoing engagements" for agency staff, and a group whose members have different
> tax year-ends. Confirm that "non-profit or public-benefit body under the law it is organized
> under" is determinable by a licensee in the same jurisdictions, and that the June-to-June
> CPI-U formula is unambiguous.]

---

## 6. Cure

When none of (a) to (d) in §4 is true, the permissions in §3 still continue for 60 days from:

- **(a)** where an organization grew past the threshold, the end of the tax year in which it
  first exceeded it;
- **(b)** the day a change of control made an organization a Large Organization;
- **(c)** the day a credential's term ended or a Waiver was recorded as revoked; or
- **(d)** otherwise, the first day of use while none of (a) to (d) in §4 was true.

If one of them becomes true again within the 60 days, the permissions continue uninterrupted.
If none does, they end after the 60th day and resume the moment one becomes true again, for
use from then on. This section applies afresh to any later failure, but at most 60 such days
in any twelve months. Versions published during these days do not vest under §9; vested
versions need no cure.

> [COUNSEL: the four trigger days and the rolling cap are the operator's defaults. Confirm
> they are determinable by a licensee without litigation, including (a) against a threshold
> measured on the latest completed tax year, (b) for a target whose group changed mid-year,
> and the count of "such days" across overlapping failures.]

---

## 7. These terms become Apache-2.0

Each part of the software becomes available to everyone under the Apache License, Version
2.0, four years after it was first made available to the public under these terms, in any
form. From that day, §4 no longer restricts anyone's use of that part.

Each part has its own clock; material added later starts its own. Forking, copying,
repackaging or re-releasing a part never restarts its clock. Every part in a published version
converts no later than four years after that version was published; earlier dates stay
effective.

Nobody — no project, no licensor, not the Association — can extend this for anything already
public.

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

- **(a)** the day the Association ceases to exist with no successor publicly designated under
  this section;
- **(b)** the last day of any 12 consecutive months in which the Association neither recorded
  an Entitlement or Donation Entitlement nor kept a published schedule under which one could
  be obtained, with no successor so designated; or
- **(c)** the day named in a **declaration of lapse**: a signed record, published in the
  Steward Registry and its transparency log, in which the Association declares that it has
  stopped issuing Entitlements and Donation Entitlements and names that day; it cannot be
  withdrawn, and the day cannot be moved later.

Anyone can tell from the transparency log and its mirrors whether one of these days has come.
A Waiver is the Project Steward's record, not the Association's, and keeps nothing in (b)
running.

A successor is **publicly designated** only by a signed record, published like a declaration
of lapse. It must name a non-profit that has accepted in writing these terms, every recorded
credential, and the Association's published commitments on the charitable destination of
funds and no private profit. From that day it is the Steward Organization for every purpose
here; one that records nothing for 12 consecutive months counts as none.

> [COUNSEL: the lapse must be objectively determinable by a licensee without litigation. The
> evidentiary handle drafted above is the transparency log and its mirrors outside the
> Association's control (statutes Art. 9 para. 4 and Art. 23 para. 5 — the archive
> custodian); confirm it suffices, say what a licensee may rely on if the log and a mirror
> disagree, and confirm that limb (b)'s second element — a published schedule under which a
> credential could be obtained — is determinable from the log alone, so that a schedule
> nobody can buy under does not keep the clock from running. Draft the formality of the
> declaration of lapse and of the successor designation — the resolution of the board or of
> the liquidators cited in the record, two signatures under the published key set,
> irreversibility — so that a compromised key or a hostile board cannot do what the published
> constitution forbids, and a paper successor cannot reset the clock. Confirm (i) how the
> clock in (b) runs where nothing was ever recorded — the intent is from the later of this
> text's first publication and the last recorded credential or schedule; (ii) whether the
> successor bound — a non-profit that accepts these terms, every recorded credential and the
> published commitments on charitable destination and no private profit — is determinable at
> the designation and enforceable by a licensee, and who may challenge a designation that
> fails it; (iii) whether the identity anchor in §1 — the legal name, the UID and the
> registry address — keeps "the organization named in §1" verifiable after a name change, a
> merger with universal succession or the loss of the domain, or whether a key thumbprint
> must be added; and (iv) whether the successor's 12-month test should mirror limb (b), so
> that a successor which keeps a published schedule but records nothing does not count as
> none while the Association's own clock would not run.]

---

## 9. Recorded credentials, and what stays yours

A current credential satisfies §4 for the software it covers, for every licensor's grant. It
also vests versions permanently, for a Waiver as the next paragraph says: **a version is
vested for an organization if it was published on or before the end of that organization's
credential's term.** Once vested, nothing takes a version away — not the project leaving the
registry, a Waiver revoked, a term ending, a schedule change or the Association failing.

**Waivers.** A Waiver gives permission from the day it is recorded. Nothing vests under it
during its first 72 hours. If it is still active after 72 hours, every version then public
within its scope vests, and later versions vest as they are published while it stays active.
Revocation never makes earlier permitted use unlawful.

**The only exceptions.** A forged record — one with no genuine issuance behind it — vests
nothing. A credential obtained by fraud or deliberate deception vests nothing. A refunded term
vests nothing. You may rely on a genuinely issued record despite the Association's error, an
honest under-certification, a later compromise of the signing key or the record's later
removal. Patent litigation under §3 ends only the patent licence, never a vested version.

**Groups and forks.** A credential covers its beneficiary and the entities in its group
while they are in it. An entity that leaves keeps what it vested. When a covered business is
sold or merged, its vested coverage goes with that business for its own operations, not for
the buyer's; coverage cannot be sold on its own. Vested code stays vested in forks and
modified copies; what others add needs its own permission. Coverage of named software reaches
the contributions first offered under these terms through that project, not code imported
from elsewhere. Forking gives no power to waive conditions on upstream code.

Vesting is permission from now on, never forgiveness for earlier use.

Everyone who licenses contributions on these terms accepts that recorded credentials satisfy
§4 for their grant. The Project Steward may record a Waiver, free of charge, and may revoke it
going forward.

> [COUNSEL: the sentence above is the in-licence bootstrap of the steward roles — a licensor
> accepting, by using this text, that a third party's registry record satisfies a condition
> in their own grant. Confirm its formation and prominence under Swiss and German
> standard-terms doctrine (AGB), and under drive-by-contributor conditions where the
> contributor's only act is a pull request. Confirm the 72-hour Waiver rule's formation:
> that permission without vesting, followed by vesting through lapse of time, holds as a
> condition rather than a covenant, and that "still active" is determinable from the
> registry. Confirm the fork, import and takeover rules and the group, sale and merger rule
> above — operator defaults answering OQ-LEG-3 / OPEN-29 (LEG-040) — including how "in its
> group" and "for its own operations" are proved by a licensee after a sale. Confirm the
> good-faith reliance rule against a record the registry later marks void, and against a
> genuinely issued record whose term exceeds §2's one-year bound: which sentence controls,
> and what the holder keeps.]

---

## 10. What these terms do not require

These terms require nothing of your own software, no disclosure, no network duty, no
share-alike, no audit and no report.

---

## 11. Notices

The permissions in §3 cover a copy or substantial portion of the software you distribute only
if it keeps these terms and every copyright, patent and attribution notice you received with
the software. If you leave a notice out, putting it back restores the permission from then
on. Material that came to the project under other terms stays under them, with its notices;
these terms cover the contributions made under them.

> [COUNSEL: §11 is drafted as a scope condition like §4, in the MIT/Apache §4(a)–(c)
> tradition; confirm that form and its interaction with §7 conversion.]

---

## 12. The name

The names of these terms and of the Association are the Association's trademarks. You may say
software is licensed under these terms only if the text you distribute with it is this text,
unchanged, at a version the Association published. Nothing here grants any other right in
those trademarks or restricts describing the software factually.

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
| 4 | §4 | Donate-direct proof standard, false-record consequence, payer-side tax character; scope of the evaluation and contribution exception | LEG-012, OPEN-27 |
| 5 | §5 | Confirmation of the operator's counting defaults (agency staff, differing year-ends); determinability of the non-profit and public-body limb; the June-to-June CPI-U formula | LEG-017, LEG-019 |
| 6 | §6 | Confirmation of the four cure triggers and the 60-days-in-twelve-months cap; the latest-completed-tax-year interaction; a target mid-acquisition | LEG-014 |
| 7 | §7 | Conversion as a present grant with deferred effect; successor in title; provable public-availability day; Apache-2.0 notice interaction | LEG-023 |
| 8 | §8 | Evidentiary handle (transparency log and mirrors); determinability of limb (b)'s published-schedule element from the log; formality of the declaration of lapse and the successor designation; the never-issued clock; the successor bound's determinability and enforceability; the §1 identity anchor (UID, key thumbprint); merger and name change; whether the successor's twelve-month test should mirror limb (b) | LEG-024, LEG-040 |
| 9 | §9 | In-licence steward bootstrap under AGB and drive-by formation; the 72-hour Waiver rule as a condition; confirmation of the fork, import, takeover, group and sale rules; good-faith reliance against a record marked void; reliance against a record that breaches the §2 one-year bound | LEG-039, LEG-040, OPEN-29 |
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
| `1.0-draft.3` | 2026-09-16 | The operator decisions of 2026-09-16 evening on the 16 September review proposal (recorded as D49), one line each. (A1) §3: the grants are irrevocable except as these terms say. (A2) §2: an Entitlement or Donation Entitlement is issued only under the published schedule, on the same terms for everyone, for at most one year at a time. (A3) §4: evaluation, security review and contribution need no credential; production use and offering the software's functionality to others do. (A4) §4: contractor and service rule — a client's coverage or exemption covers work done solely for it; a general service is your own use, a dedicated deployment is the customer's; personal use needs no coverage. (A5) §5: counting rules as operator defaults — average month-end headcount, part-time included, each counted once; each member's latest completed tax year; intra-group transactions excluded; no completed tax year: current headcount and annualized revenue since formation; group changes when they occur; investment is not revenue; central-bank or IMF average rate chosen consistently. (A6) §5: the revenue limit is the June-to-June CPI-U formula, base June 2026, nearest USD 1,000, never below the previous year's; the limit for a tax year is the one for the calendar year in which it ended. (A7) §6: at most 60 cure days in any twelve months; versions published during cure days do not vest. (A8) §9: Waiver cooling — permission from recording, nothing vests in the first 72 hours, vesting thereafter while active, revocation never retroactive (amends D48 item 15). (A9) §9: exceptions corrected — a forged record vests nothing, a genuinely issued record survives a later key compromise, good-faith reliance protected; fraud and refunds unchanged (amends D48 item 16). (A10) §9: corporate changes — group members covered while in the group, a leaver keeps what it vested, a sold or merged business keeps its vested coverage for its own operations only, coverage cannot be sold alone. (A11) §9: forks and imports — vested code stays vested in forks, additions need their own permission, named-software coverage reaches contributions first offered through that project, forking gives no waiver power over upstream code. (A12) §7: every part in a published version converts no later than four years after that version's publication. (A13) §8: lapse limb (b) also requires that no published schedule was kept under which a credential could be obtained. (A14) §8: a successor must be a non-profit that accepts these terms, every recorded credential and the published commitments on charitable destination and no private profit. (A15) §11: putting a notice back restores the permission from then on. (A16) §3: a contribution intentionally submitted is offered under these terms unless the contributor clearly says otherwise; contributors keep their copyright. Cuts toward the 2,000-word target for the body §1–§14 (markers excluded): §10 reduced to one sentence (its list lives in ANNOTATIONS Part 1 and the README); §2's availability and version definitions merged and the designation sentence folded into the Project Steward definition; §5's calendar-average mechanic replaced; §8's successor paragraph tightened; every section reworded shorter with no decided element dropped. The §5, §6 and §9 markers shrink to confirmation of the operator's defaults; the §4, §8 and §9 markers gain the new questions (the evaluation exception's scope, limb (b)'s determinability from the log, the successor bound, the 72-hour rule's formation); agenda rows 4, 5, 6, 8 and 9 follow. Same-day verification pass: §9's vesting rule now says it applies to a Waiver as the Waiver paragraph says, so the 72-hour rule controls; the A3 exception is written as a widening of the §3 permissions ("The permissions in §3 also apply, with no credential, to …") rather than as a remark outside the grant; §9's three exceptions are three sentences; the reliance sentence says "the record's later removal"; §6 says "do not vest under §9"; the §2 issuance, §3 patent-defence, §6 transition and §8 successor sentences are split; the §9 marker asks which of A2's one-year bound and A9's reliance rule controls for a genuinely issued over-long record, and the §8 marker asks whether the successor's twelve-month test should mirror limb (b) (agenda rows 8 and 9 follow); descriptive sentences cut with no decided element dropped (the registry's no-account sentence in §2, the money-flow clause in §4, the no-prices sentence in §5, "fixed and licence-wide" in §7, the log's full name in §8). The body ends at about 2,330 words, above the target: what remains is definitions other sections use, decided protections and the adopted sentences themselves, so the last cut is the operator's to name. No text reviewed by counsel. |
