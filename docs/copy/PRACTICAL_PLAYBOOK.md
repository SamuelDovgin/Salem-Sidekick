# Practical playbook audit — 15 October 2026

**Current extension:** [ranked opening routes and detailed claim strategies](RANKED_STRATEGIES.md) supplies conditional alternatives, source links, and bullet-point tactics for every ranked pairing. This document retains the default policies and earlier compact claim summaries.

The current website uses these opinionated starting policies for **all 60 base roles and four transformed states**. Each has a default action, target rule, reason, explicit pivot, and three ranked later priorities. The ranking is editorial strategy based on source-checked mechanics, not a measured optimal-win-rate claim.

The will builder is replaced by [claim-specific examples and maintenance advice](CLAIM_EXAMPLES.md). All 64 actual role/state choices remain available; public covers are limited to the 29 Town roles. The 31 opposing-role audits compare upkeep, real overlap, payoff, and exposure instead of implying that the first mechanically plausible claim is the easiest beginner claim.

## Decisions that changed

- Medusa + TP cover during Grace Period: hold Stone on N1. An enabled non-harmful Stone visit is not a legal protective visit; check the exact cover before acting. Protective examples now start on N2.

- Voodoo Master: default Silence on a low-information N1; Blind a credible investigator when you have that information; Deafen is situational information isolation. Rotate targets regardless of doll.
- Voodoo cover: Cleric TP is lower upkeep than Psychic TI. It has fewer invented results and less daily posting, but no genuine protection. Psychic offers more discussion influence with higher daily workload and contradictions.
- A protective will records an attempted Barrier, not an unsupported saved-player result. Choose a plausible target and retain movement continuity. Do not erase a dead target automatically: interruption or Unstoppable damage can explain a death, whereas an unblocked ordinary lethal attack conflicts with a genuine Barrier.
- Wildling Tracker/Lookout, Poisoner Tavern Keeper, and compatible Necromancer Retributionist can justify extra bookkeeping through real information/effects. Low upkeep does not automatically outrank that support.
- Transformed states get their own active recommendations and checkpoints, rather than continuing the parent’s pre-transform task.
- The current UI presents examples, blank formats, timing, and practical tips. Old stored drafts remain a separate read-only archive and never enter copied examples.

## Coverage

64 default policies · 192 ranked priorities · 31 opposing-role claim audits · 71 named candidate comparisons · 29 detailed Town-claim profiles · 64 selectable-role examples.

Source content is maintained in `site/content/playbook-*.json`, `site/content/claim-relations.json`, and `site/content/claim-profiles.json`; `prepare-data.py` integrates it into the shared role library. Existing researched mechanics and the original compact/expanded content remain available inline.

## Jailor

**Actual alignment:** TPow — Town Power.

**My default:** Get a useful claim before spending an execution.

Choose an unresolved prisoner during D1, then ask their exact role, intended action, and target reasoning on N1. You cannot execute tonight.

**Why:** A documented claim gives you a testable D2 lead; N1 is a questioning night, not a killing opportunity.

**Target rule:** Prefer a player whose D1 statements can be checked. With no information, choose an eligible unknown; avoid a credible key Town actor whose action you would suppress.

**Change the plan when:** Do not jail a valuable Town claim merely to obtain a private chat. If you miss the day selection, record the missed jail instead of inventing a prisoner.

1. From N2, execute a supported evil when execution is enabled; first compare their answer with independent evidence and protection possibilities.
2. Without a strong execution case, jail a different unresolved player and obtain a fresh, specific account; consecutive jails are restricted.
3. Before the next day ends, select the next prisoner and preserve the claim log; a wrong Town execution removes your remaining ability.

Ask a short repeatable question: “Role, previous actions, tonight’s intended action, and why?” A nervous or slow answer is not a guilty result. At dawn compare the answer with posted results, deaths, and earlier statements. A night without a kill does not uniquely identify your prisoner as a killer. Keep future jail choices private unless sharing them solves a concrete coordination problem.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Jailor_(ToS2)). Target and priority choices above are editorial recommendations.

## Marshal

**Actual alignment:** TPow — Town Power.

**My default:** Save Tribunal until you can name the executions.

No N1 ability. Prepare a short claim-and-evidence list; preserve both Tribunal charges for a voting day.

**Why:** Tribunal removes the defense and judgment stages, so activating before you have cases gives coordinated evils a powerful tool.

**Target rule:** Prepare the best supported accusation and a separate second candidate. With no evidence, collect claims and hold; an empty shortlist is a reason to wait.

**Change the plan when:** Use earlier if a supported evil must die before Town loses vote control, but do not activate simply to confirm your role or because D2 began.

1. Before activation, name the intended candidates, state the evidence, and check whether Town can supply the needed votes.
2. Start Tribunal when faster executions or extra voting time materially help; count the available executions and keep the order explicit.
3. During Tribunal, direct votes to the agreed cases and stop improvising replacements from silence alone; dead roles and wills wait until the Tribunal ends.

Your opening contribution is preparation rather than a button press. A useful candidate has a claim, a specific contradiction, and a reason their explanation fails. Have more than one case ready because you cannot use the first execution’s revealed role as feedback during the Tribunal. If Town already has an ordinary clean execution available and no second case, the extra power may add risk without solving a problem.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Marshal_(ToS2)). Target and priority choices above are editorial recommendations.

## Mayor

**Actual alignment:** TPow — Town Power.

**My default:** Stay hidden until your extra votes change a decision.

No N1 action. Record claims and identify the strongest D2 question; you cannot Reveal on D1.

**Why:** An unrevealed Mayor preserves an important vote swing without immediately advertising the exact role.

**Target rule:** Watch contested claims and who supplies evidence rather than who is loudest. With no information, prepare ordinary claim questions and preserve Reveal.

**Change the plan when:** Reveal on a later voting day when it secures a supported execution, prevents your own mistaken execution, or establishes needed leadership; avoid waiting past a decisive vote.

1. Use ordinary discussion to identify a supported evil and count the votes before revealing.
2. Reveal when the extra vote power changes that outcome; state the intended vote and evidence immediately.
3. After revealing, coordinate the remaining votes and follow-up cases, and plan around the protection and communication restrictions shown by your role card.

Being able to reveal does not mean you should prove yourself at the earliest opportunity. First ask what the extra votes accomplish today. Preserve truthful notes even while claiming only TPow. Once revealed, your survival and voting choices become especially consequential: demand an explanation for contradictions, but do not turn your public confirmation into certainty about every other claim.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Mayor_(ToS2)). Target and priority choices above are editorial recommendations.

## Monarch

**Actual alignment:** TPow — Town Power.

**My default:** Hold N1 unless you have a credible Town candidate.

Default to holding Knight with no credible Town read. Knight tonight only if a well-supported Town candidate is likely to survive.

**Why:** Knight grants permanent voting power to any faction, and its defense does not protect you immediately during the knighting night.

**Target rule:** Prefer a strongly evidenced Town player with useful future votes, not merely a TPow claim. With no information, preserve the charge rather than pick a random knight.

**Change the plan when:** If a credible Town candidate exists and survival or impending vote pressure makes delay costly, knight now; do not preserve both charges until they can no longer affect voting.

1. Knight the best-supported living Town candidate once evidence exists; check that they are likely to remain alive.
2. Recount vote control before using the second charge; strengthen a reliable voter rather than rewarding agreeable chat.
3. Track living knights and your resulting defense, and reassess any knight whose actions contradict Town interests; knighthood does not confirm faction.

Random N1 knighting trades uncertain defensive benefit for a permanent risk of strengthening an enemy vote. Holding is the beginner default, not a claim that waiting always wins. If you do knight, record whether the player actually received the extra vote at dawn. A dead target can leave the charge unused, and your Basic Defense arrives with the living Knight effect rather than saving you earlier that same night.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Monarch_(ToS2)). Target and priority choices above are editorial recommendations.

## Prosecutor

**Actual alignment:** TPow — Town Power.

**My default:** Preserve the prosecution until it solves a voting problem.

No N1 action. Build one supported accusation and prepare the question that could disprove it; Prosecute is a later voting-phase ability.

**Why:** One mistaken Town prosecution both removes an ally and costs the remaining charge, so impatience has unusually high cost.

**Target rule:** Prefer independently supported contradictions or a mechanically sound finding. With no information, gather a claim and wait; refusing an early role reveal is not sufficient evidence.

**Change the plan when:** Act earlier if a supported evil will otherwise survive a vote Town cannot win. Prefer ordinary voting when it achieves the same result without spending your charge.

1. Check the case and the target’s defense in chat before forcing an execution; distinguish real evidence from pressure.
2. Prosecute during a legal voting phase when bypassing ordinary voting materially helps; it is unavailable during Tribunal.
3. After the reveal, preserve the remaining charge for another supported case and remember that prosecuting a Jester makes you their revenge candidate.

Write your intended reason before clicking: “This player said X, but independently observed Y rules that out.” If you cannot write the sentence, hold and ask a better question. Prosecution is a way to convert a strong case into an execution, not an investigative test. A player dying does not make the decision correct if the evidence never justified it.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Prosecutor_(ToS2)). Target and priority choices above are editorial recommendations.

## Coroner

**Actual alignment:** TI — Town Investigative.

**My default:** Wait N1; autopsy a useful victim on D2.

In a normal fresh match, N1 has no eligible death record to work from. Prepare to Autopsy an overnight victim on D2, then Examine a suspect on N2.

**Why:** Coroner needs a recorded killer before its night check is useful; inventing an N1 result creates an impossible history.

**Target rule:** For the first Autopsy, prefer a victim of a killer still threatening Town. With no useful clue, choose a normal Coven or active killing-role victim rather than a departed Jester/Doomsayer victim.

**Change the plan when:** If no suitable body exists, hold and state why. Unusual setup, revived bodies, and disputed counterattack interactions need their own source/feedback check.

1. Autopsy a useful new victim during each day to expand the retained collection of recorded killers.
2. Examine a living suspect who could be one of those killers, prioritizing a player with a conflicting action or kill opportunity.
3. Report the exact killer match and role when received; on a negative result, say only that the player did not match your recorded killers.

Your first working cycle is D2 Autopsy → N2 Examine → D3 report. Keep the Autopsy victims and Examine targets on separate lines. Earlier Autopsy records remain relevant, so a new victim adds coverage rather than replacing the old record. A killer match can identify a Town player made to kill by Shroud, so distinguish “recorded killer” from “evil faction.” A negative result never clears every possible evil.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Coroner_(ToS2)). Target and priority choices above are editorial recommendations.

## Investigator

**Actual alignment:** TI — Town Investigative.

**My default:** Investigate an unresolved player; ask about their route.

Investigate one unresolved player on N1, preferably someone whose claimed action you can question on D2.

**Why:** Crimes create lines of questioning: Trespassing concerns faction-crossing visits, while Murder concerns attacking that night. Neither is automatically evil.

**Target rule:** Prefer an unconfirmed claimed visitor or a player with a checkable D1 statement. With no information, choose an eligible unknown away from obvious Veteran bait.

**Change the plan when:** If the only candidate is a credible key Town player with little uncertainty, investigate another unknown. Do not convert framing-sensitive results into an automatic execution.

1. Post the literal result with night and target, then ask a Trespassing target for their visit history or a Murder target for their action.
2. Investigate a fresh unresolved player whose current activity could explain a kill or contradiction; historical Murder is not checked on later nights.
3. Compare crimes with movement evidence, deaths, and known framing roles; preserve No Crime as a narrow result rather than a Town clear.

For a new player the useful rule is “result first, interpretation second.” A Town visitor can have Trespassing, and a legitimate Town killer can have Murder. Enchant, Illusion, Reap, and Shroud can change what the result means. When a special interaction is disputed, do not build the whole case on it. Missing feedback because you were interrupted is not No Crime.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Investigator_(ToS2)). Target and priority choices above are editorial recommendations.

## Lookout

**Actual alignment:** TI — Town Investigative.

**My default:** Watch a credible, likely-visited Town target.

Watch a credible exposed Town claim or sensible protection-call target on N1; your goal is a visitor list that can be checked tomorrow.

**Why:** Watching likely traffic makes your observation more actionable than choosing an isolated random house.

**Target rule:** Prefer a credible vulnerable Town leader or information role. With no useful call or role evidence, watch an active eligible unknown; avoid obvious Veteran bait and warn yourself about crowded-target risk.

**Change the plan when:** Skip a reckless call if Veteran, Crusader, or a known rampaging threat makes the location unusually dangerous; choose a less crowded useful target.

1. Compare the visitor list with claimed destinations and effects at that house; a contradiction is more valuable than merely finding a visitor.
2. Watch the credible Town target most likely to receive a kill or disruption next, while adapting to known rampage danger.
3. Publish useful contradictions promptly and preserve the complete list; no visible visitor does not exclude astral actions or prove that nothing happened.

Your result answers who visibly visited the watched player, not where that player went. If the target reports a disruption, obtain the visitors’ claims before assigning the effect to one of them. Visiting a known Town target is not proof of Town faction. A busy house improves information potential but can attract lethal visitors too; no single target rule overrides explicit danger in the current match.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Lookout_(ToS2)). Target and priority choices above are editorial recommendations.

## Psychic

**Actual alignment:** TI — Town Investigative.

**My default:** N1: put your weakest Town read in the Good pair.

Choose a suspicious but eligible unresolved player for the N1 Good vision; with no read, choose an unknown you can follow up on D2.

**Why:** If that chosen player is later shown evil, the other name becomes a stronger Town lead, subject to result-altering effects.

**Target rule:** For odd-night Good visions, prefer a credible evil candidate; for even-night Evil visions, prefer a strongly supported Town anchor. With no information, choose an eligible unknown and avoid forced certainty.

