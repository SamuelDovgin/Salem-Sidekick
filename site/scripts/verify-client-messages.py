#!/usr/bin/env python3
"""Verify curated feedback against installed English assets without modifying them.

Research-only dependency: UnityPy 1.25.4. No game data is required by the website.
"""
import argparse
import hashlib
import json
import re
from pathlib import Path
import xml.etree.ElementTree as ET

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--data-root',type=Path,default=Path.home()/'Library/Application Support/Steam/steamapps/common/Town of Salem 2/TownOfSalem2.app/Contents/Resources/Data')
args=parser.parse_args()
try:
    import UnityPy
except ImportError:
    raise SystemExit('Use a separate research environment with UnityPy 1.25.4 installed; the app does not depend on it.')
root=Path(__file__).resolve().parents[2]
receipt=json.loads((root/'docs/research/CLIENT_MESSAGE_EVIDENCE.json').read_text())
mapping=json.loads((root/'site/content/client-message-map.json').read_text())
feedback=json.loads((root/'site/content/role-feedback.json').read_text())
bundle=args.data_root/'StreamingAssets/aa/StandaloneOSX'/receipt['bundleFile']
sha=lambda b:hashlib.sha256(b).hexdigest()
assert sha(bundle.read_bytes())==receipt['bundleSha256'],'Localization bundle differs from the reviewed build; review before accepting new strings.'
env=UnityPy.load(str(bundle))
tables=[o.parse_as_dict()for o in env.objects if o.type.name=='TextAsset']
table=next(t for t in tables if t['m_Name']==receipt['tableName'])['m_Script']
if isinstance(table,bytes):table=table.decode('utf-8')
assert sha(table.encode())==receipt['tableSha256'],'English table fingerprint changed'
entries={e.attrib['key']:''.join(e.itertext())for e in ET.fromstring(table).findall('Entry')}
for key,name in mapping['keywordNames'].items():
    assert name in entries.values(),f'Keyword {key} has no matching shipped English name'
for spec in mapping['entries']:
    raw=entries[spec['key']].strip()
    assert sha(raw.encode())==spec['rawSha256'],spec['key']
    text=re.sub(r'<[^>]+>','',raw)
    text=re.sub(r'\[\[#(\d+)\]\]',lambda m:entries['GUI_ROLENAME_'+m[1]],text)
    text=re.sub(r'\[\[:(\d+)\]\]',lambda m:mapping['keywordNames'][m[1]],text)
    text=re.sub(r'%name_role(\d+)%',lambda m:entries['GUI_ROLENAME_'+m[1]],text)
    def variable(match):
        key=match[1]
        if key in spec['variables']:return spec['variables'][key]
        if key.startswith('name'):return '[player'+key[4:]+']'
        if key=='number':return '[number]'
        if key.startswith('role'):return '['+key+']'
        raise ValueError((spec['key'],key))
    text=re.sub(r'%([^%]+)%',variable,text).strip()
    assert sha(text.encode())==spec['resolvedSha256'],spec['key']
    messages=feedback[spec['roleId']]['messages']
    assert any(m.get('clientEvidence',{}).get('key')==spec['key'] and m['text']==text for m in messages),(spec['roleId'],spec['key'])
print(f"PASS {len(mapping['entries'])} curated messages match installed {receipt['clientVersion']} English strings; bundle/table/entry fingerprints and substitutions verified. No game files changed.")
