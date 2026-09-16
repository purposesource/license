> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> marked inline as `[COUNSEL: …]`.

# Purpose Source License 1.0 — working draft

**Draft status:** pre-counsel working paper · **This draft:** `1.0-draft.4` · **Date of this revision:** 2026-09-16

---

## 1. Purpose Notice

These lines are part of the licence text, identical in every copy:

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
it under these terms — by a public commit, tag, release or package, never an author's own
timestamp. **A version** is a release the project (the maintainers of the software's canonical
repository) identifies as such.

**You** are the individual or organization exercising these permissions.

**An organization's group** is that organization plus all organizations that have control
over, are under the control of, or are under common control with it.

**Control** means ownership of substantially all the assets of an entity, or the power to
direct its management and policies by vote, contract, or otherwise. Control can be direct or
indirect.

> [COUNSEL: "control" is the PolyForm Small Business 1.0.0 definition copied verbatim, and
> "group" follows PolyForm's "your company" (LEG-018); attribution is in LICENSE-NOTICE §4.
> Confirm the attribution form, and whether Swiss or German group-of-companies terminology
> should be added alongside it rather than instead of it.]

**A Large Organization** is one that does not meet §5's threshold.

**The Steward Organization** — **the Association** — is the Purpose Source Association
named in §1, or its successor publicly designated under §8. For software it registers for
others it is never a licensor, sublicensor or rights-holder: the §3 permissions come from the
software's own licensors. For its own software it is an ordinary licensor and says so.

**The Steward Registry** is the public record the Association keeps at
{{STEWARD_REGISTRY_URL}}, with its transparency log and the log's public mirrors outside the
Association's control. A credential is **recorded** when published there, and counts from
then.

**An Entitlement** is a credential the Association records for an organization under a
separate agreement, which these terms neither create nor price. **A Donation Entitlement** is
one recorded for an organization that donated the scheduled amount directly to a charity the
Association lists. The Association issues both only under its published schedule, on the same
terms for everyone, for at most one year at a time, and within its published constitutional
commitments on the charitable destination of funds and no private profit. Each covers the
software it names, or every work under these terms if it says so.

**A Waiver** is the Project Steward's record naming an organization that may use the software
without an Entitlement.

**A credential** is any of the three; it is **current** throughout its **term**, which is
what the Steward Registry records: for an Entitlement or Donation Entitlement, the start
date, end date and schedule version, unaltered by any later schedule change; for a Waiver,
until recorded as revoked or expired.

**The Project Steward** is whoever holds administrative control of the software's canonical
repository, or their designee through the Steward Registry's verified claim process, nowhere
else.

---

## 3. Grants

Each licensor of the software grants you, subject to §4:

- a **copyright licence** under all copyright they hold in their contributions, to do
  everything with the software that would otherwise infringe it; and
- a **patent licence**, to make, have made, use, offer to sell, sell, import and otherwise
  transfer the software, under the patent claims they can license that are necessarily
  infringed by their contributions alone or combined with the software they contributed them
  to.

The grants are per licensor, non-exclusive, and irrevocable except as these terms say. Nobody
grants on anyone else's behalf. Unless the contributor clearly says otherwise, a contribution
intentionally submitted to the project is offered under these terms. Contributors keep their
copyright; nothing here assigns it.

**Patent defence.** If you or a member of your group files patent litigation (including a
cross-claim or counterclaim) alleging that the software or a contribution in it infringes or
contributes to infringing a patent, every patent licence you or your group hold under these
terms for that software ends that day. Your copyright licences and vested parts are
unaffected.

> [COUNSEL: the patent grant and its defence trigger follow Apache-2.0 §3 so that
> conversion under §7 changes nothing for patents. Confirm the alignment is close enough to
> achieve that, and that the per-licensor grant reaches claims held by a contributor's
> employer. The trigger now reaches litigation by any member of your group and ends the
> group's patent licences: confirm that is determinable and enforceable against an affiliate
> that took no licence here, and say what litigation before conversion does to the deferred
> Apache patent grant in §7.]

---

## 4. The Purpose Condition

The permissions in §3 apply only while one of these is true:

