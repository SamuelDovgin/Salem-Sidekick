# Content, claim reasoning, and match-state specification

Planning date: 2026-10-15. This is a design contract for later implementation, not an implemented application or a claim to have a complete game engine.

## Separate facts, recommendations, and user input

| Entity | Required fields | Why separate it |
| --- | --- | --- |
| Role identity | Stable ID, name, aliases, default family, default faction, state-parent, icon reference | Name changes and transformations should not lose drafts |
| Mechanic assertion | ID, statement, ability, context conditions, evidence references, status | A changed rule can update the affected advice without rewriting unrelated pages |
| Recommendation | ID, concise action, reason, conditions, caveats, supporting mechanics | Strategy is not a mechanical guarantee |
| Research section | ID, heading, explanatory prose, worked examples, mechanic/recommendation references | Deep and quick layers share the same evidence |
| Claim relation | Actual role/state, cover role, fit types, supporting facts, exposures, continuation risks | One role pair can have different fit after receiving book |
| Ability template | Action types, phases, fields, outcomes, state/charge rules, export format | A role is not always a single N-target-result row |
| Source | URL, title, type, revision evidence, accessed date, supporting scope | Easy source review and stale-content detection |
| Match entry | Unique ID, cycle, phase, intended action, selected targets, actual feedback, notes | Intent and outcome must not be conflated |
| Draft | Claimed role, format, ordered entries, user text | Switching role need not destroy another draft |

Suggested assertion statuses: `officially-corroborated`, `source-checked`, `source-conflict`, `needs-client-test`. Use the plain-language equivalent in the UI. There is no generic “verified” badge that disguises whether a client test occurred.

## Inline copy and selector contract

The authored [copy pack](../copy/ROLE_COPY.json) provides all 60 roles. Each of nine stable cards has `compact` and `expanded` text. The top-right More detail toggle expands those same cards in place; a Why control changes one card. No drawer/page is used. Keep detail preference separate from match entries.

Role search results show actual PNG + name + full alignment + shorthand. Actual-role and public-claim selectors independently expose all base roles, with search/faction/alignment filters. Claim suggestion membership never limits selection. Public alignment derives from the selected claim, not the actual role. A cover preview is inline and clearly labeled.

## Role record example

```json
{
  "id": "wildling",
  "name": "Wildling",
  "aliases": [],
  "defaultFaction": "coven",
  "alignment": "coven-utility",
  "rulesetProfile": "vanilla-text-normal-factions",
  "quickCardIds": ["wildling-priorities", "wildling-disclosure"],
  "researchSectionIds": ["wildling-sense", "wildling-cover-reasoning"],
  "claimRelationIds": ["wildling-as-tracker", "wildling-as-lookout"],
  "templateId": "wildling-private",
  "sourceIds": ["role-wildling"],
  "mechanicsCheckedOn": "2026-10-15"
}
```

This shows a conceptual shape. The separate copy pack now supplies complete authored role text; it is content, not an implemented match engine. Source IDs correspond to the research manifest.

## Keep selected role, browsed role, and cover role distinct

```text
actualRoleId      = the role whose strategy the user is playing
actualFaction     = known faction or the explicit default profile assumption
browsedRoleId     = a role currently viewed inside research or cover preview
claimedRoleId     = the role whose public will is being edited
roleTimeline[]    = actual role changes the user explicitly records
rulesetContext    = edition, communication mode, faction profile, known modifiers
bookState         = known/unknown/not-applicable, only if explicitly supplied
```

Reading Tracker as a cover preview does not change actualRoleId. Selecting Use claim changes claimedRoleId and opens that draft. An actual Amnesiac/Cursed Soul/retraining transition is a different intentional operation that preserves previous entries. Unknown faction/book/modifier state stays unknown; it is not silently treated as false.

Version one can show conditional prose such as “With the book…” instead of asking a beginner to configure every context field. The model still needs room for those facts so a later assistant does not require a redesign.

## Claim relation example

