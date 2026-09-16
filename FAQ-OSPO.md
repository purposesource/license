> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> marked inline as `[COUNSEL: …]`.

# Legal-review pack — the questions an OSPO actually asks

Written for the person who has to write an internal recommendation about an unfamiliar
licence, and who will be held responsible for it. Answers describe the **draft** in
[drafts/purpose-source-license-1.0-draft.md](drafts/purpose-source-license-1.0-draft.md),
revision `1.0-draft.4` of 2026-09-16. Nothing here is legal advice and nothing here is final
— the licence has not been drafted by counsel and has never been published, so no clock has
started and no project uses it.

Where an answer is uncomfortable, it is written that way on purpose. An OSPO discovers the
uncomfortable parts anyway, and discovering them from us costs the movement less than
discovering them from a critic.

---

## The short version

| | |
|---|---|
| **Is it open source?** | No. Field-of-use restriction. We do not claim the term. |
| **Does anything attach to our code?** | No. No copyleft, no share-alike, no network clause, no disclosure duty. |
| **Who needs a credential?** | Organizations above the threshold: 100 or more people **or** revenue at or above the limit in the latest completed tax year (USD 1,000,000 for 2026, indexed yearly to US CPI-U), measured group-wide. Never non-profits, public educational institutions or public bodies, whatever their size. Nobody else — and nobody at all for evaluation, security review or contributing (question 19). |
| **What triggers payment?** | Nothing in the licence: it contains no payment obligation. Use for a large organization without a recorded credential is simply unlicensed, after a 60-day cure — at most 60 cure days in any twelve months, days the issuance service was down not counted, and parts made public during cure days do not vest. |
| **Can we be audited?** | No. There is no audit clause and there never will be. |
| **What happens at four years?** | Each licensor grants the Apache-2.0 permissions now, for each part of the software, effective four years after that part was first made public under these terms — and everything in a release no later than four years after that release. Nothing more is needed on the day; forks never restart the clock (question 4). |
| **What if the steward organization disappears?** | On the day the Association ceases to exist with no designated successor; after twelve months in which it neither recorded an Entitlement or Donation Entitlement nor kept a published schedule under which one could be obtained (one clock, started at the licence's first official publication and never restarted by a successor; a project's Waiver keeps no clock running) — or earlier, on the day a published declaration of lapse names — the condition lapses and the licence becomes permissive. |
| **What do we keep if we stop paying?** | Every part of the software made public on or before the recorded end of the term — every public commit, tag, release or package within scope, whether or not the project ever tags a release (question 24). Permanently, with exactly three narrow exceptions — a forged record, a credential obtained by fraud, and a term refunded or charged back in full (question 6). |
| **Is there a copyright assignment for contributors?** | No — permanently, by design. Contributors keep their copyright. |
| **Which law governs?** | The licence is silent, like Blue Oak and PolyForm. Conflict-of-laws rules decide; the Entitlement contract picks its own. |
| **Scanner status?** | The identifier is `LicenseRef-PurposeSource-1.0`, valid SPDX for an unlisted licence. Expect "unknown licence" flags until list inclusion is requested and granted (question 12). |

---

## 1. Is this open source?

**No.** The licence restricts use by organizations above a size threshold unless they hold a
recorded credential. That is a field-of-use restriction, and it fails the Open Source
Definition. The movement's position is not to litigate the definition: the term belongs to
the community that defined it, open source is the predecessor this category is built on, and
claiming the label would be both false and self-defeating.

Practically, this means your policy should classify it the way you classify BUSL, FSL,
Elastic-2.0, and the PolyForm licences — a **source-available** licence with a delayed
conversion — and not the way you classify Apache-2.0.

It also means the honest cost is owned: some organizations bar contribution to
source-available projects outright. That is a real cost to maintainers who adopt, and it is
not claimed to be zero. The four-year conversion is what makes even the strictest policy able
to consume, pin, and eventually contribute.

## 2. What exactly triggers a payment obligation?

**Nothing in the licence — because the licence contains no payment obligation.**

This is the part most reviewers have to read twice. The licence grants permissions *while* one
of four facts is true: you are not acting for the benefit of a Large Organization; or the
benefiting organization holds a recorded Entitlement, a recorded Waiver, or a recorded
Donation Entitlement covering the software. If none is true, there is no permission — the
use is unlicensed, in the ordinary copyright sense, once the 60-day cure in §6 has run. There
is no clause anywhere obliging anyone to pay anybody. And none of this touches evaluation,
security review or contributing, which need no coverage at all (question 19).

Two consequences for your analysis:

1. **No third-party-beneficiary question arises**, because nothing in the licence promises the
   steward organization anything.
2. **Non-compliance is a copyright matter, not a contract matter**, and the counterparties are
   the project's contributors — each of whom licensed their own part. Nobody can settle on
   their behalf unless they separately choose to authorize it.

Buying a credential is an ordinary bilateral contract with the steward organization — the
Purpose Source Association, "the Association" in the text: offer, price, invoice, VAT. It is
not a licence to the code, and it is not marketed as one. A credential counts from the day it
is recorded in the public registry. There is no renewal grace in the licence — the 60-day
cure is the only grace it knows, capped at 60 cure days in any twelve months. The one other
timing rule is for Waivers: a Waiver gives permission the day it is recorded, but nothing
vests under it for 72 hours (question 21).

