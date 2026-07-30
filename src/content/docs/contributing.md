---
title: Wiki Contribution Guide
description: How to verify, edit, test, and submit Legacy wiki content.
category: help
lastVerified: 2026-07-30
sourceCommit: bc406b2f9eb4b3c9bc7e54c1b1892f2837761a85
sourceFiles:
  - Code/Legacy/Content/LegacyContent.cs
gameVersion: 1.0.0
status: verified
---

Every factual mechanics change needs a source file and commit SHA. Do not guess values from memory or copy a claim forward after the underlying code changes.

1. Create a branch in `TheLime1/legacy-wiki`.
2. Update Markdown/MDX under `src/content/docs/` and structured data under `src/data/`.
3. Update `lastVerified`, `sourceCommit`, `sourceFiles`, `gameVersion`, and `status`.
4. Use a GitHub permalink pinned to the verified commit for important technical claims.
5. Run `npm ci` and `npm run check`.
6. Preview the production build with `npm run preview` and test at the configured nested base path.
7. Open a pull request describing the in-game behavior, source evidence, and affected pages.

Use `verified` only when the complete claim is demonstrated by code or public game data. Use `partially verified` when only part can be proven and identify the boundary in the page. Use `unverified` for clearly labelled author notes awaiting evidence.

The wiki stays focused on Legacy terminology. Avoid comparisons to unrelated games and avoid exposing private code, secrets, credentials, or irrelevant implementation details.