**Change the plan when:** Do not choose an obvious visiting hazard merely to optimize the pool. When no trusted anchor exists on even nights, use an unresolved player and describe the wider uncertainty.

1. Post the exact Good pair or Evil trio early each day, including night and chosen anchor, so Town can compare it with other evidence.
2. On even nights, include an independently supported Town anchor to focus scrutiny on the other two names; seek claims, not an automatic execution.
3. On odd nights, include a supported evil candidate where safe; revisit earlier pools when deaths or reliable findings establish identities.

Current N1 is a two-name Good vision: at least one is Good, not both confirmed Town. N2 is a three-name Evil vision: at least one is Evil, not exactly one. Enchant, Reap, Illusion, and unusual faction setups narrow how strongly you can interpret those labels. Copy the actual message if a small-town result fails instead of inventing a normal pool.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Psychic_(ToS2)). Target and priority choices above are editorial recommendations.

## Seer

**Actual alignment:** TI — Town Investigative.

**My default:** Compare a stronger Town read with an unresolved player.

Compare two eligible players on N1: one you read more strongly as Town and one unresolved player. If nobody has earned trust, compare two unknowns.

**Why:** A reliable anchor makes a pair easier to interpret; two unknowns still supply a relationship Town can resolve later.

**Target rule:** Prefer players with distinct, checkable claims and avoid obvious visiting hazards. With no information, select two eligible unknowns, record both, and treat the pair as unresolved.

**Change the plan when:** Do not choose a revealed or previously compared player when the client disallows it. A merely confident claim is not a confirmed anchor.

1. Post both targets and the exact Friends/Enemies result early, and ask for claims from a useful unresolved pair.
2. Use fresh eligible pairs on later nights, choosing your strongest available independent Town read as the anchor where possible.
3. Revisit earlier pairs after reliable role/faction evidence arrives; Friends does not prove Town and Enemies does not identify which player is evil.

Your two selections are both visits, so check danger at both houses. Enchant, Reap, Illusion, Jester classification, and converted factions can change the relationship you see. Do not clear someone simply because a Tracker saw two visits: Catalyst, War, and Bestow/setup interactions matter. If a visit fails, preserve the actual failure and follow the client’s remaining target eligibility rather than pretending a comparison succeeded.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Seer_(ToS2)). Target and priority choices above are editorial recommendations.

## Sheriff

**Actual alignment:** TI — Town Investigative.

**My default:** Search an unknown; report the result without a Town clear.

Search one unresolved player on N1, preferably someone whose claim or behavior you can question tomorrow.

**Why:** An early check produces useful pressure, but Innocent misses several evil categories and Suspicious can be framed.

**Target rule:** Prefer an unconfirmed player outside obvious Veteran bait. With no information, choose an eligible unknown; quiet chat or a particular player number is not evidence.

**Change the plan when:** Switch away from a credible low-uncertainty Town claim unless a specific contradiction needs checking. Repeating an Innocent player without new cause usually adds little.

1. Post exact night, target, and Innocent/Suspicious result early; if interrupted, post the interruption instead.
2. Use a Suspicious result to obtain a claim and compare independent evidence, accounting for Enchant and Reap.
3. Search fresh unresolved players as the roster narrows; combine Innocent results with movement, claims, and vote behavior instead of treating them as confirmations.

Sheriff is TI, not TP or TS. Current Innocent results can include the Necronomicon holder, Neutral Killings, Jester, and solo Apocalypse. “N1: 4 — Innocent” is accurate; “4 is confirmed Town” is not. An Innocent can still become an important suspect when other evidence conflicts. Your next target should expand useful coverage rather than repeatedly checking someone simply because you want a different result.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Sheriff_(ToS2)). Target and priority choices above are editorial recommendations.

## Spy

**Actual alignment:** TI — Town Investigative.

**My default:** Bug a likely future evil target, then spread your bugs.

Bug a credible exposed Town or likely attack/disruption target on N1.

**Why:** Bugs persist while the recipient lives, so early placement on a useful likely survivor can pay across several nights.

**Target rule:** Prefer a player likely to draw evil activity and survive it. With no role information, choose an active eligible unknown away from obvious visiting hazards.

**Change the plan when:** A likely immediate death may erase future bug value; choose a secondary valuable target if the obvious one appears doomed or dangerous to visit.

1. Plant on a fresh useful living player when possible rather than wasting placement on an already bugged survivor.
2. Report actual triggered role feedback with its house and night; combine it with Lookout or claims to investigate visitor identity.
3. Review all surviving bug locations each dawn and distinguish an evil role trigger from proof of a specific player number.

The bug is an ongoing watch for qualifying evil activity, not a one-night generic visitor list. It reports role information rather than naming the visiting player. Framed or converted players can trigger it in ways that need interpretation, and no trigger is not a blanket Town clear. Keep previous placements in the log so later feedback is not mistakenly attributed only to tonight’s new target.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Spy_(ToS2)). Target and priority choices above are editorial recommendations.

## Tracker

**Actual alignment:** TI — Town Investigative.

**My default:** Track a player whose claimed destination can be checked.

Track an unresolved player on N1; prefer a claimed visitor whose route could be compared with their D2 account.

**Why:** Movement contradictions are your strongest practical contribution; merely seeing a visit does not establish faction.

**Target rule:** Choose an unconfirmed visitor or checkable D1 claim. With no information, track an eligible unknown while avoiding obvious Veteran bait.

**Change the plan when:** A known astral/nonvisiting role usually offers less movement information unless you are testing a specific contradiction. Do not expose yourself to an explicit hazard for a weak lead.

1. Record exact visible destinations, then compare them with the player’s action claim and any effects at those destinations.
2. Track an unresolved player whose route can explain a current death, disruption, or incompatible claim.
3. Use repeated consistent routes as corroboration while checking setup exceptions; report no visible visit without calling it confirmed inactivity.

Your result answers where the tracked player visibly went, not who visited them. Astral actions can look like no visit. Multiple visits can be important but are not automatically Seer confirmation when Catalyst or other relevant setup effects exist. Ask for the target’s action before supplying every detail when testing a contradiction, while posting urgent useful information soon enough for Town to act.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Tracker_(ToS2)). Target and priority choices above are editorial recommendations.

## Bodyguard

**Actual alignment:** TP — Town Protective.

**My default:** Guard the most credible vulnerable Town asset.

Guard a credible exposed Town Power or useful information claim on N1; save Self Protect unless you expect a direct attack on yourself.

**Why:** Your value is interrupting a harmful visitor and preserving a useful ally; a self-vest spends a night protecting no one else.

**Target rule:** Prefer a supported Town player likely to be attacked. With no trusted claim, guard a sensible eligible unknown away from obvious Veteran bait rather than treating a loud protection call as confirmed Town.

**Change the plan when:** Self Protect when you are the likely Basic-attack target and no better guard assignment exists. Avoid a known dangerous visiting location; Guard does not stop every astral or passive threat.

1. Guard the best-supported vulnerable Town player who is likely to draw a direct harmful visit.
2. Coordinate only with a justified trusted protector if mutual coverage materially improves survival; do not assume a whispered claim is confirmed.
3. Reassess as attack types become known and preserve an accurate guard/vest history; a quiet night does not mean you saved or cleared the target.

Guard intercepts one qualifying harmful visit rather than granting general Defense. Multiple attackers can still kill your target, and the intercept can kill you while protecting them. That sacrifice can be worthwhile for a valuable Town asset. Prefer a guard assignment you can explain from known roles and likely enemy incentives; do not claim that a target surviving your visit proves either their faction or a successful save.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Bodyguard_(ToS2)). Target and priority choices above are editorial recommendations.

## Cleric

**Actual alignment:** TP — Town Protective.

**My default:** Barrier the best credible Town target; save self-protection.

If Barrier is enabled, protect a credible vulnerable Town claim on N1. If Grace Period disables other-player Barrier, hold and preserve Self Barrier.

**Why:** Repeatable protection on a valuable ally usually adds more team value than using your one self-protection without an attack reason.

**Target rule:** Prefer a supported exposed Town Power, then a useful Town Investigative. With no credible claim, choose an eligible unknown away from Veteran bait; a random target is not a confirmed ally.

**Change the plan when:** Use Self Barrier when you are a plausible attack target and preserving yourself outweighs another assignment. Change course for known rampage or Unstoppable threats that Barrier cannot safely solve.

1. Protect the most valuable credible Town player likely to be attacked; update that choice after new claims and deaths.
2. Protect a threatened fellow protector when keeping the protection network alive is more valuable than stacking the obvious target.
3. Spend Self Barrier on a credible survival need and record only actual attacked/saved feedback, not an assumed successful heal.

A Barrier supplies Powerful Defense, so it can stop many attacks but not Unstoppable ones. Repeatedly protecting the same good target is legal and can be correct; rotate because the threat changed, not for variety. Your visit can still expose you to Veteran, Arsonist, or rampage danger. A surviving target without attack feedback is simply alive, not a confirmed save or confirmed Town.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Cleric_(ToS2)). Target and priority choices above are editorial recommendations.

## Crusader

**Actual alignment:** TP — Town Protective.

**My default:** Fortify a useful secondary target, away from the crowd.

Fortify a credible but less crowded Town claim on N1 rather than following a mass TP/LO call.

**Why:** You attack one random direct visitor regardless of faction; a crowded protection pile creates avoidable Town casualties.

**Target rule:** Prefer a useful information role or protector likely to attract an evil visitor but few Town visitors. With no information, choose a low-traffic eligible unknown away from obvious Veteran bait.

**Change the plan when:** If every known target is expected to receive Town visits and you cannot coordinate safely, holding is better than a clearly reckless assignment. Fortify the main asset only when the visitor risk is understood.

1. Protect the useful Town target most likely to draw an evil visit without drawing several friendly visits.
2. Coordinate a single protection assignment with justified trusted Town when possible; explicitly avoid stacking visiting protectors on your target.
3. After attack feedback, compare deaths and visitor claims without assuming every attacked visitor was evil; adapt when rampage threatens the location.

Your protective Defense and your random visitor attack are separate parts of the ability. The protected target can be Town while the visitor you kill is also Town. This makes target traffic a central decision variable, not a minor caveat. The easy rule is “valuable but not crowded,” revised when actual claims, trust, and visitor plans give you a better reason.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Crusader_(ToS2)). Target and priority choices above are editorial recommendations.

## Oracle

**Actual alignment:** TP — Town Protective.

**My default:** With no role information, Aegis Oracle once for reliable coverage.

If Aegis is enabled and you know no useful role claim, select Oracle on N1: you know at least your own role exists. If Grace Period disables Aegis, hold.

**Why:** Blindly protecting an unconfirmed role can protect nobody; Oracle is certain to cover you, but spends your one Oracle selection.

**Target rule:** Prefer a credible threatened role over the self-default when one is known. With no information, Oracle is the conservative fallback; record that its one use is spent.

**Change the plan when:** Skip Oracle if you have a credible vulnerable Town role worth preserving, or expect little threat to yourself and want to reserve self-coverage. Never repeat the same role on consecutive nights.

1. Aegis the credible threatened Town role that is both present and likely to be attacked, considering other known protection.
2. On the required rotation night, protect the next most useful known role rather than guessing a famous role with no evidence it exists.
3. Use attack feedback to improve coordination and keep the exact role-selection history; Aegis chooses roles, not numbered players.

This default is an editorial survival tradeoff, not a claim that spending self-Aegis N1 is always best. Bodyguard or an exposed unprotected information role may offer higher team payoff when their existence is credible. The key is to make the tradeoff explicit instead of showing a list of equally weighted possibilities. Aegis is astral; do not invent a player visit or assume an enemy’s fake role claim receives the selected protection.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Oracle_(ToS2)). Target and priority choices above are editorial recommendations.

## Trapper

**Actual alignment:** TP — Town Protective.

**My default:** Build N1; save the first placement for a good D2 claim.

Build on N1. You cannot place a fresh trap before completing the building night; record whether construction actually succeeded.

**Why:** Your first useful protection requires a ready trap. Accurate state tracking prevents an impossible N1 placement and a wasted N2 plan.

**Target rule:** No N1 player target is needed. Use D2 claims to choose a credible valuable target for the first placement; with no credible claim, use an eligible unknown whose survival matters more than expected harmless traffic.

**Change the plan when:** If jailed, roleblocked, or otherwise prevented from building, rebuild instead of pretending a trap is ready. Avoid a placement expected to be immediately consumed by avoidable harmless visitors.

1. Once ready, place on a credible vulnerable Town asset likely to draw a harmful visitor.
2. Leave an untriggered useful trap in place; dismantle only when the old assignment has lost value enough to justify relocation delay.
3. After a trigger, report the exact protection or visitor-role feedback, then rebuild before trying to place again.

Only one trap can be active. A harmless visitor can consume it and yield role information rather than a kill, so repeated rebuilding is not automatically evidence of poor play. Record “building,” “ready,” “placed,” and “triggered” separately. The trap does not identify visitor numbers merely from role names, and astral visits do not trigger it. Do not claim a universal shield against multiple attackers or rampage collateral.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Trapper_(ToS2)). Target and priority choices above are editorial recommendations.

## Deputy

**Actual alignment:** TK — Town Killing.

**My default:** Hold the bullet until a specific case justifies the day shot.

No N1 action. Prepare one D2 contradiction question and preserve your single day shot; you cannot shoot on D1.

**Why:** A speculative shot can spend your only charge without resolving the game. Investigation through discussion is free.

**Target rule:** Build a case from incompatible claims or independent evidence. With no information, ask for actions and wait; silence, confidence, or refusal to name an exact role immediately is not enough.

**Change the plan when:** Fire on a later legal day phase when a supported evil is worth removing now. If the evidence remains weak or expected Defense makes the shot ineffective, keep the charge.

