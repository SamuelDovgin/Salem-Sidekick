# Salem Sidekick — complete application plan

Research and planning date: **2026-10-15** (America/Chicago). Status: **Compact website implemented** in [site/](site/README.md). This document preserves the design contract; [implementation verification](site/qa/REPORT.md) records completed checks.

## Current practical-play revision

The route choices now sit beside the first-night heading as numbered inline buttons. Lower-priority claims appear as inline rank/icon/name buttons beside their label; tapping a selected comparison closes it. On narrow screens, choice rows wrap within a bounded vertical scroller. Role pickers open on the non-editable title, and 16px search/select controls avoid the small-text iOS focus zoom without disabling user page zoom.

The current revision adds **ranked, selectable opening routes for all 64 roles/states**. The default remains first; conditional alternatives update the action, target rule, reason, pivot, tradeoff, three subgoals, and three next priorities together. A lower route can become better when its stated condition applies. These ranks are editorial beginner recommendations, not measured win rates.

Claim cards now prioritize the actual-role/cover strategy. Role basics move into a keyboard-accessible dropdown. The top two researched claims stay visible; additional ranked role icons open one detailed comparison at a time. Every ranked pairing includes specific strategy bullets, a use condition, an exposure point, and mechanic sources. Town roles receive a truthful self-role card rather than a fabricated cover recommendation. Any other Town claim remains selectable but is identified as unranked when outside the researched shortlist.


The public claim picker is now Town-only (29 roles). All 64 actual roles/states remain selectable. Old Coven/Neutral cover choices migrate to a recommended Town cover without deleting archived notes. Earlier unrestricted-claim specifications below are historical.

The latest user instruction supersedes the earlier will-builder scope: use prominent **My default play**, ranked later priorities, and **claim-specific example wills with maintenance advice**. The builder is removed from the current interface; old saved notes are retained read-only. Claims compare upkeep, payoff, real support, and exposure. See [the complete audited playbook](docs/copy/PRACTICAL_PLAYBOOK.md) and [all claim examples](docs/copy/CLAIM_EXAMPLES.md). Earlier builder specifications below remain historical design context, not work to restore.

## 1. Product and accepted requirements

A single-page Town of Salem 2 companion for a beginner using a second screen during a text-chat match. Select a role and understand the next useful decision in 15–30 seconds. Learn why that decision makes sense by expanding the same sections inline. Maintain a simple will without memorizing its format.

The user's requirements, including follow-up corrections, govern the design:

- Searchable role picker with familiar game/wiki iconography.
- Quick, reusable cards that explain ability, targeting, claims, results, and mistakes.
- **Quick strategy sits above the will builder and receives more visual emphasis.**
- A top-right **More detail** button expands every currently shown section inline; **Less detail** restores the compact text.
- Fake claims are explained logically, including what supports them and what could contradict them.
- Actual role and claimed role remain separate. Reading a cover role never replaces the actual-role strategy.
- Selectable will templates, role-specific fields, simple examples with replaceable numbers, night and day entries, and copy controls belong in version one.
- The initial release includes the complete [60-role interface copy](docs/copy/README.md), with concise instructions and detailed explanations of those same instructions.
- Result interpretation starts with static examples. An interactive result helper and optional match notebook follow later.
- No account is necessary. Preserve match drafts locally in the browser.

[Original pasted conversation](docs/reference/original-user-notes.txt) preserves the initial brief. Later instructions above supersede the original side-by-side strategy/will sketch.

## 2. Research conclusions that shape the product

Read [research findings](docs/research/RESEARCH.md), [claim reasoning](docs/research/FAKE_CLAIM_LOGIC.md), and [mechanics](docs/research/MECHANICS.md) before implementing recommendations.

1. A believable claim has several independent requirements: information, movement, target feedback, timing, role-list legality, and future ability to demonstrate it. Sharing one feature does not make two roles interchangeable.
2. Some pairings are naturally useful: Wildling's movement information supports Tracker/Lookout; Poisoner's ordinary roleblock supports Tavern Keeper; Necromancer can emulate permitted Retributionist actions. Each has explicit limitations.
3. Some seemingly easy claims are difficult to sustain. A role that cannot visibly visit is a poor match for a visiting claim if a Tracker checks it. A claim with a public reveal button creates a demand an evil cannot normally meet.
4. Current roles must be researched rather than recalled from old guides. The preparation corrects outdated Investigator, Psychic, Admirer, Deputy, Vigilante, Pirate, Ritualist, and Coven Leader material.
5. Role and faction are separate concepts in current vanilla mechanics. Advice for a normal-faction text match must say so. Custom faction assignments and conversions can invalidate deductions that would otherwise seem obvious.
6. No claim is guaranteed safe. Community anecdotes are qualitative evidence, not success rates.