- **(a)** you are not exercising them for the benefit of a Large Organization;
- **(b)** the Large Organization you exercise them for holds a current Entitlement covering
  the software;
- **(c)** it holds a current Waiver for the software; or
- **(d)** it holds a current Donation Entitlement covering the software.

The permissions in §3 also apply, with no credential, to non-production evaluation, security
review, and preparing and submitting contributions to the project; not to production use or
offering the software's functionality to others.

You exercise permissions **for the benefit of** an organization when you use the software as
that organization, or in work for it as its employee, contractor or service provider. A
client's coverage, or its meeting the threshold, also covers work others do solely for it. A
general service for many customers is your own use; a dedicated deployment for one customer
is work for that customer. Incidental benefit and merely passing the software on do not
count. Personal use, unrelated to such work, needs no coverage.

Use while none of (a) to (d) is true is simply unlicensed: no promise is broken, there is no
permission. These terms oblige nobody to pay; §6 is their only grace.

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
whole group, for each member's latest completed tax year, headcount was under 100 **and**
revenue was below the revenue limit.

**Counting.** Headcount is the average month-end number of employees and individual
contractors with ongoing engagements, each counted once, part-time included. Revenue excludes
transactions within the group; investment raised is not revenue. Without a completed tax
year, use current headcount and revenue since formation, annualized. Reasonable provisional
figures may be used until reliable ones exist. Group changes count when they occur. Convert
currencies at a published central-bank or IMF average rate for the period, chosen
consistently.

**The revenue limit** is USD 1,000,000 for 2026. For each later calendar year it is that
amount multiplied by the preceding June's value of the US BLS CPI-U series CUUR0000SA0
divided by its June 2026 value, rounded to the nearest USD 1,000. It never falls below the
previous year's. If a value is unavailable, the previous year's limit stands; an officially
linked successor series replaces a discontinued one. A tax year's limit is the one for the
calendar year in which it ended. The Association publishes each year's limit for
information; the calculation governs.

**Non-profits, education and public bodies** meet the threshold whatever their size: a
non-profit or public-benefit body under the law it is organized under, a public educational
institution, or a public body performing public functions. A commercial organization such a
body controls is measured like any other; work for a commercial client is judged by that
client under §4.

You assess the threshold yourself. **Nobody may audit you under these terms**: neither a
licensor nor the Association may demand your books, headcount or any certification.

> [COUNSEL: the counting rules above are the operator's defaults. Confirm they are
> determinable by a filer in the US, CH, DE and the main adopter jurisdictions — in
> particular "ongoing engagements" for agency staff, "reasonable provisional figures", and a
> group whose members have different tax year-ends. Confirm that "non-profit or
> public-benefit body under the law it is organized under" is determinable by a licensee in
> the same jurisdictions, and that the June-to-June CPI-U formula is unambiguous.]

---

## 6. Cure

When none of (a) to (d) in §4 is true, the permissions in §3 still continue for 60 days from:

- **(a)** where an organization grew past the threshold, the end of the tax year in which it
  first did;
- **(b)** the day a change of control made an organization a Large Organization;
- **(c)** the day a credential's term ended or a Waiver was recorded as revoked;
- **(d)** where reliable figures later show the threshold was exceeded, the day you knew or
  should reasonably have known, even if (a) gives an earlier day; or
- **(e)** otherwise, the first day of such use.

If one becomes true again within the 60 days, the permissions continue uninterrupted; if none
does, they end after the 60th day and resume, for use from then on, when one does. It applies
afresh to any later failure, for at most 60 such days in any twelve months. Days on which the
Association's issuance service was generally unavailable, as its transparency log records, do
not count toward either 60. Parts made public during these days do not vest under §9; vested
parts need no cure.

> [COUNSEL: the five trigger days, the rolling cap and the outage rule are the operator's
> defaults. Confirm they are determinable by a licensee without litigation, including (a)
> against a threshold measured on the latest completed tax year, (b) for a target whose group
> changed mid-year, and the count of "such days" across overlapping failures. Confirm that
> use before the day in (d), made on reasonable provisional figures, is covered by the
> continuation this section intends, that (d) should control where (a) also fits, and that
> an outage day is provable from the transparency log when the log was itself part of what
> was down.]

---

