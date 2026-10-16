# Entire-site audit

Reviewed 16 October 2026 against baseline `0a9eca6`, with corrections applied in this working checkout. Scope is the current website, its generated role data, source references and retained copy documentation. This does not claim a new live-game mechanics experiment or an exhaustive current-client message dictionary.

## Follow-up: actor-message research

The later installed-English pass verified 133 displayed lines and implemented the main Jailor/Crusader/Witch recommendation, plus mode-specific corrections. The current message authority is [the client research](../research/ROLE_FEEDBACK.md); [the gap matrix](../research/MESSAGE_GAPS.md) now separates wording that has been resolved from live-delivery limits. Counts and page measurements below describe the preceding website-audit baseline.

## Result

The core role → plan → result → claim → will flow passes the functional audit. The highest remaining value is **complete actor-side evidence for important claim outcomes**, followed by **containing the page growth caused by global More detail**. The default compact spacing is retained.

Fresh evidence: 52 unit checks; 125 end-to-end checks covering all 64 roles, 150 routes and ranked claims; 512 compact/expanded, dark/light, desktop/mobile role-layout states; 149 additional regressions and guide-copy checks; 56 automated accessibility states with zero detected violations; and 40 claim-selection position transitions with maximum movement under 0.5px. The browser scan found no duplicate IDs, missing ARIA references, unnamed buttons, broken runtime fragments, horizontal overflow or runtime errors after fixes. Local favicon, assets and module paths resolve.

[Machine-readable evidence](WEBSITE_AUDIT_EVIDENCE.json) retains the scope, metrics, limitations and external URL results. Reproduction: `npm test`; `tests/browser.mjs`; `tests/claim-position.mjs`; and `tests/site-audit.mjs` with Playwright and optional `AXE_PATH` pointing to axe-core 4.14.0. See the site README for commands.

## Fixed: before → after → benefit

| Finding | Before | After | Benefit |
| --- | --- | --- | --- |
| Malformed role URL | An invalid percent-encoded fragment could cause the whole app to show a library-loading error or throw on later navigation. | Invalid/unknown role fragments safely preserve a usable current/default role. | A bad link cannot break an otherwise healthy app. |
| Current-role sources | Sources opened for Jinx still linked to Jinx after switching to Cleric. | An open Sources panel updates when the actual role changes. | Citations belong to the role being reviewed. |
| Source-panel keyboard focus | Closing the panel could focus the first unrelated Sources button. | Closing returns focus to its original opener where it still exists. | Keyboard users retain their place. |
| Role guide copy controls | The complete guide printed feedback wording as static Markdown. | It now uses the same audience-aware cards and adjacent copy buttons as the main page. All 64 guide profiles were checked. | One-click copy works in the full guide as well as claim/gameplay panels. |
| N1 warning heading IDs | The page and study dialog reused `opening-cover-title`. | The dialog uses its own scoped warning ID. | The warning has an unambiguous accessible label, including after changing roles. |
| Storage status | The status updater referenced an absent element; storage denial was silent. | A compact footer status distinguishes browser-kept choices from memory-only choices. | A real persistence failure is visible without blocking play. |
| Load failure controls and skip link | Header/help controls could appear usable after data failed, and the skip link depended on the missing strategy section. | Data-dependent controls enable only after initialization. Retry stays available; Skip to content targets the permanent main landmark. | Recovery controls and keyboard navigation remain meaningful on a failed load. |
| Light-theme contrast | Gold warnings/detail controls and the neutral accent failed the normal-text contrast threshold. | The light-theme brown is darker; layout and spacing stay the same. | Important warnings are easier to read. |
| Copy priority and wording | Example-copy styling obscured which format should be primary; excerpt buttons used the generic wording label. | Blank format is emphasized; partial quotes say Copy excerpt. | The preferred action and the limits of copied text are clearer. |
| Reduced-motion navigation | Phase changes forced animated scrolling. | Phase and source navigation respect the reduced-motion setting. | User motion preferences apply to these jumps. |
| Truthful Town wording | The truthful-role will still used a believable-history heading. | Truthful Town wills say How to record your results. | The guidance matches the player’s actual situation. |
| Documentation drift | README counts still said 24 messages/top-two cards; two Jinx sections contradicted the structured copy. | The documentation matches the current single-card/optional comparison flow and Jinx’s Coven exclusion. | Future edits begin from consistent guidance. |

