---
title: Achievements
description: Achievement categories, scoring, progression, and permanence.
category: systems
lastVerified: 2026-07-30
sourceCommit: bc406b2f9eb4b3c9bc7e54c1b1892f2837761a85
sourceFiles:
  - Code/Legacy/Content/LegacyAchievements.cs
  - Code/Legacy/Services/LegacyAchievementPlatformBridge.cs
gameVersion: 1.0.0
status: verified
---

Legacy defines 40 account-level achievements worth 1,000 points in total. They are grouped into Life, Training, Possessions, and Legacy.

Life achievements track ages 15, 20, 25, 65, 200, 1,000, and 10,000 plus copper holdings of one million, one trillion, and one quintillion.

Training achievements cover specific task peaks and broad milestones such as any class or ability at level 100. Possession achievements begin with opening the Shop and activating the Book, then follow major properties through Galactic Throne.

Legacy achievements track each rebirth path, repeat completions, total rebirths, Evil, Essence, and final completion. **A Legacy Complete** requires the other 39 achievements.

Completion is monotonic: once an achievement is earned, it remains completed across resets and rebirths. The game also bridges these IDs to s&box platform achievements.
