# S-tier refinement proposal: action order and reference depth

**20 October 2026 · Design proposal for the current local app.** Companion to the [next-changes tier list](NEXT_CHANGES_TIER_LIST.md). This expands S1 and S2; it does not implement them. Measurements below come from the preceding review, not a new layout run. Suggested benefits and targets are hypotheses to test.

## The value I expect overall

**These changes would make the app easier to consult repeatedly during a match while preserving its value as a learning guide.** Most of the necessary content already exists. The opportunity is to make its importance, conditions, and scope apparent sooner.

S1 improves the first answer: **“Given this role, selected route, and public claim, what should I do, and what could make that wrong?”** S2 improves the follow-up: **“Explain this particular thing without making me navigate every other explanation.”** Together, they address both arriving at a decision and returning to it after investigating a question.

The strongest expected gains are faster orientation, less repeated reading, more visible constraints, and less loss of place. The gains should be most noticeable on a phone, for unfamiliar roles, and during repeated short visits to the app. They will be smaller for an experienced desktop user who already knows where everything is. They do not create new strategic knowledge, guarantee better decisions, or establish a win-rate improvement.

| Outcome | S1 contribution | S2 contribution | Confidence in expected value |
| --- | --- | --- | --- |
| Recognize the selected plan quickly | Direct: the plan appears before alternatives | Keeps it from being displaced by unrelated expansion | High |
| Notice a condition before acting | Direct: condition belongs to the action block | Keeps essential conditions visible in every reading state | High on visibility; unmeasured effect on mistakes |
| Answer a specific mechanics/message question | Clear context for the question | Direct: expand the relevant topic | Medium; local controls already exist |
| Resume after reading an explanation | Stable action location | Preserve the opener, scroll anchor, and selection | Medium–high |
| Learn how alternatives differ | Explain the baseline before the comparison | Put reasoning beside the relevant choice | Medium; depends on alternative discoverability |
| Reduce total page length | Reordering alone does not do this | Editing repetition can; moving a button alone cannot | Conditional |
| Improve network loading or game strategy | No direct benefit | No direct benefit | Outside scope |

## S1 — put a complete, conditional decision first

### 1. What is wrong with the present order?

The main opening card currently renders roughly this sequence:

1. Opening-plan label and Why this plan.
2. Compare opening routes and all named route buttons.
3. A selected-cover opening warning, when applicable.
4. Main recommendation heading.
5. Alternative-route condition, if selected.
6. Action explanation.
7. Must know warning.
8. Target rule, pivot, tradeoff, and further reasoning.

The player is asked to inspect choices before reaching the complete explanation of the selected choice. An unfamiliar role makes this harder: a route name is meaningful only after the player understands what the role is trying to accomplish and which restrictions matter.

The route labels already convey useful advice. This is a hierarchy problem, not an absence of guidance. Likewise, the current warning appearing before an action can be helpful. The problem is the combination of header/context overhead, a comparison block, several labels, and distributed conditions.

For Medusa, the measured recommendation heading starts at about **965px at 390px width** and **1,093px at 320px width**. At a 900px viewport height, it is below the initial screen. Those are heading coordinates, not measurements of how long a user needs to understand the role.

The most useful question is therefore: **How soon does the player encounter a coherent action-and-condition block?** Merely moving a short headline upward is insufficient if its crucial condition remains far away.

### 2. The exact hierarchy I recommend

Use the following reading order inside the opening card:

| Order | Content | Job |
| --- | --- | --- |
| 1 | Selected route label and status | Identify what is selected; distinguish recommended from alternative |
| 2 | Conditional action headline | State the decision, including a condition that changes whether it is appropriate |
| 3 | Critical rule or cover constraint | Explain the immediate stop/check condition |
| 4 | Target or hold rule | Make the decision usable without opening reference material |
| 5 | Change the plan when | Prevent the recommendation from looking unconditional |
| 6 | Short tradeoff | Explain what the player gives up |
| 7 | Named alternative routes | Let the player revise the decision after understanding the current one |
| 8 | Local plan reasoning | Supply the extended rationale and sources on demand |

These are content responsibilities, not a requirement to create eight separate boxes. The first six should read as one small decision card. Labels should be used only where they help scanning.

**Refinement to the original recommendation:** “Action first” means the **conditional recommendation** comes first. Do not move an unconditional imperative above the rule that makes it invalid. For a hard prerequisite, put that prerequisite in the headline or directly beside it. Never rely on a lower paragraph to reverse the headline.

