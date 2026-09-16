> **WORKING DRAFT FOR COUNSEL — NOT OPERATIVE, NOT ISSUED BY COUNSEL, NOT LEGAL ADVICE.**
> No lawyer has drafted, reviewed, or approved any text in this repository. Nothing here
> grants a permission, creates an obligation, or may be relied on, adopted, quoted as
> operative, or applied to any software or organization. Do not commit any file from this
> repository into a project as its licence. Every point that needs legal judgement is
> marked inline as `[COUNSEL: …]`.

# Contributor sign-off — working draft

**Draft status:** pre-counsel working paper · **This draft:** `signoff-1.0-draft.3` · **Date of this revision:** 2026-09-16

## 0. The promise this document keeps

**You keep your copyright. No assignment, ever.** No version of this sign-off, and no later
version of the Purpose Source License, may ask you to assign copyright or transfer economic
ownership of your work. That is permanent. The Association cannot revise it.

What follows is small on purpose. A contributor sign-off is still needed: without one, a later
licence version could not apply to contributions already made, and the steward roles the
licence relies on would rest on nothing. So this instrument does the three things in §2 and
nothing else.

**One honest note about form.** The designed default is the one-line git trailer in §1.
Whether a trailer is strong enough to carry the delegation in §2.3, or a short signed
agreement is needed instead, is counsel's call within the fixed constraints in §4. Public copy
therefore promises the copyright outcome, never the ceremony.

*(Dated note, 2026-09-16, D49: licence `1.0-draft.3` §3 now carries an inbound default — a contribution intentionally submitted to a project is offered under the licence unless the contributor clearly says otherwise, and contributors keep their copyright. That default settles the terms a contribution comes in under; it carries neither §2.2 nor §2.3, does not replace this sign-off, and changes no word of it.)*

---

## 1. The trailer (designed default)

You add one line to the commit message:

```
Purpose-Sign-off-by: Ada Lovelace <ada@example.org>
```

By adding that line, you make the statement in §2, for that contribution.

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

**(b)** this contribution is based on earlier work whose terms let me submit it under the
Purpose Source License, and I have kept the notices that came with it; or

**(c)** someone else gave me this contribution under (a) or (b), and I pass it on unchanged.

**(d)** I understand that this contribution and its record — the trailer, my name as I wrote
it, and the project's public history — are public and may be redistributed indefinitely.

> [COUNSEL: (a) needs the employer case handled explicitly and readably: a contributor
> employed to write software may not hold the rights they are purporting to license. The DCO
> handles this only implicitly. State the warranty in a form a salaried contributor can
> actually assess without legal advice, and decide whether the platform's onboarding must
> surface it separately.]

### 2.2 The steward roles in the licence

I understand and accept the roles the Purpose Source License defines, and that they apply to
my contribution because I license it on those terms:

- the **Project Steward** — whoever holds administrative control of the canonical repository
  — may record a **Waiver** in the Steward Registry, which satisfies the licence's Purpose
  Condition for a named organization, for this software, my contribution included;
- the **Steward Organization** — the Purpose Source Association, which the licence calls the
  Association, or the successor it has publicly designated under §8 of the licence — records
  Entitlements and Donation Entitlements, keeps the Steward Registry in which Project Stewards
  record Waivers, and publishes the fee schedule; **it is never a licensor of my work, never a
  sublicensor, and never a rights-holder in it**;
- **I receive nothing of monetary value for my contribution**, and I understand that the
  movement's attribution mechanism directs where funds go without paying contributors.

> [COUNSEL: this is acceptance of a third party's power over a condition in the
> contributor's own grant. Confirm formation and prominence under Swiss and German
> standard-terms doctrine (AGB) and under drive-by-contributor conditions where the
> contributor's only act is a pull request from a fork. LEG-035 additionally requires the
> §2.3 clause to be prominent, plain-language, and flagged in CONTRIBUTING — confirm that
> discharge and say what "prominent" must mean operationally.]

### 2.3 Bounded forward delegation

My contribution may also be licensed under **any later version of the Purpose Source License
that the Association — or the successor it has publicly designated under §8 of the licence —
publishes, if that version is materially consistent with the version in force when I
contributed**.

**A later version applied to my contribution under this paragraph may never change any of
these six things** (the **immutable core**):

1. **The free-use threshold** — it may only ever be **widened**, never narrowed.
2. **The conversion delay** — the time after which software licensed under these terms
   becomes available under the Apache License, Version 2.0 may only ever be **shortened**,
   never lengthened, and never removed.