```json
{
  "id": "wildling-as-tracker",
  "actualRoleId": "wildling",
  "coverRoleId": "tracker",
  "fitTypes": ["information-fit", "usual-movement-fit"],
  "summary": "Use the destination part of Sense for your selected target.",
  "conditions": ["normal-text-role-mechanics", "sense-result-available"],
  "exposures": [
    "Do not publish visitors or whispers as Tracker feedback.",
    "With book, the selected target is attacked too."
  ],
  "informationAvailable": ["target-visible-destinations"],
  "informationExcludedFromExport": ["sense-visitors", "overheard-whispers"],
  "sourceIds": ["role-wildling", "role-tracker"],
  "recommendationKind": "editorial-inference"
}
```

Fit is multidimensional. A similar result can coexist with a movement contradiction. Never combine these into an uncalibrated percentage.

## Future compatibility evaluation

Do not implement an evidence engine as an implicit promise of the initial guide. If later added, it should:

1. Read only facts supplied by the user or explicitly stated setup assumptions.
2. Check role availability and context.
3. Check phase, charges, and ability state.
4. Check target count/type and visit visibility.
5. Check target feedback and expected effect.
6. Check the claimed result is within the role's information scope.
7. Return one or more reasons with evidence dependencies.

Every check returns **consistent / conflicting / unknown / disputed**, not just true or false. Conflicting means incompatible under named assumptions; it does not identify who lied. Unknown information cannot be used as an absent event. Disputed mechanics cannot reject an entry.

Example outputs:

| Entered situation | Appropriate explanation |
| --- | --- |
| Potion Master claims Seer; one visible destination reported by another player | “Potential movement conflict, if that observation is truthful and no visibility-changing context applies.” |
| Werewolf has old scent info while attacking a different target | “Result knowledge may fit; your own visit does not match an ordinary Tracker action.” |
| Oracle supposedly visits a numbered player | “Oracle chooses a role and acts astrally; check whether you recorded an actual role/state change.” |
| Investigator result says Murder, target claims Town Killing | “Possible compatible explanation; compare the actual attack and framing context.” |
| Player is absent from an ordinary visitor list | “No visible visit reported. Astral action and other context remain possible.” |

## Will entries and rendering

A row should preserve:

```text
id                  stable unique entry ID
phase               D or N
cycle               positive integer
actionType          role-specific value
intendedTargets     numbers, roles, corpses, or none
reportedOutcome     success / failed / unknown / role-specific result
reportedFeedback    literal user text or structured category
visibility          public-cover / private-actual
notes               optional user-entered text
sourceEntryIds      only if explicitly linked by the user
```

Multiple actions in the same N2 use different IDs. Sorting should be stable and chronological. Day abilities such as Socialite invites and Coroner autopsies stay day entries. A role transition can change future action types while leaving previous text intact.

**Rendering invariants:**

- Copy cover uses only the selected draft's public fields.
- Reading another role does not change a draft.
- Unknown/blank result does not become a positive/negative result.
- No real-role notes, special information, sources, or recommendation explanations enter a cover export automatically.
- Incomplete live rows can be omitted with clear feedback; explicit Copy blank template is separate.
- Short/detailed export derives from the same entries, not two divergent sets of data.
- User corrections win over derived hints. Keep raw feedback for recovery.

## Draft persistence

A future versioned record can contain `schemaVersion`, `matchId`, `updatedAt`, `actualRoleId`, `claimedRoleId`, `rulesetContext`, `roleTimeline`, and `draftsByClaimRole`. Keep private actual notes in a distinct field, if implemented, not inside cover drafts.

Preserve the previous raw saved record during migration until the new version has parsed and saved successfully. Storage failure falls back to in-memory state and selectable text. New match clears match contents only after the explicit reset interaction; user display preferences can remain.

## Content maintenance

A changed mechanic should have an impact list: role dossier → beginner card → claim relations → template validation → worked examples → acceptance scenarios. An alias or icon-only change need not invalidate an entire role's strategy.

Store review date separately from source revision date. Record which patch introduced a change where supported; do not claim that the research date is the game's version. Keep the [uncertainty register](../research/UNCERTAINTIES.md) linked to affected assertions.
