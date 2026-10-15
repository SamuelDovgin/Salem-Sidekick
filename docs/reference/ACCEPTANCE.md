# Acceptance scenarios for the website build

These checks are planned for implementation. No application tests or browser QA are claimed in the research task. Focus on meaningful user behavior and content mistakes, rather than tests that merely duplicate component markup.

## 1. Product hierarchy and inline expansion

- Compact is the chosen layout. On desktop and phone, strategy and role-specific subgoals precede the smaller will editor in visual and reading order.
- Top-right More detail expands all nine currently shown sections in place; Less detail collapses them. No drawer, modal, page, or duplicate guide appears.
- A Why control expands its own section without changing role, claim, unsaved fields, or other section choices.
- Expanded text includes actual opening target criteria, no-information fallback, failure handling, D2 disclosure, and N2 branches from the authored copy pack.
- Focus remains usable after expansion, section anchors address the same content, and large text does not overlap controls.

## 2. Search and coverage

- Search Sheriff/TI and Deputy/TK; show the correct full alignments. TP/TS filters must not mislabel either role. Select by keyboard and pointer.
- Actual and claim selectors offer the entire labeled roster with real PNGs, search, faction/alignment filters, recent shortcuts, and clear-filter recovery.
- A weak claim such as Potion Master → Seer remains selectable, with its movement mismatch explained. Suggestions cannot lock out other roles.
- Poisoner CU claiming Tavern Keeper shows public TS; Baker NA claiming Cleric shows public TP. Changing cover cannot replace actual-role strategy.
- Search Coven Leader and open Archmage with the historical alias explained.
- Search Famine, War, Pestilence, and Death and open the correct parent-role state.
- All 60 base roles have nonempty role-specific priorities, disclosure, interpretation, mistakes, interactions, and sources.
- Outliers are present but visibly setup-dependent; they are not shown as universally available.
- An empty result set can be recovered by clearing search/filters.
- Missing/failed icon loads retain the role name and a usable picker.

## 3. Claim reasoning and evidence limits

| Scenario | Expected behavior |
| --- | --- |
| Wildling → Tracker | Destination subset shown; visitors/whispers excluded from copied result |
| Wildling → Lookout | Visitor subset shown; destination not mislabeled as visitor |
| Poisoner → Tavern Keeper | Drink fit explained; Smog/book changes called out |
| Necromancer → Retributionist | Eligible Town-corpse compatibility plus Stoned/evil/self-protection limits |
| Potion Master → Seer | Information fit can be acknowledged, two-visit risk remains visible |
| Werewolf → Tracker | Persistent information distinguished from tonight's own attack destination |
| Plaguebearer → Lookout | Partial propagation and starting-infection limits; no exhaustive-equivalence promise |
| Soul Collector → Oracle | Astral movement fit and missing real protection both explained |
| Jinx → Crusader | Missing defense and survivor exposure prevent a blanket strong-fit label |
| Jester chooses a cover | Objective/Chatterbox guidance appears rather than only optimizing credibility |
| Default-role guide in converted/flexed context | Normal-faction assumption remains visible; no automatic Town clearance |
| Conflicting player claims | App explains the conflict without asserting which claimant lied |
| Source-conflicted interaction | No hard guilty verdict or destructive validation rejection |

Version one can satisfy these with correct conditional research and cards. A future evaluator must also satisfy them on entered evidence before it is advertised as a match assistant.

## 4. Will formatting and state

- New match has blank inputs. Example #4/#9 never enters the live clipboard accidentally.
- Sheriff: Innocent remains the literal result, not Confirmed Town.
- Investigator: current crime feedback; raw combined/unusual feedback preserved.
- Psychic: N1 Good/two and N2 Evil/three, chosen target included.
- Seer: two distinct targets; reuse/blocked cases do not silently become legal new results.
- Tracker/Lookout: correct direction, multiple numbers, explicit no-visible-visit versus failed action.
- Spy: N1 placement persists into N3 triggers; target role is not converted into a guessed player ID.
- Coroner: D2 autopsy followed by N2 examine; N1 no-autopsy state allowed.
- Oracle: role picker and no consecutive role; no ordinary numbered protection target.
- Trapper: Build → Place → later trigger → rebuild; no impossible second active trap.
- Vigilante: Load → Shoot, with ammunition/gun-lost state respected.
- Trickster: Mirror → absorption → later Unleash; no new ordinary mirror while holding attack.
- Admirer/Socialite: day and night entries both remain correctly labeled.
- Amnesiac/Cursed Soul: actual role transition preserves previous entries and the independent faction field.
- Horsemen: transformation changes action fields without pretending they are starting roles.
- Add next night uses the highest night cycle; a later D entry does not skip or duplicate incorrectly.
- Multiple legitimate same-night actions are retained with stable IDs.
- Unknown, blank, interrupted, and negative outcomes stay distinct.

## 5. Copying and privacy

- Editing a Tracker cover while playing Wildling copies only Tracker and explicitly selected cover entries.
- Private visitors, whispers, faction notes, progress counters, and actual-role headings never enter the normal cover export.
- Switching to Lookout then back to Tracker restores the Tracker draft unchanged.
- Copy one row and Copy will produce the intended scope. Short/detailed formats remain consistent.
- Clipboard denial produces selectable text and a concise explanation.
- Explicit Copy blank template is distinct from copying a completed will.
- Long text is not silently truncated to an unverified limit.

## 6. Persistence and recovery

- Reload preserves role, claim, format, and each claim's draft.
- A corrupted or older saved record can be recovered without silent deletion.
- Storage unavailable/full keeps current work in memory and exposes a copy path.
- New match requires a clear reset interaction and clears the appropriate match drafts.
- An inline section anchor or cover explanation does not overwrite a deliberately chosen actual role or claim.

## 7. Source and content review before release

- Every mechanical claim has a supporting source; every conditional strategy is labeled as advice.
- Recheck the official announcements after 2026-10-15; update affected data and dates.
- No obsolete blood-only Investigator, taunt Trickster, duel Pirate, marriage Admirer, or delayed-poison templates appear as current vanilla guidance.
- Uncertainties have safe limited wording or are omitted from hard rules.
- Role icons have preserved file-page provenance and the final publication asset decision is documented.
- Source links resolve to the relevant game/role, not ToS1 or BetterTOS2 pages by accident.
