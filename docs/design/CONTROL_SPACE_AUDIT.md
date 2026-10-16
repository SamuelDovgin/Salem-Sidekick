# Control purpose and space audit

Reviewed 16 October 2026 against commit `c5c3bd8`. This is a review and recommendation document; application code and behavior had not been changed at the audit baseline.

The first four recommendations are now implemented; see [the before/after follow-up](CONTROL_SPACE_BEFORE_AFTER.md) for the changes, measured benefits, and validation.

## Recommendation

The strongest space improvement is to collapse duplicated picker filters and consolidate overlapping explanation controls. Preserve direct role selection, opening routes, one-click claim selection, the active claim, and actionable warnings.

The clearest individual controls to remove are the active card’s **Selected** button and the checklist’s **Details** button. Neither offers a new gameplay decision. Most other controls have a valid function; the problem is their placement, overlap, or prominence.

These priorities are design judgments grounded in the current interface and the user’s preference for a compact match companion. They are not frequency-of-use measurements or an estimate of win-rate improvement.

## Scope and evidence

- Reviewed all shared renderers, click/change handlers, native disclosure controls, dialogs, conditional recovery controls, and the role/claim data variants.
- Data coverage: 60 base roles, four transformed states, 150 opening routes, and 29 selectable Town claim profiles. Shared controls cover every role/state; this was not a new manual playthrough of all 64 roles.
- Fresh live inspection: the Arsonist/Trickster page at 1360, 390, and 320 CSS pixels; compact and global-detail states; actual-role picker; Town-claim picker; role study dialog; full claimed-role mechanics; checklist details; phase navigation.
- The existing browser QA report for the latest implementation records 106 passed checks and no runtime errors. That full regression suite was not rerun for this review.
- The visible role, selected claim, opening route, compact mode, and temporary viewport override were restored after inspection. No match reset was performed.

### Measured examples

Counts below describe controls available across the rendered page, not controls simultaneously visible above the fold. Descendants of closed disclosures and closed dialogs are excluded. Choice counts include buttons available by scrolling their tray.

| State | Buttons | Native disclosure summaries | Page height | Other observations |
| --- | ---: | ---: | ---: | --- |
| Arsonist/Trickster, compact, 1360px | 43 | 3 | 2,730px | Nine individual detail buttons; three phase buttons; five section-jump buttons, including the hero shortcut |
| Same page, global More detail | 43 | 3 | 4,710px | About 73% taller; available links grow from three to fifteen |
| Same compact page, 390px | 43 | 3 | 4,392px | Sticky header/navigation total 113px; recommendation heading begins about 766px from document top |
| Same compact page, 320px | 43 | 3 | 5,006px | Sticky header/navigation total 125px; recommendation heading begins about 834px from document top |
| 320px with full claimed-role mechanics open | 49 | 3 | 5,896px | Adds six cards and six more detail buttons; about 890px of additional page height |

The default shared template implies approximately 37–43 page buttons across roles, depending on the number of routes and ranked claims. This estimate assumes compact mode, one active ranked claim, and no archived notes or open reference panels. An unranked active claim adds a selector button; comparison and open references add further controls.

At 320px, the **All roles picker** contains two select menus, sixteen alignment shortcut buttons, search, Clear filters, Close, 64 results, and three recent-role shortcuts in this session. Its filter row occupies about 117px, alignment chips another 204px, and recent roles another 92px. The first result starts around viewport y=719 in an 844px-high viewport. The dialog itself is about 760px tall. Most of its initial visible area is consumed before the role results.

The Town-claim picker reduces this to one select menu and seven alignment chips before the 29 role results. The role study dialog uses one close button, eight section links and four deeper-rule disclosures in the sampled Arsonist guide; that complexity is already behind a deliberate reference action.

## Ranked changes

