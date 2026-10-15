#!/usr/bin/env python3
"""Build reviewable static role content. Does not fetch media or modify authored copy."""
import copy
import json
import re
from pathlib import Path

PROJECT = Path(__file__).resolve().parents[1]
ROOT = PROJECT.parent
BUNDLE_PATH = PROJECT/'content-source/source-bundle.json'
def source_text(relative):
    candidate = ROOT/relative
    if candidate.is_file():
        return candidate.read_text()
    return json.loads(BUNDLE_PATH.read_text())[relative]
DEST = PROJECT / 'dist/data/roles.json'
CDN = 'https://cdn.jsdelivr.net/gh/AlchlcDvl/RoleIconRecolors@162d3df30238f4d014cf729969119380509df7b4/Vanilla/'
# Explicit mappings verified against the pinned Git tree and public source metadata.
# Pilgrim/Covenite intentionally use their real faction icons, as the wiki does.
VANILLA_NAMES = {'Archmage':'CovenLeader', 'Pilgrim':'Town', 'Covenite':'Coven', 'Cursed Soul':'CursedSoul_Vanilla'}
# These current role icons are absent from Vanilla/. Fandom MediaWiki imageinfo
# supplied the actual original URLs below; never substitute the BTOS Oracle art.
SOURCE_ICON_URLS = {
 'Oracle':'https://static.wikia.nocookie.net/town-of-salem/images/5/54/RoleIcon_Oracle_ToS2.png/revision/latest?cb=20250111024152',
 'Catalyst':'https://static.wikia.nocookie.net/town-of-salem/images/1/1c/RoleIcon_Catalyst_ToS2.png/revision/latest?cb=20250711031054',
 'Cultist':'https://static.wikia.nocookie.net/town-of-salem/images/f/f1/RoleIcon_Cultist_ToS2.png/revision/latest?cb=20250711030513'
}

def icon_url(name):
    if name == 'Oracle':
        return './assets/roles/oracle.png'
    return SOURCE_ICON_URLS.get(name, CDN + VANILLA_NAMES.get(name, name.replace(' ', '')) + '.png')

