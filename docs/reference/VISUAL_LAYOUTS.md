# Visual layout study

**Current decision:** use Compact. The user’s later revision replaces this study’s reading drawer with inline expansion and replaces the icon-strip dependency with a searchable labeled roster. All claims remain selectable. See [current copy contract](../copy/README.md). The historical preview has not been reimplemented during this content-only task.

Prepared three interactive layout alternatives on 2026-10-15. These are previews of the interface hierarchy, not the completed website.

| Variation | Main organization | Tradeoff |
| --- | --- | --- |
| Compact guide | Horizontal role picker, three strategy cards, two claim cards, collapsed will below | Recommended starting point for a quick scan during play |
| Role library | Persistent role list at left, wider stacked strategy and claim rows | Easier browsing; uses more horizontal space |
| Field guide | Compact icon strip, larger selected-role art, editorial strategy rows | More spacious reading and a stronger role identity |

Every variation preserves quick strategy above the smaller will builder. In the historical preview, the top-right In-depth role guide opened a reading drawer; this behavior is superseded by the current inline-expansion requirement. Role selection, search, claim selection, draft inputs, and the research drawer are locally interactive. The will editor is a limited layout demonstration, not the final all-role state engine.

## Actual role artwork

The preview uses real PNGs from the **Vanilla** folder of the [Fancy UI asset repository](https://github.com/AlchlcDvl/RoleIconRecolors/tree/162d3df30238f4d014cf729969119380509df7b4/Vanilla), delivered at a pinned revision through jsDelivr. It does not use the repository's recolored resource folders or BetterTOS2 alternatives. The images are shown in the role picker, selected-role header, cover cards, and research drawer.

Example: [Wildling PNG](https://cdn.jsdelivr.net/gh/AlchlcDvl/RoleIconRecolors@162d3df30238f4d014cf729969119380509df7b4/Vanilla/Wildling.png). The actual Wildling asset was visually inspected; all displayed role-image elements were checked for successful loading in the browser. Icons remain associated with readable names.

The [existing icon manifest](ICON_MANIFEST.json) remains the source inventory for the full website's 60 roles and four transformed states. Preserve the original game-art attribution and the per-file source references during implementation. No generated substitute role art is planned.

## Preview checks

The compact, library, and field layouts were checked at narrow width without horizontal overflow. The research drawer opened and closed, role switching updated the guide, and the smaller will section expanded. Displayed image elements loaded successfully, and the browser reported no preview script errors. The preview is intentionally a layout study; the complete all-role application remains a separate implementation task.
