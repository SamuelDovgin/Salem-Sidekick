#!/usr/bin/env python3
"""Render the all-role visibility review from the same priorities used by the UI."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
pack = json.loads((ROOT/'site/dist/data/roles.json').read_text())
roles = pack['roles'] + pack['states']
destination = ROOT/'docs/design/FLOW_PRIORITY_AUDIT.md'

def cell(text):
    return text.replace('|', r'\|').replace('\n', ' ')

lines = [
    '# Salem Sidekick: flow and visibility review',
    '',
    'Reviewed 15 October 2026. Scope: the local interface, all 60 roles, four transformed states, '
    f'{sum(len(r["routes"]) for r in roles)} opening routes, claim comparisons, study guides, and will examples.',
    '',
    'The highest win is putting the rule that can ruin an action beside the action itself. '
    'Previously the caution followed the opening, checkpoints, dawn, disclosure, and later priorities. '
    'In the observed 353px-wide Oracle view it began about 2,193px down the page. '
    'The next move and its most consequential limit now share the opening card.',
    '',
    'These are editorial priorities for a beginner using a second screen during a timed match. '
    'They are ranked by the consequence of missing the information, how often it affects a decision, '
    'and how quickly the player needs it. They are not measured win rates or a balance tier list of roles. '
    'Role mechanics use the existing reviewed research baseline; this pass does not claim a new live-client validation.',
    '',
    '## Improvements ranked by payoff',
    '',
    '| Rank | Improvement | Why it earns the space | Local result |',
    '| --- | --- | --- | --- |',
    '| 1 | Put one role-specific “Must know” beside the action | Prevents an illegal action, lost charge, false clearance, failed objective, or fatal cover contradiction before it happens. | Applied to all 64 roles/states; fuller pitfalls expand in place. |',
    '| 2 | Make sections easy to find and the advice readable | A player should not search a long page to find their claim or example. | Persistent Play / Good to know / Claims / Will example navigation, clear headings, and compact text and spacing. |',
    '| 3 | Promote one useful secondary rule and ability timing | Important interactions and charges were mostly behind a small question mark. | A visible “Good to know” note and phase/use reference for every base role; current-state notes for transformations. |',
    '| 4 | Give opening routes readable names | Numbers 2 and 3 require guessing or tapping before learning what the choices mean. | All route names visible, recommended route labeled, alternative use condition shown on selection. |',
    '| 5 | Keep actual role and public claim visible together | A persistent deliberate cover can differ from the newly selected role. | Public claim shown in the role header with a direct link to its comparison; actual-role cautions stay tied to the actual role. |',
    '| 6 | Use current-state guidance after transformation | Parent-role feedback can tell Famine to keep counting Feed attempts or Death to keep planning Reap. | Separate Must know, Good to know and dawn instructions for Famine, War, Pestilence and Death. |',
    '| 7 | Move progress tracking after actionable decisions | Three checkboxes were taking the prominent companion position beside the opening. | Later priorities and route-specific checkpoints now sit together after result/disclosure guidance. |',
    '| 8 | Reduce repeated explanation in the opening and claim cards | Repeating the action, rationale and ability definition competes with the decision. | Reasoning and source depth remain inline on demand; claim strategy precedes the optional ability definition. |',
    '| 9 | Make the blank will the stronger copy action | The player needs a format for their real history more often than fictional example numbers. | Copy blank format gets the primary visual treatment; the labeled example remains available. |',
    '',
    '## Rank every content section',
    '',
    '| Priority | Content | Treatment | Role-specific adjustment |',
    '| --- | --- | --- | --- |',
    '| 1 · Act now | Opening action, eligibility, target rule and fallback | Keep visible; strongest heading and clear action. | For transformed roles use current state. For day-only or preparation roles show the legal hold/build/load rather than a fabricated night action. |',
    '| 2 · Must know | The most costly mistake or limitation | Highlight beside the action; one short rule rather than a wall of warnings. | Killing/Power roles: charge and ally harm. Investigatives: what the result cannot prove. Opposing roles: ability/cover mismatch or win requirement. |',
    '| 3 · Read and explain | At dawn and What to say | Keep visible in match order. | TI normally posts exact role/result early. Town Power keeps truthful alignment-first defaults. Other Town discloses as needed. Opposing roles follow the selected cover. |',
    '| 3 for opposing roles; 5 for truthful Town | Claim choice, obligations and exposure | Keep the selected claim visible at the top; compare the strongest options after actual-role guidance. | A cover must fit movement, timing, feedback and demonstrations. Town Power covers stay situational, below the truthful recommendation. |',
    '| 4 · Good to know | One interaction that changes interpretation or the next action | Keep the short note and phase/use summary visible. | The full role table below records the selected note for each role, including Outliers and transformations. |',
    '| 5 · Continue | N2/later priorities and route checkpoints | Keep ranked and visible after dawn/disclosure. | Checkpoints follow the chosen route; they should not imply that an attempted action succeeded. |',
    '| 6 · Record | Example will, posting timing and maintenance tips | Keep below strategy and claims; direct navigation; blank copy first. | Use the selected public role; do not mix private actual-role notes into copied examples. |',
    '| 7 · Learn the role | Identity detail, complete ability definitions, attack/defense, all charges | Short identity at top; full facts in an explicitly labeled role guide. | Promote an individual stat only when it changes the immediate decision; a standalone base stat can mislead when an ability changes it. |',
    '| 8 · Conditional depth | Other opening routes, lower-ranked claims, rare interactions, worked examples | Keep discoverable with named controls; expand detailed reasoning on demand. | A lower route can become best when its stated condition applies. Disputed interactions stay qualified in the full reference. |',
    '| 9 · Provenance and archive | Full source discussions, artwork credits, older saved notes | Keep available lower down or inside relevant detail. | Never delete retained notes merely to simplify the interface. |',
    '',
    'Nothing substantive needs to be deleted to achieve this hierarchy. What does not earn primary space: '
    'repeated identity/ability prose, the same generic setup paragraph in multiple locations, source-number rows '
    'ahead of the action, historical implementation notes, and expanded mechanics for a claim before its strategy. '
    'Keep one concise setup check visible and the complete context in setup notes or expanded guidance.',
    '',
    '## All-role priorities',
    '',
    'Read each row in order: **1. Next action → 2. Must know → 3. Good to know.** '
    '“Good to know” remains visible, but it receives less emphasis than the essential limit. '
    'Role links open the underlying research; reviewed links identify the mechanics baseline. '
    'The ordering of roles within a group is alphabetical, not a strength ranking.',
]

groups = [
    ('Town · 29 roles', [r for r in pack['roles'] if r['alignment'].startswith('Town')]),
    ('Coven · 17 roles', [r for r in pack['roles'] if r['alignment'].startswith('Coven')]),
    ('Neutral · 14 roles', [r for r in pack['roles'] if not r['alignment'].startswith(('Town','Coven'))]),
    ('Transformed states · 4 states', pack['states']),
]
for title, group in groups:
    lines += ['', '### '+title, '',
              '| Role | 1 · Next action | 2 · Highlight: Must know | 3 · Visible: Good to know |',
              '| --- | --- | --- | --- |']
    for role in sorted(group, key=lambda r: r['name']):
        guide = role['priorityGuide']
        parent_id = role.get('parentId', role['id'])
        note = lambda level: '**'+cell(guide[level]['title'])+'.** '+cell(guide[level]['body'])
        lines.append(f'| [{role["name"]}](../research/roles/{parent_id}.md) · {role["alignment_abbreviation"]} '
                     f'([reviewed]({guide["sourceUrls"][1]})) | {cell(role["routes"][0]["action"])} '
                     f'| {note("mustKnow")} | {note("goodToKnow")} |')

lines += [
    '', '## Reference placement by role family', '',
    '| Family | Keep prominent | Keep deeper |',
    '| --- | --- | --- |',
    '| Town Investigative | Exact feedback, result limits, D2 posting and target restrictions. | Exhaustive framing interactions, uncommon visibility exceptions, full worked examples. |',
    '| Town Protective | N1 availability, target rule, friendly-fire/interception differences, confirmed versus attempted protection. | Complete attack-tier and overlapping-protection cases. |',
    '| Town Killing | When the ability is ready, charge cost, Town harm and what a miss cannot prove. | Rare retaliation and death-label interactions. |',
    '| Town Power | Truthful opening, reveal/use trigger, vote impact and irreversible commitment. | Optional concealment and unusual neutral-objective interactions. |',
    '| Town Support | Setup/preparation, corpse or target eligibility, role timeline and what feedback is actually supplied. | Rare priority, conversion and overlapping-effect details. |',
    '| Coven | Actual mode/target first, chosen cover, timing/movement contradiction and team coordination. | Lower-ranked covers and exhaustive source disputes. |',
    '| Neutral Evil | Exact qualifying win condition and survival/participation requirement. | Unusual trial interactions and disputed edge-case target eligibility. |',
    '| Neutral Killing | Current action mode, progression, own safety and cover consistency. | Exhaustive defense/retaliation and observer edge cases. |',
    '| Apocalypse | Living progress, actual transformation state and post-transformation vote survival. | Parent-role mechanics after transformation. |',
    '| Outliers/conversions | Setup eligibility, role versus faction, current allegiance assumptions. | Unverified role-specific timing and special slot interactions. |',
    '', '## Evidence and limits', '',
    'The interface review uses source inspection and local desktop/mobile browser checks, not a user study. '
    'The audit preserves the existing role research, all 540 compact/expanded card pairs, ranked strategy data, '
    'and saved-note separation. Recommendations are design judgments rather than quantified improvement estimates.',
    '',
    'The structure follows [USWDS card guidance](https://designsystem.digital.gov/components/card/) on modular '
    'content, non-repetition and sequential text, and [USWDS accordion guidance](https://designsystem.digital.gov/components/accordion/) '
    'on keeping commonly needed content visible and giving disclosure controls meaningful labels. '
    'The visible Grace Period check is supported by the [official R1.5.01 notes](https://www.townofsalem.io/town-of-salem-2-bug-fixes-patch-notes-r1-5-01/).',
    '',
    'Priority copy: [role-priorities.json](../../site/content/role-priorities.json). '
    'Regenerate this review after rebuilding data with `python3 site/scripts/prepare-priority-audit.py`.',
    '',
]
destination.write_text('\n'.join(lines))
print(f'Wrote all {len(roles)} role/state priority rows to {destination}')
