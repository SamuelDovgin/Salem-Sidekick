# Uncertainty and correction register

Research date: 2026-10-15. The research pass is complete; **some game interactions remain externally uncertain**. A wiki assertion is not a live-client experiment. These entries define what the website can safely say and what it must not turn into an automatic rule.

## Resolved enough to use as the baseline

| ID | Issue found | Decision and evidence |
| --- | --- | --- |
| R01 | Wildling has a stale upcoming-change banner and inconsistent history date | Keep text-mode Sense/whisper behavior. Attune is voice-only; use the official July 27, 2026 patch date. [Official](https://www.townofsalem.io/town-of-salem-2-introducing-voice-chat-mode-%F0%9F%93%9C%F0%9F%8E%89%F0%9F%94%8A-patch-notes-r1-5-14/), [role](https://townofsalem.wiki.gg/wiki/Wildling_(ToS2)). |
| R02 | Old guides reverse Psychic nights | Odd Good/two, even Evil/three. Do not import old example wills. [Role](https://townofsalem.wiki.gg/wiki/Psychic_(ToS2)). |
| R03 | Old role name and retraining limits | Search Coven Leader as alias; display Archmage. Use current restriction on retraining other players. [Official](https://www.townofsalem.io/town-of-salem-2-flexible-factions-update-patch-notes-r1-5-11/). |
| R04 | Cursed Soul wiki.gg Swap section is blank, shared keyword incomplete | Use role/faction separation and faction-dependent randomization from secondary role detail and official 2025 changes. Avoid a fully simulated Swap resolver. [Secondary role](https://town-of-salem.fandom.com/wiki/Cursed_Soul), [official announcement](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1810503566584385). |
| R05 | Baker prose could mistakenly count its own starting Bread | Use three other living fed players for ordinary progress; own starting Bread is not a recipient action. Preserve the reduced-population exception. [Baker](https://townofsalem.wiki.gg/wiki/Baker_(ToS2)), [secondary](https://town-of-salem.fandom.com/wiki/Baker). |
| R07 | Illusionist strategy still suggests concealment from Bodyguard, Trapper, and Deputy | Use the official R1.5.11 correction: Illusion no longer hides from those interactions. Do not repeat the stale strategy. [Official](https://www.townofsalem.io/town-of-salem-2-flexible-factions-update-patch-notes-r1-5-11/). |
| R06 | Wiki dates differ by a day on several 2025 changes | Official published date is the chronology reference. Preserve actual wiki revision timestamps separately. |

## Keep out of hard deductions and validators

| ID | Dispute / missing evidence | Implementation decision | What would settle it |
| --- | --- | --- | --- |
| U01 | wiki.gg Doomsayer says Neutral Outliers cannot be guessed; Fandom says exact-role guesses; official R1.5.13 fixes Vampire/Cursed Soul in the UI | Explain the conflict. Do not tell Outlier players they are certainly immune. Keep a manual guess field; do not derive a hard exclusion from wiki.gg | Current client dropdown and a controlled test of Vampire/Cursed Soul guesses, including flexed cases |
| U02 | Investigator source says executions are excluded, while its strategy later names Jailor as a Murder explanation | Do not automatically add Murder to executions or clear a disputed result; show the actual observed feedback | Current Jailor/Investigator test with no framing or extra attack |
| U03 | Coroner marks some Bodyguard/counterattack and special-killer cases untested | Give ordinary Autopsy/Examine behavior; do not ship an exhaustive killer-interaction truth table | Controlled cases with full action histories |
| U04 | Psychic no-vision paragraphs conflict with its current night parity and contain an outdated warning | Use normal vision format; preserve no-result/manual feedback without predicting the exact late-game message | Current odd/even small-town tests |
| U05 | Serial Killer counterattack is labeled Unstoppable on one page while describing natural Invincible bypass and protection exceptions; keyword page calls it Unstoppable+ | Say it can be exceptionally dangerous and has protective exceptions. Do not reduce it to the ordinary attack/defense comparison | Current controlled retaliation tests against natural and granted defense |
| U06 | Shroud source flags inconsistent direct fallback/astral priority | Label Oracle-style movement compatibility conditional; do not promise guaranteed invisibility | Reproduce visiting, idle, blocked, astral, and jailed target cases |
| U07 | Spy role description is brief about exact trigger exhaustiveness, framed visitors, and multiple concurrent bugs | Store literal role feedback and separate active bugs. Do not infer player identity or a global no-evil-visits clear | Current feedback examples and controlled frame/astral/multi-bug cases |
| U08 | Catalyst has numerous role-dependent day/night effects and known fixed bugs | Explain extra actions next cycle; keep uncommon effect timing advisory/manual rather than a full simulator | Current per-role Overcharge matrix tested against the installed build |
| U09 | Vampire page notes a solo detection-immunity bug | Describe intended solo defense/detection with a visible exception; no guaranteed Sheriff innocence rule | Current reproduction and a confirming fix note |
| U10 | Cursed Soul/admirer progress transfer, successor ties, and unusual custom-faction interactions are inconsistently documented | Preserve actual transitions and feedback; do not recompute hidden progress automatically | Controlled swap/conversion tests with known initial state |
| U11 | Some role strategy claims overstate “proof,” assume old faction rules, or give anecdotal survival claims | Use conditional evidence labels and authored strategic reasoning; never invent percentages | This is a design correction, not a missing fact to guess |
| U12 | Exact game will/chat character limits and clipboard handling were not verified through a live client | Preserve user text and show copyable output. Verify limits before adding enforced truncation | Current text-client input limits and copy/paste checks |
| U13 | Wiki file metadata does not establish art redistribution permission | Preserve file-page links and game credit; record final asset-use decision before publication | Applicable game-art/fan-use terms or permission; no website publication occurs here |

Sources: [Doomsayer](https://townofsalem.wiki.gg/wiki/Doomsayer_(ToS2)), [secondary Doomsayer](https://town-of-salem.fandom.com/wiki/Doomsayer), [official R1.5.13](https://www.townofsalem.io/town-of-salem-2-bug-fixes-patch-notes-r1-5-13/), [Investigator](https://townofsalem.wiki.gg/wiki/Investigator_(ToS2)), [Coroner](https://townofsalem.wiki.gg/wiki/Coroner_(ToS2)), [Psychic](https://townofsalem.wiki.gg/wiki/Psychic_(ToS2)), [Serial Killer](https://townofsalem.wiki.gg/wiki/Serial_Killer_(ToS2)), [Keywords](https://townofsalem.wiki.gg/wiki/Keywords_(ToS2)), [Shroud](https://townofsalem.wiki.gg/wiki/Shroud_(ToS2)), [Spy](https://townofsalem.wiki.gg/wiki/Spy_(ToS2)), [Catalyst](https://townofsalem.wiki.gg/wiki/Catalyst_(ToS2)), [Vampire](https://townofsalem.wiki.gg/wiki/Vampire_(ToS2)), [Cursed Soul](https://townofsalem.wiki.gg/wiki/Cursed_Soul_(ToS2)).

## How to display uncertainty

- Quick cards omit speculative advanced rules or state the safe limited conclusion.
- The relevant research section shows a small “Sources disagree” or “Interaction not verified” note with the two claims and source links.
- A future interpreter can return “Need more context” instead of producing a guilty/innocent verdict.
- A stateful will editor preserves unexpected feedback and permits manual text. It must not overwrite it to fit an incomplete model.
- Resolving an item updates the source record, the deep explanation, quick advice, claim-fit conditions, template rules, and acceptance case together.

None of these entries requires stopping the planning task or asking the user to adjudicate mechanics. They are bounded content limitations for implementation and future validation.
