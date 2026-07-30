---
title: Getting Started
description: How to begin a new Legacy life and understand the first controls.
category: start
lastVerified: 2026-07-30
sourceCommit: bc406b2f9eb4b3c9bc7e54c1b1892f2837761a85
sourceFiles:
  - Code/Legacy/Domain/LegacyState.cs
  - Code/Legacy/Simulation/LegacySimulation.cs
gameVersion: 1.0.0
status: verified
---

A fresh life begins at **age 14** with **0 copper**, Beggar selected as the current class, Concentration selected as the current ability, and Homeless selected as the property.

1. Leave **Beggar** and **Concentration** selected while they gain levels.
2. Switch to **Farmer** at Beggar level 10.
3. Switch among unlocked abilities according to the next requirement you want to meet.
4. Watch the net income before activating a property or miscellaneous possession. Expenses are charged continuously.
5. Reach 750 copper to reveal the Shop permanently.
6. Reach age 20 to reveal Automation and the compact current-task display permanently.
7. Reach age 25 to reveal the Amulet tab and its later milestones.

Only one class and one ability train at a time. Properties are mutually exclusive; miscellaneous possessions can be active together. If expenses reduce copper below zero, copper is clamped to zero and all paid possessions are deactivated.

The simulation advances at 20 fixed updates per second. Its base game speed is four in-game days per real second while alive and unpaused.
