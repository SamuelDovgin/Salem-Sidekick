# Salem Sidekick

A single-page Town of Salem 2 beginner companion with opinionated role defaults, claim comparisons, and example wills. Research date: 2026-10-15.

[Open Salem Sidekick](https://SamuelDovgin.github.io/Salem-Sidekick/).

The [Publish GitHub Pages workflow](.github/workflows/pages.yml) regenerates role data, runs the model/content tests, and publishes `site/dist` on every push to `main`. Pull requests run the build and tests without publishing. You can also republish from **Actions → Publish GitHub Pages → Run workflow**. GitHub Pages uses **GitHub Actions** as its publishing source.

To preview locally, run `npm --prefix site run prepare-data`, `npm --prefix site test`, and `npm --prefix site run dev`, then open http://127.0.0.1:4173. The HTML, CSS, and JavaScript in `site/dist` are the website source; keep them committed. The role data is regenerated from the documents and `site/scripts/prepare-data.py` during each deployment.

Open the [privately published Salem Sidekick](https://salem-sidekick.beigebay129.chatgpt.site).

Run the site with `cd site` then `npm run dev`, and open http://127.0.0.1:4173. The app is buildless; its deployment files are in `site/dist/`. See [practical-play audit](docs/copy/PRACTICAL_PLAYBOOK.md).

The [full application plan](PLANNING.md) and research documents below preserve the design and content basis.

The **Role guide** button beside each role title opens a source-linked study guide with ability timing, charges, combat stats, interactions, examples, and expandable detail. Every role and transformed state also has a visible **Must know** beside its action and a **Good to know** note with a quick ability reference. Persistent section navigation links Play, Good to know, Claims, and Will example. See the [ranked flow review and all-role priorities](docs/design/FLOW_PRIORITY_AUDIT.md). Alignment shortcuts in the top role picker reset after selection or dismissal. Town Power has optional temporary covers while retaining truthful defaults.

The current interface offers ranked opening routes for every role, with conditions, tradeoffs, route-specific checkpoints, and follow-up priorities. Claim cards put strategy bullets first, keep role basics in a dropdown, and reveal lower-priority claims through ranked role icons. Rankings are editorial, grounded in source-checked ability constraints. [Full practical-play audit](docs/copy/PRACTICAL_PLAYBOOK.md) · [All claim examples](docs/copy/CLAIM_EXAMPLES.md) · [Ranked routes and claim strategies](docs/copy/RANKED_STRATEGIES.md).

| Document | Purpose |
| --- | --- |
| [Complete interface copy](docs/copy/README.md) | All 60 roles, alignment labels, 540 compact/expanded section pairs |
| [Shared interface copy](docs/copy/SHARED_INTERFACE_COPY.md) | Selector labels, alignment help, claim method, and detail controls |
| [Three role examples](docs/copy/THREE_ROLE_REVIEW.md) | Deputy, Poisoner, Baker: full copy and concrete opening walkthroughs |
| [Content-readiness evidence](docs/copy/READINESS.md) | Coverage, decisions, limitations, and audit results |
| [Correction ledger](docs/copy/CORRECTION_LEDGER.md) | Discrepancies found, source conflicts, and exact corrections to apply |
| [Readability study](docs/design/READABILITY_STUDY.md) | Card and information-hierarchy guidance for a future readability pass |
| [Visual layout study](docs/reference/VISUAL_LAYOUTS.md) | Three preview layouts and actual-role PNG provenance |
| [Research findings](docs/research/RESEARCH.md) | Sources, patch baseline, findings, and research scope |
| [Fake-claim logic](docs/research/FAKE_CLAIM_LOGIC.md) | Explainable patterns, complete evil-role matrix, worked examples |
| [Shared mechanics](docs/research/MECHANICS.md) | Evidence interpretation, claim timing, visits, defense, and setup differences |
| [All-role research index](docs/research/roles/INDEX.md) | 60 role dossiers and four transformed states |
| [Will templates](docs/reference/WILL_TEMPLATES.md) | Entry shapes and examples for every role |
| [Beginner glossary](docs/reference/GLOSSARY.md) | Plain-language terms and observation-to-question examples |
| [Content model](docs/reference/CONTENT_MODEL.md) | Structured content, claim reasoning, evidence labels, and persistence |
| [Acceptance scenarios](docs/reference/ACCEPTANCE.md) | Meaningful checks for the future implementation |
| [Uncertainty register](docs/research/UNCERTAINTIES.md) | Conflicts and niche interactions excluded from hard rules |
| [Source catalog](docs/research/SOURCES.md) | Source quality, links, revision evidence, and retrieval method |
| [Source manifest](docs/research/SOURCE_MANIFEST.json) | Machine-readable provenance, no copied wiki articles |
| [Icon manifest](docs/reference/ICON_MANIFEST.json) | Located artwork sources and attribution metadata |
| [Original notes](docs/reference/original-user-notes.txt) | Preserved user brief |

The beginner strategy appears **above** the lower-priority will builder. The chosen layout is Compact. A top-right More detail control expands every current section inline. Fake claims teach compatibility and contradictions, rather than presenting a universal “best claim.”
