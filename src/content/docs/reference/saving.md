---
title: Saving and Progress
description: Autosaves, exports, imports, and what carries between sessions.
category: reference
---

Legacy autosaves every five seconds while running. If a long frame crosses several save intervals, the game performs one current save instead of a burst of repeated saves.

The Settings tab lets you export a backup or import an earlier one. Keep exported saves somewhere safe before resetting progress or changing devices. If an import is rejected, check that the full export was copied without missing characters.

## Persisted

- currencies, age, lifetime records, every released task, recorded maximums, all 44 class worked peaks, mastery discoveries, unlocks, achievements, and rebirth counts;
- current class, ability, property, and active miscellaneous possessions;
- all 42 completed milestones, Chronicle records, four Echo assignments and ordered focuses, four remembered Resonance peaks, EPP balances and perk ranks, and Shop Steward settings;
- every Great task's promotion flag, live Great level/XP/maximum, archived normal level/XP/maximum/peak, and every Great item conversion;
- current, lifetime, and run Dark Matter; Collapse count; Dark Orbs; generator and upgrade ranks; doctrine choices; current and lifetime Metaverse Points; Metaverse count; perk choices; Hypercubes; altar ranks; Reality Boost timers; pending preservation snapshots; and ending completion;
- sticky task-header and audio settings;
- best class, property, and lifespan records used by the leaderboards.

## Session-only

- light-theme choice;
- automation toggles, including both auto-pause choices;
- three loadout slots;
- ability Skip choices;
- short timing progress between automatic choices.

Time spent with the game closed does not generate progress.

Current saves use signed schema v11. A valid signed v10 save remains loadable, but all expansion-only fields begin at their defaults because the older format did not contain that block. The unsigned v9 migration is accepted only when it contains valid base state and likewise begins the new systems at defaults. Malformed legacy data is rejected without deleting the source save.

Imported expansion values must be finite and non-negative; lifetime Dark Matter cannot be lower than either current or run Dark Matter; generator, Orb-upgrade, and altar ranks must be between 0 and 10; doctrine keys and branches must be valid; and counters cannot be negative. Invalid imports do not replace the current save.

Mastery tiers are not stored as a second value. The game derives all six tiers from saved class worked peaks. Normal rebirths preserve mastery discoveries, worked peaks, tiers, and bonuses. A full reset or anti-cheat release reset preserves card discovery but clears the worked-peak evidence, returning those cards to gray and disabling their bonuses until re-earned.

Echo focuses are saved during ordinary play, but Touch Eye, Embrace Evil, Transcend, Collapse, and Metaverse entry deliberately clear all focuses and assignments. All four remembered Resonance peaks survive.

Great task saves retain promotion status, live Great level/XP/maximum, archived normal level/XP/maximum, and archived normal peak. Every reset preserves promotion status and archived normal progress even when it clears live Great levels. Great item conversion IDs are permanent.
