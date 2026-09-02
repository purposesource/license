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

---

## The decisions the licence text implements

### D6 — Condition, not covenant; the steward is registrar, never licensor

The licence contains **no payment obligation**. Permissions are scoped by an objective
condition: below threshold, or a credential recorded in the steward registry. Money moves
under a separate bilateral contract to which the software's licensors are not parties. The
steward never holds, sublicenses, or resells anyone's rights.

- **Implemented by:** licence draft §2 (steward definition), §3 (grants), §4 (the condition)
- **Requirements:** LEG-010, LEG-013, LEG-016
- **Status:** architecture decided; enforceability **untested** — US/CH/DE memos are
  prerequisites for publication (LEG-051)

### D7 as amended — no copyright assignment, ever; instrument form is counsel's within fixed constraints

The permanent, non-reopenable core is an **outcome**: no contributor is ever required to
assign copyright or transfer economic ownership. The *instrument* is counsel's choice within
fixed constraints (minimal, public, standardized, project-neutral, one per movement, limited
to operating the mechanism), with a one-line git trailer as the designed default.

The 2026-09-01 amendment added the **bound** on forward delegation: it reaches only
*materially consistent* successor versions, and an enumerated **immutable core** may never be
changed by a version applied through it — threshold may only widen, conversion delay may only
shorten, charity destination and no-private-profit rule, registrar-never-licensor character,
and the existence of the waiver power.

The amendment also **corrected an overbroad earlier claim**: the licence is not "legally
frozen". The accurate statement is that without forward delegation, new versions could not be
applied to existing contributions without per-contributor consent; existing versions stay
licensed under the version they were adopted under regardless.

- **Implemented by:** [../drafts/contributor-sign-off.md](../drafts/contributor-sign-off.md)
  §0, §2.3, §4; licence draft §3 (the per-licensor note)
- **Requirements:** LEG-034, LEG-035, LEG-036
- **Status:** core never reopens; instrument form and the material-consistency test are open
  for counsel

### D8 — Threshold: dual AND test, group-consolidated, CPI-indexed, no audit

Fewer than 100 employees plus contractors **and** less than USD 1,000,000 (2026, CPI-U)
prior-tax-year revenue, measured across the whole consolidated group with the PolyForm
"control" language copied verbatim, self-assessed, 60-day cure. No audit clause in the
licence, ever; band self-certification lives in the purchase flow. Prices and tiers never
enter the licence text.

- **Implemented by:** licence draft §2 (group definition), §5 (threshold), §6 (cure)
- **Requirements:** LEG-014, LEG-017, LEG-018, LEG-019, LEG-020, LEG-022
- **Status:** open — the investment prong (OPEN-28) and the counting rules

### D9 — Four-year Apache-2.0 conversion, plus a steward-lapse backstop

Each version converts to Apache-2.0 on the fourth anniversary of its first publication —
fixed and licence-wide, never a per-project parameter. If the steward ceases to exist or to
issue credentials for twelve consecutive months with no designated successor, the condition
lapses and the licence degrades to permissive.

The register records a genuine **dispute** here: a parallel analysis argued for permanence
(no conversion). The decision stands for version 1.0 on revisability asymmetry — a later
version can lengthen or drop conversion for *future* releases once the movement has
credibility, while nothing can retroactively add trust at launch. A revisit is pre-registered
at sustained scale. Note the interaction with D7's immutable core: the conversion delay may
only ever be **shortened** through delegation, so any lengthening reaches future contributions
only, or requires fresh consent.

- **Implemented by:** licence draft §7, §8
- **Requirements:** LEG-023, LEG-024, LEG-025
- **Status:** never reopens for adopted versions

### D10 — One canonical text, zero per-project parameters, SPDX at launch

Exactly one licence text per version. No fill-in fields except the Purpose Notice constants.
Identifier request filed **at launch, not after**, with demonstrated adoption; proactive
submissions to the major scanner databases; plain-English annotations demonstrating the three
corporate fears absent. Never staple purpose terms onto an existing open-source licence —
standalone text only. Amnesty covenants on purchase, bounded to what the steward and the
steward of record can actually grant.

- **Implemented by:** licence draft §1, §12; [../ANNOTATIONS.md](../ANNOTATIONS.md);
  [../FAQ-OSPO.md](../FAQ-OSPO.md) questions 3 and 12; `placeholders.json` (the complete
  inventory of constants still undecided)
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

- **Implemented by:** licence draft §1 (the note under the Purpose Notice), §2 (Project
  Steward definition), §9
- **Requirements:** LEG-027, LEG-039
- **Status:** optionality never reopens

### D25 — "open source" is mentioned, never self-applied

No name of the category, the licence, the steward organization, or any product may contain
the two-word term, and the rule extends to taglines used as self-description. Copy may freely
*mention* open source as the predecessor. The honest form — "this is not open source, and we
say so" — is the movement's strongest defensive position, and turning it into a claim of
membership would convert that defence into evidence of bad faith.

- **Implemented by:** the framing notes in the licence draft; [../ANNOTATIONS.md](../ANNOTATIONS.md)
  Part 1; [../FAQ-OSPO.md](../FAQ-OSPO.md) question 1; and mechanically by the copy lint
  (`copy-lint/banned.txt`, run in CI)
- **Requirements:** LEG-038
- **Status:** never reopens

### D26 — demand before major spend; the capped feasibility review with a binary stop

The reason this repository holds *drafts* rather than counsel text. Before a full drafting
engagement is commissioned: demand discovery must produce real arm's-length interest from
maintainers and payer-side indications that are written, priced, and from someone with
authority; and a **capped, fixed-fee feasibility review** must answer two questions —
dependable prospective coverage, and commercially acceptable cure and amnesty without central
copyright ownership — with a **binary stop** if either answer is negative and no drafting cure
exists.

- **Implemented by:** the sequencing note in licence draft §15; the publication gate in
  [../README.md](../README.md)
- **Status:** the spend-follows-evidence principle never reopens

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

---

## How to read a requirement identifier

`LEG-0nn` identifiers refer to the movement's user-requirements specification, chapter LEG
(Legal & Entity). `OPEN-nn` identifiers refer to its open-questions register. Neither document
is public today. They are cited here so that a reviewer with access can verify the trace, and
so that anyone without access can see that a trace exists and demand it.
