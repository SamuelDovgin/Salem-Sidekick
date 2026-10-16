#!/usr/bin/env python3
"""Export the UI's ranked route/claim copy for source review."""
from pathlib import Path
import json
SITE=Path(__file__).resolve().parents[1]
ROOT=SITE.parent
pack=json.loads((SITE/'dist/data/roles.json').read_text())
roles=pack['roles']+pack['states']
output=ROOT/'docs/copy/RANKED_STRATEGIES.md'
if not output.parent.is_dir():
    raise SystemExit('Run this optional documentation export from the full research repository.')
count_routes=sum(len(r['routes']) for r in roles)
count_claims=sum(len(r['claimOptions']) for r in pack['roles'] if r['faction']!='Town')
parts=[f'''# Ranked opening routes and claim strategies

Current website copy, updated 16 October 2026; mechanics baseline checked 15 October 2026. **{len(roles)} roles/states, {count_routes} opening routes, {count_claims} opposing-role claim pairings, and 29 truthful Town-role explanations.**

The first route is the low-information beginner recommendation. Later routes are conditional alternatives, not weaker actions in every situation. All ranked claim buttons sit above one active card. Clicking any rank replaces that card immediately; Compare 2 optionally adds one independent comparison, with at most two claim cards visible. Role definitions live in inline dropdowns. All 29 Town claims remain selectable, while the researched shortlist ranks only choices with an explainable use case.

Mechanic facts come from the linked role pages and official patch notes; the ordering, target preferences, and false-claim strategy are editorial deductions. No measured win-rate claim or live-client experiment is implied. This guide assumes vanilla text chat and normal factions. Source audits: [Town](../research/ROUTES_TOWN_SOURCES.md), [Coven](../research/CLAIM_ROUTES_COVEN_SOURCES.md), [Neutral/Apocalypse](../research/CLAIM_ROUTES_NEUTRAL_SOURCES.md).

Official ability names remain in the copyable example wills. Route selections change the plan, checkpoints, and follow-up priorities; they do not perform an action or silently change the chosen public claim.
''']
for role in roles:
    parts.append(f"## {role['name']}\n\n{role['alignment_abbreviation']} — {role['alignment']}.")
    for route in role['routes']:
        parts.append(f"### Route {route['rank']}: {route['label']}"+(' (recommended)' if route['id']=='default' else ''))
        for label,key in [('Best when','when'),('Action','action'),('Target rule','targetRule'),('Why','reason'),('Change plan when','pivot'),('Tradeoff','risk')]:
            parts.append(f"**{label}:** {route[key]}")
        parts.append('**Checkpoints:**\n\n'+'\n'.join('- '+g for g in route['goals']))
        parts.append('**Follow-up priorities:**\n\n'+'\n'.join(f'{i}. {g}' for i,g in enumerate(route['laterPriorities'],1)))
        parts.append('Mechanics: '+', '.join(f'[source {i}]({u})' for i,u in enumerate(route['sourceUrls'],1))+'.')
    parts.append('### Claim strategy\n\n'+role['claimAudit']['summary'])
    for claim in role['claimOptions']:
        parts.append(f"#### {claim['rank']}. {claim['role']} ({claim['alignment_abbreviation']}) — {claim['tag']}")
        parts.append(claim['why'])
        parts.append('\n'.join('- '+g for g in claim['strategy']))
        parts.append('**Best when:** '+claim['bestWhen'])
        parts.append('**Exposure/limits:** '+claim['exposure'])
        parts.append('Mechanics: '+', '.join(f'[source {i}]({u})' for i,u in enumerate(claim['sourceUrls'],1))+'.')
output.write_text('\n\n'.join(parts).rstrip()+'\n')
print(f'Exported {count_routes} routes and {count_claims} opposing-role claim pairings to {output}')
