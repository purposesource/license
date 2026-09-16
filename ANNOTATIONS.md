> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> marked inline as `[COUNSEL: …]`.

# Annotated walkthrough — what the draft says, and why

**These annotations are not part of the licence and never will be.** They explain a draft.
Where an annotation and the draft disagree, the annotation is wrong. Where the draft and a
recorded decision disagree, the draft is defective — the decisions are in
[decisions/](decisions/).

Read alongside [drafts/purpose-source-license-1.0-draft.md](drafts/purpose-source-license-1.0-draft.md),
revision `1.0-draft.2` of 2026-09-16. That revision moved every "why" paragraph out of the
licence body and into this file, so the body carries only operative text, the banner, the
placeholder tokens and the `[COUNSEL: …]` markers. If you are looking for the reasoning
behind a clause, it is here, under the clause's own number.

---

## Part 0 — What the draft is, and is not

**What it is.** A structural draft that turns the movement's recorded decisions into clauses,
so that counsel receives a specification with the architecture already settled and the open
questions already isolated. It is the input to a drafting engagement, not its output. The
decisions it implements are traced in [decisions/](decisions/); the operator decisions of
16 September 2026 (recorded in the movement's register as D48) are what changed between
`1.0-draft.1` and `1.0-draft.2`.

**What it is not.** It is not a licence anyone may use. No version has been published, so no
conversion clock has started and no project is under these terms. The identifier in §1 is in
the SPDX `LicenseRef-` form, which is valid for a licence that is not on the SPDX list; a
request for list inclusion comes later, once adoption exists. The Steward Organization named
in §1 — the Purpose Source Association — held its founding assembly on 2026-09-16; its
commercial-register entry and its enterprise identifier (UID) are pending, which is why the
UID is still a placeholder token and no value has been invented for it. The registry's first
version is public (curated entries, validated against a published contract set); the
coverage lookup and the credentials themselves do not exist yet.

**Two honest framing notes.** These terms are not an open source licence, and the movement
says so in public: the Purpose Condition restricts use by large organizations, which the Open
Source Definition does not permit. Open source is this category's predecessor and is
mentioned as such, never claimed. And the architecture — permission scoped by a condition
rather than a promise to pay — is the most defensible *untested* structure available; no
decided case validates or invalidates it. [FAQ-OSPO.md](FAQ-OSPO.md) carries the unvarnished
version of both points.

**Where the process stands.** The movement's own spend-follows-evidence gate (D26) passed on
2026-09-14 (D39, on the operator's confirmation; the evidence filing is pending). Demand
evidence is therefore no longer an open step. What remains before this text can be published
is counsel's own work: the three jurisdiction memos (US, CH, DE) on the condition
architecture, and the full drafting engagement that follows them. None of that has started.

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

There is also **no audit right** (§5): nobody may demand your books, your headcount or any
certification under the licence. The threshold is self-assessed. Where an organization buys a
credential, it certifies its own revenue band once, in that purchase — under a separate
agreement, outside the licence. That was a deliberate choice: audit clauses are a categorical
procurement veto, and the record rules them out permanently (D8; LEG-020).

**Where to check:** §5 (the "nobody may audit you" paragraph), §10 items 2 and 5.

### Fear 3 — "Is there a network clause? Will offering a service trigger something?"

**No.** Running the software as a service, exposing its functionality over a network, or
letting your customers interact with it remotely triggers nothing in the draft. There is no
source-offer duty, no "if you modify and deploy" clause, and no share-alike.

The condition in §4 is about **who benefits from the use**, not about **how the software is
deployed**. A large organization needs a credential whether the software runs on a laptop or
behind a load balancer; a small one — or a non-profit, a public school or a public body of any
size — needs nothing in either case.

**Where to check:** §10 items 3 and 4.

### What the draft *does* restrict — stated as plainly as the reassurances

One thing, and it is a real restriction: **use for the benefit of an organization above the
threshold, without a recorded credential, is outside the grant.** That is a restriction on a
field of use, and it is exactly why these terms are not an open source licence under the Open
Source Definition, and why the movement says so rather than arguing about definitions. It
comes with one more rule a patent holder should read: filing patent litigation over the
software ends your patent licences to it (§3), and nothing else.

---

## Part 2 — Clause by clause

Each section below has two halves: what the clause says, in plain words, and why it says it —
the commentary that used to sit inside the licence text.

### §1 Purpose Notice — five constant lines

**What it says.** Five lines that are part of the licence text and identical in every copy:
the SPDX identifier line (`SPDX-License-Identifier: LicenseRef-PurposeSource-1.0`), the
Steward Organization's name, its enterprise identifier, the registry address and the address
of the canonical text.

**Why the lines are constants and not blanks.** A licence with per-project fill-in fields
becomes a family of subtly different licences that each need their own review — the failure
mode this licence family's own authors have documented. There is exactly one canonical text
per version (D10), and a project adopts by committing that text unchanged. The corollary
matters for review cost: reviewing this licence once is reviewing it for every project that
uses it. The tokens still visible in the draft mark constants that are genuinely undecided
(the UID is pending the register entry); they are never per-project parameters.

**Why the designations are in the licence and nowhere else.** A repository file can be edited
by anyone with push access and carries no verified identity, so it can never designate a legal
role. Every legal designation lives here, in the text layer, or in the Steward Registry's
verified claim flow. The optional in-repo `PURPOSE.yml` manifest carries operational content
only; any licence or licensor fields in it are informational mirrors, non-authoritative — this
text governs (D23 as amended; LEG-027).

**Why `LicenseRef-`.** SPDX allows a licence that is not on its list to be named in an
expression as `LicenseRef-<idstring>`, so the identifier line is valid SPDX today, with no
filing. It also fits the REUSE convention: a project commits the canonical text as `LICENSE`
(or, under REUSE, as `LICENSES/LicenseRef-PurposeSource-1.0.txt`) and puts the identifier
line in its files or in `REUSE.toml`. A URL alone is not enough under REUSE, and a URL alone
is not what the Purpose Notice asks for. The invented "SPDX-Style-Identifier" of earlier
drafts is gone (D48 item 9). Scanners may still flag "unknown licence" until the list
inclusion is requested and granted; [FAQ-OSPO.md](FAQ-OSPO.md) question 12 says so plainly.

**Why the UID.** The §8 counsel marker asked for an identity anchor that survives a name
change, a merger with universal succession or the loss of the domain. The Swiss enterprise
identifier is that anchor; whether a key thumbprint must join it stays with counsel (agenda
row 8).

### §2 Definitions — the group test, who the steward is not, and what a credential is

**The group and "control".** The threshold in §5 is measured across **an organization's
group**: the organization plus everything that controls it, that it controls, or that is under
common control with it. Without that, a USD 900,000 subsidiary of a very large parent would
sit in the free tier, which would make the threshold decorative. "Control" is the PolyForm
Small Business 1.0.0 definition, copied verbatim as the requirement demands (LEG-018), and the
group definition is modelled on PolyForm's "your company". The attribution belongs in
[LICENSE-NOTICE.md](LICENSE-NOTICE.md) §4. PolyForm's texts are published under PolyForm's own
permissive grant, which is what permits the verbatim reuse.

Earlier drafts said "your organization". The draft now says "an organization's group" so that
the rule works for the contractor case in §4: when a contractor uses the software in work for
a client, the *client's* group is measured, not the contractor's.

**"Made available to the public".** Defined once because §7's conversion clock and §9's
vesting both hang on a date: the first day a part or a version was publicly obtainable under
these terms — a public commit, tag, release or package — and never a date an author wrote into
a file. A date that anyone can set is not a date anyone can rely on.

**The Steward Organization, called the Association.** It is defined by what it is *not*: in
software it registers **for others**, it is never a licensor, never a sublicensor, never a
rights-holder. It records credentials; the permissions in §3 come from the software's own
licensors. This is the structural core of the whole design and what makes one-file adoption
possible — a project adopting these terms transfers nothing to anyone and needs no
relationship with the steward at all (D6; LEG-016).

The scoping words "for others" were added on 2026-09-16 and close a note that lived here since
2026-09-05: the movement's decision D29 §6.3 and the statutes (Art. 4 para. 3) let the
Association own a registered project of its own, and for that project it is an ordinary
licensor like anyone else, disclosed as steward-owned wherever the project appears, with no
treatment other projects cannot have. The old note asked counsel whether the text needed a
scoping limb; the limb is now drafted, so the question is closed and the note is retired.

The successor limb — "or the successor it has publicly designated under §8" — is D46's:
without it, a designated successor could have stopped the lapse in §8 while being unable to
issue anything, because §2 named one legal person for every copy of the text.

**The Steward Registry.** The public record, its transparency log, and that log's published
mirrors held outside the Association's control. The mirrors are named here because §8's lapse
has to be provable when the Association is the party lapsing; the statutes provide for an
archive custodian who keeps the registry, the log and the key set readable after the
Association is gone (Art. 9 para. 4, Art. 23 para. 5). Anyone may read the registry without an
account. **A credential counts from the day it is recorded** — no cooling period, no waiting
time. That is a deliberate alignment rule (D48 item B): the licence governs, and the machine
lookup must agree with it. The spec's coverage function currently carries a 72-hour waiver
cooling window and a 30-day renewal grace that the licence does not know; those follow the
licence, not the other way round, and [decisions/README.md](decisions/README.md) names the
dependency.

**Entitlement and Donation Entitlement.** An Entitlement is a credential the Association
records under a separate agreement that these terms neither create nor price. A Donation
Entitlement is recorded when an organization donates the schedule amount directly to a listed
charity; the money never passes through the Association (D18; LEG-012). Either **covers
software by name, or because it covers every work licensed under these terms**. That second
limb is new (D48 item 5) and matters more than it looks: coverage attaches to the *licence*,
not to *registration*. A Large Organization must always be able to obtain coverage for any
software under these terms, whether or not the project ever registered — the network-wide
Pass covers every work under these terms, registered or not. This amends the commercial
decision D42, whose Pass covered "every registered repository"; the coverage lookup, which
today treats an unregistered repository as an error, has to follow.

**Waiver.** A record the Project Steward makes, excusing a named organization from §4 for that
software. Public, in the registry, gratis — private exemptions do not exist in the design
(D14 as amended).

**A credential's term.** What the registry records: for an Entitlement or Donation
Entitlement, the start date, the end date and the schedule version at issue — and **a later
schedule change never alters an existing credential's term** (D48 item 11, replacing the old
"when the paid period ends"); for a Waiver, until it is recorded as revoked or expired. A
credential is current on every day of its term. This makes §9's vesting rule a matter of two
recorded dates, not of anyone's interpretation.

**The Project Steward.** Whoever holds administrative control of the canonical repository, or
whoever they designate through the registry's verified claim process — and nothing else. A
designation made in a repository file, an issue or an email has no effect, for the reason
given under §1 (D23 as amended; LEG-039).

### §3 Grants — per licensor, with an Apache-shaped patent licence

**Why "each licensor grants" and not "the Licensor grants".** Every contributor to the
software licenses their own part on these terms, so the condition in §4 travels with every
contribution without anyone assigning copyright to anyone. **No contributor is ever asked to
assign copyright or transfer economic ownership of their work — not now and not in any later
version of these terms** (D7 as amended; LEG-036). The permanent promise is stated in the
contributor sign-off's §0 ([drafts/contributor-sign-off.md](drafts/contributor-sign-off.md)),
and the licence body keeps only the operative sentence: nobody grants on anyone else's behalf,
and nobody assigns copyright to anyone.

Two consequences a reviewer should see:

- **For contributors:** nobody needs to assign copyright for the mechanism to work, so nobody
  is ever asked to. The usual reason a commercial asymmetric licence needs a copyright
  assignment — the vendor sells private exceptions to other people's code — does not arise,
  because no private exception is ever sold and the credential mechanic is in the grant
  itself.
- **For an organization using the software outside the grant:** the exposure is to every
  contributor whose copyright is in the code, not to one company that might be persuaded to
  look away.

**The patent licence** follows Apache-2.0 §3 in scope: the claims a licensor can license that
are necessarily infringed by their contribution alone or in combination with the software
they contributed it to, for making, having made, using, offering to sell, selling, importing
and otherwise transferring the software. The alignment is deliberate — when a part converts to Apache-2.0
under §7, the patent position should not move.

**The patent defence** (D48 item 6) is Apache's trigger, not PolyForm's: your patent licences
for the software end on the day you *file* patent litigation (including a cross-claim or
counterclaim) alleging that the software or a contribution in it infringes a patent or
contributes to infringing one. A written claim that stops short of litigation does not
trigger it. Your copyright licences and
your vested versions are untouched — the defence reaches patents and nothing else, which is
also why §9 lists it among the only things that qualify permanence.

### §4 The Purpose Condition — a scope limit, not a bill

This is the clause the whole design turns on, and the annotation has to be honest about both
halves of it.

**What it does.** The permissions apply while one of four facts is true: you are not
exercising them for the benefit of a Large Organization; or the benefiting organization holds
a current Entitlement, a current Waiver, or a current Donation Entitlement covering the
software. Nothing else. Use outside those facts is use without permission — not a broken
promise, simply no permission (D6; LEG-010, LEG-013).

**What it deliberately does not do.** It does not say anyone must pay. There is no promise to
pay in the licence, to the steward or to anyone else. Money moves, if at all, under an
ordinary bilateral contract between an organization and the Association, and the software's
licensors are not parties to it (LEG-010).

**Why drafted that way.** A licence that *promised* payment to an organization that is not a
party to the licence would drag the whole mechanism into third-party-beneficiary doctrine,
which is jurisdiction-dependent and barely tested. A licence that *scopes permission* leaves
enforcement where it already lives — with the copyright holders, each of whom can act without
any relationship to the steward.

**"For the benefit of", defined by cases (D48 item A).** The draft gives the rule in two
sentences: you exercise permissions for the benefit of an organization when you use the
software as that organization, or in work you do for it as its employee, contractor or
service provider — the client is judged, not the contractor; incidental benefit does not
count, nor does merely passing the software on. In practice:

- *Covered:* a Large Organization's own use; its employees using the software in their work;
  a contractor, agency or managed-service provider running or building with the software for
  a Large Organization's project (the client's group is measured).
