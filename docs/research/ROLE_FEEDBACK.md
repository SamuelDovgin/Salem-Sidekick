# What players see: role feedback and claim reporting

Reviewed and integrated 16 October 2026. Scope: all 60 base roles and four transformed states in the existing vanilla ToS2 reference baseline. The current text-chat/default-faction assumptions still apply.

The authored source is `site/content/role-feedback.json`. Each role/state has its own short visibility summary, feedback meaning for the acting player, feedback/effects visible to other players, and a claim consistency check. All 29 Town roles also have an original chat-report format with explicit placeholders and failure states. These formats are not purported client messages or live results.

## Wording and provenance

Twenty-one short English excerpts are recorded from documented messages. They are labeled **Documented English**, with the recipient, trigger condition and source adjacent. Player-name/mention tokens become square-bracket placeholders; icons, gradients and rich text are not reproduced. The remaining feedback is explicitly presented as paraphrased meaning. No message was added from memory and labeled as exact.

The role-specific excerpts come from the reviewed wiki revisions linked on each message. The source role pages were retrieved using the public MediaWiki API on 15 October 2026 and remain the same mechanics baseline as the rest of this app. Feedback passages were reviewed against those retrieved pages on 16 October. Their revision URLs are retained in the authored JSON. The Jinx witness, Cleric actor and generic Barrier excerpts were additionally located on the [ToS2 Messages reference](https://town-of-salem.fandom.com/wiki/Messages_(ToS_2)) on 16 October. The shared message-reference excerpts are limited to 25 words in total, and role-page excerpts to 25 words per source.

These are community-documented lines, not strings captured from an installed client. They do not establish the precise color, animation, chat-log position, translation, or version of the user's game. Public death-cause examples are conditional on relevant setup modifiers. Missing or suppressed feedback does not become a negative result.

## Jinx clarification

The identity exposure is a private night message to direct co-visitors that contains the Jinx's player name and the shared destination. It is not limited to investigative roles. The attacked visitor is not a safe exception: if they survive, they can also report the Jinx. The Jinx's own visitor-attack feedback does not supply the complete set of visitor names or roles. Sources: [Jinx reviewed mechanics](https://townofsalem.wiki.gg/w/index.php?title=Jinx%20%28ToS2%29&oldid=5984), [documented witness message](https://town-of-salem.fandom.com/wiki/Messages_(ToS_2)#Jinx).

The official R1.5.14 change log includes a fix for a Jinx player-name substitution bug. That supports keeping player names as explicit placeholders rather than reproducing a broken `%name2%` string as intended wording. See [official R1.5.14 Steam announcement](https://store.steampowered.com/news/app/2140510/view/1839041357036710) and the corresponding [change-log index](https://townofsalem.wiki.gg/wiki/Change_Log_(ToS2)).

## Cleric: report from the claimant’s screen

The 16 October follow-up adds the acting Cleric’s named-player attack notice before the recipient’s Barrier line. The [message reference’s Cleric section](https://town-of-salem.fandom.com/wiki/Messages_(ToS_2)#Cleric) documents the player-name form; [official R1.5.00 notes](https://www.townofsalem.io/town-of-salem-2-season-5-patch-notes-r1-5-00/) corroborate the general change from target references to names. The acting-player excerpt plus the recipient and Jinx excerpts total 24 words from the shared message page after replacing mentions with placeholders.

The blank chat format is the single report template. The exhaustive outcome report list was removed at the user’s request. Authored copyable reports, will examples and blank wills use plain ASCII hyphens. Exact documented game quotes retain their original wording.

The follow-up presentation uses person/group icons and prominent **YOU · As Cleric** / **THEM · Protected player** labels. The recipient card immediately explains **YOU · Self Barrier**, reusing the documented recipient line rather than inventing a self-only message. [Self Barrier mechanics](https://townofsalem.wiki.gg/wiki/Cleric_(ToS2)) establish that normal Barrier attributes also apply to the once-per-game stay-home action. Applying the documented protected-recipient notice to self-use follows that rule; the complete self-use notification sequence has not been captured in a live game.

Audience and protection limitations remain under **Protection limits & sources**. The YOU/THEM badges, documented wording copy buttons and Self Barrier explanation remain visible.

The retained source references include the [official R1.5.03 fix](https://www.townofsalem.io/town-of-salem-2-updates-and-bug-fixes-patch-notes-r1-5-03/) removing Cleric’s target-attack feedback after an Unknown Obstacle. Generic roleblock/jail/obstacle wording is not invented as an exact quote. The N1 warning continues to forbid an ordinary other-player Barrier visit during Grace Period.

Read-only local package inspection found installed version 1.5.14 (Steam build 24079984). It did not yield a verified English message table and did not run a game. All quoted wording retains its public source; installed metadata does not turn it into a client capture or verify the conditions in a live match.

## Deliberate omissions and limitations

- Current Pirate uses Scour/Plunder, so older duel-result lines were excluded.
- Current Admirer uses Obsession, Admire, Care and Bestow, so old proposal/acceptance/rejection messages were excluded.
- Current Investigator uses crimes; older blood-only formats were excluded.
- Psychic late-game failure descriptions are explicitly marked potentially outdated in the source. They were not promoted to guaranteed message/trigger pairs.
- Voodoo Master's role page prints a Blind notice, while Keywords says the recipient is not told they were Blinded. The app explains missing-result behavior and this uncertainty without promising either exact notice. The well-documented Silence excerpt is included.
- War's longer announcement differs in punctuation between references. Only its matching first sentence is quoted. The same capitalization-only ambiguity in the Hex Bomb line is not treated as mechanically meaningful.
- Public transformation text identifies the transformed role, not automatically the numbered player. Current Famine, War, Pestilence and Death have separate feedback guidance rather than inherited pre-transformation instructions.
- Generic Barrier wording does not identify a specific Cleric, Oracle, Admirer or Potion Master. A quiet target surviving does not create protection feedback.

## Presentation and copying

The existing **At dawn → Messages** control contains the complete actual-role feedback, and the full Role guide has a corresponding section. The dawn summary adds one short visibility line. Jinx's naming message is also visible beside its concise dawn guidance because it explains a direct identity risk.

The existing **Claim details** panel explicitly labels the selected Town role’s screen and other players’ screens, rather than ambiguously saying “you” while viewing a cover. It contains the selected Town role’s expected feedback and report format. Documented wording and authored chat formats have distinct copy actions. Copying a comparison role's text does not select it, update the active will, or include the actual role's private information. Clipboard denial selects the visible text for manual copying.

No extra top-level panel or always-expanded reference section is introduced. The earlier claim-position stabilization remains in place when claim-dependent N1 warnings change height.

## Verification

- 47 unit/content checks cover complete role/state coverage, distinct audiences, 29 Town-only chat formats, message provenance, source excerpt limits, Jinx witness identity, generic Barrier limitations, and omitted stale/disputed messages.
- 125 browser checks cover all role/route views, all 29 feedback/report formats, copying the compared claim without changing the active claim/will, both clipboard fallbacks, responsive/touch layouts, and existing behavior.
- 40 additional position transitions keep Cleric/Psychic claim controls stable while the N1 warning changes, including compact/expanded layouts and the full picker at desktop and narrow widths.
- Local visual inspection checks Jinx’s compact message example and expanded audience explanations, plus selected-claim feedback. Blank chat formats copy and fit at 1360/768/390/320px in both themes. No live-game session or physical-phone test is claimed.

The list-removal follow-up passed 47 content/unit checks and focused browser checks for removing the report list, preserving screen badges/Self Barrier, copying the blank report and blank will, plain hyphens across all 29 authored claim formats/examples, and desktop/390/320px layouts.
