> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> collected as a `[COUNSEL: …]` question in the draft's counsel agenda.

# Decision index — tracing text back to the decision that produced it

Every clause in the drafts implements a recorded decision. This index is the trace, so a
reviewer can ask "why does it say that?" and get an answer that is not "someone preferred
it".

**The decisions themselves live in the movement's own (private) decision register.** They are
summarized here in the form the drafts depend on; the register is authoritative on wording
and on amendment history. Where a draft and a decision disagree, **the draft is defective** —
that direction, always.

A decision is not a legal opinion. Each of these was taken on structural and adoption
grounds, and several are explicitly flagged as needing counsel confirmation before anything
is published.

**Five entries have a special status.** *D46* (dissolution and steward lapse) is, in the
register's own words, a *decision candidate* on its own sheet: "It becomes D46 in
DECISIONS.md once the operator confirms"; the register's D47 lists it as a candidate that
keeps its number. The drafts already implement it. *D48* (the operator decisions of
16 September 2026), *D49* (the operator decisions of the same evening, on the 16 September
review proposal) and *D50* (the operator decisions of the same day, late, on the 16 September
comparison review) were taken by the operator as the assistant's recommendations, amendable
later; the register entries are written by the orchestrator, and this index traces to them
by number. *D51* (the plain-language pass of 17 September 2026) is the operator's instruction
to say the same thing in simpler words: it changes no decision, and its register entry is
likewise the orchestrator's.

---

## The decisions the licence text implements

### D6 — Condition, not covenant; the steward is registrar, never a licensor of code it registers for others

The licence contains **no payment obligation**. Permissions are scoped by an objective
condition: below threshold, or a credential recorded in the steward registry. Money moves
under a separate bilateral contract to which the software's licensors are not parties. The
Association never holds, sublicenses, or resells anyone else's rights. Where the Association
is itself the rights-holder of a registered project, it is, for that project, a licensor like
any other, disclosed as steward-owned wherever the project appears and given no preferential
treatment *(role phrase aligned 2026-09-05 with movement decision D29 §6.3 — the register's
resolution of the "never owner" question; the licence text's §2 says "software it registers
for others" since 1.0-draft.2, and [../ANNOTATIONS.md](../ANNOTATIONS.md) §2 carries the
dated note that retired the question; superseded phrase, kept as history: "registrar, never licensor")*.

- **Implemented by:** licence draft §2 (the Association's definition — since `1.0-draft.5`,
  D51, "does not own or license the code it registers for others", and "contributor" where
  the text said "licensor"), §3 (grants), §4 (the condition)
- **Requirements:** LEG-010, LEG-013, LEG-016
- **Status:** architecture decided; enforceability **untested** — US/CH/DE memos are
  prerequisites for publication (LEG-051)

### D7 as amended — no copyright assignment, ever; instrument form is counsel's within fixed constraints

The permanent, non-reopenable core is an **outcome**: no contributor is ever required to
assign copyright or transfer economic ownership. The *instrument* is counsel's choice within
fixed constraints (minimal, public, standardized, project-neutral, one per movement, limited
to operating the mechanism), with a one-line git trailer as the designed default. The
instrument is a contributor sign-off and is called one.

The 2026-09-01 amendment added the **bound** on forward delegation: it reaches only
*materially consistent* successor versions, and an enumerated **immutable core** may never be
changed by a version applied through it — threshold may only widen, conversion delay may only
shorten, charity destination and no-private-profit rule, the registrar character (never a
rights-holder in code registered for others), and the existence of the free-of-charge waiver
power.

The amendment also **corrected an overbroad earlier claim**: the licence is not "legally
frozen". The accurate statement is that without forward delegation, new versions could not be
applied to existing contributions without per-contributor consent; existing versions stay
licensed under the version they were adopted under regardless. The core binds later versions
applied to *existing* contributions through the delegation; fresh consent, or future
contributions, could accept different terms.

**Amended 2026-09-16 (D46 — candidate sheet, entered in DECISIONS.md once the operator
confirms):** the immutable core gains a sixth item — the steward-lapse backstop, its existence
and its clock, which may only ever be shortened — so that both guarantees the statutes name
for the Association's own failure (Art. 14 para. 3) are ratcheted the same way the conversion
already is. Statutes Art. 13 carries the same six items.

**Amended 2026-09-16 late (D50 B11):** sign-off §3 item 2 says "no special or exclusive
licence to the Association" where it said "no licence to the Association at all" — the
Association, like any recipient of the software, takes the public licence; what it never gets
is a special or exclusive one. A wording correction with a dated note; the immutable core, §0
and §2 are unchanged, and nothing in the sign-off is weakened.

- **Implemented by:** [../drafts/contributor-sign-off.md](../drafts/contributor-sign-off.md)
  §0, §2.3 (six items), §3 item 2 (D50), §4; licence draft §3 ("Contributors keep their copyright." — the tail
  "nothing here assigns it" was cut in the second pass on `1.0-draft.4` as already said by the
  words that remain; the inbound default of D49 A16 sits beside it and does not replace the
  sign-off);
  [../CONTRIBUTING.md](../CONTRIBUTING.md) (the prominent flag, six items, the intake
  paragraph of D48 issue D)
- **Requirements:** LEG-034, LEG-035, LEG-036
- **Status:** core never reopens; instrument form and the material-consistency test are open
  for counsel

### D8 — Threshold: dual AND test, group-consolidated, CPI-indexed, no audit

Fewer than 100 employees plus contractors **and** less than USD 1,000,000 (2026, CPI-U)
prior-tax-year revenue, measured across the whole consolidated group with the PolyForm
"control" language copied verbatim, self-assessed, 60-day cure. No audit clause in the
licence, ever; band self-certification lives in the purchase flow. Prices and tiers never
enter the licence text.

**Amended 2026-09-16 (D48 items 1–3, 12):** the CPI indexing is made deterministic (PolyForm's
series; calendar-year average; nearest USD 1,000; never below USD 1,000,000; successor series
or last value); non-profit, public-benefit, public educational and public bodies meet the
threshold whatever their size; there is **no investment prong** (OPEN-28 closed by decision);
the cure has four defined trigger days, resumption and re-application.

**Amended 2026-09-16 evening (D49 A5–A7):** the counting rules are written into §5 as the
operator's defaults (average month-end headcount, part-time included, each counted once;
each member's latest completed tax year; intra-group transactions excluded; without a
completed tax year, current headcount and annualized revenue since formation; group changes
when they occur; investment is not revenue; central-bank or IMF average rate, chosen
consistently); the revenue limit becomes the June-to-June CPI-U formula, base June 2026,
nearest USD 1,000, never below the previous year's, known before each 1 January — D48 item 2's
calendar-average mechanic is superseded and D8's CPI-U series stays; the cure gains a cap of
60 such days in any twelve months, and versions published during cure days do not vest (§6).

**Amended 2026-09-16 late (D50 B1, B4, B7):** reasonable provisional figures may be used
until reliable ones exist (§5); a fifth cure trigger — where reliable figures later show the
threshold was exceeded, the day you knew or should reasonably have known — with the residual
"otherwise" limb renumbered to (e) (§6); days on which the Association's issuance service was
generally unavailable, as its transparency log records, do not count toward the 60 (§6); and
it is *parts* made public during cure days, not versions, that do not vest, following the
vesting unit of D50 B1 (§6).

