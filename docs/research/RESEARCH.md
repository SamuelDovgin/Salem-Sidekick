# Research findings and preparation report

Research date: **2026-10-15**. This is a completed **desk-research and implementation-preparation pass**. It is not a claim that every possible interaction has been experimentally tested in the installed game.

## What was investigated

- All **60 base-role articles** from the vanilla wiki.gg role navigation, including role cards, mechanics, available strategy, and role history.
- The **four transformed Horsemen** within their parent pages.
- Shared faction, alignment, attribute, keyword, modifier, and Necronomicon material.
- Eight official announcements, including the current numbered patch located in the searched sources, earlier reworks, and relevant bug fixes.
- Four secondary Fandom pages to resolve specific omissions/conflicts, and four community strategy sources for qualitative patterns.
- **64 icon/state entries**, with actual asset URLs and image metadata, without downloading artwork.

The [source manifest](SOURCE_MANIFEST.json) contains **85 source records**, revision IDs/timestamps where retrieved, content fingerprints for wiki/official material, access date, and explicit `live_game_tested: false`. The [readable catalog](SOURCES.md) describes provenance. The inventory is a record of what was actually read, not a list of unvisited search results.

## Patch baseline and its limits

The newest numbered official announcement located in this pass is **R1.5.14, July 27, 2026**. A later August 6 official service/bug-fix announcement was also reviewed. This does not establish the installed client's version, nor prove no unindexed change exists. The future build should recheck the official feed before publishing. [Official R1.5.14](https://www.townofsalem.io/town-of-salem-2-introducing-voice-chat-mode-%F0%9F%93%9C%F0%9F%8E%89%F0%9F%94%8A-patch-notes-r1-5-14/).

