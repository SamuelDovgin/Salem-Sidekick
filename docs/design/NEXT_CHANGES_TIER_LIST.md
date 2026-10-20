# Salem Sidekick — next changes, ranked

Reviewed **20 October 2026** against the current local working tree, including the uncommitted Town Power cover changes. Git HEAD: `9ca2097`. This is a recommendation document; app behavior was not changed for this review.

**My first change would be to put the selected action and its critical warning ahead of the route comparison controls.** Salem Sidekick already has substantial role coverage, useful explanations, and good functional safeguards. Its biggest remaining weakness is how much a player must scan during a match. Improve that path before adding more content or another major feature.

## How I ranked the changes

Priority means expected benefit to someone consulting the app while playing: reaching the next action, understanding an important constraint, choosing a claim, and copying the right text. These are product judgments informed by source inspection and browser checks, not user-study results or measured win-rate improvements.

- **S:** Highest player-facing value; start here.
- **A:** Strong follow-up improvements or concrete defects worth fixing soon.
- **B:** Useful supporting work; do after the core flow.
- **C:** Conditional ideas that need evidence before implementation.
- **D / F:** Defer or avoid.

Effort is relative: **small** = a focused change; **medium** = several related UI/content changes and regression checks; **large** = a new interaction model or infrastructure. Items within each tier are in recommended order.

## Tier list at a glance

| Tier | Change | Why it matters | Effort | Confidence |
| --- | --- | --- | --- | --- |
| **S1** | Put the selected next action first | Players should see what to do before comparing alternatives | Medium | High |
| **S2** | Separate quick play from global reference expansion | Preserve a compact match flow while keeping the research accessible | Medium | High on the problem; medium on the final design |
| **A1** | Bring selected-claim copy actions closer to the decision | Reduce the trip from choosing a cover to preparing its report or will | Small–medium | High |
| **A2** | Make phase controls explicit about their behavior | Current tab styling implies a stronger change than jumping/highlighting | Small initially | High |
| **A3** | Give New match a clear landing point | Reset currently leaves mobile users at the bottom of the new guide | Small | High; reproduced |
| **A4** | Run a browser smoke suite in pull-request CI | Existing UI protections should catch regressions before publishing | Medium | High |
| **B1** | Make claim comparisons easier to scan | Two long cards require players to find the differences themselves | Medium | Medium |
| **B2** | Reduce startup payload and measure cold loading | The entire role library is fetched before the app becomes usable | Small first; medium if split | High on payload; medium on user impact |
| **B3** | Consolidate content ownership and freshness metadata | Reduce contradictions between current behavior, research, and old audits | Medium | High |
| **B4** | Simplify rendering code and remove obsolete styling | Make future refinements easier to review and less fragile | Medium | High on maintenance value |
| **C** | Contextual glossary, shortcuts, offline support, richer links | Potentially useful, but secondary to the measured navigation problems | Varies | Medium–low |
| **D** | Accounts, sync, a new editable match tracker | Consider only after real demand appears | Large | Low current value |
| **F** | More universal density, automatic deductions, unsupported rankings | Would make the current strengths worse | — | High |

## S tier — the changes I would start with

See the [detailed S1/S2 design proposal](S_TIER_DESIGN_DEEP_DIVE.md) for proposed content order, role examples, interaction behavior, tradeoffs, implementation steps, and an assessment of overall value.

### S1. Put the selected action before route comparisons

**Observed:** The current order is role/context/navigation, then opening-route choices, a cover warning when applicable, and finally the main action heading. In the fresh 390px-wide Medusa check, that heading began at approximately **965px** down the document. At 320px it began at **1,093px**. A 900px-tall viewport therefore shows alternatives and the warning before reaching the main action heading. The selected route label does communicate part of the plan, but the complete action is farther down.

**Change:** Make the first decision block read in this order: conditional selected action → critical eligibility/claim warning → target rule → alternatives. Put any condition that changes whether to act in or immediately beside the recommendation; do not lead with an unconditional command that a later warning reverses. Keep the selected route name and named alternatives available, with the full comparison lower in the same card. Trim decorative/context overhead before reducing text size. Keep the actual role and public claim visibly distinct.

**Keep:** Must know warnings, setup restrictions, named routes, and route-specific checkpoints. The app should still explain when the default is inappropriate.

**Done when:** At 390×844, the selected action headline and start of its critical constraint fit in the first viewport for the six reviewed profiles. At 320px, there is no clipping or horizontal overflow. This is a design target, not a claim that all supporting explanation will fit. Selecting any route still updates the target, tradeoff, pivot, and goals together.

