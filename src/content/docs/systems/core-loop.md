---
title: Core Gameplay Loop
description: How time, class work, ability training, income, and expenses advance.
category: systems
---

Progress follows this order:

1. Advance age according to game speed.
2. Auto-promote when enabled and eligible.
3. Apply the current auto-learn candidate.
4. Train the current class and add its copper income.
5. Record the class's worked peak and reveal its mastery item after its first completed work tick.
6. Train the current ability.
7. Record the highest calculated lifespan.
8. Subtract recurring possession expenses.
9. Evaluate unlocks and achievements.
10. Record the property occupied during that time.

Base speed is four in-game days per real second. Pausing, death, or an inactive time warp can reduce effective speed to zero.

Class and ability XP gains use rounded products of many multipliers. Happiness affects both. Category-specific abilities and possessions then add further multiplicative terms. Applicable mastery percentages add into one mastery multiplier before that multiplier joins the product. See [Formulas](../../reference/formulas/) for the exact stacking order.

When age reaches calculated lifespan, age is clamped to that lifespan and the life becomes dead. The player must use an available rebirth path to begin a new life.
