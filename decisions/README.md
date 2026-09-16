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

**Two entries have a special status.** *D46* (dissolution and steward lapse) is, in the
register's own words, a *decision candidate* on its own sheet: "It becomes D46 in
DECISIONS.md once the operator confirms"; the register's D47 lists it as a candidate that
keeps its number. The drafts already implement it. *D48* (the operator decisions of
16 September 2026) was taken by the operator as the assistant's recommendations, amendable
later; the register entry is written by the orchestrator, and this index traces to it by
number.

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
  §0, §2.3 (six items), §4; licence draft §3 ("nobody assigns copyright to anyone");
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

- **Implemented by:** licence draft §2 (group and control definitions), §5 (threshold, the
  revenue limit, the non-profit limb), §6 (cure)
- **Requirements:** LEG-014, LEG-017, LEG-018, LEG-019, LEG-020, LEG-022
- **Status:** the counting rules and the determinability of the non-profit limb stay with
  counsel (§5 marker)

### D9 — Four-year Apache-2.0 conversion, plus a steward-lapse backstop

Each part of the software converts to Apache-2.0 four years after it was first made available
to the public under the licence — fixed and licence-wide, never a per-project parameter. If
the Association ceases to exist or records no Entitlement and no Donation Entitlement for
twelve consecutive months with no designated successor, or declares the lapse, the condition falls away and the licence
degrades to permissive.

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
is a lookup error, a Waiver has a 72-hour cooling period and a renewal has a 30-day grace; the
licence knows none of these, so the lookup must follow the licence — coverage for any work
under these terms, effect on recording, and the §6 cure as the only grace. The register's D48
entry records both propagations; this index only names them.

- **Implemented by:** licence draft `1.0-draft.2` throughout;
  [../drafts/contributor-sign-off.md](../drafts/contributor-sign-off.md) `signoff-1.0-draft.2`;
  [../CONTRIBUTING.md](../CONTRIBUTING.md); [../README.md](../README.md);
  [../LICENSE-NOTICE.md](../LICENSE-NOTICE.md); [../ANNOTATIONS.md](../ANNOTATIONS.md);
  [../FAQ-OSPO.md](../FAQ-OSPO.md); `placeholders.json`; `scripts/check-drafts.mjs`
- **Status:** operator decisions, amendable; no text reviewed by counsel; every legal question
  they touch keeps its `[COUNSEL: …]` marker

---

## Supporting decisions the drafts refer to but do not implement

| Decision | Subject | Why it appears in these texts |
|---|---|---|
| D11 | Three lanes, steward-only pricing, one schedule | The licence must stay binary; prices live in the schedule (licence draft §5) |
| D12 as amended | Per-version vesting, canonical formula "vested iff version publication date ≤ term end" | Licence draft §9; FAQ question 6 |
| D13 | Adoption and quit live in the repo; powers live on the platform | Why no admin-facing terms appear in the licence (ANNOTATIONS Part 3) |
| D14 as amended | Waivers: registry-only, repo-scoped, public, gratis | Licence draft §2 and §9; FAQ question 10 |
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