These are design conclusions from the linked research, not a promise that the app can identify the right play in every lobby.

## 3. Initial ruleset and coverage

**Default profile:** Vanilla ToS2, text chat, normal faction assignments. Show this in the header. This is an explicit advice profile, not a claim that all vanilla matches use those settings.

The research inventory contains **60 base roles: 29 Town, 17 Coven, 14 Neutral**. The four transformed Horsemen live within their parent-role guides and are searchable aliases, not four additional starting roles. Include the six Outliers, visibly marked as setup-dependent; do not imply that ordinary Random Town/Coven/Neutral always permits them. [Roster source](https://townofsalem.wiki.gg/wiki/Template:RoleNav_ToS2).

Version one can display concise context notes for Grace Period, Secret Killers, Hidden Roles, Four Horsemen, All Outliers, Town Traitor, conversion, and Flexible Factions. It must not silently apply normal-faction certainty to an unsupported setup. Initially these notes are reference content, not a full roledeck simulator.

Keep voice chat and BetterTOS2 as distinct, future profiles. In particular, the official voice-chat update changes communication, wills, and specific abilities; it is not the intended environment for this copy-will workflow. [Official voice-chat update](https://www.townofsalem.io/town-of-salem-2-introducing-voice-chat-mode-%F0%9F%93%9C%F0%9F%8E%89%F0%9F%94%8A-patch-notes-r1-5-14/).

## 4. Single-page information hierarchy

```text
SALEM SIDEKICK                              [More detail]
Vanilla · Text chat · Normal factions          [New match]

[Search role or abbreviation …]  [All] [Town] [Coven] [Neutral]
[Searchable labeled roster: icon + name + alignment; filter family]

[Icon] YOUR ROLE: WILDLING
CU — Coven Utility · One-sentence ability and faction goal

QUICK STRATEGY                              highest priority
[N1 action + target criteria] [Dawn + D2 wording] [N2 branches]
[Role-specific subgoals] [Mistakes]   “Why?” expands the same section

CLAIMS AND FAKE CLAIMS
[Claiming as: searchable ALL-role roster, independent of suggestions]
[Tracker — TI, information fit] [Lookout — TI, information fit]
[Why it fits] [What can expose it] [Use claim] [Expand obligations inline]

WILL BUILDER                               smaller, lower section
Claiming: [Tracker v]  Format: [Short / Detailed]
N1: [Target #] [Visited #s / No visit] [Optional note]
[Add next night] [Add day entry when relevant]
[Preview] [Copy will] [Copy selected entry]

Sources · Mechanics checked date · Credits · Glossary
```

The actual strategy always precedes will editing in both DOM order and visual order. The builder may be collapsed after initial use; its summary shows the claimed role and copy control. Do not automatically hide it because a timer elapsed.

Desktop: centered reading width, small grid of strategy cards, full-width claim section and builder below. Do not restore the original equal-height side-by-side will column. Mobile: one column, clear section anchors, no horizontal scrolling. The detail toggle remains discoverable without covering page controls. Compact is the chosen layout; the previous three-layout study is historical design evidence.

## 5. Role picker and search behavior

Use a searchable labeled roster instead of relying on a horizontal strip of small icons. The selected-role summary stays compact, with Change role reopening the roster.

- Every result shows the actual game PNG, readable name, and alignment, such as **Deputy · TK — Town Killing** or **Sheriff · TI — Town Investigative**. TP and TS are distinct families, not generic Town labels.
- Search names, familiar role abbreviations, alignment shorthand, and historical aliases such as Coven Leader → Archmage. Filters expose faction and alignment family; searching TK returns Town Killing roles.
- Search Famine/War/Pestilence/Death to open the parent at its current state. Mark Outliers as setup-dependent, without hiding them from the full roster.
- Recent choices are shortcuts; All roles remains visible. Enter selects a focused match; arrow navigation, clear labels, and visible focus support keyboard use.
- Empty search shows Clear search / Clear filters. Missing artwork leaves a usable text result.
- Keep the independent **Claiming as** selector equally searchable across all 60 base roles. Suggested fit never disables a claim or removes it from search. Show weak-fit reasoning without blocking selection.
- Picking or browsing a role never erases a draft. Actual role changes update a default claim only if no deliberate claim selection or existing draft would be overwritten.

## 6. Beginner guide content contract

The complete publication copy is in [the copy index](docs/copy/README.md) and [structured copy pack](docs/copy/ROLE_COPY.json). Existing research dossiers support it. Every role has nine matched compact/expanded sections:

| Section | Required beginner answer |
| --- | --- |
| Your role | Full alignment plus shorthand, ability, immediate job, faction goal |
| First night | Fresh-start legal action or preparation; target criteria; no-information fallback; reason to hold |
| At dawn | What to record; failed versus negative outcome; what the result cannot establish |
| D2 disclosure | Public alignment or full TI post; exact-role timing; private-sharing limits |
| N2 and later | A conditional next decision and changing early/middle/late priorities |
| Claim choices | Unrestricted selection; each suggestion’s alignment, real overlap, missing ability, and exposure |
| Mistakes | Consequential errors, key interactions, and a worked decision |
| Subgoals | Three role-specific checkpoints, without assuming success |
| Will notes | Correct phase/state fields, explicit example labeling, and private/public separation |

Keep opening action and role-specific subgoals prominent. Define abbreviations on demand. As TI, normally publish exact role and actual results from D2; other Town roles commonly answer the requested alignment first. If an opposing role uses a cover, the public alignment belongs to the cover: Poisoner CU → Tavern Keeper TS, Baker NA → Cleric TP.

Labels distinguish source-supported mechanics, editorial strategy, and setup exceptions. A failed action must not become an invented check or save. Do not use generic “choose a useful target” as the whole opening instruction. The role-specific copy includes target criteria and what to do when those criteria cannot yet distinguish anyone.

## 7. Expanded explanation on the same page

**More detail**, in the top right, expands all currently displayed sections where they already sit. **Less detail** restores concise text. Do not open a drawer, modal, new page, full-screen sheet, or separate encyclopedia. Do not move the will above strategy when text expands.

Each section has a stable identity and paired compact/expanded copy. The expanded text replaces its brief text and adds mechanics, reasons, examples, outcome branches, and limits. A local Why control expands just that section. Preserve role, claim, input values, focus, and a usable scroll position when expanding/collapsing.

Cover obligations expand under the selected cover, with a visible “Claimed role” label; they do not replace the actual-role N1 plan. Sources and known disputes appear within the relevant expanded material. Documentation files are review artifacts, not instructions to navigate the website to Markdown pages.

## 8. Fake-claim recommendation experience

Recommendations teach a method, not a memorized tier list. For each cover candidate show:

- **Fit:** natural ability fit / information fit only / conditional fallback / advanced or poor fit.
- **Why it fits:** the exact observation, action, or lack of movement you can plausibly support.
- **What can expose it:** named observer, feedback mismatch, public ability demand, or illegal timing.
- **What you must record:** target, result, real visit, and required future demonstration.
- **Next step:** Use this claim or expand its obligations inline.

Show useful starting candidates, with difficult alternatives labeled honestly. Always provide the complete independent claim picker; suggestions never form a whitelist. Jester and Executioner need goal-specific advice. For Town, alignment-first disclosure is the beginner default; elaborate fake investigative stories are advanced material.

Version one uses researched editorial recommendations plus visible conditions. A future assistant can evaluate entered match facts using the [claim compatibility specification](docs/reference/CONTENT_MODEL.md). Do not display fabricated win percentages or pretend to have match knowledge the user has not entered.

## 9. Will builder behavior

The builder is a formatting aid. It never implies that a result was observed or verified by the app.

- Separate actual-role notes from the selected cover-role draft.
- Maintain independent drafts by claimed role. Switching away/back retains each.
- A blank match starts with blank fields, not pre-filled player results.
- Examples are visually separate and never silently copied into live drafts.
- Add N1, N2, etc. automatically; include D2 and later day entries for relevant abilities.
- Offer target numbers, multiple visitors/destinations, role selectors, result enums, state changes, charges, and optional short notes as appropriate.
- Preserve the distinction between “no result,” “no visible visit,” “no trigger,” “not attacked,” and “innocent.”
- Track outcomes separately from intended actions. A blocked attempt is not a successful ability use.
- Short output contains only useful claim text; detailed output can include notes and day actions.
- Copy the whole will or a selected entry. Clipboard failures expose selectable text with a clear message.
- Preserve uncommon valid outcomes through an explicit manual-entry path; an incomplete model must not prevent a user recording what the game actually reported.

The [complete template reference](docs/reference/WILL_TEMPLATES.md) covers all base roles and transformed states. All roles remain selectable as claims; advanced/poor claim guidance is advisory rather than a disabled selector.

## 10. Drafts, privacy, and new match

Use browser-local storage with a schema version. Save the role, claimed role, chosen format, and drafts. A draft can contain private real-role notes that must never be included in a cover-role copy operation. Store the minimum needed for the user's session; no server or account is required.

“New match” clearly lists that it clears local match drafts and requests a single in-app confirmation to avoid accidental loss. Preferences can persist. If storage is unavailable or full, retain the working draft in memory and show a concise message. Avoid silently deleting malformed saved drafts; offer recovery text where feasible.

Do not auto-insert text into the game, read game memory, or require access to live match communications. Those are outside the requested product.

## 11. Visual and asset direction

Readable dark interface with restrained Town green, Coven purple, and Neutral gray/gold accents. A modest fantasy character is appropriate, but scan speed determines typography, spacing, and effects. Use the game's recognizable icons, not unrelated stock artwork.

The [icon manifest](docs/reference/ICON_MANIFEST.json) identifies file pages, asset URLs, dimensions, and available attribution metadata. Some Outliers intentionally use faction icons. It is research metadata, not proof of a redistribution license. Preserve source/credit information and document the final asset decision before publication. The current task does not download or publish artwork.

Respect reduced-motion preferences, keyboard use, contrast, zoom, and touch targets. Never convey recommended risk solely by red/green color.

## 12. Technical structure

Start with a static site: semantic HTML, CSS, and ES modules, with structured role and claim data. No backend or authentication. Use a local development server and a reproducible static packaging step when implementation begins. A framework can be introduced only if the actual UI complexity warrants it.

Suggested responsibilities:

- `data/roles`: stable IDs, aliases, mechanics, beginner cards, research, citations.
- `data/claims`: relationships and compatibility notes, separate from mechanics.
- `data/templates`: typed entry formats, phase rules, and export renderers.
- `ui/role-picker`, `ui/strategy-with-inline-details`, `ui/claim-picker`, `ui/will-builder`.
- `state/match`: selected roles, drafts, persistence, and migration.
- `assets/roles`: approved local icon files and attribution manifest.

These are planned paths, not files implemented in this task. The content schema must allow future modifier/faction profiles without duplicating every role page.

## 13. Build sequence and completion criteria

### Stage A — research and content preparation (this task)

Deliver the complete plan, roster research, logical claim framework, all-role publication copy in compact and inline-expanded forms, three full examples, opening-decision walkthroughs, templates, sources/revisions, asset inventory, uncertainty register, and acceptance scenarios. No website implementation. See [content-readiness evidence](docs/copy/READINESS.md).

### Stage B — vertical slice

Implement the real page hierarchy and complete four contrasting flows: Sheriff, Wildling→Tracker, Poisoner→Tavern Keeper, and Coroner. Prove role search, strategy above wills, inline expansion, unrestricted claim switching, day/night entries, and copy behavior before broad data integration.

### Stage C — full role library

Integrate every researched role, Outlier availability notes, historical aliases, four transformations, and all claim templates. No placeholder expanded sections or generic copied strategy cards. Implement the visible conditions in claim recommendations.

### Stage D — interaction and accessibility verification

Complete local persistence, reset/recovery, keyboard behavior, responsive layout, clipboard fallback, inline section anchors, icon fallbacks, source links, and long wills. Test the meaningful cases in [acceptance scenarios](docs/reference/ACCEPTANCE.md).

### Stage E — content review and release preparation

Check official updates since this research date. Resolve or visibly isolate remaining source disputes. Review icon attribution. Package the finished site and verify the intended hosting workflow during the later implementation task.

Version one is complete only when all 60 roles have useful quick strategy and an in-depth guide, the will builder supports their entry types, and core flows preserve drafts without exposing private actual-role information.

## 14. Explicitly deferred features

- Interactive result interpreter that asks for observed results and suggests follow-up questions.
- Optional 15-player notebook of claims, visits, deaths, and evidence.
- Automated will suggestions derived from user-entered notes.
- Full roledeck/modifier reasoning, role/faction reassignment support, and BetterTOS2/voice profiles.
- Share/export/import matches, analytics, cloud sync, and accounts.

The initial research models the dependencies these would need, but the initial UI should stay focused on learning the role and recording a will.
