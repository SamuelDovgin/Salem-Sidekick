# Is the content ready for a beginner’s first night?

**Ready as a complete, source-backed starting draft for implementation review.** The opening instructions are no longer just role descriptions. All 60 roles have a legal opening action or a preparation/hold plan, target criteria, a low-information fallback, dawn handling, D2 disclosure, N2 decisions, and role-specific subgoals. No website or live-client usability test is claimed.

Read [the full three-role examples](THREE_ROLE_REVIEW.md), [all-role copy](README.md), [opening research decisions](OPENING_RESEARCH.md), and [shared controls/help text](SHARED_INTERFACE_COPY.md). The complete [planning document](../../PLANNING.md) now specifies Compact, unrestricted selectors, alignment labels, strategy before wills, and inline expansion.

## What “enough to start” means

A player should be able to answer these questions without knowing all other roles:

1. What is my role family, and which label should I give if asked for alignment?
2. What can I legally do on a fresh N1? If there is no action, what useful preparation should I do?
3. Who should I consider targeting, and what if I know nothing useful yet?
4. What feedback do I record, including a failed action?
5. What can that feedback establish, and what would be an overclaim?
6. What do I say on D2, with actual role and cover kept separate?
7. What changes for N2 if the action failed, the target died, a prerequisite completed, or the role changed state?
8. What small role-specific goal am I working toward?

The nine paired copy sections answer these questions. The goal is a valid next decision, not a guaranteed win or a prescribed correct target number.

## Coverage evidence

| Prepared content | Result |
| --- | --- |
| Base-role copy | 60/60: 29 Town, 17 Coven, 14 Neutral |
| Matched compact/expanded sections | 540 pairs; nine per role |
| Role-specific subgoals | 180; three per role |
| Distinct authored opening instructions | 60 |
| Named opposing-role claim options | 64, each with alignment, reason, and exposure |
| Opposing/neutral roles with alternate covers | 31/31 |
| Supporting Town cover obligation profiles | 29/29 in the research framework |
| Role source/revision references | 60/60 agree with the source manifest |
| Actual artwork inventory references | 60/60 matched; four transformed states also inventoried |
| Actual alignment correction | Deputy TK; Sheriff TI |
| Claim choice behavior | All 60 base roles remain selectable; fit is advice |
| Expansion behavior | Same nine sections inline; no separate guide page/drawer |

The [content audit](AUDIT_REPORT.json) is reproducible with `python3 docs/copy/audit_copy.py`. It checks roster coverage, source and artwork references, alignment labels, all section variants, JSON/Markdown consistency, claim explanations, and 15 specific regression statements. These are documentation checks, not an automated proof that every strategic recommendation wins. The whole-repository document audit separately checks local paths, heading fragments, original dossiers, will coverage, and source inventory.

## Three opening walkthroughs

| Beginner question | Deputy — Town, TK | Poisoner — Coven, CU | Baker — Apocalypse, NA |
| --- | --- | --- | --- |
| What do I do N1? | No night ability; prepare a question and preserve the shot | Check book; ordinary Drink is the simpler nonbook disruption plan | Feed a likely surviving eligible other player |
| No D1 information? | Leave target undecided; no forced shot | Choose an eligible nonally after team/visitor-risk checks | Choose an eligible unpressured unknown, without pretending survival is certain |
| What do I record? | No night ability; later any actual day shot | Exact mode, target, and real feedback privately | Actual Feed and living other-recipient count privately |
| What alignment goes public? | TK if answering VFA | TS if using Tavern Keeper cover | TP if using Cleric cover |
| What result must I not invent? | A night check or Town clearance from a miss | A successful block from silence; a heal from Smog | A Barrier/save from Bread |
| What changes N2? | No night action; shot state persists | Rotate after successful Drink; reassess Smog/book changes | New live recipient, or replacement after death/failure |
| First checkpoint | One supported case before spending the bullet | A deliberate mode and consistent cover | One other living recipient with real progress |

The full examples include actual illustrative private/public lines and concrete branches. They are part of the same expanded N1 copy in the structured pack, rather than a different competing guide.

## Additional situations checked in the authored copy

- **Sheriff:** TI; post exact role and literal check from D2. Innocent does not mean confirmed Town; a blocked search is no result, not Innocent.
- **Trapper:** Build first. Only Place later if the build actually completed; no imaginary N1 trap.
- **Vigilante:** Load first, no normal N1 shot. Later ammunition and gun-loss state matter.
- **Coroner:** No initial eligible autopsy in a normal start. D2 Autopsy precedes N2 Examine; No Match covers accumulated records, not all evil.
- **Jailor:** Day selection precedes questioning; no N1 execution; a quiet kill night does not prove the prisoner was a killer.
- **Crusader/Veteran:** The opening guidance makes Town visitor danger explicit rather than recommending TP/LO bait.
- **Oracle:** Select a role, not a player; respect disabled N1 controls and repeat/self-role restrictions.
- **Wildling:** Tracker and Lookout use different real information subsets; whispers never silently enter a claimed Tracker result.
- **Potion Master → Seer:** Still selectable, but real role knowledge does not create the normal two-person movement.
- **Necromancer → Retributionist:** Shared corpse ability only fits when actual corpse eligibility/use rules match; no imaginary N1 corpse.
- **Illusionist:** Current official Bodyguard/Trapper/Deputy correction overrides stale strategy text.
- **Berserker:** No ordinary N1 attack, and actual kills drive upgrades.
- **Plaguebearer:** Seeded infections are not N1 visits; partial spread is not a complete Lookout list.
- **Soul Collector:** Reap is astral; progress uses actual totals, and Death changes the objective.
- **Cursed Soul/Amnesiac:** Follow the actual acquired role and retain history; no retroactive checks or automatic faction rewrite.
- **Jester/Pirate/Doomsayer:** Current communication quota, Scour-before-Plunder, and no N1 doom confirmation replace old gameplay assumptions.

## How the fake-claim text earns its recommendations

The copy checks several different kinds of fit rather than calling every recommended option excellent:

- **Real effect:** Poisoner Drink can produce the roleblock a Tavern Keeper cover promises.
- **Real information subset:** Wildling can use destinations for Tracker or visitors for Lookout, while withholding the other channels.
- **Movement only:** Baker → Cleric can match a one-player destination, but provides no genuine protection.
- **Information without movement:** Potion Master → Seer may have role knowledge yet lack the expected two visits.
- **Nonvisit with demonstration pressure:** Deputy can explain an inactive night, but a fake cannot produce its shot.
- **Timeline dependency:** Vigilante must Load; Trapper must Build; Oracle must use legal role choices; book/transformation can change a previously plausible account.

The beginner learns why a claim starts plausibly and what could break it. No claim is labeled guaranteed, and weak fits remain available.

## What has not been proved

This work does **not** establish that a new player can scan the eventual layout quickly under match pressure. There is no implemented UI, clipboard test, installed-client mechanics experiment, measured claim success rate, or exhaustive custom-faction simulation. The [uncertainty register](../research/UNCERTAINTIES.md) remains explicit for niche disputed interactions.

During the implementation stage, a meaningful beginner review is to give someone unfamiliar with each featured role its compact guide, then ask the eight questions above and have them choose a legal action, a record, and a D2 statement. Use fresh failure/death branches rather than letting them memorize the example. Observe whether More detail answers their remaining questions without losing their place. If they cannot explain the next decision, revise the copy and layout before calling the product beginner-tested.

That review is future work. The deliverable now is complete, reviewable copy with transparent source limits, specific opening decisions, and evidence that no role was left with an empty or generic-only guide.