## 7. These terms become Apache-2.0

Each licensor also grants you, now, the copyright and patent permissions of the Apache
License, Version 2.0, for each part of the software, effective four years after that part was
first made available to the public under these terms, in any form. Nothing more is needed on
that day, and §4 no longer restricts that part.

Each part has its own clock, and material added later its own; forking, copying, repackaging
or re-releasing a part never restarts one. Every part in a version converts no later than four
years after that version was first made available to the public; earlier dates stand.

Nobody — no project, no licensor, not the Association — can extend this for anything already
public.

> [COUNSEL: §7 is drafted as a present grant with a deferred effective date. Confirm it
> survives the Association's dissolution and a licensor's later choices, binds a successor
> in title and a licensor's estate, and leaves no part's conversion undoable. Confirm the
> "first made available to the public" day is provable from public records (a commit, tag,
> release or package) and cannot be set by an author's own timestamp. Confirm the
> interaction with Apache-2.0 §4's notice requirements and with §11 for code that arrived
> from a permissively licensed predecessor.]

---

## 8. If the Association lapses

The Purpose Condition in §4 lapses — the permissions in §3 then apply without it, for
everyone — on the earliest of:

- **(a)** the day the Association ceases to exist with no successor publicly designated;
- **(b)** the last day of any 12 consecutive months in which the Association neither recorded
  an Entitlement or Donation Entitlement nor kept a published schedule for obtaining one; or
- **(c)** the day named in a **declaration of lapse**: a signed record, published in the
  Steward Registry and its transparency log, naming the day the Association stops issuing
  Entitlements and Donation Entitlements; it cannot be withdrawn, nor its day moved later.

The clock in (b) starts at this text's first official publication and runs on through any
succession. A Waiver is the Project Steward's record and keeps nothing in (b) running. The
transparency log and its mirrors show whether one of these days has come. Lapse does not
bring §7's conversion forward.

A successor is **publicly designated** only by a signed record published the same way. It
must name a non-profit that has accepted in writing these terms, every recorded credential
and the commitments in §2. From that day it is the Steward Organization for every purpose
here, measured by the same clock.

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
> constitution forbids, and a paper successor cannot reset the clock. Confirm (i) that "first
> official publication" is a determinable day for the clock in (b), and whether "this text"
> should read as the first official publication of any version of these terms, so that a
> later version applied to existing contributions cannot move the clock's start (statutes
> Art. 13 para. 1 item 6; sign-off core item 6); (ii) whether the Association's own bound in
> §2 and the successor bound — a non-profit that accepts these
> terms, every recorded credential and those commitments — are determinable and enforceable
> by a licensee or a licensor, what follows for a credential issued in breach of them (§9
> intends that the holder keeps it), and who may challenge a designation that fails; and
> (iii) whether the identity anchor in §1 — the legal name, the UID and the registry address
> — keeps "the organization named in §1" verifiable after a name change, a merger with
> universal succession or the loss of the domain, or whether a key thumbprint must be added.]

---

## 9. Recorded credentials, and what stays yours

A current credential satisfies §4 for the software it covers, for every licensor's grant. It
also vests parts permanently, for a Waiver as the next paragraph says: **a part is vested for
an organization if it is within its credential's scope and was made available to the public
on or before the end of that term.** Once vested, nothing takes a part away — not the project
leaving the registry, a Waiver revoked, a term ending, a schedule change or the Association
failing.

**Waivers.** A Waiver gives permission from the day it is recorded and vests nothing in its
first 72 hours. If it is still active then — the transparency log shows whether it was, not a
copy saved at issue — every part then public within its scope vests, and later parts as they
are made public while it stays active. Revocation never makes earlier permitted use unlawful.

**The only exceptions.** A forged record — one with no genuine issuance behind it — vests
nothing. A credential obtained by fraud or deliberate deception vests nothing. A term refunded
or charged back in full vests nothing; a partial refund, or a refund for the Association's
own failure, leaves vesting untouched. You may rely on a genuinely issued record despite the
Association's error, an honest under-certification, a later compromise of the signing key or
the record's later removal. Patent litigation under §3 ends only the patent licence, never a
vested part.