Keep essential Must know information visible. Where the selected-cover warning and Must know describe the same practical problem, an authored combined presentation may avoid repetition. Where they describe different risks, keep both. Do not deduplicate by matching words or shortening text at runtime.

### 3. Concrete Medusa example

The following is a proposed presentation of the app's existing advice, not a new mechanics verification:

```text
YOUR ACTUAL ROLE: MEDUSA       PUBLIC CLAIM: CLERIC · TP

SELECTED ROUTE: HOLD N1 FOR A TP COVER
Recommended opening

Hold N1 while keeping this cover if Grace Period
is active or you have not checked it.

Before acting
Stone is a visible visit. Under Grace Period,
your claimed Cleric could not explain that N1 visit.

Target rule
Do not select a Stone target for this hold route.
Check setup and your exact cover before considering a visit.

Change the plan when
The setup and exact claimed action can explain the visit,
and a coordinated mark has a useful purpose.

Tradeoff
You delay a mark. Holding now cannot erase an earlier visit.

Other opening routes
[Mark an agreed victim when the cover can visit]
[Mark an important future victim]
[Hold when no useful death plan exists]

[Why this plan]
```

This sketch demonstrates information order, not final copy, visual dimensions, or a commitment to placing every line in the first viewport. The existing authored text remains the authority until any copy rewrite is separately reviewed.

The important change is that the player understands the hold recommendation and its reason before being invited to compare marking plans. Alternatives remain named and visible below the current decision; the first implementation should not hide them all inside a dropdown.

### 4. Apply the pattern without making every role sound the same

| Profile | What should lead | What must stay attached | Presentation mistake to avoid |
| --- | --- | --- | --- |
| Sheriff | Search an unresolved player and report the literal result | Innocent is not a confirmed ally; framing limits Suspicious | Turning an investigation recommendation into a guilt verdict |
| Medusa with a protective cover | The hold/visit decision conditioned on setup and exact cover | Visible movement and the claimed action's availability | Suggesting that every protective cover explains the same movement |
| Cleric | Barrier when enabled; otherwise hold under the described restriction | Other-player Barrier availability and limits of feedback | A large “Protect tonight” heading with the exception buried below |
| Mayor | No N1 action; prepare for a meaningful later voting decision | Reveal timing and the risk of waiting until trial | Making a passive opening look like an unfinished task |
| Hex Master | The selected no-book or book plan | Current book-dependent behavior, survival, and completion conditions | Presenting the no-book recommendation as universal |
| Famine | Current Starve plan and surviving the vote | Already transformed; do not return to Baker's Feed opening | Calling the current plan “First night” or reusing the parent opening |

These cases are useful because they test different reading needs, not merely different text lengths. A single generic “Do this now” format will fail if it cannot express a hold, preparation, conditional ability, or transformed state.

### 5. What happens when the player changes a route or claim?

**Route change:** Keep the existing deliberate selection. Update the headline, action, condition, target rule, pivot, risk, priorities, and checkpoints as one coherent result. Preserve route-specific checked goals. Keep the clicked route control in a predictable position and retain keyboard focus; do not jump the player to the page top after each comparison.

On mobile, placing route controls below the action means the updated action may be above the viewport. That is a real tradeoff. First use a concise selection confirmation and keep the selected route visibly marked. If testing shows that people miss the updated plan, add a local “Review selected plan” jump. Do not immediately add another sticky toolbar or force a scroll after every click.

**Claim change:** Refresh the cover-dependent warning and disclosure text. Keep the actual role clear. Do not silently choose a different route merely because a claim changed; that requires a separate policy and mechanics review. If a selected route's conditions no longer fit, make that condition conspicuous. The app does not know the actual game setup or whether the player has already acted.

**Role change:** Use the existing recommended-claim policy. Display the correct role/state and its selected route. S1 should not reinterpret saved progress, transform roles automatically, or reset deliberate same-role claims.

### 6. Mobile and desktop design

On mobile, use one readable column. Move the route comparison lower before considering any reductions to the header. If the action-and-condition block still starts too low, reduce repeated labels, decorative spacing, and redundant role metadata. Keep faction shortcuts, actual-role identity, public-claim identity, section navigation, and accessible text sizes.

On desktop, the action block can remain beside Good to know. The same logical order should hold even if more of the page fits on screen. Use actual DOM order for the new sequence so keyboard and screen-reader navigation agree with what is visible; avoid solving it only with CSS visual reordering.

Do not turn 844px into an inflexible content limit. Long role conditions, text zoom, translated text, and smaller viewports need natural scrolling. The useful goal is earlier access to the complete decision, not an artificially short card.