The March 24, 2026 update separates starting role from faction assignment in supported setups, renames Coven Leader to Archmage, changes several roles, and adds an additional Coven Power exclusivity constraint. Consequently, a role-only knowledge model would be misleading. [Official R1.5.11](https://www.townofsalem.io/town-of-salem-2-flexible-factions-update-patch-notes-r1-5-11/).

The first application profile remains vanilla text chat with normal factions. Include setup-sensitive cautions, rather than pretending to support every custom game.

## Main answer: what makes a logical fake claim?

A claim is a set of testable promises about **information, movement, effects, timing, role space, and future demonstrations**. Our recommended method is to minimize contradictions across those promises while pursuing the actual role's win condition. This is a synthesis, not a published ranking.

The practical consequence is that **“easy to format” and “easy to sustain” are different**. A short Sheriff will can still claim impossible guilt. A full Seer will can contain plausible faction comparisons while failing a movement check. A perfect-looking claim can work against Jester's goal.

The [claim-logic chapter](FAKE_CLAIM_LOGIC.md) includes seven patterns, a 31-role opposing/neutral matrix, a 29-role Town-cover profile table, and eight worked scenarios. No numerical win rates were found that justify displaying success percentages; none are invented.

## Natural fits and the limits we should teach

| Pattern | Recommended explanation |
| --- | --- |
| Information subset | Wildling can report only the Tracker or only the Lookout portion of Sense for the selected cover |
| Genuine effect | Poisoner Drink can support Tavern Keeper; Potion Master Barrier can support Cleric on that night |
| Shared underlying action | Necromancer can reproduce some Ret corpse actions, but the additional evil/stoned/self-use options can expose it |
| Information without matching movement | Werewolf, Plaguebearer, Shroud, Potion Master, and Witch need explicit qualifications |
| No visible visit | Oracle can fit some astral roles but promises protection and has role-choice restrictions |
| Public demonstration | Mayor/Marshal/Prosecutor/Catalyst create obligations an ordinary evil cannot reproduce |
| Objective reversal | Jester wants the correct kind of elimination; Executioner needs the target's hanging route |

Mechanic evidence lives in the corresponding [role dossiers](roles/INDEX.md). These strategic conclusions should become short “Why this fits / What can expose it” claim cards.

## Obsolete advice specifically excluded

| Old assumption | Prepared content instead uses |
| --- | --- |
| Investigator only checks blood | Current crime concepts, with uncertainty around disputed interactions |
| N1 Psychic is an Evil three-player vision | Odd Good/two; even Evil/three |
| Admirer proposes/marries and uses toxic relationships | Obsession, Admire, Care, and day Bestow |
| Deputy shoots a Townie and automatically dies | Current hit/miss and single-shot model |
| Vigilante automatically suicides after Town kill | Current Load and gun-loss model |
| Trickster taunts a target into attacking | Magic Mirror, absorption, and Unleash |
| Poisoner applies delayed lethal poison | Drink and Smog |
| Pirate wins duels | Landlubbers, Scour, and Plunder |
| Coven Leader is the current name with old retrain limits | Archmage and current retraining constraints |
| All Apocalypse roles are always teammates | Normally mutually exclusive; Four Horsemen/setup changes matter |
| Oracle selects a player and can stay on them | Role-based Aegis with consecutive-choice restrictions |
| Current Spy is a global Coven-visit log or old general-event bug | Persistent targeted bug/role-trigger model |

These corrections are supported by the individual role pages and official changes cataloged in [SOURCES.md](SOURCES.md). They are not evidence that every line of a newer wiki page is correct.

## Source evaluation

Priority order:

1. Official current announcements for explicit changes and dates.
2. Role-specific current wiki mechanics, with recorded revision evidence.
3. Shared wiki mechanics, checked against role pages and official changes.
4. Secondary wiki pages for missing details or conflicts; shared editing history means they are not independent experiments.
5. Community guides and discussions for strategy, terminology, and common difficulties.
6. Our inference, labeled as recommended play or a conditional example.

The wiki.gg browser page renderer returned access errors for several pages, but its public MediaWiki API was accessible. Every base-role article was successfully retrieved through the API. We do not equate a search snippet with full-page review. Unavailable guessed pages such as `Game Modes (ToS2)` and `Priority (ToS2)` were **not** treated as sources.

Some wiki strategy sections are empty, outdated, or overconfident. The authored recommendations therefore reason from mechanics rather than pretending those sections provide a complete expert consensus. Ordinary strategy claims about “high mislynch rate” are not imported as measured facts.

## Beginner targeting patterns

These are editorial starting points for cards, with per-role exceptions in the dossiers:

| Family | Prioritize | Why it is useful | Typical adjustment |
| --- | --- | --- | --- |
| Direct TI | Unresolved, contradictory, testable claims | Converts a night action into evidence the town can discuss | Avoid redundant checks and account for dangers |
| Observer TI | Houses/players likely to generate meaningful traffic | Helps compare actions with claims | Do not walk into obvious rampage/visitor traps blindly |
| Protector | Credible valuable allies likely to be attacked | Preserves future information, votes, or actions | Match protection to attack type and coordinate visitor risk |
| Lethal Town | Evidence-supported opponents when action is justified | Reduces enemy vote/control | Waiting is a valid option; demonstrate only when useful |
| Disruptive Town | Plausible harmful actors | Can prevent damage or test a story | A no-kill night is a lead, not proof |
| Coven information | Players whose role or traffic changes the team plan | Enables better target choice and coherent claims | Do not leak special knowledge through an incompatible cover |
| Coven disruption | The action or information that matters next | Protects the faction's voting/killing plan | Check allied interference and book alternatives |
| Progression neutrals | Targets that advance the actual transformation/objective | Converts limited nights into the right goal | Baker wants survival before transformation; Soul Collector wants deaths |
| Neutral Evil | The precise stated win condition | Avoids losing through the wrong kind of death or target removal | Switch strategy after actual role changes |

## How evidence becomes UI

Each dossier contains two layers of material:

- Extract the first actionable priorities into short beginner cards.
- Keep mechanics, implications, exceptions, and sources in the in-depth panel.

Shared chapters add depth without duplicating lengthy rules on all 60 pages. The panel should inline or link context for terms such as astral, roleblock, faction, and claim space. Sources and uncertainty labels should be near the relevant claim, not merely dumped in a footer.

## Coverage and readiness

| Deliverable | Prepared |
| --- | --- |
| Full user-directed page plan | Yes — [PLANNING.md](../../PLANNING.md) |
| All 60 base-role dossiers | Yes — [index](roles/INDEX.md) |
| Four transformed-state explanations | Yes — Baker, Berserker, Plaguebearer, Soul Collector |
| Logical claim patterns and complete actual-role matrix | Yes — [claim logic](FAKE_CLAIM_LOGIC.md) |
| All-role entry formats and example wills | Yes — [templates](../reference/WILL_TEMPLATES.md) |
| Provenance and icon inventory | Yes — readable and JSON manifests |
| Content/state model and future evaluation contract | Yes — [model](../reference/CONTENT_MODEL.md) |
| Implementation acceptance cases | Yes — [scenarios](../reference/ACCEPTANCE.md) |
| All niche interactions live-tested | No — specific limitations isolated in [uncertainties](UNCERTAINTIES.md) |
| Website implemented or published | No — outside this research task |

The research is ready to guide the website build. Unsettled edge cases are documented with a conservative rendering decision rather than asserted as facts or left as invisible gaps.
