# S1 implementation and value

Implemented locally on **21 October 2026**, following the [design proposal](S_TIER_DESIGN_DEEP_DIVE.md). Scope is the selected action's reading order and route interaction. S2 remains a separate proposal.

## What changed

Every role/state now presents its selected action headline and full action text first. Alternative-route eligibility, selected-cover warning, Must know rule, target guidance, pivot and tradeoff all precede the named route choices. Longer plan reasoning follows the choices, so expanding an explanation does not force someone to read it before comparing routes.

The actual role and public claim remain explicit. Every named route remains available without a dropdown. Choosing a route updates its action, targets, conditions, priorities and goals together. The chosen button retains focus and its viewport position within two pixels in the new route checks; a brief status message announces the selected plan. **View plan** returns immediately to the action heading with keyboard focus, avoiding a touch smooth-scroll landing issue under sticky navigation.

The generic ranking footer was removed from the opening card; the page's existing editorial statement remains. Expanded alternatives state eligibility once rather than repeating it as Best when. Tradeoff stays visible in both reading states. No role-specific mechanics or targeting guidance was removed or rewritten.

## Why this helps different cases

| Situation | Benefit of the new order | What prevents oversimplification |
| --- | --- | --- |
| An unfamiliar role | Read one complete selected plan before judging alternatives | Full role identity, guide access and named alternatives remain |
| An investigator interpreting evidence | The action and its interpretation limit appear before the route chooser | Must know retains the literal-result and uncertainty distinctions |
| Protection with setup restrictions | Read the enabled/disabled condition as part of the action | Existing setup and ability limits stay visible |
| No night action, preparation, or a deliberate hold | The page immediately explains what to do with that opening | Preparation is a valid plan; no artificial action is added |
| Coven or Neutral with a public cover | The actual plan and its cover constraints precede other options | Actual and claimed roles remain distinct, with claim warnings |
| A conditional alternative | See its use condition with the selected action | Selecting another route updates all its dependent content together |
| A transformed role | Read the current state's action before comparing plans | Current-state labeling and parent-state context remain |
| Repeated route comparison on a phone | Choices stay under the pointer/focus; View plan returns to the changed guidance | Alternatives stay named and visible, and are never automatically selected |
| Expanded or keyboard reading | DOM reading order matches visual order; deeper rationale follows choices | Focus, conditional text and local explanations remain available |

This supports a consistent decision flow across all 64 profiles. It does not prove that every person will prefer it. An expert whose first task is changing routes has farther to scroll to reach the choices. Stable buttons and View plan address the return trip; they do not erase that tradeoff. No timed usability study or win-rate study was performed.

## Measured page length and action position

Before/after measurements cover **64 profiles × three widths × two detail states = 384 layouts**, all with viewport height 844px. External artwork requests were blocked for consistent rendering; local assets and normal fallback labels remained. The measurements compare the same working-tree content and browser settings, not the earlier six-role sample.

**No measured page became longer.** The default card contains eight fewer whitespace-separated words across the measured profiles. Expanded alternatives additionally avoid repeating their eligibility explanation. Text sizes and touch-target sizes were retained.

| Width | Detail | Document height change across 64 profiles | Action heading appears earlier by |
| --- | --- | ---: | ---: |
| 1360px | Compact | -39 to -1px | 82–274px |
| 1360px | Expanded | -25 to -22px | 82–239px |
| 390px | Compact | -19 to -18px | 119–394px |
| 390px | Expanded | -47 to -23px | 119–394px |
| 320px | Compact | -33 to -32px | 119–473px |
| 320px | Expanded | -63 to -40px | 119–473px |

At 390px, every profile's complete action heading fits inside the initial 844px viewport. At 320px, long transformed-state headings can extend below that first screen; content continues naturally without horizontal overflow. An action heading fitting is not proof that all its explanation or warnings also fit. The action's conditions remain in its full text and adjacent warnings.

## All-role mobile evidence

Compact view at 390px. Negative height changes mean the whole document is shorter. Pixel values are rounded. These values demonstrate earlier access and controlled page length, rather than measuring comprehension or task speed.