- *Not covered:* being an ordinary customer of a general service that happens to run the
  software; a package mirror, registry or distributor passing the software on; an employee's
  personal or hobby project; a research collaboration where the Large Organization is not
  the one using the software; any benefit that is merely incidental.

The worked cases are in [FAQ-OSPO.md](FAQ-OSPO.md) question 16.

**"The cure in §6 is the only grace these terms know."** One sentence, put in so that no
reader — human or machine — invents another. A credential takes effect when recorded; a
Waiver's revocation takes effect when recorded; there is no cooling period and no renewal
grace in the licence. What the licence does give is the 60-day cure of §6, and a public
lookup must be able to say "no current credential, but these versions are permanently
covered" (D48 item B).

**The honest risk.** This is the most defensible untested structure available, and "untested"
is not a figure of speech. Under US law, the line between a licence *condition* and a
contractual *covenant* turns on the nexus to the exclusive rights (MDY v. Blizzard, 9th Cir.
2010), and a condition satisfied by a third party's registry record has a weaker nexus than a
classic scope limit. The balance the draft's marker now states: footnote 4 of that opinion
distinguishes payment conditions in commercial copyright licences, so the case neither
validates nor defeats this model. Counsel assesses the grant as actually drafted — its
formation, the enforcement route, and the fallback remedy if a court reads §4 as a covenant.
Three jurisdiction memos are required before publication, and none exists today (LEG-051).