1. Challenge the best specific contradiction and hear the explanation before shooting.
2. Use the day shot when evidence and timing justify it; check known defense and whether the target is a sensible shooting candidate.
3. After shooting, mark the charge spent and continue through votes and questions; a miss does not clear the target as Town.

Deputy is TK, not TI, TP, or TS. The current shot is a day ability and its miss behavior is not the old “kill Town and die” rule. A Town target or sufficient Defense can produce a miss, and deceptive effects matter. Record the actual outcome without turning a private miss into a claimed successful kill. Holding the bullet is active risk management, not failure to use your role.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Deputy_(ToS2)). Target and priority choices above are editorial recommendations.

## Trickster

**Actual alignment:** TK — Town Killing.

**My default:** Mirror a credible likely attack target before considering a kill.

Place Magic Mirror on a credible vulnerable Town target on N1; reserve your one Self Mirror unless you are the likely attack target.

**Why:** Absorbing an attack can save an ally, identify the attacking role, and create your later offensive action.

**Target rule:** Prefer a supported exposed Town Power or information role likely to be attacked. With no information, choose an eligible unknown away from obvious Veteran bait rather than random Self Mirror.

**Change the plan when:** Use Self Mirror when a credible attack threat is on you. Do not expect Mirror to stop every passive, indirect, or Unstoppable attack.

1. While you have no stored attack, Mirror the most credible likely direct-attack target and record any absorbed attacking role.
2. After absorption, Unleash on a supported evil when the stored attack and collateral risk make sense; do not fire merely to clear the slot.
3. Once safely discharged, return to protecting likely targets; if the stored attack rampages, account for friendly visitors before selecting its destination.

You cannot keep placing mirrors while holding an absorbed attack, so a bad speculative Unleash can waste the protection you just earned. State the attack you absorbed and distinguish it from a general evil identification. An Unleash is a harmful visit that can trigger Bodyguard or Trapper. A mirrored player surviving with no absorption feedback is not a confirmed save or a confirmed ally.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Trickster_(ToS2)). Target and priority choices above are editorial recommendations.

## Veteran

**Actual alignment:** TK — Town Killing.

**My default:** Quiet N1 with no attack signal: conserve Alert.

Default to no Alert on a quiet, low-information N1. Alert if your D1 behavior or a concrete threat makes an evil visit more plausible than friendly visits.

**Why:** You have three Alerts and shoot all direct visitors, including Town; spending one blindly can remove allies instead of enemies.

**Target rule:** You choose your own house, not a player target. With no information, preserve the charge; do not invite TP/LO and then shoot the responders.

**Change the plan when:** Alert tonight if a credible attack or hostile visit is expected and you have discouraged friendly visitors. Check Grace Period and roleblock risk rather than assuming Alert guarantees safety.

1. Use Alert on nights when an enemy visit is plausible and friendly traffic can be kept low.
2. After any shots, compare the count with deaths and claims without assuming every visitor was evil.
3. Preserve at least some defensive flexibility while the match continues, but spend remaining Alerts when a supported imminent threat makes saving them pointless.

This is a conservative beginner default rather than a universal recommendation to skip N1. The target-selection problem is predicting who will visit you. Fake protection calls deliberately bring the wrong visitors into the danger zone. You can still contribute through discussion while quiet at night. Current Veteran can be roleblocked, so an Alert selection is not a promise that the ability resolved or that a Poisoner cannot threaten you.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Veteran_(ToS2)). Target and priority choices above are editorial recommendations.

## Vigilante

**Actual alignment:** TK — Town Killing.

**My default:** Load N1; shoot evidence rather than uncertainty.

Load on N1 by staying home. You cannot shoot tonight; at dawn check that loading actually succeeded.

**Why:** A loaded bullet creates the option to remove a supported evil later. An interrupted load does not create ammunition.

**Target rule:** No N1 target is needed. Prepare a D2 shortlist from conflicting claims; with no evidence, load or hold instead of treating a random shot as investigation.

**Change the plan when:** From N2, shoot when a supported evil case and expected Defense justify the Basic Attack. Hold when the target may be Town, protected, or a lethal visiting hazard.

1. Shoot a well-supported evil when removing them tonight matters and the attack is likely to work.
2. Without a justified shot, stay home to Load if a load remains available; check the client’s ammunition state.
3. After a shot, record success/failure and whether the gun is lost; shooting Town removes further gun use, so do not plan a second shot from outdated state.

Current Vigilante must load and has at most three Loads; it does not simply begin with three ready shots. A shooting attempt does not load another bullet even if disrupted. Town is already paying the cost of uncertainty through discussion and votes; your gun should capitalize on stronger evidence rather than bypass it. Bodyguard, traps, control, protection, and natural Defense can make an otherwise supported target a poor shot.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Vigilante_(ToS2)). Target and priority choices above are editorial recommendations.

## Admirer

**Actual alignment:** TS — Town Support.

**My default:** Use the starting alignment clue to search efficiently.

Admire an eligible player whose claim matches your Obsession’s starting subalignment; with no such claim, choose an eligible unknown.

**Why:** Finding your Obsession unlocks Care, while the alignment clue helps avoid spending nights on incompatible candidates.

**Target rule:** Prefer a compatible credible Town claim. With no information, choose an unknown rather than a known Town Power, Town Outlier, or Amnesiac, which cannot be the normal starting Obsession.

**Change the plan when:** If the suspected Obsession dies before discovery, follow the new clue rather than continuing the old search. Do not treat a matching alignment claim as proof.

1. Before discovery, Admire the best remaining eligible candidate matching the current Obsession clue.
2. After discovery, spend Care when the Obsession or you face a credible attack; preserve both charges when neither is threatened.
3. Use a daytime Bestow on a justified trusted useful Town actor who benefits from astral visits and disruption immunity; avoid permanently upgrading an untested evil claim.

Admirer is a search-and-support role, not the old marriage proposal. Keep the initial clue and each failed candidate in private notes. Finding the Obsession is useful evidence, but disclose carefully because it can expose another Town role. Care and Bestow solve different problems: Care is temporary survival, while Bestow permanently changes visits and disruption immunity. Do not spend either simply to make a friendly player like your claim.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Admirer_(ToS2)). Target and priority choices above are editorial recommendations.

## Amnesiac

**Actual alignment:** TS — Town Support.

**My default:** Wait honestly and prepare to switch plans when you Remember.

No selectable N1 ability in a normal fresh match. Record that you are waiting to Remember an eligible dead Town role.

**Why:** Remembering is automatic; inventing a corpse choice or an investigation obscures what the role actually does.

**Target rule:** No N1 player target exists. With no information, collect claims and watch the graveyard; let actual morning feedback determine your new role.

**Change the plan when:** If you Remember, switch immediately to that role’s current legal state and opening priorities. Do not assume every death is eligible or that you choose the most attractive corpse.

1. Check morning role feedback and the graveyard so you recognize a successful Remember promptly.
2. After Remembering, use the new role’s best currently available action; account for the current night rather than replaying its N1 instruction.
3. Preserve your earlier Amnesiac history and explain the transition truthfully when needed; do not erase missing-action nights to look stronger.

Your initial value is still your Town vote and ability to ask useful questions. A slow start is not an obligation to fabricate results. If the graveyard offers no eligible Town body, continue waiting and record that state. Once the role changes, the right action might be protecting, loading, building, or collecting information according to the new card; its earlier setup requirements still matter.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Amnesiac_(ToS2)). Target and priority choices above are editorial recommendations.

## Retributionist

**Actual alignment:** TS — Town Support.

**My default:** No corpse on N1: wait, then use the best legal Town body.

In a normal fresh match there is no eligible corpse to Raise on N1. Prepare a truthful “no usable body” opening.

**Why:** Your action depends on actual dead Town roles; a generic N1 raise would be impossible.

**Target rule:** No N1 target is required without a body. On later nights prefer a corpse whose ability solves a current need, then choose its legal living target; without a useful body, hold.

**Change the plan when:** Never invent access to an evil, stoned, unavailable, or otherwise ineligible corpse. A powerful corpse is still a poor choice if its current target is speculative or dangerous.

1. Raise a protective Town corpse when it can preserve a credible threatened asset, or a useful investigator when it can test a decisive unresolved case.
2. Use a killing corpse only for a supported evil and with its attack, friendly-fire, and visiting risks understood.
3. Track used bodies, corpse-specific feedback, and actual destinations so later choices follow remaining eligibility rather than a copied will template.

Rank the current job before ranking the corpse by reputation. A modest information ability with a decisive target can be more valuable than an unsupported lethal action. The corpse performs the borrowed action under its restrictions, and traffic effects can still interfere. Write the corpse role, corpse identity, intended target, and real feedback separately; do not claim a direct personal visit that your role did not make.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Retributionist_(ToS2)). Target and priority choices above are editorial recommendations.

## Socialite

**Actual alignment:** TS — Town Support.

**My default:** Protect a credible useful house without locking Town out.

If Party is enabled, Party at a credible vulnerable Town target whose expected friendly visitors are absent or safely covered by your guest list.

**Why:** Blocking an enemy visit can preserve a key player, but an uncoordinated Party can also block Town protection and information.

**Target rule:** Prefer a useful supported claim with low friendly traffic. With no trustworthy target or visitor plan, hold rather than blindly obstruct a mass TP/LO destination.

**Change the plan when:** Choose another house when friendly visitors need access and are not guests. Never Party at the same player on consecutive nights; a rejected-visitor message does not identify an evil.

1. Invite a justified trusted useful Town visitor when a permanent guest slot gives them valuable access; do not spend slots on persuasive strangers.
2. Party at the credible threatened house where blocking uninvited visits helps more than it disrupts Town; rotate to a different target each night.
3. Use actual obstruction feedback and destination claims to investigate conflicts, without naming unseen rejected players or calling every blocked visit evil.

The host target and the invited visitors are different choices. A guest can pass your future parties, so an incorrect invitation can permanently admit an enemy. No-information holding is a deliberate exception to the usual instinct to click something every night. Party is an obstacle rather than a roleblock, has bypasses, and does not provide a complete visitor list; use its actual feedback instead of a fabricated save.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Socialite_(ToS2)). Target and priority choices above are editorial recommendations.

## Tavern Keeper

**Actual alignment:** TS — Town Support.

**My default:** Drink with an unresolved suspect, not a valuable Town actor.

Drink with a credible unresolved suspect on N1; avoid blocking an openly useful Town night role just to test the claim.

**Why:** An effective roleblock may disrupt an evil action, while blocking a real investigator or protector costs Town useful work.

**Target rule:** Prefer a specific behavioral or claim concern. With no information, choose an eligible unknown away from obvious Veteran bait, while acknowledging that the random block may hit Town.

**Change the plan when:** If the only plausible target is a likely Serial Killer or a dangerous full-moon Werewolf, reassess visiting risk or hold. Do not repeat a successfully blocked Hungover target immediately.

1. Disrupt the supported enemy night actor whose next action most threatens Town, unless immunity or visiting danger makes the attempt ineffective.
2. After a successful Drink, rotate to another eligible target while Hungover prevents an immediate repeat block.
3. Compare roleblock feedback with claims and deaths, then ask targeted questions; a night without a kill is a lead, not proof you found the killer.

Drink affects night actions, not day abilities, so blocking a claimed day killer does not suppress tomorrow’s shot. Some roles ignore it and some retaliate. Record the exact interruption or success feedback and the target’s reported experience without upgrading missing feedback into confirmation. When Town has a supported evil with a functioning harmful action, useful disruption is more valuable than cycling through random claim checks.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Tavern_Keeper_(ToS2)). Target and priority choices above are editorial recommendations.

## Catalyst

**Actual alignment:** Town Outlier — Town Outlier.

**My default:** Do not double an unknown killer: wait for a credible Town actor.

Overcharge a well-supported useful Town night actor if one exists; with no trustworthy target on N1, hold.

**Why:** Overcharge can also double an enemy’s ability, including book attacks. Randomly maximizing activity is not the same as helping Town.

**Target rule:** Prefer a credible investigator or protector with a useful following-night plan. With no information, preserve Town safety by holding rather than upgrading a random claim.

**Change the plan when:** Act promptly once a trusted useful candidate appears; do not wait forever for absolute certainty. Avoid upgrading a role whose doubled action is unknown or whose extra lethal action is unsupported.

1. Overcharge the best-supported Town actor whose additional next-night action can answer an important question or preserve a key ally.
2. Confirm the actual timing and role-specific effect with the recipient’s feedback before planning another charge around it.
3. Reassess trust and the next night’s job every day; move the boost when a different Town action has higher value rather than permanently feeding one friendly claim.

Catalyst is an Outlier, so first check that the setup supports the role and its relevant interactions. The boost normally concerns the subsequent night, not a retroactive duplicate of the action already happening. Some roles have special effects and the detailed interaction table is incomplete. The beginner rule is to choose a trusted beneficiary and a concrete extra action, not to promise the same doubling behavior for every role.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Catalyst_(ToS2)). Target and priority choices above are editorial recommendations.

## Pilgrim

**Actual alignment:** Town Outlier — Town Outlier.

**My default:** Use your Town vote and evidence; invent no night result.

No N1 ability. Record claims and prepare one precise D2 question. In an explicitly constrained Pilgrim setup, track the available Pilgrim slots.

**Why:** Your contribution is social deduction and voting; claiming fake investigative results gives Town a false evidence base.

**Target rule:** No night target exists. With no information, ask for consistent action histories and compare claims to known role slots; do not equate being uncounterclaimed with universal confirmation.

**Change the plan when:** If slot counts are fixed, a competing excess Pilgrim claim can be valuable evidence; in open lists, the absence of a counterclaim says much less.

