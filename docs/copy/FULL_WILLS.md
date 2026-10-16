# Full wills through N7

Updated 16 October 2026. The app now has **64 separate example wills and 64 separate blank wills**. Canonical content: [will-examples.json](../../site/content/will-examples.json). These are authored formatting examples, not literal client messages or a prescribed sequence of actions.

## Placement and copy behavior

- All 29 selectable Town claims use the selected role heading in the main Example will section, with separate Copy blank will and Copy example controls. Choosing a different actual role cannot insert private history into these copies.
- All 64 Role guides have a Full will - N1-N7 section. The 35 non-Town/state histories are explicitly labeled private; their copy actions do not change the public claim.
- The blank preview stays collapsed while its copy button remains available in one click. A denied clipboard reveals and selects the requested format without replacing the example.
- The existing single-line Blank chat format remains separate. No exhaustive list of per-outcome chat cards was added.
- Both formats include the role title and N1 through N7 exactly once. Day actions keep D labels. Fixed no-night-ability lines are appropriate for day-only roles.
- Examples mix distinct common outcomes while preserving prerequisites, charges, used targets and role changes. Mutually exclusive single-use outcomes are explained as alternatives, rather than shown as extra uses.
- A known death or game end stops actions: later slots say Not reached where appropriate. Blank slots remain prompts and should be filled only for nights actually reached.
- Player placeholders retain @ reminders; authored wills use ASCII dashes. Literal game-message cards retain their separately verified wording.

## Cleric before and after

Before: two target-only lines starting on N2, with a short generic blank format.

After:

```text
Cleric
N1: No Barrier - Grace Period
N2: Barrier @4 - no attack feedback
N3: Barrier @7 - attack reported on @7
N4: Tried Barrier @9 - roleblocked; no protection
N5: Barrier @11 - attack reported; target died to an Unstoppable attack
N6: Self Barrier - attacked and protected; self use spent
N7: Tried Barrier @12 - Unknown Obstacle; no protection
```

The full blank will has its own role heading, a conditional N1 restriction slot and N2-N7 action/feedback prompts. The quiet one-line report remains in Claim details.

Benefit: the example distinguishes quiet, attacked, blocked, dead-target, self-protection and obstacle outcomes. The blank will supplies an editable seven-night structure without copying fictional targets or results.

## Role-by-role coverage

Every row has an example and a blank will, with seven night slots. Evidence is the already reviewed role research, feedback library and linked role source; the sequences are editorial examples.