## 3. What does the fee actually buy?

Precisely three things:

1. **A recorded credential** in a public registry, which satisfies the licence condition for
   your group — for the software the credential names, or for **every work under these
   terms** if you hold the network-wide Pass. Coverage attaches to the licence, not to
   registration: a Pass covers a project under these terms whether or not that project ever
   registered with the steward. The licence also binds the seller: a credential is issued only
   under the Association's published schedule, on the same terms for everyone, for at most
   one year at a time, and within the Association's published constitutional commitments on
   the charitable destination of funds and no private profit. There is no private price, no
   side term and no century-long deal for anyone, and the licence itself says where the money
   must go.
2. **Permanent vesting** of every covered part made public on or before the recorded end of
   your term — tagged release or untagged commit alike (questions 6 and 24).
3. **Amnesty covenants for past use** — if and as the Entitlement agreement offers them, from
   the Association and from the project's steward of record, bounded to the claims they
   actually hold. The licence itself forgives nothing (question 6).

And precisely what it does **not** buy, stated because overstating this is the failure mode:

- It is **not a warranty** that the covered code is free of third-party rights. The credential
  says the condition is satisfied; it says nothing about the rights chain in the code. Treat
  your usual provenance diligence as unchanged.
- It is **not a licence from the steward organization**. The Association holds no rights in
  code it registers for others and cannot grant any. (Where it owns a registered project of
  its own, it is an ordinary licensor of that project, disclosed as steward-owned.)
- The amnesty covenants **do not cover claims the steward does not hold**. Individual
  contributors' claims for past use can only be released by those contributors, through a
  separate opt-in mandate that does not exist yet. Any marketing implying total retroactive
  release would be false, and the record forbids it.
- It buys **no support, no SLA, and no indemnity** unless a project separately offers one.

## 4. What happens at year four?

Each licensor **grants you, now**, the copyright and patent permissions of **Apache License
2.0** for each **part** of the software, effective four years after the day that part was
first made available to the public under these terms — a public commit, tag, release or
package, never a date an author typed into a file. Nothing more is needed on that day.
Material added later has its own clock. **Forking, copying, repackaging or re-releasing an
existing part never restarts its clock.** Nobody — not the steward, not the project, not any
licensor — can extend it for anything already public.

The words "grants you, now" are new in `1.0-draft.4` and they matter for a review. The
previous draft said each part "becomes available" under Apache-2.0 at four years, which left
room to argue that some act of conversion was still owed on the day by a licensor who might
by then have sold the copyright, dissolved or died. Now the Apache grant exists from the
first day and only its effective date is in the future: a successor in title or an estate
takes the copyright with the grant already attached, and the Association's dissolution cannot
touch it. Counsel confirms the form; the operative words no longer wait for counsel to write
them.

If you would rather not compute a date per line, the draft gives you one per release: **every
part in a version converts no later than four years after that version was first made
available to the public**; parts that were public earlier convert earlier. Read the release
date, add four years, and everything in that release is Apache-2.0 by then.

For a review, the practical reading is: **the maximum exposure of adopting a dependency under
this licence is a four-year wait.** You can pin what you have and consume the converted parts
under Apache-2.0, with the same policy you already apply to Apache-2.0 code. The patent
licence is drafted in Apache-2.0 §3's shape so that the conversion changes nothing for
patents (question 18).

The conversion is in the licence text, not in a policy page, precisely so that this reading
does not depend on trusting anyone. A later licence version can only ever *shorten* the delay
for contributions already made under the sign-off's delegation; lengthening it would need
each contributor's fresh consent, or reach future contributions only.

## 5. What if the steward organization ceases to exist?

The licence carries a backstop (§8): the Purpose Condition **lapses** and the permissions
apply without it — the licence degrades to permissive, for everyone — on the earliest of:

- the day the Association ceases to exist with no publicly designated successor;
- the last day of **twelve consecutive months** in which it neither recorded an Entitlement or
  a Donation Entitlement nor kept a published schedule under which one could be obtained (a
  project's Waiver keeps no clock running — it is the project's record, not the steward's;
  question 22 explains the schedule element); or
- the day named in a signed, published **declaration of lapse**, which the steward's wind-down
  protocol is designed to issue on the day it stops selling. It cannot be withdrawn and the day
  cannot be moved later.

The twelve-month clock has a start and a single life, in the text since `1.0-draft.4`: it
**starts at the licence's first official publication and runs on through any succession**.
It does not wait for a first credential, and it does not restart when a successor is named.
Lapse removes the condition and nothing else — it does **not** bring the four-year Apache
conversion forward.

A successor is designated only by a signed, published record, and only a **non-profit that
has accepted in writing these terms, every recorded credential and the commitments in §2** —
the published constitutional commitments on the charitable destination of funds and no
private profit, which the licence now places on the Association itself (question 3) — can be
one. A successor is measured by the same clock: a paper successor cannot reset it, and nobody
can hand the registry to a buyer who would run it for profit.

Two honest caveats:

- You have to be able to determine the lapse without litigation. The draft's evidentiary
  handle is the registry's transparency log **and its published mirrors held outside the
  Association's control**; the Association's statutes bind it to name an archive custodian
  that keeps the registry, the log and the key set readable after it is gone. Whether that
  suffices, whether the schedule element of the twelve-month test is readable from the log
  alone, whether "first official publication" is a determinable day, and what you may rely on
  if the log and a mirror disagree, is on the counsel agenda — unresolved.