**Implementation:** [renderDefaultPlay / renderHero / renderStrategy](../../site/dist/app.js), [responsive styles](../../site/dist/styles.css).

### S2. Give global detail a deliberate reference-reading role

**Observed:** More detail expands many sections simultaneously. Across the six sampled profiles, median document height at 390px increased from **5,147px to 9,364px**. At 320px it increased from **5,826px to 10,918px**. This is a large reading surface for a companion used during a match.

**Change:** Keep local Why this plan, Messages, and Claim details as the normal way to investigate one question. Move global expansion to a clearly labeled reading option, such as “Expand full guide,” or build on the existing Role guide dialog. Start with that small hierarchy change before introducing another app-wide mode. Remove repeated generic upkeep/posting prose from the default flow while preserving role-specific constraints.

**Keep:** Immediate access to actor/recipient messages, claim exposure, and public/private distinctions. Moving the button alone will not reduce expanded document height; reducing duplicated content and defining what belongs in quick play is the substantive work.

**Done when:** A player can inspect one message or claim explanation without expanding unrelated sections. Returning from reference reading preserves their role, claim, route, checked goals, and place. A repeat layout review shows less default reading without hiding decisive warnings.

**Value clarification:** S2 merits S-tier priority as a content-and-interaction refinement. Renaming or moving More detail alone is a smaller benefit. Role guide does not currently replace every selected-route and claim-specific explanation, so preserve those local contexts.

**Implementation:** [isExpanded / render / detail-toggle handler](../../site/dist/app.js), [current control-space study](CONTROL_SPACE_TIERS.md).

## A tier — next improvements

### A1. Put useful copy actions next to the selected claim

**Observed:** Blank will copying already works, and the sticky Will example navigation provides a shortcut. However, the button itself lives deep in the document: approximately **3,394–4,378px** down in the six-role 390px sample. The one-line report format is inside Claim details alongside much longer reference content.

**Change:** Add a compact selected-claim action row with **Copy blank will** and **Copy report format** where the claim is chosen. Reuse the existing copy functions and source strings. Keep full examples and detailed guidance in Will example. Label the claim role beside the actions so a Mayor using Veteran sees exactly what will be copied.

**Done when:** The active claim's blank will/report can be copied without opening its research details. Comparison-card copying stays explicitly tied to the comparison role and never silently changes the active claim. Clipboard denial still provides selectable text. No example results or private actual-role data enter a blank copy.

**Implementation:** [renderClaimOption / renderWillFormats / copy handlers](../../site/dist/app.js).

### A2. Clarify phase navigation before adding phase filtering

**Observed:** First night / Day 2 / Later look like tabs, but all phases remain rendered. Clicking Later scrolls toward continuation and highlights it. After selecting Later and then switching from Medusa to Mayor, Later remained selected while the new role still displayed its opening plan.

**Change:** First make these explicit **Jump to** controls and remove the suggestion that they track the actual match phase. Keep Guide sections for broad navigation. If later usability checks support a real phase view, design it separately and keep cross-phase warnings accessible. Role switches should have an intentional, consistent scroll/focus policy.

**Done when:** Labels and accessibility semantics match the behavior; a role switch does not misleadingly imply that the app knows the match's current phase. Do not introduce automatic timers or infer game state.

**Implementation:** [renderStrategy / phase click handler / selectActual](../../site/dist/app.js), [state model](../../site/dist/model.js).

### A3. Return New match to a useful starting point

**Observed defect:** Starting fresh from the mobile footer reset the role to Sheriff but left the page at `scrollY = 3571`; the role heading was roughly **3,331px above the viewport**. Focus returned to the footer's New match button. The reset succeeded, but its result was easy to miss.

**Change:** After confirmation, scroll to the role area and focus a stable heading or role-selection control. Consider opening the actual-role picker as a separate product choice; the minimal fix does not need a new onboarding flow.

**Done when:** Confirming from the top or bottom gives an obvious fresh-start context, keyboard focus remains visible, reduced-motion preferences are respected, Cancel preserves the match, and display preferences survive. This is a small fix I would ship alongside S1.

**Implementation:** [confirm-reset handler](../../site/dist/app.js), [reset dialog](../../site/dist/index.html).

### A4. Put the existing browser safeguards in CI

