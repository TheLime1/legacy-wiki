---
title: Saving and Persistence
description: Autosaves, save location, export/import, migrations, and session-only state.
category: reference
lastVerified: 2026-07-30
sourceCommit: bc406b2f9eb4b3c9bc7e54c1b1892f2837761a85
sourceFiles:
  - Code/Legacy/Persistence/LegacyPersistenceService.cs
  - Code/Legacy/Persistence/LegacySaveSnapshot.cs
  - Code/Legacy/Persistence/LegacySaveValidation.cs
  - Code/Legacy/UI/LegacyApp.razor
gameVersion: 1.0.0
status: verified
---

Legacy autosaves every five seconds while running and saves to the s&box data filesystem at `legacy/save.json`. The current document format is `legacy-save` version 9.

Exports are compact JSON wrapped in base64. Imports accept whitespace, URL-safe `-` and `_` characters, and missing base64 padding. Input is rejected above 12 MiB, when base64 or JSON is invalid, when the format/version is invalid, or when validation fails.

Older supported versions are migrated conservatively. The loader reconstructs only values it can prove from retained state and rebirth counts. Saves from a future format version are rejected.

## Persisted

- currencies, age, lifetime records, tasks, recorded maximums, unlocks, achievements, and rebirth counts;
- current class, ability, property, and active miscellaneous possessions;
- automation toggles;
- sticky sidebar and audio settings;
- leaderboard-related best class, property, and lifespan records.

## Session-only

- light-theme choice;
- three loadout slots;
- ability Skip choices;
- fixed-step and auto-learn timing accumulators.

No offline-progress calculation exists in the inspected source. Time closed does not produce a documented catch-up reward.
