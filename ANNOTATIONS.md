> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> collected as a `[COUNSEL: …]` question in the draft's counsel agenda.

# Annotated walkthrough — what the draft says, and why

**These annotations are not part of the licence and never will be.** They explain a draft.
Where an annotation and the draft disagree, the annotation is wrong. Where the draft and a
recorded decision disagree, the draft is defective — the decisions are in
[decisions/](decisions/).

Read alongside [drafts/purpose-source-license-1.0-draft.md](drafts/purpose-source-license-1.0-draft.md),
revision `1.0-draft.4` of 2026-09-16. Revision `1.0-draft.2` moved every "why" paragraph out
of the licence body and into this file, so the body carries only operative text, the banner
and the placeholder tokens. Revision `1.0-draft.3` applied the
operator's evening decisions on the 16 September review proposal — sixteen adoptions, A1 to
A16, and eight rejections, R1 to R8, recorded as D49. Revision `1.0-draft.4` applied the
operator's late decisions of the same day on the comparison review that followed — ten
adoptions into the licence, B1 to B10 (an eleventh, B11, corrected the contributor sign-off),
and seven rejections, R1 to R7, recorded as D50 — and, in a second pass the same night, the
operator's decisions on the reviewer's third note: six more adoptions, C1 to C6, recorded as
D50 items 13 to 18, and the move of every counsel marker out of the body into the draft's
own §15 agenda (D50 item 19). Each adoption is
explained below under its clause, with its letter; where a rejection is cited, the record it
belongs to (D49 or D50) is named, because both records count their rejections from R1. If you
are looking for the reasoning behind a clause, it is here, under the clause's own number.

---

## Part 0 — What the draft is, and is not

