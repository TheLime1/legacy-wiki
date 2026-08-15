---
title: Core Gameplay Loop
description: How time, class work, ability training, income, and expenses advance.
category: systems
---

Progress follows this order:

1. Advance age according to game speed.
2. Auto-promote when enabled and eligible.
3. Apply the current auto-learn candidate.
4. While time is advancing, train the current class, add its copper income, record its worked peak, and reveal its mastery item after its first completed work tick.
5. While time is advancing, train the primary ability.
6. Generate Evil Perk Points, train every unlocked Echo, update Resonance memories, generate Dark Orbs and Hypercubes, advance the Chronicle, and evaluate all milestone families.
7. Record the highest calculated lifespan.
8. Refresh the Shop Steward when its 30-day timer expires and advance Reality Boost timers when available.
9. Subtract the Steward fee and recurring possession expenses.
10. Evaluate unlocks and achievements.
11. Record the property occupied during an active work tick.

Base speed is four in-game days per real second. Pausing, death, or jail can reduce effective speed to zero. A zero-speed tick cannot create class or ability XP, mastery discovery, worked-peak progress, or property-occupancy evidence.

Class and ability XP gains use rounded products of many multipliers. Happiness affects both. Category-specific abilities and possessions then add further multiplicative terms. Applicable mastery percentages add into one mastery multiplier before that multiplier joins the product. Permanent [milestones](../chronicle/) add their XP multipliers afterward. See [Formulas](../../reference/formulas/) for the exact stacking order.

When age reaches calculated lifespan, age is clamped to that lifespan and the life becomes dead. The player must use an available rebirth path to begin a new life.
