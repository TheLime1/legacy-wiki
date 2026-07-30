---
title: Automation
description: Auto-promote, auto-learn, auto-pause, skips, and unlock retention.
category: systems
lastVerified: 2026-07-30
sourceCommit: bc406b2f9eb4b3c9bc7e54c1b1892f2837761a85
sourceFiles:
  - Code/Legacy/Simulation/LegacySimulation.cs
  - docs/Game Loop/Systems/Automation.md
gameVersion: 1.0.0
status: verified
---

Automation appears at age 20 and remains unlocked after any rebirth.

- **Auto-promote** selects the next unlocked class in the current group.
- **Promote between careers** appears after the first Embrace Evil and allows auto-promote to follow the complete class order across group boundaries.
- **Auto-learn** chooses among unlocked abilities once per second. The Skip column excludes specific abilities from this choice without blocking manual selection.
- **Auto-pause before the Void** pauses if a step would cross age 1,000.

Enabled automation choices survive rebirths. Ability Skip choices and loadouts are session-only. Loading a loadout disables auto-learn and auto-promote.
