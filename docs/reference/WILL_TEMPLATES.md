# Complete will-template reference

**Current full-will formats:** [All 64 N1-N7 example/blank wills](../copy/FULL_WILLS.md) supersede the shorter formatting examples below. Role-policy and mechanics references below remain background material.

Research date: 2026-10-15. These are original **formatting examples**, not fabricated live results or exact client quotations. Numbers are illustrative and must never be prefilled into a new match.

## Shared editing and export rules

- A public/cover draft has its own claimed-role heading and entries. A private actual-role log is a different namespace with an explicit destination; secret data never flows into the default Copy will action.
- Examples use simple ASCII output (`->`) by default; Unicode arrows can be an optional display choice. Confirm any game-specific character/length limits during implementation rather than assuming one.
- Fields for all ordinary results include Failed/no result and manual text. Unknown input is not silently converted into “innocent,” “no visit,” “no trigger,” or “saved.”
- Preserve intended action separately from observed outcome, day/night phase, cycle number, and any actual role transition.
- All 60 roles can be selected. Opposing-role formats below primarily describe explicit private logs; selecting a cover uses that cover role’s template and excludes the actual role.
- Short output exports role + useful action/result. Detailed output adds the user-selected notes. No app commentary, source URLs, fit labels, or private real-role notes enter a cover export.
- Optional note and result fields are omitted if blank. Do not copy unfinished example placeholders. A separately requested blank template may retain `[target]` placeholders and must be labeled as a template.
- Duplicate cycle entries are permitted for multiple legitimate actions; uniqueness applies to entry IDs, not to the string “N2.” Add next night uses the highest existing night number, regardless of later day entries.
- Phase/charge/state validation is advisory when setup is unknown. Preserve the user’s raw input rather than destroying unusual valid feedback.

## Coverage

Eight TI templates, five TP, four TK, five TS, five TPow, two Town Outliers, seventeen Coven, and fourteen Neutral templates. Famine, War, Pestilence, and Death are states within their parent templates.


## Jailor

**Fields:** D jail selection; N prisoner; claimed role; release/execute; actual outcome.

```text
Jailor
D2: Select 7
N2: Jail 7 — [claim]; released
```

**Rules:** No N1 execution, no consecutive prisoner. Three executions; lost abilities must alter later input options.

