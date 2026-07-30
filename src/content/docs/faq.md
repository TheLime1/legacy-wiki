---
title: Frequently Asked Questions
description: Direct answers about progression, saves, offline progress, multiplayer, and rebirths.
category: help
lastVerified: 2026-07-30
sourceCommit: bc406b2f9eb4b3c9bc7e54c1b1892f2837761a85
sourceFiles:
  - legacy.sbproj
  - Code/Legacy/Simulation/LegacySimulation.cs
  - Code/Legacy/Persistence/LegacyPersistenceService.cs
gameVersion: 1.0.0
status: verified
---

## Does Legacy progress while closed?

No offline-progress calculation exists in the inspected source.

## Is Legacy multiplayer?

The game itself is single-player. Shared s&box statistics power leaderboards and Empire, but players do not share one live simulation.

## Are Shop costs one-time purchases?

No. They are daily recurring expenses.

## Why did my possessions turn off?

When expenses would take copper below zero, copper is clamped to zero, the property returns to Homeless, and all miscellaneous possessions are cleared.

## What survives Touch Eye?

Recorded maximum levels, achievements, Essence, permanent unlocks, and automation choices survive. Current levels, XP, age, copper, and active possessions reset.

## Why is actual time warp different from the sidebar?

The verified implementation uses addition for one part of actual speed but multiplication for the displayed summary. See the formula reference.

## Are loadouts saved after closing the game?

No. Loadouts are session-only.

## Can I import or export a save?

Yes. The Settings UI exposes save management backed by a validated base64 JSON document.