**Observed:** The publishing workflow generates data and runs `npm test`, which covers model/content behavior. The substantial browser suite is separate and needs an externally located Playwright installation. It is not run by the current workflow. The current review passed **63 unit/content tests and 129 browser checks** locally.

**Change:** Add a reproducible browser-test dependency/setup and a short pull-request smoke job. Start with role selection, Town Power default/intentional cover behavior, claim comparison isolation, copying, mobile navigation, reset landing, and storage failure. Keep broader all-role sweeps for scheduled or release validation if their runtime is too high for every PR.

**Done when:** A broken selection/copy/reset flow blocks publishing; failure screenshots and logs are retained; the job uses a controlled browser setup rather than a developer-specific absolute module path.

**Implementation:** [Pages workflow](../../.github/workflows/pages.yml), [package scripts](../../site/package.json), [browser tests](../../site/tests/browser.mjs).

## B tier — useful supporting work

### B1. Compare claims using consistent dimensions

Compare 2 correctly preserves the active claim, but currently puts two prose-heavy cards beside or below each other. Add a short comparison summary with consistent fields: **posting burden, movement compatibility, required demonstration, and main exposure**. Derive it from reviewed pairing-specific content; do not collapse strategy into a numeric compatibility score. Retain the full reasoning below.

**Done when:** A player can explain the main difference between two claims without reading both full cards. The summary preserves conditional exceptions and never implies that matching movement proves a result. **Dependency:** establish structured fields first; avoid brittle extraction from prose.

**Implementation:** [claim rendering](../../site/dist/app.js), [claim profiles](../../site/content/claim-profiles.json), [Coven pairings](../../site/content/claim-strategy-coven.json), [Neutral pairings](../../site/content/claim-strategy-neutral.json).

### B2. Reduce the initial library cost, then decide whether to split it

The current `roles.json` is **3,078,249 bytes** on disk, and boot fetches the whole library before enabling the app. Compact JSON serialization alone would reduce it to **2,627,046 bytes**, about **15% smaller before transfer compression**. These are file-size measurements, not measured network latency. Of 64 profile icon references, 63 point to external hosts; fallbacks already exist.

Start with compact deployment JSON, retaining readable authored sources. Measure cold load and time to usable role controls under a defined network condition. Only then consider a small role index plus lazy-loaded study guides. Preserve useful failure recovery and avoid loading waterfalls. Review whether additional local artwork is appropriate under the existing provenance/rights constraints; remote icons are a resilience concern, not a demonstrated blocker in this review.

**Done when:** A reproducible cold-load benchmark improves, all roles remain discoverable, and a failed optional reference/artwork request does not prevent the current guide from working.

**Implementation:** [data builder](../../site/scripts/prepare-data.py), [boot](../../site/dist/app.js), [generated library](../../site/dist/data/roles.json).

### B3. Make current policy and evidence easier to maintain

There are authored Markdown files, structured JSON, a fallback source bundle, generated data, and several historical audits. Some older prose still describes truthful Town Power defaults or message gaps that were subsequently resolved. For example, the root README retains “truthful defaults,” while the current implementation and newer Town Power document describe temporary cover defaults.

Document which source owns each content type; validate that bundled fallback sources match their canonical inputs; generate repeated review/build metadata where practical. Mark historical reports clearly and link them to the current policy. Surface the existing mechanics review date and installed-string build in one concise evidence summary, keeping **wording verification** distinct from **live trigger verification**.

**Done when:** A maintainer can update one policy without hunting for every competing description. The app does not imply that R1.5.14 wording proves every delivery condition or that a dated check establishes today's latest game build.

**Implementation:** [root README](../../README.md), [Town Power policy](TOWN_POWER_CLAIM_DEFAULTS.md), [data builder](../../site/scripts/prepare-data.py), [source bundle](../../site/content-source/source-bundle.json), [current message limits](../research/MESSAGE_GAPS.md).

### B4. Make the implementation easier to change safely

`app.js` contains long single-line renderers, state transitions, dialogs, copy behavior, and event routing. `styles.css` retains selectors for the removed editor and repeated layout overrides. That makes a small UI refinement harder to inspect than it needs to be.

Format the files and extract cohesive modules for role selection, claims, guide/reference rendering, and clipboard behavior. Remove obsolete CSS only after checking whether retained legacy-note rendering uses it. Preserve the buildless architecture and existing saved-state compatibility. Replace whole-page rerenders selectively when a measured focus or position problem warrants it.

**Done when:** A claim-card edit can be reviewed locally, the existing suites still pass, and keyboard/scroll behavior stays stable. A framework migration is unnecessary for this work.

