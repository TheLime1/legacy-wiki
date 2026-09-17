---
title: Interface
description: Onglets, informations de la barre latérale, paramètres et comportement en matière d'accessibilité.
category: start
---

L'ordre du contenu principal est **Classes, Capacités, Boutique, Amulette, Héroïque, Objets, Chronique**. La Boutique apparaît après son déblocage et l'Amulette apparaît à partir de l'âge de 25 ans. Héroïque résume les progrès des jalons et chaque chaîne de classes, capacités et objets Great. Les touches fléchées gauche et droite permettent de faire défiler uniquement les onglets de contenu visibles.

Empire, Classement, Réalisations, Paramètres et le lien vers le Wiki sont des boutons utilitaires dans l'en-tête supérieur plutôt que des entrées dans la ligne d'onglets de contenu.

Les objets constituent un inventaire de maîtrise en lecture seule regroupé en Travail Commun, Militaire, L'Association Arcanique, Le Vide, Conseil Galactique, Ascendance Obscure et Metaverse. La carte d'une classe apparaît après un vrai tick de travail. Survolez ou sélectionnez une carte pour voir son objet, ses effets actuels, le pic de travail et le niveau suivant via Ruby. L'inventaire reste lisible pendant l'emprisonnement.

La barre latérale indique l'âge, la classe et la capacité actuelles, le cuivre, les revenus, les dépenses, le flux net, le Bonheur, l'espérance de vie et les valeurs de distorsion temporelle. La progression de l'expansion ajoute EPP, chaque cible d'Écho débloquée, la Matière Noire, les Orbes Noirs, les Points Metaverse et les Hypercubes lorsque cela est pertinent. Les grandes valeurs de cuivre utilisent des dénominations compactes nommées, y compris Émeraude à $10^{30}$ et Rubis à $10^{60}$.

Après 1 vie de Matière Noire, l'Amulette affiche la Matière Noire actuelle, celle de toute la vie et celle de la course ; la prochaine récompense de l'Effondrement ; les lignes du générateur d'Orbes et des améliorations ; et les cartes de doctrine. Sa vue Métavers ajoute la prochaine récompense en Points, les avantages préparatoires remboursables, les contrôles du Hypercube et de l'autel, et le statut de Boost de Réalité. La Chronique montre les jours de jeu de toute la vie, les plus grandes récompenses, les jalons permanents et les vies récentes.

L'enregistrement **En-tête fixe** La configuration fixe l'en-tête de la colonne Classes ou Capacités pendant que son tableau défile et est activée par défaut. Le mode sombre est celui par défaut ; le thème clair optionnel est uniquement pour la session.

Les paramètres proposent des choix en anglais, français et russe à l’aide de cartes drapeaux britanniques, françaises et russes. Un nouveau profil doit choisir une langue avant que la simulation, la saisie ou la sauvegarde automatique ne commence. Les profils existants restent en anglais et peuvent changer à tout moment. Un changement de langue rafraîchit immédiatement l’interface complète sans changer la langue globale de s&box.

Les paramètres fournissent également la musique et le volume sonore de l’interface, des contrôles de muet séparés, des contrôles de piste et la référence clavier-raccourci. L’état audio et le choix du titre épinglé sont inclus dans la sauvegarde locale. La langue est stockée séparément dans `legacy/preferences.json` ; si cette préférence ne peut pas être écrite, la langue sélectionnée reste active pour la session en cours et un avertissement apparaît sans interruption de lecture.

Les nombres visibles utilisent les séparateurs décimaux et de regroupement de la langue sélectionnée. Les suffixes de grandeur compacts et les symboles monétaires restent inchangés. Les contrôles peuvent s'agrandir et le texte créé s'adapte de manière à ce que les étiquettes traduites et les valeurs numériques valides les plus courtes ou les plus longues restent lisibles ; seuls les noms de joueurs sans limite et les URL peuvent être visuellement raccourcis, leur texte complet étant conservé pour l'accessibilité.

Les en-têtes de classe et de catégorie de compétence utilisent des motifs artistiques thématiques, et les lignes de tâches sont plus grandes pour une meilleure lisibilité. Le tableau des compétences affiche un **Sauter** contrôle lorsque l'apprentissage automatique est activé, un **E** le contrôle après que Echo I se débloque, et Great contrôle de promotion quand éligible. La Boutique fournit des contrôles de conversion Great séparés. Sauter les changements ne fait qu'apprendre automatiquement l'éligibilité ; E met en file un focus Echo ; cliquer sur le reste de la ligne sélectionne manuellement la capacité et désactive l'apprentissage automatique. Les cartes Echo et la barre latérale affichent l'efficacité, la cible, la progression de niveau, le taux de XP et le pic de Résonance mémorisé ; **Effacer les Echo** supprime tous les focus.