1. Keep a claim ledger and ask the strongest unresolved contradiction question each day.
2. Vote with supported cases and compare the claim space with the actual known setup; preserve Town’s vote control.
3. Update your reads when genuine results, deaths, and actions arrive, and leave useful concise reasoning in your will rather than fabricated visits.

Pilgrim is an Outlier with no active ability, and its existence depends on setup. You can still make other roles more effective by gathering claims, checking timelines, and stopping unsupported executions. A fake Psychic or Seer result may force discussion but also makes honest Town players reason from invented evidence; it is not the beginner default. Truthful uncertainty is preferable to a confident false mechanic.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Pilgrim_(ToS2)). Target and priority choices above are editorial recommendations.

## Archmage

**Actual alignment:** CPow — Coven Power.

**My default:** Make the team kill; do not Retrain just because you can.

With the book, coordinate one useful enemy kill. Without it, preserve the current team roles unless Retrain solves a specific problem.

**Why:** A kill usually advances Coven more directly than replacing a useful ally with an unfamiliar role.

**Target rule:** Choose a nonally with useful enemy value and no obvious visitor trap. With no information, coordinate an eligible unknown; never attack a teammate by accident.

**Change the plan when:** Retrain instead when the team has a concrete need for the replacement and accepts losing the ordinary attack that night. If Grace Period disables the attack, plan rather than invent a kill.

1. Remove an exposed high-value enemy when the team can realistically reach them.
2. Use Retrain to repair a weak team composition or solve a named obstacle, not as a nightly routine.
3. Reassess the book holder, protection, and vote count before each later attack.

The beginner rule is kill value before novelty. Ask what tonight’s action actually changes: does it remove a useful opponent, or does a role change create a stronger plan tomorrow? A known protected leader may be a worse kill than an exposed investigator. Agree on Retrain before disrupting an ally’s existing cover or utility.

**Claim comparison:** While making direct book attacks, Cleric is the simpler visiting story; Oracle only fits genuinely nonvisiting periods. Neither supplies real protection. Do not choose a public-reveal role merely for an empty N1.

- **Cleric (TP) — Low upkeep · weak independent proof.** A direct book attack can share the one-target visiting footprint. Exposure: You do not provide Barrier, and the victim or observers may contradict the protective story.
- **Oracle (TP) — Low upkeep · weak independent proof.** A genuine nonvisit period can fit Oracle’s astral action. Exposure: Oracle selects roles and supplies protection; an ordinary book attack changes your movement and supplies no Aegis.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Archmage_(ToS2)). Target and priority choices above are editorial recommendations.

## Hex Master

**Actual alignment:** CPow — Coven Power.

**My default:** Hex a likely survivor the team is not killing.

Without the book, Hex a useful unmarked nonally expected to remain alive. Avoid duplicating the agreed Coven kill if another eligible target exists.

**Why:** Your final threat needs living opponents Hexed; a mark on someone who immediately dies usually buys less progress.

**Target rule:** Use an unpressured eligible nonally when there is no D1 evidence. Prefer a player likely to live over someone already headed for execution.

**Change the plan when:** With the book, the Hex also attacks and is astral: choose kill value and reconsider any cover that claimed an ordinary visit.

1. Hex useful living unmarked opponents rather than revisiting completed progress.
2. Coordinate kills so they do not unnecessarily erase the mark you needed to retain.
3. Near completion, identify the remaining unhexed opponents and preserve your survival through the vote.

Count living marked and unmarked opponents after every death. Do not confuse attempts with applied marks. The correct target can change when the book arrives because survival-based progress and a lethal action now compete. A quiet visiting cover works differently once your real action becomes astral.

**Claim comparison:** Cleric is the low-upkeep pre-book default; Psychic trades daily vision work for more discussion influence. With the astral book action, Oracle may fit movement better, but an earlier visiting history still needs explaining.

- **Cleric (TP) — Low upkeep · weak independent proof.** One direct pre-book Hex can share a claimed Barrier destination. Exposure: You supply no Barrier, and later astral book movement can contradict a visiting history.
- **Psychic (TI) — More influence · more upkeep.** An ordinary direct Hex can match one chosen visited player. Exposure: You have no genuine vision; the night parity and full group constraint still need a plausible story.
- **Oracle (TP) — Low upkeep · weak independent proof.** The astral book Hex/attack avoids a normal direct visit. Exposure: There is no real Aegis, and pre-book direct visits may conflict with an all-Oracle history.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Hex_Master_(ToS2)). Target and priority choices above are editorial recommendations.

## Witch

**Actual alignment:** CPow — Coven Power.

**My default:** Control a useful enemy action; keep it away from Coven.

Control a suspected useful nonally and send their action to another nonally after checking the team plan.

**Why:** You can redirect value and learn useful role information, but an uncontrolled destination can sabotage your own faction.

**Target rule:** With no role evidence, use eligible unknown nonallies for both selections and avoid likely Veteran houses or an allied kill plan. Only the first selected player is your personal visit.

**Change the plan when:** If you know an enemy killing or protective role, use that specific information to create a better destination. Respect consecutive-target restrictions and actual immunity feedback.

1. Exploit the role learned from Control to redirect the highest-impact legal enemy action.
2. Keep dangerous controlled actions away from allies and useful team targets.
3. Recheck target legality, book effects, and the personal-visit story your cover must support.

Two selected numbers do not create a Seer-like two-visit action. Choose the controlled person first for the ability you can exploit, then the destination for what that ability will do. A failed or immune Control is information for the next plan, not a successful redirection to put in a cover will.

**Claim comparison:** Cleric is simpler to maintain, but Control is a distinctive effect. Sheriff can use learned role knowledge for a more informed invented story; Psychic creates more daily obligations. You personally visit only the controlled player, not both selected numbers.

- **Cleric (TP) — Low upkeep · weak independent proof.** The controlled player is your one personal direct visit. Exposure: Control is a distinctive reported effect and no Barrier is granted; the directed destination is not another personal protection.
- **Sheriff (TI) — More influence · more upkeep.** Learned role information can guide a limited check story about the controlled player. Exposure: It is not real Sheriff feedback; the victim’s Control report and framing context can break the story.
- **Psychic (TI) — More influence · more upkeep.** Your personal visit is to the controlled player, which can fit a single chosen Psychic target. Exposure: The second directed destination is not a second personal visit, and you must maintain valid vision counts/parity.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Witch_(ToS2)). Target and priority choices above are editorial recommendations.

## Conjurer

**Actual alignment:** CK — Coven Killing.

**My default:** Save Meteor for a valuable exposed opponent.

Without the book you have no ordinary N1 attack; prepare a cover and save the later day Meteor. With the book, coordinate the enabled team kill.

**Why:** The day kill is most valuable when it removes a real threat or changes voting control, not when spent to look active.

**Target rule:** No N1 target is required without the book. Watch for a supported leader or dangerous investigator; do not choose a future Meteor target from player number alone.

**Change the plan when:** If the day vote is about to remove a teammate or enemy voting power is decisive, Meteor timing can become urgent. It is unavailable on D1.

1. Meteor an exposed high-value enemy when removing them changes the day outcome.
2. Coordinate the day kill with the team’s vote and night plan rather than duplicating an inevitable execution.
3. After the one charge is spent, maintain the cover and use any actual book action.

A beginner can hold the charge without being passive: track who organizes votes, who supplies actionable results, and whether the team can win the day after one removal. Meteor is not a Deputy shot and cannot demonstrate a fake Deputy claim. Keep your public story separate from your real day ability.

**Claim comparison:** Oracle fits a genuinely inactive nonbook night with fewer daily result obligations. Cleric becomes a visiting fallback with the book. Deputy looks simple on paper but creates a day-shot demand Meteor cannot satisfy.

- **Oracle (TP) — Low upkeep · weak independent proof.** Before holding the book, no ordinary night action can fit astral movement. Exposure: You cannot provide Aegis; later direct book attacks alter the footprint.
- **Cleric (TP) — Low upkeep · weak independent proof.** An ordinary book attack can share one claimed Barrier destination. Exposure: There is no real protection; without book, you may not have made the ordinary visit the cover promises.
- **Deputy (TK) — Little writing · high demonstration risk.** An inactive night is compatible with a real Deputy’s lack of night action. Exposure: You cannot reproduce the Deputy shot. A Meteor is a different ability, not a successful Deputy demonstration.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Conjurer_(ToS2)). Target and priority choices above are editorial recommendations.

## Ritualist

**Actual alignment:** CK — Coven Killing.

**My default:** Hold guesses until you have a supported exact role.

On a low-information N1, preserve your two Ritual attempts. Use a legal exact-role guess only when the evidence is unusually strong.

**Why:** A random guess wastes a scarce chance; role knowledge is more valuable than merely having an available button.

**Target rule:** Look for a supported exact non-TI claim. With no reliable role evidence, hold. TI and Illuminated targets are not legal Ritual targets.

**Change the plan when:** Team role information may make a guess worthwhile, but check Illumination first. If you hold the book, weigh its alternative attack rather than assuming both actions happen.

1. Use a well-supported legal exact role guess against a valuable enemy.
2. Preserve remaining attempts when the role or eligibility is uncertain.
3. Coordinate around Illumination and book ownership; do not guess from a role-family claim alone.

An alignment such as TP does not identify whether the target is Cleric, Oracle, or another TP. Do not upgrade that partial information to certainty. Current wrong guesses do not create the old public exposure event, but spending an attempt is still a cost. Your cover must not leak exact-role knowledge its claimed ability could not supply.

**Claim comparison:** Oracle is my lower-drama astral fallback. Deputy has little writing but severe demonstration pressure. A direct book attack can break a no-visible-visit history, so reassess rather than calling either permanent cover.

- **Oracle (TP) — Low upkeep · weak independent proof.** A ritual or inactive night can fit a no-visible-visit cover. Exposure: No actual Aegis is supplied; direct book attacks can conflict.
- **Deputy (TK) — Little writing · high demonstration risk.** Neither role requires an ordinary N1 visit. Exposure: Town may reasonably ask for the one day shot, which you cannot perform.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Ritualist_(ToS2)). Target and priority choices above are editorial recommendations.

## Jinx

**Actual alignment:** CK — Coven Killing.

**My default:** Ambush planned enemy traffic; otherwise a hold can beat a random trap.

Jinx a house likely to draw useful non-Coven visitors after coordinating the team’s traffic plan. Without a useful traffic read, hold rather than trap an arbitrary house.

**Why:** A visitor ambush can remove one non-Coven direct visitor, but other surviving direct visitors may learn your identity. Coven allies are normally excluded from the visitor attack.

**Target rule:** Prefer a nonally house with a concrete reason for enemy traffic. An unknown house is not automatically good; an obvious crowded call can also contain dangerous visitors.

**Change the plan when:** If the likely traffic gives no useful non-Coven victim or leaves witnesses who can expose you, choose another house or hold. Check Grace Period and the book before planning damage.

1. Choose houses whose expected visitors are valuable enemies, with team traffic kept clear.
2. After any survivor exposure, prioritize a realistic survival/kill plan rather than repeating a supposedly safe cover.
3. Weigh an enabled book attack against the visitor ambush as the remaining player count shrinks.

Crusader is an effect resemblance, not a complete disguise: Jinx does not grant the resident Crusader defense, and surviving witnesses can identify the attacker. A simple Cleric story has lower paperwork but even less ability overlap. Do not spend the night hoping a random trap will make either cover trustworthy.

**Claim comparison:** Cleric is simplest to write, with weak ability support. Crusader can explain visitor danger better but promises defense Jinx does not grant. Surviving witnesses or distinctive death information can defeat either story; Psychic adds daily invented visions on top.

- **Cleric (TP) — Low upkeep · weak independent proof.** A Jinx house can share a simple single-player destination. Exposure: There is no real protection, and visitor deaths or surviving witnesses can directly expose the Jinx action.
- **Crusader (TP) — Conditional fit · extra rules.** Both can create danger for visitors at a chosen house. Exposure: Jinx supplies no Crusader defense; death details and surviving witnesses can identify you.
- **Psychic (TI) — More influence · more upkeep.** The selected house can fit a normal one-target visit. Exposure: You have no genuine vision and a survivor may directly expose the Jinx action.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Jinx_(ToS2)). Target and priority choices above are editorial recommendations.

## Dreamweaver

**Actual alignment:** CD — Coven Deception.

**My default:** Dreamweave an isolated useful Town target.

Without the book, Dreamweave a likely useful Town opponent who is less likely to receive a Town visit next night.

**Why:** Your effect needs time to develop; a target routinely visited by Town is more likely to be cured before the payoff.

**Target rule:** Prefer an isolated claim with real night value. With no evidence, choose an eligible nonally and accept that faction eligibility or a later cure can stop progress.

**Change the plan when:** If the target is a crowded protection hub, choose a less visited opponent. With the book, prioritize the actual attack plan and retain the earlier pending-state record.

1. Apply the effect where the next-night Town cure is less likely.
2. Track cured versus progressed targets rather than assuming every weave became Insomnia.
3. Use the book or a new weave according to the current team need and live state.

The plan is delayed disruption, not an immediate roleblock or old random-movement insanity. Choose a target partly for tomorrow’s traffic. A quiet protection cover is easy to write but supplies no actual defense, and the distinctive dream effect can still connect to the house you visited.

**Claim comparison:** Cleric is the simpler visiting cover when you want less daily paperwork. Psychic offers more case-making influence but needs early valid visions. Neither hides the correlation between your visit and a distinctive dream effect.

- **Cleric (TP) — Low upkeep · weak independent proof.** A single ordinary visit can match the Barrier target on paper. Exposure: You supply no protection, and dream effects contradict a claim that your only effect was Barrier.
- **Psychic (TI) — More influence · more upkeep.** A one-player visit can fit the selected Psychic target. Exposure: No real vision exists; the victim’s dream state may correlate with your action.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Dreamweaver_(ToS2)). Target and priority choices above are editorial recommendations.