**What it is.** A structural draft that turns the movement's recorded decisions into clauses,
so that counsel receives a specification with the architecture already settled and the open
questions already isolated. It is the input to a drafting engagement, not its output. The
decisions it implements are traced in [decisions/](decisions/); the operator decisions of
16 September 2026 (recorded in the movement's register as D48) are what changed between
`1.0-draft.1` and `1.0-draft.2`; the operator's decisions of the same evening on the
16 September review proposal (D49) are what changed between `1.0-draft.2` and `1.0-draft.3`;
and the operator's late decisions of the same day on the comparison review — a second
review, written against `1.0-draft.2`, with a revised proposal of its own (D50) — are what
changed between `1.0-draft.3` and `1.0-draft.4`; the reviewer's third note, ruled on late the
same night (D50 items 13 to 18, C1 to C6), is the second pass on `1.0-draft.4`. Both
proposals, and their notes, sit outside this repository; where the draft borrows their plain
wording, [LICENSE-NOTICE.md](LICENSE-NOTICE.md) §4 attributes it.

**Where the counsel questions are.** Since the second pass on `1.0-draft.4` the licence body
(§1–§14) carries no inline `[COUNSEL: …]` marker: every question is in §15, the draft's own
counsel agenda, as a table with one row per question — the section, our position as drafted,
and what counsel confirms — and the honesty gate (`npm run lint:drafts`) counts the markers
there, because it counts them anywhere in the draft file. The operator asked why the licence
carried so many markers between its clauses; the answer is that every operator decision the
markers once asked for has now been taken, so what is left is legal *confirmation* — will the
chosen mechanism hold in US, CH and DE courts — which belongs in one list, not between the
clauses. Where this file says "the §N marker" or "agenda row N", it means the §15 row for
that section (the rows run §2, §3, §4, §4, §5, §6, §7, §8, §9, §11, §12, §13, §14, whole
text, so row 8 is the §8 row).

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

**The word count.** The style rule for `1.0-draft.3` asked for a body (§1–§14, markers
excluded) at or under 2,000 words, and that draft ended at about 2,330: what was left was
definitions other sections use, decided protections and the adopted sentences themselves,
none of which the operator allowed to be cut. For `1.0-draft.4` the operator set the bound at
2,350 and asked for §2 and §8 to be tightened rather than for anything decided to go. The
first pass ended at 2,348 words (headings included; markers, rules and fences excluded), with
ten adopted sentences in and no decided element or defined term dropped. The second pass
added C1 to C6 — about seventy words — and took every meaning-preserving cut the drafter could
find, which left 2,381, 31 above the bound (moving the markers out of the body shrank
nothing, because they were never counted). Its verification pass took three more that drop
no decided element — the §9 "once vested" example list (the events it named are explained
under §9 below and in the FAQ), §7's "no project, no licensor, not the Association" aside,
and "copying" and "re-releasing" in §7's restart sentence — and the body ends at 2,350
words, at the bound; the draft's revision log states the figure and the method.

---

## Part 1 — The three fears, answered by construction

Every corporate review of an unfamiliar licence starts with the same three fears. They are
worth naming because a licence that fails any one of them is unadoptable regardless of what
else it says.

### The absence list, in full

Until `1.0-draft.2`, §10 of the licence carried this list. `1.0-draft.3` cut §10 to one
sentence — "These terms require nothing of your own software, no disclosure, no network duty,
no share-alike, no audit and no report." — so that the body stays short and every
cross-reference to §10 survives. The five lines live here now, in full, and the README
carries them in substance:

1. **Nothing on your own software**: §4 attaches to this software only.
2. **No disclosure** of source, architecture, deployment, customers or documents.
3. **No network clause** and no source-offer duty.
4. **No share-alike**: your modifications are yours, on any terms, subject only to §4 and §11.
5. **No audit and no reporting** (§5): you file, register and notify nothing.

The list adds nothing to the licence. Each line is a property of the drafting in §3, §4, §5
and §11, restated because "read the whole text and notice what is missing" is not a review
method anyone uses.

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

**Where to check:** §10's one sentence, item 1 of the list above, and the absence of any
"derivative work" or "combined work" obligation anywhere in §3 or §4.

### Fear 2 — "Will we have to disclose our source, our stack, or our customers?"

**No.** There is no disclosure obligation of any kind in the draft — not of source code, not
of architecture, not of deployment topology, not of customer names, not of usage volumes.

There is also **no audit right** (§5): nobody may demand your books, your headcount or any
certification under the licence. The threshold is self-assessed. Where an organization buys a
credential, it certifies its own revenue band once, in that purchase — under a separate
agreement, outside the licence. That was a deliberate choice: audit clauses are a categorical
procurement veto, and the record rules them out permanently (D8; LEG-020).

**Where to check:** §5 (the "nobody may audit you" paragraph), §10, and items 2 and 5 of the
list above.

### Fear 3 — "Is there a network clause? Will offering a service trigger something?"

**No.** Running the software as a service, exposing its functionality over a network, or
letting your customers interact with it remotely triggers nothing in the draft. There is no
source-offer duty, no "if you modify and deploy" clause, and no share-alike.

The condition in §4 is about **who benefits from the use**, not about **how the software is
deployed**. A large organization needs a credential whether the software runs on a laptop or
behind a load balancer; a small one — or a non-profit, a public school or a public body of any
size — needs nothing in either case. And a general service you run for many customers is your
own use, judged by your own size, not by your customers' (§4, A4).

**Where to check:** §10, and items 3 and 4 of the list above.

### What the draft *does* restrict — stated as plainly as the reassurances

One thing, and it is a real restriction: **production use for the benefit of an organization
above the threshold, without a recorded credential, is outside the grant.** That is a
restriction on a field of use, and it is exactly why these terms are not an open source
licence under the Open Source Definition, and why the movement says so rather than arguing
about definitions. Evaluation, security review and contributing are outside the restriction
(§4, A3). It comes with one more rule a patent holder should read: filing patent litigation
over the software — by you or by any member of your group — ends your group's patent licences
to it (§3, B8), and nothing else.

---

## Part 2 — Clause by clause

Each section below has two halves: what the clause says, in plain words, and why it says it —
the commentary that used to sit inside the licence text. Where a sentence arrived with
`1.0-draft.3`, its adoption letter (A1 to A16) is given so the D49 record can be traced; where
it arrived with `1.0-draft.4`, its letter is B1 to B10 and the record is D50.

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
permissive grant, which is what permits the verbatim reuse. The September review proposal
paraphrased "control" in plain language; the operator kept the verbatim definition (R3),
because a definition copied from a licence that procurement teams already know is one they
do not have to re-read.

Earlier drafts said "your organization". The draft now says "an organization's group" so that
the rule works for the contractor case in §4: when a contractor uses the software in work for
a client, the *client's* group is measured, not the contractor's.

**"Made available to the public", and "version".** Defined once, in two short sentences,
because §7's conversion clock and §9's vesting both hang on a date: a part is made available
to the public on the first day anyone can obtain it under these terms — a public commit, tag,
release or package — and never on a date an author wrote into a file. A date that anyone can
set is not a date anyone can rely on. A version is a release the project identifies as such.
Since `1.0-draft.4` only one sentence uses that defined term: §7's release-level bound (A12),
which lets a reader take one date off a release ("schedule version" in the credential-term
definition is registry vocabulary, not the defined term, and §12 says "as the Association
published it" rather than "at a version"). §9's vesting rule no longer counts versions at all
— it vests *parts*, on the same "made available to the public" day that §7 already used
(B1), so a project that never tags a release still vests what it publishes. The bold defined
term "published", which only §7 used, went with it; §7 now says "first made available to the
public" in full. `1.0-draft.3` merged the two definitions to save words; `1.0-draft.4` cut
the version definition to what §7 needs.

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

The successor limb — "or its successor publicly designated under §8" — is D46's:
without it, a designated successor could have stopped the lapse in §8 while being unable to
issue anything, because §2 named one legal person for every copy of the text.

**The Steward Registry.** The public record, its transparency log, and that log's published
mirrors held outside the Association's control. The mirrors are named here because §8's lapse
has to be provable when the Association is the party lapsing; the statutes provide for an
archive custodian who keeps the registry, the log and the key set readable after the
Association is gone (Art. 9 para. 4, Art. 23 para. 5). Anyone may read the registry without an
account (statutes Art. 9 para. 1; the body no longer says so itself). **A credential counts
from the day it is recorded**: an Entitlement or Donation
Entitlement gives permission and vests from that day; a Waiver gives permission from that day
and vests after 72 hours (§9, A8). There is no renewal grace anywhere in the licence — the
60-day cure of §6 is the only grace it knows (D48 item B). The machine lookup must agree with
the licence, not the other way round: the spec's coverage function `cov-v1` already carries
the 72-hour Waiver rule, so licence and lookup now match on that point, and its 30-day renewal
grace still has to follow the licence's 60 days; [decisions/README.md](decisions/README.md)
names the dependency.

**Entitlement and Donation Entitlement.** An Entitlement is a credential the Association
records under a separate agreement that these terms neither create nor price. A Donation
Entitlement is recorded when an organization donates the schedule amount directly to a listed
charity; the money never passes through the Association (D18; LEG-012). Either **covers
software by name, or because it covers every work licensed under these terms**. That second
limb (D48 item 5) matters more than it looks: coverage attaches to the *licence*, not to
*registration*. A Large Organization must always be able to obtain coverage for any software
under these terms, whether or not the project ever registered — the network-wide Pass covers
every work under these terms, registered or not. This amends the commercial decision D42,
whose Pass covered "every registered repository"; the coverage lookup, which today treats an
unregistered repository as an error, has to follow. The lane names themselves — Pass, Project,
Portfolio — stay out of the licence (R4; D11): lanes and prices live in the schedule, and the
licence says only "the software it names, or every work under these terms if it says so".

**The bound on what the Association may issue (A2, widened by B10).** One sentence: both
credentials are issued only under the Association's published schedule, on the same terms
for everyone, for at most one year at a time, and within its published constitutional
commitments on the charitable destination of funds and no private profit. The statutes
already say this — Art. 11 allows one published schedule and no private price, discount or
side term, D12 makes every entitlement annual, and Art. 13 carries the charitable-destination
and no-private-profit commitments — but a licensee reading only the licence could not see it,
and the review found the gap: a "century-long token Pass" for one favoured buyer would have
vested everything for ever with nothing in the text to forbid it. The sentence closes the gap
without inventing an exceptions procedure, which Art. 11 forbids. It is written for both the
Entitlement and the Donation Entitlement because the gap is the same for both.

The constitutional half of the sentence is `1.0-draft.4`'s (B10). Draft.3 bound only a
*successor* to the charitable-destination and no-private-profit commitments (A14, in §8); the
comparison review pointed out that the Association itself was bound by nothing in the text —
its statutes bind it, but a licensor reading the licence could not see that, and a licence
that binds the successor harder than the principal reads oddly. So the commitments now sit
here, on the Association, in §2, and §8's successor bound points to "the commitments in §2"
instead of restating them, which is how the text says it once. The sentence binds the
issuer, not the buyer: §9 intends that a credential issued in breach of it is still the
holder's, and the §8 marker asks counsel whether the bound is enforceable by a licensee or a
licensor, and what a breach does to such a credential (agenda row 8).

**No stacked years (C6).** The second pass closes the sentence with the one-year bound and
adds the rule that makes it bite: "…and for at most one year at a time; a renewal is recorded
when its term starts, never in advance." Without it, "one year at a time" could be met by
recording ten consecutive one-year terms on the same day — a century-long Pass in ten pieces.
Now a renewal exists in the registry only from the day its term begins, so the longest
recorded coverage at any moment is one year, and a buyer who wants the next year buys it when
this one ends. The registry's issuance rules must record renewals that way;
[decisions/README.md](decisions/README.md) carries the note.

**Waiver.** A record the Project Steward makes, excusing a named organization from §4 for that
software. Public, in the registry, gratis — private exemptions do not exist in the design
(D14 as amended). Its permission is immediate; its permanence waits 72 hours (§9, A8).

**A credential's term.** What the registry records: for an Entitlement or Donation
Entitlement, the start date, the end date and the schedule version at issue — and **a later
schedule change never alters an existing credential's term** (D48 item 11, replacing the old
"when the paid period ends"); for a Waiver, until it is recorded as revoked or expired. A
credential is current on every day of its term. This makes §9's vesting rule a matter of two
recorded dates, not of anyone's interpretation.

**The Project Steward.** Whoever holds administrative control of the canonical repository, or
whoever they designate through the registry's verified claim process — "nowhere else", as
the definition now ends. A designation made in a repository file, an issue or an email has no
effect, for the reason given under §1 (D23 as amended; LEG-039). `1.0-draft.3` folded the
former stand-alone sentence ("a designation made anywhere else has no effect") into the
definition; the rule is unchanged.

### §3 Grants — per licensor, irrevocable, with an Apache-shaped patent licence

**Why "each licensor grants" and not "the Licensor grants".** Every contributor to the
software licenses their own part on these terms, so the condition in §4 travels with every
contribution without anyone assigning copyright to anyone. **No contributor is ever asked to
assign copyright or transfer economic ownership of their work — not now and not in any later
version of these terms** (D7 as amended; LEG-036). The permanent promise is stated in the
contributor sign-off's §0 ([drafts/contributor-sign-off.md](drafts/contributor-sign-off.md)),
and the licence body keeps only the operative sentences: nobody grants on anyone else's
behalf, and "Contributors keep their copyright." (The second pass on `1.0-draft.4` cut the
tail "nothing here assigns it" as a cut toward the word bound: keeping one's copyright already
says that nothing assigns it.)

Two consequences a reviewer should see:

- **For contributors:** nobody needs to assign copyright for the mechanism to work, so nobody
  is ever asked to. The usual reason a commercial asymmetric licence needs a copyright
  assignment — the vendor sells private exceptions to other people's code — does not arise,
  because no private exception is ever sold and the credential mechanic is in the grant
  itself.
- **For an organization using the software outside the grant:** the exposure is to every
  contributor whose copyright is in the code, not to one company that might be persuaded to
  look away.

**"Irrevocable except as these terms say" (A1).** The Apache tradition, in
the proposal's wording. A maintainer used to Apache-2.0 looks for the word "irrevocable" and,
not finding it, wonders whether a licensor could withdraw the grant at will. Now the text
answers: no. The exceptions "these terms say" are the ones you can read — the §4 condition
(which scopes the permission rather than revoking it), the end of the 60 days in §6, the
patent defence below, and the notice condition in §11. Nothing else lets anyone take a grant
back.

**Inbound equals outbound (A16).** "Unless the contributor clearly says otherwise, a
contribution intentionally submitted to the project is offered under these terms." That is
Apache-2.0 §5's default, and it does for a project what it does under Apache: a drive-by pull
request is under the licence without a ceremony, unless its author says otherwise. It does
**not** replace the contributor sign-off, and the operator was explicit that the sign-off is
not weakened: the sign-off warrants the right to submit and delegates forward to materially
consistent later versions inside the immutable core, which the licence sentence does not and
cannot do. The sentence gives the project the present licence; the sign-off gives it the
future.

**The patent licence** follows Apache-2.0 §3 in scope: the claims a licensor can license that
are necessarily infringed by their contribution alone or in combination with the software
they contributed it to, for making, having made, using, offering to sell, selling, importing
and otherwise transferring the software. The alignment is deliberate — when a part converts to
Apache-2.0 under §7, the patent position should not move.

**The patent defence** (D48 item 6) is Apache's trigger, not PolyForm's: your patent licences
for the software end on the day you *file* patent litigation (including a cross-claim or
counterclaim) alleging that the software or a contribution in it infringes a patent or
contributes to infringing one. A written claim that stops short of litigation does not
trigger it. Your copyright licences and your vested parts are untouched — the defence
reaches patents and nothing else. §3 says so itself; §9 no longer repeats it (the second pass
cut the duplicate sentence), so the one place to read what patent litigation does to vested
parts is here.

**The trigger reaches your group (B8).** Since `1.0-draft.4` the sentence reads "if you or a
member of your group files patent litigation … every patent licence you or your group hold
under these terms for that software ends that day". The comparison review named the
workaround the Apache wording leaves open: a group keeps its patent licences in the operating
company and files the suit from an affiliate that never touched the software. The group
definition in §2 already exists for the threshold, so the defence borrows it at no cost in
words. The review was careful to call this an extension of Apache's trigger, not an exact
equivalent, and the §3 marker carries the two questions it raises: whether a group-wide
trigger is determinable and enforceable against an affiliate that took no licence here, and
what litigation *before* a part converts does to the deferred Apache patent grant in §7
(agenda row 2).

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

**Evaluation, security review and contribution need no coverage (A3).** New in
`1.0-draft.3`, in the BSL tradition, in the operator's wording from the review debate, and
written as a widening of the grant so that it sits inside §4's own rule: "The permissions in
§3 also apply, with no credential, to non-production evaluation, security review, and
preparing and submitting contributions to the project; not to production use or offering the
software's functionality to others." (The first form, "No coverage is needed for …", stood
outside §4's "apply only while" sentence, so on its words an evaluating Large Organization
had no permission; the verification pass reframed it, keeping the adopted words.) Three
reasons. A large organization cannot decide whether
to buy coverage without trying the software; a security team should never need a credential
to look for a vulnerability; and a project wants patches from everyone, including from
engineers whose employer is far above the threshold. The exception only widens the free use,
so it is consistent with the immutable core (the threshold may only ever widen). The second
half is the fence: a staged rollout, a pilot with real users or an internal tool in daily use
is production, not evaluation, and the §4 counsel marker asks counsel to confirm that the
words are determinable enough to keep them out.

