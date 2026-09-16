> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> marked inline as `[COUNSEL: …]`.

# Legal-review pack — the questions an OSPO actually asks

Written for the person who has to write an internal recommendation about an unfamiliar
licence, and who will be held responsible for it. Answers describe the **draft** in
[drafts/purpose-source-license-1.0-draft.md](drafts/purpose-source-license-1.0-draft.md).
Nothing here is legal advice and nothing here is final — the licence has not been drafted by
counsel and has never been published, so no clock has started and no project uses it.

Where an answer is uncomfortable, it is written that way on purpose. An OSPO discovers the
uncomfortable parts anyway, and discovering them from us costs the movement less than
discovering them from a critic.

---

## The short version

| | |
|---|---|
| **Is it open source?** | No. Field-of-use restriction. We do not claim the term. |
| **Does anything attach to our code?** | No. No copyleft, no share-alike, no network clause, no disclosure duty. |
| **Who pays?** | Organizations above the threshold (≥100 people **or** ≥USD 1M prior-year revenue, group-wide). Nobody else, ever. |
| **What triggers payment?** | Nothing in the licence: it contains no payment obligation. Use above the threshold without a recorded credential is simply unlicensed. |
| **Can we be audited?** | No. There is no audit clause and there never will be. |
| **What happens at four years?** | Each published version becomes available under Apache-2.0, automatically, for everyone. |
| **What if the steward organization disappears?** | After twelve months without credential issuance and no designated successor — or earlier, on the day a published declaration of lapse names — the condition lapses and the licence becomes permissive. |
| **What do we keep if we stop paying?** | Every version published on or before the end of the paid term. Permanently. |
| **Is there a copyright assignment for contributors?** | No — permanently, by design. Contributors keep their copyright. |
| **Scanner status?** | The identifier is not registered yet; the filing is a launch event. Expect "unknown licence" flags in the interim, and read the honest answer below. |

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
of four facts is true (below threshold; a recorded Entitlement; a recorded Waiver; a recorded
Donation Entitlement). If none is true, there is no permission — the use is unlicensed, in
the ordinary copyright sense. There is no clause anywhere obliging anyone to pay anybody.

Two consequences for your analysis:

1. **No third-party-beneficiary question arises**, because nothing in the licence promises the
   steward organization anything.
2. **Non-compliance is a copyright matter, not a contract matter**, and the counterparties are
   the project's contributors — each of whom licensed their own part. Nobody can settle on
   their behalf unless they separately choose to authorize it.

Buying a credential is an ordinary bilateral contract with the steward organization: offer,
price, invoice, VAT. It is not a licence to the code, and it is not marketed as one.

## 3. What does the fee actually buy?

Precisely three things:

1. **A recorded credential** in a public registry, which satisfies the licence condition for
   your group — for every project covered by the credential's lane.
2. **Permanent vesting** of every covered version published on or before the end of your paid
   term (see question 6).
3. **Amnesty covenants for past use** — automatically from the steward organization and from
   the project's steward of record.

And precisely what it does **not** buy, stated because overstating this is the failure mode:

- It is **not a warranty** that the covered code is free of third-party rights. The credential
  says the condition is satisfied; it says nothing about the rights chain in the code. Treat
  your usual provenance diligence as unchanged.
- It is **not a licence from the steward organization**. The steward holds no rights in the
  code and cannot grant any.
- The amnesty covenants **do not cover claims the steward does not hold**. Individual
  contributors' claims for past use can only be released by those contributors, through a
  separate opt-in mandate that does not exist yet. Any marketing implying total retroactive
  release would be false, and the record forbids it.
- It buys **no support, no SLA, and no indemnity** unless a project separately offers one.

## 4. What happens at year four?

Each **version** becomes available to everyone under **Apache License 2.0** on the fourth
anniversary of that version's publication. Automatically, with no action by anyone, and with
no ability of the steward or the project to extend it after publication.

For a review, the practical reading is: **the maximum exposure of adopting a dependency under
this licence is a four-year wait.** You can pin the last-converted version and consume it
under Apache-2.0 forever, with the same policy you already apply to Apache-2.0 code.

The conversion is in the licence text, not in a policy page, precisely so that this reading
does not depend on trusting anyone.

## 5. What if the steward organization ceases to exist?

The licence carries a backstop: if the steward ceases to exist, or ceases to issue
credentials for **twelve consecutive months** with no publicly designated successor, the
Purpose Condition **lapses** and the permissions apply without it — the licence degrades to
permissive, for everyone. The steward can bring that day forward by publishing a signed
**declaration of lapse** (§8(c), added 2026-09-16 under D46), which is what its published
wind-down protocol does on the day it stops selling; the declaration cannot be withdrawn.

Two honest caveats:

- The clause needs to be objectively determinable by you, without litigation, and the
  determination currently rests on the registry's own published record, which is under the
  lapsing party's control. That drafting problem is flagged in the draft, unresolved.
- The steward organization **does not exist yet**. There is no entity, no registry, and no
  credential to buy today.

## 6. If we stop paying, do we have to rip it out?