## Enchanter

**Actual alignment:** CD — Coven Deception.

**My default:** Frame the player most likely to be checked, not an arbitrary headline target.

Enchant a nonally likely to receive an investigation. Keep Alterate unless the team has a concrete death-forgery plan.

**Why:** A frame needs an evidence channel to notice it. Spending limited forgery charges without a likely death can accomplish little.

**Target rule:** Use a disputed claimant or an expected investigation target. With no D1 evidence, choose an eligible unknown nonally but do not claim the frame already produced a result.

**Change the plan when:** If no likely investigation exists, prioritize a later coordinated frame rather than building a loud unsupported push. Alterate can spend a charge even when the victim survives.

1. Place a frame before a relevant detection check to create a case the team can actually use.
2. Use Alterate with a planned death and a coherent role/faction/will story.
3. Reassess unaffected observers and the book; do not double down on a frame contradicted by independent evidence.

The strongest frame is connected to a real accusation route. A Sheriff cover can help tell that story, but you are still inventing your own result and movement must fit. Enchant does not rewrite every information channel; Tracker, Lookout, Coroner, and Spy observations cannot simply be dismissed as your frame.

**Claim comparison:** Sheriff is my active-pressure choice because framing can support part of a suspicious-looking case. Cleric is lower upkeep if you want a quiet story. Investigator is more demanding because crimes and timing must remain coherent; framing is not a real personal investigation.

- **Sheriff (TI) — More pressure · invented check.** A frame can support a suspicious-looking case when another detection effect is involved. Exposure: Your frame is not your own Sheriff result; unaffected observations and timing can expose it.
- **Cleric (TP) — Low upkeep · weak independent proof.** A normal direct Enchant can share a claimed Barrier destination. Exposure: You supply no defense; framing may alter some checks but does not fabricate protective feedback or erase unaffected observations.
- **Investigator (TI) — More influence · more upkeep.** Framing can align with some crime evidence in a story. Exposure: You still need the current Murder/Trespassing model, and Enchant does not alter all observation channels.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Enchanter_(ToS2)). Target and priority choices above are editorial recommendations.

## Illusionist

**Actual alignment:** CD — Coven Deception.

**My default:** Conceal the acting Coven member; save the teamwide charge.

If not attacking with the book yourself, Illusion the ally whose action is most exposed to investigation, usually the agreed book holder.

**Why:** This protects a real team action from some detection instead of spending a broad limited ability without a reason.

**Target rule:** Coordinate which ally is acting and likely to be checked. With no specific read, the acting book holder is a sensible starting recipient rather than a random ally.

**Change the plan when:** Use Phantasm when several allies face meaningful detection pressure. Do not assume Illusion and a normal book attack are simultaneous alternatives you can take together.

1. Conceal the ally most likely to be checked while carrying out an important action.
2. Spend Phantasm for broad detection pressure, not simply because it is available early.
3. Update Disguise and the cover as book ownership or expected death information changes.

Illusion is astral, so Oracle can fit the movement better than a visiting protective story. It does not actually provide Aegis. Current official changes mean Illusion no longer hides from Bodyguard, Trapper, or Deputy; do not protect the killer by assuming those interactions disappear.

**Claim comparison:** Oracle is the sensible movement-oriented starting cover during astral Illusion. Deputy is low writing but difficult to demonstrate. Book attacks change the footprint; neither cover recreates a real protective effect or public shot.

- **Oracle (TP) — Low upkeep · weak independent proof.** Ordinary Illusion is astral, compatible with no visible visit. Exposure: Oracle’s role targeting and real protection are different; the book can introduce direct movement.
- **Deputy (TK) — Little writing · high demonstration risk.** An ordinary inactive-looking night does not require a personal visit. Exposure: You cannot shoot as Deputy, and Illusion no longer bypasses the current Deputy/Bodyguard/Trapper interactions.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Illusionist_(ToS2)). Target and priority choices above are editorial recommendations.

## Medusa

**Actual alignment:** CD — Coven Deception.

**My default:** TP cover on N1: hold if Grace Period is active or unchecked.

Keeping a TP cover? If Grace Period is active or you have not checked the N1 notice, stay home and do not Stone a player. Only visit after confirming your exact claimed role could legally explain that N1 movement, or deliberately choosing a compatible cover before acting.

**Why:** Stone is a direct, non-harmful visit and can still be available while Town protection is disabled. Being allowed to Stone does not make that visit compatible with a TP cover.

**Target rule:** With a TP cover during Grace Period, select no Stone target on N1. Otherwise, mark a fresh useful information holder only when your cover can explain the visit and hiding their eventual death information helps Coven.

**Change the plan when:** If Grace Period is confirmed off and your exact cover can visit, consider a coordinated mark. A Trapper still needs to build before placing and Oracle is astral; switching to another TP name does not automatically fix movement.

1. Hide an informative enemy death when the team can make the kill happen.
2. Track persistent marks and remaining charges so you do not duplicate work.
3. After the book arrives, plan the attack and concealment together while checking observer exposure.

Example: you are Medusa, claim Cleric/TP, and see the Grace Period notice. Hold Stone on N1. A Tracker or Lookout can observe a Stone visit, but a Cleric could not have made a Barrier visit that night. This is a cover-consistency recommendation, not a rule that Stone itself is disabled or every role must skip N1. A legal nonvisiting action is separate. With Grace Period off and a cover that can legally visit, a useful Stone mark may be reasonable. Stone neither kills by itself nor grants protection; track all three charges and permanent marks.

**Claim comparison:** Cleric is a low-upkeep cover only when the action and setup fit. During Grace Period, hold N1 rather than Stone while claiming TP. Psychic can fit a legal direct visit but requires an invented vision and early daily upkeep. Neither cover supplies the ability it claims.

- **Cleric (TP) — Low upkeep · weak independent proof.** A direct Stone destination can match a Barrier destination only on a night when Cleric could actually make that visit. Exposure: During Grace Period, an observed N1 Stone visit contradicts the usual Cleric protective-visit story. Stone also grants no defense, and later Stoned deaths can expose the mismatch.

- **Psychic (TI) — More influence · more upkeep.** A direct Stonemark can fit a one-player visit. Exposure: There is no genuine vision; persistent marks and hidden-death information can expose the plan.

Mechanics: [Medusa](https://townofsalem.wiki.gg/wiki/Medusa_(ToS2)), [official Grace Period changes](https://www.townofsalem.io/town-of-salem-2-bug-fixes-patch-notes-r1-5-01/). Holding to keep a cover compatible is an editorial recommendation, not a ban on all N1 actions.

## Necromancer

**Actual alignment:** CU — Coven Utility.

**My default:** Wait for a real corpse, then borrow the most useful legal ability.

In a normal fresh game there is no corpse to raise. Without the book, hold and prepare a Retributionist cover; with the book, coordinate its alternative attack.

**Why:** An honest empty N1 fits the real corpse prerequisite and the cover; inventing a corpse creates an avoidable contradiction.

**Target rule:** At D2, inspect actual bodies. Prefer a usable Town corpse whose ability answers the team’s current need if sustaining a Ret cover.

**Change the plan when:** An evil or Stoned corpse, restricted target, exhausted use, or a book attack can break the Ret overlap. Choose the actual useful action before deciding what the cover can explain.

1. Use an eligible useful corpse for real information, disruption, protection, or a kill the team needs.
2. Keep corpse role, availability, destination, and usage consistent across nights.
3. Reassess the Ret cover when the best real action requires an incompatible corpse or the book.

Retributionist has more state tracking than a generic Cleric claim, but can be more convincing because a legal borrowed Town ability creates a real compatible effect. That is worth the extra record keeping. Do not label a dead evil as an eligible Town corpse just to make the will look neat.

**Claim comparison:** Retributionist takes more corpse bookkeeping but offers much stronger support when you actually use an eligible Town corpse. Oracle only explains a truly nonvisiting period; it is not a way to hide later corpse visits or book attacks.

- **Retributionist (TS) — Real overlap · more bookkeeping.** Using a legal Town corpse can create an effect a real Retributionist could create. Exposure: Evil/Stoned corpses, exhausted uses, forbidden self-protection, and book attack replacement break the overlap.
- **Oracle (TP) — Low upkeep · weak independent proof.** A genuinely inactive opening has no ordinary direct visit. Exposure: Later corpse visits or direct book attacks conflict, and you do not actually supply Aegis.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Necromancer_(ToS2)). Target and priority choices above are editorial recommendations.

## Poisoner

**Actual alignment:** CU — Coven Utility.

**My default:** Drink first; reserve Smog for a specific access-control plan.

Without the book, Drink with an eligible useful enemy night actor; with no role evidence, coordinate an unknown nonally and avoid dangerous visitor bait.

**Why:** An ordinary roleblock immediately disrupts an action and supports a Tavern Keeper cover without inventing investigative information.

**Target rule:** Prefer an enemy whose action matters. Keep allies clear and remember that an uncautious Serial Killer can retaliate against your Drink.

**Change the plan when:** Use Smog when denying access to a house is more valuable than blocking its owner, and ensure it will not obstruct allied visits. With the book, its direct attack also roleblocks.

1. Drink a useful new enemy after a successful block; Hungover prevents a consecutive lock.
2. Use Smog to deny a specific enemy visit or protection route with team coordination.
3. When holding the book, prioritize the kill and compatible block; do not plan ordinary Smog plus book attack.

Tavern Keeper is my beginner cover here because the real action produces its expected feedback. That is stronger than merely choosing the lowest-writing role. Smog resembles only part of Socialite and introduces guest-list/immunity differences; use that cover only when you can maintain the extra rules.

**Claim comparison:** Tavern Keeper is my beginner default because Drink can reproduce the expected roleblock. Socialite is a higher-rule-load Smog story. Cleric has easier paperwork but worse effect fit; do not discard genuine roleblock support just to type fewer lines.

- **Tavern Keeper (TS) — Genuine block · keep the target history.** Drink can create the same roleblock effect the target expects from a Tavern Keeper. Exposure: Hungover prevents a repeat lock; Smog is an obstacle effect, and book attacks add lethal consequences.
- **Socialite (TS) — Conditional fit · extra rules.** Smog and a Party can both obstruct access to a house. Exposure: Socialite has invitations, different immunity rules, and a different legal house sequence; resemblance is incomplete.
- **Cleric (TP) — Low upkeep · weak independent proof.** An ordinary direct visit can be written as a claimed Barrier destination. Exposure: Drink or Smog feedback does not match pure protection, and you provide no genuine Barrier.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Poisoner_(ToS2)). Target and priority choices above are editorial recommendations.

## Potion Master

**Actual alignment:** CU — Coven Utility.

**My default:** Reveal an unresolved enemy unless an ally genuinely needs Barrier.

Without a concrete ally threat, Reveal a useful nonally to improve the team’s next kill and role information. Choose Barrier instead when keeping an important ally alive has immediate value.

**Why:** Reveal creates actionable knowledge; an unneeded Barrier gives less value simply because Cleric is an easy cover.

**Target rule:** With no D1 role information, Reveal an eligible nonally after coordinating with Coven. Avoid a target the team is already confidently eliminating if the information will be wasted.

**Change the plan when:** A threatened book holder or vital utility ally can make Barrier the highest-value mode. Recheck the book for the harmful alternative and Illumination before any Ritualist follow-up.

1. Use role knowledge to select a valuable reachable enemy or expose a dangerous ability.
2. Barrier a key ally when the expected survival gain beats another reveal.
3. Choose the one appropriate mode each night and keep its consequences compatible with the cover.

Cleric is the easiest upkeep and can have real support on a Barrier night. A Reveal night is not also a heal, even if the same one-player visit fits a written Barrier line. Sheriff/Investigator require invented result wording, while Seer also has a normal two-visit requirement that role knowledge alone does not reproduce.

**Claim comparison:** Cleric is simplest and has genuine support on Barrier nights. Sheriff can use role knowledge for a selective story but still invents the check result. Seer has high payoff pressure and a normal two-visit requirement your one-target potion does not reproduce.

- **Cleric (TP) — Simple upkeep · real fit on Barrier.** A real Barrier potion can support an actual protective story. Exposure: Changing to Reveal or the harmful mode does not also provide that Barrier.
- **Sheriff (TI) — More influence · more upkeep.** Real role knowledge can guide limited detection claims. Exposure: A role reveal is not an actual Sheriff check and cannot justify every guilt category.
- **Seer (TI) — More influence · more upkeep.** Knowing roles can let you construct a faction-comparison story. Exposure: A normal Seer visits two legal players; a one-target potion does not reproduce that movement or comparison.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Potion_Master_(ToS2)). Target and priority choices above are editorial recommendations.

## Voodoo Master

**Actual alignment:** CU — Coven Utility.

**My default:** My default N1: Silence; Blind a known investigator instead.

With little role information, Silence a nonally likely to contribute to D2 discussion. If you already have a credible investigative target, prefer Blind to deny that night’s results.

**Why:** Silence has broad value before you know roles: it removes a speaker’s next-day contribution and restricts vote changes. Blind has greater targeted information-denial value once you know who receives useful results.

**Target rule:** Pick a vocal organizer or likely reporter the team is not already expecting to kill. With no D1 lead, use an eligible unknown nonally; do not pretend a random player must be a TI.

**Change the plan when:** Deafen is my situational third choice: use it when isolating someone from other players’ information matters more than suppressing their speech or results. They can still post their own results. With the book, choose the kill for team value first.

1. Blind a fresh credible TI when denying new results matters most; the ability still executes, so this is not a roleblock.
2. Silence a vote organizer or valuable speaker when suppressing tomorrow’s discussion is the bigger threat.
3. Deafen to isolate a player from chat/whispers in a specific coordination plan; rotate targets every night even if changing dolls.

