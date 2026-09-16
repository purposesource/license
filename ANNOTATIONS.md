> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> marked inline as `[COUNSEL: …]`.

# Annotated walkthrough — what the draft says, in plain English

**These annotations are not part of the licence and never will be.** They explain a draft.
Where an annotation and the draft disagree, the annotation is wrong. Where the draft and a
recorded decision disagree, the draft is defective — the decisions are in
[decisions/](decisions/).

Read alongside [drafts/purpose-source-license-1.0-draft.md](drafts/purpose-source-license-1.0-draft.md).

---

## Part 1 — The three fears, answered by construction

Every corporate review of an unfamiliar licence starts with the same three fears. They are
worth naming because a licence that fails any one of them is unadoptable regardless of what
else it says.

### Fear 1 — "Will it infect our code?"

**No.** The draft's condition (§4) governs use *of the licensed software*. It says nothing
about any other software, and it cannot: a copyright licence's conditions reach only the work
whose copyright is being licensed.

Concretely, under the draft:

- You may combine the software with your own proprietary code and ship the result on your own
  terms.
- Your code stays under your terms. Your modifications to the software stay under your terms
  too, subject only to keeping the software's own notices (§11) and to the condition in §4
  continuing to be satisfied for the licensed parts.
- No obligation attaches to anything that merely sits next to the software in a repository,
  a container, or a process.

**Where to check:** §10 item 1, and the absence of any "derivative work" or "combined work"
obligation anywhere in §3 or §4.

### Fear 2 — "Will we have to disclose our source, our stack, or our customers?"

**No.** There is no disclosure obligation of any kind in the draft — not of source code, not
of architecture, not of deployment topology, not of customer names, not of usage volumes.

There is also **no audit right** (§5): nobody may demand your books or your headcount under
the licence. The threshold is self-assessed. Where an organization buys a credential, it
certifies its own revenue band once, in that purchase — under a separate agreement, outside
the licence. That was a deliberate choice: audit clauses are a categorical procurement veto
in the post-Oracle world, and the record rules them out permanently.

**Where to check:** §5 (the audit sentence and the self-assessment sentence), §10 items 2
and 5.

### Fear 3 — "Is there a network clause? Will offering a service trigger something?"

**No.** Running the software as a service, exposing its functionality over a network, or
letting your customers interact with it remotely triggers nothing in the draft. There is no
source-offer duty, no "if you modify and deploy" clause, and no share-alike.

The condition in §4 is about **who benefits from the use**, not about **how the software is
deployed**. A large organization needs a credential whether the software runs on a laptop or
behind a load balancer; a small one needs nothing in either case.

**Where to check:** §10 items 3 and 4.

### What the draft *does* restrict — stated as plainly as the reassurances

One thing, and it is a real restriction: **use for the benefit of an organization above the
threshold, without a recorded credential, is outside the grant.** That is a restriction on a
field of use, and it is exactly why these terms are not an open source licence under the
Open Source Definition, and why the movement says so rather than arguing about definitions.
See [FAQ-OSPO.md](FAQ-OSPO.md).

---

## Part 2 — Clause by clause

### §1 Purpose Notice — four constant lines

The licence names the Steward Organization and its registry **in its own text**, identically
in every copy. There are no blanks to fill in, because a licence with per-project blanks
becomes a family of subtly different licences that each need their own review — the failure
mode this licence family's own authors have documented. A project adopts by committing this
text unchanged.

The corollary matters for review cost: reviewing this licence once is reviewing it for every
project that uses it.

### §2 Definitions — the group test, and who the steward is not

Two definitions carry weight.

**"Your organization"** aggregates the whole group under common control. Without that, a
USD 900,000 subsidiary of a very large parent would sit in the free tier, which would make
the threshold decorative.

**"The Steward Organization"** is defined by what it is *not*: not a licensor, not a
sublicensor, not a rights-holder. It records credentials. This is the structural core of the
whole design, and it is what makes one-file adoption possible — a project adopting these
terms transfers nothing to anyone and needs no relationship with the steward at all.

