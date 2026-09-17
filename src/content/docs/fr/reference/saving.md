---
title: Sauvegarde et progression
description: Sauvegardes automatiques, exportations, importations et ce qui est conservé entre les sessions.
category: reference
---

Legacy effectue une sauvegarde automatique toutes les cinq secondes pendant l'exécution. Si un long frame dépasse plusieurs intervalles de sauvegarde, le jeu effectue une seule sauvegarde actuelle au lieu d'une série de sauvegardes répétées.

La progression reste dans le format de sauvegarde v11 signé. La langue de l'interface sélectionnée est stockée séparément dans la version `legacy/preferences.json` et est exclue des signatures de progression, des empreintes d'intégrité durant l'exécution et de l'état du classement. Un fichier de préférences manquant, endommagé ou non accessible en écriture ne peut pas effacer la progression ni déclencher l'anti-triche.

La progression utilise deux emplacements de sauvegarde afin qu'une écriture interrompue—comme un plantage ou une coupure de courant—n'invalide pas la dernière copie vérifiée. Si l'un des emplacements est vérifié, Legacy charge cet emplacement de confiance sans condamnation anti-triche même si son jumeau est tronqué, mal formé ou présente un décalage de signature. Le rapport de chargement enregistre `RecoveredTrustedSibling`, puis seul l'emplacement rejeté est réécrit et vérifié ; l'emplacement de confiance survivant n'est jamais écrasé en premier. Un décalage de signature structurellement valide est considéré comme une altération uniquement lorsqu'aucun jumeau de confiance n'existe.

L'onglet Paramètres vous permet d'exporter une sauvegarde ou d'en importer une plus ancienne. Conservez les sauvegardes exportées dans un endroit sûr avant de réinitialiser la progression ou de changer d'appareil. Si une importation est rejetée, vérifiez que l'exportation complète a été copiée sans caractères manquants.

## Persisté

- devises, âge, records de durée de vie, chaque tâche publiée, maximums enregistrés, tous les 44 pics de classe travaillés, découvertes de maîtrise, déblocages, réussites et comptes de renaissance;
- classe actuelle, capacité, propriété et possessions diverses actives;
- tous les 42 jalons complétés, enregistrements de la Chronique, quatre missions Écho et focalisations ordonnées, quatre pics de Résonance mémorisés, soldes EPP et rangs d'avantages, et paramètres du Gérant de Boutique;
- drapeau de promotion de chaque tâche Great, niveau/XP/maximum en direct, niveau/XP/maximum/pic archivé normal, et chaque conversion d'objet Great;
- courant, durée de vie, et run Matière Noire ; Nombre d’effondrements ; Orbes Sombres ; rangs générateurs et d’amélioration ; choix de doctrine ; points actuels et à vie du Métavers ; compte du métavers ; choix d’avantages ; hypercubes ; rangs d’autel ; minuteurs Reality Boost ; instantanés de préservation en attente ; et fin d’achèvement ;
- en-tête de tâche et paramètres audio épinglés ;
- meilleurs records de classe, propriété et durée de vie utilisés par les classements.

## Données limitées à la session

- light-theme choix ;
- automatisation, incluant les deux choix d’auto-pause ;
- trois emplacements d’équipement ;
- capacité Passer les choix ;
- progression temporelle entre les choix automatiques.

Le temps passé avec le jeu fermé ne génère pas de progression.

Les sauvegardes actuelles utilisent le schéma signé v11. La localisation ne modifie pas ce schéma, ses chemins, ni aucun identifiant de contenu anglais canonique. Une sauvegarde signée v10 valide reste chargeable, mais tous les champs réservés aux extensions commencent à leurs valeurs par défaut car l'ancien format ne contenait pas ce bloc. La migration non signée v9 est acceptée uniquement lorsqu'elle contient un état de base valide et commence de même les nouveaux systèmes à leurs valeurs par défaut. Les données héritées mal formées sont rejetées sans supprimer la sauvegarde source.

Les valeurs d'expansion importées doivent être finies et non négatives ; la Matière Noire à vie ne peut être inférieure ni à la Matière Noire actuelle ni à celle du run ; les niveaux du générateur, de l'amélioration d'Orbe et de l'autel doivent être compris entre 0 et 10 ; les clés et branches de doctrine doivent être valides ; et les compteurs ne peuvent pas être négatifs. Les importations invalides ne remplacent pas la sauvegarde actuelle.

Les niveaux de maîtrise ne sont pas stockés comme une deuxième valeur. Le jeu déduit les six niveaux à partir des points culminants travaillés de la classe sauvegardée. Les renaissances normales conservent les découvertes de maîtrise, les points culminants travaillés, les niveaux et les bonus. Une réinitialisation complète ou une réinitialisation liée à l'anti-triche conserve la découverte des cartes mais efface les preuves des points culminants travaillés, ramenant ces cartes en gris et désactivant leurs bonus jusqu'à ce qu'ils soient à nouveau acquis.

Les focales Echo sont sauvegardées pendant le jeu ordinaire, mais Touch Eye, Embrace Evil, Transcend, Collapse et l'entrée dans le Metaverse effacent délibérément toutes les focales et affectations. Tous les quatre pics de Résonance mémorisés survivent.

Les sauvegardes des tâches Great conservent le statut de promotion, le niveau, l'XP et le maximum Great actuels, ainsi que le niveau, l'XP, le maximum et le pic normaux archivés. Chaque réinitialisation préserve le statut de promotion et la progression normale archivée même lorsqu'elle efface les niveaux Great actuels. Les identifiants de conversion d'objets Great sont permanents.