### 7. Implementation scope and main risks

Most S1 structure is concentrated in `renderDefaultPlay()`. `renderRoutePicker()`, `renderMustKnow()`, and `renderOpeningClaimWarning()` can largely be reused. Any condensed summary should be explicitly authored alongside the current route content, rather than generated by taking the first sentence or truncating a paragraph. The existing route fields already supply most of the required structure.

The current browser tests explicitly assert that routes sit above the recommendation. Those assertions would need to change with the approved design. Keep their behavioral coverage: the new tests should protect coherent action updates, visible conditions, route labels, focus, and checkpoint preservation. Passing the old positional assertion is not the goal of this redesign.

The main risks are hiding alternatives too effectively, separating a condition from its action, and making an updated action hard to find after a route change. All three can be checked with short tasks before doing an all-role polish pass.

## S2 — keep explanation local, make full reading deliberate

### 1. The problem is the scope of expansion

Local Why this plan, Messages, Claim details, and Role guide already work. S2 is therefore **a refinement of an existing strength**, not a proposal to add disclosures for the first time.

The global More detail action changes many parts of the document at once. In the prior six-profile sample:

| Width | Compact median | Globally expanded median | Increase |
| --- | ---: | ---: | ---: |
| 1360px | 3,186px | 6,076px | 2,890px, about 91% |
| 390px | 5,147px | 9,364px | 4,217px, about 82% |
| 320px | 5,826px | 10,918px | 5,092px, about 87% |

Full expansion can be useful for study. The problem during a match is that opening everything changes the position of later content and increases the amount a player must scan when their question concerns only one part.

There are also two kinds of expansion state in the code: custom cards driven by `state.detail` / `state.expanded`, and native details elements whose open states are remembered during rendering. A global toggle currently clears local expansion choices and resets tracked disclosures. A refined experience should define how these states interact instead of leaving the interaction as an incidental effect of rerendering.

### 2. Give content three clear destinations

| Destination | What belongs there | How the player reaches it |
| --- | --- | --- |
| Visible decision content | Selected action, prerequisite, important warning, target rule, pivot, main exposure | Already on the page |
| Local explanation | Reasoning for this route; this role's actor/recipient messages; this claim's obligations | A specifically named local control |
| Extended reference | Complete ability facts, rarer interactions, detailed examples, evidence records | Role guide or an explicit full-reading option |

The dividing question is: **Could missing this information change the player's immediate action or interpretation?** If yes, keep its essential meaning visible. The full explanation can still be local or reference material.

A technical source record may belong in reference reading. “This message does not prove that you caused the save” may be essential to interpreting the message and should remain adjacent to it. Importance comes from the decision, not from how technical the sentence sounds.

### 3. Recommended controls and what each promises

**Why this plan** should expand the selected route's rationale, detailed applicability, tradeoff, and sources. It should not expand claim mechanics or wills.

**Messages** should explain the actual role's feedback, including who receives the wording and what it does or does not establish. Keep the difference between quoted wording, paraphrased explanation, and a player-authored report obvious. Maintain the current accessible copy behavior.

**Claim details** should explain the selected public claim, its posting requirements, messages, and mechanical obligations. In comparison view, each card should retain its own role context. Opening details on the comparison card should not change the selected claim or copy target elsewhere.

**Role guide** should continue to mean a complete guide to the actual role/state. Its title should make that scope unmistakable when the public claim is different.

For the global action, my initial recommendation is **“Expand all explanations” in a secondary reading/options location**, with a nearby explanation that it affects the whole page. Retain it for users who prefer continuous study. Moving it is only the first step; the valuable part is making local controls sufficient and limiting repeated default prose.

I would not initially introduce a mandatory Play/Study mode switch. That adds a new concept and more state when the existing local controls and Role guide may already support the tasks.

### 4. Why Role guide cannot simply replace More detail today

The current Role guide is primarily an actual-role reference. The main page also includes the **currently selected route**, its rationale and priorities, **currently selected claim**, pairing-specific claim strategy, and comparison context.

Opening the actual-role guide does not provide an equivalent replacement for every one of those explanations. Removing global expansion and routing every question into Role guide would lose context or make users search for information that is not represented there in the same way.

Use the existing Role guide for complete actual-role study. Keep route reasoning and claim-specific explanations local. Only remove a global capability after a content map demonstrates that its information remains reachable in a sensible place.

### 5. What to shorten, and what must remain

