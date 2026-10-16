# What players see: role feedback and claim reporting

Reviewed and integrated 16 October 2026. Scope: all 60 base roles and four transformed states in the existing vanilla ToS2 reference baseline. The current text-chat/default-faction assumptions still apply.

The authored source is `site/content/role-feedback.json`. Each role/state has its own short visibility summary, feedback meaning for the acting player, feedback/effects visible to other players, and a claim consistency check. All 29 Town roles also have an original chat-report format with explicit placeholders and failure states. These formats are not purported client messages or live results.

## Wording and provenance

The follow-up research records **120 source-documented lines/excerpts across 60 of the 64 role/state profiles**, up from 24 lines across 19 profiles. Each has its audience, trigger, source link and adjacent one-click copy. Player names become explicit @ mention placeholders for chat; Oracle and other role variables remain role names. Excerpts are marked as excerpts rather than complete messages.

All **65 individual ToS2 message-template pages** in Fandom’s message-template category were retrieved through its public MediaWiki API on 16 October 2026. The selected template, revision where returned, source-line fingerprint and full-page fingerprint are recorded in `MESSAGE_SOURCE_MANIFEST.json`. The retrieved tables include the original documented messages and their recipient/trigger descriptions. Whole source tables are not republished. Quoted wording is bounded to 25 words per source page across the role data. Earlier role-article and shared-message excerpts retain their original links.

The [publisher’s R1.5.00 notes](https://www.townofsalem.io/town-of-salem-2-season-5-patch-notes-r1-5-00/) provide the named Seer example and establish the change from generic target references to player names. The [R1.5.01 notes](https://www.townofsalem.io/town-of-salem-2-bug-fixes-patch-notes-r1-5-01/) establish Ritualist’s correct-guess phrase and corrected target-number substitution. The latter is an excerpt, since the notes do not reproduce its complete sentence.

The four profiles without quotes have specific explanations: Pilgrim has no active ability; Covenite has no unique ability without the book; the Baker and Enchanter templates explicitly list no messages. This does not imply those players cannot receive shared attack, protection or failure notices. No Feed/Enchant success sentence has been invented to fill the gap.

Legacy target-based Shroud/Werewolf wording is marked locally. Voodoo Blind’s inconsistent trigger, obsolete Vampire youngest-player/cap rules, obsolete Berserker first-kill upgrade wording, and the Reworked/Replaced messages are excluded. Retributionist now uses the dedicated template’s corpse notice rather than the older role-article variant. Coven-only Retrain, Disguise and conversion messages have **YOUR TEAM** labels; they are not presented as public reveals. Exact actor-side wording is not established merely by finding a public announcement or recipient notice.

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

- 51 unit/content checks cover complete role/state coverage, distinct audiences, 29 Town-only chat formats, message provenance, source excerpt limits, Jinx witness identity, generic Barrier limitations, and omitted stale/disputed messages.
- 125 browser checks cover all role/route views, all 29 feedback/report formats, copying the compared claim without changing the active claim/will, both clipboard fallbacks, responsive/touch layouts, and existing behavior.
- 40 additional position transitions keep Cleric/Psychic claim controls stable while the N1 warning changes, including compact/expanded layouts and the full picker at desktop and narrow widths.
- Local visual inspection checks Jinx’s compact message example and expanded audience explanations, plus selected-claim feedback. Blank chat formats copy and fit at 1360/768/390/320px in both themes. No live-game session or physical-phone test is claimed.

The list-removal follow-up passed 47 content/unit checks and focused browser checks for removing the report list, preserving screen badges/Self Barrier, copying the blank report and blank will, plain hyphens across all 29 authored claim formats/examples, and desktop/390/320px layouts.

Cleric copy wording now uses an explicit `@[player number]` input placeholder, with `@4` as the adjacent reminder. The source-attested excerpt is retained separately from this chat-ready copy text. Blank feedback/will formats use the same placeholder, and the illustrative will uses `@4` / `@7`. The displayed copy text and clipboard fallback selection agree.

## Full role-by-role pass

All 60 current source articles were retrieved again on 16 October, sequentially, and their text matched the reviewed baseline. The four transformed sections were reviewed separately. [The complete audit](ROLE_FEEDBACK_AUDIT.md) has one resolution row for each of the 64 selectable roles/states; `site/content/feedback-audit.json` records the source fingerprints and wording coverage.

Every role now has an authored quiet/failure note in the existing feedback disclosure. All feedback meanings and quoted lines distinguish the acting player, recipient or everyone. All 29 Town formats and will examples use player mentions where appropriate; Oracle role targeting, Veteran self-use, passive Pilgrim and Amnesiac do not acquire fictional player targets. Copy buttons remain beside their wording, and one blank format per claim is retained. No exhaustive report list is restored.

Three additional short excerpts cover Deputy’s successful-shot announcement, a Tavern Keeper’s Serial Killer death explanation and the Wandering Souls departure. That brings coverage to 24 excerpts across 19 profiles. The remaining messages are described as paraphrased meaning; no exact wording is invented. Retributionist’s generic-target wording is marked version-uncertain given the later named-target patch. The Bodyguard role page’s misspelled example is not promoted to a verified client quote. Coroner/Illusion and Psychic/Blind uncertainties remain explicit rather than being used as definite claim excuses.

The completed all-role UI pass checks every actual-role view at 1360px and 320px: 256 explanation copies, 48 documented/adapted message copies, 64 unique quiet/failure notes, audience labels, and horizontal bounds. It also checks comparison isolation and manual-copy fallback. The existing 125-check browser suite covers all 29 Town claims and the full role/route UI; 40 position checks preserve the N1 warning and stable claim controls. Copying a paraphrased explanation never represents it as a source-attested game quote.

Audience coverage is not an exhaustive outcome dictionary. See [the remaining message gaps and all-role audience matrix](MESSAGE_GAPS.md).
