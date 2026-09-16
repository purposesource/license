> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> marked inline as `[COUNSEL: …]`.

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

**Three entries have a special status.** *D46* (dissolution and steward lapse) is, in the
register's own words, a *decision candidate* on its own sheet: "It becomes D46 in
DECISIONS.md once the operator confirms"; the register's D47 lists it as a candidate that
keeps its number. The drafts already implement it. *D48* (the operator decisions of
16 September 2026) and *D49* (the operator decisions of the same evening, on the 16 September
review proposal) were taken by the operator as the assistant's recommendations, amendable
later; the register entries are written by the orchestrator, and this index traces to them
by number.

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

- **Implemented by:** licence draft §2 (steward definition), §3 (grants), §4 (the condition)
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

- **Implemented by:** [../drafts/contributor-sign-off.md](../drafts/contributor-sign-off.md)
  §0, §2.3 (six items), §4; licence draft §3 ("Contributors keep their copyright; nothing
  here assigns it" — the inbound default of D49 A16 sits beside it and does not replace the
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

- **Implemented by:** licence draft §2 (group and control definitions), §5 (threshold, the
  revenue limit, the non-profit limb), §6 (cure)
- **Requirements:** LEG-014, LEG-017, LEG-018, LEG-019, LEG-020, LEG-022
- **Status:** the counting rules and the cure cap are operator defaults for counsel to
  confirm; the determinability of the non-profit limb stays with counsel (§5 and §6 markers)

### D9 — Four-year Apache-2.0 conversion, plus a steward-lapse backstop

Each part of the software converts to Apache-2.0 four years after it was first made available
to the public under the licence — fixed and licence-wide, never a per-project parameter. If
the Association ceases to exist, or for twelve consecutive months neither records an
Entitlement or Donation Entitlement nor keeps a published schedule under which one could be
obtained, with no designated successor, or declares the lapse, the condition falls away and
the licence degrades to permissive.

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

- **Implemented by:** licence draft §2 ("made available to the public"; the successor limb),
  §7, §8
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
  [../ANNOTATIONS.md](../ANNOTATIONS.md) §1 in 1.0-draft.2), §2 (Project Steward definition),
  §9
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

- **Implemented by:** licence draft `1.0-draft.2` throughout;
  [../drafts/contributor-sign-off.md](../drafts/contributor-sign-off.md) `signoff-1.0-draft.2`;
  [../CONTRIBUTING.md](../CONTRIBUTING.md); [../README.md](../README.md);
  [../LICENSE-NOTICE.md](../LICENSE-NOTICE.md); [../ANNOTATIONS.md](../ANNOTATIONS.md);
  [../FAQ-OSPO.md](../FAQ-OSPO.md); `placeholders.json`; `scripts/check-drafts.mjs`
- **Status:** operator decisions, amendable; no text reviewed by counsel; every legal question
  they touch keeps its `[COUNSEL: …]` marker

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
| A4 | Contractor and service rule made explicit: a client's coverage or exemption covers work others do solely for it; running a general service for many customers is the provider's own use; a dedicated deployment for one customer is work for that customer; incidental benefit and merely passing the software on do not count; personal use needs no coverage | §4 |
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
count.

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
  owed.
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

---

## Supporting decisions the drafts refer to but do not implement

| Decision | Subject | Why it appears in these texts |
|---|---|---|
| D11 | Three lanes, steward-only pricing, one schedule | The licence must stay binary; prices live in the schedule and no price, tier or band appears anywhere in the licence text (ANNOTATIONS §5); lane names stay out (D49 R4) |
| D12 as amended | Per-version vesting, canonical formula "vested iff version publication date ≤ term end"; annual entitlements | Licence draft §9; the one-year bound in §2 (D49 A2); FAQ question 6 |
| D13 | Adoption and quit live in the repo; powers live on the platform | Why no admin-facing terms appear in the licence (ANNOTATIONS Part 3) |
| D14 as amended | Waivers: registry-only, repo-scoped, public, gratis; revocation prospective | Licence draft §2 and §9 (the 72-hour cooling since D49 A8); FAQ question 10 |
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
