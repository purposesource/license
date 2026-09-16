# Licence notice for this repository

> **This file is NOT the Purpose Source License.** It is the notice covering the *contents of
> this repository*. The Purpose Source License does not exist yet: what this repository holds
> is a pre-counsel working draft of it, in
> [drafts/purpose-source-license-1.0-draft.md](drafts/purpose-source-license-1.0-draft.md),
> which nobody may apply to any software. If you arrived here looking for a licence to use,
> there is none to use.

## 1. Repository documentation and the development record

The documentation and development record in this repository — `README.md`,
`CONTRIBUTING.md`, `ANNOTATIONS.md`, `FAQ-OSPO.md`, `decisions/**`, the gate scripts, and the
issue templates — are published under the **Creative Commons Attribution-ShareAlike 4.0
International licence (CC BY-SA 4.0)**: <https://creativecommons.org/licenses/by-sa/4.0/>

Attribution: the Purpose Source Network development record, with a link back to this
repository.

## 2. The draft legal texts

The files under `drafts/` and `canonical/` are **working drafts circulated for comment**. They
are published under the same **CC BY-SA 4.0** terms as §1, with no added restriction: you may
quote, review, criticize, translate and republish them under that licence, with attribution as
in §1 and share-alike.

**Their status, stated separately from the copyright licence.** These are drafts. No lawyer
has drafted or reviewed them. Applying a draft to software, shipping it as a project's licence
file, or presenting it as operative terms misrepresents what it is, and the six-line banner
on every draft says so. "Purpose Source" and the licence name are the Association's
trademarks, unregistered today; the draft's own §12 conditions use of the licence name on
shipping a published version of the text unchanged, and no version has been published. None
of this is a term of the CC BY-SA offer — a Creative Commons licence cannot carry a
supplemental restriction — it is a statement of fact about the drafts.

*(Corrected 2026-09-16, D48 item 10: until this date the section said "no permission is
granted to use them as a licence" inside the copyright grant. That reads as a supplemental
restriction, which the CC licences do not allow, so the status warning now stands on its own
above and the copyright offer is the plain CC BY-SA 4.0 licence.)*

## 3. The finished licence text

The finished Purpose Source License text — when counsel has drafted it and a version is
published — will be released under the **Creative Commons Attribution 4.0 International
licence (CC BY 4.0)**: <https://creativecommons.org/licenses/by/4.0/>. Decided 2026-09-16
(D48 item 10); the wording of the attribution and of the notice on the text is for counsel.

The licence **name** is a trademark of the Purpose Source Association, and the licence text's
§12 conditions its use on shipping the published text unchanged. That is the mechanism that
keeps one canonical text canonical: anyone may copy the words under CC BY, and only the
unchanged text may be called by the name.

**Rights clearance.** Nothing blocks CC BY 4.0 for the finished text:

- the sentences taken from PolyForm Small Business 1.0.0 are used under PolyForm's own grant,
  with attribution in §4;
- the drafts here are CC BY-SA today, and every contribution to them so far is the operator's
  own work, so the operator can release the finished text under CC BY without anyone else's
  consent. Should a third party contribute wording before publication, that contribution is
  accepted under CC BY 4.0 or not at all;
- the wording borrowed from the 16 September 2026 review proposal (§4) came into the record
  under this repository's own CC BY-SA notice and was produced within the operator's own
  review process, so the same clearance applies. The proposal's notes ask that the finished
  text not be labelled CC BY until the rights have been cleared; this list is where that
  clearance is recorded, and any borrowed sentence whose clearance fails is redrafted.

## 4. Third-party material

Where a draft copies or models wording from an existing published licence, this section names
the source and the terms it is used under.