This is an opinionated starting policy, not a measured win-rate ranking. Blind prevents seeing night feedback, Silence prevents speaking the following day, and Deafen prevents receiving others’ messages while leaving the target able to talk. Do not waste disruption on a player your team expects to kill unless it is a fallback against a failed kill. For the simplest cover I prefer Cleric (TP) over Psychic (TI): it requires fewer invented results and less daily posting. Neither reproduces your distinctive disruption or supplies genuine protection.

**Claim comparison:** Cleric is my simpler beginner cover: one plausible target line, TP under VFA, and no invented vision each morning. Psychic can contribute more to discussion but is higher upkeep and contradiction risk. Both remain weak on actual ability support: your doll effect is not protection or a vision.

- **Cleric (TP) — Low upkeep · weak independent proof.** A single destination can fit a claimed Barrier visit. Exposure: You supply no Barrier; the actual disruption effect may conflict with the story.
- **Psychic (TI) — More influence · more upkeep.** A direct visit can fit one chosen vision target. Exposure: The target may identify silence/deafness/blindness, and you have no real vision.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Voodoo_Master_(ToS2)). Target and priority choices above are editorial recommendations.

## Wildling

**Actual alignment:** CU — Coven Utility.

**My default:** Use Sense to build a real Tracker story.

Sense a useful eligible nonally and keep the destination channel separate. Prefer a player whose action claim you can check tomorrow.

**Why:** Real movement information is more useful for a believable cover than inventing a quiet protective history without any actual protection.

**Target rule:** With no opening lead, choose an eligible unknown nonally outside obvious visitor traps. Do not assume your visitor list, destination list, and whispers are interchangeable.

**Change the plan when:** Use Lookout instead when visitor information genuinely supports a better story and the watched-house footprint fits. The book also attacks the selected target and can change the account.

1. Sense players whose movement can answer a relevant claim or identify a useful enemy action.
2. Publish only the chosen cover’s legitimate information subset, with normal TI timing.
3. Reassess the target and cover after book acquisition; never leak private whispers into an ordinary Tracker report.

Tracker has more posting than Cleric, but usually less invention for Wildling because you can obtain its information directly. Lookout can also work from the other channel. Choose based on which facts you can actually sustain, not on a claim label being commonly used by evils.

**Claim comparison:** Prefer Tracker or Lookout over a generic quiet TP because you can obtain the relevant information for real. Tracker is the usual starting point; choose Lookout if the visitor channel supports a better account. Each requires normal TI posting, and only its own information subset belongs in the will.

- **Tracker (TI) — Real information · regular posting.** Report the sensed player’s visible destinations, which are the channel a Tracker uses. Exposure: Do not include visitors or whispers; the book also attacks your selected player.
- **Lookout (TI) — Real information · regular posting.** Report the visible visitors to the selected house. Exposure: Do not include destinations or whispers, invent missing visitors, or normally claim to watch yourself.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Wildling_(ToS2)). Target and priority choices above are editorial recommendations.

## Covenite

**Actual alignment:** Coven Outlier — Coven Outlier.

**My default:** Prepare a sustainable cover; attack only with the actual book.

Without the book, there is no special N1 action. Agree on the team plan and use a cover that does not invent an unavailable ability.

**Why:** Your value is team coordination and later book use; fake utility records do not create real disruption.

**Target rule:** No target is needed without the book. With it, choose a coordinated eligible nonally and account for direct movement.

**Change the plan when:** Oracle can fit a genuinely nonvisiting opening, but no Aegis is supplied. A direct book visit can make a simple visiting cover easier to explain; do not keep an impossible no-visit story by habit.

1. Help the team use private information and day votes without exposing its roster.
2. When holding the book, remove a useful reachable enemy with the agreed attack.
3. Update the cover when movement or demonstration demands outgrow the inactive opening.

A role with no utility is still useful if it preserves the team’s vote and does not contradict its own cover. Avoid Deputy or Mayor merely because their N1 is empty: their public demonstration is much harder to reproduce later. A low-upkeep cover is a convenience, not confirmation.

**Claim comparison:** Oracle fits a genuinely inactive nonbook start; Cleric fits an ordinary direct book visit more naturally. Both are invented-protection stories. Simple empty-night roles with public buttons create much larger demonstration demands later.

- **Oracle (TP) — Low upkeep · weak independent proof.** No ordinary role action can fit a nonvisible-visit story. Exposure: You do not protect a role, and holding the book changes the movement.
- **Cleric (TP) — Low upkeep · weak independent proof.** A direct book visit can fit a single reported Barrier destination. Exposure: The attack is not protection; feedback and deaths can expose the story.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Covenite_(ToS2)). Target and priority choices above are editorial recommendations.

## Cultist

**Actual alignment:** Coven Outlier — Coven Outlier.

**My default:** Save the conversion for a useful supported recruit.

Your special ability is daytime Indoctrinate, not another night action. Without the book, use N1 to prepare a cover and identify a worthwhile Town recruit.

**Why:** One conversion is most valuable when it adds a useful surviving role to the team, not when spent on an arbitrary opening name.

**Target rule:** Use real role claims and expected survival to choose a recruit once the daytime control is enabled. With no evidence, wait; do not invent a guaranteed D1 conversion opportunity.

**Change the plan when:** If waiting risks losing a uniquely valuable reachable recruit, act sooner. At night the book can provide an alternative attack; the new recruit retains their role and changes faction.

1. Convert a useful legal Town target with a credible survival/ability payoff.
2. Coordinate the recruited role under its new faction instead of assuming a Town-looking role stays Town.
3. Reassess your defense and book action from actual conversion feedback.

Role and faction are separate: the recruited Sheriff can still perform Sheriff actions while helping Coven. Build the plan around what that retained ability contributes. Do not spend the one conversion solely to create a teammate who cannot help before dying, and do not expose the recruit in an ordinary public will.

**Claim comparison:** Oracle fits the nonbook night footprint; Cleric is a visiting fallback with the book. The daytime conversion is not a protective night action. Recruits keep their role while changing faction, so do not leak that private transition in a public will.

- **Oracle (TP) — Low upkeep · weak independent proof.** The special conversion is a day action, leaving no ordinary night visit without book. Exposure: No Aegis is supplied; direct book attacks and conversion consequences create later conflicts.
- **Cleric (TP) — Low upkeep · weak independent proof.** A direct book target can share a claimed Barrier destination. Exposure: No real Barrier exists, and recruited role/faction changes can complicate public evidence.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Cultist_(ToS2)). Target and priority choices above are editorial recommendations.

## Baker

**Actual alignment:** NA — Neutral Apocalypse.

**My default:** Default: Feed a likely survivor; build three living recipients.

Feed one eligible other player. Your first checkpoint is one living Bread recipient, not a kill or a save.

**Why:** Bread has no protective effect. Feeding a player who immediately dies loses useful transformation progress; your own starting Bread does not count as one of the ordinary three other recipients.

**Target rule:** Prefer an unpressured player likely to stay alive. With no evidence, pick an eligible unknown outside obvious visiting danger; avoid a player already facing a strong execution case.

**Change the plan when:** Replace a dead recipient with a fresh living target. Once transformed, stop planning Feed actions and use the Famine guide.

1. Feed a new surviving nonrecipient rather than wasting a visit on existing Bread.
2. Preserve enough living recipients to reach three others at dawn; check the reduced-population exception in your card.
3. After transformation, survive the vote and accelerate a Bread-holder’s starvation.

Usually you are the sole Apocalypse role in normal factions. Do not assume teammates or tell Town you supplied a Barrier: you supplied Bread. Keep actual recipients privately, separate from your chosen public cover. Neither a confident Town claim nor Basic Defense guarantees survival.

**Claim comparison:** Cleric is the easier Feed-period cover because it needs one target line and no daily investigative group. It supplies no real save. Psychic gives more influence at the cost of invented visions, target-history work, and early posting; transformation changes both stories.

- **Cleric (TP) — Low upkeep · weak independent proof.** Feed can share the ordinary one-player destination of a Barrier claim. Exposure: Bread is not protection: attack feedback, inability to save, and a later Famine state can expose the story.
- **Psychic (TI) — More influence · more upkeep.** One Feed destination can fit the chosen player in a vision. Exposure: You receive no vision; N1 Good/two and N2 Evil/three constraints and independent claims must remain consistent.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Baker_(ToS2)). Target and priority choices above are editorial recommendations.

## Berserker

**Actual alignment:** NA — Neutral Apocalypse.

**My default:** Default: Prepare on N1; make your first permitted attack count.

You cannot make the normal Apocalypse attack on N1. Prepare a consistent cover and mark a likely killable target for N2 instead of inventing a night visit.

**Why:** Your power grows from actual kills. An early attack into likely defense or heavy protection delays the first upgrade and leaves you exposed before transformation.

**Target rule:** For N2, prefer an unprotected, unresolved opponent over a public protection magnet or a player who already survived a Basic attack. With no reliable leads, choose an eligible unknown outside obvious Veteran danger.

**Change the plan when:** After a failed attack, reconsider defense and protection; do not repeat blindly. At three kills, switch to War’s two-target plan.

1. Secure the first actual kill to gain Powerful Attack.
2. After the second kill unlocks Rampage, favor a useful opponent likely to attract visitors.
3. Reach the third kill, then protect your daytime survival while War removes opposing votes.

Normal factions generally make you solo Apocalypse. Count kills, not selections, and keep the current attack tier beside your private target plan. A nonvisiting opening cover avoids fabricated tracking evidence. Grace Period or faction changes can alter enabled controls.

**Claim comparison:** Vigilante explains an inactive loading N1 better, but later kills still need the real load/ammo/death-label story. Cleric is low upkeep on direct attack nights but provides no protection and does not reproduce your nonvisiting N1. Neither makes rampage a normal Town shot.

- **Vigilante (TK) — Little writing · high demonstration risk.** Both can have a quiet N1 before later attacks. Exposure: A real Vigilante must Load and track ammo; kill labels, rampage, and upgrades do not match indefinitely.
- **Cleric (TP) — Low upkeep · weak independent proof.** A direct attack can share a claimed Barrier destination. Exposure: Ordinary N1 inactivity, real deaths, and no protection undermine the story.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Berserker_(ToS2)). Target and priority choices above are editorial recommendations.

## Plaguebearer

**Actual alignment:** NA — Neutral Apocalypse.

**My default:** Default: Infect an uninfected likely visitor.

Check the existing infection markers, then Infect an eligible uninfected player likely to make a direct visit.

**Why:** A visiting infected player can spread Plague beyond your one direct target. Reinfecting an existing carrier usually gives less new progress than adding a fresh branch.

**Target rule:** Prefer an uninfected active visiting claim. Without claims, choose an uninfected unknown; avoid your already infected adjacent neighbors. Their starting infection is not evidence of a visit.

**Change the plan when:** When only a few uninfected survivors remain, target the missing players directly instead of chasing speculative spread. On transformation, switch to Spread Pestilence.

1. Create new infection branches through uninfected direct visitors.
2. Use the actual infection map to finish isolated survivors who are not spreading naturally.
3. After transformation, remove the most threatening opponent while surviving the day vote.

Treat infection feedback as partial movement evidence, not a complete Lookout or Tracker result. Astral visits do not spread Plague. Normal Apocalypse is usually solo; do not plan around nonexistent teammates. As the living population shrinks, exact missing infections matter more than a theoretical busy target.

**Claim comparison:** Cleric is the low-upkeep one-visit fallback with no real healing. Lookout can exploit partial contact clues but is harder to sustain because infection is not a full visitor report. Psychic adds invented daily group results. Do not turn seeded infections into claimed visits.

- **Cleric (TP) — Low upkeep · weak independent proof.** A direct Infect can share a one-player destination without requiring invented visitor lists. Exposure: There is no Barrier, and infection/transformation progress can create a different public pattern.
- **Lookout (TI) — More influence · more upkeep.** Some spread can suggest visitor contact. Exposure: Initial neighbors and incomplete propagation are not a complete visitor list; your own destination must also fit.
- **Psychic (TI) — More influence · more upkeep.** A direct Infect can fit one selected player in a vision. Exposure: No real vision exists, and you must maintain group counts/parity without leaking infection knowledge.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Plaguebearer_(ToS2)). Target and priority choices above are editorial recommendations.

## Soul Collector

**Actual alignment:** NA — Neutral Apocalypse.

**My default:** Default: Reap the player most likely to die soon.

Reap a likely night victim or tomorrow’s likely execution target. With no reliable lead, mark an eligible unknown rather than spending the night predicting certainty.

**Why:** You receive one passive Soul each night, and a Reaped player’s later death adds another. Unlike Baker, you want your marked target to die; a durable protected survivor is often a slower choice.

**Target rule:** Prefer exposed leaders, credible killing threats, or a player facing a supported execution case. Avoid refreshing an existing permanent mark when a fresh candidate is available.

**Change the plan when:** If the likely victim changes, Reap the new candidate. At seven Souls, switch immediately to Death’s survive-today objective.

1. Spread permanent marks onto likely deaths, checking your existing Reaped list first.
2. Track the actual Soul count and preserve a coherent cover until the transformation.
3. As Death, survive the transformation day rather than planning another Reap.

Reap is astral and does not kill or protect. It also changes investigation appearances, which can create pressure but does not make you a genuine Sheriff. Avoid presenting every framed player as a discovered evil. Normally you are solo Apocalypse; do not assume an ally can supply kills on demand.

**Claim comparison:** Oracle is the simpler movement fit for astral Reap, with role-targeting rules and no real Aegis. Sheriff can support pressure around suspicious-looking evidence but normally makes a visible visit that Reap does not reproduce.

