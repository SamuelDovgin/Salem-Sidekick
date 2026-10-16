# Role message research: installed English verification

Reviewed 16 October 2026. The research now checks the installed game’s English localization assets, alongside wiki mechanics and official patch notes. This closes the main wording gaps previously left for Jailor, Crusader and Witch.

## Current evidence

- **133 complete message lines across 60 of 64 role/state profiles** match the installed English table after documented role/keyword/name substitutions.
- **45 profiles** have personal actor-side wording; two further profiles have team-side wording. Not every role has a private outcome message.
- Client source: **R1.5.14, Steam build 24079984**, identified by the installed catalog and Steam build metadata.
- The localization bundle, `StringTable.en-US`, and every selected entry have SHA-256 fingerprints in [CLIENT_MESSAGE_EVIDENCE.json](CLIENT_MESSAGE_EVIDENCE.json). No account identifier, gameplay log, full language table or binary asset is published.
- Each client-marked card links to a compact **Source record** page with its key and verification method. Player copy placeholders retain @ mentions; role and count variables remain variables.
- This is installed-string verification, **not a live game capture or an assertion that every legacy key is still sent by the server**. Trigger and audience notes remain grounded in role-specific sources. Raw keys were not indiscriminately promoted into gameplay advice.

The [official R1.5.00 notes](https://www.townofsalem.io/town-of-salem-2-season-5-patch-notes-r1-5-00/) establish named-target feedback. The [Season 4 notes](https://www.townofsalem2.com/news/nn2khtionvzvslwh2lcs8nmh64t8hr) establish Coven-wide Witch role knowledge and the modern Spy visitor-role model. Shipped message values can differ from old wiki templates or phrases abbreviated in patch notes.

## Research outcomes

| Role / case | Verified keys | What the app now distinguishes |
| --- | --- | --- |
| Jailor | GAME_208; GUI_ROLE_TARGETING_9_TARGET2; GAME_209; GAME_214 | Named jail confirmation, Execute selection, prisoner jail notice and prisoner Execute-selection notice. Selecting Execute is not a completed kill; no invented private success sentence. |
| Crusader | GAME_61; GAME_307; GAME_32 | Your named target-attack notice, your visitor-attack-at-that-house notice, and the protected player’s separate notice. The attack notice does not identify the visitor or guarantee a kill. |
| Witch | GAME_333; GAME_136; GAME_12 | Named prevented-Control wording, a Cleric reveal-clue example, and the controlled player’s notice. Revealed role knowledge goes to Coven; the borrowed ability feedback belongs to the Witch. No universal invented Witch-success result. |
| Potion Master | GAME_136; GAME_61; GAME_31; GAME_321 | A Cleric Reveal example, your named Heal target-attack notice, the recipient’s Barrier notice and the self-heal restriction. Reveal and Heal remain different modes. |
| Spy | GAME_374; GAME_395 | Bug trigger header and a visiting evil-role report naming the Bugged house, not the evil visitor’s numbered identity. Old pre-rework effect dictionaries are not restored. |
| Retributionist / Necromancer | GAME_62; GAME_301; GAME_61 | Named missing-corpse feedback, an unusable-role notice and a borrowed Cleric result example. Other corpse abilities have their own feedback; one sample is not a universal corpse-user result. |
| Oracle | GAME_63; GAME_31 | The current Aegis notice is generic: it does not name a player or role. The selected role is your input, not something identified by that message. |
| Shroud / Werewolf | GAME_294; GAME_385; GAME_113; GAME_190 | Named current destination/fallback/Rampage wording replaces the older generic target forms. |
| Ritualist | GAME_223 | The complete named success line replaces the earlier abbreviated patch-note excerpt. A wrong guess still does not provide an equivalent failure result. |
| Voodoo Master | GAME_6; GAME_44; GAME_46 | Distinct Silence, Deafen and Blind strings. The wiki’s contradictory Blind-description sentence is not used as the wording source. |
| Socialite | GAME_25; GAME_26 | Separate Party rejection and no-uninvited-visitor notices. These Party strings are not assigned to Poisoner merely because Smog also rejects visitors. |

Several other existing quotes needed punctuation, capitalization, named-player or wording corrections, including Cleric’s recipient Barrier notice, Sheriff, Psychic, Trapper, Admirer and transformation/death announcements. Those are now keyed to the installed table.

One wiki-only Cultist team-conversion sentence had no matching installed string. Its copyable card was retired; the documented conversion/team-state explanation remains. The retirement is recorded rather than represented as a newly verified quote.

## Format and presentation

Each message retains a clear YOU / THEM / YOUR TEAM / EVERYONE audience and an adjacent one-click copy control. Full Role guides use the same cards as the main gameplay/claim panels. The single blank chat format per Town role remains; the removed exhaustive per-outcome report list was not restored. Authored chat/will formats keep plain ASCII hyphens, and native quote punctuation is retained.

Quiet nights do not automatically supply a negative result or a save. Recipient protection wording is not an actor’s own result, and shared protection feedback does not uniquely identify its provider. Placeholder expansion does not add an ability or make a copied message real.

## Reproduction

The app has no new runtime dependency. The verification tool is research-only and reads the installed assets without saving changes:

```sh
/path/to/research-python site/scripts/verify-client-messages.py --data-root "/path/to/TownOfSalem2.app/Contents/Resources/Data"
```

Use a separate environment with UnityPy 1.25.4. The tool pins the reviewed bundle/table fingerprints, resolves the recorded symbolic tokens, checks every selected entry and compares the result to the authored app data. It fails when the installed asset differs, rather than silently blessing a different build. `site/content/client-message-map.json` holds the curated substitutions.

[Remaining limits and the 64-role audience matrix](MESSAGE_GAPS.md) · [Role-by-role source index](ROLE_FEEDBACK_AUDIT.md) · [Earlier wiki retrieval manifest](MESSAGE_SOURCE_MANIFEST.json)

Validation: 133 installed-string checks, 53 unit tests, 125 end-to-end checks, 266 quote clipboard checks, 121 source-record anchors, 512 role/layout states and the 56-state accessibility sample passed. The additional source page also had no automated accessibility violations.