| Rank | Candidate | Recommended change | Reason / tradeoff | Confidence |
| --- | --- | --- | --- | --- |
| 1 | Picker filter bank | Keep autofocus search prominent. Put advanced filters behind **Filters** and use either alignment chips or the alignment dropdown. Make recent roles compact or collapsible on narrow screens. | The current dropdown and chips set the same alignment filter. At 320px, over 300px goes to filter rows/chips before recent roles and results. Retain keyboard filtering and the top Town/Coven/Neutral/All shortcuts. | High |
| 2 | Active card’s **Selected** button | Render a noninteractive status badge. Keep **Use claim** on a comparison card. | Clicking Selected reassigns the current claim and rerenders; it offers no new visible choice. A status should look like a status. | High |
| 3 | **Your subgoals → Details** | Remove the toggle and retain the existing short footer if an explanation is needed. | Its expansion is generic metadata: checkpoints follow the selected route and do not change the role/claim. It adds no role-specific checkpoint or decision. | High |
| 4 | Three separate claimed-role explanation entries | Combine **What does [claim] do?**, **Payoff, posting & sources**, and **Expand [claim] mechanics** into one clearly organized **Claim details** panel. | The current full mechanics expansion adds six cards with six more detail buttons. The panel should contain a quick ability explanation, deeper reference, and sources; core fit/exposure and critical movement warnings remain on the active card. | High |
| 5 | Global **More detail** in the sticky header | Retain the capability in a compact View/options menu or as a deliberate study mode. Keep useful local explanations close to their sections. | One click expands several unrelated sections and increased the measured desktop page height by about 73%. The tradeoff is one additional step to enter full-study mode. | Medium–high |
| 6 | **Review sources** plus **Sources & credits** | Keep one general sources/credits entry. Put role-specific citations inside the relevant role/claim reference panel. | Both general buttons open the same reference area. The Good to know source link is useful provenance but does not need its own prominent row. Preserve source access and reviewed-revision links. | High |
| 7 | Hero **Details** next to **Role guide** | Keep the short role description and Role guide; move the expanded identity explanation into that guide. | Two neighboring controls explain the actual role. Preserve any role-specific objective that belongs in the visible summary. | Medium–high |
| 8 | **Why this order? → Details** row | Replace the standalone heading/toggle with a small **How ranked** link in the claim selector or reference panel. | Much of the expansion describes editorial ranking policy. The visible My take paragraph already explains the role-specific recommendation. Preserve Town Power’s concealment conditions. | High |
| 9 | First night / Day 2 / Later controls | Give them a distinct job: actual phase-focused content, or one clear phase-jump control. | They currently scroll/highlight while all phase sections remain rendered. This overlaps the main section navigation and looks more like filtering than it is. True phase views could reduce scrolling but must keep urgent role/claim constraints available. This is a larger follow-up change. | Medium |
| 10 | Current-role button under **CLAIMING AS** | Keep the full Town library picker, but label it **All 29 Town claims** or **All claims** and make it compact. | The ranked strip and active card already show the selection. The unique value of this button is reaching claims outside the ranked shortlist. Do not remove that capability. | High |
| 11 | Generic **Setup notes** above the role | Move general guide-reading notes into Role guide/help. | This repeats general assumptions and abbreviations. Concrete setup restrictions stay beside the relevant action and will; the Medusa N1 warning must not be buried. | High |
| 12 | Two similarly styled copy buttons | Keep **Copy blank format** prominent; make **Copy example** a secondary text action. | Both actions are legitimate. Their visual weight should reflect the user’s preference for a usable blank format during a match. Keep blank copying one-click. | Medium–high |

### Suggested first pass

Start with picker filters, Selected status, checklist Details, duplicate sources, and the How ranked row. These have clear purposes that can be preserved with less interface overhead. Consolidate the claim reference next. Treat changing phase navigation and relocating global More detail as a separate, more substantial workflow decision.

Removing or integrating Selected, checklist Details, hero Details, the duplicate Review sources button, and the standalone ranking Details button would remove five currently rendered buttons from the sampled page while retaining their useful information or actions elsewhere. That is a proposed count reduction, not a measured redesign result.

## Controls that should remain easy to reach

- Town/Coven/Neutral/All role shortcuts, search autofocus, and keyboard role selection.
- Named opening routes at the top of the plan, as explicitly requested.
- The selected action, target rule, and **Must know** warning.
- **Good to know**, especially mechanics that change evidence or movement such as Oracle’s astral Aegis.
- All ranked claim choices in one strip; selecting one replaces the active card in one click.
- One active claim card by default, with **Compare 2** as an optional second card. Comparison must not silently change the will or active claim.
- Direct access to the example will and one-click blank copying.
- A reachable New match action with its confirmation. Header/footer placement is responsive: both reset buttons are not simultaneously visible in the sampled layouts.
- Dialog close buttons, Escape, backdrop dismissal, and reset cancellation.

## Complete control inventory

