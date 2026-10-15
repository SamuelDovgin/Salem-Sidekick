"""Validate prepared documentation/copy. This does not test an application or game client."""
from pathlib import Path
import json
import re

root = Path(__file__).resolve().parents[2]
pack = json.loads((root / 'docs/copy/ROLE_COPY.json').read_text())
manifest = json.loads((root / 'docs/research/SOURCE_MANIFEST.json').read_text())
icons = json.loads((root / 'docs/reference/ICON_MANIFEST.json').read_text())['entries']
canonical = {r['role']: r for r in manifest['roles']}
roles = pack['roles']
byname = {r['name']: r for r in roles}
issues = []

def check(condition, explanation):
    if not condition:
        issues.append(explanation)

check(len(roles) == len(byname) == 60, 'Roster count/uniqueness')
check(set(byname) == set(canonical), 'Roster differs from research manifest')
check(pack['expansion'] == 'same-section-inline', 'Expansion behavior')
check(pack['claim_selection'] == 'all base roles, no fit-based lock', 'Claim selector restriction')
check(pack['application_tests_performed'] is False, 'Must not claim app tests')
icon_names = {x['role_or_state'] for x in icons}
expected_abbreviations = {
    'Town Power': 'TPow', 'Town Investigative': 'TI', 'Town Protective': 'TP',
    'Town Killing': 'TK', 'Town Support': 'TS', 'Coven Power': 'CPow',
    'Coven Killing': 'CK', 'Coven Deception': 'CD', 'Coven Utility': 'CU',
    'Neutral Apocalypse': 'NA', 'Neutral Evil': 'NE', 'Neutral Killing': 'NK',
}
expected_ids = {'identity', 'n1', 'dawn', 'disclosure', 'continuation', 'claims', 'mistakes', 'milestones', 'will'}
all_ids = []
for r in roles:
    name = r['name']
    source = canonical[name]
    file = root / 'docs/copy/roles' / (r['id'] + '.md')
    check(file.is_file(), f'{name}: missing readable copy')
    text = file.read_text() if file.is_file() else ''
    check(r['alignment'] == source['alignment'], f'{name}: alignment differs from research')
    check(r['alignment_abbreviation'] == expected_abbreviations.get(r['alignment'], r['alignment']), f'{name}: shorthand')
    check(r['source_url'] == source['url'] and r['source_revision_url'] == source['revision_url'], f'{name}: provenance')
    check(r['icon_reference']['role_or_state'] in icon_names, f'{name}: missing actual icon reference')
    check(len(r['cards']) == 9, f'{name}: section count')
    check({c['id'].removeprefix(r['id']+'-') for c in r['cards']} == expected_ids, f'{name}: section IDs')
    check(len(r['opening']['goals']) == 3, f'{name}: three subgoals')
    for field in ['action', 'target', 'dawn', 'day', 'nextnight']:
        check(bool(r['opening'][field].strip()), f'{name}: missing {field}')
    for c in r['cards']:
        all_ids.append(c['id'])
        check(bool(c['compact'].strip()), f'{name}: empty compact copy')
        check(len(c['expanded']) > len(c['compact']), f'{name}: detail does not expand {c["id"]}')
        check(c['compact'] in text and c['expanded'] in text, f'{name}: JSON/readable copy drift')
        check(not re.search(r'\b(TODO|TBD|lorem ipsum)\b', c['expanded'], re.I), f'{name}: placeholder')
    for c in r['claim_candidates']:
        check(c['role'] in canonical, f'{name}: unknown cover')
        check(c['alignment'] == canonical[c['role']]['alignment'], f'{name}: cover alignment')
        check(all(c[x].strip() for x in ['fit','why','exposure']), f'{name}: incomplete claim explanation')
    if not r['alignment'].startswith('Town'):
        check(len(r['claim_candidates']) >= 2, f'{name}: missing alternate cover explanation')
        check('PRIVATE' in r['cards'][-1]['expanded'], f'{name}: missing private-log distinction')
check(len(all_ids) == len(set(all_ids)) == 540, 'Card ID uniqueness/count')
check(len({r['opening']['action'] for r in roles}) == 60, 'Opening actions copied across roles')

# Content regression checks; these inspect authored statements, not the game engine.
def combined(name):
    return '\n'.join(c['expanded'] for c in byname[name]['cards'])
checks = {
    'Deputy is TK': byname['Deputy']['alignment_abbreviation'] == 'TK',
    'Sheriff is TI': byname['Sheriff']['alignment_abbreviation'] == 'TI',
    'Deputy no N1 ability': 'no night ability' in combined('Deputy'),
    'Deputy miss not a clear': 'A miss does not prove the target is Town' in combined('Deputy'),
    'Sheriff Innocent not confirmed': 'not Confirmed Town' in combined('Sheriff') or 'not call an innocent result a confirmed ally' in combined('Sheriff'),
    'Trapper starts Build': 'Build your trap on N1' in combined('Trapper'),
    'Vigilante starts Load': 'Load on N1' in combined('Vigilante'),
    'Coroner no initial autopsy': 'no eligible autopsy yet' in combined('Coroner'),
    'Poisoner modes and rotation': all(x in combined('Poisoner') for x in ['Smog','Drink','Hungover','different eligible target']),
    'Poisoner TS cover': any(c['role']=='Tavern Keeper' and c['alignment_abbreviation']=='TS' for c in byname['Poisoner']['claim_candidates']),
    'Baker living recipients': all(x in combined('Baker') for x in ['three other living','starting Bread','Bread is not a real Barrier']),
    'Baker TP cover': any(c['role']=='Cleric' and c['alignment_abbreviation']=='TP' for c in byname['Baker']['claim_candidates']),
    'Weak Seer cover remains available': any(c['role']=='Seer' and 'weak' in c['fit'] for c in byname['Potion Master']['claim_candidates']),
    'Illusionist official correction': 'does not hide an ally from Bodyguard, Trapper, or Deputy' in combined('Illusionist'),
    'Four transformed states explained': all(state in combined(role) for role,state in [('Baker','Famine'),('Berserker','War'),('Plaguebearer','Pestilence'),('Soul Collector','Death')]),
}
for description, result in checks.items():
    check(result, description)
report = {
    'scope': 'Prepared content only; no app, client, or novice usability test',
    'base_roles': len(roles),
    'town_roles': sum(r['alignment'].startswith('Town') for r in roles),
    'coven_roles': sum(r['alignment'].startswith('Coven') for r in roles),
    'neutral_roles': sum(r['alignment'].startswith('Neutral') for r in roles),
    'compact_expanded_pairs': len(all_ids),
    'copy_variants': len(all_ids)*2,
    'role_specific_subgoals': sum(len(r['opening']['goals']) for r in roles),
    'named_claim_options_with_alignment_reason_and_exposure': sum(len(r['claim_candidates']) for r in roles),
    'regression_content_checks': checks,
    'issues': issues,
}
(root/'docs/copy/AUDIT_REPORT.json').write_text(json.dumps(report, indent=2)+'\n')
print(json.dumps(report, indent=2))
raise SystemExit(bool(issues))
