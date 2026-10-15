# Shared interface and help copy

This is publication text and behavior specification, not an implemented page. Use alongside the [60-role copy pack](README.md).

## Header and expansion

- **Salem Sidekick**
- Subtitle: “Choose your role. Make your next decision.”
- Profile: “Vanilla · Text chat · Normal factions”
- Top-right control: **More detail**
- Helper: “Expand the explanations in every section.”
- Expanded control: **Less detail**
- Per-section control: **Why?** / **Show less**
- Expansion keeps the same sections and inputs in place. It does not open another page, drawer, or modal.

## Setup reminder

“Follow the role card and controls in your current match. Modifiers, conversion, and role changes can alter these instructions.”

When an opening action is unavailable: “No legal action available? Check the setup and your role’s starting state. Record that you did not act; do not invent a result.”

When first opening the guide: “N1 means first night. D2 is the day after it. Start with First night below; the will can wait until you have something to record.”

## Actual-role selector

- Label: **Your actual role**
- Search: “Search role, alias, or alignment… ”
- Filters: **All roles**, **Town**, **Coven**, **Neutral**; separate **Alignment** filter.
- Result format: actual PNG · **Deputy** · **TK — Town Killing**.
- Selected-state control: **Change role**.
- Optional shortcuts: **Recent roles**. Always retain **Browse all roles**.
- Empty result: “No roles match. Clear the search or filters.”
- Outlier label: **Setup-dependent**.
- State label: “Famine · Baker transformation” (similarly War/Berserker, Pestilence/Plaguebearer, Death/Soul Collector).
- Helper: “This sets your strategy. It does not erase your chosen claim or drafts.”

## Public claim selector

- Label: **Claiming as**
- Search: “Choose any claim… ”
- Helper: “Every role is selectable. Suggestions explain fit; they do not limit your choice.”
- Nearby labels: **Your actual alignment** and **Public claim alignment**.
- Example: “Poisoner · CU — Coven Utility” / “Tavern Keeper · TS — Town Support.”
- Suggested cards heading: **Starting options**.
- Card fields: **Why it fits**, **What can expose it**, **What this claim must support**.
- Actions: **Use claim** / **Explain this claim**.
- Cover explanation heading: **Claimed role: [role]**. Keep the actual-role strategy visible above it.
- Weak-fit note: “You can use this claim. Read the mismatch before committing to it.”
- No relation note: “No specific pairing guide yet. Check this role’s timing, movement, feedback, and demonstration requirements.” This acknowledges an uncurated pair; it is not permission to show placeholder actual-role content. All 60 actual-role guides already exist.

## Learn to choose a fake claim

Compact helper: “Match what others can observe, not just how easy the will is to type.”

Expanded helper:

“Start with the action you really take. Do you visit one player, two players, a corpse, or no ordinary visible target? Then check the cover’s expected result and what the target experiences. A matching destination is useful, but a roleblock does not become a heal because the will says Cleric.

Next, ask what you will need to do tomorrow. A Vigilante story starts with loading and eventually needs a credible shot. A Trapper needs Build before Place. A Deputy may be asked to shoot. An Oracle chooses a role, not a player number. Prefer a history you can explain beyond one night.

Finally, check whether that role is allowed and whether a real public ability has already occupied its claim space. Duplicates are not automatically impossible in All Any. If the setup or evidence is unknown, keep the conclusion conditional.

You may choose a difficult claim. The purpose of these notes is to make its obligations visible. A natural overlap supports part of a story; it never guarantees that Town believes you.”

## Alignment help

| Shorthand | Full family | Example |
| --- | --- | --- |
| TI | Town Investigative | Sheriff |
| TP | Town Protective | Cleric |
| TK | Town Killing | Deputy |
| TS | Town Support | Tavern Keeper |
| TPow | Town Power | Jailor |
| CPow | Coven Power | Archmage |
| CK | Coven Killing | Conjurer |
| CD | Coven Deception | Enchanter |
| CU | Coven Utility | Poisoner |
| NA | Neutral Apocalypse | Baker |
| NE | Neutral Evil | Jester |
| NK | Neutral Killing | Werewolf |

Display Town Outlier, Coven Outlier, and Neutral Outlier in full instead of inventing an unexplained abbreviation. Under conversion/Flexible Factions, a role family and the player’s current faction must remain distinct.

“VFA means vote-for-alignment: the lobby asks for your role family. A real TI usually gives the exact role and actual results from D2. An evil using a cover gives the cover’s family, such as TS for Tavern Keeper.”

## Will builder — below strategy

- Heading: **Will notes**
- Helper: “Record what happened after choosing your action.”
- Namespace labels: **Public claim draft** / **Private actual-role notes**.
- Actions: **Add next night**, **Add day entry**, **Copy public will**, **Copy this entry**.
- Fields: **Intended action**, **Target**, **Actual feedback**, **Your interpretation**.
- Unknown state: “Not recorded yet.”
- Failed state: “Failed / no result — keep the actual message.”
- Example label: “Formatting example only. These numbers are not part of your match.”
- Public-export note: “Copies this claim draft only.”
- Clipboard fallback: “Copy could not run here. Select the text below to copy it.”
- Claim switch helper: “Each claim keeps its own draft.”

Never insert private role names, faction rosters, infection/Bread/soul progress, whispered intelligence, or actual evil actions into a public will automatically. Do not auto-create fake results. The player deliberately authors game-deception text.

## Sources and limits

- **Mechanics checked: 15 Oct 2026**
- “Mechanics are source-checked. Target priorities and claim fits are strategy suggestions.”
- “This interaction is not verified in a live client.”
- “Sources disagree here. Preserve the actual feedback rather than treating this as a hard rule.”
- **Sources** / **Terms** / **Game artwork credits** (inline expandable explanations or relevant external source links).

The copy is based on the [research source manifest](../research/SOURCE_MANIFEST.json), [claim framework](../research/FAKE_CLAIM_LOGIC.md), [mechanics](../research/MECHANICS.md), and [uncertainty register](../research/UNCERTAINTIES.md). Source links are supporting evidence; using the guide does not require leaving the single page.
