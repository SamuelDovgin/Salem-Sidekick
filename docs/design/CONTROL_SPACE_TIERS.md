# Improvement value tiers

Ranked 16 October 2026 from the [control-space audit](CONTROL_SPACE_AUDIT.md), after the [first four improvements](CONTROL_SPACE_BEFORE_AFTER.md) shipped in `ef427cf`.

Value means expected benefit to a player using the app during a match: finding the next action, avoiding mistakes, understanding claims, and keeping the interface compact. These are product judgments based on inspected behavior and measured layouts, not measured win-rate or usage data. A quick implementation can still have a small total benefit.

| Tier | Audited improvement | Status | Value / benefit |
| --- | --- | --- | --- |
| **S** | #1: Collapse picker filters, remove duplicate alignment controls, collapse recents | Done | Largest measured selection improvement: at 320px, complete visible role results increased from 4 to 12 and the first result moved 320px higher. |
| **S** | #4: Consolidate claimed-role reference into Claim details | Done | Three reference entries become one. Ability, obligations, posting, payoff and sources are together; full mechanics retain six topics without six more Details buttons. |
| **A** | #9: Give First night / Day 2 / Later a distinct navigation purpose | Proposed; medium confidence | Strongest remaining workflow opportunity: these currently emphasize/scroll content while every phase remains rendered. A clear phase view or simpler phase-jump treatment could reduce confusion and scrolling. Preserve urgent constraints across phases; validate the design before assuming a space saving. |
| **A** | #5: Move global More detail into View/options or a deliberate study mode | Proposed; medium–high confidence | Helps keep match mode compact and frees primary header space. The audit baseline expanded from 2,730px to 4,710px after global expansion. That is the expansion cost, not a promised saving from moving its button. |
| **B** | #7: Merge hero Details into Role guide | Proposed | Gives actual-role reference one clear home and removes a neighboring explanation control. Keep the short description and urgent objective visible. |
| **B** | #8: Compress Why this order into contextual How ranked help | Proposed | Reclaims a dedicated heading/control row for editorial policy. Preserve the role-specific My take and Town Power concealment conditions. |
| **B** | #10: Label the full claim picker All claims / All 29 Town claims | Proposed | Makes its unique purpose clear beside the ranked shortlist and active card. Small space benefit, useful navigation clarity. |
| **B** | #11: Move generic Setup notes into help or Role guide | Proposed | Reduces introductory overhead. Concrete setup restrictions, Medusa's N1 warning and Oracle's astral advantage remain beside their relevant decisions. |
| **C** | #2: Replace active Selected button with status | Done | Removes a redundant action and makes the state clearer; little space saved by itself. Comparison Use claim remains actionable. |
| **C** | #3: Remove subgoal Details | Done | Removes a generic explanation toggle. All three route-specific checkboxes and saved progress remain. |
| **C** | #6: Keep one general sources/credits entry | Proposed | Two controls open the same panel. Easy duplication cleanup, but the controls are near the footer and offer limited match-flow benefit. |
| **D** | #12: Further reduce Copy example prominence | Defer; partly addressed | Blank copying already has the stronger visual treatment in the current CSS. Making example copying a text action would add only a small further hierarchy improvement. Both actions are useful. |
| **E** | Secondary finding: remove unused handlers and obsolete CSS | Optional maintenance | Improves code hygiene; provides essentially no visible space or gameplay benefit by itself. |
| **F** | Hide named opening routes, bury urgent warnings, shrink readable text/tap areas further, or remove access to unranked claims | Avoid; not a backlog recommendation | These would obstruct decisions the audit says to preserve. Compactness should come from removing duplication and organizing secondary material. |

All twelve ranked audit candidates are included above. E covers a secondary maintenance finding; F describes changes to reject, rather than unfinished improvements. Done items retain their value tier so completed work can be compared with the remaining backlog.

## Recommended next work

First clarify phase navigation: decide whether the controls should show one phase or visibly jump to its section. This has the strongest remaining potential and the greatest interaction uncertainty. Then move global detail into View/options while preserving contextual explanations. For a small, predictable cleanup batch, combine hero Details, How ranked, All claims labeling, and generic Setup notes.

The original audit's numeric order favored safe first-pass work as well as benefit. This tier list ranks total expected player value, so the already completed Selected and subgoal-button removals sit below the larger workflow improvements.