**No.** The rule is one line: **a version is vested if it was published on or before the end
of your term.** Everything vested stays usable permanently.

That means:

- At activation you vest the entire back catalogue of covered versions.
- During your term you vest everything published in it.
- If you do not renew, you keep all of that and simply stop vesting new releases.
- The same holds if the project leaves the registry, if a waiver is revoked, or if the steward
  organization fails. Revocation acts forwards, never on what you have deployed.

No event in the design can strip a version you already vested. This is deliberate: a licence
that can strand a production deployment is not procurable at any price.

## 7. Does it impose anything on our own software?

No. There is no copyleft, no share-alike, no network clause, and no disclosure duty of any
kind — not source, not architecture, not deployment, not customers. The condition attaches to
the licensed software and travels no further. Your modifications are yours, subject to keeping
the software's notices and to the condition continuing to be satisfied for the licensed parts.

The clause-level walkthrough is in [ANNOTATIONS.md](ANNOTATIONS.md); the licence itself
restates the absence list in one section so it can be checked in a minute.

## 8. Can we be audited? What do we have to report?

**No audit right exists in the licence, and the record forbids ever adding one.** You report
nothing, register nothing, and notify nobody. The threshold is self-assessed against your own
prior fiscal year.

If your group buys a credential, it certifies its own revenue band once, in the purchase flow
— under the purchase agreement, not the licence. Under-certification is drafted as an ordinary
contract matter with a true-up remedy, not as a licence termination event, except in cases of
bad faith.

## 9. How is the threshold measured for a group like ours?

Both tests, together, across the whole group under common control — direct or indirect,
whether through ownership, votes, contract, or otherwise:

- fewer than **100 individuals** as employees plus independent contractors, counted together;
  **and**
- less than **USD 1,000,000** total revenue in the prior tax year, in 2026 dollars indexed by
  US CPI-U, with other currencies converted at that year's average official rate.

So a small subsidiary of a large group is **not** below the threshold. That is intentional; the
alternative makes the threshold decorative.

Open in the draft: whether capital raised (a "raised more than USD 1M in five years" prong)
also counts as large. Recommended in the record, not decided.

## 10. Who can grant us an exemption, and can we negotiate one privately?

A **Waiver** may be recorded by the project's steward — whoever holds administrative control
of the canonical repository — through the registry, and it is **public and repo-scoped**.
There are no private exemptions in the design: a waiver that is not in the public registry
does not exist, and selling exemptions privately is a delisting offence for a project.

The reason is self-protective as well as ethical: private side deals would make the coverage
question unanswerable, and the registry's whole value is that one lookup answers it.

## 11. What about contributors — is there a CLA-style agreement?

**Contributors never assign copyright and never transfer economic ownership. Permanently.**
That is a constitutional commitment of the movement, not a current policy.

There is a contribution instrument, because there has to be one: a sign-off that (a) warrants
the right to submit, (b) acknowledges the steward roles the licence itself defines, and (c)
delegates forward to *materially consistent* later licence versions — bounded by a five-item
immutable core that a successor version may never change (threshold may only widen, conversion
delay may only shorten, charity destination and no-private-profit rule, registrar-never-licensor
character, and the existence of the waiver power).

The designed default is a one-line git trailer. Whether that carries sufficient contract
strength, or whether a minimal signed agreement is needed, is counsel's decision within those
fixed constraints — so the public promise is about copyright, never about ceremony. Draft:
[drafts/contributor-sign-off.md](drafts/contributor-sign-off.md).

## 12. How does this show up in our scanners?

Honestly: badly, at first.

- The identifier is **not registered with SPDX yet**. The request is filed at launch, with
  demonstrated adoption attached, and the site states the status truthfully as "requested"
  until a listing exists. Realistically, an identifier request takes a while, and until then
  your SCA tooling will flag "unknown licence".
- Submissions to the major scanner databases are made proactively at launch for the same
  reason.
- The bridge in the meantime is machine-readable: one canonical text per version whose bytes
  are published at a stable URL, a public registry with a coverage lookup, and signed
  credential records your policy engine can consume rather than a PDF someone has to read.

If your policy treats "unknown licence" as a hard block, this licence is blocked in your
environment until the identifier lands. That is a true statement about the current state and
there is no way to dress it up.

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
3. **Amnesty covenants on purchase** — bounded as in question 3.
4. **Opt-in contributor mandates** — for anything beyond the steward's own covenants.

Litigation is a decade-scale tail risk, not an operating tool, and the record forbids
marketing it as one. Nothing in any movement document creates a duty on the steward to pursue
infringers.

## 15. What is the status of everything on this page?

- **The licence:** working draft, pre-counsel. Not published. No version exists, so no
  conversion clock runs.
- **The steward organization:** not formed.
- **The registry, credentials, and coverage lookup:** not built.
- **Counsel:** not engaged. Three jurisdiction memos (US, CH, DE) on the condition
  architecture are prerequisites for publication, and none exists.
- **This page:** an argument about a draft, published so that the argument can be attacked
  early. If you can break it, please do — [how to comment](README.md#how-to-comment).