**Limb (d), the donate-direct lane,** lets an organization satisfy the condition by donating
the schedule amount directly to a listed charity and having that recorded. The money never
passes through the Association. Verification stays uniform because there is still exactly one
registry answering the coverage question. The proof standard for the donation — what
documentation suffices, who bears a false record — belongs in the registry's published terms
and is on the counsel agenda (OPEN-27), not in the licence.

### §5 The threshold — dual test, group-wide, self-assessed, indexed, with a non-profit limb

**The test.** Free-tier eligibility needs **both** fewer than 100 people (employees and
independent contractors together) **and** less than the revenue limit in prior-tax-year
revenue, across the whole group. Both, because either alone leaks: revenue alone waves through
a very large pre-revenue company; headcount alone waves through a small, extremely profitable
one (D8; LEG-017, LEG-019).

**The revenue limit and its indexing (D48 item 2).** USD rather than CHF, because
procurement's working language is USD. Indexed, because a fixed nominal threshold silently
narrows every year — which the immutable core forbids anyone to do deliberately. PolyForm
Small Business itself indexes its USD 1,000,000 to CPI-U, and the draft keeps PolyForm's
sentence, then makes it deterministic where PolyForm leaves it open:

1. the series is named in full — the US Bureau of Labor Statistics' consumer price index for
   all urban consumers, U.S. city average, all items, not seasonally adjusted, 1982–84=100;
