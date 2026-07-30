---
title: Controls
description: Keyboard, mouse, and tab controls in Legacy.
category: start
lastVerified: 2026-07-30
sourceCommit: bc406b2f9eb4b3c9bc7e54c1b1892f2837761a85
sourceFiles:
  - Code/Legacy/UI/LegacyApp.razor
  - Code/Legacy/Simulation/LegacySimulation.cs
  - ProjectSettings/Input.config
gameVersion: 1.0.0
status: verified
---

Most actions use the mouse. Click a class or ability row to select it, click a property to replace the active property, and click a miscellaneous possession to toggle it.

| Input              | Action                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------- |
| Left / Right arrow | Select the previous or next visible tab                                                     |
| Space              | Pause or resume                                                                             |
| P                  | Toggle auto-promote after Automation unlocks                                                |
| L                  | Toggle auto-learn after Automation unlocks                                                  |
| 1, 2, or 3         | Load that session-only loadout                                                              |
| Alt + 1, 2, or 3   | Save, then immediately load that loadout                                                    |
| Escape             | Close Empire fullscreen, close the review prompt, or open the review prompt after a rebirth |

The Alt shortcut intentionally runs both save and load handling. Loadouts store the selected class, ability, property, and miscellaneous possessions. Loading any slot disables auto-learn and auto-promote, even when the slot is empty.
