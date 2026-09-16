> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> marked inline as `[COUNSEL: …]`.

# Contributor sign-off ("DCO-plus") — working draft

**Draft status:** pre-counsel working paper · **This draft:** `signoff-1.0-draft.0` · **Date:** 2026-09-02

## 0. The promise this document exists to keep

**No copyright assignment, ever. Contributors keep their copyright.** No version of this
document, and no later version of the Purpose Source License, may require a contributor to
assign copyright or transfer economic ownership of their work. That is permanent and is not
a policy the Steward Organization can revise (D7; LEG-036).

What follows is therefore deliberately small. A contributor instrument is still needed —
without one, a later licence version could not be applied to contributions already made, and
the steward roles the licence relies on would rest on nothing — but it may only do the two
jobs listed in §2, and nothing else.

**One honest caveat about form.** The *designed default* is the one-line git trailer in §1.
Whether a trailer carries enough contract strength for the delegation in §2.3, or whether a
minimal signed agreement is needed instead, is counsel's call within the fixed constraints in
§4. Public copy therefore promises the copyright outcome, never the ceremony (MARKETING §3).

---

## 1. The trailer (designed default)

A contributor adds one line to the commit message:

```
Purpose-Sign-off-by: Ada Lovelace <ada@example.org>
```

By adding that line, the contributor makes the statement in §2, for that contribution.

> [COUNSEL: trailer name. Reusing the Developer Certificate of Origin's own
> `Signed-off-by:` would inherit familiar tooling but would overload a line whose meaning is
> fixed by the DCO 1.1 text, which says nothing about §2.2 or §2.3 — a contributor who signs
> off out of habit would be held to more than they read. A distinct trailer is the honest
> option and is drafted above. Decide, and if a distinct trailer stands, decide whether
> `Signed-off-by:` is *additionally* required so that DCO-expecting tooling and downstream
> consumers still see what they look for.]

---

## 2. What the sign-off says

> **Working text — every word subject to counsel.** By adding the trailer to a commit, I
> state that:

### 2.1 Right to submit

**(a)** I created this contribution, and I have the right to submit it under the Purpose
Source License; or

**(b)** this contribution is based on earlier work that is covered by terms that permit me
to submit it under the Purpose Source License, and I have preserved the notices that came
with it; or

**(c)** someone else provided this contribution to me under (a) or (b), unchanged.

**(d)** I understand that this contribution and the record of it — including the trailer, my
name as I wrote it, and the project's public history — are public and may be redistributed
indefinitely.

> [COUNSEL: (a) needs the employer case handled explicitly and readably: a contributor
> employed to write software may not hold the rights they are purporting to license. The DCO
> handles this only implicitly. State the warranty in a form a salaried contributor can
> actually assess without legal advice, and decide whether the platform's onboarding must
> surface it separately.]

### 2.2 The steward roles in the licence

I understand and accept the roles the Purpose Source License itself defines, and that they
apply to my contribution because I am licensing it on those terms:

- the **Project Steward** — whoever holds administrative control of the canonical repository
  — may record a **Waiver** in the Steward Registry, which satisfies the licence's Purpose
  Condition for a named organization, for this software, including for my contribution;
- the **Steward Organization** records Entitlements, Donation Entitlements, and Waivers, and
  publishes the fee schedule; **it is never a licensor of my work, never a sublicensor, and
  never a rights-holder in it**;
- **I receive nothing of monetary value in exchange for my contribution**, and I understand
  that the movement's attribution mechanism directs where funds go without paying
  contributors.

> [COUNSEL: this is acceptance of a third party's power over a condition in the
> contributor's own grant. Confirm formation and prominence under Swiss and German
> standard-terms doctrine (AGB) and under drive-by-contributor conditions where the
> contributor's only act is a pull request from a fork. LEG-035 additionally requires the
> §2.3 clause to be prominent, plain-language, and flagged in CONTRIBUTING — confirm that
> discharge and say what "prominent" must mean operationally.]

### 2.3 Bounded forward delegation

My contribution may also be licensed under **any later version of the Purpose Source License
that the Steward Organization — or the successor it has designated under §8 of the licence —
publishes and that is materially consistent with the version in force when I contributed**.

**A later version applied to my contribution under this paragraph may never change any of
the following** (the **immutable core**):