**Groups and forks.** A credential covers its beneficiary and its group's entities while they
are in it; one that leaves keeps what it vested. A covered business sold or merged takes its
vested coverage with it, for its own operations, not the buyer's; coverage cannot be sold on
its own. Vested code stays vested in forks and modified copies; what others add needs its own
permission. Coverage of named software reaches the contributions first offered under these
terms through that project, not code imported from elsewhere; one first published in a
development fork or branch for submission counts as originating in the project once accepted.
Forking gives no power to waive conditions on upstream code.

Vesting is permission from now on, never forgiveness for earlier use.

Everyone who licenses contributions on these terms accepts that recorded credentials satisfy
§4 for their grant. The Project Steward may record a Waiver free of charge and revoke it
going forward.

> [COUNSEL: the sentence above is the in-licence bootstrap of the steward roles — a licensor
> accepting, by using this text, that a third party's registry record satisfies a condition
> in their own grant. Confirm its formation and prominence under Swiss and German
> standard-terms doctrine (AGB), and under drive-by-contributor conditions where the
> contributor's only act is a pull request. Confirm the 72-hour Waiver rule's formation:
> that permission without vesting, followed by vesting through lapse of time, holds as a
> condition rather than a covenant, and that the transparency log's history suffices as
> proof that a Waiver was still active. Confirm the fork, import, origination and takeover
> rules and the group, sale and merger rule above — operator defaults answering OQ-LEG-3 /
> OPEN-29 (LEG-040) — including how "in its group" and "for its own operations" are proved by
> a licensee after a sale. Confirm the good-faith reliance rule against a record the registry
> later marks void, and against a genuinely issued record whose term exceeds §2's one-year
> bound: which sentence controls, and what the holder keeps. Confirm that the refund
> distinction — a full refund or chargeback against a partial one, or one for the
> Association's own failure — is determinable from the record, and that a refund in full
> made for the Association's own failure reads as leaving vesting untouched, as intended.]

---

## 10. What these terms do not require

These terms require nothing of your own software, no disclosure, no network duty, no
share-alike, no audit and no report.

---

## 11. Notices

The permissions in §3 cover a copy or substantial portion of the software you distribute only
if it keeps these terms and every copyright, patent and attribution notice you received with
it; if you leave one out, putting it back restores the permission from then on.
Material that came to the project under other terms stays under them, with its notices;
these terms cover the contributions made under them.

> [COUNSEL: §11 is drafted as a scope condition like §4, in the MIT/Apache §4(a)–(c)
> tradition; confirm that form and its interaction with §7 conversion.]

---

## 12. The name

The names of these terms and of the Association are its trademarks. You may say
software is licensed under these terms only if the text you distribute with it is this text,
unchanged, as the Association published it. Nothing here grants any other right in those
trademarks or restricts describing the software factually.

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
here by not enforcing it at once.

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
| 2 | §3 | Apache-2.0 §3 alignment of the patent grant and the litigation trigger; claims held by a contributor's employer; the group-wide trigger's determinability and enforceability against an affiliate; what pre-conversion litigation does to the deferred Apache patent grant | LEG-015 |
| 3 | §4 | Condition-vs-covenant enforceability (US MDY nexus and its footnote 4, CH CO, DE AGB); formation, enforcement route, fallback remedy | LEG-010, LEG-013, LEG-051 |
| 4 | §4 | Donate-direct proof standard, false-record consequence, payer-side tax character; scope of the evaluation and contribution exception | LEG-012, OPEN-27 |
| 5 | §5 | Confirmation of the operator's counting defaults (agency staff, differing year-ends, reasonable provisional figures); determinability of the non-profit and public-body limb; the June-to-June CPI-U formula | LEG-017, LEG-019 |
| 6 | §6 | Confirmation of the five cure triggers, the 60-days-in-twelve-months cap and the outage-days rule; the latest-completed-tax-year interaction; a target mid-acquisition; reliance on provisional figures before the day in (d), and (d) controlling where (a) also fits; proof of an outage day from the log | LEG-014 |
| 7 | §7 | Confirmation of the present grant with deferred effect: the Association's dissolution, a licensor's successor in title and estate, no conversion undoable; provable public-availability day; Apache-2.0 notice interaction | LEG-023 |
| 8 | §8 | Evidentiary handle (transparency log and mirrors); determinability of limb (b)'s published-schedule element from the log; formality of the declaration of lapse and the successor designation; "first official publication" as the clock's start, and the clock's start under a later version; enforceability of the Association's own bound and the successor bound, and a credential issued in breach of them; the §1 identity anchor (UID, key thumbprint); merger and name change | LEG-024, LEG-040 |
| 9 | §9 | In-licence steward bootstrap under AGB and drive-by formation; the 72-hour Waiver rule as a condition, with the log as proof of survival; confirmation of the fork, import, origination, takeover, group and sale rules; good-faith reliance against a record marked void; reliance against a record that breaches the §2 one-year bound; the refund and chargeback distinction, including a full refund for the Association's own failure | LEG-039, LEG-040, OPEN-29 |
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
| `1.0-draft.4` | 2026-09-16 | The operator decisions of 2026-09-16 late on the 16 September comparison review (recorded as D50), one line each. (B1) §2, §3, §6, §9: the vesting unit is the part made available to the public, not a named release — a part is vested if it is within the credential's scope and was public on or before the end of the term; "vested versions" become "vested parts" throughout, the Waiver vests "every part then public within its scope", and the defined term "version" survives only for §7's release-level bound. (B2) §7: the Apache-2.0 conversion is a present grant, now, of the copyright and patent permissions for each part, effective four years after that part's first public availability; nothing more is needed on that day; the marker shrinks to confirmation. (B3) §8: the clock in (b) starts at this text's first official publication and runs on through any succession; a successor is measured by the same clock, so no fresh clock can be read in; limb (b) drops "with no successor so designated", redundant since §2 defines the Association to include its designated successor; lapse does not bring §7's conversion forward (D9). (B4) §5 and §6: reasonable provisional figures may be used until reliable ones exist; a fifth cure trigger (d) — the day you knew or should reasonably have known that reliable figures show the threshold was exceeded — with "otherwise" renumbered to (e). (B5) §9: a contribution first published in a development fork or branch for submission counts as originating in the project once accepted. (B6) §9: a term refunded or charged back in full vests nothing; a partial refund, or a refund for the Association's own failure, leaves vesting untouched. (B7) §6: days the transparency log records as a general outage of the Association's issuance service do not count toward the 60. (B8) §3: the patent defence trigger reaches litigation by any member of your group and ends the group's patent licences; copyright licences and vested parts unaffected. (B9) §9: whether a Waiver was still active after 72 hours is shown by the transparency log, not by a copy saved at issue. (B10) §2 and §8: the Association issues credentials only under its published schedule and within its published constitutional commitments on the charitable destination of funds and no private profit; the successor bound in §8 points to those commitments, so nothing is said twice. Markers: §3, §5, §6, §7, §8 and §9 ask the new questions (the group-wide trigger and pre-conversion litigation, provisional-figures reliance, outage-day evidence, the licensor's estate, the Association's own bound and a credential issued in breach, the log as proof of a Waiver's survival, the refund distinction) and shrink where the text now answers (the present grant, the never-issued clock, the successor's twelve-month test, "still active"); agenda rows 2, 5, 6, 7, 8 and 9 follow. §2 and §8 tightened as the decision asks, and every other section reworded shorter, to hold the body §1–§14 (markers excluded) at or under 2,350 words; no decided element or defined term dropped. Same-day verification pass: §6(d) says it controls "even if (a) gives an earlier day", and outage days count toward "either 60" — the continuation and the cap; §5 names the CPI-U series by its BLS code alone; §13 keeps PolyForm's "will be liable", as LICENSE-NOTICE §4 attributes it; §12 says "as the Association published it", so the defined term "version" is used only by §7; §9's refund sentence says "a refund for the Association's own failure" and §2 says "designee"; the §6, §8 and §9 markers ask whether (d) should control where (a) also fits, whether "this text" in §8 reads as any version of these terms so that a later version cannot move the clock's start, and whether a full refund for the Association's own failure leaves vesting untouched as intended (agenda rows 6, 8 and 9 follow). The body ends at 2,348 words (headings included; markers, rules and fences excluded). No text reviewed by counsel. |
