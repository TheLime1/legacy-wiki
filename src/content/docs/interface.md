---
title: Interface
description: Tabs, sidebar information, settings, and accessibility behavior.
category: start
lastVerified: 2026-07-30
sourceCommit: bc406b2f9eb4b3c9bc7e54c1b1892f2837761a85
sourceFiles:
  - Code/Legacy/UI/LegacyApp.razor
  - Code/Legacy/UI/LegacySidebar.razor
  - Code/Legacy/UI/LegacyTaskTable.razor
gameVersion: 1.0.0
status: verified
---

The permanent top-level tabs are Classes, Abilities, Empire, Leaderboard, Achievements, and Settings. Shop appears after its unlock and Amulet appears from age 25.

The information panel reports age, current class and ability, copper, income, expenses, net flow, Happiness, lifespan, and time-warp values. A sticky-panel setting is saved. Dark mode is the default; the optional light theme is session-only.

Settings also provide music and UI-sound volume, separate mute controls, track controls, and the keyboard-shortcut reference. Audio state and the sticky-panel choice are included in the local save.

The ability table shows a **Skip** control when auto-learn is enabled. Skip changes only auto-learn eligibility; clicking the rest of the row still changes the manually selected ability.
