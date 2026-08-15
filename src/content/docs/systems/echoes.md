---
title: Echoes and Resonance
description: All four Echoes, Resonance memories, automatic training, E focuses, efficiency, and resets.
category: systems
---

Echoes train additional unlocked abilities at the same time as the primary ability. Each Echo unlocks with a matching Resonance ability:

| Echo     | Unlock                | Resonance     | 100% efficiency peak |
| -------- | --------------------- | ------------- | -------------------: |
| Echo I   | First Embrace Evil    | Resonance I   |                1,000 |
| Echo II  | First Transcend       | Resonance II  |                1,250 |
| Echo III | First Collapse        | Resonance III |                1,500 |
| Echo IV  | First Metaverse entry | Resonance IV  |                1,750 |

## Choosing an ability

Without an E focus, each Echo automatically chooses the eligible ability with the shortest estimated time to its next level. This routing is independent of primary Auto-learn.

- An Echo cannot train the currently selected primary ability.
- An Echo cannot train its own matching Resonance, but it may train another Echo's Resonance.
- An ability cannot be trained by more than one Echo.
- Auto-learn avoids abilities already assigned to an Echo.

Click the **E** control in an ability row to add or remove a focus. Focuses retain their selection order and are assigned to the strongest available Echoes first. Extra focuses remain queued until an Echo becomes available. **E is a row control, not a keyboard shortcut.**

Selecting a focused ability as the primary ability removes its Echo focus. The sidebar shows every unlocked Echo's current target, level progress, and XP rate. **Clear Echoes** removes every focus and returns routing to automatic mode.

## Resonance efficiency

Let $p_i$ be the highest remembered level of Resonance $i$ and $T_i$ its target from the table above. Echo $i$ trains at:

$$
E_i(p_i)=
\begin{cases}
0.25+0.75\dfrac{p_i}{T_i}, & p_i\le T_i,\\
1+0.05\log_2\left(\dfrac{p_i}{T_i}\right), & p_i>T_i.
\end{cases}
$$

Every Echo starts at **25%**, reaches **100%** at its target, and gains another five percentage points whenever its remembered peak doubles beyond that target. Echo XP is the target ability's complete current XP gain multiplied by this efficiency, including Great XP when the target is promoted.

The exact calibrated base maximum XP values for Resonance I–IV are $0.00030536056011010876$, $0.00003972362997298969$, $0.000004881366014841863$, and $0.00000045896650664729693$.

## Saving and rebirths

Remembered Resonance peaks and ordinary E-focus choices are saved. Touch Eye, Embrace Evil, Transcend, Collapse, and Metaverse entry clear all focuses and assignments, but every remembered peak survives.

See [Evil Perks](../evil-perks/) for the other system unlocked by the first Embrace Evil.