> **Note added 2026-09-05 (movement decision D29 §6.3 — for counsel).** The registrar
> role's "never a licensor" limb is scoped to **code the Steward registers for others**.
> Where the Steward Organization is itself the rights-holder of a registered project, it
> acts, for that project, as a Licensor like any other under §3: its grant is per-licensor
> like everyone else's, the project is marked as steward-owned wherever it appears in the
> registry, and it receives no schedule, moderation, allocation, waiver or listing treatment
> unavailable to any other project. The draft text appears to need no change for this to
> hold — §3 already grants per licensor, and §2's steward definition describes a *role*
> rather than excluding the legal person from ever holding copyright in anything — but that
> is a reading, not an opinion. `[COUNSEL: confirm the text needs no change, or draft the
> scoping limb ("code it registers for others") for the next version.]` Until counsel
> answers, this note lives here and not in the licence; the licence text is unchanged.

### §3 Grants — per licensor

The grants read "each licensor grants you", not "the Licensor grants you". Every contributor
licenses their own contribution on these terms, and no contributor's rights pass through
anybody.

Two consequences a reviewer should see:

- **For contributors:** nobody needs to assign copyright for the mechanism to work, so nobody
  is ever asked to. The usual reason a commercial asymmetric licence needs a copyright
  assignment — the vendor sells private exceptions to other people's code — does not arise,
  because no private exception is ever sold and the credential mechanic is in the grant
  itself.
- **For an organization using the software outside the grant:** the exposure is to every
  contributor whose copyright is in the code, not to one company that might be persuaded to
  look away.

### §4 The Purpose Condition — a scope limit, not a bill

This is the clause the whole design turns on, and the annotation has to be honest about both
halves of it.

**What it does.** The permissions apply while one of four facts is true: below threshold; or
the benefiting organization holds an Entitlement, a Waiver, or a Donation Entitlement
recorded in the registry. Nothing else. Use outside those facts is use without permission.

**What it deliberately does not do.** It does not say anyone must pay. There is no promise to
pay in the licence, to the steward or to anyone else. Money moves, if at all, under an
ordinary bilateral contract between an organization and the steward, and the software's
contributors are not parties to it.

Why drafted that way: a licence that *promised* payment to an organization that is not a
party to the licence would drag the whole mechanism into third-party-beneficiary doctrine,
which is jurisdiction-dependent and barely tested. A licence that *scopes permission* leaves
enforcement where it already lives — with the copyright holders, each of whom can act without
any relationship to the steward.

**The honest risk.** This is the most defensible untested structure available, and "untested"
is not a figure of speech: US courts police the line between a licence *condition* and a
*covenant*, and a condition satisfied by a credential from an unrelated third party has a
weaker nexus to the exclusive rights than a classic field-of-use limit. If a court
recharacterized the condition as a covenant, the consequence would be a contract claim rather
than an infringement claim. Three jurisdiction memos are required before publication, and
none exists today.

**Limb (d), the donate-direct lane,** lets an organization satisfy the condition by donating
the schedule amount directly to a listed charity and having that recorded. The money never
passes through the steward. Verification stays uniform because there is still exactly one
registry answering the coverage question.

### §5 The threshold — dual test, group-wide, self-assessed

Free-tier eligibility needs **both** fewer than 100 people **and** under USD 1,000,000 of
prior-year revenue, across the whole group.

Both, because either alone leaks: revenue alone waves through a very large pre-revenue
company; headcount alone waves through a small, extremely profitable one.

USD rather than CHF, because procurement's working language is USD; CPI-U-indexed from 2026,
because a fixed nominal threshold silently narrows every year — which the contributor
sign-off's immutable core forbids anyone to do deliberately.

### §6 Cure — 60 days

Crossing the threshold is a normal business event. The draft gives 60 days from the first
failure before permissions end, and permissions resume uninterrupted if any limb becomes
true within that window. Growth does not create overnight infringers.

