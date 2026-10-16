# Salem Sidekick

A complete, buildless Town of Salem 2 companion. The Compact layout puts role-specific opening decisions and subgoals before claim comparisons and example wills. All 60 base roles and four transformed states share the same components. Cards use the original compact text sizes and padding; priority warnings, named routes, and section navigation stay visible without the expanded spacing.

## Run locally

From this directory:

```sh
npm run dev
```

Open http://127.0.0.1:4173. No application dependencies or build step are required. A static host can serve `dist/` directly. Use HTTP rather than opening the HTML as a filesystem URL, because the app loads the prepared role library with `fetch`.

## Included behavior

- Top Town, Coven, Neutral, and All roles buttons open a filtered roster directly. Alignment shortcuts (TK, TPow, NE, etc.) apply only within that picker session and reset on reopening. This top selector is the single way to change actual roles.
- A labeled Role guide button opens the complete study guide for all 60 roles and four transformed states: summary, attack/defense, ability timing and charges, win condition, interactions, feedback, mistakes, disclosure, examples, and expandable deeper explanations. Guides include full wiki and reviewed-revision links.
- Each current role has its own Must know warning beside the opening action, a visible Good to know note, and an ability phase/use summary. Four transformed states have separate current-state dawn instructions. Persistent section navigation keeps Play, Good to know, Claims, and Will example within reach. The actual role and current public claim are both visible in the header.
- Town Power has a distinct TPow opening recommendation, exact-role disclosure condition and cover exception for each role. The truthful card is the sole primary recommendation; two situational covers are available on demand. Switching into any different actual role selects that role’s recommended public claim (truthful for Town). Deliberate cover choices survive reload or reselecting the same role; old drafts remain intact.
- Searchable actual-role selector for all 64 roles/states; a separate Town-only public-claim selector with 29 roles. Filters, aliases, recent actual roles, and real game icons remain available.
- Ranked opening-route buttons sit at the top of the opening-plan card, above the action and warnings, with readable names for every role/state. The recommended route starts selected; conditional alternatives show their use condition and update the action, target rule, explanation, pivot, tradeoff, checkpoints, and next priorities together. Route choices and checkboxes persist separately for each actual role.
- Top-right More detail expands the same sections inline; each Why control expands its own section. Cover obligations remain inline and separate from actual-role guidance.
- All ranked claim icons sit above the details, including ranks one and two. One selected claim card shows by default; clicking any icon replaces it and updates the public claim, disclosure, and will in one step. Compare 2 adds one clearly labeled comparison card with a Town-only selector. Comparing does not change the active claim or will; Use claim swaps it into the active slot. The view never shows more than two claim cards. Comparison is temporary and resets when switching actual roles or reloading. Ability definitions remain in compact dropdowns, and narrow choice rows stay in a bounded vertical scroller. Saved notes remain archived.
- Claim-specific illustrative examples, blank formats, posting timing, upkeep/payoff/exposure notes, and practical history-maintenance tips.
- Audience-aware feedback and individually reviewed quiet/failure notes for all 64 roles/states: At dawn → Messages and Role guide explain what you see, what other players see, and what that evidence means for a claim. Both audience explanations have adjacent copy controls, labeled as explanations rather than game quotes. Claim details includes the selected Town role’s feedback and blank report format. 133 installed-English message lines across 60 profiles are labeled separately from paraphrased meaning; Copy wording copies an excerpt, while Copy format copies an authored chat template. Player names remain explicit placeholders. Cleric includes its own named-player attack notice, recipient notice, and a single directly copyable blank format, prominent YOU/THEM screen badges and a concise Self Barrier explanation. No installed-client capture is claimed.
- Role-specific setup and claim warnings stay beside the action, including the Medusa/TP N1 conflict. Repeated generic Baseline prose and the universal N1 reminder are omitted from gameplay cards. Oracle claim cards show the astral movement advantage directly: no ordinary Aegis visit for Tracker/Lookout; a fake claim never hides the real role’s direct visit. Arsonist advice explicitly favors Oracle over visiting protection on Clean/astral Ignite nights when earlier travel does not contradict it.
- The will builder is removed. Previous stored drafts are kept in a separate read-only archive; copied examples never include those notes.
- Role pickers automatically focus and select the search field when opened from a faction, All roles, or claim button. Alignment shortcuts and Clear filters return focus to search. Search and filter controls use 16px text to avoid iOS focus zoom while retaining user page zoom. The study guide still focuses its non-editable title.
- All native dialogs close when the user clicks the backdrop outside the dialog surface; clicking inside the dialog keeps it open.
- Browser-local persistence, corrupt-save recovery copy, in-memory storage fallback, deliberate new-match reset, dark/light themes, keyboard selectors, mobile layout, inline glossary, sources, and artwork credits.

