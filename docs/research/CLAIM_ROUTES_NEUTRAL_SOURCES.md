# Neutral claim strategies and opening routes

Reviewed **15 October 2026** for vanilla Town of Salem 2, **text chat and normal factions**. This review supplies 18 route records, including four transformed Apocalypse states, and 74 ordered Town-cover options across the 14 base Neutral roles. It does not claim live-client testing or measured claim success rates.

The JSON files are [Neutral routes](../../site/content/routes-neutral.json) and [Neutral claim strategies](../../site/content/claim-strategy-neutral.json). Existing [default Neutral playbooks](../../site/content/playbook-neutral.json) remain route #1. Alternatives are conditional choices in descending editorial preference, with an explicit trigger, costs, target rule, three checkpoints and three later priorities. They are not extra simultaneous abilities.

## Evidence and ranking method

Role mechanics are source-backed. Claim rankings, suggested target priorities and the reasons to prefer one route over another are editorial inferences from those mechanics. No source establishes that a particular fake claim wins most often, is what most players use, or is optimal in every lobby.

The beginner ranking weighs:

1. Whether the public story has the same visible movement and legal timing as the actual action.
2. How much genuine information or a real effect supports the story, rather than merely sharing a destination.
3. The information, charges, recipient feedback and public demonstrations the claimed role promises.
4. The player's real objective. Jester benefits from plausible unresolved suspicion and a qualifying execution; a solo killer normally benefits from surviving that same trial.
5. What later modes or transformations break the initial match.

All pre-existing starter ordering is preserved, including **Jester → Deputy, Sheriff**. Each additional option has a specific conditional use and an explicit weakness. Easily tested public powers were not added merely to make a longer list. The lower-ranked alternatives are suggestions to inspect, not equivalent endorsements.

Every claim option links its actual role article and its Town cover article. The cover's full ability obligations are also retained in [Town claim profiles](../../site/content/claim-profiles.json). Strategy bullets explain target history, result obligations and the particular actual-role mismatch rather than saying only that both roles visit.

## Official patch verification

The official developer blog was checked alongside the community wiki. Where a historical role article conflicts with a newer explicit patch, the newer change controls the guidance.

