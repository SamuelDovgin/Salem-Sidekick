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
- Ranked opening-route buttons with readable names for every role/state. The recommended route starts selected; conditional alternatives show their use condition and update the action, target rule, explanation, pivot, tradeoff, checkpoints, and next priorities together. Route choices and checkboxes persist separately for each actual role.
- Top-right More detail expands the same sections inline; each Why control expands its own section. Cover obligations remain inline and separate from actual-role guidance.
- The top two Town-claim cards explain the pairing through specific strategy bullets and exposure. Additional ranked claims toggle inline from labeled real-role icons beside their heading, and ability definitions stay in compact dropdowns. Narrow choice rows wrap within a short vertically scrollable area. Previously selected Coven/Neutral claims migrate to the actual role’s recommended Town cover while saved notes remain archived. Public alignment follows the selected cover.
- Claim-specific illustrative examples, blank formats, posting timing, upkeep/payoff/exposure notes, and practical history-maintenance tips.
- Every first-night plan shows a Grace Period setup check after the recommended action. Claim comparisons and copyable will examples also flag role-specific restrictions such as Cleric being unable to Barrier another player on N1.
- The will builder is removed. Previous stored drafts are kept in a separate read-only archive; copied examples never include those notes.
- Role pickers automatically focus and select the search field when opened from a faction, All roles, or claim button. Alignment shortcuts and Clear filters return focus to search. Search and filter controls use 16px text to avoid iOS focus zoom while retaining user page zoom. The study guide still focuses its non-editable title.
- All native dialogs close when the user clicks the backdrop outside the dialog surface; clicking inside the dialog keeps it open.
- Browser-local persistence, corrupt-save recovery copy, in-memory storage fallback, deliberate new-match reset, dark/light themes, keyboard selectors, mobile layout, inline glossary, sources, and artwork credits.

This is a practical guide with examples. Ability eligibility and unusual interactions remain advisory; it does not claim to simulate hidden game state or establish player guilt. Examples use clearly labeled fictional numbers and outcomes.

## Files and content updates

`dist/app.js` renders the shared interface; `model.js` preserves role/claim preferences and backward-compatible saved-note exports; `markdown.js` renders source-backed prose safely; `styles.css` controls responsive layout. `dist/data/roles.json` contains the complete prepared copy, templates, glossary, provenance, and state variants. No role-specific page code is duplicated.

Run `npm run prepare-data` to regenerate role assets. The script uses the workspace’s current research documents when available and otherwise the bundled `content-source/` snapshot. The bundle keeps this source repository reproducible when checked out separately. Update the canonical research first, then rebuild and review the resulting JSON.

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