| Role / state | Action heading earlier | Page height change |
| --- | ---: | ---: |
| Admirer | 119px | -18px |
| Amnesiac | 119px | -18px |
| Archmage | 332px | -18px |
| Arsonist | 355px | -18px |
| Baker | 316px | -18px |
| Berserker | 119px | -18px |
| Bodyguard | 158px | -18px |
| Catalyst | 119px | -19px |
| Cleric | 158px | -18px |
| Conjurer | 318px | -18px |
| Coroner | 119px | -18px |
| Covenite | 372px | -18px |
| Crusader | 158px | -18px |
| Cultist | 318px | -18px |
| Cursed Soul | 318px | -18px |
| Death | 119px | -18px |
| Deputy | 119px | -18px |
| Doomsayer | 357px | -18px |
| Dreamweaver | 355px | -18px |
| Enchanter | 174px | -18px |
| Executioner | 318px | -18px |
| Famine | 119px | -18px |
| Hex Master | 316px | -18px |
| Illusionist | 372px | -18px |
| Investigator | 119px | -18px |
| Jailor | 119px | -19px |
| Jester | 158px | -18px |
| Jinx | 371px | -18px |
| Lookout | 158px | -18px |
| Marshal | 119px | -18px |
| Mayor | 119px | -18px |
| Medusa | 394px | -18px |
| Monarch | 337px | -18px |
| Necromancer | 135px | -18px |
| Oracle | 158px | -18px |
| Pestilence | 119px | -18px |
| Pilgrim | 119px | -18px |
| Pirate | 325px | -18px |
| Plaguebearer | 316px | -18px |
| Poisoner | 174px | -18px |
| Potion Master | 371px | -18px |
| Prosecutor | 119px | -18px |
| Psychic | 119px | -18px |
| Retributionist | 119px | -18px |
| Ritualist | 357px | -18px |
| Seer | 119px | -19px |
| Serial Killer | 316px | -18px |
| Sheriff | 119px | -18px |
| Shroud | 316px | -18px |
| Socialite | 158px | -18px |
| Soul Collector | 318px | -18px |
| Spy | 119px | -18px |
| Tavern Keeper | 119px | -18px |
| Tracker | 119px | -18px |
| Trapper | 119px | -18px |
| Trickster | 119px | -18px |
| Vampire | 316px | -18px |
| Veteran | 119px | -18px |
| Vigilante | 119px | -18px |
| Voodoo Master | 371px | -18px |
| War | 119px | -18px |
| Werewolf | 119px | -18px |
| Wildling | 158px | -18px |
| Witch | 371px | -19px |

[All 384 layout measurements](S1_LAYOUT_EVIDENCE.json) preserve the before/after heights, action positions and overflow result.

## Follow-up gap verification

The verification pass found one defect that the original reduced-motion checks missed: in an expanded 320×568 touch viewport, View plan could finish smooth scrolling with the action heading about 26px behind sticky navigation. View plan now uses an immediate, focused return. Other section navigation retains its existing motion behavior. The button's accessible name now begins with its visible “View plan” label for voice-control compatibility. The new [touch regression test](../../site/tests/route-touch.mjs) covers this case with ordinary motion preferences in Chrome and Playwright WebKit, portrait and landscape, and both detail states.

The follow-up also expanded route switching checks to cover both detail states, rather than only the compact flow. A comparison against the previous renderer checked every route in both detail states: all 300 comparisons retained the original paragraphs, warning text and source links after ignoring only the intended duplicate eligibility text, equivalent tradeoff labels and removed generic ranking footer. None of those 390px comparison pages became longer.

- **72 touch route changes and 72 View plan returns passed** across Chrome 155 and Playwright WebKit 26.5, with no captured runtime errors.
- **512 structural layout states and 149 additional regressions passed**, covering dark/light and compact/expanded views for all 64 profiles.
- **56 automated axe-core 4.14.0 accessibility states passed**, with no detected WCAG violations. Incomplete/manual-review flags remain part of the generated audit report; this is not an accessibility certification.
- **128 new-control contrast checks passed** across all 64 profiles in dark/light themes, sampling 101 points between the opening card's gradient colors. The minimum View plan text contrast was **5.02:1**, above the 4.5:1 normal-text target. This supplements axe's inability to resolve that gradient automatically.
- No remaining S1 defect was found in this exercised scope after the fixes. Physical iPhone Safari, screen-reader sessions, and live-game behavior remain unverified.

## Final pre-push audit — 21 October 2026

The complete pre-push pass succeeded: role-data regeneration was unchanged; 63 model/content tests, 129 existing browser checks, 900 route transitions, 72 Chrome/WebKit touch returns, 512 structural layout states, 149 structural regressions and 56 automated accessibility states passed. No new runtime or structural errors were found. Syntax, whitespace, documentation links and the saved 384-layout evidence were also checked. Publishing documentation now matches the active GitHub Pages workflow.

## Validation and scope

- **63 model/content tests passed.**
- **129 existing browser checks passed**, with assertions updated to protect the new approved reading order.
- **40 claim-selection position transitions passed**, including selected-cover warning changes in both detail states; maximum measured drift was under 0.5px.
- **900 route transitions passed** in the new [route-flow suite](../../site/tests/route-flow.mjs): all 150 routes in both compact and expanded views at three widths, with exact action/condition/target/pivot/risk content, goals, claim isolation, focus and return to the plan checked. It also passed 384 role/detail/width checks, both themes, keyboard use, persistence and an enlarged desktop layout. Maximum measured route-button drift was **1.1875px**, within the two-pixel tolerance for browser scroll rounding. See the generated local `site/qa/route-flow-report.json` for the run.
- **384 before/after layouts:** no horizontal overflow, no captured page runtime errors, and no increased document height.
- Mobile screenshots were inspected for Medusa and Cleric; desktop/mobile samples were captured for Sheriff, Medusa, Mayor, Cleric, Hex Master and Famine.

Browser QA uses installed Chrome and responsive viewports, not a physical iPhone or live match. S2/global expansion preferences, phase behavior, copy-action placement and New match landing are outside this change. These measurements were recorded locally. GitHub Pages publication runs through the repository workflow when changes are pushed to `main`.

To reproduce the route checks, start the local server and run:

```sh
PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.js node site/tests/route-flow.mjs
```

Implementation: [shared opening-card rendering and route events](../../site/dist/app.js), [responsive rules and focus landing](../../site/dist/styles.css), [browser assertions](../../site/tests/browser.mjs).