- The Association exists on paper only: its founding assembly was held on 2026-09-16 and its
  commercial-register entry is pending. There is no credential to buy today and no coverage
  lookup to query.

## 6. If we stop paying, do we have to rip it out?

**No.** The rule is one line: **a part is vested if it is within your credential's scope and
was made available to the public on or before the end of your credential's recorded term.**
"Made available to the public" means a public commit, tag, release or package — the unit is
the code that is public, not a release someone named (question 24). Everything vested stays
usable permanently.

That means:

- At activation you vest the entire back catalogue of covered code — everything within scope
  that is public that day.
- During your term you vest everything made public in it.
- If you do not renew, you keep all of that and simply stop vesting new code. Parts made
  public during the 60-day cure that follows do not vest either; the cure keeps you running,
  it does not extend your term.
- The same holds if the project leaves the registry, if a Waiver is revoked, if the schedule
  changes, or if the Association fails. Revocation acts forwards, never on what you have
  deployed. Your term is the start date, end date and schedule version recorded at issue; a
  later schedule change never alters it.
- Under a **Waiver**, permanence starts after 72 hours: a Waiver gives permission from the day
  it is recorded, and if it is still active 72 hours later every part then public within its
  scope vests, with later parts vesting as they are made public while it stays active. Whether
  it was still active is what the transparency log shows, not a copy saved at issue
  (question 21).

**The only exceptions**, all in §9, all narrow:

1. a **forged record** — one with no genuine issuance behind it — vests nothing;
2. a credential **obtained by fraud or deliberate deception** vests nothing;
3. a term **refunded or charged back in full** vests nothing (question 23 says why); a
   partial refund, or a refund for the Association's own failure, leaves vesting untouched.

**What §9 says are not exceptions:**

1. **you may rely on a genuinely issued record** despite the Association's error, an honest
   under-certification of your revenue band, a later compromise of the signing key or the
   record's later removal. An honest under-certification is a **contract matter (a true-up)**
   under the purchase agreement — never a loss of vesting;
2. **patent litigation** (question 18) ends only your patent licence, never your vested
   parts.

**Corporate changes.** A credential covers its beneficiary and the entities in its group while
they are in it. An entity that leaves the group keeps what it vested. When a covered business
is sold or merged, its vested coverage goes with that business for its own operations — not
for the buyer's other operations — and coverage cannot be sold on its own. So a spin-off keeps
its deployments; a buyer gets the target's deployments and nothing more.

**Forks.** Vested code stays vested in forks and modified copies; what others add needs its
own permission. Coverage of named software reaches the contributions first offered through
that project, not code imported from elsewhere — and a contribution first published in a
development fork or branch for submission counts as originating in the project once
accepted, so an ordinary pull request is never an "import".

Nothing else in the design can strip a part you already vested. This is deliberate: a
licence that can strand a production deployment is not procurable at any price.

**What vesting is not.** Vesting is permission for covered parts *from now on*. It is not
forgiveness for use before your credential was recorded. If the Association or the project's
steward of record offers amnesty covenants for past use, they do so in the Entitlement
agreement, bounded to the claims they hold — never through the licence.

## 7. Does it impose anything on our own software?

No. There is no copyleft, no share-alike, no network clause, and no disclosure duty of any
kind — not source, not architecture, not deployment, not customers. The condition attaches to
the licensed software and travels no further. Your modifications are yours, subject to keeping
the software's notices and to the condition continuing to be satisfied for the licensed parts.

The licence says this in one sentence (§10: nothing of your own software, no disclosure, no
network duty, no share-alike, no audit and no report). The five-line version, item by item,
is in Part 1 of [ANNOTATIONS.md](ANNOTATIONS.md), which also carries the clause-level
walkthrough.

## 8. Can we be audited? What do we have to report?

**No audit right exists in the licence, and the record forbids ever adding one.** You report
nothing, register nothing, and notify nobody. The threshold is self-assessed against your own
latest completed tax year, with counting rules the licence spells out (question 9).

If your group buys a credential, it certifies its own revenue band once, in the purchase flow
— under the purchase agreement, not the licence. What happens if that certification was
wrong is exactly what §9 says, and nothing more:

- an **honest under-certification** is an ordinary contract matter with a true-up remedy under
  the purchase agreement. The licence says you may rely on a genuinely issued record despite
  it; it never costs you a vested part;
- a credential **obtained by fraud or deliberate deception** vests nothing — that is the one
  case in which a wrong certification reaches the licence, and it reaches it because the
  credential was never honestly obtained.

There is no "bad faith" standard floating between those two. The other thing that vests
nothing is a **forged record** — a record with no genuine issuance behind it, which is not a
certification problem at all. A genuinely issued record survives even a later compromise of
the Association's signing key: your rights come from the issuance, not from the key. Whether
that reliance rule holds against a record the registry later marks void is a counsel
question.

## 9. How is the threshold measured for a group like ours?

Both tests, together, across the whole group under common control — direct or indirect,
whether through ownership of substantially all assets or the power to direct management and
policies by vote, contract or otherwise (the PolyForm "control" definition, verbatim):

- fewer than **100 individuals** as employees plus individual contractors, counted together;
  **and**
