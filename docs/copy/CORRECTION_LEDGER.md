# Salem Sidekick correction ledger

**Review date:** 2026-10-15

**Scope:** Follow-up to the fact-discrepancy review. This records every finding from that review, its source conflict or copy drift, and the correction needed in the canonical content. It is a review document; the game advice and website files have not been changed as part of this ledger.

## Findings and required corrections

| ID | Finding | Files affected | Correction to make |
| --- | --- | --- | --- |
| C01 | Vampire solo detection immunity has conflicting evidence. The local source manifest points to Vampire revision 4747 from 2026-02-01, which predates official patch R1.5.10. The official patch says solo Vampire will no longer appear Suspicious; the currently indexed role article still says a solo-detection bug can remove that immunity. The current copy mentions the bug but omits the later official fix, so the evidence is presented asymmetrically. | `docs/research/UNCERTAINTIES.md` U09; `docs/research/SOURCE_MANIFEST.json`; `site/content/role-study-facts.json`; `docs/research/roles/vampire.md`; `docs/copy/roles/vampire.md`; `docs/copy/ROLE_COPY.json`; `docs/copy/PRACTICAL_PLAYBOOK.md`; `docs/copy/CLAIM_EXAMPLES.md`; `site/content/playbook-neutral.json`; generated `site/dist/data/roles.json`; `site/content-source/source-bundle.json` | Replace the one-sided bug assertion with an explicit source conflict. Record the official R1.5.10 correction alongside the current role-article statement. Until a current client check settles it, tell players to preserve the actual Sheriff result and avoid promising either outcome. Refresh the role revision metadata before treating the current article as source-checked. |
| C02 | Jinx’s readable Markdown and canonical JSON drift. The readable page says “killing an ally” and “avoid friendly fire”; the structured/site copy says the ordinary passive attack excludes Coven visitors, while noting that visitors can expose Jinx. This obscures the distinction between being attacked and learning Jinx’s identity. | `docs/copy/roles/jinx.md`; `docs/copy/ROLE_COPY.json`; generated `site/dist/data/roles.json`; `site/content-source/source-bundle.json`; `docs/copy/AUDIT_REPORT.json` | Make the two source copies agree. State that ordinary Coven visitors are not passive attack targets, but visitors to the selected house can learn Jinx’s identity. Qualify the Town Traitor exception. Replace “avoid friendly fire” with advice to limit identity exposure and preserve the instruction to coordinate traffic. Regenerate site data from the canonical sources. |
| C03 | The saved copy audit says `issues: []`, while rerunning its documented command currently reports two Jinx JSON/readable-copy drift issues (`jinx-n1` and `jinx-milestones`). | `docs/copy/AUDIT_REPORT.json`; `docs/copy/READINESS.md` | After C02 is corrected, rerun `python3 docs/copy/audit_copy.py` and commit its regenerated report. Keep the report’s scope statement clear: it checks prepared copy and references, not game mechanics or novice usability. |

## Suggested canonical Jinx wording

Use wording along these lines in both the readable page and structured card. Keep the exact phrasing consistent so the copy audit can compare it reliably.

> Choose an eligible non-Coven house likely to draw a useful visitor. Coordinate with Coven to limit unnecessary visits: visitors can learn your identity even though the normal passive attack excludes Coven members. If you have no useful traffic plan, consider holding rather than exposing yourself to witnesses. In a Town Traitor setup, account for the special case where the Jinx can attack the Town Traitor.

Suggested second checkpoint:

> Limit identity exposure from visitors; ordinary Coven visitors are not passive attack targets.

This wording keeps the important mechanics separate: the visitor attack’s eligibility, the identity exposure, and the special Town Traitor case. Avoid the broad phrase “avoid friendly fire” unless the setup and target are specified.

## Source notes

- The [official R1.5.10 patch notes](https://www.townofsalem.io/town-of-salem-2-news-tab-update-patch-notes-r1-5-10/) say “Vampire will no longer appear suspicious when solo.” The local manifest’s Vampire revision predates that patch, while the currently indexed [Vampire role article](https://townofsalem.wiki.gg/wiki/Vampire_(ToS2)) still describes a solo detection-immunity bug. This is a real source conflict; do not silently resolve it by trusting only one record.
- The reviewed [Jinx role article](https://townofsalem.wiki.gg/wiki/Jinx_(ToS2)) says the passive attack targets a non-Coven visitor, that visitors learn Jinx’s identity, and that the Town Traitor can be attacked. The local source link is pinned to [revision 5984](https://townofsalem.wiki.gg/w/index.php?title=Jinx%20%28ToS2%29&oldid=5984).
- The audit command and current expectations are documented in [READINESS.md](READINESS.md). The structured file is the copy source used by the site data preparation step; keep the human-readable review page synchronized with it.

## Completion checklist

- [ ] Update the Vampire source record with the post-R1.5.10 evidence and state the conflict plainly.
- [ ] Use cautious, feedback-led Vampire wording wherever the bug is currently presented as established fact.
- [ ] Correct Jinx copy in both formats and keep the Town Traitor exception qualified.
- [ ] Regenerate the website role data from the canonical copy.
- [ ] Run the copy audit and replace its saved report only after it reflects the corrected content.
- [ ] Review all linked Jinx/Vampire playbook and claim excerpts for copied stale wording.