# Action tuples are (label, target type, phase). These are editing options, not
# predictions that a client will permit an action, and never create results.
ACTION_SPECS = {
 'Jailor': [('Select prisoner','player','D'),('Jail / release','player','N'),('Execute','player','N')],
 'Marshal': [('Tribunal','none','D')], 'Mayor': [('Reveal','none','D')],
 'Monarch': [('Knight','player','N')], 'Prosecutor': [('Prosecute','player','D')],
 'Coroner': [('Autopsy','corpse','D'),('Examine','player','N'),('No autopsy yet','none','N')],
 'Investigator': [('Investigate','player','N')], 'Lookout': [('Watch','player','N')],
 'Psychic': [('Good vision','player','N'),('Evil vision','player','N')],
 'Seer': [('Compare','pair','N')], 'Sheriff': [('Search','player','N')],
 'Spy': [('Bug','player','N'),('Existing bug trigger','player','N')],
 'Tracker': [('Track','player','N')],
 'Bodyguard': [('Guard','player','N'),('Self Protect','none','N')],
 'Cleric': [('Barrier','player','N'),('Self Barrier','none','N')],
 'Crusader': [('Fortify','player','N')], 'Oracle': [('Aegis','roles','N')],
 'Trapper': [('Build','none','N'),('Place trap','player','N'),('Trap trigger','player','N'),('Dismantle','none','N')],
 'Deputy': [('Shoot','player','D')],
 'Trickster': [('Mirror','player','N'),('Self Mirror','none','N'),('Unleash','player','N')],
 'Veteran': [('Alert','none','N'),('No Alert','none','N')],
 'Vigilante': [('Load','none','N'),('Shoot','player','N')],
 'Admirer': [('Admire','player','N'),('Care','player','N'),('Bestow','player','D')],
 'Amnesiac': [('Remembered role','roles','D'),('No role remembered','none','D')],
 'Retributionist': [('Reanimate','corpse','N'),('No eligible corpse','none','N')],
 'Socialite': [('Invite','player','D'),('Party','player','N')],
 'Tavern Keeper': [('Drink','player','N')], 'Catalyst': [('Overcharge','player','N')],
 'Pilgrim': [('Observation','none','D')],
 'Archmage': [('Retrain','player','N'),('Book attack','player','N')],
 'Hex Master': [('Hex','player','N'),('Book hex / attack','player','N')],
 'Witch': [('Control','pair','N'),('Book control / attack','pair','N')],
 'Conjurer': [('Meteor','player','D'),('Book attack','player','N')],
 'Ritualist': [('Ritual guess','player','N'),('Book attack','player','N')],
 'Jinx': [('Jinx','player','N'),('Book attack','player','N')],
 'Dreamweaver': [('Dreamweave','player','N'),('Book attack','player','N')],
 'Enchanter': [('Enchant','player','N'),('Alterate','player','N'),('Book attack','player','N')],
 'Illusionist': [('Illusion','player','N'),('Phantasm','none','N'),('Disguise','roles','N'),('Book attack','player','N')],
 'Medusa': [('Stone','player','N'),('Book stone / attack','player','N')],
 'Necromancer': [('Reanimate','corpse','N'),('Book attack','player','N'),('No eligible corpse','none','N')],
 'Poisoner': [('Drink','player','N'),('Smog','player','N'),('Book attack / Drink','player','N')],
 'Potion Master': [('Barrier potion','player','N'),('Reveal potion','player','N'),('Harmful potion','player','N')],
 'Voodoo Master': [('Silence','player','N'),('Deafen','player','N'),('Blind','player','N'),('Book attack','player','N')],
 'Wildling': [('Sense','player','N'),('Book sense / attack','player','N')],
 'Covenite': [('Book attack','player','N'),('No book / no role action','none','N')],
 'Cultist': [('Indoctrinate','player','D'),('Book attack','player','N')],
 'Baker': [('Feed','player','N'),('Became Famine','none','D'),('Starve','player','N')],
 'Berserker': [('Attack','player','N'),('Became War','none','D'),('War rampage','pair','N')],
 'Plaguebearer': [('Infect','player','N'),('Seeded infections','none','N'),('Became Pestilence','none','D'),('Spread Pestilence','player','N')],
 'Soul Collector': [('Reap','player','N'),('Soul progress','none','N'),('Became Death','none','D'),('Survive day as Death','none','D')],
 'Doomsayer': [('Three guesses','none','N')],
 'Executioner': [('Assigned target','player','D'),('Target outcome','player','D'),('Became Jester','none','D')],
 'Jester': [('Chatterbox progress','none','D'),('Hanging outcome','none','D'),('Haunt','player','N')],
 'Pirate': [('Scour','player','N'),('Plunder','player','N')],
 'Arsonist': [('Douse','player','N'),('Passive douse','player','N'),('Clean self','none','N'),('Ignite','none','N')],
 'Serial Killer': [('Attack','player','N'),('Cautious setting','none','N'),('Retaliation','player','N')],
 'Shroud': [('Direct Attack','player','N'),('Shroud','player','N')],
 'Werewolf': [('Scent','player','N'),('Persistent scent result','player','N'),('Full Moon attack','player','N')],
 'Cursed Soul': [('Intended swap','player','N'),('Acquired role','roles','D')],
 'Vampire': [('Convert','player','N'),('Drain','player','N'),('Succession','none','D')]
}
RESULTS = {
 'Coroner': ['Match','No match'], 'Investigator': ['Murder','Trespassing','Murder and Trespassing','No Crime'],
 'Lookout': ['Visitors (enter numbers in result notes)','No visible visitors'],
 'Psychic': ['Good vision (enter players in result notes)','Evil vision (enter players in result notes)'],
 'Seer': ['Friends','Enemies','Partial failure'], 'Sheriff': ['Innocent','Suspicious'],
 'Spy': ['No trigger','Trigger (enter reported role in result notes)'],
 'Tracker': ['Destination(s) (enter players in result notes)','No visible visit'],
 'Bodyguard': ['No reported attack','Saved target','Attacked'],
 'Cleric': ['No reported attack','Attacked and saved'], 'Crusader': ['No reported attack','Target attacked','Visitor attacked'],
 'Oracle': ['No reported attack','Attack / save reported'], 'Trapper': ['Built','Placed','Triggered (enter roles in result notes)','Dismantled'],
 'Deputy': ['Hit','Miss'], 'Trickster': ['No absorption','Absorbed (enter attacker role in result notes)','Unleashed'],
 'Admirer': ['Not Obsession','Obsession found','Care applied','Bestow applied'],
 'Socialite': ['Rejected someone','No rejection'], 'Tavern Keeper': ['Actual block feedback (enter exact text)','Hungover'],
 'Dreamweaver': ['Dreamwoven','Cured','Insomniac'],
 'Poisoner': ['Actual block feedback (enter exact text)','Unknown Obstacle','Hungover'],
 'Potion Master': ['Revealed role (enter in result notes)','No reported attack','Attacked and saved'],
 'Wildling': ['Destinations / visitors (enter in result notes)','No visible visit'],
 'Jester': ['Chatterbox complete','Hanged','Haunt outcome (enter exact text)'],
 'Pirate': ['Landlubber','Not Landlubber','Plunder outcome (enter exact text)'],
 'Cursed Soul': ['Swap outcome (enter actual role / faction in result notes)'],
 'Vampire': ['Converted','Drained','Conversion failed / Drain fallback']
}
ALIASES = {
 'Jailor':['Jail','Jailer'], 'Marshal':['Marsh'], 'Mayor':['May'], 'Monarch':['Mon'],
 'Prosecutor':['Pros'], 'Coroner':['Coro'], 'Investigator':['Invest','Inv'],
 'Lookout':['LO'], 'Psychic':['Psy'], 'Seer':[], 'Sheriff':['Sher'], 'Spy':[], 'Tracker':['Track'],
 'Bodyguard':['BG'], 'Cleric':['Cler'], 'Crusader':['Crus'], 'Oracle':['Ora'], 'Trapper':['Trap'],
 'Deputy':['Dep'], 'Trickster':['Trick'], 'Veteran':['Vet'], 'Vigilante':['Vigi','Vig'],
 'Admirer':['Adm'], 'Amnesiac':['Amne'], 'Retributionist':['Ret','Retri'],
 'Socialite':['Soc'], 'Tavern Keeper':['Tavern','Tav','Tavernkeeper'], 'Catalyst':['Cat'], 'Pilgrim':['Pil'],
 'Archmage':['Coven Leader','CL','Arch'], 'Hex Master':['HM','Hexmaster'], 'Witch':[], 'Conjurer':['Conj'],
 'Ritualist':['Rit'], 'Jinx':[], 'Dreamweaver':['DW'], 'Enchanter':['Ench'], 'Illusionist':['Illu'],
 'Medusa':['Dusa'], 'Necromancer':['Necro'], 'Poisoner':['Pois'], 'Potion Master':['PM','Potionmaster'],
 'Voodoo Master':['VM','Voodoomaster'], 'Wildling':['Wild'], 'Covenite':[], 'Cultist':[],
 'Baker':['Bak','Famine'], 'Berserker':['Bers','War'], 'Plaguebearer':['PB','Pestilence','Pest'],
 'Soul Collector':['SC','Soulcollector','Death'], 'Doomsayer':['Doom'], 'Executioner':['Exe'],
 'Jester':['Jest'], 'Pirate':['Pir'], 'Arsonist':['Arso'], 'Serial Killer':['SK','Serialkiller'],
 'Shroud':[], 'Werewolf':['WW'], 'Cursed Soul':['CS','Cursedsoul'], 'Vampire':['Vamp']
}
STATE_NOTES = {
 'Baker': ('Famine','Starvation begins after transformation; Bread delays opponents’ starvation. Starve accelerates a recipient’s loss of Bread. Invincible Defense does not prevent hanging.'),
 'Berserker': ('War','Select up to two Rampage targets, with Unstoppable attacks and Invincible Defense. Keep your actual kill progression and count surviving votes; Invincible Defense does not stop hanging.'),
 'Plaguebearer': ('Pestilence','Reaching three Pestilence stacks is lethal while the effect is active. Its spread action can force maximum stacks; this is not the old Town of Salem 1 passive-rampage model.'),
 'Soul Collector': ('Death','Survive the day after the public transformation so the end-of-day Apocalypse can occur. Vote pressure is the urgent threat. Keep private soul counts out of the cover will.')
}