- **Oracle (TP) — Low upkeep · weak independent proof.** Reap and Aegis do not require an ordinary numbered visible visit. Exposure: You supply no protection and must claim role-based Aegis choices, not Reap targets.
- **Sheriff (TI) — More influence · more upkeep.** Reap’s framing effect can align with some suspicious-looking evidence. Exposure: A real Sheriff normally visits; your astral Reap does not reproduce that, and you receive no genuine check.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Soul_Collector_(ToS2)). Target and priority choices above are editorial recommendations.

## Doomsayer

**Actual alignment:** NE — Neutral Evil.

**My default:** Default: Build three reliable guesses; N1 is preparation.

Record player numbers and claims. You may prepare the interface, but cannot confirm Doom guesses on N1.

**Why:** The entire three-player set must be correct. One guessed identity based on a hunch can spoil two sound entries, so collecting precise eligible claims is your main early job.

**Target rule:** Prioritize publicly demonstrated non-TI Town roles and strongly supported Coven identities; Coven is guessed by faction. Do not spend a slot on a Town Investigative claim as though TI were guessable.

**Change the plan when:** From N2, submit and confirm three legal guesses once the set is defensible. Replace a dead target or invalid category before confirming; use the actual guess menu for disputed Outlier eligibility.

1. Collect three living eligible identities with evidence stronger than an unsupported claim.
2. Submit all three guesses and explicitly confirm from the first legal night.
3. Update survivors every day; do not wait until fewer than three other players remain.

Keep a confidence note beside each guess. Exact Town role, Coven faction, and Neutral alignment are different input requirements. Early defense expires at D3. A failed set does not identify which individual guess was wrong; reassess all three rather than clearing two automatically.

**Claim comparison:** Oracle is the less conspicuous no-visible-visit fallback. Deputy requires almost no writing but can face an immediate shot demand. Choose based on what the lobby will ask you to demonstrate, not only how short the will is.

- **Oracle (TP) — Low upkeep · weak independent proof.** A private guess attempt does not need an ordinary visible player visit. Exposure: You do not provide Aegis and may be asked to explain protection choices.
- **Deputy (TK) — Little writing · high demonstration risk.** No ordinary night action is required by the cover. Exposure: You cannot produce its real day shot; do not invent a successful demonstration.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Doomsayer_(ToS2)). Target and priority choices above are editorial recommendations.

## Executioner

**Actual alignment:** NE — Neutral Evil.

**My default:** Default: Prepare a believable case against your assigned target.

Read your assigned target and prepare a cover that can support daytime pressure. You have no target-selection or attack button to use on N1.

**Why:** You need that specific player executed on the stand while you are alive. A dramatic accusation that gets them shot or killed at night does not accomplish the same goal.

**Target rule:** Follow your assigned player’s claim, votes and contradictions. With no genuine lead, ask a specific claim question on D2 instead of announcing an unsupported guaranteed guilty.

**Change the plan when:** If the target dies outside a qualifying trial execution, read your new Jester card and complete its Chatterbox requirement before attempting a hanging.

1. Get the assigned target’s claim and compare it with public evidence.
2. Build enough believable daytime pressure for a qualifying execution while staying alive.
3. If transformed into Jester, immediately switch from targeting them to meeting your own hanging prerequisite.

Your opponent is Town under normal assignment, so a fabricated TI result is a deliberate cover burden, not genuine investigative information. Ordinary hanging, Tribunal execution and Prosecution can qualify; Deputy shots and night deaths do not. Early Basic Defense expires at D3; waiting is not automatically safe.

**Claim comparison:** Oracle is a quieter nonvisit cover for surviving while you build an ordinary case on the assigned target. Sheriff creates stronger direct pressure but needs an invented check, normal TI timing, and a visit you did not naturally make. Overfocusing can expose the objective.

- **Oracle (TP) — Low upkeep · weak independent proof.** No normal night action can fit the cover’s astral footprint. Exposure: It supplies no real protection and does not by itself motivate your target’s execution.
- **Sheriff (TI) — More influence · more upkeep.** A claimed suspicious result can create a reason to question the assigned target. Exposure: It is fabricated and you normally did not visit; observers, framing context, and overfocusing can expose it.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Executioner_(ToS2)). Target and priority choices above are editorial recommendations.

## Jester

**Actual alignment:** NE — Neutral Evil.

**My default:** Default: Look suspicious enough to hang; complete Chatterbox first.

Prepare a plausible weak claim or a modest inconsistency. You have no ordinary N1 night action and no D1 Chatterbox quota to manufacture.

**Why:** The win requires a trial execution after completing your quota. Obvious Jester behavior can make Town ignore you, while silence from D2 onward can invalidate the win or cause boredom death.

**Target rule:** On D2, make the displayed number of qualifying public messages early, then engage with a supported case against you. With no pressure, answer claim requests imperfectly rather than refusing all participation.

**Change the plan when:** If someone threatens a day shot or night kill, offer enough plausible Town value to steer them toward a trial instead. Check the quota again each day.

1. Complete the current day’s actual Chatterbox requirement before judgement.
2. Create believable doubt that makes a trial preferable to ignoring or shooting you.
3. After a qualifying hanging, select a legal Haunt target; the Haunt kill itself is not needed for your win.

Use Discussion and Voting messages early rather than depending on last-second trial timing. Whispers and Last Words do not count. Basic Defense expires at D3; a prior survival does not guarantee another. Only a qualifying hanging wins.

**Claim comparison:** Your goal is a plausible hanging, not perfect confirmation. A weak Deputy or a disputed Sheriff can generate suspicion, but being too obvious may make Town refuse the hanging. Chatterbox and the qualifying death route matter more than a universal easiest-cover ranking.

- **Deputy (TK) — Hanging setup · goal-dependent.** An inability to produce a useful shot can create plausible suspicion. Exposure: Town may identify the Jester goal and refuse to hang you; quota and hanging conditions still matter.
- **Sheriff (TI) — Hanging setup · goal-dependent.** A plausibly disputed report can make Town suspect you. Exposure: An impossible report can make you too obvious to hang, and a night kill does not satisfy your goal.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Jester_(ToS2)). Target and priority choices above are editorial recommendations.

## Pirate

**Actual alignment:** NE — Neutral Evil.

**My default:** Default: Scour first; save Plunder for a confirmed Landlubber.

Scour an eligible unknown. You cannot Plunder on N1, so your opening value is locating one of the three assigned players.

**Why:** Killing a non-Landlubber with Plunder removes all remaining Plunders. An early verification is more useful than gambling your limited attacks on a role claim alone.

**Target rule:** Prefer a player whose claimed original role matches one of your target-role hints. With no matching claim, Scour an unknown you have not checked; duplicate roles mean the hint does not prove which player is yours.

**Change the plan when:** Once a living Landlubber is confirmed, consider Plunder from N2 if Basic Attack can reasonably kill them. If defense or protection makes that unlikely, keep Scouring or pursue their daytime execution.

1. Identify actual target players through Scour instead of equating role hints with confirmation.
2. Spend Plunder on a confirmed, plausibly killable Landlubber.
3. Track remaining target players through role changes and survive until the last one dies.

Any death can count; three Plunder kills are unnecessary. Role swaps do not move a Landlubber marker to a different player. Avoid automatically announcing Pirate: Town may cooperate, but your remaining targets can attack you, especially after your early defense ends.

**Claim comparison:** Cleric is lower upkeep for a Scour destination; Psychic trades invented groups and daily posting for influence. Neither produces genuine Town results. A later Plunder death and the Landlubber objective can expose the story; true neutral disclosure is situational rather than guaranteed safety.

- **Cleric (TP) — Low upkeep · weak independent proof.** Scour or Plunder can share a claimed one-player destination. Exposure: Neither supplies Barrier and a Plunder death may contradict the story.
- **Psychic (TI) — More influence · more upkeep.** A Scour destination can fit the selected player of a vision. Exposure: Scour is not a vision; the full parity/count constraints still apply.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Pirate_(ToS2)). Target and priority choices above are editorial recommendations.

## Arsonist

**Actual alignment:** NK — Neutral Killing.

**My default:** Default: Douse a likely survivor; ignite for a meaningful swing.

Douse one eligible opponent likely to remain alive. Unless already Doused or facing an exceptional immediate finish, use the first night to build coverage.

**Why:** Your payoff depends on living Doused opponents when you Ignite. A player likely to die elsewhere tonight is usually a lower-value investment than an unpressured survivor.

**Target rule:** Prefer a durable, useful opponent who is not already Doused. With no claims, pick an eligible unknown outside obvious visiting danger. Defense alone does not prevent Douse.

**Change the plan when:** If you are Doused, consider taking no action to Clean before an ignition can kill you. Ignite when existing Douses can remove decisive threats or votes; do not delay forever chasing perfect coverage.

1. Add living non-Doused opponents while tracking passive Douses from visitors.
2. Clean yourself when actually Doused and survival outweighs another setup action.
3. Ignite when the living Doused set creates a decisive threat removal or winning endgame.

Passively Dousing visitors does not reveal a complete visitor list. New visitors Doused on your Ignite night are not burned by that same ignition. Record actual Douses privately. A visiting cover supplies no genuine Barrier; visible movement cannot prove protection.

**Claim comparison:** Cleric is the simple active-Douse visiting cover; Oracle fits actual nonvisit actions better. Changing modes changes your movement, so an easy N1 account is not a permanent cover. Neither provides a real save.

- **Cleric (TP) — Low upkeep · weak independent proof.** An active Douse can fit a one-player Barrier destination. Exposure: No protection exists; Clean and Ignite change the movement history.
- **Oracle (TP) — Low upkeep · weak independent proof.** Idle cleaning or astral Ignite can fit the absence of a visible visit. Exposure: An earlier direct Douse is not an Oracle action, and there is no actual Aegis.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Arsonist_(ToS2)). Target and priority choices above are editorial recommendations.

## Serial Killer

**Actual alignment:** NK — Neutral Killing.

**My default:** Default: Attack a likely killable target; choose Cautious deliberately.

If attacks are enabled, attack an apparently unprotected opponent. My beginner default is Cautious on: keep your intended attack while avoiding an automatic roleblocker counterkill that can expose your route.

**Why:** Actual kills build Bloodlust; a night without a kill resets progress. A simple killable target is generally a better opener than a likely defended role or crowded protection call.

**Target rule:** With no role evidence, pick an eligible unknown outside obvious Veteran bait. Do not interpret a previous Basic-attack survivor as an easy repeat target.

**Change the plan when:** Turn Cautious off when the potential extra roleblocker kill is worth its exposure and counterattack risks. At Apex, reassess likely visitor traffic for a valuable rampage; obey Grace Period if attacks are disabled.

1. Secure consecutive actual kills rather than repeatedly hitting known defense.
2. At Apex, select a useful opponent likely to draw additional visitors.
3. Recheck Cautious each night based on known blockers, exposure and surviving threats.

Cautious does not cancel your selected attack. It trades away automatic counterattacks for discretion; neither setting is universally optimal. Record actual Bloodlust after resolution. Counterattack power has conflicting source descriptions, so do not rely on it to defeat a specific protected target.

**Claim comparison:** Cleric is the lower-upkeep direct-visit fallback, with no real protection. Vigilante looks attractive because it kills, but N1 timing, ammunition, death attribution, and retaliation make it much harder to sustain than a casual shooting story.

- **Cleric (TP) — Low upkeep · weak independent proof.** An ordinary attack shares a single-player destination. Exposure: No Barrier exists, and deaths/retaliation expose a different effect.
- **Vigilante (TK) — Little writing · high demonstration risk.** Later direct kills can be described as a shooting story. Exposure: A real Vigilante cannot shoot N1 and needs Load/ammo history; attack labels and Bloodlust differ.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Serial_Killer_(ToS2)). Target and priority choices above are editorial recommendations.

## Shroud

**Actual alignment:** NK — Neutral Killing.

**My default:** Default: Direct attack when blind; Shroud a known useful visitor.

With no reliable visiting claim, use a direct attack on an apparently unprotected unknown if attacks are enabled. This gives you control over the intended victim.

**Why:** Shrouding an unknown visitor can send the attack somewhere unhelpful or revert to attacking that player. Its higher upside is easier to use once you know a target’s likely destinations.

**Target rule:** For a direct attack, avoid obvious Veteran bait and crowded protection calls. For Shroud, favor a credible multi-visitor or a visiting role whose likely destination threatens your survival.

**Change the plan when:** Switch to Shroud when a known visitor offers stronger reach or avoids a dangerous direct route. Do not assume every astral or nonvisiting target will carry an attack elsewhere.

1. Remove a plausibly killable threat with a controlled direct attack when information is sparse.
2. Exploit credible multi-visit roles for additional Shroud attack opportunities.
3. Reassess defense, protection and actual movement after each failed or redirected kill.

Basic Attack will not overcome every opponent’s defense. Shroud can implicate the carrier as harmful; this is no guaranteed guilty case. Sources flag inconsistent visibility and fallback behavior, so never base your survival or cover solely on being invisible to every observer.

**Claim comparison:** For a direct-attack opening, Cleric is the simple visiting fallback. Oracle is conditional on a genuinely astral Shroud action; fallback visibility is disputed. Tracker needs real destination evidence you do not automatically receive, so treat it as a difficult alternative.

- **Cleric (TP) — Low upkeep · weak independent proof.** A direct Attack can share a reported Barrier destination. Exposure: You grant no protection; a Shroud mode, actual death, or special visibility can break this simple direct-visit story.
- **Oracle (TP) — Low upkeep · weak independent proof.** A successful Shroud mode can fit no ordinary direct visit. Exposure: Fallback/direct attack visibility is conditional, and no Aegis is supplied.
- **Tracker (TI) — More influence · more upkeep.** A carrier’s known destination may support a limited account. Exposure: You do not receive a complete Tracker report, and personal movement can conflict.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Shroud_(ToS2)). Target and priority choices above are editorial recommendations.