2. the reference point is the **calendar-year average**, not a month: multiply
   USD 1,000,000 by the latest calendar-year average published when your tax year ended,
   divide by the 2026 calendar-year average;
3. round to the nearest USD 1,000;
4. the limit **never falls below USD 1,000,000**;
5. if the series is discontinued, use the successor series the Bureau designates, or else the
   last limit so calculated.

Other currencies convert at the tax year's average exchange rate published by the central
bank that issues the currency. The Association publishes the current limit each year *for
information*; the calculation in the text governs, so the figure never depends on the
Association being there to publish it.

**Non-profits, education and public bodies (D48 item 1).** A non-profit or public-benefit
body under the law it is organized under, a public educational institution, or a public body
performing public functions meets the threshold whatever its size. The README and FAQ have
promised "free for non-profits" from the start; the text now says it. Two edges are drawn so
the limb cannot be gamed: a commercial organization such a body controls does not inherit
the exemption, and work done for a commercial client is judged by that client under §4.
Whether "non-profit or public-benefit body under the law it is organized under" is
determinable by a licensee in the main adopter jurisdictions is a counsel question (agenda
row 5).

**The investment prong is out (D48 item 3).** Earlier drafts carried a marker asking whether
an organization that had raised more than USD 1,000,000 in five years should count as large
regardless of revenue and headcount (the pattern some source-available licences use). The
record recommended it; the operator decided against it. No "capital raised" test appears
anywhere in the text. Could a later version add one? Accurately: adding a prong would
*narrow* the threshold, and the immutable core (sign-off §2.3 item 1; statutes Art. 13)
allows a later version applied to **existing contributions through the sign-off's
delegation** to widen the threshold only. So a narrowing could reach existing contributions
only with each contributor's fresh consent, or reach future contributions only. That is the
honest statement — not "never", but "not for what is already contributed, without asking".