3. **The charity destination and the no-private-profit rule** — funds the Association passes
   on go to listed charitable recipients, and no private profit may be distributed out of
   them.
4. **The Association's role as registrar** — never a licensor, sublicensor or rights-holder
   in code it registers for others.
5. **The existence of the Project Steward's free-of-charge waiver power.**
6. **The steward-lapse backstop** — its existence, and its clock, which may only ever be
   **shortened**, never lengthened, and never removed.

Corrections that do not change the substance, and changes the law makes necessary to keep the
licence workable, apply to my contribution automatically. **A change that touches the
immutable core does not apply to my contribution unless I agree to it separately**; otherwise
it applies only to contributions made after it is published.

> Why the bound exists: an unbounded "or any later version" clause would let a future
> steward rewrite the bargain you actually accepted. This paragraph is why the delegation can
> be offered honestly at all.

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

Stated in the negative, because these are the clauses contributors are right to look for:

1. **No assignment.** You assign nothing and transfer nothing. Copyright stays with you (§0).
2. **No exclusive licence**, and no special or exclusive licence to the Association. You
   license the *project*, on the published terms, exactly as any other licensor under those
   terms does; the Association, like anyone else, takes the public licence and nothing more.

   *(Dated note, 2026-09-16, D50 item B11: until this date this item read "no licence to
   the Association at all". That said too much — the Association, like any recipient of the
   software, takes the public licence; what it never gets is a special or exclusive one.
   Corrected on the 16 September comparison review's point. No other word of this section,
   and nothing in §0, §2 or §4, changes.)*
3. **No enforcement mandate.** You do not authorize anyone to sue, settle or release claims
   on your behalf. Any such mandate would be a **separate, opt-in** document that does not
   exist yet, and a contributor who never signs one keeps every claim they have.
4. **No duty to contribute again**, no support duty, no exclusivity, and no restriction on
   contributing the same work elsewhere under other terms.
5. **No payment**, in either direction (§2.2).

---

## 4. Fixed constraints on the instrument's final form

Counsel chooses the form; these constraints are not counsel's to relax:

- **minimal** — the three things in §2 and nothing else;
- **public** — the text is published in this repository, versioned, with its history;
- **standardized and project-neutral** — one instrument for the whole movement, never
  per-project variants;
- **no assignment, ever** — §0;
- **plain-language and prominent**, with the §2.3 delegation flagged in
  [CONTRIBUTING.md](../CONTRIBUTING.md).

**Trace.** This instrument implements movement decisions D7 as amended (the no-assignment
outcome; the bounded delegation; the immutable core), D46 (item 6 and the successor limb —
a candidate sheet, entered in the decision register once the operator confirms), D48
(the wording of items 2 and 4, the Association's name; operator decisions of 2026-09-16)
and D50 (item B11, the wording of §3 item 2; operator decision of 2026-09-16, late), and
requirements LEG-034, LEG-035, LEG-036 and LEG-045. The index is
[decisions/README.md](../decisions/README.md).

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
| `signoff-1.0-draft.1` | 2026-09-16 | D46 (dissolution and steward lapse). The immutable core gains its sixth item, the steward-lapse backstop, whose clock may only ever be shortened; the delegation sentence in §2.3 names the successor designated under §8 of the licence. No text reviewed by counsel. |
| `signoff-1.0-draft.2` | 2026-09-16 | This revision, following the operator decisions of 2026-09-16 (D48). Plain-language pass over §0–§4 in the licence draft's register; the instrument is called a contributor sign-off throughout. §2.2 names the Purpose Source Association, which the licence calls the Association, and repeats the D46 successor limb. Item 2 of the core is worded for the per-part conversion of licence §7 (D48 item 4); item 4 is scoped to code the Association registers for others (statutes Art. 4, Art. 13). Decision references move out of the statement into §4's trace line. No text reviewed by counsel. |
| `signoff-1.0-draft.3` | 2026-09-16 | D50 item B11 (the operator decision of 2026-09-16, late, on the 16 September comparison review). §3 item 2 says "no special or exclusive licence to the Association" where it said "no licence to the Association at all", with a dated note; §4's trace line names D50. Nothing else changes: §0, §2 and the immutable core are word-for-word as in `signoff-1.0-draft.2`. No text reviewed by counsel. |