Mechanics: [Jailor](https://townofsalem.wiki.gg/wiki/Jailor_(ToS2)). Context and cautions: [role dossier](../research/roles/jailor.md).

## Marshal

**Fields:** D Tribunal; nominated/executed players; optional reason; remaining charges.

```text
Marshal
D2: Tribunal — 4, 9
```

**Rules:** Two charges; one use/day. These numbers are actual executed players, not assumed guilty findings.

Mechanics: [Marshal](https://townofsalem.wiki.gg/wiki/Marshal_(ToS2)). Context and cautions: [role dossier](../research/roles/marshal.md).

## Mayor

**Fields:** D Reveal; optional vote-weight note; no nightly targets.

```text
Mayor
D2: Revealed
```

**Rules:** Avoid generating fictitious N checks. Vote weight should be user-confirmed rather than calculated from incomplete setup.

Mechanics: [Mayor](https://townofsalem.wiki.gg/wiki/Mayor_(ToS2)). Context and cautions: [role dossier](../research/roles/mayor.md).

## Monarch

**Fields:** Knight target; attempted/completed/failed; current living Knights; charges.

```text
Monarch
N1: Knight 4 — completed D2
```

**Rules:** Two charges. Failed/dead-target attempts do not automatically consume a charge. Knights do not prove faction.

Mechanics: [Monarch](https://townofsalem.wiki.gg/wiki/Monarch_(ToS2)). Context and cautions: [role dossier](../research/roles/monarch.md).

## Prosecutor

**Fields:** D target; actual prosecution; result; remaining charges.

```text
Prosecutor
D2: Prosecuted 9
```

**Rules:** One/day, two total, relevant penalty after Town prosecution. No use in Tribunal or D1.

Mechanics: [Prosecutor](https://townofsalem.wiki.gg/wiki/Prosecutor_(ToS2)). Context and cautions: [role dossier](../research/roles/prosecutor.md).

## Coroner

**Fields:** Day corpse; autopsy killer-role record; night examine target; match/no match/failure; cumulative autopsies.

```text
Coroner
D2: Autopsy 6 — [killer role]
N2: Examine 9 — [match/no match]
```

**Rules:** Start with N1: no autopsy if appropriate. Retain previous autopsies; failed examination is not No match.

Mechanics: [Coroner](https://townofsalem.wiki.gg/wiki/Coroner_(ToS2)). Context and cautions: [role dossier](../research/roles/coroner.md).

## Investigator

**Fields:** Target; exact crime feedback: Murder / Trespassing / No Crime; optional combined feedback/manual text.

```text
Investigator
N1: 4 — Trespassing
```

**Rules:** Do not force a single mutually exclusive enum if the client supplies more than one crime. Use crimes, not blood.

Mechanics: [Investigator](https://townofsalem.wiki.gg/wiki/Investigator_(ToS2)). Context and cautions: [role dossier](../research/roles/investigator.md).

## Lookout

**Fields:** Watched player; list of visible visitors; No visible visitors; blocked/no result.

```text
Lookout
N1: 4 — visited by 7, 9
```

**Rules:** Multiple visitors; distinguish an empty observed list from no result; normal self-watch not offered.

Mechanics: [Lookout](https://townofsalem.wiki.gg/wiki/Lookout_(ToS2)). Context and cautions: [role dossier](../research/roles/lookout.md).

## Psychic

**Fields:** Selected target; phase-derived Good/Evil vision; two or three result players; unavailable/failure.

```text
Psychic
N1 Good: 4, 9 (selected 4)
N2 Evil: 2, 7, 11 (selected 7)
```

**Rules:** Odd Good/two; even Evil/three. The selected player belongs in the list. Never force exactly one Good/Evil.

Mechanics: [Psychic](https://townofsalem.wiki.gg/wiki/Psychic_(ToS2)). Context and cautions: [role dossier](../research/roles/psychic.md).

## Seer

**Fields:** Two eligible targets; Friends/Enemies; block/partial failure; target history.

```text
Seer
N1: 4 + 9 — Enemies
```

**Rules:** Distinct legal targets, reuse/revealed restrictions; two results do not identify the guilty member.

Mechanics: [Seer](https://townofsalem.wiki.gg/wiki/Seer_(ToS2)). Context and cautions: [role dossier](../research/roles/seer.md).

## Sheriff

**Fields:** Target; Innocent/Suspicious; failed/no result.

```text
Sheriff
N1: 4 — Innocent
```

**Rules:** Never relabel Innocent as Confirmed Town.

Mechanics: [Sheriff](https://townofsalem.wiki.gg/wiki/Sheriff_(ToS2)). Context and cautions: [role dossier](../research/roles/sheriff.md).

## Spy

**Fields:** New bug target; each active bug’s target and trigger night; reported role; no trigger/failure.

```text
Spy
N1: Bug 4 — no trigger
N3: Bug on 4 — [reported role]
```

**Rules:** Bugs persist. Do not turn a reported role into an invented visitor number. Multiple active targets can generate entries.

Mechanics: [Spy](https://townofsalem.wiki.gg/wiki/Spy_(ToS2)). Context and cautions: [role dossier](../research/roles/spy.md).

## Tracker

**Fields:** Tracked player; destination list; No visible visit; corpse destinations; failed/no result.

```text
Tracker
N1: 4 -> 9
N2: 7 -> No visible visit
```

**Rules:** Support multiple destinations and dead-player references; no visit is not a block.

Mechanics: [Tracker](https://townofsalem.wiki.gg/wiki/Tracker_(ToS2)). Context and cautions: [role dossier](../research/roles/tracker.md).

## Bodyguard

**Fields:** Guard target / Self Protect; attempted/saved/failed; optional survival feedback.

```text
Bodyguard
N1: Guard 4 — [outcome]
```

**Rules:** Two self-protect uses; a guard attempt must not default to successful protection.

Mechanics: [Bodyguard](https://townofsalem.wiki.gg/wiki/Bodyguard_(ToS2)). Context and cautions: [role dossier](../research/roles/bodyguard.md).

## Cleric

**Fields:** Barrier target / Self Barrier; no attack/attacked-saved/failure/manual.

```text
Cleric
N1: Barrier 4 — no reported attack
```

**Rules:** One self-barrier; ordinary Barrier is a direct player-target action.

Mechanics: [Cleric](https://townofsalem.wiki.gg/wiki/Cleric_(ToS2)). Context and cautions: [role dossier](../research/roles/cleric.md).

## Crusader

**Fields:** Fortify target; target-attack feedback; separate visitor-attack feedback.

```text
Crusader
N1: Fortify 4 — [save]; [visitor attack]
```

**Rules:** One random direct visitor can be attacked; do not require a visitor identity that was not learned.

Mechanics: [Crusader](https://townofsalem.wiki.gg/wiki/Crusader_(ToS2)). Context and cautions: [role dossier](../research/roles/crusader.md).

## Oracle

**Fields:** Role selector; attack/save feedback; previous selected role; self-role use.

```text
Oracle
N1: Aegis Sheriff — [outcome]
```

**Rules:** Targets a role. No consecutive same-role use; Oracle choice once. Do not invent a protected player number.

Mechanics: [Oracle](https://townofsalem.wiki.gg/wiki/Oracle_(ToS2)). Context and cautions: [role dossier](../research/roles/oracle.md).

## Trapper

**Fields:** Build / Place / Trigger / Dismantle / fail; placement target; role-list feedback; trap state.

```text
Trapper
N1: Build
N2: Place on 4
N3: Trigger — [roles/outcome]
```

**Rules:** One active trap; build before place. An existing trap can report later; do not renumber its original placement.

Mechanics: [Trapper](https://townofsalem.wiki.gg/wiki/Trapper_(ToS2)). Context and cautions: [role dossier](../research/roles/trapper.md).

## Deputy

**Fields:** Day target; Hit/Miss; ability-used state.

```text
Deputy
D2: Shot 9 — Miss
```

**Rules:** One shot, D2 onward. Miss is private feedback, not public confirmation.

Mechanics: [Deputy](https://townofsalem.wiki.gg/wiki/Deputy_(ToS2)). Context and cautions: [role dossier](../research/roles/deputy.md).

## Trickster

**Fields:** Mirror / Self Mirror / Unleash; target; absorbed attacker role; stored attack state.

```text
Trickster
N1: Mirror 4 — absorbed [role]
N2: Unleash on 9 — [outcome]
```

**Rules:** One Self Mirror. An absorption unlocks Unleash; no new mirror while holding the attack.

Mechanics: [Trickster](https://townofsalem.wiki.gg/wiki/Trickster_(ToS2)). Context and cautions: [role dossier](../research/roles/trickster.md).

## Veteran

**Fields:** Alert / No Alert; visitor-shot count if reported; remaining alerts.

```text
Veteran
N1: Alert — [reported count]
```

**Rules:** Three Alerts; no player target input. Do not invent visitor identities from a count.

Mechanics: [Veteran](https://townofsalem.wiki.gg/wiki/Veteran_(ToS2)). Context and cautions: [role dossier](../research/roles/veteran.md).

## Vigilante

**Fields:** Load / Shoot / inactive; target if shooting; outcome; ammunition and gun-lost state.

```text
Vigilante
N1: Load
N2: Shoot 9 — [outcome]
```

**Rules:** Three maximum loads, no N1 shot. Loading and shooting are distinct nights; Town shot removes gun access.

Mechanics: [Vigilante](https://townofsalem.wiki.gg/wiki/Vigilante_(ToS2)). Context and cautions: [role dossier](../research/roles/vigilante.md).

## Admirer

**Fields:** Obsession subalignment; Admire target/result; Care; D Bestow target; charges.

```text
Admirer
N1: Admire 4 — not Obsession
D2: Bestow 7
```

**Rules:** Use new Obsession model. Care unlocks after discovery; two Cares and two Bestows. Search result is not a faction clear.

Mechanics: [Admirer](https://townofsalem.wiki.gg/wiki/Admirer_(ToS2)). Context and cautions: [role dossier](../research/roles/admirer.md).

## Amnesiac

**Fields:** Starting role; D Remember transition; new role; subsequent role-specific entries.

```text
Amnesiac
D2: Remembered [role]
N2: [new role action]
```

**Rules:** Automatic Remember, not a selected night visit. Retain the transition when changing input template.

Mechanics: [Amnesiac](https://townofsalem.wiki.gg/wiki/Amnesiac_(ToS2)). Context and cautions: [role dossier](../research/roles/amnesiac.md).

## Retributionist

**Fields:** Corpse; corpse role; living destination; borrowed result; missing/ineligible/failure.

```text
Retributionist
N2: Dead Sheriff 6 -> 9 — Innocent
```

**Rules:** Town corpse eligibility and target restrictions. You visit the corpse, not its living target. Missing corpse is distinct.

Mechanics: [Retributionist](https://townofsalem.wiki.gg/wiki/Retributionist_(ToS2)). Context and cautions: [role dossier](../research/roles/retributionist.md).

## Socialite

**Fields:** D Guest List addition; current guests; N Party house; rejected/no rejection/failure.

```text
Socialite
D2: Invite 7
N2: Party 4 — rejected someone
```

**Rules:** Two manual invitations, one per day; no consecutive same party house. No invented rejected visitor IDs.

Mechanics: [Socialite](https://townofsalem.wiki.gg/wiki/Socialite_(ToS2)). Context and cautions: [role dossier](../research/roles/socialite.md).

## Tavern Keeper

**Fields:** Drink target; actual block feedback / failed / hungover / manual.

```text
Tavern Keeper
N1: Drink 4 — [feedback]
```

**Rules:** Hangover affects repeat attempts. Preserve attempts without falsely labeling all successful.

Mechanics: [Tavern Keeper](https://townofsalem.wiki.gg/wiki/Tavern_Keeper_(ToS2)). Context and cautions: [role dossier](../research/roles/tavern-keeper.md).

## Catalyst

**Fields:** Overcharge target; applied/failed; expected affected cycle; optional actual extra-action report.

```text
Catalyst
N1: Overcharge 4 — [outcome]
```

**Rules:** Setup dependent. Do not guess precise same-night/day special cases; timing field supports actual client feedback.

Mechanics: [Catalyst](https://townofsalem.wiki.gg/wiki/Catalyst_(ToS2)). Context and cautions: [role dossier](../research/roles/catalyst.md).

## Pilgrim

**Fields:** Day observations and claims; optional voting notes; no ability target.

```text
Pilgrim
D2: 4 claims TP; 7 changed N1 target
```

**Rules:** No fabricated ability entries; notes remain observations, not checks.

Mechanics: [Pilgrim](https://townofsalem.wiki.gg/wiki/Pilgrim_(ToS2)). Context and cautions: [role dossier](../research/roles/pilgrim.md).

## Archmage

**Fields:** Retrain recipient; old/new role; accepted/declined; or book attack.

```text
Archmage
N1: Retrain [ally] -> [role] — [outcome]
```

**Rules:** Private actual-role template. Ordinary retrain and book attack are alternatives; retain role history.

Mechanics: [Archmage](https://townofsalem.wiki.gg/wiki/Archmage_(ToS2)). Context and cautions: [role dossier](../research/roles/archmage.md).

## Hex Master

**Fields:** Hex/book target; applied/failed; private hex set; transformation/end condition note.

```text
Hex Master
N1: Hex 4 — [outcome]
```

**Rules:** Private template; book changes movement. Do not copy private hex progress into a cover will.

Mechanics: [Hex Master](https://townofsalem.wiki.gg/wiki/Hex_Master_(ToS2)). Context and cautions: [role dossier](../research/roles/hex-master.md).

## Witch

**Fields:** Controlled player; directed destination; actual role/feedback learned; success/failure; book.

```text
Witch
N1: Control 4 -> 9 — [feedback]
```

**Rules:** Two selected numbers are not two personal visible visits. Keep real feedback private from cover exports.

Mechanics: [Witch](https://townofsalem.wiki.gg/wiki/Witch_(ToS2)). Context and cautions: [role dossier](../research/roles/witch.md).

## Conjurer

**Fields:** D meteor target/outcome; N book target; charge.

```text
Conjurer
D2: Meteor 9 — [outcome]
```

**Rules:** One later-day meteor; not a Deputy shot. Private actual-role template.

Mechanics: [Conjurer](https://townofsalem.wiki.gg/wiki/Conjurer_(ToS2)). Context and cautions: [role dossier](../research/roles/conjurer.md).

## Ritualist

**Fields:** Eligible target; role guess; success/no feedback/failure; remaining attempts; or book.

```text
Ritualist
N2: Ritual 9 as [role] — [outcome]
```

**Rules:** Two attempts, not three. Do not create a claimed public exposure message for a wrong guess. Private.

Mechanics: [Ritualist](https://townofsalem.wiki.gg/wiki/Ritualist_(ToS2)). Context and cautions: [role dossier](../research/roles/ritualist.md).

## Jinx

**Fields:** Jinx target; visitor-attack feedback; book direct attack; any known identities.

```text
Jinx
N1: Jinx 4 — [feedback]
```

**Rules:** Private. Do not assume complete visitor list or pretend your target received protection.

Mechanics: [Jinx](https://townofsalem.wiki.gg/wiki/Jinx_(ToS2)). Context and cautions: [role dossier](../research/roles/jinx.md).

## Dreamweaver

**Fields:** Target; Dreamwoven/cured/Insomniac; book action; state history.

```text
Dreamweaver
N1: Dreamweave 4 — [outcome]
```

**Rules:** Private. State changes across nights; no old insanity movement template.

Mechanics: [Dreamweaver](https://townofsalem.wiki.gg/wiki/Dreamweaver_(ToS2)). Context and cautions: [role dossier](../research/roles/dreamweaver.md).

## Enchanter

**Fields:** Enchant target; optional Alterate role/faction/will; charge outcome; book.

```text
Enchanter
N1: Enchant 4; Alterate [role/faction] — [outcome]
```

**Rules:** Private. Separate the victim’s fabricated public text from your real action notes; no auto-copy of secret notes.

Mechanics: [Enchanter](https://townofsalem.wiki.gg/wiki/Enchanter_(ToS2)). Context and cautions: [role dossier](../research/roles/enchanter.md).

## Illusionist

**Fields:** Illusion target / Phantasm / book attack; separate Disguise role/faction.

```text
Illusionist
N1: Illusion [ally]
Disguise: [role/faction]
```

**Rules:** Private. Do not model ordinary Illusion and book attack as simultaneous. Phantasm has one charge.

Mechanics: [Illusionist](https://townofsalem.wiki.gg/wiki/Illusionist_(ToS2)). Context and cautions: [role dossier](../research/roles/illusionist.md).

## Medusa

**Fields:** Stone target; applied/failed; private marks; book action; charges.

```text
Medusa
N1: Stone 4 — [outcome]
```

**Rules:** Private. Three active-use charges; initial self-Stone is not a fourth selected target.

Mechanics: [Medusa](https://townofsalem.wiki.gg/wiki/Medusa_(ToS2)). Context and cautions: [role dossier](../research/roles/medusa.md).

## Necromancer

**Fields:** Corpse; role; destination; borrowed result; corpse-use counts; or book attack.

```text
Necromancer
N2: Dead Sheriff 6 -> 9 — [feedback]
```

**Rules:** Private. Evil corpses have use limits; normal reanimation and book attack are alternatives. Cover Ret drafts stay separate.

Mechanics: [Necromancer](https://townofsalem.wiki.gg/wiki/Necromancer_(ToS2)). Context and cautions: [role dossier](../research/roles/necromancer.md).

## Poisoner

**Fields:** Drink / Smog / book attack; target; block/obstacle feedback; Hangover.

```text
Poisoner
N1: Drink 4 — [feedback]
N2: Smog 9 — [feedback]
```

**Rules:** Private. Smog and Drink are different actions; no ordinary Smog plus book attack.

Mechanics: [Poisoner](https://townofsalem.wiki.gg/wiki/Poisoner_(ToS2)). Context and cautions: [role dossier](../research/roles/poisoner.md).

## Potion Master

**Fields:** Barrier / Reveal / Harmful potion; target; actual feedback; book state.

```text
Potion Master
N1: Reveal 4 — [role]
N2: Barrier [ally] — [feedback]
```

**Rules:** Private. Each night selects a mode; role knowledge does not automatically generate a Sheriff or Investigator result.

Mechanics: [Potion Master](https://townofsalem.wiki.gg/wiki/Potion_Master_(ToS2)). Context and cautions: [role dossier](../research/roles/potion-master.md).

## Voodoo Master

**Fields:** Silence / Deafen / Blind; target; book action; actual feedback.

```text
Voodoo Master
N1: Blind 4 — [outcome]
```

**Rules:** Private. No consecutive same player even when changing doll type.

Mechanics: [Voodoo Master](https://townofsalem.wiki.gg/wiki/Voodoo_Master_(ToS2)). Context and cautions: [role dossier](../research/roles/voodoo-master.md).

## Wildling

**Fields:** Sense target; destination list; visitor list; whisper-derived notes; book.

```text
Wildling
N1: Sense 4 — visits 9; visited by 7
```

**Rules:** Private. Tracker export may use only destinations, Lookout only visitors. Never copy whispers or actual role automatically.

Mechanics: [Wildling](https://townofsalem.wiki.gg/wiki/Wildling_(ToS2)). Context and cautions: [role dossier](../research/roles/wildling.md).

## Covenite

**Fields:** Book target/outcome; optional team notes.

```text
Covenite
N1: Book attack 4 — [outcome]
```

**Rules:** Private. No invented special ability; without book use an inactive/no-role-action state.

Mechanics: [Covenite](https://townofsalem.wiki.gg/wiki/Covenite_(ToS2)). Context and cautions: [role dossier](../research/roles/covenite.md).

## Cultist

**Fields:** D Indoctrinate target/outcome; retained role; faction change; book.

```text
Cultist
D2: Indoctrinate 4 — [outcome]
```

**Rules:** Private. One conversion. Distinguish role from new faction.

Mechanics: [Cultist](https://townofsalem.wiki.gg/wiki/Cultist_(ToS2)). Context and cautions: [role dossier](../research/roles/cultist.md).

## Baker

**Fields:** Feed target; current living Bread recipients; failed attempt; Famine transition and Starve.

```text
Baker
N1: Feed 4
D4: Became Famine
N4: Starve 7
```

**Rules:** Private. Default threshold tracks three other living recipients; preserve reduced-population exceptions without guessing a simulation.

Mechanics: [Baker](https://townofsalem.wiki.gg/wiki/Baker_(ToS2)). Context and cautions: [role dossier](../research/roles/baker.md).

## Berserker

**Fields:** Attack target(s); kills; progression; War transition; rampage outcome.

```text
Berserker
N2: Attack 4 — [outcome]
D5: Became War
```

**Rules:** Private. No normal N1 attack; actual kills drive state. War permits two Rampage targets.

Mechanics: [Berserker](https://townofsalem.wiki.gg/wiki/Berserker_(ToS2)). Context and cautions: [role dossier](../research/roles/berserker.md).

## Plaguebearer

**Fields:** Infect target; seeded infections; new propagation; Pestilence transition; stacks.

```text
Plaguebearer
Seeded: [neighbors]
N1: Infect 4 — [spread]
```

**Rules:** Private. Seeded neighbors are not N1 visits. Infection evidence must not silently become an exhaustive cover result.

Mechanics: [Plaguebearer](https://townofsalem.wiki.gg/wiki/Plaguebearer_(ToS2)). Context and cautions: [role dossier](../research/roles/plaguebearer.md).

## Soul Collector

**Fields:** Reap target; passive souls; reaped deaths; total; Death transition.

```text
Soul Collector
N1: Reap 4; souls [total]
D5: Became Death
```

**Rules:** Private. Use supplied actual progress; no auto-export of soul history to a cover claim.

Mechanics: [Soul Collector](https://townofsalem.wiki.gg/wiki/Soul_Collector_(ToS2)). Context and cautions: [role dossier](../research/roles/soul-collector.md).

## Doomsayer

**Fields:** Three target/guess pairs; confirmed/failed; doomed result; future effect timing.

```text
Doomsayer
N2: 4=[guess]; 7=[guess]; 9=[guess] — [outcome]
```

**Rules:** Private. All three must be confirmed; no N1 confirmation; TI excluded. Outlier selector conflict is in uncertainty register.

Mechanics: [Doomsayer](https://townofsalem.wiki.gg/wiki/Doomsayer_(ToS2)). Context and cautions: [role dossier](../research/roles/doomsayer.md).

## Executioner

**Fields:** Assigned target; pressure notes; hanging/other death; Jester transition.

```text
Executioner
Target: 4
D3: Target died at night; became Jester
```

**Rules:** Private. Day execution route and survival matter; after transition use Jester constraints.

Mechanics: [Executioner](https://townofsalem.wiki.gg/wiki/Executioner_(ToS2)). Context and cautions: [role dossier](../research/roles/executioner.md).

## Jester

**Fields:** Daily Chatterbox requirement/progress; actual hanging; eligible Haunt target/outcome.

```text
Jester
D2: Chatterbox [complete]
N2: Haunt 9 — [outcome]
```

**Rules:** Private. No fake game result from quota completion; voice-mode steps excluded.

Mechanics: [Jester](https://townofsalem.wiki.gg/wiki/Jester_(ToS2)). Context and cautions: [role dossier](../research/roles/jester.md).

## Pirate

**Fields:** Target-role clues; Scour target/status; Plunder target/outcome; Landlubber deaths.

```text
Pirate
N1: Scour 4 — [status]
N2: Plunder 4 — [outcome]
```

**Rules:** Private. Three Plunders, no N1 Plunder. No duel selections; non-target kill disables further Plunders.

Mechanics: [Pirate](https://townofsalem.wiki.gg/wiki/Pirate_(ToS2)). Context and cautions: [role dossier](../research/roles/pirate.md).

## Arsonist

**Fields:** Douse target; passive douse events; own doused status; Clean / Ignite.

```text
Arsonist
N1: Douse 4; passive [players]
N2: Ignite — [outcome]
```

**Rules:** Private. Direct and passive douses differ. Do not auto-write a Lookout will from visitors to self.

Mechanics: [Arsonist](https://townofsalem.wiki.gg/wiki/Arsonist_(ToS2)). Context and cautions: [role dossier](../research/roles/arsonist.md).

## Serial Killer

**Fields:** Attack target; Cautious toggle; retaliation; actual Bloodlust state.

```text
Serial Killer
N1: Attack 4; Cautious on — [outcome]
```

**Rules:** Private. Preserve actual progress rather than assuming every attempt kills; special retaliation is not modeled as a normal basic shot.

Mechanics: [Serial Killer](https://townofsalem.wiki.gg/wiki/Serial_Killer_(ToS2)). Context and cautions: [role dossier](../research/roles/serial-killer.md).

## Shroud

**Fields:** Direct Attack / Shroud; selected player; inferred/result victims; actual feedback.

```text
Shroud
N1: Shroud 4 — [actual outcome]
```

**Rules:** Private. Fallback attack and inconsistent visibility remain explicit; no invented full destination list.

Mechanics: [Shroud](https://townofsalem.wiki.gg/wiki/Shroud_(ToS2)). Context and cautions: [role dossier](../research/roles/shroud.md).

## Werewolf

**Fields:** Scent target(s); persistent results; Full Moon attack target; rampage victims.

```text
Werewolf
N1: Scent 4
N2: Attack 9; scent 4 -> 7
```

**Rules:** Private. Persistent tracked player and actual attack destination are distinct. Follow the client’s Full Moon state.

Mechanics: [Werewolf](https://townofsalem.wiki.gg/wiki/Werewolf_(ToS2)). Context and cautions: [role dossier](../research/roles/werewolf.md).

## Cursed Soul

**Fields:** Current faction; intended swap; actual swap outcome; old/new roles.

```text
Cursed Soul
N1: Intended swap 4; acquired [role]; faction [unchanged]
```

**Rules:** Private. Record actual rather than assumed target. Preserve role history and open new role fields without replacing faction.

Mechanics: [Cursed Soul](https://townofsalem.wiki.gg/wiki/Cursed_Soul_(ToS2)). Context and cautions: [role dossier](../research/roles/cursed-soul.md).

## Vampire

**Fields:** Drain / Convert; target; outcome; charges; known converted roles; succession.

```text
Vampire
N1: Convert 4 — [outcome]
```

**Rules:** Private. Failed conversion may become Drain. Roles and faction are separate; remaining charges survive succession.

Mechanics: [Vampire](https://townofsalem.wiki.gg/wiki/Vampire_(ToS2)). Context and cautions: [role dossier](../research/roles/vampire.md).
