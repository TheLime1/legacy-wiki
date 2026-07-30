---
title: Technical Reference
description: Runtime model, persistence, networking boundary, and documented edge cases.
category: reference
lastVerified: 2026-07-30
sourceCommit: bc406b2f9eb4b3c9bc7e54c1b1892f2837761a85
sourceFiles:
  - legacy.sbproj
  - Code/Legacy/Domain/LegacyState.cs
  - Code/Legacy/Simulation/LegacySimulation.cs
  - Code/Legacy/Services/LegacyLeaderboardService.cs
gameVersion: 1.0.0
status: verified
---

Legacy is configured as a single-player s&box game with one minimum and maximum player, a 20 Hz tick rate, keyboard control, Quick Play launch, and `scenes/legacy.scene` as its startup scene.

The core simulation is deterministic around a 0.05-second fixed step. The mutable state refers to immutable content definitions by stable IDs. Definitions cover tasks, categories, possessions, requirements, achievements, and channel-specific effects.

Online services are limited to s&box statistics, leaderboards, player identity, achievement reporting, and metadata reads. They do not make the game multiplayer. Leaderboard failures are caught and shown as recoverable UI errors.

## Important edge cases

- A real-time `Advance` call performs at most 200 steps; extra accumulated time stays queued.
- The sidebar warp number multiplies all three warp effects, while actual speed adds Time Warping to the product of the other two.
- The net display uses an absolute value.
- Alt + digit saves and then loads because both handlers run.
- Loading even an empty loadout disables auto-learn and auto-promote.
- Selecting possessions requires enough copper for one calculated daily expense, not a separate purchase price.
- Crossing below zero copper clears paid possessions and clamps copper to zero.
- Cosmic Recollection is not `1 + coefficient × level`; it is the raw coefficient product used during Transcend.