| Role/state | Copy scope | Important case or limit |
| --- | --- | --- |
| [Jailor](https://townofsalem.wiki.gg/wiki/Jailor_(ToS2)) | Selected Town claim | There is no N1 execution. The three selected executions here are separate from their outcomes; the Town execution ends further abilities. A survived attempt is not a release. |
| [Marshal](https://townofsalem.wiki.gg/wiki/Marshal_(ToS2)) | Selected Town claim | Tribunals are public day events, at most one per day and two total in this baseline. List actual executions without treating the event as an alignment check. |
| [Mayor](https://townofsalem.wiki.gg/wiki/Mayor_(ToS2)) | Selected Town claim | Reveal is a one-time public day action. Later votes are observations, not fresh Reveal uses or night investigations. |
| [Monarch](https://townofsalem.wiki.gg/wiki/Monarch_(ToS2)) | Selected Town claim | A failed Knight is another possible branch: preserve the actual feedback and charge state. Do not assume a selected target was knighted or that its allegiance is Town. |
| [Prosecutor](https://townofsalem.wiki.gg/wiki/Prosecutor_(ToS2)) | Selected Town claim | Prosecutions must match public day events. At most one per day; a Town prosecution removes the remaining ability. |
| [Coroner](https://townofsalem.wiki.gg/wiki/Coroner_(ToS2)) | Selected Town claim | Autopsies accumulate. Matching uses your collected killer records; no match is not a Town clear. |
| [Investigator](https://townofsalem.wiki.gg/wiki/Investigator_(ToS2)) | Selected Town claim | Completed outcomes, a held action and actual failures stay distinct. |
| [Lookout](https://townofsalem.wiki.gg/wiki/Lookout_(ToS2)) | Selected Town claim | No visible visitors is a completed observation; it excludes astral traffic. A prevented Watch gives no list. |
| [Psychic](https://townofsalem.wiki.gg/wiki/Psychic_(ToS2)) | Selected Town claim | Odd nights use a Good pair; even nights use an Evil trio. A prevented vision has no group. Late-game special feedback should be copied as received. |
| [Seer](https://townofsalem.wiki.gg/wiki/Seer_(ToS2)) | Selected Town claim | Each illustrated attempted pair uses fresh numbers. Follow the live client restrictions; a failed comparison is neither Friends nor Enemies. |
| [Sheriff](https://townofsalem.wiki.gg/wiki/Sheriff_(ToS2)) | Selected Town claim | Completed outcomes, a held action and actual failures stay distinct. |
| [Spy](https://townofsalem.wiki.gg/wiki/Spy_(ToS2)) | Selected Town claim | Later triggers can come from old Bugs. The house number names the bugged resident, not the evil visitor. |
| [Tracker](https://townofsalem.wiki.gg/wiki/Tracker_(ToS2)) | Selected Town claim | Completed outcomes, a held action and actual failures stay distinct. |
| [Bodyguard](https://townofsalem.wiki.gg/wiki/Bodyguard_(ToS2)) | Selected Town claim | A fatal interception ends your entries. A surviving interception requires real supporting survival/protection feedback; it is not guaranteed by selecting Guard. |
| [Cleric](https://townofsalem.wiki.gg/wiki/Cleric_(ToS2)) | Selected Town claim | Quiet Self Barrier is another possible outcome and still spends the only self use. Attack feedback alone does not prove your Barrier stopped the attack. |
| [Crusader](https://townofsalem.wiki.gg/wiki/Crusader_(ToS2)) | Selected Town claim | Protection and visitor attacks are separate notices. Neither the visitor identity nor a kill is supplied by the attack notice. |
| [Oracle](https://townofsalem.wiki.gg/wiki/Oracle_(ToS2)) | Selected Town claim | The Aegis notice does not identify a player or protected role. Rotate consecutive role choices; Oracle is a once-only self-role choice. Visits are astral. |
| [Trapper](https://townofsalem.wiki.gg/wiki/Trapper_(ToS2)) | Selected Town claim | A triggered Trap needs a build night before another placement. A failed build stays unready; a failed placement establishes no new trapped house. |
| [Deputy](https://townofsalem.wiki.gg/wiki/Deputy_(ToS2)) | Selected Town claim | Alternative for the same single shot: a hit records the actual public outcome. A miss is private and still spends it; these cannot be two shots in one ordinary game. |
| [Trickster](https://townofsalem.wiki.gg/wiki/Trickster_(ToS2)) | Selected Town claim | Other possible outcomes include a lethal Unleash or a shattered Mirror. Use only the reported attacker role, and never add a Mirror while an absorbed attack is still stored. |
| [Veteran](https://townofsalem.wiki.gg/wiki/Veteran_(ToS2)) | Selected Town claim | A shot count supplies neither identities nor a guaranteed kill count. Preserve an interrupted Alert instead of inventing shots or guessing whether its charge was spent. |
| [Vigilante](https://townofsalem.wiki.gg/wiki/Vigilante_(ToS2)) | Selected Town claim | Load and Shoot use separate nights. Failed loading does not supply a bullet; a Town-hit penalty ends further shooting. |
| [Admirer](https://townofsalem.wiki.gg/wiki/Admirer_(ToS2)) | Selected Town claim | Care unlocks after finding the Obsession. A quiet Care still spends a use. An Obsession dying before discovery is a different case from dying after discovery. |
| [Amnesiac](https://townofsalem.wiki.gg/wiki/Amnesiac_(ToS2)) | Selected Town claim | This branch remembers Sheriff once. If you remember another role, use that role's actions from the transition onward; do not continue an Amnesiac night power. |
| [Retributionist](https://townofsalem.wiki.gg/wiki/Retributionist_(ToS2)) | Selected Town claim | The sample requires those legal Town corpses. You visit the corpse; the raised body visits its destination. You are roleblock/control immune, and cannot use normal self-protection. |
| [Socialite](https://townofsalem.wiki.gg/wiki/Socialite_(ToS2)) | Selected Town claim | No consecutive repeat house; only two manual invitations, at most one per day. The role is roleblock/control immune; an obstacle is a different failure. |
| [Tavern Keeper](https://townofsalem.wiki.gg/wiki/Tavern_Keeper_(ToS2)) | Selected Town claim | A completed visit does not identify a killer. Rotate targets after successful blocks because of Hangover. Serial Killer retaliation is a dangerous separate outcome. |
| [Catalyst](https://townofsalem.wiki.gg/wiki/Catalyst_(ToS2)) | Selected Town claim | Applying Overcharge and receiving a report of extra actions are different evidence. Do not promise a universal same-night effect. |
| [Pilgrim](https://townofsalem.wiki.gg/wiki/Pilgrim_(ToS2)) | Selected Town claim | Day notes are observations and reasoning, not role results. |
| [Archmage](https://townofsalem.wiki.gg/wiki/Archmage_(ToS2)) | Private actual history | Retrain and book attacks are alternative actions. Check availability and the recipient role card; an accepted role change is not an investigative reveal. |
| [Hex Master](https://townofsalem.wiki.gg/wiki/Hex_Master_(ToS2)) | Private actual history | A placed Hex, book attack and final Hex Bomb are different events. Do not mark a failed selection as a completed Hex or promise a Bomb before its conditions hold. |
| [Witch](https://townofsalem.wiki.gg/wiki/Witch_(ToS2)) | Private actual history | Revealed roles become Coven knowledge. Borrowed result feedback belongs to Witch. Only the first player is your ordinary visit; the second is the directed destination. |
| [Conjurer](https://townofsalem.wiki.gg/wiki/Conjurer_(ToS2)) | Private actual history | Alternative Meteor outcome: target survives a defended attack; the single day use is still spent. Meteor and a later book attack are separate abilities. |
| [Ritualist](https://townofsalem.wiki.gg/wiki/Ritualist_(ToS2)) | Private actual history | A wrong guess can be silent and still spend an attempt. Do not guess TIs or Illuminated players. A correct guess does not defeat Invincible Defense. |
| [Jinx](https://townofsalem.wiki.gg/wiki/Jinx_(ToS2)) | Private actual history | A visitor who survives can know you are Jinx. The notice names your identity and the house; it does not give you a full visitor list. |
| [Dreamweaver](https://townofsalem.wiki.gg/wiki/Dreamweaver_(ToS2)) | Private actual history | Applied Dreamweave is not immediate Insomnia. Label a victim's report as their report; do not invent private state feedback. Death/retraining can clear effects. |
| [Enchanter](https://townofsalem.wiki.gg/wiki/Enchanter_(ToS2)) | Private actual history | Alterate requires the death timing to match; a surviving target does not establish a successful forgery. Keep the replacement will and two-use count privately. |
| [Illusionist](https://townofsalem.wiki.gg/wiki/Illusionist_(ToS2)) | Private actual history | Disguise changes shown death information. Illusion and Phantasm do not give real Town abilities or a universal investigator-proof result. |
| [Medusa](https://townofsalem.wiki.gg/wiki/Medusa_(ToS2)) | Private actual history | The example spends three ordinary Stone charges. For a failed Stone, preserve actual charge feedback. Stoned is a persistent mark and grants no protection. |
| [Necromancer](https://townofsalem.wiki.gg/wiki/Necromancer_(ToS2)) | Private actual history | The example requires those eligible corpses. Each suitable evil corpse has one use; Town corpses differ. Roleblock immunity does not remove corpse/destination restrictions. |
| [Poisoner](https://townofsalem.wiki.gg/wiki/Poisoner_(ToS2)) | Private actual history | Drink, Smog and book attack modes must stay distinct. Smog cannot accompany the normal book attack. You are roleblock immune; Smog feedback is not a Socialite quote. |
| [Potion Master](https://townofsalem.wiki.gg/wiki/Potion_Master_(ToS2)) | Private actual history | Reveal clues and Barrier attack feedback are different modes. Self Heal is unavailable in a 1v1; ordinary Quiet Barrier is not a save. |
| [Voodoo Master](https://townofsalem.wiki.gg/wiki/Voodoo_Master_(ToS2)) | Private actual history | Do not repeat a target on consecutive nights, even when changing doll. A missing victim report is not itself proof of failure. |
| [Wildling](https://townofsalem.wiki.gg/wiki/Wildling_(ToS2)) | Private actual history | Outgoing destinations and incoming visitors are different lists. Keep overheard text whispers separate from night information; astral travel is absent. |
| [Covenite](https://townofsalem.wiki.gg/wiki/Covenite_(ToS2)) | Private actual history | Without the book there is no special Covenite action. Team information is not a private investigation. |
| [Cultist](https://townofsalem.wiki.gg/wiki/Cultist_(ToS2)) | Private actual history | Indoctrinate is a single day ability. Record faction change separately from retained role. A failed conversion must not be logged as a recruited teammate. |
| [Baker](https://townofsalem.wiki.gg/wiki/Baker_(ToS2)) | Private actual history | Transformation depends on living Bread recipients, with a reduced-population exception. Feed becomes Starve only after the role actually changes. |
| [Berserker](https://townofsalem.wiki.gg/wiki/Berserker_(ToS2)) | Private actual history | Count actual kills, not attempts. War is a new state with different targeting; preserve the transition day. |
| [Plaguebearer](https://townofsalem.wiki.gg/wiki/Plaguebearer_(ToS2)) | Private actual history | This branch assumes all other living opponents became infected through contact by N4. Do not infer that four chosen targets alone complete infection. |
| [Soul Collector](https://townofsalem.wiki.gg/wiki/Soul_Collector_(ToS2)) | Private actual history | The soul totals are one illustrative branch, not a promised schedule. Use the actual client counter. Death ends Reap; never invent nights after the game ends. |
| [Doomsayer](https://townofsalem.wiki.gg/wiki/Doomsayer_(ToS2)) | Private actual history | A failed set does not identify the wrong guess. Success does not mean the three victims die immediately that same night; follow the actual Doom timing. |
| [Executioner](https://townofsalem.wiki.gg/wiki/Executioner_(ToS2)) | Private actual history | This branch fails the original hanging objective and becomes Jester. The alternative Executioner win requires the assigned target to be hanged while you are alive. |
| [Jester](https://townofsalem.wiki.gg/wiki/Jester_(ToS2)) | Private actual history | Revenge depends on the qualifying hanging and the actual Chatterbox state for that day. A night death or failed quota is a separate branch. |
| [Pirate](https://townofsalem.wiki.gg/wiki/Pirate_(ToS2)) | Private actual history | Scour and Plunder are different actions. A non-Landlubber kill removes remaining Plunders. Assigned target deaths from others can also advance the objective; there are no duels. |
| [Arsonist](https://townofsalem.wiki.gg/wiki/Arsonist_(ToS2)) | Private actual history | Ignite may leave some Doused players alive. Record the actual remaining markers; do not treat passive visitors as destinations you visited. |
| [Serial Killer](https://townofsalem.wiki.gg/wiki/Serial_Killer_(ToS2)) | Private actual history | Roleblock immunity does not bypass obstacles. Retaliation and Bloodlust progression must use the real feedback rather than an assumed selected-target kill. |
| [Shroud](https://townofsalem.wiki.gg/wiki/Shroud_(ToS2)) | Private actual history | Only record destination information actually supplied. Shrouding someone does not prove they willingly attacked; fallback is a different route. |
| [Werewolf](https://townofsalem.wiki.gg/wiki/Werewolf_(ToS2)) | Private actual history | Baseline Full Moons are N2, N4 and every night thereafter. Persistent scent feedback does not mean you revisited that player. |
| [Cursed Soul](https://townofsalem.wiki.gg/wiki/Cursed_Soul_(ToS2)) | Private actual history | This branch swaps into Sheriff only once. Keep faction and role history separate. If the acquired role differs, use that role's legal actions after the swap. |
| [Vampire](https://townofsalem.wiki.gg/wiki/Vampire_(ToS2)) | Private actual history | Convert can become Drain on an ineligible/defended target. Do not infer recruitment from survival or assume the resulting role changed. |
| [Famine](https://townofsalem.wiki.gg/wiki/Baker_(ToS2)) | Private actual history | The example assumes the game continues. Earlier Feed lines belong to Baker; Famine uses Starve, and no immediate death is promised. |
| [War](https://townofsalem.wiki.gg/wiki/Berserker_(ToS2)) | Private actual history | Transformation follows actual kill progression. Up to two distinct Rampage houses after becoming War; no invented pre-transformation two-target attack. |
| [Pestilence](https://townofsalem.wiki.gg/wiki/Plaguebearer_(ToS2)) | Private actual history | This branch needs sufficient actual contact spread before D4. Post-transformation stacks are different from earlier infections; there is no old ToS1 passive Rampage to invent. |
| [Death](https://townofsalem.wiki.gg/wiki/Soul_Collector_(ToS2)) | Private actual history | These N1-N5 entries belong to the former Soul Collector. Death has no ordinary Reap. N6/N7 are explicitly unreached, not extra post-victory actions. |

## Verification

`npm test` checks seven-night coverage, headings, empty target placeholders, public/private scope, protective N1 holds, charges, prerequisites, day-only actions and transitions. `tests/wills-browser.mjs` checks all 64 guide histories and all 29 selected claims at desktop/mobile widths, exact clipboard contents, comparison isolation, manual-copy fallbacks and optional axe checks.

Validated: 57 unit tests; 374 exact will clipboard copies; 186 public/private scope checks; 128 desktop/mobile guide layouts; eight will-dialog accessibility states; three manual-copy fallbacks; 129 general browser checks; and the whole-site audit of 512 layout states, 56 accessibility states and 149 regressions. No runtime errors or automated accessibility violations were detected. Native game paste/length limits and live-match trigger testing remain outside these browser checks.