def external_only_markdown(markdown):
    """Keep public URLs; make archive-relative links plain labels for inline UI."""
    return re.sub(r'\[([^\]]+)\]\(((?!https?://)[^)]+)\)', lambda m: m.group(1), markdown)

STATE_TEMPLATES = {
 'Famine': dict(fields='Starve target; actual Bread-loss feedback; living Bread recipients; day survival notes.', actions=['Starve','Survival note'], results=['Failed / no result','Manual feedback'], targetType='player', defaultPhase='N', actionTargets={'Starve':'player','Survival note':'none'}, actionPhases={'Starve':'N','Survival note':'D'}),
 'War': dict(fields='Up to two Rampage targets; actual victims; attack feedback; remaining voting opposition.', actions=['War rampage','Survival note'], results=['Failed / no result','Manual feedback'], targetType='pair', defaultPhase='N', actionTargets={'War rampage':'pair','Survival note':'none'}, actionPhases={'War rampage':'N','Survival note':'D'}),
 'Pestilence': dict(fields='Spread target; actual stack feedback; reported deaths; day survival notes.', actions=['Spread Pestilence','Stack progress','Survival note'], results=['Failed / no result','Manual feedback'], targetType='player', defaultPhase='N', actionTargets={'Spread Pestilence':'player','Stack progress':'none','Survival note':'none'}, actionPhases={'Spread Pestilence':'N','Stack progress':'N','Survival note':'D'}),
 'Death': dict(fields='Transformation day; survival and voting notes; actual end-of-day outcome. No ordinary nightly Reap after transformation.', actions=['Survive day as Death','Apocalypse outcome'], results=['Manual feedback'], targetType='none', defaultPhase='D', actionTargets={'Survive day as Death':'none','Apocalypse outcome':'none'}, actionPhases={'Survive day as Death':'D','Apocalypse outcome':'D'})
}