**Evaluation never starts the cure clock (C1).** The exception is a permission in its own
right, so it must not consume the 60 days that §6 gives an organization that has to buy a
credential. On draft.4's first-pass words it could have: §6's trigger (e), "the first day of
such use", read together with an evaluation that needed no credential, could be argued to
start the clock on the first day of the evaluation. The second pass fixes this in §6 itself
— its opening now runs only "when your use needs coverage", and it adds "Days of use the
evaluation and contribution rule in §4 permits do not count." Worked through: a Large
Organization evaluates for two months, then goes to production on day 61 with no credential.
The two months were permitted use and cost nothing; the 60 cure days start on day 61, the
first day of production, and end on day 120. Under the first-pass words the same organization
could have been told its 60 days ran out on day 60, before it had used the software in
production at all. The coverage lookup must treat evaluation use as permitted, not as
uncovered use with a clock; [decisions/README.md](decisions/README.md) carries the note.

**"For the benefit of", defined by cases (D48 item A, sharpened by A4).** The draft gives the
rule and then the outcomes: you exercise permissions for the benefit of an organization when
you use the software as that organization, or in work you do for it as its employee,
contractor or service provider. Then the three rules the review asked for, so that nobody
has to infer them: "A client's coverage, or its meeting the threshold, also covers work
others do solely for it. A general service for many customers is your own use; a dedicated
deployment for one customer is work for that customer." Incidental benefit does not count,
nor does merely passing the software on. And a plain reassurance, borrowed from the proposal:
"Personal use, unrelated to such work, needs no coverage." The old phrase "the client is
judged, not the contractor" is gone from the body because the outcomes now say it. In
practice:

- *Covered:* a Large Organization's own use; its employees using the software in their work;
  a contractor, agency or managed-service provider running or building with the software
  solely for a Large Organization's project (the client's group is measured, and the client's
  credential or exemption covers that work); a deployment dedicated to one customer (that
  customer's use).
- *Not covered:* being an ordinary customer of a general service that happens to run the
  software (the service is the operator's own use, judged by the operator's size); a package
  mirror, registry or distributor passing the software on; an employee's personal or hobby
  project; a research collaboration where the Large Organization is not the one using the
  software; any benefit that is merely incidental.

The worked cases are in [FAQ-OSPO.md](FAQ-OSPO.md) questions 16 and 20.

**"These terms oblige nobody to pay; §6 is their only grace."** One sentence, put in so that
no reader — human or machine — invents another. A credential takes effect when recorded; a
Waiver's revocation takes effect when recorded; there is no renewal grace in the licence. The
one timing rule that is not a grace is §9's 72-hour Waiver rule (A8): it delays permanence,
not permission. What the licence does give is the 60-day cure of §6, and a public lookup must
be able to say "no current credential, but these parts are permanently covered" (D48
item B).

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
individual contractors together) **and** less than the revenue limit in the latest completed
tax year's revenue, across the whole group. Both, because either alone leaks: revenue alone
waves through a very large pre-revenue company; headcount alone waves through a small,
extremely profitable one (D8; LEG-017, LEG-019).

**The counting rules (A5).** Draft.2 left "how do we count" to counsel. Draft.3 writes the
operator's defaults into the text, in the review proposal's plain wording, and the counsel
marker shrinks to confirming them:

- **headcount** is the average month-end number of employees and individual contractors with
  ongoing engagements, each counted once, part-time included — an average, so a seasonal peak
  does not tip you over; month-end, so it is a number your payroll already has; "ongoing
  engagements", so a one-off freelancer does not count, and whether agency staff count is the
  question the marker sends to counsel;
- **revenue** is measured for each group member's latest completed tax year, excluding
  transactions within the group, so a holding structure does not count the same sale twice;
- **investment raised is not revenue** — the investment prong is out (D48 item 3, below), and
  this sentence stops it coming back through the side door;
- an organization **without a completed tax year** uses its current headcount and its revenue
  since formation, annualized — a start-up can self-assess on day one;
- **reasonable provisional figures may be used until reliable ones exist** (B4, from the
  comparison review) — a group whose books close late, or whose members report on different
  calendars, can self-assess on the numbers it has and correct them when the audited ones
  arrive; §6's trigger (d) says what happens if the correction shows you were over: 60 days
  from the day you knew or should reasonably have known, not from a day the auditors chose;
- **group changes count when they occur** — the day a company is bought it is measured with
  its buyer (and §6(b) gives it 60 days);
- other currencies **convert at a published central-bank or IMF average rate for the period,
  chosen consistently** — pick one source and stay with it.

Whether these are determinable by a filer in the US, CH, DE and the main adopter jurisdictions
— agency staff, group members with different year-ends, what counts as a "reasonable
provisional figure" — is what the §5 marker now asks (agenda row 5).

**The revenue limit and its indexing (D48 item 2, reformulated by A6).** USD rather than CHF,
because procurement's working language is USD. Indexed, because a fixed nominal threshold
silently narrows every year — which the immutable core forbids anyone to do deliberately.
PolyForm Small Business itself indexes its USD 1,000,000 to CPI-U; draft.2 kept the series and
made it deterministic with a calendar-year average. Draft.3 replaces that mechanic with the
review proposal's simpler formula, because the proposal's is known before the year starts and
draft.2's was not:

1. the series is named by its BLS code, CUUR0000SA0 (the CPI-U, U.S. city average, all items,
   not seasonally adjusted);
2. the limit is USD 1,000,000 for 2026; for each later calendar year it is USD 1,000,000
   multiplied by the **preceding June's** value of the series divided by its **June 2026**
   value — June to June, so every year's limit is known by mid-July of the year before;
3. rounded to the **nearest USD 1,000** — the proposal rounded up to whole dollars, and the
   operator preferred a limit a person can remember (R7);
4. the limit **never falls below the previous year's** — monotone non-decreasing, so the
   threshold can only widen, as the immutable core requires;
5. if a value is unavailable, the previous year's limit stands; an officially linked
   successor series replaces a discontinued one;
6. the limit for a tax year is the one for the calendar year in which that tax year ended.

The Association publishes each year's limit *for information*; the calculation in the text
governs, so the figure never depends on the Association being there to publish it. Whether
the formula is unambiguous is on the §5 marker (agenda row 5).

**Non-profits, education and public bodies (D48 item 1).** A non-profit or public-benefit
body under the law it is organized under, a public educational institution, or a public body
performing public functions meets the threshold whatever its size. The README and FAQ have
promised "free for non-profits" from the start; the text now says it. Two edges are drawn so
the limb cannot be gamed: a commercial organization such a body controls does not inherit
the exemption, and work done for a commercial client is judged by that client under §4. The
review proposal scoped the exemption to the body's non-profit *activities*; the operator kept
the entity-based limb because a body can tell what it *is* more easily than it can classify
each activity, and the two exclusions already catch the cases the activity test was for (R5).
Whether "non-profit or public-benefit body under the law it is organized under" is
determinable by a licensee in the main adopter jurisdictions is a counsel question (agenda
row 5).