| Official source | Relevant verification |
| --- | --- |
| [Season 4 — R1.4.00](https://www.townofsalem.io/town-of-salem-2-season-4-patch-notes-r1-4-00/) | Introduces Oracle's role-targeted protection, Pirate's Landlubber/Scour/Plunder model, Jester's Chatterbox and several modern Town-cover changes. Later notes can supersede individual details. |
| [Season 5 — R1.5.00](https://www.townofsalem.io/town-of-salem-2-season-5-patch-notes-r1-5-00/) | Cursed Soul swaps roles while retaining faction; the Wandering Souls objective concerns remaining Cursed Soul role holders. Vampire conversion preserves the recipient's role while changing faction. |
| [Balance changes — R1.5.05](https://www.townofsalem.io/town-of-salem-2-balance-changes-and-bug-fixes-patch-notes-r1-5-05/) | Reap's Sheriff frame becomes unconditional; solo Apocalypse detection behavior and Wandering Souls changes supersede older descriptions. This prevents using the obsolete solo/non-solo frame distinction. |
| [Flexible Factions — R1.5.11](https://www.townofsalem.io/town-of-salem-2-flexible-factions-update-patch-notes-r1-5-11/) | Normal Berserker attacks begin after N1, initially Basic. Plaguebearer's adjacent neighbors begin infected. Custom faction mechanics are separate from the normal-faction defaults. |
| [Voice chat — R1.5.14](https://www.townofsalem.io/town-of-salem-2-introducing-voice-chat-mode-%F0%9F%93%9C%F0%9F%8E%89%F0%9F%94%8A-patch-notes-r1-5-14/) | Shufflebox and automatically typed wills are exclusive to voice chat. They do not replace this site's text-chat Chatterbox or typed-will guidance. |

The current roledeck, modifiers, client action availability and feedback remain relevant. Grace Period can disable actions that would normally be legal. The guide does not assume that a custom Coven-faction Neutral role follows the same opening rules as its normal faction.

## Coverage and decisions

| Actual role | Ranked Town covers | Conditional route emphasis | Mechanics sources |
| --- | --- | --- | --- |
| Baker | Cleric, Psychic, Bodyguard, Trickster, Sheriff | Feed a quieter likely survivor when preserving the obvious leader would make the later vote harder. Bread is progress, not protection. | [Baker](https://townofsalem.wiki.gg/wiki/Baker_(ToS2)) |
| Berserker | Vigilante, Cleric, Coroner, Trapper, Deputy | Still prepare on N1; prioritize a known dangerous disruptor for the first legal attack only when that attack can plausibly succeed. | [Berserker](https://townofsalem.wiki.gg/wiki/Berserker_(ToS2)), [R1.5.11](https://www.townofsalem.io/town-of-salem-2-flexible-factions-update-patch-notes-r1-5-11/) |
| Plaguebearer | Cleric, Lookout, Psychic, Tracker, Bodyguard, Sheriff | Directly infect a genuinely isolated uninfected player instead of chasing spread when coverage is the bottleneck. | [Plaguebearer](https://townofsalem.wiki.gg/wiki/Plaguebearer_(ToS2)), [R1.5.11](https://www.townofsalem.io/town-of-salem-2-flexible-factions-update-patch-notes-r1-5-11/) |
| Soul Collector | Oracle, Sheriff, Veteran, Coroner, Pilgrim | Mark a supported likely daytime execution rather than guessing the next night victim. No genuine Town check or protection is generated. | [Soul Collector](https://townofsalem.wiki.gg/wiki/Soul_Collector_(ToS2)), [R1.5.05](https://www.townofsalem.io/town-of-salem-2-balance-changes-and-bug-fixes-patch-notes-r1-5-05/) |
| Doomsayer | Oracle, Deputy, Veteran, Coroner, Trapper | Build around demonstrated guessable Town abilities, or supported Coven faction identities; N1 remains preparation only. | [Doomsayer](https://townofsalem.wiki.gg/wiki/Doomsayer_(ToS2)) |
| Executioner | Oracle, Sheriff, Investigator, Tracker, Coroner | Take a more active TI cover when public contradictions justify earlier pressure, accepting the fabricated report and missing visit. | [Executioner](https://townofsalem.wiki.gg/wiki/Executioner_(ToS2)) |
| Jester | Deputy, Sheriff, Cleric, Psychic, Vigilante, Veteran | Start credible and become unresolved later, or use a modest disputed TI account. Neither route overrides Chatterbox or the required execution type. | [Jester](https://townofsalem.wiki.gg/wiki/Jester_(ToS2)), [Sheriff](https://townofsalem.wiki.gg/wiki/Sheriff_(ToS2)), [Deputy](https://townofsalem.wiki.gg/wiki/Deputy_(ToS2)) |
| Pirate | Cleric, Psychic, Sheriff, Tracker, Bodyguard | Consider later disclosure only when verified target information and incentives make cooperation worthwhile. N1 still starts with Scour. | [Pirate](https://townofsalem.wiki.gg/wiki/Pirate_(ToS2)) |
| Arsonist | Cleric, Oracle, Bodyguard, Psychic, Sheriff, Trickster | Clean an actual self-Douse, or Ignite an already meaningful living set rather than pursuing perfect coverage. | [Arsonist](https://townofsalem.wiki.gg/wiki/Arsonist_(ToS2)) |
| Serial Killer | Cleric, Vigilante, Bodyguard, Psychic, Investigator | Disable Cautious only when potential counterkills justify their exposure and retaliation risks. Cautious does not cancel the selected attack. | [Serial Killer](https://townofsalem.wiki.gg/wiki/Serial_Killer_(ToS2)), [Keywords](https://townofsalem.wiki.gg/wiki/Keywords_(ToS2)) |
| Shroud | Cleric, Oracle, Tracker, Psychic, Vigilante, Bodyguard | Shroud a credible useful direct visitor instead of a controlled direct Attack. Visibility/fallback behavior remains explicitly uncertain. | [Shroud](https://townofsalem.wiki.gg/wiki/Shroud_(ToS2)), [Actions](https://townofsalem.wiki.gg/wiki/Actions_(ToS2)) |
| Werewolf | Tracker, Cleric, Psychic, Crusader, Veteran | Choose a home Rampage on a full moon only when useful visitors are actually expected; holding is still an attack. | [Werewolf](https://townofsalem.wiki.gg/wiki/Werewolf_(ToS2)) |
| Cursed Soul | Oracle, Amnesiac, Coroner, Veteran, Pilgrim | Attempt to acquire a useful removal ability; read the actual new role and preserve the Wandering Souls objective. | [Cursed Soul](https://townofsalem.wiki.gg/wiki/Cursed_Soul_(ToS2)), [R1.5.00](https://www.townofsalem.io/town-of-salem-2-season-5-patch-notes-r1-5-00/), [R1.5.05](https://www.townofsalem.io/town-of-salem-2-balance-changes-and-bug-fixes-patch-notes-r1-5-05/) |
| Vampire | Cleric, Psychic, Bodyguard, Sheriff, Trickster | Drain an immediate plausibly killable threat when conversion is unsuitable; ordinary default remains gaining a useful ally. | [Vampire](https://townofsalem.wiki.gg/wiki/Vampire_(ToS2)), [R1.5.00](https://www.townofsalem.io/town-of-salem-2-season-5-patch-notes-r1-5-00/) |
| Famine | Inherits Baker's ranked cover history with a transformed-state caveat | Finish a supported near-expiry Bread-holder when the earlier opposing-vote removal matters more than pressuring the main organizer. No new Feed buildup. | [Baker / Famine](https://townofsalem.wiki.gg/wiki/Baker_(ToS2)#Famine) |
| War | Inherits Berserker's history with a transformed-state caveat | Split one immediate threat and one distinct useful visitor hub rather than automatically selecting the two loudest people. | [Berserker / War](https://townofsalem.wiki.gg/wiki/Berserker_(ToS2)#War) |
| Pestilence | Inherits Plaguebearer's history with a transformed-state caveat | Break a real opposing voting bloc rather than selecting purely by who speaks most. Use current Spread Pestilence, not pretransformation Infect. | [Plaguebearer / Pestilence](https://townofsalem.wiki.gg/wiki/Plaguebearer_(ToS2)#Pestilence) |
| Death | Inherits Soul Collector's history with a transformed-state caveat | Address the strongest specific accusation on the current transformation day. No extra Souls, next-night Reap or new attack selection. | [Soul Collector / Death](https://townofsalem.wiki.gg/wiki/Soul_Collector_(ToS2)#Death) |

## Important limits retained in the copy

- **Jester:** The actual text-chat quota must be met before judgment. The normal route requires trial execution; Prosecution and Tribunal can qualify, while a day shot or night kill does not. Haunt is a consequence of winning, not another victory prerequisite. Basic Defense expires at D3. The suggested suspicion routes cannot force Town to hang you.
- **Executioner:** The assigned target is normally Town. A claimed TI result is invented cover information, not something the role learned. The desired death is a qualifying execution while Executioner remains alive. A different target death changes the role to Jester and requires a new plan.
- **Pirate:** Scour verifies a specific assigned player. An original-role hint alone can identify the wrong duplicate holder. N1 Plunder is unavailable; Plundering a non-Landlubber successfully can remove remaining charges. Disclosure is discussed as a conditional strategy without restoring Coven or Neutral roles to the public claim selector.
- **Plaguebearer:** Spread offers partial contact evidence, not an exhaustive Lookout or Tracker report. The two seeded adjacent infections are not visits. The guide separates incoming visitors, outgoing movement and the user's own direct Infect route.
- **Soul Collector:** Marks persist and support Soul collection; they do not provide Sheriff checks. Reap's changed apparent identity does not prove a target's real faction. Oracle avoids the ordinary-visit mismatch but supplies no real Aegis.
- **Arsonist:** Active Douse, no-action Clean and astral Ignite have different movement implications. Passive Douses are not a full visitor list; new visitors on an Ignite night do not burn from that same ignition. Oracle cannot explain an earlier visible direct Douse merely because it fits a later night.
- **Killers using Vigilante:** A shared kill is insufficient. Ordinary N1 requires Load, later ammunition and Town-hit rules matter, and attack labels or Rampage can distinguish the roles.
- **Werewolf:** Scent gives genuine movement information, but its persistence does not prove a fresh visit. A correct later result can coexist with a false claim about where the Werewolf personally went that night.
- **Cursed Soul:** The initial role, acquired role, selected player, resolved swap and faction are distinct. A new Town-looking ability does not replace the Wandering Souls objective. The cached community page's Swap section was incomplete; live indexed material and official faction changes were used conservatively, without assuming selection always succeeds.
- **Vampire:** A converted player retains their role, so genuine ability evidence does not establish continuing Town faction. Convert can become Drain against an ineligible target. Grace Period may permit conversion while disabling that harmful fallback.
- **Outlier covers:** Pilgrim is suggested only with an explicitly compatible Town Outlier slot. Cursed Soul being present does not automatically make every other Outlier legal. There are no filler Mayor, Marshal or Prosecutor options based solely on an empty night log.

## Remaining uncertainty

The community [Shroud article](https://townofsalem.wiki.gg/wiki/Shroud_(ToS2)) explicitly flags inconsistent direct/astral behavior, particularly fallback interactions. Oracle and Tracker suggestions therefore do not promise invisible safety or a full movement report.

The [Serial Killer role article](https://townofsalem.wiki.gg/wiki/Serial_Killer_(ToS2)) and [keyword reference](https://townofsalem.wiki.gg/wiki/Keywords_(ToS2)) describe the exact counterattack power differently. The route weighs potential extra kills against exposure without claiming that retaliation will beat a particular protection or Invincible opponent.

Some wiki pages include strategy written around Apocalypse teammates. Normal factions generally spawn one Apocalypse role unless a relevant modifier changes that. The routes do not invent those teammates; explicit ally coordination applies only when the actual setup provides allies.

Current source pages were checked through web search/open tools; wiki.gg sometimes returned HTTP 403 on direct open. Indexed wiki content and the previously cached public wiki API revisions supplied the role details, with newer official patches used for explicit changes. No unresolved interaction is represented as a live-client guarantee.