This is a practical guide with examples. Ability eligibility and unusual interactions remain advisory; it does not claim to simulate hidden game state or establish player guilt. Examples use clearly labeled fictional numbers and outcomes.

## Files and content updates

`dist/app.js` renders the shared interface; `model.js` preserves role/claim preferences and backward-compatible saved-note exports; `markdown.js` renders source-backed prose safely; `styles.css` controls responsive layout. `dist/data/roles.json` contains the complete prepared copy, templates, glossary, provenance, and state variants. No role-specific page code is duplicated.

Run `npm run prepare-data` to regenerate role assets. The script uses the workspace’s current research documents when available and otherwise the bundled `content-source/` snapshot. The bundle keeps this source repository reproducible when checked out separately. Update the canonical research first, then rebuild and review the resulting JSON.

`content/role-feedback.json` contains all-role feedback, documented excerpts and 29 Town chat-report formats; see [the feedback research notes](../docs/research/ROLE_FEEDBACK.md) for wording limits and source conflicts. The builder validates coverage and includes the same feedback in the study guides. The 64-entry `content/feedback-audit.json` and [role-by-role audit](../docs/research/ROLE_FEEDBACK_AUDIT.md) record each resolution and exact-wording limits.

`content/role-priorities.json` contains the 64 authored Must know / Good to know pairs. The data builder validates complete coverage and attaches each role's reviewed mechanics sources. Run `python3 scripts/prepare-priority-audit.py` after rebuilding data to refresh the [all-role flow review](../docs/design/FLOW_PRIORITY_AUDIT.md).

Oracle’s original PNG is bundled locally with source and checksum credits; other role art uses source-linked remote originals. The fixed asset map and `dist/data/icon-audit.json` record the checked sources; no generated role art is substituted. Text labels and fallback symbols remain usable during an image failure.

## Validation

```sh
npm test
```

The model tests use Node’s built-in runner. Browser checks use Playwright with an installed Chrome:

```sh
PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.js node tests/browser.mjs
```

Alternatively install Playwright in your development environment and omit `PLAYWRIGHT_MODULE`. Start the local server first. `SALEM_TEST_URL` can select a different origin. The browser run writes `qa/browser-report.json`; it checks all role/state selections, public/private exports, persistence, inline expansion, selectors, mobile overflow, and failure recovery.

Publication uses the private Sites project identified in `.openai/hosting.json`. The source and deployable assets are tracked together. No runtime credentials or server storage are needed by this application.

## Whole-site audit

The [current whole-site audit](../docs/design/WEBSITE_AUDIT.md) records fixes, control purposes, remaining S–F priorities, measured page height, link-check limits, and test evidence. The [message gap matrix](../docs/research/MESSAGE_GAPS.md) distinguishes personal, team, recipient and public wording.

Run the additional structural/guide-copy sweep with:

```sh
PLAYWRIGHT_MODULE=/absolute/path/to/playwright/index.js AXE_PATH=/absolute/path/to/axe.min.js node tests/site-audit.mjs
```

The accessibility check is optional when `AXE_PATH` is omitted; the recorded audit used axe-core 4.14.0. This examines 512 role/layout/theme/detail states and writes a local report under `qa/`. Data-dependent controls disable until the library loads, source links follow the current role, and the footer reports storage fallback. Full Role guides reuse the adjacent feedback copy controls.

## Installed English message verification

The message library is now checked against the installed R1.5.14 English table (Steam build 24079984), with adjacent Source record links. See [the research outcomes](../docs/research/ROLE_FEEDBACK.md) and [primary fingerprints](../docs/research/CLIENT_MESSAGE_EVIDENCE.json). Live-game trigger testing is separate. The full game table and binaries are not shipped.

`site/scripts/verify-client-messages.py` is a read-only research verifier requiring UnityPy 1.25.4 in a separate environment; the app itself has no new dependencies. Its `--data-root` option points to the game’s installed Data directory. The normal data builder consumes only the authored JSON, and `dist/message-sources.html` supplies portable source-record links.
