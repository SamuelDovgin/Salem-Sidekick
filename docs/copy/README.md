# Salem Sidekick: complete interface copy

**Current revision:** the implemented site uses [ranked opening routes and expanded claim strategies](RANKED_STRATEGIES.md), the [practical playbook](PRACTICAL_PLAYBOOK.md), and [claim examples](CLAIM_EXAMPLES.md). Role definitions are dropdowns; the top two claims remain visible, with lower-priority role icons revealing additional comparisons. Public claims are Town-only; the actual-role roster keeps all roles/states. These supersede generic opening advice and the will-builder UI. The original paired copy below remains supporting mechanics/context.

Original status: **content prepared for implementation review.** Revised 2026-10-15 after choosing Compact and requesting more specific opening guidance.

Read the [three complete role examples](THREE_ROLE_REVIEW.md) and [readiness evidence](READINESS.md) first. The [structured copy pack](ROLE_COPY.json) contains the same authored text as the 60 files below. The existing [research index](../research/roles/INDEX.md) supplies supporting dossiers rather than replacing this actual interface copy.

## Original presentation contract (later revisions above take precedence)

- Start with the Compact layout. Quick strategy precedes claims and the smaller will builder.
- In the top right, use **More detail**. Helper: “Expand explanations in every section.” Expanded state: **Less detail**. It expands the same role summary, N1 plan, dawn interpretation, D2 disclosure, later decisions, claim reasoning, mistakes, subgoals, and will explanation **in place**. No guide drawer, separate guide page, or duplicate encyclopedia view. Per-section “Why?” expands that section and retains the rest of the page.
- Each role name shows its actual full alignment and familiar shorthand. **Deputy: TK — Town Killing. Sheriff: TI — Town Investigative.** TP means Town Protective; TS means Town Support. These are role families, not interchangeable Town labels.
- Actual role, selected public claim, and any browsed cover remain distinct. Poisoner is actually CU, while a Tavern Keeper cover publicly claims TS; Baker is NA, while a Cleric cover publicly claims TP.
- The actual-role selector opens a searchable roster, not a long horizontal strip of tiny unlabeled icons. Search names, role aliases, and alignment shorthand; filter faction/family; show real PNG + readable name + alignment in each row; support keyboard use, selected state, and Clear filters. Show recent choices for convenience without hiding the roster. Group transformed states under their parent role and mark Outliers as setup-dependent.
- The separate **Claiming as** selector exposes the complete base-role roster, including weak fits and non-Town roles. “Suggested starting points” are advisory cards. Each displays role + alignment, reason, and exposure; no “amazing fit” gate or invented success score. Opening a cover’s obligations expands them inline under that choice while the actual-role guidance remains visible.
- Keep actual role icons and real role/state PNGs from the [artwork inventory](../reference/ICON_MANIFEST.json). Add text labels and image-failure fallback. This task creates copy only and does not replace the icons with generated art.

Also included: [shared control labels and inline help](SHARED_INTERFACE_COPY.md), [opening research decisions](OPENING_RESEARCH.md), and [machine-readable audit results](AUDIT_REPORT.json).

## Copy rules

Nine sections per role each contain complete **compact** and **expanded** copy. Expanded copy deliberately includes the compact instruction plus its reasoning, branches, limits, and examples so the expanded state can replace that section’s brief text. Do not print both versions twice. Keep N1 and subgoals prominent even when the rest is compact.

The first-night instruction always covers the fresh-start state, a low-information choice/hold, what to record, what to say on D2, and a later decision. Some setup-dependent actions can be unavailable; the actual enabled role card wins. Good beginner advice must permit a useful hold rather than demand an unsupported action.

“Eligible” means the client permits the target in the current state. N1 is first night; D2 is the day after it. VFA is vote-for-alignment: answer the requested role family, except a genuine TI normally posts exact role and results. “Unknown” is not a negative result. “Astral” means no ordinary visible visit. “Book” is the Coven’s Necronomicon. Reveal these definitions on demand; do not require beginners to decode them before acting.

Mechanics use the source baseline and documented qualifications. Target selection, subgoals, and claim recommendations are original strategic inferences. The copy is suitable as a starting guide; winning or usability under time pressure still needs actual playtesting. See [readiness evidence](READINESS.md) for what was checked and what remains unproven.

## All 60 roles