**Self-assessment, no audit, no prices.** You assess the threshold yourself. **Nobody may
audit you under these terms** — no licensor and not the Association may demand your books,
your headcount or any certification (D8; LEG-020). Where a credential is bought, the buyer
certifies its own revenue band once, in that purchase, outside these terms. **No prices,
tiers or bands appear in the licence, ever**: the licence is binary — above the threshold or
below it — and everything else lives in the schedule the Association publishes (D8, D11;
LEG-022).

### §6 Cure — 60 days, from four defined days

**Why a cure window at all.** Growing past the threshold is a normal event, and an
organization that crosses it on a Tuesday should not become an infringer on the Wednesday.
60 days is the same order as the comparable clauses in this licence family (D8; LEG-014).

**The four triggers (D48 item 12).** Earlier drafts said "the first day the condition was not
satisfied" and left counsel to work out when that is for a test measured on the *prior* tax
year — a failure discoverable only after the year closes. The draft now names the day the
60 days run from:

- **(a)** you grew past the threshold — from the end of the tax year in which you first
  exceeded it;
- **(b)** an acquisition, merger or other change of control made you a Large Organization —
  from that day;
- **(c)** a credential's term ended, or a Waiver was recorded as revoked — from that day;
- **(d)** anything else — from the first day the software was used while no limb of §4 was
  true.

**The transitions.** If a limb becomes true again inside the 60 days — a credential is
recorded, a Waiver is granted, the group shrinks — permissions continue uninterrupted. If none
does, they end after the 60th day. They **resume** the moment a limb becomes true again, for
use from then on, and the window applies afresh to any later failure. **Vested versions need
no cure**: what §9 vested is not affected by any of this. Whether the four days are
determinable without litigation, and how (b) applies to a target mid-acquisition, stays with
counsel (agenda row 6).

### §7 Conversion — Apache-2.0 at four years, per part

**What it says (D48 item 4).** Each part of the software becomes available to everyone under
Apache-2.0 four years after the day that part was first made available to the public under
these terms, in any form. Each part has its own clock; material added later starts its own
when first made public. Forking, copying, repackaging or re-releasing an existing part never
restarts its clock. Nothing that is already public can have its clock extended by anyone —
no project, no licensor, not the Association.