## Werewolf

**Actual alignment:** NK — Neutral Killing.

**My default:** Default: Scent a useful visitor off-moon; attack traffic on-moon.

Check the actual moon indicator. On a non-full-moon opening, Track Scent an eligible likely visitor; on a full moon, choose an attack location with useful visitor traffic if enabled.

**Why:** Scent gives continuing movement information while that player lives. On attack nights your rampage can remove several opponents, so the house’s visitors matter as well as the resident.

**Target rule:** Off-moon, prefer an active visiting claim likely to survive; without one, scent an eligible unknown outside obvious visiting danger. On-moon, prefer a valuable opponent expected to attract visitors, after weighing protection.

**Change the plan when:** Use persistent scent results to choose later attack houses. If deliberately staying home on a full moon, remember that this still rampages against visitors; it is not an ordinary harmless hold.

1. Build lasting scent coverage on credible visiting players during non-full-moon nights.
2. Use full-moon rampages on valuable houses with likely opposing visitors.
3. Keep your cover consistent with your actual movement after switching between scenting and attacks.

A continuing scent result can support a Tracker story, but it does not mean you physically visited that player again tonight. Read the current moon; do not assume a schedule. Roleblocks, jail and protection counterattacks can still endanger you.

**Claim comparison:** Tracker can use real persistent Scent information, so it offers more support than generic TP. It still needs daily posting and your own movement must fit on later attack nights. Cleric is easier writing on direct attacks but supplies no protection or explanation for every earlier scent action.

- **Tracker (TI) — Real information · later movement risk.** Persistent Scent supplies real movement information. Exposure: On later attack nights you may visibly go elsewhere; information fit does not fix personal movement.
- **Cleric (TP) — Low upkeep · weak independent proof.** A chosen attack house can share a claimed Barrier destination. Exposure: No real protection exists; rampage and kill details differ.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Werewolf_(ToS2)). Target and priority choices above are editorial recommendations.

## Cursed Soul

**Actual alignment:** Neutral Outlier — Neutral Outlier.

**My default:** Default: Choose your swap; then play the actual new role.

Select an eligible player whose role would be useful to acquire. With no reliable role claims, select an eligible unknown rather than treating no selection as a safe hold.

**Why:** Soul Swap can activate with a random choice if you leave it blank. In the default Wandering Souls faction, your chosen target is not guaranteed, and changing roles does not change your faction objective.

**Target rule:** Prefer a credible useful-role claim where the swap is legal. Avoid assuming a Neutral Evil or transformed Horseman is an eligible guaranteed acquisition; check actual feedback.

**Change the plan when:** At dawn, record the real resulting role and faction. Consult that role’s ability plan while continuing the Wandering Souls objective: eliminate every living Cursed Soul with a faction member surviving.

1. Resolve the actual swap outcome before making claims about your role or someone else’s.
2. Use acquired information or killing tools to locate and remove current Cursed Soul holders.
3. Keep at least one Wandering Souls member alive through the final Cursed Soul elimination.

Acquiring a Town ability does not change your faction. Swap eligibility and inherited progress have edge cases. Date cover transitions; old and new abilities are not simultaneous.

**Claim comparison:** Oracle fits the initial astral Swap footprint. Amnesiac can explain a transition only when the actual eligible Town-death chronology fits. Follow the role you really acquire and keep faction separate; a short story cannot repair an impossible transition.

- **Oracle (TP) — Low upkeep · weak independent proof.** The initial Swap is astral rather than an ordinary visible visit. Exposure: The acquired role changes future actions; faction stays separate and no initial Aegis exists.
- **Amnesiac (TS) — Conditional fit · extra rules.** A real role change may motivate a transition account. Exposure: Amnesiac needs the correct eligible Town-death chronology; a random or evil acquired role does not fit.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Cursed_Soul_(ToS2)). Target and priority choices above are editorial recommendations.

## Vampire

**Actual alignment:** Neutral Outlier — Neutral Outlier.

**My default:** Default: Convert a likely undefended Town player.

Choose Convert on an eligible likely Town player without known defense. The opening aim is an ally, an extra vote and their retained role ability.

**Why:** Converting useful Town expands your faction; simply Draining them removes that potential ally. Convert instead becomes Drain against non-Town or defended targets, so it is not a guaranteed recruit.

**Target rule:** Prefer a credible useful Town claim outside obvious Veteran danger and expected heavy protection. Without claims, choose an eligible unknown; no-information conversion is a calculated guess, not a Town read.

**Change the plan when:** After resolution, check whether a conversion actually occurred and coordinate with any new ally. Switch to Drain for known unconvertible opposition; a failed conversion attempt does not automatically identify the reason.

1. Recruit a useful eligible Town role while Convert charges remain.
2. Coordinate retained ally abilities and votes; count the cost of losing solo defense.
3. Drain known unconvertible threats and preserve the faction through the endgame.

Convert can operate during Grace Period, but a fallback Drain can fail there. Recruits retain their roles, and succession does not refresh the old Vampire’s conversion budget. Detection immunity has a reported bug; do not build your cover around a promised Innocent Sheriff result.

**Claim comparison:** Cleric is the simpler one-player visiting cover with no actual Barrier. Psychic offers more discussion influence but requires invented early daily visions. Convert, fallback Drain, and new faction members create consequences the will alone cannot hide.

- **Cleric (TP) — Low upkeep · weak independent proof.** A direct Convert/Drain target can share a claimed Barrier destination. Exposure: Neither is a real Barrier, and conversion/fallback death can expose the effect.
- **Psychic (TI) — More influence · more upkeep.** A direct action can fit a chosen vision target. Exposure: There is no real vision; maintain parity/count constraints and account for new faction members.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Vampire_(ToS2)). Target and priority choices above are editorial recommendations.

## Famine

**Actual alignment:** NA — Neutral Apocalypse.

**My default:** Default as Famine: Survive the vote; Starve a Bread-holder.

You are already transformed: use Starve on a living opposing player with Bread. Do not try to Feed three recipients again.

**Why:** Players without Bread already face the ongoing famine. Starve is most useful on a Bread-holder because it accelerates a survivor’s countdown instead of duplicating the automatic threat to a breadless opponent.

**Target rule:** Prefer the Bread-holder most able to organize your hanging or supply opposing votes. With equal threats, shorten a known remaining Bread countdown; avoid wasting the visit on a breadless player.

**Change the plan when:** When a Bread-holder dies, update the remaining survivors before selecting again. If a different opponent becomes a decisive daytime threat, move your pressure there rather than following a rigid original recipient order.

1. Survive the transformation day and every following vote; Invincible Defense does not stop hanging.
2. Starve surviving opposing Bread-holders to reduce their remaining food faster.
3. Use the shrinking survivor and vote counts to eliminate the faction most able to hang you.

The famine continues while you live even if your own action is disrupted. Bread is a temporary starvation buffer you cannot renew. Usually you are solo; only count actual allies. Keep your cover coherent during the transformation hunt.

**Claim comparison:** Cleric is the easier Feed-period cover because it needs one target line and no daily investigative group. It supplies no real save. Psychic gives more influence at the cost of invented visions, target-history work, and early posting; transformation changes both stories.

- **Cleric (TP) — Low upkeep · weak independent proof.** Feed can share the ordinary one-player destination of a Barrier claim. Exposure: Bread is not protection: attack feedback, inability to save, and a later Famine state can expose the story.
- **Psychic (TI) — More influence · more upkeep.** One Feed destination can fit the chosen player in a vision. Exposure: You receive no vision; N1 Good/two and N2 Evil/three constraints and independent claims must remain consistent.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Baker_(ToS2)). Target and priority choices above are editorial recommendations.

## War

**Actual alignment:** NA — Neutral Apocalypse.

**My default:** Default as War: Select two different opposing houses.

You are already transformed: confirm two distinct useful opponents for your Unstoppable rampages. Do not revert to the Berserker one-target buildup plan.

**Why:** Two selected houses can remove two residents plus visitors. Omitting the second target gives up a major part of your current power, while Invincible Defense makes daytime identification and hanging the main ordinary danger.

**Target rule:** Prioritize opponents who can organize your execution or provide decisive votes. If their threat is similar, favor houses likely to attract other opponents. Exclude actual allies if your setup contains them.

**Change the plan when:** If one intended target dies or is no longer eligible before selection, replace them. Against another Invincible opponent, do not assume Unstoppable damage guarantees the kill; recalculate the endgame.

1. Survive daytime voting while keeping your cover consistent with known movement.
2. Confirm both separate targets every night to remove the most dangerous opposing voters.
3. Use visitor traffic to increase rampage value after selecting the essential threats.

War has its own current-state rules, including bypassing common disruption; reread your actual card instead of assuming Berserker restrictions persist. Count opposing votes after deaths. Normally you are solo; confirm actual allies. Remove the execution threat before chasing a bigger rampage.

**Claim comparison:** Vigilante explains an inactive loading N1 better, but later kills still need the real load/ammo/death-label story. Cleric is low upkeep on direct attack nights but provides no protection and does not reproduce your nonvisiting N1. Neither makes rampage a normal Town shot.

- **Vigilante (TK) — Little writing · high demonstration risk.** Both can have a quiet N1 before later attacks. Exposure: A real Vigilante must Load and track ammo; kill labels, rampage, and upgrades do not match indefinitely.
- **Cleric (TP) — Low upkeep · weak independent proof.** A direct attack can share a claimed Barrier destination. Exposure: Ordinary N1 inactivity, real deaths, and no protection undermine the story.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Berserker_(ToS2)). Target and priority choices above are editorial recommendations.

## Pestilence

**Actual alignment:** NA — Neutral Apocalypse.

**My default:** Default as Pestilence: Finish the most dangerous surviving opponent.

You are already transformed: use Spread Pestilence on the opposing player most likely to organize your hanging. Do not keep selecting targets as though you still need new Plague infections.

**Why:** Spread Pestilence applies maximum stacks to its target. Other opponents can die as stack transmission reaches the threshold, so your chosen action should accelerate a meaningful removal beyond passive progress.

**Target rule:** Prioritize an active execution organizer or decisive opposing voter who is not already expected to die from accrued stacks. With equal threats, choose the one whose removal most weakens an opposing voting bloc.

**Change the plan when:** Recheck living players and displayed stack information after every resolution. If the intended target has died or is already certain to expire, move to a different threat rather than duplicating that outcome.

1. Survive daytime voting; Invincible Defense does not protect against hanging.
2. Apply maximum stacks to the most important opponent who would otherwise survive.
3. Use actual stack progress and survivor counts to plan the next removal.

This is the current stack-based Pestilence, not the older rampage model. This lethal ability is non-Harmful; ordinary Basic-attack assumptions do not apply. Opponents cannot die from Pestilence after your death.

**Claim comparison:** Cleric is the low-upkeep one-visit fallback with no real healing. Lookout can exploit partial contact clues but is harder to sustain because infection is not a full visitor report. Psychic adds invented daily group results. Do not turn seeded infections into claimed visits.

- **Cleric (TP) — Low upkeep · weak independent proof.** A direct Infect can share a one-player destination without requiring invented visitor lists. Exposure: There is no Barrier, and infection/transformation progress can create a different public pattern.
- **Lookout (TI) — More influence · more upkeep.** Some spread can suggest visitor contact. Exposure: Initial neighbors and incomplete propagation are not a complete visitor list; your own destination must also fit.
- **Psychic (TI) — More influence · more upkeep.** A direct Infect can fit one selected player in a vision. Exposure: No real vision exists, and you must maintain group counts/parity without leaking infection knowledge.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Plaguebearer_(ToS2)). Target and priority choices above are editorial recommendations.

## Death

**Actual alignment:** NA — Neutral Apocalypse.

**My default:** Default as Death: Survive today; there is no next-night buildup.

Your immediate decision is daytime survival. Keep a consistent claim, answer accusations with checkable facts and avoid supplying a fresh contradiction that makes you the easy hanging.

**Why:** The Apocalypse resolves at sundown if you survive the day. Another Reap target or extra Soul no longer improves that win condition; staying off the final execution is the entire urgent objective.

**Target rule:** Focus your attention on the players organizing votes against you. With no accusation yet, participate plausibly and preserve your cover instead of volunteering the transformed identity.

**Change the plan when:** When nominated, address the strongest specific evidence against you before arguing broad possibilities. If actual allies exist in the setup, coordinate legal voting support; normal Apocalypse usually has no teammates.

1. Prevent your own execution during the transformation day.
2. Answer the strongest accusation without contradicting your recorded claim or movement.
3. Remain in the match and reach sundown alive so the automatic Apocalypse can resolve.

Death has no useful night action to queue. Invincible Defense does not make a hanging safe, and quitting does not deliver Armageddon. This replaces Soul Collector’s plan immediately after transformation. Deception can buy the day; fabricated results remain invented.

**Claim comparison:** Oracle is the simpler movement fit for astral Reap, with role-targeting rules and no real Aegis. Sheriff can support pressure around suspicious-looking evidence but normally makes a visible visit that Reap does not reproduce.

- **Oracle (TP) — Low upkeep · weak independent proof.** Reap and Aegis do not require an ordinary numbered visible visit. Exposure: You supply no protection and must claim role-based Aegis choices, not Reap targets.
- **Sheriff (TI) — More influence · more upkeep.** Reap’s framing effect can align with some suspicious-looking evidence. Exposure: A real Sheriff normally visits; your astral Reap does not reproduce that, and you receive no genuine check.

Mechanics: [role source](https://townofsalem.wiki.gg/wiki/Soul_Collector_(ToS2)). Target and priority choices above are editorial recommendations.
