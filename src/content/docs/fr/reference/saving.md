---
title: 'Sauvegarde et progression'
description: 'Sauvegardes, imports et sécurité de la progression.'
category: reference
---

Legacy sauvegarde automatiquement toutes les cinq secondes. Les sauvegardes de progression restent au schéma signé v11; la langue est conservée séparément dans les préférences. Changer de langue ou perdre ce fichier ne peut donc pas effacer la progression.

Deux emplacements protègent contre une coupure pendant l'écriture. Si l'un est tronqué, malformé ou invalide mais que l'autre est vérifié, le jeu charge le fichier fiable sans sanction anti-triche puis répare seulement l'emplacement rejeté. Une signature invalide sans copie fiable reste considérée comme une altération. Les exports/imports, v10 signé et migration v9 restent pris en charge.
