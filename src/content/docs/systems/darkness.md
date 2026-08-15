---
title: Darkness and Collapse
description: Collapse rewards, Dark Matter, Darkness milestones, doctrines, Dark Orbs, and new progression.
category: systems
---

[Heroic XIV](../heroic/) unlocks **Collapse** at 50,000,000,000 Essence. Collapse also requires a positive Dark Matter award and cannot be used in jail. It opens Dark Ascendancy and Darkness progression, then becomes the bridge to the Metaverse.

## Collapse award

Let $E$ be current Essence and $x=E/(5\times10^{10})$. No award is available while $x<1$. Otherwise:

$$
\operatorname{DM}=\left\lfloor
x^{1.12}\left(1+0.15\log_{10}x\right)M_{\mathrm{DM}}
\right\rfloor.
$$

The base award is 1 at the threshold and 15 at ten times the threshold. $M_{\mathrm{DM}}$ multiplies Gravitational Hunger, an active Heart of the Abyss, Doctrine V, Darkness IV, and Darkness XII where applicable. The later Dark Matter Altar adds another factor during Metaverse progression. Extreme results saturate at the largest finite value.

The award increases three separate records:

- **Current Dark Matter:** the spendable balance.
- **Lifetime Dark Matter:** the permanent value used by milestones and unlocks.
- **This run:** gross Dark Matter earned across every Collapse since the last Metaverse entry.

Purchases reduce only current Dark Matter. They never lower lifetime or run earnings.

## Collapse reset

Collapse clears age, death state, copper, Evil, Essence, the selected class, ability, and property, active miscellaneous possessions, every available normal and Great task's level, maximum, and XP, ordinary requirement caches, and all Echo focuses and assignments. The fresh selections are Beggar, Concentration, and Homeless.

It keeps current, lifetime, and run Dark Matter; Collapse count; Dark Orbs; generator and Orb-upgrade ranks; doctrine choices; Great promotions and archived normal records; Great item conversions; Evil Perk Points and ranks; milestone completion; Mastery discoveries, worked peaks, and effects; Resonance memories; achievements; rebirth counters; settings; Shop Steward configuration; and Chronicle history. Coin-balance requirements for later possessions must be earned again, while their lifetime-Dark-Matter requirements remain satisfied.

## Dark Ascendancy classes

| Class                     | Lifetime Dark Matter | Base max XP |    Base copper/day |
| ------------------------- | -------------------: | ----------: | -----------------: |
| Eclipse Heir              |                    1 |   $10^{29}$ |          $10^{18}$ |
| Null Regent               |                   30 |   $10^{31}$ |   $5\times10^{19}$ |
| Abyssal Imperator         |                  300 |   $10^{33}$ | $2.5\times10^{21}$ |
| Sovereign Beyond Creation |                3,000 |   $10^{35}$ |          $10^{23}$ |
| The Last Authority        |               30,000 |   $10^{37}$ |   $5\times10^{24}$ |

These classes can become Great in order; each class after Eclipse Heir requires the preceding Great class at level 20. Their complete entries also appear in the [class catalog](../classes/).

## Darkness abilities

Every Darkness effect uses $1+c\log_{10}(L+1)$ and a base max XP of 100.

| Ability              | Lifetime Dark Matter | Coefficient $c$ | Effect           |
| -------------------- | -------------------: | --------------: | ---------------- |
| Shadow Discipline    |                    3 |               1 | All ability XP   |
| Gravitational Hunger |                   10 |           $2/3$ | Dark Matter gain |
| Deathless Momentum   |                   25 |           $1/3$ | All XP           |
| Soul Eclipse         |                  100 |           $2/3$ | Essence gain     |
| Arcana Unbound       |                1,000 |           $4/3$ | Magic XP         |
| Blinded By Darkness  |               10,000 |           $1/3$ | All XP           |

Deathless Momentum unlocks independently at 25 lifetime Dark Matter rather than through a named milestone. Darkness IX doubles XP for this ability family. Great promotion follows the same within-family level-20 chain. See the [ability catalog](../abilities/) for the combined list.

## Dark Orbs

Darkness III at 10 lifetime Dark Matter unlocks **A Miracle** and all four Orb upgrades. A Miracle has ten ranks. Buying rank $r+1$ costs $\lceil3^r\rceil$ Dark Matter: 1, 3, 9, 27, 81, 243, 729, 2,187, 6,561, then 19,683.

$$
\operatorname{Orbs/day}=0.01(2^r-1)\left(1+0.25\sqrt{D}\right)M_{11},
$$

where $D$ is lifetime Dark Matter and $M_{11}=1.5$ after Darkness XI, otherwise $1$. Rank 0 produces nothing. Generation advances only during active, alive, unjailed play, is quoted per in-game day, and has no offline progress.

Each Orb upgrade has ten ranks and next-rank cost $B\times4^r$ Dark Orbs:

| Upgrade         | Base cost $B$ | Effect per rank   |
| --------------- | ------------: | ----------------- |
| Enchanted Orbs  |            10 | +25% Magic XP     |
| Essence Orbs    |            25 | +20% Essence gain |
| Prosperity Orbs |            50 | +25% income       |
| Warp Orbs       |           100 | +5% warp          |

Dark Orbs, generator rank, and all four upgrade ranks survive Collapse.

## Doctrines

Each doctrine unlocks from lifetime Dark Matter and charges spendable Dark Matter for its branch. Only one branch per doctrine can be owned. To switch, clear the current branch and repurchase; clearing never refunds its cost. Choices survive Collapse and all relevant effects multiply.

| Doctrine |  Unlock |  Cost | Branch A                       | Branch B                       |
| -------- | ------: | ----: | ------------------------------ | ------------------------------ |
| I        |       1 |    10 | ×1.5 warp, ×0.9 Essence        | ×1.5 lifespan, ×0.9 Evil       |
| II       |     100 |    30 | ×2 class XP, ×0.9 income       | ×2 ability XP, ×0.9 income     |
| III      |   1,000 |   100 | ×1.5 Essence, ×0.9 Evil        | ×1.5 Evil, ×0.9 Essence        |
| IV       |  10,000 |   300 | ×2 all XP, ×0.75 income        | ×2 income, ×0.75 all XP        |
| V        | 300,000 | 1,000 | ×1.5 Dark Matter, ×0.9 Essence | ×1.5 Essence, ×0.9 Dark Matter |

[Metaverse perks](../metaverse/#run-perks) can later remove drawbacks, permit both branches, or restore doctrine selections between runs. See [Chronicle](../chronicle/#darkness-milestones) for all thirteen permanent Darkness rewards.
