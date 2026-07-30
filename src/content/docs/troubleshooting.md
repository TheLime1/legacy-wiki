---
title: Troubleshooting
description: Recover from save, leaderboard, progression, and possession issues.
category: help
lastVerified: 2026-07-30
sourceCommit: bc406b2f9eb4b3c9bc7e54c1b1892f2837761a85
sourceFiles:
  - Code/Legacy/Persistence/LegacyPersistenceService.cs
  - Code/Legacy/Simulation/LegacySimulation.cs
  - Code/Legacy/Services/LegacyLeaderboardService.cs
gameVersion: 1.0.0
status: verified
---

## A class or ability is still locked

Check both its group requirement and its individual requirement. Unlock thresholds are inclusive, but some entries require multiple task levels.

## The simulation stopped

Check Pause first, then compare current age with calculated lifespan. Auto-pause can also stop the game just before age 1,000.

## Copper stays at zero

Paid possessions are recurring expenses. The game clears them after a deficit, but the current class may still have very low income. Return to an affordable setup and improve class income or expense reductions.

## An imported save is rejected

The payload must decode to valid JSON, use a recognized format/version, remain under 12 MiB, and pass definition/state validation. A save from a newer format is deliberately rejected.

## Leaderboard or Empire data will not load

These views depend on s&box services and metadata URLs. Retry after a moment. Empire keeps cached bands when an individual layer refresh fails.

## My Skip or loadout disappeared

Both are session-only by design. They are not written to the local save.

## The wiki search says it is unavailable

Pagefind search is generated only by the production build. Run `npm run build`, then `npm run preview`; it is not active in the basic Astro development server.
