---
title: Empire and Leaderboards
description: Shared statistics, leaderboard metrics, Empire layers, and crown ranking.
category: systems
lastVerified: 2026-07-30
sourceCommit: bc406b2f9eb4b3c9bc7e54c1b1892f2837761a85
sourceFiles:
  - Code/Legacy/Services/LegacyLeaderboardService.cs
  - Code/Legacy/UI/LegacyEmpire.razor
  - Code/Legacy/UI/LegacyLeaderboard.razor
gameVersion: 1.0.0
status: verified
---

Legacy is single-player, but it reports selected progress to public s&box statistics for shared leaderboards and the Empire display.

The main leaderboard can rank by peak upgraded lifespan or total years lived. Empire places players into property-based layers:

| Layer             | Properties                    | Capacity |
| ----------------- | ----------------------------- | -------: |
| Celestial Court   | Galactic Throne, Astral Realm |        3 |
| Void Court        | Void Universe, Void Realm     |        6 |
| Dimensional Lords | Pocket Dimension              |       10 |
| Sovereigns        | Nation Ruler                  |       15 |
| Governors         | City Ruler                    |       21 |
| High Nobility     | Town Ruler                    |       28 |
| Landowners        | Grand Palace, Small Palace    |       34 |
| Commoners         | Large House, House, Cottage   |       39 |
| Peasants          | Wooden Hut, Tent, Homeless    |       43 |

The crown ranking compares, in order: career score, later class order, peak upgraded lifespan, total rebirths, property order, total lifetime, then lower Steam ID. Career score is `class career-prestige value × peak worked level²`.

Only property occupation proven by a completed simulation step is used as upgraded Empire placement. Failed Empire refreshes keep cached results visible and show a warning.