| Current content pattern | Proposed treatment | Reason |
| --- | --- | --- |
| Action + role-specific prerequisite | Keep together and visible | Determines whether to act |
| Route pivot | Keep a short visible version | Tells the player when to stop following the default |
| Generic “rankings are editorial” explanation | One concise nearby cue; full policy under ranking help | Does not need a paragraph in multiple places |
| Posting guidance repeated in claim details and will area | Keep the actionable timing at the point of use; move duplicate explanation | Both locations need context, but not necessarily identical paragraphs |
| Cover-specific movement/demonstration risk | Keep visible in the claim card | Changes whether the cover is plausible |
| Must know and cover warning about the same exception | Consider an authored combined block | Reduce repetition without dropping either meaning |
| Actor versus recipient distinction | Keep attached to messages | Prevents copying or interpreting the wrong perspective |
| Evidence provenance and unusual interactions | Expandable reference, with essential caveats beside the claim | Supports deeper verification without dominating the decision |
| Generic upkeep prose | Short local explanation | Lower immediate value than the specific exposure |

Some repetition is beneficial. A will copied far from the main claim card still needs its role label and sample/blank distinction. Do not remove helpful context merely because the same fact exists elsewhere.

### 6. Concrete task flows

**“What does my Sheriff result mean?”** The player reaches At dawn, opens Messages, sees the role-specific interpretation limits and the relevant wording/report format, and closes that topic. The route explanation, claim mechanics, and will guidance should not expand as a side effect. This flow is already substantially possible; S2 should make it the obvious path.

**“I am Mayor but claiming Veteran; what must that claim explain?”** The player opens Veteran's Claim details. The actual Mayor identity stays clear. The content explains Veteran's obligations, while Role guide still refers to Mayor. Both roles must remain explicit so the user does not confuse a public story with an available ability.

**“I want to study the whole role before a match.”** The player opens Role guide and reads the longer actual-role reference. They can also deliberately expand all main-page explanations if they want the selected strategy/claim context in a continuous page. This reader should not have to open dozens of small controls individually merely because the default match view is compact.

**“I checked one explanation and want to return.”** Closing it restores a predictable reading position. Closing Role guide returns focus to the original opener. The selected route, comparison, claim, goals, and copied content remain unaffected by reading preferences.

### 7. Specify expansion behavior before changing it

My proposed behavior is:

- Local disclosures open only their own topic and retain their state through unrelated rerenders where that topic still exists.
- Turning on Expand all temporarily exposes the supported main-page explanations.
- Turning it off restores the local disclosure choices that existed before expansion, using a stable visible anchor where possible.
- If a user closes one topic while everything is expanded, leave the other currently open topics open and exit the global “all expanded” state. The control must not claim that everything is expanded after an exception.
- A role change clears or scopes local topics as appropriate for the new role; it does not carry an unrelated role's disclosure keys into the new page.
- Existing saved theme, role, claim, route, goals, and legacy notes survive any reading-state migration.

Global expansion currently persists as a preference. Preserve that preference in the first refinement, rather than unexpectedly resetting established users to compact. Whether New match should offer a fresh compact reading state is a separate preference decision; it is not necessary to realize S2's main value.

Use an element/section anchor plus its viewport offset when restoring position after content changes. A raw saved `scrollY` can point at a different topic after the page gets shorter. When the original element no longer exists, return to the nearest relevant heading. Respect reduced-motion settings and keep the focused control visible beneath sticky navigation.

## How the two changes reinforce each other

S1 alone makes the selected action easier to find initially, but a global expansion can still create a long page and complicate later navigation. S2 alone makes explanations more manageable, but the player still encounters route comparisons before the complete initial decision.

Together, the recurring interaction becomes:

```text
Identify actual role + public claim
                ↓
Read selected action + condition
                ↓
Check target / hold rule / pivot
                ↓
Need another plan? → Compare named alternatives
Need an explanation? → Open that topic locally
                ↓
Return to the same selected decision
```

The proposed benefit is a shorter and more predictable reading loop. It should be especially valuable when the player glances between the game and companion several times, because reorientation is needed on every visit.

## Value versus effort: what is actually worth doing?

| Scope | Expected value | Cost/risk | Recommendation |
| --- | --- | --- | --- |
| Reorder the action card, retaining current content and route controls | High initial-orientation value | Small–medium; focus and test updates | Build first |
| Review condition placement for six representative profiles, then all roles | High protection against misleading summaries | Medium editorial work | Required alongside reordering |
| Relabel/demote global expansion | Modest clarity improvement by itself | Small, with discoverability tradeoff | Useful quick refinement |
| Remove duplicated default prose and make local labels consistent | Medium–high repeated-use value | Medium editorial/UI work | Main S2 payoff |
| Preserve local expansion choices and reading position | Medium practical value | Medium state/interaction work | Include in S2 acceptance |
| Introduce a separate study application or page router | Uncertain additional value | Large scope and migration risk | Not justified by this review |