The draft also flags the hard part for counsel: a test whose input is a *prior tax year* is
discoverable only after that year closes, so the date the clock starts from needs care.

### §7 Conversion — Apache-2.0 at four years, per version

Every published version becomes available under Apache-2.0 on its fourth anniversary. Fixed,
licence-wide, not a per-project parameter, not extendable after publication.

For a reviewer this is the risk cap: the worst case is "pin the version and wait", and that
worst case is in the grant rather than in a blog post. The obvious arbitrage — run the
four-year-old version forever — is accepted openly; it is the same trade every
delayed-open-source licence makes.

The record contains a genuine dispute here: a parallel analysis argued for permanence (no
conversion at all). The decision stands for version 1.0 on the ground that a future version
could lengthen or drop conversion for *future* releases, while nothing could retroactively
add trust at launch. And the contributor sign-off's immutable core makes that asymmetry
binding rather than rhetorical: the conversion delay may only ever be **shortened** by a
successor version applied through the delegation.

### §8 Steward lapse — the twelve-month backstop, and the early exit

If the steward stops existing, or issues no credential for twelve consecutive months with no
designated successor, the condition lapses and the licence becomes permissive for everyone.
The steward can also say so early: a signed, published **declaration of lapse** names the
day, and that day cannot be moved later (D46). A successor is designated only by a signed,
published record the successor has accepted, and a successor that issues nothing for twelve
months counts as none. A waiver granted by a project keeps no clock running.

This is the answer to "what if the organization behind this dies", and it is written into the
grant so that the answer does not depend on anyone's goodwill — nor on anyone waiting a year
when the steward has already stopped.

### §9 Vesting — what an organization keeps

One line does the work: **a version is vested if it was published on or before the end of the
credential's term.** Everything an organization was entitled to use, it keeps permanently —
project exit, delisting, waiver revocation, non-renewal, and steward failure all act on
future releases only.

This is the clause that answers the procurement question most licences in this family leave
unanswered: *what happens to what we have already deployed?*

### §10 The absence list

§10 adds nothing. It restates, in one place, obligations the draft does not contain, because
"read the whole text and notice what is missing" is not a review method anyone uses.

### §11 Notices, §12 The name

Notices are preserved, including notices that arrived with code from a predecessor licence —
adopting these terms never deletes an inbound licence text.

The licence *name* is a trademark, and using the name is conditioned on shipping the text
unchanged. That is the mechanism that keeps one canonical text canonical; it restricts naming,
never use.

### §13–§14 Warranty, liability, interpretation

Standard in shape, unwritten in detail, flagged for counsel. Note one thing that is
deliberately **not** here: the promise that a credential is not a warranty against
third-party rights belongs in the Entitlement terms, not in the licence.

---

## Part 3 — What is missing from this draft, on purpose

A reviewer should be able to see the shape of the whole thing, including the parts that are
not in the licence:

| Not in the licence | Where it lives instead | Why |
|---|---|---|
| Prices, tiers, bands | The steward's published schedule | The licence must stay binary and reviewable once (D11, LEG-022) |
| Any payment obligation | The separate Entitlement agreement | Keeps the mechanism out of third-party-beneficiary doctrine (D6) |
| Self-certification of revenue band | The purchase flow | An audit clause in a licence is a procurement veto (LEG-020) |
| Terms addressed to project admins | The platform terms accepted at claim | A licence binds users, not the admin↔steward relationship (D13, LEG-080) |
| Amnesty covenants for past use | The Entitlement agreement, plus a separate opt-in contributor mandate for anything beyond the steward's own covenants | The steward cannot release claims it does not hold (LEG-045) |
| Enforcement mandates | A separate opt-in document that does not exist yet | Contributors keep their claims unless they choose otherwise |
| The `PURPOSE.yml` manifest | Optional, operational, non-authoritative | Adoption is one committed licence file (D23 as amended) |
