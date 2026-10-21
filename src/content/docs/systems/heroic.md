---
title: Heroic Progression
description: Heroic milestones, Great task promotions, Great item conversions, formulas, and reset behavior.
category: systems
---

The **Heroic** tab tracks fourteen Heroic milestones based on Essence and the Great progression of every eligible class, ability, property, and miscellaneous possession.

## Great promotion gate

Eligible classes, abilities, and paid possessions, including expansion possessions, can become Great after all three requirements are met:

1. Transcend at least once.
2. Reach 1,000,000 Essence to complete Heroic I.
3. Reach normal **One Above All** level 1.

The target must also be unlocked, and promotion or conversion is unavailable while jailed. Completed Heroic I permanently satisfies the Essence requirement. Unlocking One Above All without training it is insufficient; its recorded normal peak, earned achievement, or existing Great task promotion preserves proof of reaching it.

Metaverse classes use their own sequential gate described in [The Metaverse](../metaverse/).

## Heroic milestones

Milestones are permanent once their Essence threshold is reached.

| Milestone   |        Essence | Reward                                 |
| ----------- | -------------: | -------------------------------------- |
| Heroic I    |      1,000,000 | Unlock Great promotions                |
| Heroic II   |      2,000,000 | ×2 Great XP                            |
| Heroic III  |      4,000,000 | ×2 Great XP                            |
| Heroic IV   |     30,000,000 | ×2 Great XP                            |
| Heroic V    |     50,000,000 | ×2 Great XP                            |
| Heroic VI   |    100,000,000 | ×2 Great XP                            |
| Heroic VII  |    150,000,000 | ×2 Great XP and unlock Essence Bargain |
| Heroic VIII |    200,000,000 | ×2 Great XP                            |
| Heroic IX   |    300,000,000 | ×2 Great XP                            |
| Heroic X    |    400,000,000 | ×2 Great XP                            |
| Heroic XI   |    500,000,000 | ×2 Great XP                            |
| Heroic XII  |    750,000,000 | ×2 Great XP                            |
| Heroic XIII | 10,000,000,000 | ×2 Great XP                            |
| Heroic XIV  | 50,000,000,000 | Unlock Collapse                        |

The twelve Great-XP milestones multiply one another, up to $2^{12}=4096$ times Great XP.

## Great tasks

Promotion is permanent and archives the task's normal level, maximum, XP, and highest normal peak. The Great version starts at level 0 with its own XP and maximum-level history. Resonance abilities cannot become Great.

Each class or ability category has its own independent chain. Its first unlocked task can be promoted after the global gate; each following task requires the previous task at current Great level 20. For example, Farmer needs Great Beggar level 20, while Military starts its own chain. Already-promoted tasks use Great levels for progression checks and do not regain their original normal-level prerequisites after a reset; category and release gates still apply.

| Great chain            | Rank range | Order                                     |
| ---------------------- | ---------: | ----------------------------------------- |
| Common Work            |        1–6 | Beggar through Merchant                   |
| Military               |       7–14 | Squire through Lieutenant General         |
| The Arcane Association |      15–22 | Student through Imperator                 |
| The Void               |      23–30 | Corrupted through Abyss God               |
| Galactic Council       |      31–35 | Eternal Wanderer through One Above All    |
| Fundamentals           |        1–4 | Concentration through Meditation          |
| Combat                 |        5–7 | Strength through Muscle Memory            |
| Magic                  |       8–14 | Mana Control through Brainwashing         |
| Dark Magic             |      15–24 | Dark Influence through Evil Incarnate     |
| Void Manipulation      |      25–31 | Absolute Wish through Abyss Manipulation  |
| Celestial Powers       |      32–35 | Cosmic Longevity through Galactic Command |
| Almightiness           |      36–39 | Yin Yang through Epiphany                 |

Task rank is source order plus one, counted separately for classes and abilities. Dark Ascendancy, Darkness, and Metaverse continue with the chains described on their own pages.

Great training keeps the full inherited XP, retained-maximum, time-warp, and Heroic bonuses. There is no logarithmic Great XP slowdown or mandatory training delay. Powerful characters may finish the early Great levels immediately. Removing the slowdown does not reset saved levels, XP, archives, or promotions.

For Great rank $r$ and Great level $L$, the next-level requirement is:

$$
\operatorname{maxXP}_{\mathrm{Great}}=
\operatorname{round}\left(10^{10}(1.7)^r(L+1)(1.01)^L\right).
$$

Great abilities calculate their effects with effective level:

$$
L_{\mathrm{effective}}=\max(P_{\mathrm{normal}},2000)+100L_{\mathrm{Great}},
$$

where $P_{\mathrm{normal}}$ is the archived normal peak. Great Cosmic Recollection is capped at a ×2 retention effect.

For a Great class with ordinary base income $I_0$, Great level $L$, and rank $r$, income before the usual class multipliers is:

$$
I_{\mathrm{Great}}=I_0\times5\times10^{15}\times10^{r/3}
\left(1+\log_{10}(L+1)\right).
$$

### Reset behavior

| Reset        | Great maximum retained                                            |
| ------------ | ----------------------------------------------------------------- |
| Touch Eye    | Highest current or recorded Great level                           |
| Embrace Evil | 0                                                                 |
| Transcend    | $\lfloor\text{Cosmic Recollection}\times\text{Great peak}\rfloor$ |
| Collapse     | 0                                                                 |

Great promotion status and archived normal progress remain permanent through these resets.

## Great item conversions

Every eligible paid property and miscellaneous possession, including expansion items, can be converted through its Shop chain. Homeless cannot become Great. Conversion is permanent and deactivates the item immediately; its new recurring upkeep applies when equipped again.

Item rank keeps the existing source-order values: Tent is 1, Galactic Throne is 15, Book is 16, and Multiverse Fragment is 33. Expansion items keep their later ranks, and each item type continues its own ordered chain. For rank $r$:

$$
X_{\mathrm{Great}}=\max\left(10^6X_0,\ 10^{20}\times10^{r/3}\right),
$$

$$
M_{\mathrm{Great}}=1+4(M_0-1).
$$

$X_0$ is ordinary daily expense and $M_0$ is the ordinary effect. Properties and miscellaneous possessions advance through separate conversion chains; each conversion after the first requires the previous item in that chain.

Each conversion charges a one-time fee equal to one day of that item’s Great upkeep after expense reductions and rounding. You need enough copper to pay it. The preview shows the fee and new daily expense before confirmation; existing Great items are not charged retroactively.

Heroic XIV leads directly to [Darkness and Collapse](../darkness/).

A **✓ Great** badge means the promotion or conversion is already complete. **Promote** and **Convert** start an action, followed by **Confirm** or **Cancel**. **Locked** explains the missing requirement, such as a predecessor’s current Great level or insufficient copper.
