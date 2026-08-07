---
title: Saving and Progress
description: Autosaves, exports, imports, and what carries between sessions.
category: reference
---

Legacy autosaves every five seconds while running.

The Settings tab lets you export a backup or import an earlier one. Keep exported saves somewhere safe before resetting progress or changing devices. If an import is rejected, check that the full export was copied without missing characters.

## Persisted

- currencies, age, lifetime records, tasks, recorded maximums, class worked peaks, mastery discoveries, unlocks, achievements, and rebirth counts;
- current class, ability, property, and active miscellaneous possessions;
- automation toggles;
- sticky sidebar and audio settings;
- best class, property, and lifespan records used by the leaderboards.

## Session-only

- light-theme choice;
- three loadout slots;
- ability Skip choices;
- short timing progress between automatic choices.

Time spent with the game closed does not generate progress.

Mastery tiers are not stored as a second value. The game derives them from the saved class worked peaks, so existing signed v10 saves receive the matching items retroactively without a save-version change. Normal rebirths preserve mastery discoveries, worked peaks, tiers, and bonuses. A full reset or anti-cheat release reset preserves card discovery but clears the worked-peak evidence, returning those cards to gray and disabling their bonuses until re-earned.