1. **The free-tier threshold** — it may only ever be **widened**, never narrowed.
2. **The conversion delay** — the interval after which a published version becomes available
   under the Apache License, Version 2.0 may only ever be **shortened**, never lengthened,
   and never removed.
3. **The charity destination and the no-private-profit rule** — funds routed by the Steward
   Organization go to charitable recipients, and no private profit may be distributed out of
   them.
4. **The Steward Organization's character as registrar, never licensor** — it may never
   become a licensor, sublicensor, or rights-holder in contributed code.
5. **The existence of the Project Steward's waiver power.**
6. **The steward-lapse backstop** — its existence, and its clock, which may only ever be
   **shortened**, never lengthened, and never removed (D46).

Corrections that do not change the substance, and changes that are legally necessary to keep
the licence workable, apply to my contribution automatically. **A change that touches the
immutable core does not apply to my contribution unless I agree to it separately**, and
otherwise applies only to contributions made after it is published (D7 as amended; LEG-034).

> Why the bound exists: an unbounded "or any later version" clause would let a future
> steward rewrite the bargain a contributor actually accepted. This paragraph is the reason
> the delegation can be offered honestly at all.

> [COUNSEL: draft the material-consistency test itself. Who determines that a successor
> version is materially consistent, on what published record, and what is a contributor's
> remedy if the determination is wrong? An objective, published, per-version determination —
> with the immutable-core enumeration above as its checklist — is the design intent.
> Consider a rebuttable presumption against consistency, so silence never favours the
> steward.]

> [COUNSEL: the pre-registered "no conversion" revisit (D9/LEG-025) interacts with immutable
> core item 2: lengthening or removing the conversion is a core change, so it can only ever
> reach future contributions or contributors who separately agree. Confirm that reading is
> what the drafted words achieve, because the whole credibility of item 2 rests on it.]

---

## 3. What the sign-off does **not** say

Stated in the negative because these are the clauses contributors are right to look for:

1. **No assignment.** The contributor assigns nothing and transfers nothing. Copyright stays
   with the contributor (§0).
2. **No exclusive licence**, and no licence to the Steward Organization at all. The
   contributor licenses the *project*, on the published terms, exactly as any other licensor
   under those terms does.
3. **No enforcement mandate.** The contributor does not authorize anyone to sue, settle, or
   release claims on their behalf. Any such mandate is a **separate, opt-in** document that
   does not exist yet, and a contributor who never signs one keeps every claim they have
   (LEG-045).
4. **No obligation to contribute again**, no support duty, no exclusivity, and no restriction
   on contributing the same work elsewhere under other terms.
5. **No payment**, in either direction (§2.2).

---

## 4. Fixed constraints on the instrument's final form

Counsel chooses the form; these constraints are not counsel's to relax (D7 as amended;
LEG-036):

- **minimal** — the two jobs in §2 and nothing else;
- **public** — the text is published in this repository, versioned, with its history;
- **standardized and project-neutral** — one instrument for the whole movement, never
  per-project variants;
- **no assignment, ever** — §0;
- **plain-language and prominent**, with the §2.3 delegation flagged in CONTRIBUTING
  (LEG-035).

---

## 5. Counsel agenda carried by this draft

| # | Section | Question | Record |
|---|---|---|---|
| 1 | §1 | Trailer name; whether `Signed-off-by:` is additionally required | LEG-034 |
| 2 | §2.1 | Employer-rights warranty in contributor-readable form | LEG-034 |
| 3 | §2.2 | Formation and prominence of the steward-role acceptance under AGB and drive-by conditions | LEG-035 |
| 4 | §2.3 | The material-consistency test: who determines, on what record, with what remedy | LEG-034 |
| 5 | §2.3 | Interaction of immutable-core item 2 with the pre-registered no-conversion revisit | LEG-025 |
| 6 | whole | Whether a trailer suffices, or a minimal signed agreement is required | LEG-036 |
| 7 | whole | AI-assisted contributions: what §2.1 can honestly warrant about generated lines | LEG-043, OPEN-24 |

---

## 6. Revision log

| Revision | Date | Change |
|---|---|---|
| `signoff-1.0-draft.0` | 2026-09-02 | First draft. Right-to-submit warranty, steward-role acceptance, bounded forward delegation with the five-item immutable core, and the permanent no-assignment promise. No text reviewed by counsel. |
