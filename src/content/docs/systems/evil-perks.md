---
title: Evil Perks
description: Evil Perk Point generation, permanent upgrade ranks, costs, and effective age requirements.
category: systems
---

The first **Embrace Evil** unlocks Evil Perk Points, shown as EPP in the Amulet and sidebar. EPP is earned only while a life is actively advancing; paused, dead, jailed, and closed-game time produces none.

## Generation

With current Evil $V$ and Essence $S$, EPP generated per in-game day is:

$$
\operatorname{EPP/day}=
\frac{\log_{10}(1+V)\left(1+0.25\log_{10}(1+S)\right)}{365}.
$$

Completing **Essence VIII** at 250,000 Essence multiplies this rate by 1.25. Current EPP, lifetime EPP, and purchased ranks survive every normal rebirth.

## Permanent upgrades

All purchases are manual. If the current rank is $r$, the listed formula is the cost of the next rank.

| Perk             | Effect per rank                 | Maximum | Next-rank cost | Additional unlock   |
| ---------------- | ------------------------------- | ------: | -------------: | ------------------- |
| Earlier Eye      | Touch Eye requirement −5 yr     |      10 |    $5\cdot2^r$ | First Embrace Evil  |
| Earlier Evil     | Embrace Evil requirement −10 yr |      10 |   $10\cdot3^r$ | First Embrace Evil  |
| Earlier Void     | Void requirement −100 yr        |       9 |   $25\cdot3^r$ | First Embrace Evil  |
| Earlier Galactic | Galactic requirement −1,000 yr  |       9 |   $50\cdot3^r$ | First Embrace Evil  |
| Essence Bargain  | Essence award +10%              |      10 |  $100\cdot4^r$ | 150,000,000 Essence |

At maximum rank, the four age thresholds become age 15 for Touch Eye, age 100 for Embrace Evil, age 100 for the Void, and age 1,000 for Galactic Council. The reduced values are used by the actual unlock and rebirth checks and are displayed in requirement text.

:::caution
The optional **Pause before the Void** and **Pause before Galactic Council** toggles still pause at the original ages 1,000 and 10,000. With Earlier Void or Earlier Galactic ranks, the related content may unlock before that pause occurs.
:::

Essence milestone rewards that multiply the same channel apply multiplicatively. For example, Essence IV and Essence IX combine as $1.10\times1.15=1.265$ before Essence Bargain ranks are applied.