**The investment prong is out (D48 item 3).** Earlier drafts carried a marker asking whether
an organization that had raised more than USD 1,000,000 in five years should count as large
regardless of revenue and headcount (the pattern some source-available licences use). The
record recommended it; the operator decided against it. No "capital raised" test appears
anywhere in the text, and A5's "investment raised is not revenue" makes the absence explicit.
Could a later version add one? Accurately: adding a prong would *narrow* the threshold, and
the immutable core (sign-off §2.3 item 1; statutes Art. 13) allows a later version applied to
**existing contributions through the sign-off's delegation** to widen the threshold only. So
a narrowing could reach existing contributions only with each contributor's fresh consent, or
reach future contributions only. That is the honest statement — not "never", but "not for
what is already contributed, without asking".

**Self-assessment, no audit, no prices.** You assess the threshold yourself. **Nobody may
audit you under these terms** — no licensor and not the Association may demand your books,
your headcount or any certification (D8; LEG-020). Where a credential is bought, the buyer
certifies its own revenue band once, in that purchase, outside these terms; the licence no
longer says so itself, because it is a fact about the purchase flow, not a rule of the
licence. **No prices, tiers or bands appear in the licence, ever**: the licence is binary —
above the threshold or below it — and everything else lives in the schedule the Association
publishes (D8, D11; LEG-022). The body used to say "these terms contain no prices, tiers or
bands" in §5; the verification pass cut that sentence as descriptive — the absence is a fact
about the text, and this file and the FAQ state it.

### §6 Cure — 60 days, from five defined days, at most 60 in any twelve months

**Why a cure window at all.** Growing past the threshold is a normal event, and an
organization that crosses it on a Tuesday should not become an infringer on the Wednesday.
60 days is the same order as the comparable clauses in this licence family (D8; LEG-014).

**The five triggers (D48 item 12, plus B4).** Earlier drafts said "the first day the
condition was not satisfied" and left counsel to work out when that is for a test measured on
the *latest completed* tax year — a failure discoverable only after the year closes. The
draft names the day the 60 days run from. Its opening sentence is C1's: "When your use needs
coverage and none of (a) to (d) in §4 is true, the permissions in §3 still continue for
60 days from:" — the words "your use needs coverage" keep permitted evaluation, security
review and contribution (§4) out of the cure altogether, and the section's closing sentence
— "Days of use the evaluation and contribution rule in §4 permits do not count." — says the
same from the other side. The rule and its example are explained under §4 above.

- **(a)** you grew past the threshold — from the end of the tax year in which you first
  exceeded it;
