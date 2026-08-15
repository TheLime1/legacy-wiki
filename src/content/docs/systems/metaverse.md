---
title: The Metaverse
description: Metaverse awards, perk loadouts, Hypercubes, altars, Reality Boost, classes, and the ending.
category: systems
---

Darkness XIII at 1,000,000 lifetime Dark Matter unlocks **Metaverse** entry. The award uses gross Dark Matter earned during the current run, so spending Dark Matter does not reduce it.

## Metaverse Point award

Let $R$ be current-run Dark Matter earned and $y=R/1000$. No award is available while $y<1$. Otherwise:

$$
\operatorname{MP}=\left\lfloor
y^{1.1}\left(1+0.1\log_{10}y\right)M_{\mathrm{MP}}
\right\rfloor,
$$

where $M_{\mathrm{MP}}=1.25$ with the **Metaverse gain +25%** perk and $1$ otherwise.

Entering the Metaverse performs a Collapse, then clears spendable and run Dark Matter, Dark Orbs, Hypercubes, altars, the Reality Boost, and unpreserved Dark upgrades and doctrines. Lifetime Dark Matter, Metaverse Points, Great promotion status, Great item conversions, mastery progress, Resonance memories, milestones, Evil perks, and Chronicle records survive.

The game pauses on a preparation screen before the next run. Perks can be selected and refunded there, then become fixed until the next Metaverse entry.

## Run perks

The refundable perk loadout unlocks at 3 lifetime Metaverse Points.

| Perk                      |   Cost | Effect                                                                                                               |
| ------------------------- | -----: | -------------------------------------------------------------------------------------------------------------------- |
| Double Hypercubes         |   5 MP | ×2 Hypercube generation                                                                                              |
| Seed Dark Matter          |  10 MP | Begin with $\min(1000,\lfloor0.001\times\text{lifetime DM}\rfloor)$ spendable DM that does not count as run earnings |
| Preserve Orb ranks        |  25 MP | Restore the previous Orb generator and Orb upgrade ranks                                                             |
| Metaverse gain +25%       |  50 MP | ×1.25 Metaverse Point gain                                                                                           |
| Remove doctrine drawbacks | 100 MP | Keep selected doctrine benefits without their penalties                                                              |
| Dual doctrines            | 200 MP | Permit purchasing both branches of each doctrine                                                                     |
| Preserve doctrines        | 300 MP | Restore doctrine selections from the previous run                                                                    |

Preserving a doctrine that owns both branches also requires Dual doctrines.

## Hypercubes and altars

Metaverse I unlocks Hypercubes. With Hypercube-rate altar rank $a$:

$$
\operatorname{Hypercubes/day}=0.03M_{\mathrm{item}}M_{\mathrm{perk}}(1.25)^a,
$$

where the Axiom Breaker supplies $M_{\mathrm{item}}=2$ while active and Double Hypercubes supplies $M_{\mathrm{perk}}=2$. The storage cap is:

$$
10{,}000(1+\text{lifetime MP})^2.
$$

Each altar has ten ranks and costs $B\times3^r$ Hypercubes for rank $r+1$:

| Altar             | Base cost $B$ | Effect per rank                                   |
| ----------------- | ------------: | ------------------------------------------------- |
| Hypercube Altar   |           100 | +25% Hypercube generation                         |
| Recurrence Altar  |           500 | ×0.95 Reality Boost cooldown, minimum 120 seconds |
| Duration Altar    |         1,000 | +10 active seconds of Reality Boost               |
| Essence Altar     |         2,500 | +25% Essence gain                                 |
| Dark Matter Altar |         5,000 | +25% Dark Matter gain                             |

## Reality Boost

Reality Boost multiplies game speed by **5**. Its duration is $60+10d$ active seconds at Duration Altar rank $d$. Its cooldown is $\max(120,600\times0.95^c)$ active seconds at Recurrence Altar rank $c$. It can be activated only while alive, unpaused, and outside jail.

## Metaverse class chain

| Class                  | Lifetime MP | Additional requirement         | Base max XP |    Base copper/day |
| ---------------------- | ----------: | ------------------------------ | ----------: | -----------------: |
| Player One             |           1 | None                           |   $10^{39}$ | $2.5\times10^{26}$ |
| Reality Usurper        |          10 | Great Player One level 20      |   $10^{41}$ |          $10^{28}$ |
| Axiom Sovereign        |          30 | Great Reality Usurper level 20 |   $10^{43}$ |   $5\times10^{29}$ |
| The Unwritten Absolute |         100 | Great Axiom Sovereign level 20 |   $10^{45}$ | $2.5\times10^{31}$ |

These classes use their own Great chain. The first can be promoted when it unlocks; every following class requires the prior Great class at level 20.

## Ending

Metaverse VI completes at 300 lifetime Metaverse Points. Reaching Great level 20 on **The Unwritten Absolute** then unlocks **Legacy Complete**. Confirming the ending permanently records completion and leaves the simulation open for continued play.