| Control / family | Actual purpose | Verdict |
| --- | --- | --- |
| Brand/home link | Opens the same application root, restoring saved choices; it is not New match | Low visual cost; do not imply that it starts a new match |
| Global More detail / Less detail | Expands or compacts role, plan, warning and example explanations | Useful study capability; move out of primary match controls |
| Theme icon | Switches dark/light appearance | Keep as a utility; suitable for View/options |
| New match, responsive header/footer entry | Opens reset confirmation for choices, goals and archived notes | Keep reachable; do not remove confirmation |
| Setup notes | Explains setup caveats, abbreviations and enabled controls | Move generic information into help; preserve concrete warnings |
| Four faction/all role buttons | Opens a scoped actual-role picker | Keep; valuable direct entry points |
| Hero Details | Adds identity, alignment and win-condition explanation | Merge with actual Role guide, keeping urgent objectives visible |
| Role guide | Opens the full actual-role study dialog | Keep as the main actual-role reference entry |
| Hero Review claim | Jumps from actual role to claim selection | Useful shortcut; can be the clickable public-claim line rather than a separate text button |
| Play / Good to know / Claims / Will example | Jumps and focuses the corresponding section | Keep; these serve distinct match tasks |
| First night / Day 2 / Later | Sets phase emphasis and scrolls to a card, without removing other phase content | Clarify or consolidate with phase navigation |
| Ranked opening-route buttons | Replaces plan, checkpoints and later priorities | Keep visible at the top; not a candidate to hide again |
| Why this plan | Reveals rationale, conditions, tradeoffs and deeper role guidance | Keep a contextual explanation; avoid repeating already visible text |
| All pitfalls | Reveals further role-specific failure modes and sources | Keep collapsed behind the visible Must know warning |
| At dawn Details | Expands feedback and interpretation guidance | Keep when it adds concrete role-specific information |
| What to say Details | Expands disclosure and claim guidance | Useful, but align it with the selected claim’s posting advice |
| Next priorities Details | Adds rationale and continuation depth | Keep optional; do not use it merely to repeat the same priorities |
| Three subgoal checkboxes | Tracks route-specific progress | Real action; optionally fold into a Later/checklist section, with completed count visible |
| Subgoal Details | Explains that goals follow the route | Remove the toggle |
| Ranked claim icon buttons | Selects a public claim and replaces the active card | Keep; all ranks now have one consistent interaction |
| Full Town-claim picker button | Opens all 29 Town roles, including unranked choices | Keep, with a clearer All claims label |
| Compare 2 / Show one claim | Adds/removes the optional second card | Keep as one optional action |
| Compare with select | Changes only the second card | Keep conditional on comparison mode; retain 16px input text |
| Active Selected button | Reassigns the already active claim | Convert to a status badge |
| Comparison Use claim | Swaps the compared choice into the active slot and updates the will | Keep; its purpose is distinct from browsing a comparison |
| What does [claim] do? | Explains the claimed ability and what that claim promises | Preserve the content inside consolidated Claim details |
| Payoff, posting & sources | Shows general cover payoff, posting obligations and references | Merge reference entry; posting also appears in the will section from the same profile field |
| Why this order Details | Explains editorial ranking policy and references | Compress into How ranked help |
| Expand [claim] mechanics | Opens six role-reference cards for the selected cover | Consolidate; preserve actual-role versus claimed-role labels |
| Copy blank format | Copies the selected role’s blank will | Keep prominent and one-click |
| Copy example | Copies the illustrative example | Keep secondary; it is not the same action as copying a blank |
| Example Details | Adds effort, exposure and longer explanation | Useful only where it adds to the card; include shared material in Claim details instead of duplicating it |
| When to claim/post and will tips | Explains how to maintain and disclose the selected history | Keep practical guidance visible; avoid duplicating identical posting paragraphs in two places |
| Reviewed mechanics link | Opens the current role’s reviewed external source | Keep provenance in a compact reference area |
| Review sources / Sources & credits | Opens the same general sources/credits panel | One general entry is sufficient |
| Terms | Opens the game glossary | Keep; rename Game terms to distinguish it from legal terms |
| Reference Close | Closes the glossary/source area and returns focus | Keep |
| Picker search | Filters name, aliases and alignments; Enter selects the first result | Keep prominent with autofocus and select-on-open |
| Faction select | Changes the picker’s faction scope | Keep available, with advanced filters if appropriate |
| Alignment select | Changes alignment scope | Duplicates alignment chips; keep one presentation |
| Alignment shortcut chips, including All | Applies the same alignment value as the select | Choose chips or select; sixteen simultaneous chips are costly on mobile |
| Clear filters | Resets query, faction and alignment and focuses search | Show/enable when a filter is actually active; when already clear, focusing search is its only effect |
| Role-result buttons | Selects actual role or public claim, according to picker mode | Essential content, not clutter to remove merely because there are many results |
| Recent-role shortcuts | Opens a recently used actual role quickly | Useful; make compact/collapsible if they push results off the initial picker view |
| Picker / study Close buttons | Dismisses dialogs and restores focus | Keep explicit close controls alongside keyboard/backdrop dismissal |
| Study section links | Jumps within a long reference | Keep inside the study dialog |
| Study deeper-rule disclosures | Reveals advanced rules on demand | Good use of collapse; already outside the primary gameplay page |
| Full wiki / reviewed revision links | Provides original and versioned mechanics sources | Keep inside reference; no need to repeat them in every primary section |
| Keep this match / Start fresh | Cancels or confirms resetting saved match choices | Both necessary and clearly different |
| Previous saved notes and per-draft disclosures | Opens read-only earlier public/private notes, only when notes exist | Keep collapsed and conditional; do not expose private notes in copied examples |
| Try again | Reloads after role-library loading fails | Keep conditional; costs no space in a healthy load |
| Clipboard fallback | Selects the example text and explains manual copying after denial | Keep the existing conditional fallback; it does not need a new persistent button |

