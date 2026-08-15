---
title: Heroic Progression
description: Heroic milestones, Great task promotions, Great item conversions, formulas, and reset behavior.
category: systems
---

The **Heroic** tab tracks fourteen Heroic milestones based on Essence and the Great progression of every eligible class, ability, property, and miscellaneous possession.

## Great promotion gate

Normal classes, abilities, and original possessions can become Great after all three requirements are met:

1. Transcend at least once.
2. Reach 5,000,000 Essence and complete Heroic I.
3. Reach a normal **One Above All** peak of 2,000.

The target must also be unlocked, and promotion or conversion is unavailable while jailed. A previously completed Heroic I permanently satisfies its Essence part of the gate.

Metaverse classes use their own sequential gate described in [The Metaverse](../metaverse/).

## Heroic milestones

Milestones are permanent once their Essence threshold is reached.

| Milestone   |        Essence | Reward                                 |
| ----------- | -------------: | -------------------------------------- |
| Heroic I    |      5,000,000 | Unlock Great promotions                |
| Heroic II   |     10,000,000 | ×2 Great XP                            |
| Heroic III  |     20,000,000 | ×2 Great XP                            |
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

Within each class or ability family, the first task can be promoted immediately after the gate. Every following task requires the previous Great task at level 20.

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

Every paid property and miscellaneous possession from the original catalog can be converted in its own Shop chain. Homeless and the expansion's new possessions are not eligible. Converting an active item removes it from the current loadout but permanently changes its statistics.

Item rank follows the original paid-item source order: Tent is 1, Galactic Throne is 15, Book is 16, and Multiverse Fragment is 33. For rank $r$:

$$
X_{\mathrm{Great}}=\max\left(10^6X_0,\ 10^{20}\times10^{r/3}\right),
$$

$$
M_{\mathrm{Great}}=1+4(M_0-1).
$$

$X_0$ is ordinary daily expense and $M_0$ is the ordinary effect. Properties and miscellaneous possessions advance through separate conversion chains; each conversion after the first requires the previous item in that chain.

Heroic XIV leads directly to [Darkness and Collapse](../darkness/).