**Amended 2026-09-16 late, second pass (D50 C1, C2):** the cure runs only when the use needs
coverage — days of use the §4 evaluation and contribution rule permits neither start the 60
days nor count toward them (§6); and cure days *alone* vest nothing, without blocking a later
credential from covering what was published during them (§6, replacing "parts made public
during cure days do not vest").

- **Implemented by:** licence draft §2 (group and control definitions), §5 (threshold, the
  revenue limit, the non-profit limb), §6 (cure)
- **Requirements:** LEG-014, LEG-017, LEG-018, LEG-019, LEG-020, LEG-022
- **Status:** the counting rules and the cure cap are operator defaults for counsel to
  confirm; the determinability of the non-profit limb stays with counsel (§5 and §6 markers)

### D9 — Four-year Apache-2.0 conversion, plus a steward-lapse backstop

Each part of the software converts to Apache-2.0 four years after it was first made available
to the public under the licence — fixed and licence-wide, never a per-project parameter. If
the Association ceases to exist, or for twelve consecutive months neither records an
Entitlement or Donation Entitlement nor publishes in its transparency log a dated statement
that credentials could be obtained under its schedule, or declares the lapse, the condition falls away and the licence degrades to
permissive.

The register records a genuine **dispute** here: a parallel analysis argued for permanence
(no conversion). The decision stands for version 1.0 on revisability asymmetry — a later
version can lengthen or drop conversion for *future* releases once the movement has
credibility, while nothing can retroactively add trust at launch. A revisit is pre-registered
at sustained scale. Note the interaction with D7's immutable core: the conversion delay may
only ever be **shortened** through delegation, so any lengthening reaches future contributions
only, or requires fresh consent.

**Amended 2026-09-16 (D46 — candidate sheet, entered in DECISIONS.md once the operator
confirms):** the backstop gains a third limb — a signed, published **declaration of lapse**
naming the day — so the board can bring the lapse forward on the day it stops selling, which
the published kill protocol had promised and the text could not deliver; the twelve-month
limb counts Donation Entitlements as issuance and a Waiver keeps no clock running; a
successor is designated only by a signed, published record the successor has accepted,
becomes the Steward Organization for every purpose of the text (§2), and counts as none if it
issues nothing for twelve months. The designation formality stays with counsel (agenda row 8,
widened).

**Amended 2026-09-16 (D48 item 4; consistency fix on §8):** conversion attaches to each
publicly available *part*, not to a named release — forks and repackaging never restart a
clock; material added later has its own; the day is the first verifiable public availability.
The §8 evidentiary handle is the Steward Registry's transparency log and its published
mirrors held outside the Association's control (statutes Art. 9 para. 4, Art. 23 para. 5).
Statutes Art. 13(1)(2) states the ratchet per version ("die Umwandlung jeder Fassung"); the
licence converts per part. Every part of a version was made public no later than the version
itself, so a per-part clock never converts later than a per-version one and the statute's
direction — shorten only — is kept. The unit difference is noted for counsel's statutes
review; the statutes are outside this repository.

**Amended 2026-09-16 evening (D49 A12–A14):** every part in a published version converts no
later than four years after that version was published, earlier dates staying effective (§7);
lapse limb (b) now requires that the Association neither recorded an Entitlement or Donation
Entitlement *nor kept a published schedule under which one could be obtained* for twelve months, so a year with zero
sales alone does not end the model (§8); a successor must be a non-profit that accepts these
terms, every recorded credential and the Association's published commitments on the
charitable destination of funds and no private profit (§8). A13 and A14 are the operator's
amendable defaults on D46's limbs; D46 stays a candidate sheet.

**Amended 2026-09-16 late (D50 B2, B3, B10):** §7 is a present grant — each licensor grants
the Apache-2.0 copyright and patent permissions now, effective four years after each part's
first public availability, so nothing more is needed on that day (the per-part clocks, the
release-level bound and "nobody can extend this" stay); the clock in lapse limb (b) starts at
the text's first official publication and runs on through any succession, a successor is
measured by the same clock — replacing the D46 wording "counts as none if it issues nothing
for twelve months", which could be read as a fresh clock — limb (b) also drops "with no
successor so designated", which §2's successor limb makes redundant — and the text now says what this
decision always meant: lapse does not bring §7's conversion forward (§8; D49 R6 stated in the
text). The Association is bound in the text, not only its successor: it issues Entitlements
and Donation Entitlements only under its published schedule and within its published
constitutional commitments on the charitable destination of funds and no private profit
(§2), and the successor bound in §8 points to those commitments. B3 and B10 are further
amendable defaults on D46's limbs; D46 stays a candidate sheet.

**Amended 2026-09-16 late, second pass (D50 C4, C6):** lapse limb (b)'s second element is
no longer a "published schedule under which one could be obtained" but a **dated statement,
published in the transparency log within the twelve months, that credentials could be
obtained under the schedule** — a fact the log can hold and anyone can check (§8); and the
Association's one-year bound closes with "a renewal is recorded when its term starts, never
in advance", so terms cannot be stacked (§2). C4 is a further amendable default on a D46
limb; D46 stays a candidate sheet.

