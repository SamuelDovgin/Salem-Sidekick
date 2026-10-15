# Town opening routes: sources and decision audit

Checked **15 October 2026**. Scope: vanilla Town of Salem 2, text chat, normal starting factions. This audit adds **35 conditional alternatives across all 29 Town roles**, alongside the 29 existing default recommendations: **64 Town route choices in total**. The data lives in [routes-town.json](../../site/content/routes-town.json); the baseline is [playbook-town.json](../../site/content/playbook-town.json).

## What the ranking means

The first route remains the general beginner default for the stated situation. An alternative can become the better choice **when its condition is met**. The ordering is editorial judgment from the mechanics, information quality, friendly-fire risk, resource cost, and value of preserving useful Town actions. No source is represented as measuring the win rate of these routes, proving universal optimality, or establishing that every lobby uses the same meta.

Each route states the condition, action, target rule, reason, change-of-plan trigger, three checkpoints, three later priorities, and a concrete cost or risk. Several roles have one genuine alternative rather than filler. For roles without a selectable N1 action, the branch changes disclosure, information collection, or a D2/N2 plan; it never supplies an alternate N1 ability.

## Independently checked official material

- [Official Season 4 patch notes, R1.4.00](https://www.townofsalem2.com/news/nn2khtionvzvslwh2lcs8nmh64t8hr): cross-check for the Oracle targeting method, Deputy and Vigilante reworks, Investigator crimes, Spy rework, and Retributionist interface changes. Later patches take precedence.
- [Official Season 5 patch notes, R1.5.00](https://www.townofsalem.io/town-of-salem-2-season-5-patch-notes-r1-5-00/): cross-check for Admirer, Socialite, Catalyst, Pilgrim, Outlier availability, and removal of Camouflage.
- [Official R1.5.01 bug-fix notes](https://www.townofsalem.io/town-of-salem-2-bug-fixes-patch-notes-r1-5-01/): explicit Grace Period protection restrictions, Jailor no longer making a normal visit to the prisoner, and same-night Obsession reroll handling.
- [Official Steam announcements](https://steamcommunity.com/app/2140510/announcements): checked for subsequent changes through the current announcement listing, including R1.5.11 Flexible Factions, R1.5.13 interaction fixes, and R1.5.14 Voice Chat. These routes retain the existing normal-faction, text-chat scope; they do not apply the Voice Chat mode’s alternate communication rules.
- [Developer-published mobile version history](https://apps.apple.com/il/app/town-of-salem-2-online-game/id6471449885?platform=ipad): corroborates the older Psychic odd/Good and even/Evil swap and Trickster Mirror rework. Current reviewed role records remain the source for the full ability limits.

The role articles below are **community-maintained mechanics references**, not official recommendations or independent strategy-performance studies. All 29 existing local role dossiers and their same-day cached wiki API revisions were reviewed. Direct HTML requests for Seer, Socialite, and Spy returned HTTP 403 during this pass, so their previously captured revision text was used; a fresh live-client test is not claimed. The exact revision links preserve what was reviewed.

## Role-by-role basis

### Jailor

Mechanics reference: [Jailor role article](https://townofsalem.wiki.gg/wiki/Jailor_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Jailor%20%28ToS2%29&oldid=6571) · [local role dossier](roles/jailor.md).

**Mechanics used:** Questioning and execution are separate; an N1 prisoner cannot be executed, and jail has bypasses.

**Ranking judgment:** Defensive jail is conditional on a credible threat and a low cost from suppressing the prisoner’s own action.

**Default:** Question an unresolved prisoner. Use the questioning route when nobody needs a specific defensive jail and an unresolved claim would give Town a useful D2 lead.

- **Route 2: Shelter a threatened low-action Townie.** Use when: A credible Town player is publicly threatened, has no important N1 action, and ordinary direct attacks are the concern. Cost: The prisoner is not invulnerable, and you may protect an evil if the original Town read was weak.

### Marshal

Mechanics reference: [Marshal role article](https://townofsalem.wiki.gg/wiki/Marshal_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Marshal%20%28ToS2%29&oldid=5387) · [local role dossier](roles/marshal.md).

**Mechanics used:** Tribunal is a day ability with delayed flips and normally two immediate executions.

**Ranking judgment:** Urgent D2 planning ranks below normal preparation unless timing or vote control makes delay costly.

**Default:** Prepare cases and preserve Tribunal. Keep the ordinary preparation route when you lack two supported cases or Town can resolve the immediate case through a normal trial.

- **Route 2: Prepare an urgent D2 Tribunal.** Use when: Vote control is about to disappear or ordinary trial time cannot resolve multiple independently supported evils. Cost: Evils can exploit rushed nominations; the first victim’s role and will are unavailable before the next decision.

### Mayor

Mechanics reference: [Mayor role article](https://townofsalem.wiki.gg/wiki/Mayor_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Mayor%20%28ToS2%29&oldid=5492) · [local role dossier](roles/mayor.md).

**Mechanics used:** Reveal begins from D2, cannot occur on the stand, and starts increasing vote weight.

**Ranking judgment:** Early Reveal is a real strategic branch because vote growth and leadership can outweigh the default’s secrecy.

**Default:** Stay hidden until votes matter. Stay unrevealed while ordinary Town votes can resolve cases and revealing would mainly advertise an attractive kill.

- **Route 2: Plan early D2 vote growth.** Use when: Town needs a visible coordinator, extra votes can secure a supported case, and likely survival makes future vote growth useful. Cost: The public role can attract day kills or role guessers; extra vote weight does not make your reads correct.

### Monarch

Mechanics reference: [Monarch role article](https://townofsalem.wiki.gg/wiki/Monarch_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Monarch%20%28ToS2%29&oldid=6477) · [local role dossier](roles/monarch.md).

**Mechanics used:** A living Knight grants later defense and an extra vote; a Knight can be an enemy.

**Ranking judgment:** Early Knight requires evidence of Town and likely survival, rather than a random N1 defense gamble.

**Default:** Hold Knight without a credible candidate. Hold when D1 gives you no credible Town candidate or the candidate is unlikely to live to receive knighthood.

- **Route 2: Knight a credible Town candidate.** Use when: A candidate has concrete Town evidence, should survive tonight, and the additional future vote has useful value. Cost: A wrong Knight permanently strengthens an enemy, and you can still die during the initial knighting night.

### Prosecutor

Mechanics reference: [Prosecutor role article](https://townofsalem.wiki.gg/wiki/Prosecutor_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Prosecutor%20%28ToS2%29&oldid=6514) · [local role dossier](roles/prosecutor.md).

**Mechanics used:** Prosecution is a day voting-phase ability; wrongful Town use loses remaining charges.

**Ranking judgment:** The alternative prepares an early use to solve an actual vote or timing problem, not to demonstrate identity.

**Default:** Preserve prosecution for a supported case. Preserve charges while discussion and ordinary voting can remove the supported suspect.

- **Route 2: Prepare a necessary D2 prosecution.** Use when: Independent evidence supports an evil who is likely to escape ordinary voting or kill again before Town can act. Cost: You reveal yourself, bypass the target’s defense, and become the sole revenge candidate if you prosecute a winning Jester.

### Coroner

Mechanics reference: [Coroner role article](https://townofsalem.wiki.gg/wiki/Coroner_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Coroner%20%28ToS2%29&oldid=6348) · [local role dossier](roles/coroner.md).

**Mechanics used:** Autopsy records precede useful Examinations; no normal opening corpse means no N1 comparison.

**Ranking judgment:** A disputed Town attacker can be an identification objective, but an active enemy killer remains the usual first priority.

**Default:** Prepare the first useful Autopsy. Prioritize an active enemy killer’s victim after the first useful death; N1 has no normal usable autopsy.

- **Route 2: Identify a disputed Town attacker.** Use when: A real night kill is attributed to a Town killing ability and identifying its actor would resolve an important competing claim; no more urgent enemy-killer record is available. Cost: The source marks some counterattack interactions untested, and revealing a real Town killer may help an enemy Witch or role guesser.

### Investigator

Mechanics reference: [Investigator role article](https://townofsalem.wiki.gg/wiki/Investigator_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Investigator%20%28ToS2%29&oldid=5154) · [local role dossier](roles/investigator.md).

**Mechanics used:** Crime is an observation about attacks or visit history, not automatic faction proof.

**Ranking judgment:** A disputed no-visit story gives a specific question; framing and forced actions must stay in the interpretation.

**Default:** Investigate an unresolved visitor. Investigate an unresolved claimed visitor when its actual history can be compared with the crime result.

- **Route 2: Test a disputed no-visit story.** Use when: Someone has made a specific no-night-action or astral-only claim that conflicts with other evidence, rather than merely being quiet. Cost: No Crime can fit many enemies, and a frame or Shroud may produce a crime on an honest Town role.

### Lookout

Mechanics reference: [Lookout role article](https://townofsalem.wiki.gg/wiki/Lookout_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Lookout%20%28ToS2%29&oldid=6340) · [local role dossier](roles/lookout.md).

**Mechanics used:** Watch reports visible visitors to the chosen house and is a direct visit.

**Ranking judgment:** The first alternative changes coverage; the second changes only the brief ordering of destination questions and truthful result disclosure.

**Default:** Watch a credible useful Town house. Watch a credible useful exposed Town target when the destination is likely to generate interpretable and reasonably safe visitor traffic.

- **Route 2: Watch a secondary valuable house.** Use when: The main protection call is crowded, threatened by a rampage, or already covered by a credible Lookout. Cost: The quieter house may receive no visitors, so this sacrifices likely traffic for safety and wider coverage.
- **Route 3: Hear destinations before revealing the list.** Use when: You already have a valid Watch result and a short delay would test a specific visit claim without endangering an immediate Town decision. Cost: A long delay can look evasive and withhold useful evidence; this is a short evidence check, not a reason to suppress your will.

### Psychic

Mechanics reference: [Psychic role article](https://townofsalem.wiki.gg/wiki/Psychic_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Psychic%20%28ToS2%29&oldid=6298) · [local role dossier](roles/psychic.md).

**Mechanics used:** Odd Good visions contain two names; even Evil visions contain three; the chosen visited player is included.

**Ranking judgment:** A safe unknown is preferable to chasing a weak evil read into a known hazard. Later-night target logic is explicitly different.

**Default:** Use Good vision on an evil read. Use the N1 Good vision on a plausible evil candidate when you have one; otherwise use an eligible unknown and retain the uncertainty.

- **Route 2: Use a safe unresolved vision target.** Use when: The apparent suspicious candidate is an obvious visiting hazard, already resolved, or based only on weak bait. Cost: A neutral unknown is a weaker anchor, and framing or illusion can undermine simple faction inferences.

### Seer

Mechanics reference: [Seer role article](https://townofsalem.wiki.gg/wiki/Seer_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Seer%20%28ToS2%29&oldid=5395) · [local role dossier](roles/seer.md).

**Mechanics used:** A comparison relates two players; used and publicly revealed targets face restrictions.

**Ranking judgment:** Two competing unknown claims can be compared without pretending either is Town. Friends is not double Town confirmation.

**Default:** Compare a Town read with an unknown. Compare a credible legal Town read with an unknown when that anchor is supported and has not already been compared.

- **Route 2: Compare two competing unresolved claims.** Use when: Neither claimant deserves to be treated as Town, and the relationship between their claims would help the next discussion. Cost: Friends can mean two enemies share a faction, and Enemies does not tell you which individual is evil; framing and illusion remain possible.

### Sheriff

Mechanics reference: [Sheriff role article](https://townofsalem.wiki.gg/wiki/Sheriff_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Sheriff%20%28ToS2%29&oldid=5148) · [local role dossier](roles/sheriff.md).

**Mechanics used:** Innocent includes several enemies and Suspicious can be framed.

**Ranking judgment:** Checking beyond a specific defended-killer read targets uncertainty the ability can more usefully address, without claiming a better random success rate.

**Default:** Search an unresolved claim. Search an unresolved player whose claim can be questioned next day rather than repeatedly checking a low-uncertainty Town read.

- **Route 2: Search beyond the obvious killer read.** Use when: The loudest suspect is specifically a likely defended Neutral Killing role, or another credible investigator is already resolving that exact case. Cost: This diversifies information; it does not guarantee a detectable Coven target or excuse ignoring a well-supported original suspect.

### Spy

Mechanics reference: [Spy role article](https://townofsalem.wiki.gg/wiki/Spy_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Spy%20%28ToS2%29&oldid=6346) · [local role dossier](roles/spy.md).

**Mechanics used:** Bugs persist while the target lives and report triggered evil-role activity, not a full visitor name list.

**Ranking judgment:** The alternative trades likely immediate traffic for a useful target that may survive longer.

**Default:** Bug a useful likely enemy target. Bug a credible useful player likely to receive enemy activity and survive long enough for the persistent Bug to matter.

- **Route 2: Bug a durable secondary target.** Use when: The most exposed Town actor seems likely to die immediately, already has useful Bug coverage, or attracts dangerous visitor traffic. Cost: A less exposed target may never be visited by an enemy; the route trades immediate activity for longer coverage.

### Tracker

Mechanics reference: [Tracker role article](https://townofsalem.wiki.gg/wiki/Tracker_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Tracker%20%28ToS2%29&oldid=5571) · [local role dossier](roles/tracker.md).

**Mechanics used:** Track follows the selected player outward; no visible direct visit can fit an astral action.

**Ranking judgment:** The alternative tests an explicit stay-home account, rather than asserting that movement identifies a role or faction.

**Default:** Track a checkable unresolved visitor. Track an unresolved claimed visitor whose destination could be compared with their independent D2 account.

- **Route 2: Test a disputed stay-home claim.** Use when: A player specifically claims a nonvisiting or astral-only role, and another observation gives you a concrete reason to doubt that account. Cost: No visit is compatible with many Town and enemy roles, so an empty result cannot validate the claim.

### Bodyguard

Mechanics reference: [Bodyguard role article](https://townofsalem.wiki.gg/wiki/Bodyguard_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Bodyguard%20%28ToS2%29&oldid=5558) · [local role dossier](roles/bodyguard.md).

**Mechanics used:** Guard intercepts one harmful direct visit; Self Protect is a different limited defensive action.

**Ranking judgment:** Self defense and spreading coverage are conditional choices; neither is treated as guaranteed protection.

**Default:** Guard a credible vulnerable Town actor. Guard a credible useful likely attack target when preserving them is more valuable than spending the once-only self option.

- **Route 2: Self Protect under a direct threat.** Use when: You have a credible reason to expect a Basic Attack on yourself and no more valuable Guard assignment; the client enables the ability. Cost: You leave another player unguarded, consume a limited resource, and receive no guaranteed attacker identity.
- **Route 3: Guard the less-covered useful player.** Use when: The main Town asset already has credible compatible protection, while another supported Town actor is exposed. Cost: The main target may still be attacked, and claimed protection may be false; avoid relying on an unverified coverage promise.

### Cleric

Mechanics reference: [Cleric role article](https://townofsalem.wiki.gg/wiki/Cleric_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Cleric%20%28ToS2%29&oldid=4540) · [local role dossier](roles/cleric.md).

**Mechanics used:** Barrier gives Powerful Defense, with one self option and no protection against Unstoppable attacks.

**Ranking judgment:** The two alternatives distinguish preserving an exposed healer from covering a second useful Town actor.

**Default:** Barrier a credible vulnerable Town actor. Barrier a credible vulnerable Town actor when ordinary protection is enabled; otherwise hold and preserve the self option.

- **Route 2: Self Barrier under a credible threat.** Use when: You are the plausible attack target, the once-only option is available, and keeping you alive outweighs the other protection assignment. Cost: You consume your only self use and leave another house without your Barrier.
- **Route 3: Barrier the uncovered useful claim.** Use when: The obvious leader already has credible coverage and another useful supported role is exposed or more likely to be attacked. Cost: The original protection claim may be false, and spreading does not guarantee either house survives.

### Crusader

Mechanics reference: [Crusader role article](https://townofsalem.wiki.gg/wiki/Crusader_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Crusader%20%28ToS2%29&oldid=3870) · [local role dossier](roles/crusader.md).

**Mechanics used:** Fortify protects the resident and can attack one random direct visitor, including a friendly visitor.

**Ranking judgment:** The alternatives coordinate a valuable busy house or deliberately hold an otherwise harmful assignment. No visitor identity or full-house kill is promised.

**Default:** Fortify a useful low-traffic house. Fortify a credible useful lower-traffic house when the target needs protection and friendly visitor danger is limited.

- **Route 2: Fortify the main asset with coordination.** Use when: A high-value Town target needs your protection and the likely friendly direct visitors can avoid that house or knowingly account for the risk. Cost: An unexpected friendly visitor can still be attacked, and your Basic visitor attack may not kill a defended enemy.
- **Route 3: Hold when friendly traffic cannot be managed.** Use when: Every plausible valuable target is expecting essential Town visits and no safe alternative house is apparent. Cost: Holding leaves the potential resident unprotected by you and may miss an enemy visitor; it is for a known bad assignment, not general fear.

### Oracle

Mechanics reference: [Oracle role article](https://townofsalem.wiki.gg/wiki/Oracle_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Oracle%20%28ToS2%29&oldid=5690) · [local role dossier](roles/oracle.md).

**Mechanics used:** Aegis targets a Town role, cannot repeat consecutive role choices, and allows Oracle only once.

**Ranking judgment:** A known threatened role can outrank the no-information self fallback. Saving Oracle has lower priority because a guessed role can be absent.

**Default:** Aegis Oracle without a credible assignment. Use the self-role fallback when Aegis is enabled, no credible threatened role is known, and spending the once-only Oracle choice is worthwhile.

- **Route 2: Aegis a credible threatened role.** Use when: A useful vulnerable Town role is credibly known and preserving its holders is more urgent than covering your own role. Cost: The claim may be false or already protected, and Aegis does not tell you exactly who holds or was saved as that role.
- **Route 3: Reserve the one Oracle choice.** Use when: No credible role is exposed, you expect little personal danger, and retaining guaranteed self-role coverage for later is worth uncertain N1 protection. Cost: This is lower priority because the selected role may be absent, and an unexpected N1 attack may kill you before the saved option matters.

### Trapper

Mechanics reference: [Trapper role article](https://townofsalem.wiki.gg/wiki/Trapper_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Trapper%20%28ToS2%29&oldid=6488) · [local role dossier](roles/trapper.md).

**Mechanics used:** The first night builds; a later trap can be consumed for protection or visitor-role information.

**Ranking judgment:** The alternative changes the objective of the first legal placement, never fabricates N1 placement before Build.

**Default:** Build before planning your first Trap. Build on N1 and prepare to place the first trap where it can preserve a valuable player without avoidable harmless traffic.

- **Route 2: Plan an information-focused first trap.** Use when: No clear attack target emerges, but checking the role mix visiting an important house would resolve a concrete dispute. Cost: A harmless visitor can spend the trap, role feedback does not itself identify each visitor, and hostile traffic may trigger a different outcome.

### Deputy

Mechanics reference: [Deputy role article](https://townofsalem.wiki.gg/wiki/Deputy_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Deputy%20%28ToS2%29&oldid=6299) · [local role dossier](roles/deputy.md).

**Mechanics used:** The limited shot is a later day action and can miss Town or defended targets.

**Ranking judgment:** The alternative sets an early-shot threshold for urgent supported cases; it does not treat a public shot as the goal.

**Default:** Preserve the shot and build evidence. Keep the shot while evidence is incomplete or an ordinary Town vote can resolve the same suspect.

- **Route 2: Prepare a justified D2 shot.** Use when: A strongly supported enemy needs to die before another day action or cannot be removed through the available vote, and Basic Attack is likely to work. Cost: The shot is limited, a failed attempt need not reveal the role publicly, and framing can make simple hit-based deductions unsafe.

### Trickster

Mechanics reference: [Trickster role article](https://townofsalem.wiki.gg/wiki/Trickster_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Trickster%20%28ToS2%29&oldid=5398) · [local role dossier](roles/trickster.md).

**Mechanics used:** Mirror, Self Mirror, absorbed attacks, and Unleash are distinct states with different risks.

**Ranking judgment:** A personal threat can justify the one Self Mirror; a stored attack then changes the next legal priorities.

**Default:** Mirror a credible vulnerable Town actor. Mirror a credible useful likely attack target while preserving the once-only Self Mirror for a more personal threat.

- **Route 2: Self Mirror when enemies may target you.** Use when: You are a credible likely attack target, the one self option is available, and another external assignment is less valuable. Cost: Using the once-only self option leaves someone else uncovered; some indirect or Unstoppable attacks bypass or break Mirror.

### Veteran

Mechanics reference: [Veteran role article](https://townofsalem.wiki.gg/wiki/Veteran_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Veteran%20%28ToS2%29&oldid=6536) · [local role dossier](roles/veteran.md).

**Mechanics used:** Alert attacks all direct visitors and can be roleblocked; its defense is limited.

**Ranking judgment:** A threat-based N1 Alert is shown as a conditional exception to holding, with no fake protection call to attract Town.

**Default:** Conserve Alert on a quiet night. Conserve Alert on a quiet N1 when no concrete signal makes hostile visitors more likely than useful friendly visitors.

- **Route 2: Alert against a credible hostile visit.** Use when: Your actual D1 exposure or a concrete threat makes an enemy visit plausible, and you have not invited friendly Town visitors. Cost: Alert attacks all direct visitors regardless of faction, while roleblocks, stronger attacks, and astral actions can defeat simple safety assumptions.

### Vigilante

Mechanics reference: [Vigilante role article](https://townofsalem.wiki.gg/wiki/Vigilante_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Vigilante%20%28ToS2%29&oldid=5532) · [local role dossier](roles/vigilante.md).

**Mechanics used:** Vigilante must Load before shooting; a shooting attempt does not also Load.

**Ranking judgment:** The alternative plans a supported first N2 shot while explicitly preserving the forced N1 loading requirement.

**Default:** Load first and set an evidence threshold. Load on N1, then preserve the shot unless a supported evil is a sensible Basic-Attack target.

- **Route 2: Prepare the first supported N2 shot.** Use when: D2 evidence is likely to identify an evil whose removal tonight matters and who is not expected to resist or turn your visit against Town. Cost: A wrongly chosen Town target costs more than one bullet, and a night spent attempting to shoot does not also load.

### Admirer

Mechanics reference: [Admirer role article](https://townofsalem.wiki.gg/wiki/Admirer_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Admirer%20%28ToS2%29&oldid=6658) · [local role dossier](roles/admirer.md).

**Mechanics used:** The current role searches for an Obsession, then can Care; daytime Bestow is independent.

**Ranking judgment:** Early Bestow is conditional on an evidenced useful beneficiary. It is not a replacement night action or the old marriage mechanic.

**Default:** Search using the Obsession alignment clue. Use the starting subalignment clue to search compatible candidates, keeping Bestow for a justified useful beneficiary.

- **Route 2: Bestow an evidenced Town actor early.** Use when: A useful Town actor has concrete independent support and benefits from astral visits or immunity to disruption; an eligible day Bestow is available. Cost: Bestow is permanent, and upgrading the wrong player may make an enemy harder to disrupt or observe.

### Amnesiac

Mechanics reference: [Amnesiac role article](https://townofsalem.wiki.gg/wiki/Amnesiac_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Amnesiac%20%28ToS2%29&oldid=6546) · [local role dossier](roles/amnesiac.md).

**Mechanics used:** Remember is automatic and determines the new role without selectable corpse targeting.

**Ranking judgment:** The alternative is truthful disclosure of the timeline. It never claims an extra night ability.

**Default:** Wait honestly for automatic Remember. Wait truthfully for automatic Remember feedback and prepare to adopt the new role’s actual current state.

- **Route 2: Disclose the transition timeline early.** Use when: Claim collection starts before you have Remembered, or a new role will otherwise make your missing early actions look inconsistent. Cost: Early disclosure may advertise a weak or changing claim; it does not publicly prove that you were Amnesiac.

### Retributionist

Mechanics reference: [Retributionist role article](https://townofsalem.wiki.gg/wiki/Retributionist_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Retributionist%20%28ToS2%29&oldid=5202) · [local role dossier](roles/retributionist.md).

**Mechanics used:** Raise depends on a legal corpse and reproduces the corpse’s restricted action; corpse competition can cause failure.

**Ranking judgment:** An information-first body is chosen for a decisive question, not a general assertion that investigation always beats protection.

**Default:** Wait for a useful legal Town corpse. Wait on a normal N1 with no usable corpse, then choose a legal Town body whose ability solves the current most important problem.

- **Route 2: Plan a decisive information-first Raise.** Use when: A legal investigative Town body becomes available and its result can resolve an important conflict more safely than a speculative attack. Cost: Another corpse user may take priority, and an information result can remain limited or affected by its original role’s mechanics.

### Socialite

Mechanics reference: [Socialite role article](https://townofsalem.wiki.gg/wiki/Socialite_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Socialite%20%28ToS2%29&oldid=5893) · [local role dossier](roles/socialite.md).

**Mechanics used:** Party blocks uninvited direct access, guests are permanent, and hosts cannot repeat consecutively.

**Ranking judgment:** Holding a bad traffic assignment and inviting one justified visitor are separate conditional commitments.

**Default:** Party with a safe visitor plan. Party at a credible useful target only when blocking uninvited visits helps more than it obstructs necessary Town work.

- **Route 2: Hold until friendly access is clear.** Use when: The only worthwhile house is expecting necessary Town protection or investigation and those visitors are not safely covered by your Guest List. Cost: Holding gives no protection from your Party, so reassess promptly when a defensible target becomes available.
- **Route 3: Admit one trusted essential visitor.** Use when: A credible protector or other necessary Town visitor needs access to the intended Party house and is a justified permanent guest. Cost: The guest may be an enemy and will retain future access; Party has bypasses and cannot guarantee a safe host.

### Tavern Keeper

Mechanics reference: [Tavern Keeper role article](https://townofsalem.wiki.gg/wiki/Tavern_Keeper_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Tavern%20Keeper%20%28ToS2%29&oldid=4009) · [local role dossier](roles/tavern-keeper.md).

**Mechanics used:** Drink blocks night actions, some targets retaliate, and successful blocks create repeat-target restrictions.

**Ranking judgment:** A credible retaliation hazard can justify holding when no useful safer target exists; it does not justify universal inactivity.

**Default:** Drink with a plausible unresolved enemy. Drink with an unresolved plausible harmful actor when the disruption value outweighs blocking Town or visiting danger.

- **Route 2: Hold against a likely retaliating killer.** Use when: Your only meaningful suspect is a likely uncautious Serial Killer or a full-moon Werewolf, and a direct visit would be unreasonably dangerous. Cost: Holding allows a possible enemy action; the route requires a concrete visiting hazard rather than fear of every unknown.

### Catalyst

Mechanics reference: [Catalyst role article](https://townofsalem.wiki.gg/wiki/Catalyst_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Catalyst%20%28ToS2%29&oldid=6496) · [local role dossier](roles/catalyst.md).

**Mechanics used:** Overcharge enables extra later actions but can benefit enemies and has role-specific interactions.

**Ranking judgment:** The alternative selects a concrete supported investigative plan and avoids unverified special-interaction guarantees.

**Default:** Boost only a trusted useful actor. Hold without a trusted useful beneficiary; Overcharge when you can name a concrete extra Town action that is worth enabling.

- **Route 2: Overcharge a trusted investigator.** Use when: A supported investigator has two useful legal questions for the affected later night and the setup permits Catalyst. Cost: A false investigator may be a book holder, turning your help into another attack; some interaction details require client feedback.

### Pilgrim

Mechanics reference: [Pilgrim role article](https://townofsalem.wiki.gg/wiki/Pilgrim_(ToS2)) · [reviewed revision](https://townofsalem.wiki.gg/w/index.php?title=Pilgrim%20%28ToS2%29&oldid=6432) · [local role dossier](roles/pilgrim.md).

**Mechanics used:** Pilgrim has no active night action and depends on actual roledeck availability.

**Ranking judgment:** A fixed-slot conflict is stronger than open-list absence of counterclaims; the alternative explicitly requires a genuinely constrained deck.

**Default:** Build a truthful claim ledger. Use the claim-ledger and evidence route in an open or uncertain setup; you have no night ability to substitute for reasoning.

- **Route 2: Audit a fixed Pilgrim slot.** Use when: The roledeck explicitly restricts Pilgrim to a known number of possible slots and competing claims exceed that space. Cost: Misreading random buckets creates false certainty; this route applies only when the displayed setup actually limits the claims.

## Known limits that affect the routes

- **Grace Period:** the official R1.5.01 notes broadly disable protective abilities on the first night. The cached Cleric article separately says Self Barrier can be selected during Grace Period. The routes do not recommend spending a limited self charge in an attack-disabled opening; follow the current client’s enabled controls and use a truthful unavailable/hold entry. Neither reading creates an attack or a guaranteed save.
- **Catalyst interactions:** the community interaction table marks several rows incomplete or outdated. Later official patches fixed some overcharged abilities. The new route uses a supported investigator with a concrete plan and asks for real timing/feedback instead of promising a universal duplicate effect.
- **Coroner:** community counterattack tables explicitly contain untested interactions. The identification branch is conditional on a usable record and keeps exact role identity separate from faction or voluntary guilt.
- **Investigation:** framing, illusion, control, astral visits, role changes, and conversion can change what a result means. No route turns a compatible visit or weak result into automatic Town confirmation.
- **N1 is not a separate ability for every route:** Marshal, Mayor, Prosecutor, Coroner, Trapper, Deputy, Vigilante, Amnesiac, Retributionist, and Pilgrim retain their stated preparation, setup, or no-action gates. Switching route changes the plan around that gate.
- **Honest Town play:** these Town routes do not fabricate investigations or suggest claiming another role to manufacture evidence. Strategic exact-role disclosure is distinguished from the role’s actual ability and results.

## Content checks

The authored JSON was checked for exact coverage of the 29 baseline Town IDs, nonempty condition and risk text, one or two alternatives per role, unique route IDs within each role, labels of at most seven words, exactly three checkpoints and three later priorities per alternative, and at least one mechanics source URL per route. Those are content-shape checks, not evidence that a strategy wins more often.
