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
5. Train the current ability.
6. Record the highest calculated lifespan.
7. Subtract recurring possession expenses.
8. Evaluate unlocks and achievements.
9. Record the property occupied during that time.

Base speed is four in-game days per real second. Pausing, death, or an inactive time warp can reduce effective speed to zero.

Class and ability XP gains use rounded products of many multipliers. Happiness affects both. Category-specific abilities and possessions then add further multiplicative terms. See [Formulas](../../reference/formulas/) for the exact stacking order.

When age reaches calculated lifespan, age is clamped to that lifespan and the life becomes dead. The player must use an available rebirth path to begin a new life.