## C tier — prototype only when there is a clear need

| Idea | Smallest useful experiment | What would justify more work |
| --- | --- | --- |
| Contextual glossary | Explain a few unfamiliar terms inline using the existing glossary | Beginners repeatedly leave the current decision to look them up |
| Keyboard shortcuts | One discoverable role-search shortcut and one selected-claim copy action | Frequent keyboard users can complete real tasks faster without focus conflicts |
| Offline availability | Test whether a previously opened guide needs to survive a lost connection | Actual usage needs it; version/update behavior can prevent stale-mechanics confusion |
| Shareable guide state | Extend the existing role hash with explicitly shareable route/claim choices | Users need to discuss exact setups; private notes remain excluded |

Avoid adding all four by default. Existing role hashes, searchable pickers, glossary access, and graceful failures already provide part of the value.

## D / F tier — what I would defer or avoid

**Defer:** Accounts, cloud sync, a live lobby dashboard, and restoring a full editable will/match tracker. They change the product scope substantially. The current example-and-copy workflow is deliberate; validate demand before reversing it.

**Avoid:** Shrinking already compact text or touch targets further; hiding decisive warnings to meet a height target; expanding two claim cards by default; adding unsupported win-rate scores; inventing missing client messages; or automatically inferring guilt/results from incomplete information. Those changes undermine readability or the evidence distinctions the app already handles well.

## What is already good and should stay

- All **60 base roles and four transformed states** use shared components with specific guidance.
- Actual role, public claim, and private history are separated; comparison does not automatically adopt a claim.
- Town Power cover defaults and deliberate same-role choices already work. Changing to a different actual role intentionally chooses its recommended claim; this review does not treat that policy as a bug.
- Single-option claim strips already collapse, picker filters are already secondary, and the blank will already has visual priority.
- Actor/recipient explanations and the installed-English wording pass are implemented. Earlier recommendations to find Jailor/Crusader/Witch wording should not be recycled as unfinished work. Remaining live-delivery questions are a different research task.
- Local persistence, corrupt-save handling, clipboard fallback, image fallback, keyboard selectors, themes, reduced-motion support, and source links provide a useful foundation.

## Suggested implementation order

1. **First pass:** S1 action order + A3 reset landing + A1 copy placement. These produce visible benefits without a new state model.
2. **Second pass:** S2 detail scope + A2 explicit phase navigation. Validate with short tasks: identify the next move, find a received-message explanation, compare a cover, copy a blank will.
3. **In parallel with that work:** A4 browser CI, then B3 documentation/source consistency.
4. **After another usability check:** B1 comparison summaries and measured B2 loading improvements. Do B4 in small, reviewable steps as affected components change.

The sequence is a proposed backlog, not an instruction to implement all of it automatically.

## Review evidence and limits

Source inspection covered application HTML/JS/CSS, state/persistence, content generation, package scripts, deployment CI, tests, current policy, and earlier audits. The browser suite was run from a temporary copy to preserve existing workspace reports and changes.

| Fresh check | Result |
| --- | --- |
| `npm --prefix site test` | **63 passed**, 0 failed |
| Existing `tests/browser.mjs` using installed Chrome | **129 checks passed**, including all-role/route coverage, claims, copying, persistence, and failure paths |
| Additional layout sample | Sheriff, Medusa, Mayor, Cleric, Hex Master, Famine; widths 1360 / 390 / 320; compact and globally expanded; viewport height 900 |
| Additional sample overflow/runtime errors | No horizontal overflow in the 36 measured layouts; no captured page runtime errors |
| Visual inspection | Medusa mobile full page and native-size first viewport |
| New-match landing | Reproduced the footer/scroll issue described in A3 |

| Width | Sample median compact height | Sample median expanded height |
| --- | ---: | ---: |
| 1360px | 3,186px | 6,076px |
| 390px | 5,147px | 9,364px |
| 320px | 5,826px | 10,918px |

These medians describe **six selected profiles**, not all 64, and are rounded to the nearest pixel. Document height is supporting evidence for scanning cost, not a usability score. Existing sticky section navigation already reduces manual scrolling.

This review did not run a new accessibility certification, physical iPhone/Safari test, screen-reader session, timed beginner study, live game, or fresh game-mechanics audit. The public GitHub Pages URL could not be retrieved through the web tool, so findings describe the local working app and do not establish what is currently deployed. All performance recommendations above distinguish measured file size from unmeasured load time.
