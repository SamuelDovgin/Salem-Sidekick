# First four control-space improvements

Implemented 16 October 2026, following the first four recommendations in [the control audit](CONTROL_SPACE_AUDIT.md). The audit describes the original `c5c3bd8` baseline.

| Change | Before | After | Benefit |
| --- | --- | --- | --- |
| Role picker | Faction and alignment dropdowns, duplicate alignment chips, expanded recents | Search first, a Filters disclosure with faction selection and alignment chips, collapsible recents | On the matched 320px fixture, the first result moves from y=677 to y=357; complete initially visible results increase from 4 to 12 |
| Selected claim | A Selected button reassigns the active claim | Checkmark and Selected status | Removes a redundant action; comparison cards retain Use claim |
| Subgoals | Three route-specific checkboxes plus a generic Details expansion | Three checkboxes and the existing short footer | Keeps the checklist focused on saved progress |
| Claim reference | Separate ability, payoff/sources, and full-mechanics entry points | One Claim details entry per displayed claim | Ability, claim obligations, payoff, posting and sources are together; full mechanics remain inside an optional reference with six sections and no additional detail buttons |

The matched compact Arsonist/Trickster desktop page has 41 available buttons rather than 43, one visible claim-reference entry rather than three, and a document height of 2,631px rather than 2,730px. These counts exclude descendants of closed disclosures and dialogs. Measurements are specific to this fixture; actual page length depends on the role, claim, viewport and open panels.

## Preserved behavior

- All 64 actual roles/states, 29 Town claims, and 150 opening routes remain available.
- Search still receives focus when opening All roles, Town, Coven, Neutral, or the claim picker. Search and select text remains 16px; pinch zoom remains enabled.
- Applied faction/alignment filters appear beside the Filters label. Opening a picker resets temporary alignment filters. Recent roles remain selectable on demand.
- Ranked claim buttons apply the claim immediately; comparison remains limited to two cards. Reading reference content does not select a different claim or actual role.
- Core pairing strategy, exposure, setup restrictions, and Oracle's astral advantage stay visible outside Claim details.
- Checkpoints still persist independently for each opening route. Saved notes remain intact.

## Validation and visual comparison

- 40 unit/content checks passed.
- 114 browser checks passed, including the complete role/route traversal, all ranked claim choices, comparison selection, saved choices, references, responsive layouts, touch behavior, zoom configuration and recovery paths.
- Before/after screenshots use the same saved Arsonist/Trickster fixture, compact mode, three recent roles, and matched viewport dimensions. The role picker uses 320 × 844 CSS pixels; the claims/checklist captures use a 1360 × 1000 viewport.
- A local visual comparison is available at `http://localhost:4174/` while its preview server is running. Its screenshots and metrics live in the ignored `site/qa/control-cleanup/` folder. They are local review artifacts, not production site content.

Advanced filters and recent-role shortcuts now require one disclosure click. Full claimed-role mechanics require opening Claim details and its explicitly labeled Full mechanics reference. This deliberate cost keeps the routine choices compact.
