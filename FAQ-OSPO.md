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
revision `1.0-draft.2` of 2026-09-16. Nothing here is legal advice and nothing here is final
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
| **Who needs a credential?** | Organizations above the threshold: 100 or more people **or** prior-year revenue at or above the limit (USD 1,000,000 in 2026 dollars, inflation-indexed), measured group-wide. Never non-profits, public educational institutions or public bodies, whatever their size. Nobody else. |
| **What triggers payment?** | Nothing in the licence: it contains no payment obligation. Use for a large organization without a recorded credential is simply unlicensed, after a 60-day cure. |
| **Can we be audited?** | No. There is no audit clause and there never will be. |
| **What happens at four years?** | Each part of the software becomes available under Apache-2.0 four years after it was first made public under these terms. Automatically, for everyone; forks never restart the clock. |
| **What if the steward organization disappears?** | After twelve months in which the Association recorded no Entitlement and no Donation Entitlement, with no designated successor (a project's Waiver keeps no clock running) — or earlier, on the day a published declaration of lapse names — the condition lapses and the licence becomes permissive. |
| **What do we keep if we stop paying?** | Every version published on or before the recorded end of the term. Permanently, with exactly two narrow exceptions — a credential recorded as void, and a refunded term (question 6). |
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
is no clause anywhere obliging anyone to pay anybody.

Two consequences for your analysis:

1. **No third-party-beneficiary question arises**, because nothing in the licence promises the
   steward organization anything.
2. **Non-compliance is a copyright matter, not a contract matter**, and the counterparties are
   the project's contributors — each of whom licensed their own part. Nobody can settle on
   their behalf unless they separately choose to authorize it.

Buying a credential is an ordinary bilateral contract with the steward organization — the
Purpose Source Association, "the Association" in the text: offer, price, invoice, VAT. It is
not a licence to the code, and it is not marketed as one. A credential counts from the day it
is recorded in the public registry; there is no cooling period and no renewal grace in the
licence — the 60-day cure is the only grace it knows.

## 3. What does the fee actually buy?

Precisely three things:

1. **A recorded credential** in a public registry, which satisfies the licence condition for
   your group — for the software the credential names, or for **every work under these
   terms** if you hold the network-wide Pass. Coverage attaches to the licence, not to
   registration: a Pass covers a project under these terms whether or not that project ever
   registered with the steward.
2. **Permanent vesting** of every covered version published on or before the recorded end of
   your term (question 6).
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

Each **part** of the software becomes available to everyone under **Apache License 2.0** four
years after the day that part was first made available to the public under these terms — a
public commit, tag, release or package, never a date an author typed into a file. Material
added later has its own clock. **Forking, copying, repackaging or re-releasing an existing
part never restarts its clock.** Automatically, with no action by anyone, and with no ability
of the steward, the project or any licensor to extend it for anything already public.

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
- the end of **twelve consecutive months** in which it recorded no Entitlement and no Donation
  Entitlement, with no publicly designated successor (a project's Waiver keeps no clock
  running — it is the project's record, not the steward's); or
- the day named in a signed, published **declaration of lapse**, which the steward's wind-down
  protocol is designed to issue on the day it stops selling. It cannot be withdrawn and the day
  cannot be moved later.

A successor is designated only by a signed, published record it has accepted in writing, and
a successor that records nothing for twelve months counts as none — a paper successor cannot
reset the clock.

Two honest caveats:

- You have to be able to determine the lapse without litigation. The draft's evidentiary
  handle is the registry's transparency log **and its published mirrors held outside the
  Association's control**; the Association's statutes bind it to name an archive custodian
  that keeps the registry, the log and the key set readable after it is gone. Whether that
  suffices, and what you may rely on if the log and a mirror disagree, is on the counsel
  agenda — unresolved.
- The Association exists on paper only: its founding assembly was held on 2026-09-16 and its
  commercial-register entry is pending. There is no credential to buy today and no coverage
  lookup to query.

## 6. If we stop paying, do we have to rip it out?

**No.** The rule is one line: **a version is vested if it was published on or before the end
of your credential's recorded term.** Everything vested stays usable permanently.

That means:

- At activation you vest the entire back catalogue of covered versions.
- During your term you vest everything published in it.
- If you do not renew, you keep all of that and simply stop vesting new releases.
- The same holds if the project leaves the registry, if a waiver is revoked, if the schedule
  changes, or if the Association fails. Revocation acts forwards, never on what you have
  deployed. Your term is the start date, end date and schedule version recorded at issue; a
  later schedule change never alters it.

**The only exceptions**, both in §9, both narrow:

1. a credential the registry records as **void** — obtained by fraud, forged, or issued through
   a compromised signing key — vests nothing;
2. a credential **cancelled for a refund** vests nothing for the refunded term.

**Two things §9 says are not exceptions:**

1. an honest under-certification of your revenue band is a **contract matter (a true-up)** —
   never a loss of vesting;
2. **patent litigation** (question 18) ends only your patent licence, never your vested
   versions.

Nothing else in the design can strip a version you already vested. This is deliberate: a
licence that can strand a production deployment is not procurable at any price.

**What vesting is not.** Vesting is permission for covered versions *from now on*. It is not
forgiveness for use before your credential was recorded. If the Association or the project's
steward of record offers amnesty covenants for past use, they do so in the Entitlement
agreement, bounded to the claims they hold — never through the licence.

## 7. Does it impose anything on our own software?

No. There is no copyleft, no share-alike, no network clause, and no disclosure duty of any
kind — not source, not architecture, not deployment, not customers. The condition attaches to
the licensed software and travels no further. Your modifications are yours, subject to keeping
the software's notices and to the condition continuing to be satisfied for the licensed parts.

The clause-level walkthrough is in [ANNOTATIONS.md](ANNOTATIONS.md); the licence itself
restates the absence list in one section (§10) so it can be checked in a minute.

## 8. Can we be audited? What do we have to report?

**No audit right exists in the licence, and the record forbids ever adding one.** You report
nothing, register nothing, and notify nobody. The threshold is self-assessed against your own
prior tax year.

If your group buys a credential, it certifies its own revenue band once, in the purchase flow
— under the purchase agreement, not the licence. What happens if that certification was
wrong is exactly what §9 says, and nothing more:

- an **honest under-certification** is an ordinary contract matter with a true-up remedy under
  the purchase agreement. It never costs you a vested version;
- a credential **obtained by fraud** is recorded as void and vests nothing — that is the one
  case in which a wrong certification reaches the licence, and it reaches it because the
  credential never validly existed.

There is no "bad faith" standard floating between those two; the registry records a
credential as void only for fraud, forgery or a compromised signing key. How a good-faith
reliance on a credential later recorded as void is treated is an open counsel question.

## 9. How is the threshold measured for a group like ours?

Both tests, together, across the whole group under common control — direct or indirect,
whether through ownership of substantially all assets or the power to direct management and
policies by vote, contract or otherwise (the PolyForm "control" definition, verbatim):

- fewer than **100 individuals** as employees plus independent contractors, counted together;
  **and**
- less than the **revenue limit** in total revenue in the prior tax year.

**The revenue limit** is USD 1,000,000 in 2026 dollars, indexed to US CPI-U the way PolyForm
Small Business indexes its threshold — but made deterministic: multiply USD 1,000,000 by the
latest calendar-year average of the index published when your tax year ended, divide by the
2026 calendar-year average, round to the nearest USD 1,000. The limit never falls below
USD 1,000,000; if the series is discontinued, the successor series applies, else the last
figure stands. Other currencies convert at the tax year's average exchange rate published by
the central bank that issues the currency. The Association will publish the current figure each year for convenience, but the calculation in
the text governs, so it does not depend on anyone publishing anything.

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
exemptions privately is a delisting offence for a project. A Waiver may be revoked going
forward; what you vested under it stays yours.

The reason is self-protective as well as ethical: private side deals would make the coverage
question unanswerable, and the registry's whole value is that one lookup answers it.

## 11. What about contributors — what do they sign?

**Contributors never assign copyright and never transfer economic ownership. Permanently.**
That is a constitutional commitment of the movement — it is in the Association's statutes —
not a current policy.

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

- **The licence:** working draft, pre-counsel. Not published. No version exists, so no
  conversion clock runs.
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
contractor or service provider. **The client is judged, not the contractor.** Incidental
benefit does not count, and neither does merely passing the software on. Applied:

**Covered — the Large Organization needs a credential:**

- its own use, on its own machines or in its own cloud account;
- its employees using the software in their work for it;
- a contractor, agency or managed-service provider that runs, integrates or builds with the
  software for the organization's project. The contractor may be three people; the client's
  group is what is measured;
- a non-profit's subsidiary that is a commercial company, or a non-profit's work for a
  commercial client — the exemption in §5 stops at the commercial party.

**Not covered — no credential is needed for that use:**

- being an ordinary customer of a general service that happens to run the software. If a
  large bank uses a small SaaS company's product and that product is built on the software,
  the SaaS company is the one exercising permissions — it is judged, not its customers;
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
  converts to Apache-2.0 at year four.
- **If you file patent litigation** (including a cross-claim or counterclaim) alleging that
  the software or a contribution in it infringes a patent or contributes to infringing one,
  every patent licence granted to you under these terms for that software ends on the day you
  file. Your copyright licences
  and your vested versions are untouched, and nothing else in the licence is affected.

Unlike PolyForm's trigger, a written claim short of litigation does nothing. Whether the
per-licensor grant reaches claims held by a contributor's employer is a counsel question.