- **Implemented by:** licence draft §2 ("public" — "made available to the public" until `1.0-draft.5`, D51; the successor limb;
  the Association's own bound), §7, §8
- **Requirements:** LEG-023, LEG-024, LEG-025
- **Status:** never reopens for adopted versions; the D46 limbs and the evidentiary handle are
  draft text for counsel

### D10 — One canonical text, zero per-project parameters, SPDX at launch

Exactly one licence text per version. No fill-in fields except the Purpose Notice constants.
Identifier request filed with demonstrated adoption; proactive submissions to the major
scanner databases; plain-English annotations demonstrating the three corporate fears absent.
Never staple purpose terms onto an existing open-source licence — standalone text only.
Amnesty covenants in the Entitlement agreement, bounded to what the Association and the
steward of record can actually grant.

**Amended 2026-09-16 (D48 items 9, 10, 13):** the Purpose Notice carries
`SPDX-License-Identifier: LicenseRef-PurposeSource-1.0` — the SPDX form for a licence not on
the list; list inclusion is requested when adoption exists, and the invented
"SPDX-Style-Identifier" is dropped. The finished text will be published under CC BY 4.0 with
the licence name a trademark conditioned on shipping the text unchanged (§12;
[../LICENSE-NOTICE.md](../LICENSE-NOTICE.md) §3–§4). The Association's name is written as a
literal and its enterprise identifier joins the Purpose Notice as the identity anchor.

- **Implemented by:** licence draft §1, §12; [../ANNOTATIONS.md](../ANNOTATIONS.md);
  [../FAQ-OSPO.md](../FAQ-OSPO.md) questions 3 and 12; [../README.md](../README.md) "How a
  project adopts"; `placeholders.json` (the complete inventory of constants still undecided)
- **Requirements:** LEG-026, LEG-028, LEG-029, LEG-030, LEG-031, LEG-037, LEG-045
- **Status:** the zero-parameters rule never reopens

### D23 as amended — one *optional* in-repo manifest; the licence file is self-sufficient

Adoption is **one committed licence file, fully operative on its own**. The optional
`PURPOSE.yml` manifest carries operational content only; any licence-id or licensor fields in
it are informational mirrors, non-authoritative, with the licence file governing. Every legal
designation lives in the licence text or in the registry's verified claim flow — never in a
repository file, because a repository file can be edited by anyone with push access and
carries no verified identity. Project Steward delegation happens only through the registry
claim flow.

- **Implemented by:** licence draft §1 (the Purpose Notice; the explanation moved to
  [../ANNOTATIONS.md](../ANNOTATIONS.md) §1 in 1.0-draft.2), §2 (the definition of the
  maintainers — the Project Steward of this decision and of the sign-off, renamed in the
  licence by D51), §9
- **Requirements:** LEG-027, LEG-039
- **Status:** optionality never reopens

### D25 — "open source" is mentioned, never self-applied

No name of the category, the licence, the steward organization, or any product may contain
the two-word term, and the rule extends to taglines used as self-description. Copy may freely
*mention* open source as the predecessor. The honest form — "this is not open source, and we
say so" — is the movement's strongest defensive position, and turning it into a claim of
membership would convert that defence into evidence of bad faith.

- **Implemented by:** [../ANNOTATIONS.md](../ANNOTATIONS.md) Part 1 (which received the
  licence draft's framing notes in 1.0-draft.2); [../FAQ-OSPO.md](../FAQ-OSPO.md) question 1;
  and mechanically by the copy lint (`copy-lint/banned.txt`, run in CI)
- **Requirements:** LEG-038
- **Status:** never reopens

### D26 — demand before major spend; the capped feasibility review with a binary stop

The reason this repository held *drafts* rather than counsel text. Before a full drafting
engagement is commissioned: demand discovery must produce real arm's-length interest from
maintainers and payer-side indications that are written, priced, and from someone with
authority; and a **capped, fixed-fee feasibility review** must answer two questions —
dependable prospective coverage, and commercially acceptable cure and amnesty without central
copyright ownership — with a **binary stop** if either answer is negative and no drafting cure
exists.

**Passed 2026-09-14 (D39):** the operator confirmed that both limbs were executed and pass;
the register records the pass with a filing duty — *"D26 passed — operator confirmation of
2026-09-14; evidence filing pending"* — and every document that cites it says so until the
evidence is filed. What remains before publication is counsel's own work: the three
jurisdiction memos (US, CH, DE) and the full drafting engagement.

- **Implemented by:** the sequencing paragraph in licence draft §15; the status table in
  [../README.md](../README.md)
- **Status:** the spend-follows-evidence principle never reopens; the factual limb reopens
  only if the filed evidence, when read, does not meet the standard

### D48 — The operator decisions of 16 September 2026 (taken on the assistant's recommendation, amendable)

Thirteen decisions and five decided issues, all taken by the operator on 2026-09-16 as the
assistant's recommendations, amendable later. They produced licence revision `1.0-draft.2`,
sign-off revision `signoff-1.0-draft.2` and the matching changes to the plain-English layers.
Each item names the text it changed.

**The thirteen decisions**

| # | Decision | Changed |
|---|---|---|
| 1 | Non-profits, education and public bodies are never Large Organizations; commercial subsidiaries do not inherit the exemption; work for a commercial client is judged by the client | licence §5 (the non-profit limb); README limb 1; FAQ |
| 2 | CPI indexing stays, made deterministic (PolyForm's series; calendar-year average; nearest USD 1,000; never below USD 1,000,000; successor series or last value; the Association publishes an informational yearly figure) | licence §5 (the revenue limit); LICENSE-NOTICE §4 (PolyForm attribution) |
| 3 | Investment prong: out — no "capital raised" test | licence §5 (the marker that asked is removed); ANNOTATIONS |
| 4 | Conversion attaches to each publicly available part, from its first verifiable public availability; forks and repackaging never restart a clock; not extendable for anything already public | licence §2 ("made available to the public"), §7; sign-off §2.3 item 2; CONTRIBUTING; README |
| 5 | Coverage attaches to the licence, not to registration: an Entitlement covers software by name or because it covers every work under these terms (the Pass) | licence §2 (Entitlement definition); README limb 2 — *propagation outside this repository, see below* |
| 6 | Patent defence with the Apache-2.0 §3 litigation trigger; copyright permissions and vesting untouched | licence §3 |
| 7 | Governing law: silent; the applicable conflict-of-laws rules decide and the Entitlement agreement chooses its own law | licence §14 (the decision marker becomes a confirmation marker); ANNOTATIONS; README absence list |
| 8 | Warranty and liability: one plain-English section in the Blue Oak/PolyForm register with the mandatory-law carve-out | licence §13 |
| 9 | Identifier: `SPDX-License-Identifier: LicenseRef-PurposeSource-1.0`; "SPDX-Style-Identifier" dropped; SPDX list inclusion requested later; adoption instructions | licence §1; `placeholders.json` (`LICENSE_ID`); `scripts/check-drafts.mjs` (the identifier-line check); README "How a project adopts"; CONTRIBUTING; FAQ question 12 |
| 10 | The finished text under CC BY 4.0; the licence name a trademark conditioned on shipping the text unchanged; PolyForm sentences used under PolyForm's grant with attribution; the status warning separated from the CC offer | LICENSE-NOTICE §2–§5; licence §12 unchanged |
| 11 | Donation Entitlement term: the registry records start date, end date and schedule version; a later schedule change never alters an existing term | licence §2 (credential term), §9 |
| 12 | Cure with the transitions defined: 60 days from (a) tax-year end, (b) group change, (c) term end or Waiver revocation, (d) first day of uncovered use; resumption; re-application; vested versions need no cure | licence §6; README |
| 13 | Short name "the Association"; the legal name written as the literal "Purpose Source Association"; the enterprise identifier joins the Purpose Notice; the legal-name and short-name tokens removed from `placeholders.json` | licence §1, §2; `placeholders.json` (`STEWARD_ORG_UID` added; `STEWARD_ORG_LEGAL_NAME` and `STEWARD_ORG_SHORT_NAME` removed); sign-off §2.2, §2.3; every text that wrote the tokens |

**The five decided issues**

| # | Issue | Changed |
|---|---|---|
| A | "For the benefit of" defined by cases: use by the organization itself and by anyone acting for it (employees; contractors and service providers — the client is judged); not incidental benefit, ordinary customers of a general service, mere distributors, personal projects, research collaboration where the organization is not the user | licence §4 (two sentences); the examples in the FAQ |
| B | Legal coverage and machine coverage must agree, and the licence governs: a Waiver and an Entitlement take effect when recorded; the §6 cure is the only grace; a public lookup must be able to answer "no current credential, but these versions are permanently covered" | licence §2 ("recorded", "current"), §4 ("the only grace"), §6, §9 — *propagation outside this repository, see below* |
| C | Bounded permanence, honestly stated: the only exceptions to vesting are a credential recorded as void (fraud, forgery, compromised key) and a refunded term; honest under-certification is a contract matter and patent litigation ends only the patent licence, never a vested version; vesting is permission from now on, never forgiveness for earlier use | licence §9; README; FAQ question 8 |
| D | Contribution and upstream-rights model: the sign-off is a contributor instrument and is called one; "no assignment" stays the promise; material that came under other terms stays under them; the intake paragraph | licence §11 (one sentence); sign-off (title, §0, revision log); CONTRIBUTING ("What you are signing off, in practice") |
| E | LICENSE-NOTICE corrected per decision 10 | [../LICENSE-NOTICE.md](../LICENSE-NOTICE.md) |

**Consistency fixes carried with D48:** the six-item immutable core in every text; the
registrar rule scoped to software registered "for others" (statutes Art. 4); the PolyForm
"control" definition verbatim with attribution; the §8 evidentiary handle (transparency log
and its mirrors outside the Association's control); the balanced MDY marker in §4; the
D26-passed wording everywhere; the sign-off revision log with the 16 September entries; the
"Why" commentary moved from the licence body to ANNOTATIONS.

**Two propagation dependencies outside this repository.** (i) Decision 5 amends D42's Pass
wording — "every registered repository" becomes "every work licensed under these terms" — so
the commercial terms and the Pass description must follow the licence. (ii) Issue B binds the
specification's coverage lookup (`spec/coverage/cov-v1.ts`): today an unregistered repository
is a lookup error, a Waiver has a 72-hour cooling period and a renewal has a 30-day grace; when
this was written the licence knew none of these, so the lookup was to follow the licence —
coverage for any work under these terms, effect on recording, and the §6 cure as the only
grace. The register's D48 entry records both propagations; this index only names them.
*(Amended 2026-09-16 evening, D49: the 72-hour Waiver cooling is now in licence §9, so on that
one point the lookup already matches the licence; the 30-day renewal grace is still owed to
the licence's 60 days — see D49 below.)*

**Amended 2026-09-16 evening (D49).** Register items 15 and 16 of D48 — issues B and C in the
tables above — are amended by D49. Item 15 left the lookup's 72-hour cooling to follow a
licence that had no cooling rule; D49 puts the rule into licence §9 (A8): permission from
recording, nothing vests in
the first 72 hours, vesting thereafter while the Waiver stays active, revocation never
retroactive; a credential still counts from the day it is recorded and the §6 cure stays the
only grace. Item 16's "compromised signing key" gives way to the registry's own distinction
(A9): a forged record — one with no genuine issuance behind it — vests nothing, a genuinely
issued record survives a later key compromise, and good-faith reliance on a genuinely issued
record is protected despite the Association's error, an honest under-certification or its
later removal. Fraud, deliberate deception and a refunded term still vest nothing; patent
litigation still ends only the patent licence.

**Amended 2026-09-16 late (D50 B1, B6, B8).** Item 12's "vested versions need no cure" and
issue C's "never a vested version" now read *parts*: the vesting unit is the part made
available to the public, not a named release, so the licence's §6 and §9 say "vested parts".
Issue C's "a refunded term" is refined: a term refunded or charged back in full vests nothing;
a partial refund, or a refund for the Association's own failure, leaves vesting untouched.
Item 6's patent defence now reaches litigation by any member of the licensee's group and ends
the group's patent licences under the licence for that software; copyright licences and
vested parts stay unaffected.

- **Implemented by:** licence draft `1.0-draft.2` throughout;
  [../drafts/contributor-sign-off.md](../drafts/contributor-sign-off.md) `signoff-1.0-draft.2`;
  [../CONTRIBUTING.md](../CONTRIBUTING.md); [../README.md](../README.md);
  [../LICENSE-NOTICE.md](../LICENSE-NOTICE.md); [../ANNOTATIONS.md](../ANNOTATIONS.md);
  [../FAQ-OSPO.md](../FAQ-OSPO.md); `placeholders.json`; `scripts/check-drafts.mjs`
- **Status:** operator decisions, amendable; no text reviewed by counsel; every legal question
  they touch keeps its `[COUNSEL: …]` marker — since the second pass on `1.0-draft.4`, in the
  draft's §15 agenda rather than in the body (D50 item 19)

### D49 — The operator decisions of 16 September 2026, evening: adoptions from the review of the 16 September proposal (taken on the assistant's recommendation, amendable)

On the evening of 16 September 2026 the operator ruled on a competing drafting proposal — the
16 September 2026 review proposal, kept beside this repository in the movement's record as
`license-proposal/` (its `REVIEW-NOTES.md` says what it changes and why) — after two
independent reviews had argued it against draft `1.0-draft.2`. Sixteen points were adopted
and eight rejected, each on the assistant's recommendation and amendable by the operator's
dated note. They produced licence revision `1.0-draft.3`. The register entry is written by the
orchestrator; this index traces to it by number. The proposal's wording, where borrowed, is
attributed in [../LICENSE-NOTICE.md](../LICENSE-NOTICE.md) §4; its structure is not borrowed.

**Adopted (A1–A16)**

| # | Decision | Licence section |
|---|---|---|
| A1 | The grants are irrevocable except as these terms say (Apache tradition) | §3 |
| A2 | An Entitlement or Donation Entitlement is issued only under the Association's published schedule, on the same terms for everyone, for at most one year at a time (statutes Art. 11; D12) — closes the "century-long token" gap without inventing an exceptions procedure, which Art. 11 forbids | §2 |
| A3 | Evaluation and contribution exception: non-production evaluation, security review, and preparing and submitting contributions need no coverage; production use and offering the software's functionality to others are not covered by it (widening only, consistent with the immutable core). Form note from the same-day verification pass: written as a widening of the §3 permissions inside §4's own rule — "The permissions in §3 also apply, with no credential, to …; not to …" — because the first form, "No coverage is needed for …", stood outside §4's "apply only while" sentence; the adopted words are kept, the form is the operator's to confirm | §4 |
| A4 | Contractor and service rule made explicit: a client's coverage, or its meeting the threshold, covers work others do solely for it; running a general service for many customers is the provider's own use; a dedicated deployment for one customer is work for that customer; incidental benefit and merely passing the software on do not count; personal use needs no coverage | §4 |
| A5 | Counting rules as operator defaults: average month-end number of employees and individual contractors with ongoing engagements, each counted once, part-time included; each group member's latest completed tax year; intra-group transactions excluded; without a completed tax year, current headcount and annualized revenue since formation; group changes count when they occur; investment raised is not revenue; a published central-bank or IMF average rate, chosen consistently | §5 |
| A6 | The revenue limit as the June-to-June CPI-U formula: USD 1,000,000 for 2026; for each later year that figure times the preceding June's CUUR0000SA0 value over its June 2026 value, nearest USD 1,000, never below the previous year's; if a value is unavailable the previous limit stands; an officially linked successor series replaces a discontinued one; the limit for a tax year is the calendar year's in which it ended; the Association publishes each year's figure for information (amends D48 item 2's calendar-average mechanic; keeps D8's series; known before each 1 January; monotone, so widening only) | §5 |
| A7 | Cure: at most 60 such days in any twelve months; versions published during cure days do not vest; the four trigger days and resumption stay | §6 |
| A8 | Waiver cooling in the licence: permission from the day recorded; nothing vests in the first 72 hours; if still active after 72 hours, every version then public within its scope vests and later versions vest as published while it stays active; revocation never makes earlier permitted use unlawful (amends D48 item 15; `cov-v1` already implements exactly this). Reason: revocation is prospective (D14), so without cooling a mistaken Waiver for a giant company would vest the whole back catalogue permanently; 72 hours is the only undo | §9 |
| A9 | Vesting exceptions corrected: a forged record — one with no genuine issuance behind it — vests nothing; a genuinely issued record survives a later key compromise; good-faith reliance on a genuinely issued record is protected despite the Association's error, an honest under-certification or its later removal; fraud or deliberate deception and a refunded term still vest nothing; patent litigation ends only the patent licence; vesting is permission from now on, never forgiveness for earlier use (amends D48 item 16) | §9 |
| A10 | Corporate changes: a credential covers its beneficiary and the entities in its group while they are in it; an entity that leaves keeps what it vested; when a covered business is sold or merged its vested coverage goes with that business for its own operations, not the buyer's; coverage cannot be sold on its own | §9 |
| A11 | Forks and imports (OPEN-29 answered at operator level, counsel confirms): vested code stays vested in forks and modified copies; what others add needs its own permission; coverage of named software reaches the contributions first offered under these terms through that project, not code imported from elsewhere; forking gives no power to waive conditions on upstream code | §9 |
| A12 | Every part in a published version converts no later than four years after that version was published; earlier dates stay effective; per-part clocks and "forks never restart a clock" stay | §7 |
| A13 | Lapse limb (b) widened: the last day of any twelve consecutive months in which the Association neither recorded an Entitlement or Donation Entitlement nor kept a published schedule under which one could be obtained — so a year with zero sales alone does not kill the model; still determinable from the transparency log, where the schedule's publication is logged; the operator's amendable default on a D46 limb, the §8 marker's clock question kept; taken before any version is published — once 1.0 is out, adding a reset event to limb (b) would move the backstop's clock in the direction Art. 13(1)(6) and sign-off item 6 forbid for existing contributions | §8 |
| A14 | Successor bound: a non-profit that accepts these terms, every recorded credential and the Association's published commitments on the charitable destination of funds and no private profit; the signed-record formality and "counts as none after 12 months" stay. The verification pass kept "records nothing" and put to the §8 marker whether the successor's twelve-month test should mirror limb (b) (a kept schedule as well as a recorded credential), since A13's reasoning applies equally | §8 |
| A15 | Notices cure: putting a left-out notice back restores the permission from then on; no written-notice machinery | §11 |
| A16 | Inbound = outbound default (Apache §5 tradition): a contribution intentionally submitted to the project is offered under these terms unless the contributor clearly says otherwise; contributors keep their copyright, nothing assigns it. The separate sign-off stays the instrument for forward delegation and is not weakened | §3; sign-off text unchanged (dated note in its §0); CONTRIBUTING |

**Rejected (R1–R8) — draft.2's text stands on each**

| # | Proposal | Why not |
|---|---|---|
| R1 | Refunded terms keep vesting | The payment processor may itself refund any sale within 14 days at its own discretion (its MSA 10.2) and the Association cannot exclude that; if a refunded term vested, any buyer could vest the whole back catalogue for free by buying and refunding. A refunded term vests nothing (D48 item 16); the website's Entitlement terms already say so. The "acquired rights" concern does not apply — a refunded buyer acquired nothing |
| R2 | A separate outage permission | Redundant: §6(d) already gives 60 days from the first day of use while no limb is true, which is the continuity a new user needs during an issuance outage. The proposal needs an outage rule only because its own text forbids first-use grace |
| R3 | A paraphrased "control" definition | PolyForm's verbatim definition stays (LEG-018) |
| R4 | Lane names (Pass, Project, Portfolio) in the licence | D11: lanes and prices live in the schedule; the licence says "the software it names, or every work licensed under these terms" |
| R5 | An activity-scoped non-profit exemption | The entity-based limb is simpler to self-assess; its two exclusions (a commercial organization the body controls; work for a commercial client) stay |
| R6 | Early Apache conversion on lapse | D9: lapse already removes the condition; what remains — notices, patent defence and the name — is what Apache imposes anyway |
| R7 | Rounding the limit up to whole dollars | Nearest USD 1,000 stays — a limit a person can remember |
| R8 | "You may offer support or warranties on your own behalf" and "your terms must not remove recipients' permissions" | Direct per-licensor grants make the second implicit, and the first is not needed |

**Amended 2026-09-16 late (D50).** The items below are refined by D50; the rows above keep
their original wording as the record of what was decided that evening. A7: it is *parts made
public* during cure days that do not vest, not versions (B1). A8: after 72 hours a Waiver
vests every *part* then public within its scope, and later parts as they are made public
(B1); whether it was still active is shown by the transparency log, not by a copy saved at
issue (B9). A9: "a refunded term" becomes a term refunded or charged back *in full*; a
partial refund, or a refund for the Association's own failure, leaves vesting untouched (B6).
A12: the release-level bound stays, inside a §7 that is now a present grant with deferred
effect (B2). A13: the clock in limb (b) is anchored at the text's first official publication
and runs on through any succession (B3). A14: "counts as none after 12 months" is replaced by
"measured by the same clock", so the verification pass's mirror question falls away (B3), and
the successor bound now points to the Association's own bound in §2 (B10). R1 stands — a
term refunded in full still vests nothing — with B6's nuance added. R2 stands: B7's outage
rule is a counting rule inside the cure, not a separate permission. R6 stands, and the text
now says it: lapse does not bring §7's conversion forward.

**Amended 2026-09-16 late, second pass (D50 C1–C6).** A2: the one-year bound now ends "a
renewal is recorded when its term starts, never in advance" (C6). A7: cure days *alone* vest
nothing, and a later credential may cover that code (C2); permitted evaluation days never
start or count toward the cure (C1). A9 and D50 B6: a term refunded or charged back in full
vests nothing, but use during it before the refund stays lawful (C5). A10: a credential
covers its beneficiary and the entities the beneficiary controls, while it controls them; a
parent or sister company only if the record names it — "its group's entities while they are
in it" is superseded, because on that wording a bought subsidiary's Pass would have covered
the acquirer's whole group (C3). A13: the schedule element of limb (b) becomes a dated
statement in the transparency log that credentials could be obtained under the schedule
(C4). R1 and R2 of this record stand a third time — refunds keeping vesting and the outage
permission were asked for again in the third note and turned down again.

**Length.** D49 set a target of 2,000 words for the body §1–§14 (markers excluded).
`1.0-draft.3` ends at about 2,330: the cuts the operator allowed (§10 to one sentence, §2 and
§8 tightened, §5's old mechanic replaced, a compression pass in every section) removed about
215 words, the sixteen adoptions added about 400, and the same-day verification pass removed
about 40 more by cutting descriptive sentences that carried no decided element (the
registry's no-account sentence in §2, the money-flow clause in §4, the no-prices sentence in
§5, "fixed and licence-wide" in §7, the log's full name in §8). What is left is definitions
other sections use, decided protections and the adopted sentences themselves — none of which
the operator allowed to be cut — so the target stays open until the operator names a section
to drop (the reopen line of D48) or records in a dated note that the target is waived for
`1.0-draft.3`. Neither has happened; the README's description of the draft states the actual
count. *(Amended 2026-09-16 late, D50: for `1.0-draft.4` the operator set a bound of 2,350
words and named §2 and §8 as the sections to tighten, never a decided protection or a defined
term another section uses; the draft ends at 2,348 by the counting method this entry used for
draft.3, or 2,364 if the section rules and code-fence lines are counted as words. The bound
does not withdraw this entry's 2,000-word target; whether that target stays open is the
operator's to say.)*

**Propagation owed outside this repository** (the register's D49 entry records them; this
index only names them):

- `spec/coverage/cov-v1.ts` gives a renewal a **30-day** grace; the licence's §6 cure gives
  **60 days** from the day a term ended and is the only grace the licence knows (D48 item 15,
  unchanged on this point). The lookup follows the licence. Its 72-hour Waiver cooling now
  matches licence §9 (A8), so that half of D48's propagation is closed by the licence moving.
- `repo-record.v1.json` describes its `publishedAt` as the publication of the **licence
  version** and treats it as the conversion anchor. The licence's anchor (§7) is the
  **software's** first public availability — a public commit, tag, release or package — and,
  for a published version, no later than that version's publication (A12). The schema's
  description must say so; the release manifest itself is outside the licence.
- The website's Entitlement terms already say a refunded term vests nothing (R1): no change
  owed. *(Amended 2026-09-16 late, D50 B6: the distinction between a full refund or
  chargeback, a partial refund and a refund for the Association's own failure is now owed to
  the refund runbook and the Entitlement terms — see D50.)*
- D46 (dissolution and steward lapse) is still a candidate sheet. A13 and A14 amend its limbs
  as the operator's amendable defaults; it enters the register once the operator confirms.
- The register's D14 (amended 2026-09-01) says a revocation inside the 72-hour window voids
  the Waiver ab initio. Licence §9 keeps the no-vesting half and rejects the other: revocation
  never makes earlier permitted use unlawful. D14's wording follows the licence; `cov-v1`
  already treats the window as governing vesting, not permission.

- **Implemented by:** licence draft `1.0-draft.3` throughout (its revision-log row lists every
  adoption by section); [../README.md](../README.md) (the evaluation exception, the 72-hour
  rule, the cure cap, the corporate-change rule, the lapse trigger, the word count);
  [../CONTRIBUTING.md](../CONTRIBUTING.md) (the exception; the inbound default does not
  replace the sign-off); [../drafts/contributor-sign-off.md](../drafts/contributor-sign-off.md)
  (dated note only, text unchanged); [../LICENSE-NOTICE.md](../LICENSE-NOTICE.md) §3–§4 (the
  borrowed wording attributed and cleared); [../ANNOTATIONS.md](../ANNOTATIONS.md) and
  [../FAQ-OSPO.md](../FAQ-OSPO.md) (each adoption explained in its clause; the debate's
  questions answered)
- **Status:** operator decisions, amendable; no text reviewed by counsel; the §4, §5, §6, §8
  and §9 markers carry the new questions (agenda rows 4, 5, 6, 8 and 9 of the draft); the
  word-count target is open

### D50 — The operator decisions of 16 September 2026, late: adoptions from the 16 September comparison review (taken on the assistant's recommendation, amendable)

Late on 16 September 2026 the operator ruled on the same reviewer's second pass — the
16 September 2026 comparison proposal, kept beside this repository in the movement's record as
`license-proposal/comparison-e3037ff/` (its `ANALYSIS.md` argues the points; its
`purpose-source-license-1.0-revised-proposal.md` is the proposed text). It was written against
`1.0-draft.2` (commit `e3037ff`) and read against `1.0-draft.3`, which already carried most of
what it asked for: the June-to-June CPI formula, the 72-hour Waiver cooling, forged against
genuine records, the rolling cure cap, forks and imports, the release-level conversion bound,
the evaluation exception and the one-year bound. What remained was ruled on point by point:
eleven adoptions and seven rejections, each on the assistant's recommendation and amendable by
the operator's dated note. They produced licence revision `1.0-draft.4` and sign-off revision
`signoff-1.0-draft.3`; a same-day verification pass, noted below, followed. The register entry is written by the orchestrator; this index traces to
it by number. The proposal's wording, where borrowed or adapted, is attributed in
[../LICENSE-NOTICE.md](../LICENSE-NOTICE.md) §4; its structure is not borrowed.

**Adopted (B1–B11)**

| # | Decision | Section |
|---|---|---|
| B1 | The vesting unit is the part made available to the public, not a named release: a part is vested for an organization if it is within its credential's scope and was made available to the public on or before the end of that term. "Vested versions" become "vested parts" throughout; the Waiver vests "every part then public within its scope"; parts made public during cure days do not vest; "version" survives only for §7's release-level bound. Reason: draft.3's §7 converted parts while §9 vested versions, so a project that never tags a release left a paying buyer with nothing permanent | licence §2, §3, §6, §9 |
| B2 | The Apache-2.0 conversion is a present grant: each licensor grants, now, the copyright and patent permissions of the Apache License, Version 2.0, for each part, effective four years after that part was first made available to the public under these terms; nothing more is needed on that day. Per-part clocks, "forks never restart", the release-level bound and "nobody can extend this" stay; the §7 marker shrinks to confirmation (the draft.3 marker had asked counsel to do exactly this) | licence §7 |
| B3 | The clock in lapse limb (b) starts at the text's first official publication and runs on through any succession; a successor is measured by the same clock (replacing "counts as none if it records nothing for 12 consecutive months", which could be read as a fresh clock); lapse does not bring §7's conversion forward (D9); limb (b)'s closing words "with no successor so designated" are cut, because §2 already defines the Association to include its designated successor and the phrase was the one place a fresh clock could be read in | licence §8 |
| B4 | Reasonable provisional figures may be used until reliable ones exist (§5); a fifth cure trigger, (d): where reliable figures later show the threshold was exceeded, the day you knew or should reasonably have known — "otherwise" renumbered to (e) so the residual limb stays last (§6) | licence §5, §6 |
| B5 | A contribution first published in a development fork or branch for submission counts as originating in the project once accepted (after the imports sentence) | licence §9 |
| B6 | Refund nuance: a term refunded or charged back in full vests nothing (D49 R1 stands); a partial refund, or a refund for the Association's own failure, leaves vesting untouched — the distinction the commerce design already makes | licence §9 |
| B7 | Outage days, in the minimal form: days on which the Association's issuance service was generally unavailable, as its transparency log records, do not count toward the 60. No separate outage permission (R4 below) | licence §6 |
| B8 | The patent defence reaches the group: if you or a member of your group files patent litigation alleging that the software or a contribution in it infringes or contributes to infringing a patent, every patent licence you or your group hold under these terms for that software ends that day; copyright licences and vested parts are unaffected | licence §3 |
| B9 | A Waiver's survival past 72 hours is shown by the transparency log, not by a copy saved at issue | licence §9 |
| B10 | The Association is bound in the text, not only its successor: it issues Entitlements and Donation Entitlements only under its published schedule, on the same terms for everyone, for at most one year at a time, and within its published constitutional commitments on the charitable destination of funds and no private profit (§2); the successor bound in §8 points to "the commitments in §2", so nothing is said twice | licence §2, §8 |
| B11 | Sign-off §3 item 2: "no licence to the Association at all" becomes "no special or exclusive licence to the Association" — the Association, like anyone, takes the public licence. A wording correction with a dated note; nothing else in the sign-off changes and nothing is weakened | sign-off §3 |

**Rejected (R1–R7) — draft.3's text stands on each**

| # | Proposal | Why not |
|---|---|---|
| R1 | A refunded term keeps vesting | As D49 R1: the payment processor may itself refund any sale within 14 days at its own discretion, and a refunded buyer acquired nothing; B6 adds only the partial-refund and Association-failure nuance |
| R2 | Thirty days after written notice to cure a missing notice | "Putting it back restores the permission from then on" (§11, D49 A15) is friendlier and needs no notice machinery |
| R3 | "Sublicensing on these same terms" in the copyright grant | Recipients take directly from each licensor; there is nothing to sublicense |
| R4 | A separate outage-permission clause | B7 instead: §6(e) already gives 60 days from first use, so the outage rule only needs to stop the clock, not grant anything |
| R5 | Reverting lapse limb (b) to issuance-only | D49 A13's "nor kept a published schedule" stays: the proposal was written against draft.2, before A13; a year with nothing on offer must still end the model |
| R6 | UTC times and other specification-level detail in the licence | The licence stays at the level of the rule; the registry's published terms carry the mechanics |
| R7 | "Now or later" patent claims | Withdrawn by the reviewer itself; D48's decision to drop after-acquired claims stands |

**Adopted in the second pass, items 13–18 (C1–C6) — the reviewer's third note on
`1.0-draft.3`, ruled on late the same night**

| # | Item | Decision | Section |
|---|---|---|---|
| 13 | C1 | Evaluation must not consume the cure clock: §6 opens "When your use needs coverage and none of (a) to (d) in §4 is true, the permissions in §3 still continue for 60 days from:", and adds "Days of use the evaluation and contribution rule in §4 permits do not count." The §4 exception is a permission in its own right, so trigger (e) cannot start during permitted evaluation — two months of evaluation, then production, means 60 days from the first production day | licence §6 |
| 14 | C2 | Grace alone vests nothing, but does not block later vesting: "These days alone vest nothing; a later credential may cover that code under §9" replaces "Parts made public during these days do not vest under §9", which attached the no-vesting to the part instead of to the days | licence §6 |
| 15 | C3 | Coverage does not spread to an acquirer's group: "A credential covers its beneficiary and the entities the beneficiary controls, while it controls them. A parent or sister company is covered only if the record names it." The leaver sentence and the sale-or-merger sentence stay. The §5 group test keeps parents and siblings on purpose — the size test and the coverage scope differ | licence §9 |
| 16 | C4 | Lapse limb (b) made objectively checkable: "nor published in its transparency log, within that period, a dated statement that credentials could be obtained under its schedule" replaces draft.3's "nor kept a published schedule under which one could be obtained" (shortened in draft.4's first pass to "nor kept a published schedule for obtaining one"). The §8 agenda row's determinability question shrinks to whether a false statement is actionable and how a successor inherits the clock | licence §8, §15 |
| 17 | C5 | Refund: earlier use stays lawful — "A term refunded or charged back in full vests nothing; use during it before the refund stays lawful." B6's partial-refund and Association-failure sentence stays | licence §9 |
| 18 | C6 | No stacked years: "…and for at most one year at a time; a renewal is recorded when its term starts, never in advance." | licence §2 |
| 19 | — | Every `[COUNSEL: …]` marker leaves the licence body (§1–§14) for §15, rebuilt as a three-column agenda — Section · Our position (as drafted) · What counsel confirms — one row per former marker, each confirmation cell written as a marker so the honesty gate still counts it (the gate counts markers anywhere in the draft; `MIN_COUNSEL_MARKERS` in `scripts/check-drafts.mjs` equals the new count, 15, its comment saying the markers live in §15). Reason, the operator's instruction: every operator decision the markers once asked for is taken, and what remains is legal confirmation, which belongs in one list, not between the clauses. The canonical rendering shows the licence first and the lawyers' list after it | licence §1–§14 (none), §15; `scripts/check-drafts.mjs`; ANNOTATIONS Part 0; README; canonical/README |

Rejected again in the second pass, unchanged from D49 and this record: a separate outage
permission (B7 already stops the count on logged outage days, which also covers an outage
longer than 60 days and an organization that had used its allowance); a 30-day
written-notice cure for notices; refunds keeping vesting.

**Length.** The operator held the body §1–§14 (markers excluded) at or under 2,350 words for
`1.0-draft.4`, naming §2 and §8 as the sections to tighten and forbidding the cut of any
decided protection or of a defined term another section uses. The first pass ended at 2,348
words by the counting method D49 used for draft.3 (headings and the Purpose Notice constants
in, markers, section rules and code-fence lines out), or 2,364 if the rules and fence lines
are counted as words. The second pass added C1–C6 (about seventy words), moved the markers
out (which changed nothing, since they were never counted) and took every meaning-preserving
cut the drafter could find; it stood at 2,381 by the same method, 31 above the bound. The
verification pass on the second pass took the last three, each dropping no decided element:
the §9 "once vested" example list (D12 decides permanence, not the list; the FAQ and
ANNOTATIONS keep the events), §7's "no project, no licensor, not the Association" aside
("nobody" already means them), and "copying" and "re-releasing" in §7's restart sentence
(D48 item 4 decides forks and repackaging). The body ends at 2,350 by the same method, at
the bound. The
2,000-word target of D49 is not withdrawn by this bound; see the dated note under D49.

**Same-day verification pass (2026-09-16 late).** Wording fixes on `1.0-draft.4` that change
no decision: §6(d) now says it controls "even if (a) gives an earlier day", so the 60 days
cannot have run out before an organization could know it was over; §6's outage sentence says
"either 60" — the continuation and the cap; §5 names the CPI-U series by its BLS code alone
(the descriptor lives in ANNOTATIONS §5); §13 keeps PolyForm's "will be liable", so
LICENSE-NOTICE §4's attribution stays exact; §12 says "as the Association published it", so
the defined term "version" is used only by §7's bound (B1); §9's refund sentence says "a
partial refund, or a refund for the Association's own failure" in B6's own words; §2 says
"designee". The §6, §8 and §9 markers gain three questions (agenda rows 6, 8 and 9): whether
(d) should control where (a) also fits; whether "this text" in §8 should read as the first
official publication of any version of these terms, so that a later version applied to
existing contributions cannot move the clock's start (statutes Art. 13 para. 1 item 6;
sign-off core item 6); and whether a refund in full made for the Association's own failure
reads as leaving vesting untouched, as intended — the record's B6 order (full refund first) is
kept, and the reader's point goes to counsel. One thing this pass left open — FAQ question
19's "the exception has no clock", which on the first-pass words §6's opening could be read
to cut off after 60 days — is closed by the second pass's C1 (item 13 above). Count after
this pass: 2,348.

**Propagation owed outside this repository** (the register's D50 entry records them; this
index only names them):

- **FS-05 and the `cov-v1` vesting generator** (`spec/coverage/cov-v1.ts`): the generator
  vests *releases* — D12's formula "vested iff version publication date ≤ term end". The
  licence now vests *parts*: a part is vested if it was made available to the public — a
  public commit, tag, release or package — on or before the end of the term. The generator
  and the lookup must vest parts, not releases, and must answer for a project that never tags
  a release at all. The licence governs; D12's formula follows it.
- **The refund runbook and the Entitlement terms**: a refund must be recorded as one of three
  things — a full refund or chargeback (vests nothing), a partial refund (vesting untouched)
  or a refund for the Association's own failure (vesting untouched) — because §9's marker asks
  counsel whether the distinction is determinable from the record, and it is only if the
  record makes it. D49's note that the Entitlement terms owe no change on R1 is amended
  accordingly.
- **D14 as amended** (Waivers: revocation prospective; the 72-hour cooling since D49 A8): its
  wording follows licence §9 as B1 and B9 now put it — after 72 hours every *part* then public
  within the Waiver's scope vests, later parts as they are made public, and whether the Waiver
  was still active is shown by the transparency log, not by a copy saved at issue. D49's note
  on D14's ab-initio wording still stands.
- **The Entitlement terms and the patent defence**: if they mirror licence §3, the trigger now
  reaches litigation by any member of the holder's group and ends the group's patent licences
  under the licence for that software; copyright licences and vested parts stay unaffected
  (B8).
- **D46** (dissolution and steward lapse) is still a candidate sheet. B3 (the anchored,
  continuous clock; a successor measured by the same clock) and B10 (the Association's own
  bound) amend its limbs as the operator's amendable defaults, as A13 and A14 did; it enters
  the register once the operator confirms.
- **Statutes Art. 13 para. 3 and Art. 14 para. 3** say "vested versions"; since B1 the
  licence vests *parts*. Every part of a version was made public no later than the version
  itself, so per-part vesting keeps everything the statute guarantees and adds to it — the
  direction Art. 22 allows. The unit difference joins the one D9 already notes for
  conversion, for counsel's statutes review; the statutes are outside this repository.
- The `repo-record.v1.json` note under D49 stands: the licence's conversion anchor is the
  software's first public availability, per part, and the schema's description must say so.
- **The coverage lookup and evaluation use (C1)** (`spec/coverage/cov-v1.ts`): the lookup
  must treat non-production evaluation, security review and contribution as *permitted* use
  with no credential and no clock — never as uncovered use in cure. A lookup that starts a
  60-day count on the first day it sees a Large Organization touch the software would
  contradict §6's "when your use needs coverage" and its "days … the evaluation and
  contribution rule in §4 permits do not count". Where the lookup cannot tell evaluation from
  production, it must say so rather than count.
- **The coverage scope (C3)**: a credential's scope is the **beneficiary plus the entities the
  beneficiary controls, while it controls them** — not the §5 group. The lookup (and any
  group-resolution logic behind it) must not extend a subsidiary's credential upward to a
  parent or sideways to a sister company unless the record names them, and must re-evaluate
  control on the day of a sale. The §5 threshold computation keeps the full group; the two
  computations now differ on purpose and must not share one "group" function.
- **The issuance-open log statement (C4)**: lapse limb (b) now stops only on a **dated
  statement, published in the transparency log within the twelve months, that credentials
  could be obtained under the schedule**. The platform must publish such a statement as a
  signed log entry on a schedule (at least once in every twelve months, and in practice far
  more often), the log format must carry it as a first-class entry type, the mirrors must
  carry it, and the lapse reader must look for it. A price schedule on the website no longer
  stops the clock. A statement made when credentials could in fact not be obtained is the
  case the §8 agenda row sends to counsel; the runbook should make the statement only when
  issuance is actually open.
- **Renewals recorded at term start (C6)**: the registry's issuance rules and the Entitlement
  terms must record a renewal on the day its term starts, never in advance, so that the
  longest recorded coverage at any moment is one year (statutes Art. 11; D12).
- **Refunds and earlier use (C5)**: the refund runbook and the Entitlement terms must say
  that a full refund or chargeback voids vesting only — the use during the term, before the
  refund, was licensed use and is not reopened.

- **Implemented by:** licence draft `1.0-draft.4` throughout, both passes (its revision-log
  rows list every adoption by section); [../drafts/contributor-sign-off.md](../drafts/contributor-sign-off.md)
  `signoff-1.0-draft.3` (§3 item 2 with its dated note; §4's trace line);
  [../README.md](../README.md) (vesting by parts, the present grant, the clock anchor, the
  outage-days rule, the refund nuance, the word count); [../CONTRIBUTING.md](../CONTRIBUTING.md)
  (the development-fork rule; the sign-off's "no special or exclusive licence"; the decided
  list); [../LICENSE-NOTICE.md](../LICENSE-NOTICE.md) §3–§4 (the comparison proposal's wording
  attributed and cleared); [../ANNOTATIONS.md](../ANNOTATIONS.md) and
  [../FAQ-OSPO.md](../FAQ-OSPO.md) (each adoption explained in its clause; the "what if we
  never tag releases?" answer; the rejected list); the dated notes under D7, D8, D9, D48 and
  D49 above
- **Status:** operator decisions, amendable; no text reviewed by counsel; the §3, §5, §6, §7,
  §8 and §9 questions are carried by the draft's §15 agenda rows (rows 2, 5, 6, 7, 8 and 9),
  where every marker now lives (item 19), and shrink where the text now answers; the
  propagation above is owed; the 2,350-word bound is met at 2,350 and the 2,000-word
  target of D49 is unresolved

### D51 — The plain-language pass of 17 September 2026 (the operator's instruction; no decision changed)

On 17 September 2026 the operator instructed a plain-language pass over the licence body
§1–§14 under one rule: **same meaning, same legal force, fewer and simpler words.** Nothing
was to be added, dropped, widened or narrowed — every rule, number, day count, exception,
actor and defined role of `1.0-draft.4` survives — and every sentence that scopes a
permission ("apply only while", "simply unlicensed: no promise is broken, there is no
permission") keeps its scope-of-permission form, never "you must" or "you may not", because
that form is what makes §4 a licence condition rather than a promise (D6; §15's §4 row). A
drafter rewrote the text; a meaning-and-force verifier diffed it clause by clause against
`1.0-draft.4` on a checklist of everything that had to survive; a reader verifier measured
it; a fixer applied the findings, meaning winning wherever it met readability. The pass
produced licence revision `1.0-draft.5`. The register entry is written by the orchestrator;
this index traces to it by number.

**No rule changed.** The verifier's two must-fix findings were restorations of `1.0-draft.4`'s
meaning, not decisions: the patent grant keeps Apache-2.0 §3's own scope — "the patent
claims they can license that are necessarily infringed by their contribution, alone or
combined with the software they contributed it to" — because the plain form tried first
("that using their contribution would always infringe") keyed the scope to use alone, so a
claim infringed only by making, importing or transferring fell out of the grant, on which
§15's §3 row and §7's seamless conversion both rest; and §2 says the §3 permissions for
software the Association registers for others "come from the software's own contributors",
as draft.4 said "the software's own licensors". The PolyForm "control" definition and the
group definition are byte-identical to draft.4 (LEG-018). Every §-cross-reference points
where it did; section numbers are unchanged; §15's fourteen questions are unchanged.

**The renames.** The licence keeps five capitalised terms — the Association, the Registry,
Entitlement, Donation Entitlement, Waiver — where draft.4 had nine. The statutes, the
specification and the contributor sign-off keep their own vocabulary; this table is the map.

| The licence says (since `1.0-draft.5`) | The licence said (`1.0-draft.4`) | The statutes say | The specification, the sign-off and this index say |
|---|---|---|---|
| **the Association** — the Purpose Source Association named in §1, or its successor designated under §8; the Purpose Notice line reads "Steward: Purpose Source Association (the Association)" | the Steward Organization (the Association) | the Association — registrar of records and router of funds (Art. 4) | Steward Organization (sign-off §2.2, "which the licence calls the Association"; D46 and D9 above) |
| **the Registry** — the public record at the registry address, with its transparency log and its mirrors; the Purpose Notice label reads "Registry:" | the Steward Registry | the public registry (Art. 9) | Steward Registry (sign-off §2.2; D9 and D23 above); the registry (`registry-v0`, `spec`) |
| **the maintainers** — whoever holds administrative control of the software's canonical repository, or whoever they name through the Registry's verified claim, nowhere else | the Project Steward | the repository administration (Art. 4 para. 2, Art. 10, Art. 13 item 5) | Project Steward (sign-off §2.2 and core item 5; D7 and D23 above); project steward, maintainer (`spec`) |
| **large organization**, lower case, defined once in §5 as an organization that does not meet the threshold below | a Large Organization (defined in §2) | not named; the statutes speak of the threshold | Large Organization (D48 item 1 and the D50 propagation notes above; the coverage lookup) |
| **covered** / **coverage** — holding a current credential for the software (§2); "the Purpose Condition" survives only as §4's title, "4. The Purpose Condition — when you need coverage" | the Purpose Condition, in the body and the title | the licence's purpose condition (Art. 9 para. 3, Art. 14) | Purpose Condition (sign-off §2.2); coverage (`cov-v1`) |
| **contributor** — each contributor grants for its own contribution; nobody grants for anyone else | licensor; per-licensor grants | licensor, "per licensor" (Art. 4 para. 1) | licensor (D6, D48, D49 and D50 above; the Entitlement terms) |

Other words, replaced throughout the body: "exercising these permissions" → "using the
software"; "for the benefit of" → "for" (§4 keeps its definition by cases); "never a
licensor, sublicensor or rights-holder" → "does not own or license the code it registers for
others"; "non-exclusive" → "everyone gets the same grants"; "irrevocable" → "cannot be taken
back, except as these terms say"; "made available to the public" → "public", defined once in
§2; "vested" defined once in §2 as "yours to keep for good"; "credential's scope" → what the
credential "covers"; "the earliest of" → "on the first of these days"; "thereafter",
"herein", "hereby", "notwithstanding", "shall", "pursuant" and "limb" do not appear in
§1–§14. Section titles in plain words, numbers unchanged: 1 Purpose Notice · 2 Words used
here · 3 What you may do · 4 The Purpose Condition — when you need coverage · 5 Who counts
as large · 6 Sixty days to put it right · 7 Apache-2.0 after four years · 8 If the
Association stops · 9 What you keep · 10 What these terms never ask of you · 11 Notices ·
12 The name · 13 No warranty · 14 If part of this fails. Inside each section the rule comes
first, the exception second, the mechanics last; the pass adds lists for §5's public bodies
and §9's reliance cases, and §13 opens with "This section applies as far as the law allows"
so that the split disclaimer and exclusion both keep the qualifier.

**Metrics**, measured on the canonical rendering's body §1–§14 with the pass's own
instrument (scratchpad `readability.py`: headings, section rules and the Purpose Notice
lines excluded; sentences split at `.`, `;` and `:` before a capital or `(`; list items
counted as sentences; the Flesch reading-ease and grade formulae as the operator's
instruction states them):

| | `1.0-draft.4` (second pass) | `1.0-draft.5` | Target |
|---|---|---|---|
| Words | 2,250 | 2,310 | ≤ 2,000 — **not met** |
| Sentences | 125 | 163 | — |
| Words per sentence | 18.0 | 14.2 | ≤ 17 |
| Sentences over 30 words | 17 | 0 | none |
| Flesch reading ease | 51.2 | 57.0 | ≥ 55 |
| Grade | 10.6 | 8.8 | ≤ 10 |
| Capitalised defined terms | 9 | 5 | ≤ 5 |

The operator's own baseline for draft.4, taken with a stricter instrument (2,278 words, 109
sentences, 20.9 words per sentence, 18 over 30, Flesch 45, grade 12.2), differs from the
drafter's 2,250 / 125 / 18.0 / 17 / 51.2 / 10.6 on the same text only in how sentences are
split and syllables counted; both columns above come from one instrument, so they compare.
By the method the D49 and D50 counts used (headings and the Purpose Notice constants in;
markers, rules and fences out) the body went from about 2,350 to about 2,430 words. **The
word target is not met, and by that older method the D50 bound is passed:** the four
definitions the pass adds (covered, vested, the maintainers, large organization), the
splitting of seventeen sentences (each split adds a subject) and the two new lists cost more
words than the renames save, and every remaining sentence carries an element from the
must-survive list, so no drafter could cut further without dropping a decided rule. As under
D49 and D50, the last cut is the operator's to name. The Flesch margin (57.0 against 55) is
thin enough that the operator's stricter instrument may land near the line.

**Propagation owed outside this repository** (the register's D51 entry records them; this
index only names them):

- **The Purpose Notice labels.** §1 now reads "Steward: Purpose Source Association (the
  Association)" and "Registry:" where draft.4 read "Steward Organization:" and "Steward
  Registry:". Any kit, example or template in `spec` or `registry-v0` that reproduces the
  notice block follows the licence; if the notice labels turn out to be frozen there, the
  "Registry:" label is a one-line revert in the licence and nothing else depends on it.
- **The coverage lookup and the Entitlement terms** keep their vocabulary (Large
  Organization, licensor, Project Steward) and map to the licence's words by the table
  above; no behaviour changes, since no rule changed.
- **The statutes** (Art. 4, 9, 10, 13) already say "the repository administration" and "the
  public registry"; no change is owed. The sign-off keeps "Project Steward" and "Steward
  Registry" in its §2.2 and names the licence's words beside them (`signoff-1.0-draft.4`).

- **Implemented by:** licence draft `1.0-draft.5` throughout (its §16 row lists every rename
  and replacement, the metrics and the same-day verification pass); the canonical rendering;
  [../drafts/contributor-sign-off.md](../drafts/contributor-sign-off.md)
  `signoff-1.0-draft.4` (§2.2's glosses and dated note; §4's trace line);
  [../README.md](../README.md) (the description of the licence, the draft row, the
  vocabulary paragraph); [../CONTRIBUTING.md](../CONTRIBUTING.md) (the six-item flag's
  glosses, the vocabulary paragraph, "per-contributor grants");
  [../LICENSE-NOTICE.md](../LICENSE-NOTICE.md) §4 (the PolyForm §13 sentence as now carried;
  the borrowed wording as now spelled); [../ANNOTATIONS.md](../ANNOTATIONS.md) and
  [../FAQ-OSPO.md](../FAQ-OSPO.md) (quotations and section titles aligned to the new wording;
  Part 0 carries the metrics); the dated notes under D6 and D23 above
- **Status:** the operator's instruction, executed; no decision taken or amended; no text
  reviewed by counsel; the word target open, as under D49 and D50

---

## Supporting decisions the drafts refer to but do not implement

| Decision | Subject | Why it appears in these texts |
|---|---|---|
| D11 | Three lanes, steward-only pricing, one schedule | The licence must stay binary; prices live in the schedule and no price, tier or band appears anywhere in the licence text (ANNOTATIONS §5); lane names stay out (D49 R4) |
| D12 as amended | Per-version vesting, canonical formula "vested iff version publication date ≤ term end"; annual entitlements | Licence draft §9 — per *part* since D50 B1, so the formula follows the licence and reads "vested iff the part was made available to the public ≤ term end"; the one-year bound in §2 (D49 A2), with renewals recorded at term start since D50 C6; FAQ question 6 |
| D13 | Adoption and quit live in the repo; powers live on the platform | Why no admin-facing terms appear in the licence (ANNOTATIONS Part 3) |
| D14 as amended | Waivers: registry-only, repo-scoped, public, gratis; revocation prospective | Licence draft §2 and §9 (the 72-hour cooling since D49 A8; vesting per part and the log as proof of survival since D50 B1 and B9); FAQ question 10 |
| D18 | Donate-direct lane; separate payment rails | Licence draft §2 and §4 limb (d) |
| D24 | Migration and consent engine; notice preservation | Licence draft §11 |
| D29 §6.3 | The registrar's "never a licensor" limb scoped to code registered for others | Licence draft §2; D6 and D7 above |
| D39 | D26 passed on the operator's confirmation of 2026-09-14; evidence filing pending | Licence draft §15; README status table; D26 above |
| D42 | The buyer chooses the lane: Project, Portfolio or the Pass | The Pass wording that D48 item 5 amends; the licence's Entitlement definition |

---

## How to read a requirement identifier

`LEG-0nn` identifiers refer to the movement's user-requirements specification, chapter LEG
(Legal & Entity). `OPEN-nn` identifiers refer to its open-questions register. Neither document
is public today. They are cited here so that a reviewer with access can verify the trace, and
so that anyone without access can see that a trace exists and demand it.