The contrast change follows [WCAG contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Automated target checks use the [WCAG target-size criteria](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html); canonical page position prevents a control partly covered by sticky navigation being mistaken for its whole target. The audit preserves manual-review flags; zero automated violations is not accessibility certification.

## Remaining message gaps

**120 quotes across 60 profiles is coverage, not completeness.** Only 42 profiles have a personal actor-side quote; another three have team wording visible to the actor. Recipient/public announcements cannot stand in for your own feedback. See [the complete 64-role audience matrix and remaining gaps](../research/MESSAGE_GAPS.md).

The first research targets should be current Jailor and Crusader actor feedback, Witch’s own result wording, mode-specific Potion Master/Spy/corpse-user feedback, and current captures for older Shroud/Werewolf lines. Some documented messages are deliberately excerpts. Psychic’s late-game failure triggers, Voodoo Blind’s inconsistent trigger and Coroner’s Illusion interaction remain qualified. Pilgrim/Covenite have no unique personal ability notice; Baker/Enchanter templates list no messages. No absent sentence was invented.

## S–F priorities at the website-audit baseline

These are design/editorial judgments based on this audit and the requested condensed layout, not measured win-rate improvements. Larger flow changes below remain recommendations.

| Tier | Candidate | Concrete change | Benefit / tradeoff |
| --- | --- | --- | --- |
| S | Complete high-impact actor feedback | Fill the specific actor/outcome gaps above using current evidence, especially results that could support or expose a claim. | Prevents confusing another player’s message with your own; highest decision value. |
| A | Global More detail page growth | Keep essential warnings, selected-claim fit and blank format visible; use local Messages/Claim details/Role guide for deep reading. Reduce the global expansion’s prominence or scope. | More detail roughly doubles median page height. Requires preserving quick access to messages. |
| A | Single-entry ranked strips | Collapse the ranked-strip row on the 24 profiles with only one researched option; retain the full Town picker and deliberate comparison. | Removes a button that selects the role already selected. Does not hide all-claim access. |
| B | Repeated reference entrances | Consolidate Review sources / Sources & credits, the identity Details beside Role guide, and the standalone Why this order toggle into their existing references. | Reduces duplicated controls while retaining the underlying content. |
| B | Repeated upkeep/posting prose | Keep claim-specific exposure and movement warnings visible; put repeated general payoff/posting/maintenance paragraphs in Claim details. | Shorter match reading without burying decisive warnings. |
| C | Phase bar semantics | Clarify that First night / Day 2 / Later jump and highlight; evaluate whether this adds enough beyond the section navigation. | Modest clarity benefit; true phase filtering needs more design/testing. |
| D | Additional selectors or outcome-copy rows | Avoid adding more filters, selectors or per-outcome chat-template lists without a distinct task. | Existing search, ranked icons, comparison and one blank format already cover those jobs. |
| F | Larger universal spacing, restoring two expanded claim cards, fabricated quotes | Keep these out of the next pass. | Conflicts with the condensed layout or misrepresents the evidence. |

## Measured space

Medians across all 64 roles, dark theme, 1,000px viewport height. Counts exclude descendants of closed disclosures/dialogs. Height includes the full document, not just the current viewport.

| Width | Compact median height | Expanded median height | Compact / expanded visible buttons |
| --- | ---: | ---: | ---: |
| 1360px | 2,753px | 5,784px | 39 / 47 |
| 320px | 5,055px | 10,523px | 39 / 47 |

This is why changing expanded-content scope is a larger space win than shrinking individual controls further. The defaults already keep full messages and claim mechanics behind deliberate disclosure controls.

## Controls reviewed

| Control family | Purpose | Decision |
| --- | --- | --- |
| Faction/All roles, search, aliases, filters and recent roles | Find an actual role; restore search focus and select its recommended claim. | Keep. Advanced filters and recents stay collapsed initially. |
| Opening routes and three checkpoints | Change the actual plan, target rule, priorities and tracked subgoals. | Keep; all 150 routes were exercised. |
| Ranked claim icons | Select the active public story and matching will in one click. | Keep; collapse the row only when there is no real choice. |
| Full Town picker | Reach unranked claims among all 29 Town roles. | Keep; ranked icons do not replace it. |
| Compare 2, comparison selector and Use claim | Compare without changing the public claim, then deliberately adopt it. | Keep optional; never more than two cards. |
| Local Why, Messages, Claim details and Role guide | Reveal reasoning, audience-aware messages or complete mechanics. | Keep local depth; consolidate overlapping reference entrances. |
| Copy wording/excerpt, explanation, report, blank will and example | Copy different kinds of text with different evidence/format meanings. | Keep explicit distinctions; blank format is primary and no exhaustive outcome-report list is added. |
| Phase and section navigation | Move to the relevant part of the same page. | Section navigation stays; phase navigation is a lower-priority simplification candidate. |
| Theme | Switch dark/light without changing role or claim. | Keep; contrast corrected. |
| Game terms, Setup notes and Sources | Decode vocabulary, check global assumptions and inspect evidence. | Keep access; general help stays separate from urgent role warnings. |
| New match, cancel, modal close/backdrop and recovery Retry | Clear a match deliberately or escape/recover without losing data unexpectedly. | Keep; data-dependent controls accurately disable on loading failure. |
| Previous saved notes | Read older editor data separately from copyable public formats. | Keep read-only and separate from normal exports. |

## Link and testing limits

- 197 distinct external links were collected from rendered role pages/guides/reference panels. A broader data inventory produced 386 distinct request targets, including revisions and artwork metadata.
- 182 request targets returned HTTP 200. Another 204 wiki targets returned access/rate-limit responses (108 × 403 and 96 × 429). No 404/410 was confirmed. The blocked targets remain unverified by this live link check; previously recorded source retrievals are separate evidence.
- Favicon, shipped local assets/module paths and rendered fragments resolve. The archive skill’s static Markdown-router rule is inapplicable because this site has no Markdown document routes. The skip link now targets the permanent main landmark even on load failure; adding a second router would be redundant.
- Browser tests use desktop Chrome and Chromium touch emulation. Real iOS Safari, screen-reader reading order, actual game copy/paste limits, time-pressure usability and live-game interactions were not tested here.
- Mechanics conflicts already registered in the research remain bounded claims, not hard deductions. A clean website test does not settle them.
