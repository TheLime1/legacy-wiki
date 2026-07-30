---
title: Unlocks and Milestones
description: Permanent and current-life unlock conditions across Legacy.
category: systems
lastVerified: 2026-07-30
sourceCommit: bc406b2f9eb4b3c9bc7e54c1b1892f2837761a85
sourceFiles:
  - Code/Legacy/Content/LegacyContent.cs
  - Code/Legacy/Simulation/LegacySimulation.cs
  - Code/Legacy/Simulation/LegacyFeatureIds.cs
gameVersion: 1.0.0
status: verified
---

## Interface milestones

| Feature                             |                      Requirement | Permanent once reached?                  |
| ----------------------------------- | -------------------------------: | ---------------------------------------- |
| Shop                                |                  Hold 750 copper | Yes                                      |
| Automation                          | Age 20, or any completed rebirth | Yes                                      |
| Quick task display                  | Age 20, or any completed rebirth | Yes                                      |
| Amulet tab                          |                           Age 25 | Cached for the current progression state |
| Amulet note 1                       |                           Age 45 | Cached                                   |
| Touch Eye                           |                           Age 65 | Available when age requirement is met    |
| Embrace Evil                        |                          Age 200 | Available when age requirement is met    |
| The Void / Void Manipulation        |                        Age 1,000 | Cached                                   |
| Galactic Council / Celestial Powers |                       Age 10,000 | Cached                                   |
| Transcend                           |      Cosmic Recollection level 1 | Available when the requirement is met    |

## Resource-gated groups

Dark Magic unlocks at 1 Evil. Almightiness unlocks at 1 Essence. Individual entries inside those groups can require much larger resource totals or specific task levels.

Class, ability, and possession tables include their exact individual conditions. Requirements use inclusive thresholds: reaching the listed value is enough. Completed cached unlocks do not need to be re-earned unless rebirth logic explicitly clears them.