- **(b)** a change of control — an acquisition, a merger — made you a Large Organization:
  from that day (the body now says "the day a change of control made an organization a Large
  Organization", the D48 item 12 wording, instead of listing the kinds of transaction);
- **(c)** a credential's term ended, or a Waiver was recorded as revoked — from that day;
- **(d)** reliable figures later show that the threshold was exceeded — from the day you knew
  or should reasonably have known (B4: the partner of §5's provisional-figures sentence; an
  organization that assessed honestly on the numbers it had is not made an infringer on the
  day the auditors finish);
- **(e)** anything else — from the first day the software was used while no limb of §4 was
  true.

The new day is (d), not (e), so that "otherwise" stays last, where a residual limb belongs.
Where a year-end figure and a later-discovered one both fit — (a) and (d) — the text says
which controls: (d), "even if (a) gives an earlier day", so the 60 days cannot have run out
before the organization could know. The §6 marker asks counsel to confirm that use before the
day in (d), made on reasonable provisional figures, is covered by the continuation this
section intends, and that (d) should control where (a) also fits.

**The transitions.** If a limb becomes true again inside the 60 days — a credential is
recorded, a Waiver is granted, the group shrinks — permissions continue uninterrupted. If none
does, they end after the 60th day. They **resume** the moment a limb becomes true again, for
use from then on, and the window applies afresh to any later failure.

**The rolling cap, and no vesting during cure days (A7).** Two sentences the review asked
for and the operator adopted. "At most 60 such days in any twelve months" stops the obvious
game: let a credential lapse, use for 59 days, buy a month, lapse again — or toggle a Waiver
on and off — and turn the cure into indefinite free coverage. "These days alone vest
nothing; a later credential may cover that code under §9" says what the cure is: continuity
for what you already run, not a free credential (draft.3 said "versions published during
these days do not vest"; B1 changed the unit to parts, and the second pass reworded the
sentence, C2, without changing the first half of the rule). **Vested parts need no cure**:
what §9 vested is not affected by any of this. Whether the five days and the count of "such
days" across overlapping failures are determinable without litigation, and how (b) applies to
a target whose group changed mid-year, stays with counsel (agenda row 6).

**Grace alone vests nothing, but does not block later vesting (C2).** The reviewer's third
note read the first-pass sentence — "Parts made public during these days do not vest under
§9" — as permanent: a part published during your cure days could *never* vest, even under a
credential you bought the next week, because the sentence attached the no-vesting to the
part rather than to the days. That was never the intent. The second pass says it the other
way round: the days themselves vest nothing, and a later credential may cover that code. The
example: a project publishes a release on day 20 of your cure; on day 45 your credential is
recorded. The release was public on or before the end of that credential's term, so it vests
under §9 like everything else in scope — the cure days did not vest it, and they did not
stop it vesting either.

**Outage days do not count (B7).** One sentence, new in `1.0-draft.4` and shortened in its
second pass: "Days its transparency log records as a general outage of the Association's
issuance service do not count toward either 60" — neither the 60 days of continuation nor the
60-day cap. The
60-day cure is the only permission a new Large Organization has
while it buys its credential, and the rolling cap makes those days scarce; an organization
should not spend them on the Association's own downtime. The rule is the minimal form of what
the comparison review asked for — it pauses a clock, it grants nothing, it vests nothing, and
it needs no "documented attempt" test because the log either records a general outage or it
does not. What the review also asked for, a separate outage *permission*, was rejected a
second time (D50 R4; next). The §6 marker asks how an outage day is proved from the
transparency log when the log was itself part of what was down (agenda row 6).

**What was not added: a separate outage permission (D49 R2, D50 R4).** Both reviews proposed
a distinct rule for a new user who cannot get a credential because issuance is down — the
second with a documented-attempt test and 30 days after recovery. The operator rejected it
both times as redundant: limb (e) already gives 60 days from the first day of use while no
limb is true, which is exactly the continuity a new user needs during an outage, and B7 now
stops an outage from eating those days. The proposals needed an outage rule only because
their own text forbade first-use grace.

### §7 Conversion — Apache-2.0 at four years, per part, with a release-level bound

**What it says (D48 item 4, redrafted as a present grant by B2).** Each licensor grants you,
*now*, the copyright and patent permissions of Apache-2.0 for each part of the software,
effective four years after the day that part was first made available to the public under
these terms, in any form. Nothing more is needed on that day, and §4 no longer restricts that
part. Each part has its own clock; material added later starts its own when first made
public. Forking or repackaging an existing part — copying it, re-releasing it — never
restarts its clock. Nobody can extend the clock of anything already public: no project, no
licensor, not the Association (the clause named them until the verification pass on the
second pass cut the aside toward the word bound; "nobody" already means them).

**Why a grant now, and not "becomes available" (B2).** Draft.3's §7 said each part "becomes
available under Apache-2.0" at four years, and its own marker asked counsel to redraft that
as a present grant with a deferred effective date. The comparison review said the obvious
thing: if that is the mechanism wanted, write it into the operative words instead of leaving
it as drafting instructions. So `1.0-draft.4` does. The difference is who has to do what on
the fourth anniversary: under "becomes available", a reader could argue that some act of
conversion was still owed by a licensor who by then may have sold the copyright, dissolved,
or died; under "grants you, now, … effective four years after", the grant already exists on
day one and only its effective date is in the future, so a successor in title and an estate
take the copyright with the grant already attached, and the Association's dissolution cannot
touch it. The marker shrinks to confirmation — that the form survives those events, binds a
successor in title and an estate, and leaves no part's conversion undoable (agenda row 7).

**Why per part and not per named release.** Earlier drafts attached the clock to "each
published version". That invited two games: re-releasing old code under a new version number
to restart the clock, and arguing about which "version" a line of code belongs to after a
fork. Attaching the clock to each part, from its first *verifiable* public availability (a
public commit, tag, release or package — never an author's own timestamp), closes both. The
practical reading for an adopter is unchanged: "pin what you have and wait" is still the
worst case, and old code converts on schedule whatever anyone does with it later. Draft.3
fixed this for conversion only; §9 still vested "versions", and the comparison review found
the gap. `1.0-draft.4` gives §9 the same unit (B1, explained under §9).

**The release-level bound (A12).** Per-part clocks are exact, but nobody wants to compute a
date for every line. Draft.3 adds the outer bound the review asked for, which draft.4 keeps
in shorter words: "Every part in a version converts no later than four years after that
version was first made available to the public; earlier dates stand." It is the only
sentence in the text that still uses the defined term "version" (B1). So an adopter can read one
date off a release and know that everything in it is Apache-2.0 by then at the latest — older
parts convert earlier, and the per-part rule still decides when. The registry's release manifest, which would let the lookup state the
bound for each release, is outside the licence; [decisions/README.md](decisions/README.md)
carries the propagation note, including the registry record whose publication date must
anchor to the software's first public availability, not to the licence version's.

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
contributors may freely agree to later. The review's other idea — convert to Apache-2.0 early
if the Association lapses — was rejected (R6; D9): lapse already removes the condition, and
what remains — notices, the patent defence, the name — is the same set of duties Apache
imposes, so early conversion would change nothing a licensee could feel.

**Counsel's part.** The conversion is now drafted as a present grant with a deferred
effective date (B2); counsel confirms that it survives the Association's dissolution, a
licensor's later choices and the transfer of a licensor's copyright to a successor in title
or an estate, that the "first made available to the public" day is provable from public
records, and how it interacts with Apache-2.0 §4's notice requirements and with §11 for code
that arrived from a permissively licensed predecessor (row 7).

### §8 If the Association lapses — the twelve-month backstop, and the early exit

**Why.** Every vendor-risk review asks what happens if the steward dies. The answer is written
into the grant, so the answer is not "trust us" — and the steward can give it on the day it
stops, instead of leaving everyone to wait a year (D9 as amended by D46; LEG-024).

**The three days.** The Purpose Condition lapses — permissions apply without it, for everyone
— on the earliest of: (a) the day the Association ceases to exist with no designated
successor; (b) the last day of twelve consecutive months in which it **neither recorded an
Entitlement or Donation Entitlement nor published in its transparency log, within that
period, a dated statement that credentials could be obtained under its schedule**; (c) the
day named in a signed, published **declaration of lapse**, which cannot
be withdrawn and whose day cannot be moved later. Limb (c) is D46's: five of the movement's
documents had promised the board could bring the lapse forward on the day it stops selling,
and the text could not deliver it. Limb (b) used to end "with no successor so designated";
`1.0-draft.4` cut those words (B3), because §2 already defines the Association to include its
designated successor, and the phrase was the one place a reader could find a fresh clock for
a successor.

**Limb (b), widened so a bad year does not kill the model (A13).** Draft.2's limb (b) ran on
recorded credentials alone. The review found the hole and both reviewers agreed it was real:
a live Association with a schedule on its website and nothing sold for twelve months — a slow
first year, a market that has not arrived yet — would have lapsed the condition for everyone,
permanently, with no way back. That is not what a backstop is for. Draft.3's (b) needs both
facts to be absent: no credential recorded *and* no published schedule kept under which one
could be obtained. A steward that is alive and open for business keeps the clock from running
by saying so; a steward that has gone silent does not. D46 is a candidate sheet, so this is
the operator's amendable default. The marker's old question about how the clock runs where
nothing was ever recorded is answered in the text since `1.0-draft.4` (B3, below).

**Limb (b) made checkable: a dated log statement, not a price list (C4).** Draft.3's words
were "nor kept a published schedule under which one could be obtained", and the §8 marker had
to ask counsel whether a schedule nobody could actually buy under counted as "kept". The
reviewer's third note put the problem plainly: a price list on a website is not evidence of
anything — nobody can tell from it whether the Association was open for business, and a
stale page left up by a dead steward would have kept the clock from running for ever. So the
second pass replaces the schedule element with a fact the log can hold: within the twelve
months, the Association must have **published in its transparency log a dated statement that
credentials could be obtained under its schedule**. A log statement is a signed, dated entry
in the same append-only log that records every credential — the Association writing, on a
named day, "credentials can be obtained under the published schedule". It is objectively
checkable: either an entry with that date is in the log and its mirrors, or it is not. A
live steward with a slow year publishes one and keeps the clock stopped; a steward that has
stopped recording and stopped saying so lapses after twelve months of both silences. The
platform must publish such a statement on a schedule, and the log must carry it;
[decisions/README.md](decisions/README.md) carries the note. The §8 marker's determinability
question shrinks accordingly to what a drafter cannot settle: whether a false statement — one
made when credentials could in fact not be obtained — is actionable, and how a successor
inherits the clock (agenda row 8).

**What keeps the clock in (b) running, and what does not.** Recording an Entitlement or a
Donation Entitlement does; so does a dated statement in the transparency log, within the
period, that credentials could be obtained under the schedule (C4). A Waiver does not — it is
the Project Steward's record, not the Association's, and
is the maintainer's "gratis, forever" tool; it must stay usable right up to the lapse, so it
cannot be the thing that postpones the lapse. Designating a successor does not either: the
successor is measured by the same clock (B3).

**Where the clock starts, and that it never restarts (B3).** Two sentences new in
`1.0-draft.4`. "The clock in (b) starts at this text's first official publication and runs
on through any succession" — so the first twelve months are counted from the day the
finished licence is published, not from the first credential (there may be none for a
while), not from the Association's founding, and not from a day nobody can name. Draft.3's
marker carried that intention; the comparison review said an intention in a marker is not a
rule, and it was right. "From that day it is the Steward Organization for every purpose
here, measured by the same clock" replaces draft.3's "one that records nothing for twelve
consecutive months counts as none", which read as an anti-reset rule but could also be read
as giving each successor twelve months of its own. Now there is one clock, it started once,
and a designation neither stops nor restarts it. And one sentence restates D9 where a reader
looks for it: "Lapse does not bring §7's conversion forward" — lapse removes the condition;
the four-year clocks run as before (the comparison review kept D9's distinction too, and the
operator confirmed it: D49 R6, D50 B3). The marker asks counsel to confirm that "first
official publication" is a determinable day, and whether "this text" should read as the
first official publication of any version of these terms — so that a later version applied
to existing contributions through the sign-off's delegation cannot move the clock's start
later, the direction statutes Art. 13 para. 1 item 6 and sign-off core item 6 forbid (agenda
row 8).

**The evidentiary handle.** Anyone may determine whether (a), (b) or (c) has occurred from the
Steward Registry's transparency log **and its published mirrors held outside the
Association's control**. The mirrors are the point: the registry's own record is under the
lapsing party's control, so the statutes bind the Association to name an archive custodian —
a public-benefit or public archive body, never a member or founder — that keeps
the registry, the log and the key set readable at their permanent addresses after the
Association is gone (Art. 9 para. 4, Art. 23 para. 5). Whether that suffices, and what a
licensee may rely on if the log and a mirror disagree, is counsel's (agenda row 8).

**The successor, and the bound on who may be one (A14, folded into B10).** Designated only by
a signed record, published like a declaration of lapse, naming a non-profit that has accepted
in writing **these terms, every recorded credential and the commitments in §2** — the
published constitutional commitments on the charitable destination of funds and no private
profit, which since `1.0-draft.4` bind the Association itself in §2 (B10, explained there),
so §8 points to them instead of repeating them. The bound is the review proposal's §7, and it
closes a gap draft.2 left open: a designation to anyone at all — a commercial buyer of the
registry, say — would have kept the condition alive with the money going somewhere the
licensors never agreed to. From the day of designation the successor is the Steward
Organization for every purpose of these terms, measured by the same clock (B3), so a paper
successor cannot reset it. Draft.3 tightened these two paragraphs for length and draft.4
tightened them again; every element is still there — the signed record, the log and its
mirrors, irreversibility, acceptance in writing, the one continuous clock and the bound. The
formality of both records (who acts, how many signatures, irreversibility), whether the
Association's own bound and the successor bound are enforceable by a licensee or a licensor,
what follows for a credential issued in breach of them (§9 intends that the holder keeps
it), and who may challenge a designation that fails, stay with counsel. Two of draft.3's
questions are gone because the text now answers them: the clock where no credential was ever
recorded (it starts at first official publication), and whether a successor's own
twelve-month test should mirror limb (b) (there is no separate successor test any more —
there is one clock).

### §9 Recorded credentials, and what stays yours — bounded permanence

**The rule.** A current credential satisfies §4 for the software it covers, for every
licensor's grant, and vests parts permanently — for a Waiver, as the text says in the rule
itself, subject to the 72-hour paragraph below: **a part is vested for an organization if it
is within its credential's scope and was made available to the public on or before the end of
that term** (D12 as amended; LEG-084; unit changed by B1). The pointer matters: a Waiver's
term ends when it is recorded as revoked, so without it the general rule would have vested
the back catalogue under a Waiver revoked inside 72 hours, which is exactly what A8 exists to
prevent. Once vested, nothing takes a part away. The events that do not take one away — the
project leaving the registry, a Waiver revoked, a term ending, a schedule change, the
Association failing — stood in the clause until the verification pass on the second pass cut
the list toward the word bound; the rule needs no list, and the FAQ keeps it.
Revocation and non-renewal act on parts made public afterwards, never on what is already
deployed. This is the clause that answers the procurement question most licences in this
family leave unanswered: *what happens to what we have already deployed?*

**Parts, not releases (B1).** Until `1.0-draft.4` this rule vested *versions* — releases the
project identifies as such — while §7 converted *parts* from their first public availability.
The comparison review put the gap in one example: an organization pays for a year and runs
public commits from a project that never tags a release. Its code converts to Apache-2.0
after four years like anyone's, but on draft.3's words nothing vested when its paid year
ended, because there was no "version published on or before" the end of the term. That
defeats the promise this clause exists to make. Draft.4 vests every part within the
credential's scope that was made available to the public — a public commit, tag, release or
package, §2's definition — on or before the end of the term, so the two mechanisms now share
one unit and one date. For a project that does tag, nothing changes: a tagged release is
made public on its release day, and everything in it is public by then. For a project that
never tags, the rule now works. "Vested versions" became "vested parts" in §3, §6 and §9, the
Waiver paragraph vests "every part then public within its scope", and §6 says "These days
alone vest nothing; a later credential may cover that code under §9" (C2). Propagation: the
registry's vesting generator must vest parts, not releases;
[decisions/README.md](decisions/README.md) carries the note.

**Waivers: permission now, permanence after 72 hours (A8).** New in draft.3, and an
amendment of D48 item 15, which had left the lookup's 72-hour cooling to follow a licence that
knew none. The reason is D14 itself:
revocation of a Waiver is prospective, so under draft.2 a Project Steward who recorded a
Waiver for the wrong organization — a typo, a hijacked account, a maintainer talked into it —
vested that organization's right to the whole back catalogue at the moment of recording, and
no revocation could undo it. 72 hours is the only undo there is. So the text now says: a
Waiver gives permission from the day it is recorded; nothing vests under it during its first
72 hours; if it is still active after 72 hours, every part then public within its scope
vests, and later parts vest as they are made public while it stays active; and revocation
never makes earlier permitted use unlawful. The beneficiary loses nothing but permanence
during those three days — it may use the software from the first minute — and a Waiver
revoked within them leaves the beneficiary exactly where it was before, with the use in
between lawful. The spec's coverage function `cov-v1` already implements this rule, so on
this point the licence has caught up with the lookup rather than the other way round.

**"Still active" is shown by the log, not by a saved copy (B9).** The text now says so in
the Waiver sentence itself: "the transparency log shows whether it was, not a copy saved at
issue". The comparison review took the point from the other reviewer: a signed copy of a
Waiver downloaded at hour one proves that the Waiver was issued, and nothing else — it
cannot show a revocation at hour 48, so it cannot prove the Waiver survived to hour 72. The
only record that can is the log's status history, which is what the sentence points at. No
second approval and no second record is needed; the evidence has to establish what actually
happened. The §9 marker asks counsel to confirm the formation — permission without vesting,
then vesting by lapse of time — as a condition rather than a covenant, and that the log's
history suffices as proof that a Waiver was still active (agenda row 9).

**The only exceptions (D48 item C, corrected by A9).** Earlier drafts said "nothing takes it
away" without qualification, which was not quite true, and a promise that is not quite true
is worse than a bounded one. Draft.2 named the exceptions but drew one of them wrongly: it
said a credential "issued through a compromised signing key" vests nothing, which would have
punished a buyer who did everything right for a failure of the Association's own key
hygiene. Draft.3 uses the registry's own distinction:

1. a **forged record** — one with no genuine issuance behind it — vests nothing; a genuinely
   issued record survives a later compromise of the signing key, because the buyer's rights
   come from the issuance, not from the key;
2. a credential **obtained by fraud or deliberate deception** vests nothing;
3. a term **refunded or charged back in full** vests nothing (kept against both reviews'
   proposals — see R1 below), but **use during it before the refund stays lawful** (C5); a
   partial refund, or a refund for the Association's own failure, leaves vesting untouched
   (B6).

The body states them as three short sentences, so a reader can count them. And two things
the text says are **not** exceptions:

1. **good-faith reliance is protected** (§9): "You may rely on a genuinely issued record
   despite the Association's error, an honest under-certification, a later compromise of the
   signing key or the record's later removal." An honest under-certification of a revenue
   band is therefore a matter for the purchase agreement — a true-up — and never a loss of
   vesting; the body used to say that in its own words and now says it through the reliance
   sentence;
2. **patent litigation** ends only the patent licence, never a vested part — said in §3
   itself ("Your copyright licences and vested parts are unaffected"); §9 said it too until
   the second pass cut the duplicate.

Nothing else qualifies permanence. The marker asks counsel to confirm the reliance rule
against a record the registry later marks void, and against a genuinely issued record whose
term exceeds the one-year bound of §2 (A2): the two sentences point opposite ways for such a
record, and which controls — and what the holder keeps — is counsel's question (agenda
row 9).

**Why refunds still vest nothing (D49 R1, D50 R1), and the nuance that was added (B6).** Both
reviews proposed that refunds, like revocations, should stop future vesting only and never
take back what was acquired. The operator kept draft.2's rule both times, for a reason
neither proposal weighed: the Association's payment processor (under its own merchant terms)
may itself refund any sale within 14 days at its own discretion, and the Association cannot
contract that away. If a refunded term vested, every buyer could vest the whole back
catalogue for free by buying and refunding within the window. The "acquired rights" concern
does not arise: a refunded buyer acquired nothing, and the website's Entitlement terms
already say so. What the second review did show is that the text was cruder than the
commerce design behind it, which already distinguishes a full refund from a partial one and
a buyer's refund from a refund the Association owes for its own failure. So `1.0-draft.4`
says it: "A term refunded or charged back in full vests nothing; use during it before the
refund stays lawful. A partial refund, or a refund for the Association's own failure, leaves
vesting untouched." A chargeback is named because it is the same event by another route. A
partial refund leaves a paid term behind it, and a refund the Association makes because its
own service failed is not the buyer walking away. The refund runbook has to make the same
distinction; [decisions/README.md](decisions/README.md) carries the propagation.

**Earlier use stays lawful (C5).** The middle clause is the second pass's. "Vests nothing"
is about permanence; it was never meant to make a refunded buyer a retroactive infringer for
the weeks it ran the software on a credential that was, on those days, current and recorded.
The reviewer's third note pointed out that the first-pass words did not say so, and that a
processor-initiated refund could then turn a compliant month into an infringing one. Now the
text says it: the term vests nothing, and the use during it, before the refund, was licensed
use. The buyer walks away with nothing permanent and nothing to answer for. The §9 marker asks whether the distinction is determinable from the
record, and whether a refund in full made for the Association's own failure reads as leaving
vesting untouched, as intended — the sentence names the full refund first and the
Association-failure refund second, and the record's wording (D50 B6) carries that order
(agenda row 9).

**Groups, sales and mergers (A10, scoped by C3).** Five sentences answering the questions a
corporate lawyer asks first. "A credential covers its beneficiary and the entities the
beneficiary controls, while it controls them" — a subsidiary is covered by its parent's
credential for as long as it is a subsidiary. "A parent or sister company is covered only if
the record names it" — coverage runs *down* from the beneficiary, never up or sideways. "An
entity that leaves keeps what it vested" — a spin-off does not lose the code it was already
running. "A covered business sold or merged takes its vested coverage with it, for its own
operations, not the buyer's" — the buyer gets the target's deployments, not a licence for the
buyer's other divisions. "Coverage cannot be sold on its own" — credentials are not a
tradeable asset. The §9 marker asks how control and "for its own operations" are proved by a
licensee after a sale.

**Why coverage does not spread to an acquirer's group (C3).** Draft.3's A10 sentence said a
credential covers "its beneficiary and its group's entities while they are in it", and
"group" in §2 runs in every direction — parents, subsidiaries and sisters. The reviewer's
third note showed where that leads: a small subsidiary holds a Pass; a very large group buys
it; on the day of the sale the subsidiary's group is the acquirer's whole group, so one
subsidiary's Pass would have covered every company the acquirer owns, for the rest of the
term — and vested for all of them. The second pass fixes the direction: a credential covers
the beneficiary and what the beneficiary *controls*, while it controls it; a parent or a
sister company is covered only if the record names it. Run the example again: the bought
subsidiary keeps its Pass for itself and for whatever it controls; the acquirer and its other
companies get nothing from it, and the sale-and-merger sentence already stops the target's
vested coverage reaching "the buyer's" operations. The §5 group test is deliberately wider
than this — for the *threshold*, parents and siblings still count, because that is what stops
a USD 900,000 subsidiary of a giant sitting in the free tier; the size test and the coverage
scope now differ on purpose. The coverage lookup must compute scope as beneficiary plus
controlled entities, not as the §5 group; [decisions/README.md](decisions/README.md) carries
the note.

**Forks and imports (A11).** The operator's answer to OPEN-29, which earlier drafts left to
counsel; counsel now confirms rather than decides. "Vested code stays vested in forks and
modified copies; what others add needs its own permission" — a fork does not un-vest what
you already had, and does not vest the fork's new work. "Coverage of named software reaches
the contributions first offered under these terms through that project, not code imported
from elsewhere" — copying another project's code into a covered repository does not bring it
under the cheaper credential. "Forking gives no power to waive conditions on upstream code" —
a company cannot fork a project, name itself Project Steward of the fork and waive the
upstream authors' condition for itself.

**Development forks are not imports (B5).** One sentence added after the imports rule in
`1.0-draft.4`, and shortened in its second pass: "one first published in a fork or branch for
submission counts as the project's once accepted." The comparison review noticed that the anti-import
rule, read literally, would exclude the ordinary pull request: a contributor forks the
repository, pushes a branch, opens the request — and the code was "first published" in the
fork, not in the project, so a credential naming the project might be argued not to reach
it. That is the opposite of what the rule is for. The sentence says that a contribution made
that way belongs to the project it was submitted to, from the day it is accepted. Its §7
conversion clock is unaffected and still runs from its earliest public availability, which
may well be the fork's branch: origination is about *whose coverage reaches it*, not about
*when it converts*. The §9 marker's "origination" word covers it (agenda row 9).

**Vesting is not forgiveness.** The distinction matters and the draft draws it: vesting is
permission to use covered parts *from now on*. It does not excuse use before the credential
was recorded. Whoever offers that — the Association or the project's steward of record, in
amnesty covenants — offers it in their own agreement, bounded to claims they actually hold,
never through these terms (LEG-045). Individual contributors' claims for past use can be
released only by those contributors.

**The bootstrap sentence.** "Everyone who licenses contributions on these terms accepts that
recorded credentials satisfy §4 for their grant." This is the in-licence acceptance of the
steward roles: a licensor agreeing, by using this text, that a third party's registry record
satisfies a condition in their own grant. Its formation under Swiss and German standard-terms
doctrine and under drive-by-contributor conditions is a counsel question (LEG-039, LEG-040).
The fork and hostile-takeover cases that used to hang on it are now drafted (A11 above) and
counsel confirms them (OPEN-29).

### §10 One sentence, and the list that moved

§10 adds nothing. Until draft.2 it carried a five-line list of obligations the draft does not
contain; draft.3 cut it to one sentence — "These terms require nothing of your own software,
no disclosure, no network duty, no share-alike, no audit and no report." — and kept the
heading so that every cross-reference to §10 in this file, the FAQ and the README still
lands. The five lines are in Part 1 above, in full.

### §11 Notices — and what arrived under other terms

Keep the licence text and every copyright, patent and attribution notice with every copy or
substantial portion you distribute. Adopting these terms never deletes an inbound licence
text (D24; LEG-042). The first sentence is drafted as a scope condition — the permissions
cover a distributed copy only if it keeps the notices — in the MIT/Apache tradition; whether
that form is right, and how it interacts with §7 conversion, is a counsel question (agenda
row 10). The last sentence (D48 item D) says that material that came to the project under
other terms stays under those terms, with its notices; these terms cover the contributions
made under them. That is the licence side of the contribution model — original work,
employer-owned work, copied permissive code and incompatible dependencies are the project's
intake questions, not the licence's, and CONTRIBUTING carries them.

**The notices cure (A15).** New: "if you leave one out, putting it back restores the
permission from then on." MIT and Apache have no notice cure at all — a missing notice is
simply a copy outside the licence — and the review proposed a 30-day written-notice
procedure. The operator took the outcome without the machinery: one sentence, no notice
period, no letters. A build that dropped a file gets its permission back the moment the file
is back, for distribution from then on.

### §12 The name

The licence *name* and the Association's name are trademarks, and saying that software is
licensed under these terms is conditioned on shipping this text unchanged, as the Association
published it. That is the mechanism that keeps one canonical text canonical (the
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
third-party rights belongs in the Entitlement terms, not in the licence (LEG-083). Two
sentences the review proposed for §11 — "you may offer support or warranties on your own
behalf" and "your terms must not remove recipients' permissions" — were not adopted (R8):
every recipient receives each licensor's grant directly, so nobody's downstream terms can
remove it, and nothing in the text stops anyone selling support on their own account.

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
the same day. `D49` is the record of the same evening's decisions on the 16 September review
proposal: adoptions A1 to A16 and rejections R1 to R8, each explained under its clause above.
`D50` is the record of the same day's late decisions on the comparison review — the second
review, written against `1.0-draft.2`, and its revised proposal: adoptions B1 to B11 (B11
corrects the contributor sign-off) and rejections R1 to R7. `D46` is a decision candidate on
its own sheet, entered in the register
once the operator confirms; the drafts already implement it.

| Section | Implements | Requirements and sources |
|---|---|---|
| §1 Purpose Notice | D10 (one canonical text, zero per-project parameters); D23 as amended (designations in the text layer); D48 items 9 (LicenseRef identifier) and 13 (literal name, UID anchor) | LEG-027; SPDX `LicenseRef-` form; REUSE |
| §2 group and control | D8; D48 item A (the client's group is measured); D49 R3 (verbatim "control" kept) | LEG-018; PolyForm Small Business 1.0.0 (verbatim "control", "your company" model) |
| §2 steward, registrar scoping | D6; D29 §6.3; D46 (successor limb) | LEG-016; statutes Art. 4 |
| §2 registry, recording, mirrors | D48 item B (effect on recording; §6 the only grace); D46 | statutes Art. 9 para. 4, Art. 23 para. 5 |
| §2 Entitlement coverage by name or every work | D48 item 5 (amends D42's "every registered repository" for the Pass; `spec/coverage/cov-v1.ts` must follow); D49 R4 (no lane names) | D11 |
| §2 bound on issuance: published schedule, same terms, at most one year, within the published constitutional commitments; a renewal recorded when its term starts, never in advance | D49 A2; D50 B10 (the Association bound in the text; §8's successor bound points here); D50 C6 (no stacked years) | statutes Art. 11, Art. 13; D12 |
| §2 Donation Entitlement | D18 | LEG-012 |
| §2 credential term | D48 item 11 | — |
| §2 Waiver, Project Steward | D14 as amended; D23 as amended | LEG-039 |
| §3 grants, no assignment | D6, D7 as amended; D50 R3 (no "sublicensing on these same terms" — recipients take directly from each licensor) | LEG-015, LEG-036 |
| §3 irrevocable except as these terms say | D49 A1 | Apache-2.0 §2–§3 tradition |
| §3 inbound = outbound default | D49 A16 (the sign-off stays the instrument for forward delegation) | Apache-2.0 §5 |
| §3 patent licence and defence | D48 item 6; D50 B8 (the trigger reaches the group), R7 (no "now or later" claims) | Apache-2.0 §3 |
| §4 condition, not covenant | D6 | LEG-010, LEG-013, LEG-051 |
| §4 "for the benefit of" | D48 item A; D49 A4 (client's coverage covers work solely for it; general service vs dedicated deployment; personal use) | — |
| §4 evaluation, security review, contribution exception | D49 A3 | BSL tradition |
| §4 limb (d) | D18 | LEG-012; OPEN-27 |
| §5 dual test, no audit (no price, tier or band appears anywhere in the text; the sentence that said so was cut as descriptive) | D8, D11 | LEG-017, LEG-019, LEG-020, LEG-022 |
| §5 counting rules | D49 A5 (operator defaults); D50 B4 (reasonable provisional figures) | — |
| §5 CPI indexing, June-to-June formula | D48 item 2 (CPI-U kept); D49 A6 (formula), R7 (nearest USD 1,000) | PolyForm Small Business 1.0.0; US BLS CPI-U CUUR0000SA0 |
| §5 non-profit, education, public-body limb | D48 item 1; D49 R5 (entity-based, not activity-scoped) | — |
| §5 no investment prong | D48 item 3 (closes OPEN-28); D49 A5 ("investment raised is not revenue") | — |
| §6 cure and its five triggers; runs only when the use needs coverage | D8; D48 item 12; D50 B4 (trigger (d): reliable figures later show the threshold was exceeded); D50 C1 (permitted evaluation days never start or count toward the cure); D49 R2 and D50 R4 (no separate outage permission) | LEG-014 |
| §6 rolling cap; cure days alone vest nothing but a later credential may cover that code; outage days do not count | D49 A7; D50 B1 (parts, not versions), B7 (outage days), C2 (grace alone vests nothing, later vesting not blocked) | — |
| §7 per-part conversion as a present grant | D9; D48 item 4; D50 B2 (present grant, deferred effect); D49 R6 (no early conversion on lapse) | LEG-023, LEG-025 |
| §7 release-level bound | D49 A12 (release manifest and record anchor: decisions/README); D50 B1 keeps "version" for this sentence only | — |
| §8 lapse, declaration, successor, mirrors; the clock's anchor and continuity; lapse does not bring conversion forward | D9 as amended by D46; D50 B3 | LEG-024, LEG-040; statutes Art. 9 para. 4, Art. 23 para. 5 |
| §8 limb (b) widened: credential or a dated log statement that credentials could be obtained | D49 A13 (operator's amendable default; D46 still a candidate); D50 R5 (kept against the comparison proposal's issuance-only limb); D50 C4 (the schedule element becomes a dated statement in the transparency log) | — |
| §8 successor bound | D49 A14; D50 B10 (points to the commitments in §2) | statutes Art. 13 (charitable destination, no private profit) |
| §9 vesting, exceptions, what vesting is not | D12 as amended; D50 B1 (the unit is the public part, not the release); D48 item C as corrected by D49 A9 (forged vs genuinely issued; good-faith reliance); D49 R1 and D50 R1 (a full refund vests nothing), D50 B6 (a partial refund or an Association-failure refund leaves vesting untouched), D50 C5 (use before the refund stays lawful) | LEG-084, LEG-045 |
| §9 Waiver: permission at recording, vesting after 72 hours, survival shown by the log | D49 A8 (amends D48 item 15; matches `cov-v1`); D50 B9 | D14 (prospective revocation) |
| §9 groups, sales and mergers: beneficiary plus controlled entities, parent or sister only if named | D49 A10; D50 C3 (coverage scope narrower than the §5 group test) | — |
| §9 forks, imports and development-fork origination | D49 A11 (answers OPEN-29 at operator level); D50 B5 | LEG-040 |
| §9 bootstrap sentence | D23 as amended | LEG-039, LEG-040; OPEN-29 |
| §10 one sentence | D49 cut (the list moves to Part 1 and the README) | — |
| §11 notices, inbound terms | D24; D48 item D | LEG-042 |
| §11 notices cure | D49 A15; D50 R2 (no 30-day written-notice machinery) | — |
| §12 the name | D10; D48 item 10 (CC BY 4.0 for the finished text) | LEG-037 |
| §13 warranty and liability | D48 item 8; D49 R8 (support and downstream-terms sentences not adopted) | LEG-083 (the credential-is-not-a-warranty point, placed elsewhere) |
| §14 silence on governing law | D48 item 7 | — |

### 3.2 Not in the licence, on purpose

A reviewer should be able to see the shape of the whole thing, including the parts that are
not in the licence:

| Not in the licence | Where it lives instead | Why |
|---|---|---|
| Prices, tiers, bands, and the lane names (Pass, Project, Portfolio) | The Association's published schedule | The licence must stay binary and reviewable once (D11, LEG-022); the review proposed naming the lanes and the operator declined (D49 R4) |
| Any payment obligation | The separate Entitlement agreement | Keeps the mechanism out of third-party-beneficiary doctrine (D6) |
| Self-certification of revenue band | The purchase flow | An audit clause in a licence is a procurement veto (LEG-020) |
| A renewal grace | Nowhere — the coverage lookup's 30-day renewal grace must follow the licence | §6's 60-day cure is the only grace; a credential counts from recording (D48 item B). The 72-hour Waiver rule is *in* the licence since draft.3 (D49 A8) and delays vesting, not permission |
| A separate outage permission | Nowhere — §6(e) already covers a new user, and §6's outage-days rule (D50 B7) keeps an outage from spending the 60 days | Rejected as redundant, twice (D49 R2, D50 R4) |
| Notice machinery (30 days after written notice), a sublicensing limb in the copyright grant, UTC times and other spec-level detail, "now or later" patent claims | Nowhere; the registry's specification carries its own timing detail | Rejected in D50 (R2, R3, R6, R7): putting a notice back restores the permission with no letters; recipients take directly from each licensor; the licence stays free of spec-level detail; the after-acquired-claims wording was withdrawn by its own author |
| An investment ("capital raised") prong | Nowhere | Decided out (D48 item 3); adding one later would narrow the threshold, which the immutable core forbids for existing contributions without fresh consent |
| A governing-law or forum clause | Nowhere in the licence; the Entitlement agreement chooses its own | Blue Oak/PolyForm practice; conflict-of-laws rules decide (D48 item 7) |
| Terms addressed to project admins | The platform terms accepted at claim | A licence binds users, not the admin↔steward relationship (D13, LEG-080) |
| Amnesty covenants for past use | The Entitlement agreement, plus a separate opt-in contributor mandate for anything beyond the steward's own covenants | The steward cannot release claims it does not hold (LEG-045); vesting is not forgiveness (§9) |
| Enforcement mandates | A separate opt-in document that does not exist yet | Contributors keep their claims unless they choose otherwise |
| The `PURPOSE.yml` manifest | Optional, operational, non-authoritative | Adoption is one committed licence file (D23 as amended) |
| The release manifest that states each release's conversion bound | The registry | §7 gives the rule; the registry computes the date (D49 A12) |
| The donation proof standard | The registry's published terms | The licence says only that the credential must be recorded (OPEN-27) |
| The immutable core | The contributor sign-off §2.3 and statutes Art. 13 — six items | It bounds what a later *version* may do to existing contributions; the licence version itself is what it bounds |
| Forward delegation to later licence versions | The contributor sign-off | The licence's inbound rule (D49 A16) gives the project the present licence only; the sign-off is not weakened |
| The contributor intake rules (original work, employer permission, copied permissive code, dependencies) | CONTRIBUTING | The licence covers contributions made under it; the project decides what it takes in (D48 item D) |
| The five-line absence list | Part 1 of this file, and the README | §10 keeps one sentence so cross-references survive (draft.3 cut) |

---

*Revised 2026-09-16, late, for the second pass on `1.0-draft.4` (D50 items 13–19): C1
(evaluation never starts or consumes the cure clock, with the two-months-then-production
example) under §4 and §6; C2 (grace alone vests nothing, a later credential may cover that
code, with the release-during-grace example) under §6 and §9; C3 (coverage is the beneficiary
plus what it controls, parents and sisters only if named, with the bought-subsidiary example)
under §9; C4 (limb (b) needs a dated log statement, what one is and why a price schedule was
not enough) under §8; C5 (use before a refund stays lawful) under §9; C6 (no stacked years)
under §2; the counsel markers' move out of the body into the §15 agenda stated in Part 0 and
in the intro; the quotations the second pass reworded corrected (§3's copyright sentence and
its patent sentence no longer repeated in §9, §6's outage sentence, §9's fork-origination
sentence); the trace rows extended; the word count restated at 2,381 with the operator's
candidates, then, in the verification pass, at 2,350 after the §9 example list and the two §7
asides were cut. Earlier the same night, for `1.0-draft.4`: every adoption B1–B10 of the D50 record
explained under its clause — the vesting unit (parts, not releases, with the never-tags
example) under §2, §6 and §9; the present Apache grant under §7; the clock's anchor and
continuity, and lapse not bringing conversion forward, under §8; provisional figures under §5
and §6; the development-fork rule, the refund nuance and the log as proof of a Waiver's
survival under §9; outage days under §6; the group patent trigger under §3; the Association's
own bound under §2 and §8 — the rejections R1–R7 of D50 explained where they bite, the word
count restated and the trace tables extended. Same-day verification pass on `1.0-draft.4`:
§6(d) controls where (a) also fits and outage days count toward "either 60"; §5 names the
CPI-U series by its BLS code alone; §13 keeps PolyForm's "will be liable"; §12 says "as the
Association published it"; the refund sentence says "a refund for the Association's own
failure"; the §6, §8 and §9 marker additions explained under their clauses; the word count
restated at 2,348. Earlier the same day, for `1.0-draft.3`: every
adoption A1–A16 of the D49 record explained under
its clause, the rejections R1–R8 explained where they bite, the §10 absence list moved into
Part 1 in full, and the trace tables extended. Same-day verification pass: the §9 vesting
rule's pointer to the Waiver paragraph, the A3 exception written as a widening of the grant,
the three exceptions and the two non-exceptions listed apart, the A2-versus-A9 question on
the §9 marker, the successor-test question on the §8 marker, the D48 item 15 quotation
corrected, the payment processor left unnamed, the archive custodian described in the
statute's words, and the word count restated. Earlier the same day, for `1.0-draft.2`: Parts
0–3 rewritten to the operator decisions of that day; the commentary removed from the licence
body folded in under each clause; the 2026-09-05 registrar-scoping note retired as drafted
into §2. Nothing in this file has been reviewed by counsel.*