| Role | Actual alignment | Copy |
| --- | --- | --- |
| Jailor | TPow — Town Power | [Complete compact and expanded copy](roles/jailor.md) |
| Marshal | TPow — Town Power | [Complete compact and expanded copy](roles/marshal.md) |
| Mayor | TPow — Town Power | [Complete compact and expanded copy](roles/mayor.md) |
| Monarch | TPow — Town Power | [Complete compact and expanded copy](roles/monarch.md) |
| Prosecutor | TPow — Town Power | [Complete compact and expanded copy](roles/prosecutor.md) |
| Coroner | TI — Town Investigative | [Complete compact and expanded copy](roles/coroner.md) |
| Investigator | TI — Town Investigative | [Complete compact and expanded copy](roles/investigator.md) |
| Lookout | TI — Town Investigative | [Complete compact and expanded copy](roles/lookout.md) |
| Psychic | TI — Town Investigative | [Complete compact and expanded copy](roles/psychic.md) |
| Seer | TI — Town Investigative | [Complete compact and expanded copy](roles/seer.md) |
| Sheriff | TI — Town Investigative | [Complete compact and expanded copy](roles/sheriff.md) |
| Spy | TI — Town Investigative | [Complete compact and expanded copy](roles/spy.md) |
| Tracker | TI — Town Investigative | [Complete compact and expanded copy](roles/tracker.md) |
| Bodyguard | TP — Town Protective | [Complete compact and expanded copy](roles/bodyguard.md) |
| Cleric | TP — Town Protective | [Complete compact and expanded copy](roles/cleric.md) |
| Crusader | TP — Town Protective | [Complete compact and expanded copy](roles/crusader.md) |
| Oracle | TP — Town Protective | [Complete compact and expanded copy](roles/oracle.md) |
| Trapper | TP — Town Protective | [Complete compact and expanded copy](roles/trapper.md) |
| Deputy | TK — Town Killing | [Complete compact and expanded copy](roles/deputy.md) |
| Trickster | TK — Town Killing | [Complete compact and expanded copy](roles/trickster.md) |
| Veteran | TK — Town Killing | [Complete compact and expanded copy](roles/veteran.md) |
| Vigilante | TK — Town Killing | [Complete compact and expanded copy](roles/vigilante.md) |
| Admirer | TS — Town Support | [Complete compact and expanded copy](roles/admirer.md) |
| Amnesiac | TS — Town Support | [Complete compact and expanded copy](roles/amnesiac.md) |
| Retributionist | TS — Town Support | [Complete compact and expanded copy](roles/retributionist.md) |
| Socialite | TS — Town Support | [Complete compact and expanded copy](roles/socialite.md) |
| Tavern Keeper | TS — Town Support | [Complete compact and expanded copy](roles/tavern-keeper.md) |
| Catalyst | Town Outlier — Town Outlier | [Complete compact and expanded copy](roles/catalyst.md) |
| Pilgrim | Town Outlier — Town Outlier | [Complete compact and expanded copy](roles/pilgrim.md) |
| Archmage | CPow — Coven Power | [Complete compact and expanded copy](roles/archmage.md) |
| Hex Master | CPow — Coven Power | [Complete compact and expanded copy](roles/hex-master.md) |
| Witch | CPow — Coven Power | [Complete compact and expanded copy](roles/witch.md) |
| Conjurer | CK — Coven Killing | [Complete compact and expanded copy](roles/conjurer.md) |
| Ritualist | CK — Coven Killing | [Complete compact and expanded copy](roles/ritualist.md) |
| Jinx | CK — Coven Killing | [Complete compact and expanded copy](roles/jinx.md) |
| Dreamweaver | CD — Coven Deception | [Complete compact and expanded copy](roles/dreamweaver.md) |
| Enchanter | CD — Coven Deception | [Complete compact and expanded copy](roles/enchanter.md) |
| Illusionist | CD — Coven Deception | [Complete compact and expanded copy](roles/illusionist.md) |
| Medusa | CD — Coven Deception | [Complete compact and expanded copy](roles/medusa.md) |
| Necromancer | CU — Coven Utility | [Complete compact and expanded copy](roles/necromancer.md) |
| Poisoner | CU — Coven Utility | [Complete compact and expanded copy](roles/poisoner.md) |
| Potion Master | CU — Coven Utility | [Complete compact and expanded copy](roles/potion-master.md) |
| Voodoo Master | CU — Coven Utility | [Complete compact and expanded copy](roles/voodoo-master.md) |
| Wildling | CU — Coven Utility | [Complete compact and expanded copy](roles/wildling.md) |
| Covenite | Coven Outlier — Coven Outlier | [Complete compact and expanded copy](roles/covenite.md) |
| Cultist | Coven Outlier — Coven Outlier | [Complete compact and expanded copy](roles/cultist.md) |
| Baker | NA — Neutral Apocalypse | [Complete compact and expanded copy](roles/baker.md) |
| Berserker | NA — Neutral Apocalypse | [Complete compact and expanded copy](roles/berserker.md) |
| Plaguebearer | NA — Neutral Apocalypse | [Complete compact and expanded copy](roles/plaguebearer.md) |
| Soul Collector | NA — Neutral Apocalypse | [Complete compact and expanded copy](roles/soul-collector.md) |
| Doomsayer | NE — Neutral Evil | [Complete compact and expanded copy](roles/doomsayer.md) |
| Executioner | NE — Neutral Evil | [Complete compact and expanded copy](roles/executioner.md) |
| Jester | NE — Neutral Evil | [Complete compact and expanded copy](roles/jester.md) |
| Pirate | NE — Neutral Evil | [Complete compact and expanded copy](roles/pirate.md) |
| Arsonist | NK — Neutral Killing | [Complete compact and expanded copy](roles/arsonist.md) |
| Serial Killer | NK — Neutral Killing | [Complete compact and expanded copy](roles/serial-killer.md) |
| Shroud | NK — Neutral Killing | [Complete compact and expanded copy](roles/shroud.md) |
| Werewolf | NK — Neutral Killing | [Complete compact and expanded copy](roles/werewolf.md) |
| Cursed Soul | Neutral Outlier — Neutral Outlier | [Complete compact and expanded copy](roles/cursed-soul.md) |
| Vampire | Neutral Outlier — Neutral Outlier | [Complete compact and expanded copy](roles/vampire.md) |
