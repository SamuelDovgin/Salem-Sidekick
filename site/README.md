# Salem Sidekick

A complete, buildless Town of Salem 2 companion. The Compact layout puts role-specific opening decisions and subgoals before claim comparisons and example wills. All 60 base roles and four transformed states share the same components.

## Run locally

From this directory:

```sh
npm run dev
```

Open http://127.0.0.1:4173. No application dependencies or build step are required. A static host can serve `dist/` directly. Use HTTP rather than opening the HTML as a filesystem URL, because the app loads the prepared role library with `fetch`.

## Included behavior

- Top Town, Coven, Neutral, and All roles buttons open a filtered roster directly.
- Searchable actual-role selector for all 64 roles/states; a separate Town-only public-claim selector with 29 roles. Filters, aliases, recent actual roles, and real game icons remain available.
- Ranked opening-route buttons beside the first-night heading for every role/state. The recommended route starts selected; conditional alternatives update the action, target rule, explanation, pivot, tradeoff, checkpoints, and next priorities together. Route choices and checkboxes persist separately for each actual role.
- Top-right More detail expands the same sections inline; each Why control expands its own section. Cover obligations remain inline and separate from actual-role guidance.
- The top two Town-claim cards explain the pairing through specific strategy bullets and exposure. Additional ranked claims toggle inline from labeled real-role icons beside their heading, and ability definitions stay in compact dropdowns. Narrow choice rows wrap within a short vertically scrollable area. Previously selected Coven/Neutral claims migrate to the actual role’s recommended Town cover while saved notes remain archived. Public alignment follows the selected cover.
- Claim-specific illustrative examples, blank formats, posting timing, upkeep/payoff/exposure notes, and practical history-maintenance tips.
- The will builder is removed. Previous stored drafts are kept in a separate read-only archive; copied examples never include those notes.
- Role dialogs initially focus their non-editable title; search is opt-in and uses 16px text to avoid iOS focus zoom.
- Browser-local persistence, corrupt-save recovery copy, in-memory storage fallback, deliberate new-match reset, dark/light themes, keyboard selectors, mobile layout, inline glossary, sources, and artwork credits.

This is a practical guide with examples. Ability eligibility and unusual interactions remain advisory; it does not claim to simulate hidden game state or establish player guilt. Examples use clearly labeled fictional numbers and outcomes.

## Files and content updates

`dist/app.js` renders the shared interface; `model.js` preserves role/claim preferences and backward-compatible saved-note exports; `markdown.js` renders source-backed prose safely; `styles.css` controls responsive layout. `dist/data/roles.json` contains the complete prepared copy, templates, glossary, provenance, and state variants. No role-specific page code is duplicated.

Run `npm run prepare-data` to regenerate role assets. The script uses the workspace’s current research documents when available and otherwise the bundled `content-source/` snapshot. The bundle keeps this source repository reproducible when checked out separately. Update the canonical research first, then rebuild and review the resulting JSON.

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
