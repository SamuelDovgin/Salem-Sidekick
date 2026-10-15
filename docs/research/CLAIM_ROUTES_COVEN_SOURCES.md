# Coven claim choices and conditional routes — research audit

Reviewed 15 October 2026 for vanilla **text chat, normal factions**. This companion covers all 17 Coven roles, 29 selectable route alternatives, 87 ranked Town cover choices, and 367 role-and-claim strategy bullets. Every option has an explicit use condition, a concrete limit, and source links for both the real and claimed role. No live-client test or measured claim-success rate is asserted.

The ranking is editorial: begin with a sustainable account that fits the selected action route, then consider more demanding or situational alternatives. A low-writing will can be easier to maintain while supplying very little independent evidence. An option that fits book attacks may be poor during an idle, corpse, or astral utility route. The UI should preserve those conditions rather than presenting every lower icon as a universally viable replacement.

## Official patch checks

- [Flexible Factions update, R1.5.11 — 24 March 2026](https://www.townofsalem.io/town-of-salem-2-flexible-factions-update-patch-notes-r1-5-11/): checked the current Archmage retraining scope, Voodoo Master's three modes, Witch/Hangover interaction, Medusa's initial Stone, and Illusionist's additional abilities and limits. In particular, Hangover now includes Control immunity; it is no longer only a Drink restriction. Normal factions remain the site scope even though the patch supports changed starting factions.
- [Hotfix R1.5.12 — 2 April 2026](https://www.townofsalem.io/town-of-salem-2-hotfix-patch-notes-r1-5-12/): checked corrections around reanimated roles, Oracle information and Deafened communication. Oracle should not be described as learning exact protected holders through save feedback.
- [Voice Chat update, R1.5.14 — 27 July 2026](https://www.townofsalem.io/town-of-salem-2-introducing-voice-chat-mode-%F0%9F%93%9C%F0%9F%8E%89%F0%9F%94%8A-patch-notes-r1-5-14/): separated voice-only Wildling Attune and voice restrictions on death forgery from the text-chat rules. Text Wildling still uses Sense and whisper knowledge; the voice update is not a reason to remove the text mechanic.

The official pages were opened or returned with substantive searchable text during this audit. Some wiki.gg page opens returned HTTP 403. For detailed role rules, the previously obtained 15 October wiki API exports and pinned article revisions were read directly; this report does not claim every live wiki URL loaded successfully in the browsing tool.

## Evidence behind the alternatives

The sources support abilities and restrictions. Target priorities, route labels, beginner ranking, and recommended cover use are inferences from those abilities rather than published optimal-play statistics.

| Actual role | Mechanics that control the route and cover assessment |
| --- | --- |
| Archmage | Ordinary book attack and Retrain are alternatives. Retrain must solve a concrete team need; it can change an ally's ability and public history. |
| Hex Master | Without the book, Hex progress benefits from living marked enemies. The book makes the action astral and lethal, which changes both target value and movement-compatible claims. |
| Witch | Personal movement is to the controlled first player. The forced destination belongs to that player's action. Notifications, Hangover, immunity, and stolen feedback make this a conspicuous rather than undetectable visit. |
| Conjurer | Nonbook nights lack a normal night ability. Meteor is a scarce later-day resource and has its own public event; it is not a Deputy demonstration. |
| Ritualist | Two exact-role attempts, no TI targets, and Illumination restrictions favor holding without evidence. A correct legal Ritual is astral, unlike the ordinary book alternative. |
| Jinx | One eligible non-Coven direct visitor can be attacked. Surviving direct visitors can learn the Jinx identity. No resident defense or complete visitor list is supplied. Normal Coven visitors are excluded, with a Town Traitor exception. |
| Dreamweaver | A pending Town effect needs the following night to develop; a Town visit can cure it. Access or communication denial is a conditional team route, not an immediate guaranteed roleblock. |
| Enchanter | Enchant can support manipulated suspicion or crime channels. Alterate is charge-limited and needs a useful death; independent movement and Coroner/Spy information are not universally rewritten. |
| Illusionist | Ordinary Illusion is astral. Phantasm is a scarce broad response and the book is a direct-attack alternative. Illusion no longer bypasses Bodyguard, Trapper, or Deputy. |
| Medusa | Three active Stone charges create persistent marks; an eventual death, not the marking action alone, hides information. Medusa already begins Stoned herself. |
| Necromancer | Personal movement is to the corpse, while the corpse visits the living target. Legal Town corpses can closely reproduce Retributionist; evil or Stoned corpses and direct book attacks do not. |
| Poisoner | Drink genuinely reproduces roleblocking and Hangover. Smog denies access to a house rather than roleblocking its owner, has allied-traffic concerns, and is incompatible with the ordinary book attack. |
| Potion Master | Barrier can genuinely reproduce Cleric protection. Reveal supplies role knowledge, not another TI's exact result; it also grants Illumination. One-target potions do not reproduce Seer's normal two visits. |
| Voodoo Master | Silence, Deafen, and Blind solve different communication/information problems. Blind hides feedback without preventing the action. Changing modes never bypasses the consecutive-player restriction. |
| Wildling | Sense provides outgoing destinations and incoming visible visitors. Tracker and Lookout should each use only the relevant channel. Neither astral gaps nor whisper knowledge should be relabeled complete public observation. |
| Covenite | No nonbook ability. Carrying the book may preserve stronger allied utility; a pressure-oriented cover is an optional social risk, not a new mechanic. Pilgrim is only a candidate when the setup permits that Town Outlier. |
| Cultist | Indoctrinate is a daytime conversion, leaves the recruit's role intact, and removes Cultist's initial Basic Defense on success. Nonbook inactivity and direct book attacks have different cover footprints. |

## Ranked claim inventory

All existing first two recommendations were retained. Lower choices were evaluated for actual movement, ability information, cover result obligations, and verification pressure. Witch's conditional Tracker uses a genuinely known successful forced destination; it must not silently assume an immune or Hungover target moved. Potion Master's Seer is retained as a difficult lower option behind single-target covers because its normal two-visit footprint is a material mismatch.

Necromancer intentionally has four options. Repeated corpse-directed movement cannot reasonably be expanded into a large set of ordinary living-visitor covers. Cleric and Sheriff are explicitly book-mode alternatives rather than explanations for reanimation.


| Actual role | Cover order | Conditional route alternatives |
| --- | --- | --- |
| Archmage | Cleric → Oracle → Sheriff → Psychic → Bodyguard | Retrain for a specific team need |
| Hex Master | Cleric → Psychic → Oracle → Sheriff → Investigator | Use the astral book attack |
| Witch | Cleric → Sheriff → Tracker → Psychic → Investigator | Redirect a known protector; Exploit a known dangerous visitor |
| Conjurer | Oracle → Cleric → Deputy → Sheriff → Psychic | Take an enabled book kill |
| Ritualist | Oracle → Deputy → Cleric → Sheriff → Psychic | Spend a supported Ritual; Use the book instead of guessing |
| Jinx | Cleric → Crusader → Psychic → Sheriff → Lookout | Coordinate one predictable visitor; Prioritize the book’s direct kill |
| Dreamweaver | Cleric → Psychic → Sheriff → Spy → Investigator | Coordinate denial of a likely cure; Make the book kill |
| Enchanter | Sheriff → Cleric → Investigator → Psychic → Spy | Forge a planned death; Use the book to make the death happen |
| Illusionist | Oracle → Deputy → Cleric → Sheriff → Coroner | Spend Phantasm on broad detection pressure; Attack with the book instead |
| Medusa | Cleric → Psychic → Sheriff → Spy → Coroner | Mark an important future victim; Hold when no useful death plan exists |
| Necromancer | Retributionist → Oracle → Cleric → Sheriff | Use the book’s direct attack |
| Poisoner | Tavern Keeper → Socialite → Cleric → Psychic → Spy | Smog a specific access route; Combine book damage with a roleblock |
| Potion Master | Cleric → Sheriff → Investigator → Psychic → Spy → Seer | Barrier an ally under real threat; Use the Harmful Potion |
| Voodoo Master | Cleric → Psychic → Sheriff → Investigator → Spy | Blind a known information role; Deafen a coordination-dependent opponent |
| Wildling | Tracker → Lookout → Sheriff → Psychic → Spy | Build a real Lookout account; Kill while retaining Sense |
| Covenite | Oracle → Cleric → Sheriff → Psychic → Deputy → Pilgrim | Carry the team’s book; Trade cover longevity for early pressure |
| Cultist | Oracle → Cleric → Bodyguard → Sheriff → Deputy → Psychic | Carry the book while preserving conversion |

## Actual-role source revisions

These role articles provide the detailed mechanics read alongside the official changes. The revision links record the API-export snapshots used.

| Role | Article | Reviewed revision |
| --- | --- | --- |
| Archmage | [Archmage rules](https://townofsalem.wiki.gg/wiki/Archmage_(ToS2)) | [5752](https://townofsalem.wiki.gg/w/index.php?title=Archmage%20%28ToS2%29&oldid=5752) |
| Hex Master | [Hex Master rules](https://townofsalem.wiki.gg/wiki/Hex_Master_(ToS2)) | [6232](https://townofsalem.wiki.gg/w/index.php?title=Hex%20Master%20%28ToS2%29&oldid=6232) |
| Witch | [Witch rules](https://townofsalem.wiki.gg/wiki/Witch_(ToS2)) | [5401](https://townofsalem.wiki.gg/w/index.php?title=Witch%20%28ToS2%29&oldid=5401) |
| Conjurer | [Conjurer rules](https://townofsalem.wiki.gg/wiki/Conjurer_(ToS2)) | [6365](https://townofsalem.wiki.gg/w/index.php?title=Conjurer%20%28ToS2%29&oldid=6365) |
| Ritualist | [Ritualist rules](https://townofsalem.wiki.gg/wiki/Ritualist_(ToS2)) | [5403](https://townofsalem.wiki.gg/w/index.php?title=Ritualist%20%28ToS2%29&oldid=5403) |
| Jinx | [Jinx rules](https://townofsalem.wiki.gg/wiki/Jinx_(ToS2)) | [5984](https://townofsalem.wiki.gg/w/index.php?title=Jinx%20%28ToS2%29&oldid=5984) |
| Dreamweaver | [Dreamweaver rules](https://townofsalem.wiki.gg/wiki/Dreamweaver_(ToS2)) | [5416](https://townofsalem.wiki.gg/w/index.php?title=Dreamweaver%20%28ToS2%29&oldid=5416) |
| Enchanter | [Enchanter rules](https://townofsalem.wiki.gg/wiki/Enchanter_(ToS2)) | [6673](https://townofsalem.wiki.gg/w/index.php?title=Enchanter%20%28ToS2%29&oldid=6673) |
| Illusionist | [Illusionist rules](https://townofsalem.wiki.gg/wiki/Illusionist_(ToS2)) | [6359](https://townofsalem.wiki.gg/w/index.php?title=Illusionist%20%28ToS2%29&oldid=6359) |
| Medusa | [Medusa rules](https://townofsalem.wiki.gg/wiki/Medusa_(ToS2)) | [5933](https://townofsalem.wiki.gg/w/index.php?title=Medusa%20%28ToS2%29&oldid=5933) |
| Necromancer | [Necromancer rules](https://townofsalem.wiki.gg/wiki/Necromancer_(ToS2)) | [5465](https://townofsalem.wiki.gg/w/index.php?title=Necromancer%20%28ToS2%29&oldid=5465) |
| Poisoner | [Poisoner rules](https://townofsalem.wiki.gg/wiki/Poisoner_(ToS2)) | [6228](https://townofsalem.wiki.gg/w/index.php?title=Poisoner%20%28ToS2%29&oldid=6228) |
| Potion Master | [Potion Master rules](https://townofsalem.wiki.gg/wiki/Potion_Master_(ToS2)) | [5596](https://townofsalem.wiki.gg/w/index.php?title=Potion%20Master%20%28ToS2%29&oldid=5596) |
| Voodoo Master | [Voodoo Master rules](https://townofsalem.wiki.gg/wiki/Voodoo_Master_(ToS2)) | [6360](https://townofsalem.wiki.gg/w/index.php?title=Voodoo%20Master%20%28ToS2%29&oldid=6360) |
| Wildling | [Wildling rules](https://townofsalem.wiki.gg/wiki/Wildling_(ToS2)) | [6347](https://townofsalem.wiki.gg/w/index.php?title=Wildling%20%28ToS2%29&oldid=6347) |
| Covenite | [Covenite rules](https://townofsalem.wiki.gg/wiki/Covenite_(ToS2)) | [6354](https://townofsalem.wiki.gg/w/index.php?title=Covenite%20%28ToS2%29&oldid=6354) |
| Cultist | [Cultist rules](https://townofsalem.wiki.gg/wiki/Cultist_(ToS2)) | [6353](https://townofsalem.wiki.gg/w/index.php?title=Cultist%20%28ToS2%29&oldid=6353) |

## Claimed-role source coverage

The strategy cards link these mechanics as well as their actual-role source. Role descriptions and will-format lessons should remain reusable rather than duplicated into every expanded explanation.

- [Bodyguard](https://townofsalem.wiki.gg/wiki/Bodyguard_(ToS2))
- [Cleric](https://townofsalem.wiki.gg/wiki/Cleric_(ToS2))
- [Coroner](https://townofsalem.wiki.gg/wiki/Coroner_(ToS2))
- [Crusader](https://townofsalem.wiki.gg/wiki/Crusader_(ToS2))
- [Deputy](https://townofsalem.wiki.gg/wiki/Deputy_(ToS2))
- [Investigator](https://townofsalem.wiki.gg/wiki/Investigator_(ToS2))
- [Lookout](https://townofsalem.wiki.gg/wiki/Lookout_(ToS2))
- [Oracle](https://townofsalem.wiki.gg/wiki/Oracle_(ToS2))
- [Pilgrim](https://townofsalem.wiki.gg/wiki/Pilgrim_(ToS2))
- [Psychic](https://townofsalem.wiki.gg/wiki/Psychic_(ToS2))
- [Retributionist](https://townofsalem.wiki.gg/wiki/Retributionist_(ToS2))
- [Seer](https://townofsalem.wiki.gg/wiki/Seer_(ToS2))
- [Sheriff](https://townofsalem.wiki.gg/wiki/Sheriff_(ToS2))
- [Socialite](https://townofsalem.wiki.gg/wiki/Socialite_(ToS2))
- [Spy](https://townofsalem.wiki.gg/wiki/Spy_(ToS2))
- [Tavern Keeper](https://townofsalem.wiki.gg/wiki/Tavern_Keeper_(ToS2))
- [Tracker](https://townofsalem.wiki.gg/wiki/Tracker_(ToS2))

## Copy corrections and boundaries

- Replace any earlier Jinx description of ordinary Coven friendly fire with the actual exclusion rule. Allied coordination still matters, but surviving enemy witnesses are the central exposure problem. A Town Traitor is the documented exception. The new Jinx route risk and claim summary carry this correction.
- Keep the current Witch/Hangover rule from the official March patch. A stale claim that Hangover affects only roleblock would weaken both Witch routes and the coordinated Jinx route.
- A known self-event can inform a conditional Spy story, but it provides no permanent Bug network, no full evil-role trigger list, and no visitor player identity. Every such lower-ranked option explicitly retains those obligations and gaps.
- A direct attack at a house can match the destination of a claimed visit without reproducing its protection or investigation. These movement-only fallbacks must retain their weak-proof labels.
- Oracle can fit an astral or truly inactive footprint, but it cannot explain a visible earlier visit just because the player later acquired an astral action. Aegis targets a Town role category, not a numbered player.
- No route or cover assumes Grace Period permits an N1 action. Users must follow actual client availability and record unavailability rather than a fictional completed result.
- Unknown or disputed edges are not upgraded to guarantees. Smog, corpse eligibility, immunity, attack strength, exact-role staleness, and observation scope are stated as restrictions or conditions in the cards.