- less than the **revenue limit** in total revenue in the latest completed tax year.

**How to count** — the licence now says it, so you do not have to guess:

- headcount is the **average month-end** number of employees and individual contractors with
  ongoing engagements, each counted once, part-time included;
- revenue is each group member's **latest completed tax year**, excluding transactions within
  the group;
- **investment raised is not revenue**;
- an organization **without a completed tax year** uses its current headcount and its revenue
  since formation, annualized;
- **reasonable provisional figures may be used until reliable ones exist** — assess on the
  numbers you have; if reliable figures later show you were over the threshold, the 60-day
  cure runs from the day you knew or should reasonably have known (§6(d)), not from a day the
  auditors chose;
- **group changes count when they occur** — the day you are acquired, you are measured with
  your acquirer (and the 60-day cure runs from that day);
- other currencies convert at a **published central-bank or IMF average rate** for the
  period, chosen consistently.

**The revenue limit** is USD 1,000,000 for 2026. For each later calendar year it is
USD 1,000,000 multiplied by the preceding June's value of the US CPI-U series (all urban
consumers, U.S. city average, all items, not seasonally adjusted) divided by its June 2026
value, rounded to the nearest USD 1,000. That means every year's limit is known by mid-July
of the year before. The limit never falls below the previous year's; if a value is
unavailable the previous year's limit stands; an officially linked successor series replaces a
discontinued one. The limit for your tax year is the one for the calendar year in which that
tax year ended. The Association will publish the figure each year for convenience, but the
calculation in the text governs, so it does not depend on anyone publishing anything.

**Non-profits, public educational institutions and public bodies** meet the threshold at any
size — a non-profit or public-benefit body under the law it is organized under, a public
educational institution, or a public body performing public functions. A commercial company
such a body controls does not inherit that; and work a non-profit does for a commercial
client is judged by the client (question 16).

So a small subsidiary of a large group is **not** below the threshold. That is intentional; the
alternative makes the threshold decorative. And there is **no "capital raised" test**: the
record once recommended a prong counting an organization as large if it had raised more than
USD 1,000,000 in five years, and the operator decided against it on 2026-09-16. Adding one
later would narrow the threshold, which a later version may not do to existing contributions
without each contributor's fresh consent.

## 10. Who can grant us an exemption, and can we negotiate one privately?

A **Waiver** may be recorded by the project's steward — whoever holds administrative control
of the canonical repository, or their designee through the registry's verified claim process
— and it is **public, gratis and scoped to that software**. There are no private exemptions
in the design: a waiver that is not in the public registry does not exist, and selling
exemptions privately is a delisting offence for a project. A Waiver gives permission the day it
is recorded; its permanence starts 72 hours later (question 21). A Waiver may be revoked going
forward; what you vested under it stays yours, and use during its active days stays lawful.

Nor can you negotiate a private deal with the Association: the licence says credentials are
issued only under the published schedule, on the same terms for everyone, for at most one
year at a time, and within the Association's published constitutional commitments on the
charitable destination of funds and no private profit.

The reason is self-protective as well as ethical: private side deals would make the coverage
question unanswerable, and the registry's whole value is that one lookup answers it.

## 11. What about contributors — what do they sign?

**Contributors never assign copyright and never transfer economic ownership. Permanently.**
That is a constitutional commitment of the movement — it is in the Association's statutes —
not a current policy. The licence itself says it in one line: "Contributors keep their
copyright; nothing here assigns it."

The licence also carries Apache-2.0 §5's default: unless the contributor clearly says
otherwise, a contribution intentionally submitted to the project is offered under these
terms. A drive-by pull request is under the licence without a ceremony. That sentence gives
the project the present licence; it does not replace the sign-off, which is about the future.

There is a contributor sign-off, because there has to be one: it (a) warrants the right to
submit, (b) acknowledges the steward roles the licence itself defines, and (c) delegates
forward to *materially consistent* later licence versions — bounded by a **six-item immutable
core** that a successor version applied through that delegation may never change:

1. the free-tier threshold — it may only ever be **widened**;
2. the conversion delay — it may only ever be **shortened**;
3. the charity destination and the no-private-profit rule;
4. the Association's character as registrar, never a licensor of code it registers for others;
5. the existence of the project steward's free-of-charge waiver power;
6. the steward-lapse backstop — its existence and its clock, which may only ever be
   **shortened** (added 2026-09-16 under D46; the statutes' Art. 13 carries the same six).

A change touching the core reaches a contributor's existing contributions only with that
contributor's separate agreement, and otherwise only contributions made after it is
published. The sign-off also says nothing about copying rules for what a project takes in —
original work, employer-owned work (get the employer's permission), copied permissive code
(keep its licence and notices), incompatible dependencies — those are the project's intake
questions and live in its CONTRIBUTING, while the licence's §11 keeps inbound material under
the terms it arrived with.

The designed default is a one-line git trailer. Whether that carries sufficient contract
strength, or whether a minimal signed agreement is needed, is counsel's decision within those
fixed constraints — so the public promise is about copyright, never about ceremony. Draft:
[drafts/contributor-sign-off.md](drafts/contributor-sign-off.md).

## 12. How does this show up in our scanners?

Honestly: as an unlisted licence, at first.

- The Purpose Notice carries `SPDX-License-Identifier: LicenseRef-PurposeSource-1.0`. The
  `LicenseRef-` form is valid SPDX for a licence that is **not on the SPDX list**, so the line
  parses in every SPDX-aware tool today — but a tool that wants a *listed* identifier will
  still report "unknown licence" or "LicenseRef". SPDX list inclusion is requested later,
  once adoption exists to show; the site will state the status truthfully as "requested" until
  a listing exists. Realistically, that takes a while.
- Adoption is designed for REUSE: a project commits the canonical text as `LICENSE` (or as
  `LICENSES/LicenseRef-PurposeSource-1.0.txt`) and puts the identifier line in its files or in
  `REUSE.toml`. A bare URL is not enough under REUSE, and it is not what the Purpose Notice
  asks for.
- Submissions to the major scanner databases are made proactively when adoption exists, for
  the same reason.
- The bridge in the meantime is machine-readable: one canonical text per version whose bytes
  are published at a stable URL, a public registry with a coverage lookup, and signed
  credential records your policy engine can consume rather than a PDF someone has to read.

If your policy treats an unlisted licence as a hard block, this licence is blocked in your
environment until the identifier lands on the list. That is a true statement about the
current state and there is no way to dress it up.

## 13. What about AI-generated code in these projects?

Open and flagged, not answered. Two questions are on the counsel agenda: whether the licence
should say anything about training use, and how robust a use-condition is across a codebase
where a large share of lines may carry thin or no copyright. No claim is made in either
direction today.

## 14. Where is the enforcement posture?

In order, and deliberately unglamorous:

1. **Scanner-legible compliance** — an identifier, one canonical text, a public coverage
   lookup, signed credential records. Compliance teams are the enforcement organ.
2. **Registry transparency** — the registry is public, so a heavy user's absence from it is
   visible.
3. **Amnesty covenants in the Entitlement agreement** — bounded as in question 3.
4. **Opt-in contributor mandates** — for anything beyond the steward's own covenants.

Litigation is a decade-scale tail risk, not an operating tool, and the record forbids
marketing it as one. Nothing in any movement document creates a duty on the steward to pursue
infringers.

## 15. What is the status of everything on this page?

- **The licence:** working draft, pre-counsel — revision `1.0-draft.4`, which applied the
  operator's decisions on the 16 September 2026 review proposal and, later the same day, on
  the comparison review that followed it (question 23 lists what was turned down, both
  times). Not published. No version exists, so no conversion clock runs.
- **The steward organization:** the Purpose Source Association held its founding assembly on
  2026-09-16. Its commercial-register entry and enterprise identifier are pending.
- **The registry:** a first, public version with curated entries exists. **Credentials and the
  coverage lookup:** not built; nothing can be bought or verified today.
- **Demand evidence:** the movement's spend-follows-evidence gate passed on 2026-09-14 (D39,
  on the operator's confirmation; the evidence filing is pending). It is no longer an open
  step.
- **Counsel:** not engaged. What remains before publication is counsel's own work — three
  jurisdiction memos (US, CH, DE) on the condition architecture, then the full drafting
  engagement. None of it has started.
- **This page:** an argument about a draft, published so that the argument can be attacked
  early. If you can break it, please do — [how to comment](README.md#how-to-comment).

## 16. Our contractors use it for us. Our customers use it on our platform. Who is "acting for the benefit of" whom?

The rule in §4 is short: you exercise permissions for the benefit of an organization when you
use the software *as* that organization, or in work you do *for* it as its employee,
contractor or service provider. Then three rules that settle the usual arguments: **a
client's coverage, or its meeting the threshold, also covers work others do solely for it; a
general service for many customers is your own use; a dedicated deployment for one customer
is work for that customer.** Incidental benefit does not count, and neither does merely
passing the software on. Personal use, unrelated to such work, needs no coverage.
Applied:

**Covered — the Large Organization needs a credential:**

- its own use, on its own machines or in its own cloud account;
- its employees using the software in their work for it;
- a contractor, agency or managed-service provider that runs, integrates or builds with the
  software solely for the organization's project. The contractor may be three people; the
  client's group is what is measured, and the client's credential covers that work
  (question 20);
- a deployment dedicated to one customer — a single-tenant instance run for that customer
  alone is that customer's use, whoever operates the machines;
- a non-profit's subsidiary that is a commercial company, or a non-profit's work for a
  commercial client — the exemption in §5 stops at the commercial party.

**Not covered — no credential is needed for that use:**

- being an ordinary customer of a general service that happens to run the software. If a
  large bank uses a small SaaS company's multi-tenant product and that product is built on
  the software, the SaaS company is the one exercising permissions — it is judged by its own
  size, not by its customers';
- a package mirror, a registry, a distributor or a CDN passing the software on;
- an employee's personal or hobby project, even on a work laptop, if it is not work for the
  employer;
- an academic or research collaboration in which the Large Organization is not the one using
  the software;
- any benefit that is merely incidental — your supplier's supplier runs it, a partner's
  demo used it once.

Where you are the contractor: your client's status decides, and the client's credential (or
its Waiver, or its non-profit status) covers your work for it. Where you are the client: your
credential covers everyone doing that work for you.

## 17. Which law governs, and where would a dispute be heard?

The licence says nothing about either, by decision — the same choice Blue Oak and the
PolyForm licences make. Two consequences, stated carefully:

- **Which law applies to the licence** is decided by the conflict-of-laws rules of whatever
  court hears a dispute. It is *not* true that "each licensor's own law applies" — that would
  be a rule the licence would have to state, and it does not.
- **The Entitlement agreement** — the contract under which a credential is bought — is a
  separate document and chooses its own governing law and forum. That choice cannot be read
  into the licence.

The consequences of the silence for enforcement in the US, Switzerland and Germany are on
the counsel agenda, unanswered. The alternative the record weighed — a stated Swiss governing
law — was rejected because it reads as a vendor licence and may be unenforceable against
consumers in several jurisdictions.

## 18. We hold patents. What does the patent clause do to us?

Two things, both familiar from Apache-2.0:

- **You receive a patent licence** from each contributor, covering the claims they can license
  that are necessarily infringed by their contribution alone or in combination with the
  software — the Apache-2.0 §3 scope, so that nothing about patents changes when a part
  converts to Apache-2.0 at year four. The grant, like the copyright grant, is irrevocable
  except as the licence itself says.
- **If you, or any member of your group, file patent litigation** (including a cross-claim
  or counterclaim) alleging that the software or a contribution in it infringes a patent or
  contributes to infringing one, every patent licence you or your group hold under these
  terms for that software ends on the day of filing. Your copyright licences and your vested
  parts are untouched, and nothing else in the licence is affected.

The group reach is new in `1.0-draft.4`. Apache's own trigger is per licensee, which leaves a
group free to keep its patent licences in the operating company and sue from an affiliate
that never touched the software; the licence closes that with the same "group" definition
the threshold already uses. It is an extension of Apache's rule, not a copy of it, and two
questions go to counsel with it: whether a group-wide trigger is enforceable against an
affiliate that took no licence here, and what litigation filed *before* a part converts does
to the deferred Apache patent grant (question 4).

Unlike PolyForm's trigger, a written claim short of litigation does nothing. Whether the
per-licensor grant reaches claims held by a contributor's employer is a counsel question.

## 19. Can we evaluate before buying?

**Yes, and you need nothing to do it.** §4 says: "The permissions in §3 also apply, with no
credential, to non-production evaluation, security review, and preparing and submitting
contributions to the project." That is the same shape as the Business Source License's
exception, adopted on 2026-09-16 after the review debate. Three things are free for an
organization of any size:

- **evaluation** that is not production — trying the software, benchmarking it, building a
  proof of concept nobody depends on;
- **security review** — your security team never needs a credential to look for a
  vulnerability;
- **contributing** — preparing and submitting patches, whatever the size of your employer.

The same sentence draws the fence: the permissions extend "not to production use or offering
the software's functionality to others". A staged rollout, a pilot with real users or an
internal tool people rely on every day is production, not evaluation, and needs coverage from
its first day of use. The counsel marker on §4 asks counsel to confirm that the words are
determinable enough to keep those cases out.

Two practical notes. The exception has no clock: evaluation can take as long as it takes —
a point the next revision writes into §6 itself, since draft.4's §6 opening does not yet say
that permitted evaluation is outside its 60 days. And
it is distinct from the 60-day cure in §6: if you start production use as a Large Organization
with no credential, §6(e) gives you 60 days from that first day — but those are cure days,
they count against the 60-in-twelve-months cap, and parts made public during them do not
vest. One thing does not eat them: days on which the Association's issuance service was
generally unavailable, as its transparency log records, do not count toward either 60 — an
outage on the steward's side never costs you cure days and never counts against the cap.
Evaluate freely; the day you go to
production, get the credential.

## 20. Can a contractor work for a covered client?

**Yes. The client's coverage is what covers the work.** §4 says a client's coverage or
exemption also covers work others do solely for it. So:

- a three-person agency building or running the software for a large client does not need
  its own credential for that work — the client does, and once the client has one (or a
  Waiver, or is a non-profit or public body), the agency's work solely for that client is
  covered;
- the agency's use for *itself*, or for other clients, is judged separately — by its own size
  for its own use, by each other client's status for work done solely for them. The review
  proposal put this as "the contractor must also qualify for its own use", and the outcome is
  the same;
- a **dedicated deployment for one customer** — a single-tenant instance run for that customer
  alone — is work for that customer, whoever operates it. That customer's status decides;
- a **general service for many customers** is the operator's own use. A SaaS company serving
  hundreds of customers is judged by its own headcount and revenue, not by its largest
  customer's.

Personal use, unrelated to work for a Large Organization, needs no coverage at all. The longer
list of worked cases is question 16; the reasoning is under §4 in
[ANNOTATIONS.md](ANNOTATIONS.md).

## 21. Why 72 hours?

Because a Waiver's revocation only works forwards, and without a short delay a mistaken Waiver
could never be undone.

A Waiver is the project maintainer's free, public exemption for a named organization. Under
the previous draft, everything the Waiver covered vested the moment it was recorded — the
whole back catalogue, permanently — and revocation, which is prospective by decision (D14),
could not take any of that back. One typo in an organization name, one hijacked maintainer
account, one maintainer talked into it at a conference, and a very large company held the
entire back catalogue for ever.

So §9 now says: a Waiver gives permission from the day it is recorded; nothing vests under it
during its first 72 hours; if it is still active after 72 hours, every part then public
within its scope vests, and later parts vest as they are made public while it stays active;
and revocation never makes earlier permitted use unlawful. Whether it was still active is
what the transparency log shows, not a copy saved at issue: a signed copy of the Waiver
downloaded at hour one proves it was issued and nothing more — it cannot show a revocation at
hour 48 — so the log's status history is the evidence, and the licence says so since
`1.0-draft.4`.

What that means for the organization named in the Waiver: you may use the software from the
first minute — the permission is immediate, and anything you did during those three days stays
lawful even if the Waiver is revoked. The only thing you wait for is permanence. What it means
for the maintainer: three days to notice a mistake and revoke it, with nothing lost by anyone.

Why 72 and not some other number: it is long enough to span a weekend and short enough not to
matter to a legitimate beneficiary, and it is the number the registry's coverage lookup was
already built to. The licence and the lookup now agree. Whether "permission now, permanence
by lapse of time" holds as a licence condition rather than a contractual promise, and whether
the log's history suffices as proof that a Waiver survived, is on the counsel agenda.

## 22. What happens if the Association sells nothing for a year?

**Nothing — as long as it keeps a published schedule under which someone could buy.**

This matters because of how the backstop in §8 works. The condition lapses for everyone,
permanently, at the end of any twelve consecutive months in which the Association neither
recorded an Entitlement or Donation Entitlement nor kept a published schedule under which one
could be obtained. The previous draft counted only recorded credentials. The 16 September
review pointed out the hole, and both reviewers agreed it was real: a live steward with a
price list on its website and a slow first year — twelve months in which nobody happened to
buy — would have lost the condition for every project, for ever, with no way back. A backstop
is meant to catch a steward that has died or gone silent, not one whose market has not
arrived yet.

So the test now needs both facts to be absent: no credential recorded *and* no published
schedule kept. A steward that is alive and open for business keeps the clock from running
simply by keeping its schedule published; a steward that has stopped publishing and stopped
recording does not, and after twelve months of that the licence becomes permissive for
everyone. Waivers still keep no clock running, and naming a successor neither stops nor
restarts it.

Where the clock starts is now in the text, not in a counsel note: it starts at the licence's
first official publication and runs on through any succession, and a successor is measured
by the same clock. So the first twelve months begin on publication day, whether or not anyone
has bought anything yet — a steward that publishes the licence and a schedule together has
nothing to fear from that; one that publishes the licence and then goes quiet does. The
comparison review asked for the anchor and the single clock to be operative words, and the
operator agreed. The operator also confirmed, for the second time, that the twelve-month limb
keeps its schedule element — the comparison proposal, written against the earlier draft,
would have taken it back to recorded credentials alone (question 23) — and that lapse does
not bring the four-year Apache conversion forward.

You can still check this yourself: the schedule's publication is logged in the registry's
transparency log, like every credential, so the twelve-month test is readable from the log and
its mirrors. Two things are with counsel: confirming that a schedule nobody can actually buy
under does not count as "kept", and that "first official publication" is a determinable day.
And the underlying decision sheet on dissolution and lapse (D46) is still a candidate awaiting
the operator's confirmation, so this is the operator's default rule, not yet a settled one.

## 23. What did the September reviews propose that the text does not do, and why?

On 16 September 2026 a competing plain-language proposal for the licence was written and
debated, and later the same day a second, comparison review of the resulting draft followed,
with a revised proposal of its own. The operator adopted sixteen ideas from the first (A1 to
A16 in the licence's revision log) and eleven from the second — ten into the licence (B1 to
B10) and one correction to the contributor sign-off (B11) — all explained clause by clause in
[ANNOTATIONS.md](ANNOTATIONS.md) — and turned down eight from the first and
seven from the second. Here they are, in plain words, so you do not have to wonder whether
they were missed. Both lists count from 1; the licence's records call them D49 and D50.

**From the first review (D49):**

1. **Refunds would keep what they vested.** The proposal said a refund, like a revocation,
   should only stop future vesting. Turned down because the Association's card processor
   (under its own merchant terms) can itself refund any sale within 14 days, at its
   own discretion, and the Association cannot contract out of that. If a refunded term
   vested, anyone could buy a credential, vest the whole back catalogue, and get their money
   back. A refunded term vests nothing; a refunded buyer acquired nothing to lose.
2. **A separate permission for issuance outages.** The proposal had a rule for a new user who
   cannot get a credential because the registry is down. Turned down as redundant: §6(e) —
   then lettered (d) — already gives 60 days from the first day of use while no limb of §4 is
   true, which is exactly what a new user needs during an outage. The proposal needed the
   rule only because its own text had no first-use grace.
3. **A paraphrased "control" definition.** The proposal rewrote "control" in its own words.
   Turned down: the licence keeps PolyForm Small Business 1.0.0's definition verbatim, because
   a definition procurement teams have already reviewed once is one they do not have to review
   again.
4. **Lane names in the licence.** The proposal defined Pass, Project and Portfolio coverage in
   the licence text. Turned down: lanes and prices live in the Association's published
   schedule, by decision (D11). The licence says only that a credential covers "the software
   it names, or every work under these terms if it says so". Products can change; the licence
   should not have to.
5. **An exemption scoped to non-profit *activities*.** The proposal exempted non-profits for
   their non-profit activities, universities for education, and public authorities for public
   functions. Turned down for the entity-based rule: a body can tell what it *is* far more
   easily than it can classify each thing it does, and the two exclusions the licence keeps —
   a commercial subsidiary is measured like anyone else, and work for a commercial client is
   judged by that client — already catch what the activity test was for.
6. **Convert to Apache-2.0 early if the Association lapses.** Turned down (D9): the lapse
   already removes the Purpose Condition, and what is left — keep the notices, do not sue over
   patents, do not misuse the name — is the same set of duties Apache-2.0 imposes. Early
   conversion would change nothing you could feel.
7. **Round the revenue limit up to whole dollars.** Turned down for rounding to the nearest
   USD 1,000: a limit a person can remember beats one that is exact to the dollar.
8. **"You may offer support or warranties on your own behalf" and "your terms must not remove
   recipients' permissions".** Not adopted. Every recipient receives each licensor's grant
   directly, so nobody's downstream terms can take it away — the second sentence is already
   true without being written — and nothing in the licence stops anyone selling support on
   their own account, so the first is not needed.

**From the comparison review (D50):**

1. **Refunds would keep what they vested — again.** The second review made the same case as
   the first, with more force: a permanence promise that an issuer-side event can undo is not
   a permanence promise. Turned down for the same reason: the processor's own 14-day refund
   power means a refunded term must vest nothing, or buying and refunding becomes a free back
   catalogue. What the operator did take is the distinction the commerce design already drew:
   a term **refunded or charged back in full** vests nothing; a **partial** refund, or a
   refund for the **Association's own failure**, leaves vesting untouched (B6, question 6).
2. **A 30-day written-notice procedure for a missing notice.** The proposal gave a
   distributor who dropped a notice 30 days after written notice to fix it. Turned down: the
   licence already says that putting the notice back restores the permission from then on.
   That is friendlier than a notice period — no letter, no clock, nobody to write to — and it
   needs no machinery.
3. **"Sublicensing on these same terms" in the copyright grant.** Turned down: nobody
   sublicenses here. Every recipient takes the grant directly from each licensor, which is
   what makes the condition travel with every copy without anyone in the middle.
4. **A separate outage-permission clause.** Proposed a second time, now with a
   documented-attempt test and 30 days after recovery. Turned down a second time: §6(e)
   already gives a new user 60 days from first use. What the text gained instead is one
   sentence: days on which the issuance service was generally unavailable, as the
   transparency log records, do not count toward either 60 (B7, question 19).
5. **Taking the twelve-month lapse test back to recorded credentials alone.** The comparison
   proposal was written against the earlier draft, before the schedule element was added.
   Turned down: "nor kept a published schedule" stays, for the reason in question 22 — a slow
   first year must not lapse the licence for everyone.
6. **UTC times and other specification-level detail.** Turned down: the licence says what
   counts and from when; the registry's specification says how the clock reads. Detail of
   that kind belongs there, where it can be corrected without a new licence version.
7. **Patent claims held "now or later".** Turned down, and its own author withdrew it: the
   grant covers the claims a licensor can license that are necessarily infringed by their
   contribution, in Apache's shape, and an after-acquired-claims sentence would have been one
   more place where the two texts diverge, for no gain.

Everything else the two reviews asked for and the operator agreed to is in the text. From the
first: irrevocable grants, the bound on what the Association may issue, the evaluation
exception, the contractor rule, the counting rules, the June-to-June revenue formula, the cure
cap, the 72-hour Waiver rule, the corrected vesting exceptions, the corporate-change and fork
rules, the release-level conversion bound, the widened lapse trigger, the successor bound,
the notices cure and the inbound-equals-outbound default. From the second: vesting by public
part rather than by named release (question 24), the present Apache grant, the anchored and
continuous lapse clock, provisional figures and the cure trigger that goes with them, the
development-fork rule, the refund nuance, the outage-days rule, the group-wide patent
trigger, the log as proof of a Waiver's survival, and the Association's own bound.

## 24. We never tag releases — what vests?

**Everything within scope that was public by the end of your term.** The vesting rule counts
*parts made available to the public* — a public commit, tag, release or package — not
releases the project has named. A project that publishes to its main branch and never cuts a
version is covered by the same words as one that tags weekly: on the last day of your
credential's term, every part of that project within your credential's scope that is public
on that day is yours permanently.

This was a real gap until `1.0-draft.4`. The four-year conversion (question 4) has counted
public parts since the previous draft, but the vesting rule still said "version", and a
version was defined as a release the project identifies as such. Take an organization that
pays for a year and runs public commits from a project that never identifies a release: its
code would convert to Apache-2.0 after four years like anyone's, but on the old words nothing
vested when its paid year ended, because there was no "version published on or before" the
end of the term. The comparison review of 16 September put that example on the table, and
the operator changed the unit (B1). Conversion and vesting now share one unit and one date,
and the *defined* word "version" survives in the licence only for the one sentence that lets
you read a conversion date off a release.

Three practical consequences:

- **You need no release to point at.** A commit and the day it first became public are
  enough. The registry's vesting records are meant to list exactly that; they do not exist
  yet (question 15), and the record notes that when they are built they must vest parts, not
  releases.
- **Tagged projects lose nothing.** A tagged release is public on its release day and
  everything in it is public by then, so for a project that tags, the old answer and the new
  one are the same set of code.
- **Cure days still vest nothing** (question 19), and a Waiver still waits 72 hours
  (question 21). The unit changed; the timing rules did not.
