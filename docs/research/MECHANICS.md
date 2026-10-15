# Shared mechanics and beginner reasoning

Research date: 2026-10-15. Advice assumes vanilla **text chat and normal factions**, unless a setup exception is stated. This is a researched explanation, not a live match engine. Sources are linked beside mechanical statements; recommendations and examples are editorial inferences.

## 1. Keep four different questions separate

| Question | Example | Beginner consequence |
| --- | --- | --- |
| What role is this? | Tracker | Describes abilities, not necessarily current allies |
| What faction is this player on? | Town or Coven | Describes who they need to win with |
| What did this ability observe? | A visible visit to #9 | Is narrower than knowing the visitor's role or motive |
| What should we do with it? | Ask the visitor for their action history | Is a recommendation, not a game result |

Flexible Factions can assign many roles to a different starting faction. Conversion and role swapping create further distinctions. Therefore “has a Town role” and “is currently Town” are different claims. [Official Flexible Factions update](https://www.townofsalem.io/town-of-salem-2-flexible-factions-update-patch-notes-r1-5-11/).

**Product implication:** store `roleId`, `faction`, and `rulesetContext` independently. Label all default advice. Do not require a beginner to configure a custom lobby merely to read a normal-role guide.

## 2. Observation is narrower than interpretation

Use these evidence labels throughout the app:

- **Observed:** a result the user says the game reported. It has not been independently verified by Salem Sidekick.
- **Lead:** a possibility worth checking, such as a visit to a player who died.
- **Conditional contradiction:** two statements cannot both be true under the stated assumptions.
- **Ability demonstrated:** the game visibly produced an ability effect; this still needs faction/setup context.
- **Social read:** judgment about behavior, separate from a mechanical result.
- **Unresolved interaction:** source conflict or insufficient evidence; never an automatic accusation.

A contradiction between A's will and B's claimed tracking result establishes a conflict, not which player is lying. A result can be misreported by an evil pretending to hold the investigative role. The site must always distinguish actual feedback from another player's claim about feedback.

## 3. Visits and their limits

A normal visit can be seen by visit observers and can interact with visitor hazards. An astral action bypasses visit-dependent detection and many visitor hazards. A harmful visit triggers specific protective interception; it is a different property from whether the visit is visible. [Visit and astral definitions](https://townofsalem.wiki.gg/wiki/Keywords_(ToS2)#Visit).

**Consequences for reasoning:**

- “No visible visit” is not “no action.” Record the observed category literally.
- A visible visit does not tell you whether the visitor attacked, investigated, protected, or used a disruptive ability.
- A Tracker follows a selected player's destinations; a Lookout watches a selected house's visitors. Reversing those directions breaks a will.
- Admirer's Bestow can make another player's visits astral; a role's usual movement is not a universal promise. [Admirer mechanics](https://townofsalem.wiki.gg/wiki/Admirer_(ToS2)).
- Seer normally selects two living targets; Catalyst and transformed War supply important exceptions to simplistic “two visits confirms Seer” advice. [Seer](https://townofsalem.wiki.gg/wiki/Seer_(ToS2)), [Catalyst](https://townofsalem.wiki.gg/wiki/Catalyst_(ToS2)).

**Recommended question:** “What did you attempt, who did you target, and were you blocked or made astral?” This is more useful than immediately demanding a guilty vote.

## 4. Interpret investigative information precisely

| Role | Safe interpretation | Unsafe shortcut | Next useful question |
| --- | --- | --- | --- |
| Sheriff | Target appeared innocent or suspicious to this check | Innocent proves Town; suspicious proves Coven | What exceptions or framing are plausible here? |
| Investigator | Murder concerns an attack that night; Trespassing concerns opposing-faction visiting history | Crime proves evil; no crime clears the player | Who did they visit, and what attack could explain this? |
| Tracker | Target had the visible destination(s) reported | Visiting a death proves they killed it | Does their claimed action match that destination? |
| Lookout | These visible players visited a house | Every visitor is evil, or the list includes astral visitors | Which visitor can explain each reported effect? |
| Psychic | At least one member of the vision meets its Good/Evil condition | Exactly one is evil; the selected target must be evil | Which members are independently established, and could results be altered? |
| Seer | The pair appeared friendly or enemies | Friends means both Town; enemies identifies the guilty one | What do we independently know about either side? |
| Spy | A persistent bug reported particular evil activity | This is ToS1's global Coven-visit log or the old event-bug model | On which bugged player, on which night, and what role triggered it? |
| Coroner | Autopsy builds killer records; Examine tests a player against those records | Every negative is a global clear | Which autopsies had already been collected? |

Role sources: [Sheriff](https://townofsalem.wiki.gg/wiki/Sheriff_(ToS2)), [Investigator](https://townofsalem.wiki.gg/wiki/Investigator_(ToS2)), [Tracker](https://townofsalem.wiki.gg/wiki/Tracker_(ToS2)), [Lookout](https://townofsalem.wiki.gg/wiki/Lookout_(ToS2)), [Psychic](https://townofsalem.wiki.gg/wiki/Psychic_(ToS2)), [Seer](https://townofsalem.wiki.gg/wiki/Seer_(ToS2)), [Spy](https://townofsalem.wiki.gg/wiki/Spy_(ToS2)), [Coroner](https://townofsalem.wiki.gg/wiki/Coroner_(ToS2)).

Psychic's current baseline is **odd night = two-player Good vision; even night = three-player Evil vision**. Include the chosen target in the correct vision. Seer comparisons have reuse and revealed-player restrictions. Neither role should have an unconstrained number-list template.

## 5. Claiming and sharing information

VFA means Vote for Alignment: players request a category such as Town Protective, rather than immediately demanding the exact role. This reduces information given to role guessers. Ritualist and Doomsayer cannot normally guess Town Investigative roles; other dangers, including ordinary attacks and disruptive abilities, still apply. [Alignments](https://townofsalem.wiki.gg/wiki/Alignment_(ToS2)), [Ritualist](https://townofsalem.wiki.gg/wiki/Ritualist_(ToS2)), [Doomsayer](https://townofsalem.wiki.gg/wiki/Doomsayer_(ToS2)).

Recommended beginner defaults:

| Situation | Default communication |
| --- | --- |
| Actual TI with results | Identify your exact role and publish useful results promptly, normally from D2 |
| TI with no usable result | State the actual attempt and failure/no-result state; never fabricate a positive result |
| Actual TP/TK/TS under VFA | Give alignment; reveal more when it resolves a contradiction or enables cooperation |
| Actual TPow | Consider exposure and timing; reveal when its benefit justifies it or credibility requires it |
| Evil maintaining a cover | Select a legal role you understand, record consistent actions, and anticipate demonstrations |
| Neutral Evil | Work toward the role's specific goal; survival alone is not a universal win condition |

“Whisper confirmed Town” requires context. A persuasive claimant is not mechanically established. Conversion-enabled games can change allegiance; Wildling hears text whispers. Private communication is not automatically private from every opponent. [Wildling](https://townofsalem.wiki.gg/wiki/Wildling_(ToS2)), [Cultist](https://townofsalem.wiki.gg/wiki/Cultist_(ToS2)), [Vampire](https://townofsalem.wiki.gg/wiki/Vampire_(ToS2)).

## 6. Attack, protection, and target survival

Basic, Powerful, and Unstoppable attacks interact with distinct defense levels. Factional defense can depend on the faction, number of allies, or game day. A failed attack is therefore not a unique role identification. Guard, Trap, Magic Mirror, Barrier, and Fortify have different behavior; protection is not one interchangeable mechanic. [Attributes](https://townofsalem.wiki.gg/wiki/Attributes_(ToS2)), [Bodyguard](https://townofsalem.wiki.gg/wiki/Bodyguard_(ToS2)), [Trapper](https://townofsalem.wiki.gg/wiki/Trapper_(ToS2)), [Trickster](https://townofsalem.wiki.gg/wiki/Trickster_(ToS2)).

Recommendations:

- Prioritize the ally whose likely loss is most costly, considering attack likelihood and what your ability actually stops.
- Early useful TI claims can be good protection candidates. Later, known high-impact roles and vulnerable protectors may matter more.
- Do not order every protector onto the same obvious target without considering visitor hazards, overlapping protection, and rampages.
- A protected player's death is a reason to investigate the protection claim, not automatic proof of a lie: multiple attacks, bypasses, or stronger attacks may matter.
- A survivor claiming “attacked” might be reporting a real attack, deception, or a lie. Record the claim separately from corroborating evidence.

## 7. Blocks, redirection, and phase distinctions

A roleblock prevents an eligible action; an Unknown Obstacle blocks a visit at a destination and is not synonymous with roleblock. Jail, Socialite parties, and Poisoner smog can create obstacles with different exceptions. Hangover prevents repeat roleblocking and, after the 2026 update, grants Control Immunity. [Keywords](https://townofsalem.wiki.gg/wiki/Keywords_(ToS2)), [official update](https://www.townofsalem.io/town-of-salem-2-flexible-factions-update-patch-notes-r1-5-11/).

**Will-design implications:** record `attemptedAction`, `intendedTarget`, `outcome`, and `reportedResult` separately. Do not treat “I tried to protect #4” as “I successfully saved #4.” A day ability needs a D entry; a night-only role must not produce an apparent D1 use merely because its field accepts a number.

## 8. Necronomicon changes claims

The book enables Coven killing, provides Sheriff detection immunity to its holder, and changes some roles' usable actions or visit properties. Members can pass it. Some abilities accompany the book attack; others must be chosen instead. [Necronomicon](https://townofsalem.wiki.gg/wiki/Necronomicon_(ToS2)).

Editorial consequence: reassess a fake claim when acquiring the book. Wildling keeps Sense information while attacking, but its chosen target is now attacked too. Necromancer cannot ordinarily reanimate a corpse and make an independent book attack in the same night. Poisoner can roleblock while attacking but cannot also smog. These distinctions belong in the relevant dossiers and claim cards, not hidden in a generic footnote.

## 9. Setup differences that change deductions

| Context | App behavior |
| --- | --- |
| Grace Period | Explain N1 restrictions; do not assume a normal N1 attack or successful protection |
| Secret Killers | Avoid deductions that require a visible killer label |
| Hidden Roles | Do not count an undisclosed death as a known role/faction |
| Four Horsemen | Do not assume an Apocalypse role is solo |
| All Outliers / explicit Outlier slot | Allow setup-dependent roles and relevant interaction notes |
| Flexible Factions | Require faction context for team-based advice |
| Town Traitor | Visible Town role/standard investigative behavior may conceal opposing allegiance |
| Cultist / Vampire | Prior trust can expire after conversion |
| Cursed Soul | Role changes while faction can remain the same |
| Voice chat / BetterTOS2 | Use a separate profile rather than silently reusing this dataset |

Setup sources: [Modifiers](https://townofsalem.wiki.gg/wiki/Modifiers_(ToS2)), [Faction mechanics](https://townofsalem.wiki.gg/wiki/Faction_(ToS2)), and role sources above. No current rotating Casual deck is hard-coded into this plan.