I would retain **S1 as the strongest recommendation**. I would keep **S2 in S tier only for the complete content-and-interaction refinement**. Merely moving or renaming More detail would be a smaller improvement and would not deserve S-tier priority on its own.

## Validation: prove the value rather than assume it

### Layout and behavior checks

Use Sheriff, Medusa, Mayor, Cleric, Hex Master, and Famine at 1360px, 390px, and 320px widths, then broaden to all profiles for regressions. Check compact view, local expansion, global expansion, both themes, and increased text/zoom.

For S1, target the selected action headline and the beginning of its critical condition within the first 390×844 viewport for the six fixtures. Record both action position and condition visibility. If reaching that target requires hiding a decisive rule or shrinking readable text, reject that implementation. At narrower widths or enlarged text, prioritize natural reading order and access over a fixed height target.

For S2, verify that opening a single topic changes only that topic; closing a guide restores useful focus; global expansion and collapse preserve deliberate local choices according to the policy above; and the actual/claimed roles remain distinct. Measure compact and expanded document height again, but do not use page height as the sole success criterion.

Add interaction checks for route selection after moving the route controls, claim-dependent warning changes, stable comparison/copy targets, reduced motion, and reading-state restoration. Reuse the existing behavioral suites; update positional assertions that intentionally encode the old layout.

### Short user tasks

A small formative test with a few beginners and returning users can expose problems; it will not establish statistical or win-rate claims. Have people perform matched tasks on the current and proposed designs, counterbalancing their order to reduce practice effects.

| Task | Measure | What success means |
| --- | --- | --- |
| State the selected Medusa plan and its setup condition | Time to a correct explanation; omitted conditions | Faster comprehension without losing the caveat |
| Explain why Sheriff Innocent is not a clear | Time and accuracy | The warning remains easy to find and understand |
| Switch to a relevant alternative and explain the change | Successful selection; awareness of updated action | Alternatives remain discoverable and coherent |
| Find a received-message explanation, then resume | Extra navigation; lost-place events | Reading one explanation does not disrupt the match flow |
| Distinguish Mayor's ability from Veteran claim obligations | Role attribution errors | Actual and public identities remain unambiguous |
| Read a longer guide and return to the current plan | Return success; focus/scroll continuity | Study remains convenient without losing context |

Set numerical speed-improvement goals after establishing task baselines. Do not promise “50% faster” from the document-height measurements. Accept the redesign only if comprehension improves or stays intact while navigation gets easier. If it makes alternatives harder to discover, revise that part rather than celebrating a shorter first screen.

## Recommended delivery sequence

1. Prototype the S1 card order with existing copy for the six profiles. Preserve named alternatives and inspect actual viewports.
2. Review each conditional headline and attached warning. Adjust authored presentation only where needed; keep mechanics claims unchanged.
3. Check route switching, claim changes, keyboard navigation, and scrolling before applying the pattern across all roles.
4. Map every expanded topic to visible decision content, local explanation, or reference. Resolve repetition deliberately.
5. Refine S2 controls and expansion-state behavior. Keep the actual-role guide and selected-claim/route context distinct.
6. Compare task performance and layout against the baseline, then run the full regression checks.

The overall return is better access to the app's existing knowledge: clearer first decisions, more deliberate exploration, and easier return to play. That is a substantial refinement for a companion whose usefulness depends on being consulted quickly and repeatedly.

## Implementation references

- [Application rendering and events](../../site/dist/app.js): `renderDefaultPlay`, `renderRoutePicker`, `renderOpeningClaimWarning`, `renderMustKnow`, `renderCard`, `renderClaimDetails`, `openStudy`, `isExpanded`, `expandCard`, `render`, and the global detail handler.
- [State and persistence](../../site/dist/model.js): `initialState`, `restoreState`, `selectedRoute`, and `selectActual`.
- [Layout and responsive rules](../../site/dist/styles.css).
- [Browser regression checks](../../site/tests/browser.mjs): route placement, selection, copying, navigation, and fallback coverage.
- [Canonical priorities](../../site/content/role-priorities.json) and [existing tier-list evidence](NEXT_CHANGES_TIER_LIST.md#review-evidence-and-limits).