## Secondary space findings

- Several labels repeat information already present in the adjacent controls: Your actual role, Claiming as, Selected claim, a selected radio-style button, and a Selected button. Keep actual role and public claim unambiguous, but reduce redundant identity/status furniture.
- The sampled 320px layout reserves 125px for sticky header and navigation. The recommendation starts near the initial viewport bottom even without a cover warning. Consolidating utilities and introductory metadata is a better candidate than shrinking the body text further.
- The selector’s current bounded scroller protects page width. Keep that benefit, but make it obvious that more choices can be scrolled into view.
- Many small text-button boxes are around 20–23 CSS pixels tall. This is not, by itself, a WCAG failure determination: spacing, inline and equivalent-target exceptions matter. Reduce duplication while preserving usable target areas. W3C documents the 24px minimum and its exceptions in [Understanding Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum).
- The code retains a choose-actual handler with no current rendered button and legacy claim-preview/other-claims styling. These are code-hygiene candidates, not meaningful screen-space savings.

## Design basis and limits

Frequently needed actions should remain visible; advanced or rarely used reference belongs behind a clear secondary entry. Multiple overlapping routes to the same advanced material can recreate the clutter that collapse was intended to solve. This use of progressive disclosure follows [Nielsen Norman Group’s guidance](https://www.nngroup.com/articles/progressive-disclosure/). The specific ranking above comes from this application’s behavior and the user’s stated workflow, not from that article claiming these exact controls should be removed.

No physical phone, on-screen mobile keyboard, usage telemetry, or new live-game mechanics validation was involved. This audit evaluates interface purpose, space, navigation and duplication. It does not re-audit the game-rule accuracy of all role text.

## Source map

Pinned implementation for this review: [c5c3bd8](https://github.com/SamuelDovgin/Salem-Sidekick/commit/c5c3bd8).

- [Shared detail controls and cards](https://github.com/SamuelDovgin/Salem-Sidekick/blob/c5c3bd8/site/dist/app.js#L27)
- [Main navigation and checklist](https://github.com/SamuelDovgin/Salem-Sidekick/blob/c5c3bd8/site/dist/app.js#L49)
- [Role header, claim basics and claim cards](https://github.com/SamuelDovgin/Salem-Sidekick/blob/c5c3bd8/site/dist/app.js#L57)
- [Unified claim selector and comparison](https://github.com/SamuelDovgin/Salem-Sidekick/blob/c5c3bd8/site/dist/app.js#L62)
- [Examples and archived notes](https://github.com/SamuelDovgin/Salem-Sidekick/blob/c5c3bd8/site/dist/app.js#L72)
- [Picker filtering and open behavior](https://github.com/SamuelDovgin/Salem-Sidekick/blob/c5c3bd8/site/dist/app.js#L88)
- [Role study dialog](https://github.com/SamuelDovgin/Salem-Sidekick/blob/c5c3bd8/site/dist/app.js#L103)
- [Control handlers and conditional recovery](https://github.com/SamuelDovgin/Salem-Sidekick/blob/c5c3bd8/site/dist/app.js#L114)
- [Header, footer, dialogs and reset controls](https://github.com/SamuelDovgin/Salem-Sidekick/blob/c5c3bd8/site/dist/index.html)