def build():
    original = json.loads(source_text('docs/copy/ROLE_COPY.json'))
    icons = {x['role_or_state']: x for x in json.loads(source_text('docs/reference/ICON_MANIFEST.json'))['entries']}
    sources = json.loads(source_text('docs/research/SOURCE_MANIFEST.json'))
    text = source_text('docs/reference/WILL_TEMPLATES.md')
    templates = {}
    for name, section in re.findall(r'^## ([^\n]+)\n(.*?)(?=^## |\Z)', text, re.M|re.S):
        fields = re.search(r'\*\*Fields:\*\* (.+)', section)
        if not fields:
            continue
        example = re.search(r'```text\n(.*?)\n```', section, re.S)
        notes = re.search(r'\*\*Rules:\*\* (.+)', section)
        templates[name] = dict(fields=fields.group(1), example=example.group(1), notes=notes.group(1))
    assert len(templates) == 60, len(templates)
    roles = copy.deepcopy(original['roles'])
    assert len(roles) == 60
    assert set(ACTION_SPECS) == {r['name'] for r in roles}
    assert set(ALIASES) == {r['name'] for r in roles}
    for role in roles:
        name = role['name']
        role['iconUrl'] = icon_url(name)
        role['iconFallback'] = icons[name]['asset_url']
        role['iconSource'] = ('https://town-of-salem.fandom.com/wiki/File:RoleIcon_'+name+'_ToS2.png') if name in SOURCE_ICON_URLS else icons[name]['file_page']
        role['aliases'] = ALIASES[name]
        role['sources'] = [{'label':'Role mechanics','url':role['source_url']}, {'label':'Reviewed revision','url':role['source_revision_url']}, {'label':'Role icon','url':role['iconSource']}]
        spec = ACTION_SPECS[name]
        template = templates[name]
        template.update(actions=[a[0] for a in spec]+['Hold / no action','Manual entry'],
                        results=RESULTS.get(name, [])+['Failed / no result','Manual feedback'],
                        targetType=spec[0][1], defaultPhase=spec[0][2],
                        actionTargets={a[0]:a[1] for a in spec}, actionPhases={a[0]:a[2] for a in spec},
                        phaseNotes='Record the phase the action occurred. N1 and setup restrictions remain in the guide; unknown setup does not prove an action succeeded.',
                        stateNotes=STATE_NOTES.get(name, ('',''))[1],
                        exampleIsIllustrative=True, exportScope='public-truthful' if role['faction']=='Town' else 'private-actual',
                        resultDefault='', targetDefault='', notesDefault='')
        template['actionTargets'].update({'Hold / no action':'none','Manual entry':'none'})
        role['template'] = template
    # Opinionated editorial policy and claim upkeep are independent of raw mechanics.
    playbooks = {}
    for group in ['town', 'coven', 'neutral']:
        playbooks.update(json.loads((PROJECT/f'content/playbook-{group}.json').read_text()))
    town_covers = json.loads((PROJECT/'content/town-power-covers.json').read_text())
    profiles = json.loads((PROJECT/'content/claim-profiles.json').read_text())
    relations = {}
    route_copy = {}
    for group in ['coven','neutral']:
        relations.update(json.loads((PROJECT/f'content/claim-strategy-{group}.json').read_text()))
    for group in ['town','coven','neutral']:
        route_copy.update(json.loads((PROJECT/f'content/routes-{group}.json').read_text()))
    for role in roles:
        role['playbook'] = playbooks[role['id']]
        role['claimAudit'] = relations.get(role['id'], {'summary':'Use your real role and truthful history as the normal Town starting point. Other claims remain selectable; their sample does not give you that ability.', 'options':[]})
        role['claimOptions'] = role['claimAudit']['options']
        role['preferredClaimId'] = role['claimOptions'][0]['roleId'] if role['claimOptions'] else role['id']
    # Glossary table is already original, curated plain-language copy.
    glossary = []
    for line in source_text('docs/reference/GLOSSARY.md').splitlines():
        if line.startswith('| ') and not line.startswith('| Term') and not line.startswith('| ---'):
            term, meaning = [x.strip() for x in line.strip('|').split('|',1)]
            glossary.append({'term':term,'meaning':meaning})
    glossary_markdown = external_only_markdown(source_text('docs/reference/GLOSSARY.md'))
    uncertainties_markdown = external_only_markdown(source_text('docs/research/UNCERTAINTIES.md'))
    states = []
    for parent,(name,notes) in STATE_NOTES.items():
        parent_role = next(r for r in roles if r['name']==parent)
        state_template = copy.deepcopy(STATE_TEMPLATES[name])
        state_template.update(notes=notes, stateNotes=notes, phaseNotes='Already-transformed state only. Preserve the earlier base-role history.', exportScope='private-actual', example='', exampleIsIllustrative=True, resultDefault='', targetDefault='', notesDefault='')
        state_template['actions'] += ['Hold / no action','Manual entry']
        state_template['actionTargets'].update({'Hold / no action':'none','Manual entry':'none'})
        continuation = next(c for c in parent_role['cards'] if c['id'].endswith('-continuation'))['expanded']
        description = continuation.split('**After transformation:** ',1)[-1]
        states.append({'id':name.lower(),'parentId':parent_role['id'],'name':name,'faction':'Neutral','alignment':'Neutral Apocalypse','alignment_abbreviation':'NA','iconUrl':CDN+name+'.png','iconFallback':icons[name]['asset_url'],'iconSource':icons[name]['file_page'],'notes':notes,'description':description,'source_url':parent_role['source_url'],'template':state_template})
    state_examples = {
       'famine':'Famine\nD4: Transformed\nN4: Starve 7',
       'war':'War\nD5: Transformed\nN5: Rampage 4, 9',
       'pestilence':'Pestilence\nD4: Transformed\nN4: Spread on 7',
       'death':'Death\nD5: Transformed — survive this day'
    }
    for state in states:
        parent = next(r for r in roles if r['id']==state['parentId'])
        state.update(playbook=playbooks[state['id']], claimAudit=parent['claimAudit'], claimOptions=parent['claimOptions'], preferredClaimId=parent['preferredClaimId'])
        state['template']['example'] = state_examples[state['id']]
    for role in roles+states:
        role['claimProfile'] = profiles.get(role['id'], {
          'plainAbility':role['cards'][0]['compact'] if role.get('cards') else role['playbook']['firstNight'],
          'claimMeaning':'Claiming '+role['name']+' openly means claiming this role’s actual ability and objective. In normal factions, this is not a Town cover.',
          'effort':'Open faction disclosure',
          'payoff':'This is the role’s own action history, not an ordinary Town cover. Public disclosure is a deliberate situational choice.',
          'exposure':'Under the normal-faction profile, this role name can disclose an opposing objective; it is not a quiet survival claim.',
          'posting':'Use this history privately unless you deliberately choose open disclosure. The selected role’s actual objective still applies.',
          'willGuidance':[role['template']['fields'],role['template']['notes'],'Keep intended action and actual outcome separate; only write feedback that belongs to this role.'],
          'example':role['template']['example'],
          'blank':role['name']+'\n[day/night]: [legal action and target] — [actual feedback]',
          'expanded':role.get('description', role['playbook']['expanded']),
          'sourceUrls':[role['source_url']]
        })
    # The ranking reflects an opening with limited information, not measured win rates.
    all_roles = roles+states
    by_id = {r['id']:r for r in all_roles}
    for role in all_roles:
        if role['faction']=='Town':
            profile=role['claimProfile']
            role['claimAudit']={'summary':'Use your actual '+role['name']+' role and truthful feedback. A missed action or quiet night is worth explaining accurately; another role’s sample is not an ability you possess.', 'options':[{
              'roleId':role['id'],'tag':'Truthful role · recommended',
              'why':role['playbook']['reason'],
              'exposure':next(c['compact'] for c in role['cards'] if c['id'].endswith('-mistakes')),
              'strategy':['Start with the legal opening: '+role['playbook']['firstNight'],*profile['willGuidance'][:3]],
              'bestWhen':'You are '+role['name']+' in the normal-faction setup; report what actually happened.',
              'sourceUrls':profile['sourceUrls']
            }]}
            role['claimOptions']=role['claimAudit']['options']
        if role['id'] in town_covers:
            policy = town_covers[role['id']]['recommendation']
            role['claimRecommendation'] = copy.deepcopy(policy)
            role['claimAudit']['summary'] = town_covers[role['id']]['summary']
            role['claimOptions'][0].update(tag='Truthful TPow · recommended opening', why=policy['reason'],
                bestWhen=policy['opening'], strategy=policy['strategy'], exposure=policy['revealWhen'])
            role['claimOptions'].extend(copy.deepcopy(town_covers[role['id']]['options']))
        if role.get('parentId'):
            role['claimAudit']=copy.deepcopy(by_id[role['parentId']]['claimAudit'])
            role['claimAudit']['summary']+=' You are '+role['name']+' now: a pre-transformation cover does not explain new attacks, altered movement, or the public transformation.'
            role['claimOptions']=role['claimAudit']['options']
            for option in role['claimOptions']:
                option['strategy'].append('After becoming '+role['name']+', reassess this earlier cover against your new ability and any public transformation; do not claim the old movement pattern automatically continues.')
        assert len({o['roleId'] for o in role['claimOptions']})==len(role['claimOptions']), role['id']
        for i,option in enumerate(role['claimOptions']):
            claim=by_id[option['roleId']]
            assert claim['alignment'].startswith('Town'), (role['id'], option['roleId'])
            option.update(role=claim['name'],alignment=claim['alignment'],alignment_abbreviation=claim['alignment_abbreviation'],rank=i+1)
            assert len(option['strategy'])>=4 and option['bestWhen'] and len(option['sourceUrls'])>=1
        role['preferredClaimId']=role['claimOptions'][0]['roleId']
        if role['claimAudit'].get('stateCaveat') and not role.get('parentId'):
            role['claimAudit']['summary']+=' '+role['claimAudit']['stateCaveat']
        content=route_copy[role['id']]
        p=role['playbook']
        baseline={
          'id':'default','label':content.get('defaultLabel',p['headline'].removeprefix('Default: ')),
          'headline':p['headline'],'when':content['defaultWhen'],'action':p['firstNight'],
          'targetRule':p['targetRule'],'reason':p['reason'],'pivot':p['pivot'],
          'goals':role.get('opening',{}).get('goals',p['laterPriorities']),
          'laterPriorities':p['laterPriorities'],'risk':content['defaultRisk'],'sourceUrls':p['sourceUrls']
        }
        role['routes']=[baseline,*copy.deepcopy(content['alternatives'])]
        assert len(role['routes'])>=2 and len({r['id'] for r in role['routes']})==len(role['routes']), role['id']
        for i,route in enumerate(role['routes']):
            route.update(rank=i+1,headline=route.get('headline',route['label']))
            assert all(route.get(f) for f in ['id','label','when','action','targetRule','reason','pivot','risk','sourceUrls']), (role['id'],route['id'])
            assert len(route['goals'])==len(route['laterPriorities'])==3, (role['id'],route['id'])
            assert re.fullmatch(r'[a-z0-9-]+', route['id']), (role['id'],route['id'])
    # Study guides use the original source-reviewed dossiers and expanded mechanics.
    study_facts = json.loads((PROJECT/'content/role-study-facts.json').read_text())
    study_titles = ['Role and ability', 'Win condition', 'Interactions and limits',
                    'Read the information', 'Common mistakes', 'Claim timing and disclosure',
                    'Early, middle, and late game', 'Worked decision']
    for role in all_roles:
        parent = by_id[role['parentId']] if role.get('parentId') else role
        dossier = source_text('docs/research/roles/'+parent['id']+'.md')
        chapters = dict(re.findall(r'^## ([^\n]+)\n(.*?)(?=^## |\Z)', dossier, re.M|re.S))
        sections = [{'title':title,'markdown':external_only_markdown(chapters[title].strip())} for title in study_titles]
        role['studyGuide'] = {
            'facts':copy.deepcopy(study_facts[parent['id']]) if not role.get('parentId') else None,
            'summary':role.get('description') or parent['claimProfile']['plainAbility'],
            'sections':sections,
            'details':[{'title':title,'markdown':next(c['expanded'] for c in parent['cards'] if c['id'].endswith('-'+key))}
                       for key,title in [('n1','Actions, targeting and opening restrictions'),('dawn','Feedback and evidence'),('continuation','Progression and later actions'),('mistakes','Exceptions and pitfalls')]],
            'sourceUrls':[parent['source_url'],parent['source_revision_url']],
            'reviewedOn':original['reviewed_on']
        }
        if role.get('parentId'):
            role['studyGuide']['summary'] = role['notes']
            role['studyGuide']['sections'] = [
                {'title':'Current ability and objective','markdown':role['description']},
                {'title':'What to do now','markdown':role['playbook']['expanded']},
                {'title':'Transition and cover limits','markdown':role['claimAudit']['summary']},
                {'title':'Win condition','markdown':chapters['Win condition'].strip()}]
            role['studyGuide']['details'] = [{'title':parent['name']+' before transformation · '+x['title'],'markdown':x['markdown']} for x in sections]
    assert len(route_copy)==64
    assert len(playbooks)==64 and len(profiles)==29 and len(relations)==31
    assert all(len(r['playbook']['laterPriorities'])==3 and r['claimProfile']['example'] for r in roles+states)
    summary = {
       'uncertaintiesMarkdown': uncertainties_markdown,
       'reviewedOn': original['reviewed_on'], 'ruleset':original['default_context'],
       'baseRoleCount':60, 'transformedStateCount':4,
       'newestNumberedOfficialPatchLocated':sources['newest_numbered_official_patch_located'],
       'installedClientVersionVerified':False, 'liveGameTested':False,
       'mechanicsBasis':'Community role pages cross-checked against official announcements; disputed interactions stay qualified.',
       'strategyBasis':'Source-checked ability constraints with editorial beginner rankings; conditional alternatives are not measured win rates.',
       'routeCount':sum(len(r['routes']) for r in all_roles),
       'rankedClaimCount':sum(len(r['claimOptions']) for r in roles if r['faction']!='Town'),
       'icons':'Actual Vanilla role PNGs via pinned RoleIconRecolors repository; Oracle/Catalyst/Cultist original role art via source-linked Fandom image metadata. Pilgrim/Covenite use their actual faction icons. Wiki image fallbacks. Oracle original PNG is bundled locally with provenance.',
       'iconRepository':'https://github.com/AlchlcDvl/RoleIconRecolors/tree/162d3df30238f4d014cf729969119380509df7b4/Vanilla',
       'officialSources': [{'title':r.get('title','Official update'),'url':r.get('url','')} for r in sources['official']],
       'editingRules': [
          'Start new matches with blank inputs; example numbers are never copied into live entries.',
          'Public cover and private actual-role history are separate namespaces. Public export must read only the selected public draft.',
          'Cover export uses its claimed-role heading and authored entries only; private notes, actual role and progression are excluded.',
          'Failed/no result is distinct from a successful negative result; blank outcome stays blank.',
          'Detailed export may add explicitly selected public entry notes; raw input is preserved.',
          'Multiple actions per cycle are permitted; add-next-night uses the highest existing night number.',
          'Role and faction transitions preserve previous action history. Advisory constraints never destroy manual client feedback.'
       ]
    }
    summary['presentation']='Ranked conditional opening routes with saved per-role choices and checkpoints; claim strategy bullets first, collapsible role basics, lower-priority icon previews, and illustrative wills.'
    output = dict(roles=roles, states=states, glossary={'entries':glossary,'markdown':glossary_markdown}, sourceSummary=summary)
    DEST.parent.mkdir(parents=True, exist_ok=True)
    DEST.write_text(json.dumps(output, ensure_ascii=False, indent=2)+'\n')
    # Original authored role data is not summarized, normalized or overwritten.
    for before, after in zip(original['roles'], roles):
        assert all(after[k] == v for k,v in before.items()), before['name']
    assert len({r['id'] for r in roles}) == 60
    assert all(len(r['cards'])==9 for r in roles)
    assert all(r['template']['example'].startswith(r['name']+'\n') for r in roles)
    assert all('.png' in r['iconUrl'] and r['iconFallback'].startswith('https://') for r in roles+states)
    assert len(glossary)>=35
    print(f'Prepared {len(roles)} roles, {len(states)} states, {len(glossary)} glossary entries; preserved {sum(len(r["cards"]) for r in roles)} original card pairs.')
    print(f'Output: {DEST}')

if __name__ == '__main__':
    build()
