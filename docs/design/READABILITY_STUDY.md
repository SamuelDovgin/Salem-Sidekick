# Salem Sidekick readability study: information cards and scan-friendly pages

**Review date:** 2026-10-15

**Purpose:** Recommend a readability direction for Salem Sidekick using public design-system guidance for information-heavy cards, summaries, lists, and progressive disclosure. This is a design brief, not an implementation or a claim that the recommendations have been usability-tested.

## What the references suggest

### Use cards for separate, self-contained ideas

The [U.S. Web Design System card guidance](https://designsystem.digital.gov/components/card/) treats a card as a summary or entry point for one subject. It recommends cards for collections of related content, and suggests ordinary text, headings, or lists when a reader is meant to move through the information sequentially. It also advises against using cards as decoration or repeating the same content in every card.

The [NHS digital service manual card guidance](https://service-manual.nhs.uk/design-system/components/card/) similarly says to keep cards short and scannable, and not to use cards to emphasize content inside a long-form page. Its examples use a distinct heading, short supporting text, and a clearly named link or action. For a card group, it uses list semantics.

**Apply this to Salem Sidekick:** reserve bordered cards for distinct tasks such as the primary opening recommendation or a specific claim comparison. Keep connected phase guidance in a clear sequence, rather than splitting every sentence into a separate box.

### Use summaries for compact facts; do not put everything in a box

The [GOV.UK summary-list guidance](https://design-system.service.gov.uk/components/summary-list/) uses summary cards when there are multiple similar lists or actions that apply to a list. For a small amount of related information, it recommends a summary list with headings instead of a card.

**Apply this to Salem Sidekick:** show role alignment, attack/defense, action phase, and charges as a compact labeled fact list or table in the study view. Keep the short role identity summary outside a heavy card. Use cards only when a user needs a separate decision or action.

### Keep sequential advice in a readable flow

The [USWDS card guidance](https://designsystem.digital.gov/components/card/) says sequential, continuous text is usually better as body text and headings. [GOV.UK list guidance](https://design-system.service.gov.uk/styles/lists/) recommends lists to break text into manageable chunks, and says to number items when order matters.

**Apply this to Salem Sidekick:** present “First night → At dawn → D2 → Next night” as an ordered phase flow with consistent headings. The selected opening action remains visually dominant; the later steps read in order below it. This makes timing visible without asking the reader to infer it from color or card position.

### Keep essential information visible; collapse optional depth

The [USWDS accordion guidance](https://designsystem.digital.gov/components/accordion/) recommends disclosure when users need only a few specific pieces or when space is limited. It advises against hiding most of the page’s information behind accordions, because users then have to guess what to open and pay an interaction cost.

**Apply this to Salem Sidekick:** keep the next action, target rule, low-information fallback, and main caution visible in the compact state. Keep uncommon interactions, full ability definitions, source notes, and extended examples in clearly labeled details. Preserve the current inline expansion approach, but make each disclosure label describe the content it reveals.

### Make hierarchy and semantics visible to everyone

The [GOV.UK headings guidance](https://design-system.service.gov.uk/styles/headings/) recommends a consistent heading structure and sentence case. USWDS’s [card accessibility checklist](https://designsystem.digital.gov/components/card/accessibility-tests/) calls for clear headings, sensible keyboard order, visible focus, and testing the component in the site context. USWDS also recommends a list (`ul`/`li`) for a collection of cards so assistive technology announces the group and each item.

**Apply this to Salem Sidekick:** use real headings for role, phase, and comparison titles; use lists for route steps, checkpoints, and claim collections; ensure icon buttons have action names; and retain visible text alongside color and artwork.

## Current Salem Sidekick baseline

The inspected implementation uses one shared role page and a generated role-data file. It already has strong readability foundations:

- The first-night recommendation and ranked route are above claim examples.
- The interface has explicit actual-role labels, full alignment names, and setup context.
- Compact and expanded role explanations share the same location.
- Claim comparisons state their fit and exposure instead of relying only on icons.
- Desktop and mobile layouts are responsive, and recent QA records checks at widths down to 320 pixels.

The main readability opportunity is text density. In `site/dist/styles.css`, the base text is 14px, much of `.card-content` is 12px, claim-card paragraphs are 11px, and supporting content often sits in two- or three-column grids. These sizes are visible in code; this review did not measure them on a physical display or run a user study. They are a good place to test larger type and more breathing room, especially for the advice people need during a timed game.

## Proposed page hierarchy

1. **Role header:** role name, full alignment, and a short actual-role identity line. Keep the game icon supportive rather than the only identifier.
2. **Your next move:** one prominent recommendation with the action first, then target criteria, a no-information fallback, and the reason. Keep this as the strongest card on the page.
3. **What to watch next:** a numbered phase sequence for dawn, D2 disclosure, and N2. Each step has one short heading and a compact action/record/caution structure.
4. **Claim comparisons:** a small set of consistent, self-contained cards. Give every option the same fields: fit, what overlaps, what does not, exposure, and when it is useful. Keep lower-ranked options discoverable without letting their controls dominate the role guide.
5. **Role facts:** a compact label/value list for phase, charges, attack, defense, and special constraints. Use a table only when comparing several values across several abilities.
6. **Optional depth:** longer interactions, source notes, glossary, and worked examples in labeled expandable sections. Do not hide the core first-night instruction here.

Example of the primary recommendation’s content order:

```text
FIRST NIGHT · DEFAULT
Feed one eligible player likely to survive.

Choose: an unpressured player outside obvious danger.
If you have no read: choose an eligible unknown and record the attempt.
Why: transformation progress depends on other living recipients.
Limit: Bread does not protect the target.
```

The example is a content pattern, not a request to change Baker’s mechanics or add a new UI control.

## Specific readability changes to evaluate

### Typography and spacing

- Trial 15–16px for primary advice and 14–15px for supporting card text, with line spacing around 1.6–1.75. Treat these as starting values for comparison, not universal accessibility thresholds.
- Raise small claim explanations from 11–12px so multi-line advice remains comfortable to read. Keep metadata smaller than body text, but avoid relying on tiny text for essential setup caveats.
- Shorten long paragraphs into one instruction plus a few labeled lines or bullets. Preserve the role-specific detail in expanded sections.
- Add vertical spacing between a heading, action statement, and supporting explanation so the scan path is obvious.

### Card use and card contents

- Keep the primary recommendation visually distinct; use quieter surfaces for supporting material.
- Do not give every nested detail a border. Use spacing, headings, and dividers for content that belongs to the same topic.
- Keep claim cards structurally consistent and self-contained. Avoid repeating generic explanations in every claim card when one shared note will do.
- Keep every button or link’s purpose visible in its text. Avoid making a whole information card clickable when it contains several separate actions.
- On narrower layouts, stack decision cards in reading order. Use a two-column comparison only when both cards remain readable at the rendered width; avoid squeezing critical copy into a third column.

### Content and labels

- Lead with a verb and target: “Choose one eligible player likely to survive,” then explain why.
- Use visible phase labels such as **First night**, **At dawn**, and **D2**. Expand abbreviations on demand, but do not make an abbreviation carry a critical warning by itself.
- Prefer short, concrete field labels: **Choose**, **If no information**, **Record**, **This does not prove**, **Next**.
- State uncertainty next to the claim it qualifies. Separate source-backed mechanics from strategic recommendation using text labels, not color alone.
- Use sentence-case headings and parallel language for repeated card fields.

## Suggested review plan

These are review criteria for a future readability pass, not checks performed for this document.

| Review | What to observe |
| --- | --- |
| 10-second scan | A beginner can find the next legal action, target criteria, fallback, and main risk without opening the study guide. |
| Same-role task | After reading the primary card, the player can say what to do, what to record, and what the result does not establish. |
| Card comparison | The reader can distinguish fit, missing effect, exposure, and use condition across two claims without rereading the role definition. |
| Responsive reading | At 320, 390, 768, and desktop widths, body text wraps naturally, actions remain visible, and no card becomes a narrow column of long lines. |
| Zoom and keyboard | At 200% zoom, content remains in reading order without clipping; every control has a visible focus state and a descriptive accessible name. |
| Theme and meaning | Light and dark themes preserve readable text contrast, and status is not conveyed by color alone. |

## Reference links

- [USWDS: Card](https://designsystem.digital.gov/components/card/)
- [USWDS: Card accessibility tests](https://designsystem.digital.gov/components/card/accessibility-tests/)
- [USWDS: Accordion](https://designsystem.digital.gov/components/accordion/)
- [USWDS: Typography](https://designsystem.digital.gov/components/typography/)
- [NHS digital service manual: Card](https://service-manual.nhs.uk/design-system/components/card/)
- [GOV.UK Design System: Summary list and summary cards](https://design-system.service.gov.uk/components/summary-list/)
- [GOV.UK Design System: Headings](https://design-system.service.gov.uk/styles/headings/)
- [GOV.UK Design System: Lists](https://design-system.service.gov.uk/styles/lists/)