**PolyForm Small Business License 1.0.0** (<https://polyformproject.org/licenses/small-business/1.0.0>).
The licence draft uses these PolyForm sentences and patterns: the definition of *control*,
verbatim (§2 of the draft: "Control means ownership of substantially all the assets of an
entity, or the power to direct its management and policies by vote, contract, or otherwise.
Control can be direct or indirect."); the *group* definition, modelled on PolyForm's "your
company" (§2); the threshold figures and the CPI-U series PolyForm names (§5; the indexing
formula itself is the review proposal's, below); the warranty and liability sentence of
PolyForm's "No Liability" section, verbatim except that "this software" reads "the software"
and "the licensor will not be liable" reads "no licensor will be liable" (§13); and the
copyright-licence phrase "to do everything with the software that would otherwise infringe",
modelled on PolyForm's copyright licence (§3). The PolyForm Project publishes its licence texts under the grant in its repository's
README (<https://github.com/polyformproject/polyform-licenses>, section "License"), which
reads: *"Each contributor licenses you to do everything with PolyForm licenses that would
otherwise infringe that contributor's copyright in it. If you make changes to a PolyForm
license, you must remove all mention of 'PolyForm' and polyformproject.org, as well."*
(read from the repository README on 2026-09-16; the section closes with a warranty disclaimer
for the licence texts, not reproduced here). The draft uses those sentences under that grant.
The body of the licence text names neither PolyForm nor its domain — PolyForm is named only in
`[COUNSEL: …]` markers (§2, §13, §14) and in the draft's counsel agenda and revision log
(§15–§16), none of which is part of the text as it would be published — and the attribution
lives here. *(Corrected 2026-09-16: until this date this section said
PolyForm's texts were published under CC BY 4.0. They are not; the grant above is the one that
applies.)*

> [COUNSEL: confirm that using PolyForm sentences under the README grant, with attribution in
> this notice and none in the licence body, meets both the grant's no-mention condition and
> good attribution practice, and whether the finished text or its notice should name PolyForm
> anyway. The draft's §2 marker asks the same question from the text's side.]

**Apache License, Version 2.0** (<https://www.apache.org/licenses/LICENSE-2.0>). The draft's
§3 follows the structure of Apache-2.0 §3 for the patent grant and the litigation trigger, and
of Apache-2.0 §5 for the inbound default (since `1.0-draft.3`); §7 converts the software to
Apache-2.0 by reference; no Apache sentence is copied verbatim.

**The 16 September 2026 review proposal** (`license-proposal/purpose-source-license-suggested.md`
with its `REVIEW-NOTES.md`, kept beside this repository in the movement's record, not inside
it). The proposal is a discussion draft written against this repository's `1.0-draft.2`; its
notes place it under this repository's own notice — **CC BY-SA 4.0**, §1 and §2 above — with
attribution and share-alike preserved. Since `1.0-draft.3` (D49, 2026-09-16) the licence
draft borrows the proposal's plain wording, adapted to the draft's defined terms, at these
places: the irrevocability sentence and the inbound default with "contributors keep their
copyright" (§3); the personal-use sentence (§4); the counting rules and the June-to-June
CPI-U formula (§5); the 60-days-in-twelve-months cap and "do not vest" (§6); the successor
bound (§8); the 72-hour Waiver rule, the good-faith reliance sentence, the corporate-change
sentences and the fork-and-import sentences (§9); and the notices cure (§11). The evaluation
and contribution exception (§4), the contractor and service sentences (§4) and the
release-level conversion bound (§7) are the operator's own wording from the review debate,
not the proposal's. Its structure is not borrowed, its "control" paraphrase is not used (the
PolyForm definition stays verbatim), and nothing in it is quoted as operative. The drafts here are
CC BY-SA 4.0 (§2), so the borrowed wording carries the same terms it came under; its place in
the rights clearance for the finished text is §3.

## 5. Trademarks

No trademark right is granted by this notice. Product, organization, and licence names
mentioned in this repository may be the marks of their respective owners. The Purpose Source
Association's name and the licence name are not registered anywhere today; the trademark
filings are a separate workstream and no application exists.