**Why per part and not per named release.** Earlier drafts attached the clock to "each
published version". That invited two games: re-releasing old code under a new version number
to restart the clock, and arguing about which "version" a line of code belongs to after a
fork. Attaching the clock to each part, from its first *verifiable* public availability (a
public commit, tag, release or package — never an author's own timestamp), closes both. The
practical reading for an adopter is unchanged: "pin what you have and wait" is still the
worst case, and old code converts on schedule whatever anyone does with it later.

**Why this is in the licence and not in a policy document.** It is the risk cap that makes the
licence reviewable. The worst case for an adopter is written into the grant rather than
promised in marketing. The obvious arbitrage — run the four-year-old parts forever — is
accepted openly; it is the same trade every delayed-open-source licence makes.

**The dispute on the record, and the immutable core.** A parallel analysis argued for
permanence (no conversion at all). The decision stands for version 1.0 on the ground that a
future version could lengthen or drop conversion for *future* contributions, while nothing
could retroactively add trust at launch (D9; LEG-023, LEG-025). The contributor sign-off's
immutable core (item 2) makes that asymmetry binding rather than rhetorical: a later version
applied to **existing contributions through the sign-off's delegation** may only ever
*shorten* the conversion delay. Lengthening or removing it is a core change, so it can reach
existing contributions only with fresh consent, and otherwise reaches future contributions
only. Say it that way, not "never": the bound is on what delegation can carry, not on what
contributors may freely agree to later.

**Counsel's part.** The conversion should be drafted as a present grant with a deferred
effective date, so that it survives the Association's dissolution, a licensor's later choices
and the transfer of a licensor's copyright to a successor in title or an estate. The
interaction with Apache-2.0 §4's notice requirements, and with §11 for code that arrived from
a permissively licensed predecessor, is on the agenda (row 7).

### §8 If the Association lapses — the twelve-month backstop, and the early exit

**Why.** Every vendor-risk review asks what happens if the steward dies. The answer is written
into the grant, so the answer is not "trust us" — and the steward can give it on the day it
stops, instead of leaving everyone to wait a year (D9 as amended by D46; LEG-024).

**The three days.** The Purpose Condition lapses — permissions apply without it, for everyone
— on the earliest of: (a) the day the Association ceases to exist with no designated
successor; (b) the end of twelve consecutive months in which it recorded no Entitlement and
no Donation Entitlement, with no designated successor; (c) the day named in a signed,
published **declaration of lapse**, which cannot be withdrawn and whose day cannot be moved
later. Limb (c) is D46's: five of the movement's documents had promised the board could bring
the lapse forward on the day it stops selling, and the text could not deliver it.

**What keeps the clock in (b) running, and what does not.** Recording an Entitlement or a
Donation Entitlement does. A Waiver does not — it is the Project Steward's record, not the
Association's, and is the maintainer's "gratis, forever" tool; it must stay usable right up to
the lapse, so it cannot be the thing that postpones the lapse.

**The evidentiary handle.** Anyone may determine whether (a), (b) or (c) has occurred from the
Steward Registry's transparency log **and its published mirrors held outside the
Association's control**. The mirrors are the point: the registry's own record is under the
lapsing party's control, so the statutes bind the Association to name an archive custodian —
a public-interest archive or Swiss public-benefit body, never a member or founder — that keeps
the registry, the log and the key set readable at their permanent addresses after the
Association is gone (Art. 9 para. 4, Art. 23 para. 5). Whether that suffices, and what a
licensee may rely on if the log and a mirror disagree, is counsel's (agenda row 8).

**The successor.** Designated only by a signed record, published like a declaration of lapse,
that names the organization and that the organization has accepted in writing. From that day
it is the Steward Organization for every purpose of these terms. A successor that records
nothing for twelve months counts as no successor, and (b) runs against it — so a paper
successor cannot reset the clock. The formality of both records (who acts, how many
signatures, irreversibility) and the clock where no credential was ever recorded stay with
counsel.

### §9 Recorded credentials, and what stays yours — bounded permanence

**The rule.** A current credential satisfies §4 for the software it covers, for every
licensor's grant, and vests versions permanently: **a version is vested for an organization
if it was published on or before the end of that organization's credential's term** (D12 as
amended; LEG-084). Once vested, nothing takes a version away — not the project leaving the
registry, not a Waiver revoked, not a term ending, not a schedule change, not the Association
failing. Revocation and non-renewal act on versions published afterwards, never on what is
already deployed. This is the clause that answers the procurement question most licences in
this family leave unanswered: *what happens to what we have already deployed?*

**The only exceptions (D48 item C).** Earlier drafts said "nothing takes it away" without
qualification, which was not quite true, and a promise that is not quite true is worse than a
bounded one. The draft now names the two exceptions, and the two things that are not
exceptions:

1. a credential the registry records as **void** — obtained by fraud, forged, or issued through
   a compromised signing key — vests nothing;
2. a credential **cancelled for a refund** vests nothing for the refunded term;
3. an **honest under-certification** of a revenue band is a matter for the purchase agreement
   (a true-up), never a loss of vesting;
4. **patent litigation** under §3 ends only the patent licence.

Nothing else qualifies permanence. The position of an organization that relied in good faith
on a credential later recorded as void is on the counsel agenda (row 9).

**Vesting is not forgiveness.** The distinction matters and the draft draws it: vesting is
permission to use covered versions *from now on*. It does not excuse use before the credential
was recorded. Whoever offers that — the Association or the project's steward of record, in
amnesty covenants — offers it in their own agreement, bounded to claims they actually hold,
never through these terms (LEG-045). Individual contributors' claims for past use can be
released only by those contributors.

**The bootstrap sentence.** "Everyone who licenses their contributions on these terms accepts
that recorded Entitlements, Donation Entitlements and Waivers satisfy §4 for their grant." This
is the in-licence acceptance of the steward roles: a licensor agreeing, by using this text,
that a third party's registry record satisfies a condition in their own grant. Its formation
under Swiss and German standard-terms doctrine and under drive-by-contributor conditions is a
counsel question (LEG-039, LEG-040), as are the fork and hostile-takeover cases — a Waiver
travels with the work as it stood when granted, an Entitlement travels with the registry
(OPEN-29).

### §10 The absence list

§10 adds nothing. It restates, in one place, obligations the draft does not contain, because
"read the whole text and notice what is missing" is not a review method anyone uses. Earlier
drafts introduced it as "the three questions every corporate reviewer asks first" and closed
with "these are properties of the drafting above, restated"; the body now carries the bare
list.

### §11 Notices — and what arrived under other terms

Keep the licence text and every copyright, patent and attribution notice with every copy or
substantial portion you distribute. Adopting these terms never deletes an inbound licence
text (D24; LEG-042). The first sentence is drafted as a scope condition — the permissions
cover a distributed copy only if it keeps the notices — in the MIT/Apache tradition; whether
that form is right, and how it interacts with §7 conversion, is a counsel question (agenda
row 10). The second sentence is new (D48 item D): material that came to the
project under other terms stays under those terms, with its notices; these terms cover the
contributions made under them. That is the licence side of the contribution model — original
work, employer-owned work, copied permissive code and incompatible dependencies are the
project's intake questions, not the licence's, and CONTRIBUTING carries them.

### §12 The name

The licence *name* and the Association's name are trademarks, and saying that software is
licensed under these terms is conditioned on shipping this text unchanged, at a version the
Association published. That is the mechanism that keeps one canonical text canonical (the
MariaDB/BUSL pattern); it restricts naming, never use, and it never restricts describing the
software factually (D10; LEG-037). No application to register the marks exists today. The
finished licence text itself will be published under CC BY 4.0 (D48 item 10), so the text is
freely copyable and the *name* is what protects its integrity; LICENSE-NOTICE has the detail.

### §13 No warranty, no liability

One short section in the Blue Oak/PolyForm register (D48 item 8): as far as the law allows,
the software comes as is, with no warranty and no liability under any kind of legal claim —
and the terms exclude nothing the law says cannot be excluded. That last sentence is the
mandatory-law carve-out, kept from earlier drafts. Portability across the main adopter
jurisdictions, including against consumers, stays with counsel (agenda row 12). Note one thing
that is deliberately **not** here: the promise that a credential is not a warranty against
third-party rights belongs in the Entitlement terms, not in the licence (LEG-083).

### §14 Interpretation — and the silence on governing law

Severability and no waiver by delay, in two sentences. **There is no governing-law or forum
clause, by decision** (D48 item 7), following Blue Oak and PolyForm practice. State the
consequence accurately: the applicable conflict-of-laws rules of whatever court hears a
dispute decide which law applies to the licence — it is *not* the case that "each licensor's
own law applies", and this file does not claim it. The Entitlement agreement is a separate
contract and chooses its own law and forum; that choice cannot be read into the licence. The
consequences of the silence for enforcement in the US, CH and DE are the remaining counsel
question (agenda row 13). The alternative the record weighed — a stated Swiss governing law —
would centralize interpretation but reads as a vendor licence and may be unenforceable
against consumers in several jurisdictions.

---

## Part 3 — The trace, and what is missing on purpose

### 3.1 Clause → decision

Inline decision references were stripped from the licence body in `1.0-draft.2` so the text
reads as a licence. They are collected here. `D48` is the movement's record of the operator
decisions of 16 September 2026; its lettered items are the five consequential issues decided
the same day. `D46` is a decision candidate on its own sheet, entered in the register once the
operator confirms; the drafts already implement it.

| Section | Implements | Requirements and sources |
|---|---|---|
| §1 Purpose Notice | D10 (one canonical text, zero per-project parameters); D23 as amended (designations in the text layer); D48 items 9 (LicenseRef identifier) and 13 (literal name, UID anchor) | LEG-027; SPDX `LicenseRef-` form; REUSE |
| §2 group and control | D8; D48 item A (the client's group is measured) | LEG-018; PolyForm Small Business 1.0.0 (verbatim "control", "your company" model) |
| §2 steward, registrar scoping | D6; D29 §6.3; D46 (successor limb) | LEG-016; statutes Art. 4 |
| §2 registry, recording, mirrors | D48 item B (effect on recording; §6 the only grace); D46 | statutes Art. 9 para. 4, Art. 23 para. 5 |
| §2 Entitlement coverage by name or every work | D48 item 5 (amends D42's "every registered repository" for the Pass; `spec/coverage/cov-v1.ts` must follow) | — |
| §2 Donation Entitlement | D18 | LEG-012 |
| §2 credential term | D48 item 11 | — |
| §2 Waiver, Project Steward | D14 as amended; D23 as amended | LEG-039 |
| §3 grants, no assignment | D6, D7 as amended | LEG-015, LEG-036 |
| §3 patent licence and defence | D48 item 6 | Apache-2.0 §3 |
| §4 condition, not covenant | D6 | LEG-010, LEG-013, LEG-051 |
| §4 "for the benefit of" | D48 item A | — |
| §4 limb (d) | D18 | LEG-012; OPEN-27 |
| §5 dual test, no audit, no prices | D8, D11 | LEG-017, LEG-019, LEG-020, LEG-022 |
| §5 CPI indexing, deterministic | D48 item 2 | PolyForm Small Business 1.0.0 |
| §5 non-profit, education, public-body limb | D48 item 1 | — |
| §5 no investment prong | D48 item 3 (closes OPEN-28) | — |
| §6 cure and its four triggers | D8; D48 item 12 | LEG-014 |
| §7 per-part conversion | D9; D48 item 4 | LEG-023, LEG-025 |
| §8 lapse, declaration, successor, mirrors | D9 as amended by D46 | LEG-024, LEG-040; statutes Art. 9 para. 4, Art. 23 para. 5 |
| §9 vesting, exceptions, what vesting is not | D12 as amended; D48 item C | LEG-084, LEG-045 |
| §9 bootstrap sentence | D23 as amended | LEG-039, LEG-040; OPEN-29 |
| §11 notices, inbound terms | D24; D48 item D | LEG-042 |
| §12 the name | D10; D48 item 10 (CC BY 4.0 for the finished text) | LEG-037 |
| §13 warranty and liability | D48 item 8 | LEG-083 (the credential-is-not-a-warranty point, placed elsewhere) |
| §14 silence on governing law | D48 item 7 | — |

### 3.2 Not in the licence, on purpose

A reviewer should be able to see the shape of the whole thing, including the parts that are
not in the licence:

| Not in the licence | Where it lives instead | Why |
|---|---|---|
| Prices, tiers, bands | The Association's published schedule | The licence must stay binary and reviewable once (D11, LEG-022) |
| Any payment obligation | The separate Entitlement agreement | Keeps the mechanism out of third-party-beneficiary doctrine (D6) |
| Self-certification of revenue band | The purchase flow | An audit clause in a licence is a procurement veto (LEG-020) |
| A cooling period or a renewal grace | Nowhere — the coverage lookup must follow the licence | §6's 60-day cure is the only grace; a credential counts from recording (D48 item B) |
| An investment ("capital raised") prong | Nowhere | Decided out (D48 item 3); adding one later would narrow the threshold, which the immutable core forbids for existing contributions without fresh consent |
| A governing-law or forum clause | Nowhere in the licence; the Entitlement agreement chooses its own | Blue Oak/PolyForm practice; conflict-of-laws rules decide (D48 item 7) |
| Terms addressed to project admins | The platform terms accepted at claim | A licence binds users, not the admin↔steward relationship (D13, LEG-080) |
| Amnesty covenants for past use | The Entitlement agreement, plus a separate opt-in contributor mandate for anything beyond the steward's own covenants | The steward cannot release claims it does not hold (LEG-045); vesting is not forgiveness (§9) |
| Enforcement mandates | A separate opt-in document that does not exist yet | Contributors keep their claims unless they choose otherwise |
| The `PURPOSE.yml` manifest | Optional, operational, non-authoritative | Adoption is one committed licence file (D23 as amended) |
| The donation proof standard | The registry's published terms | The licence says only that the credential must be recorded (OPEN-27) |
| The immutable core | The contributor sign-off §2.3 and statutes Art. 13 — six items | It bounds what a later *version* may do to existing contributions; the licence version itself is what it bounds |
| The contributor intake rules (original work, employer permission, copied permissive code, dependencies) | CONTRIBUTING | The licence covers contributions made under it; the project decides what it takes in (D48 item D) |

---

*Revised 2026-09-16 for `1.0-draft.2`: Parts 0–3 rewritten to the operator decisions of that
day; the commentary removed from the licence body folded in under each clause; the 2026-09-05
registrar-scoping note retired as drafted into §2. Nothing in this file has been reviewed by
counsel.*
