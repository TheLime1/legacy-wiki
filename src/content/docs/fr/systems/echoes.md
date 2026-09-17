---
title: Échos et Résonance
description: Les quatre échos, souvenirs de Résonance, entraînement automatique, F se concentre, efficacité et réinitialisations.
category: systems
---

Les échos entraînent des capacités supplémentaires débloquées en même temps que la capacité principale. Chaque Écho se débloque avec une capacité de Résonance correspondante :

| Écho     | Débloquer                        | Résonance     | Efficacité maximale de 100% |
| -------- | -------------------------------- | ------------- | --------------------------: |
| Écho I   | Première Embrasser le Mal        | Résonance I   |                       1,000 |
| Écho II  | Première Transcendance           | Résonance II  |                       1,250 |
| Écho III | Premier Effondrement             | Résonance III |                       1,500 |
| Écho IV  | Première entrée dans le Métavers | Résonance IV  |                       1,750 |

## Choisir une capacité

Sans focalisation E, chaque Écho choisit automatiquement la capacité éligible avec le temps estimé le plus court jusqu'à son prochain niveau. Ce routage est indépendant de l'Auto-apprentissage principal.

- Un Écho ne peut pas entraîner la capacité principale actuellement sélectionnée.
- Un Écho ne peut pas entraîner sa propre Résonance correspondante, mais il peut entraîner la Résonance d'un autre Écho.
- Une capacité ne peut pas être entraînée par plus d'un Écho.
- L'Auto-apprentissage évite les capacités déjà assignées à un Écho.

Cliquez sur le **E** contrôle dans une rangée de capacités pour ajouter ou retirer un focus. Les focus conservent leur ordre de sélection et sont attribués en priorité aux Échos disponibles les plus puissants. Les focus supplémentaires restent en attente jusqu'à ce qu'un Écho devienne disponible. **E est un contrôle de ligne, pas un raccourci clavier.**

Sélectionner une capacité ciblée comme capacité principale supprime son focus Écho. La barre latérale montre la cible actuelle de chaque Écho débloqué, la progression du niveau et le taux de XP. **Clear Echoes** supprime chaque mise au point et ramène le routage en mode automatique.

## Efficacité de résonance

Laisser $p_i$ être le niveau de résonance le plus mémorisé $i$ et $T_i$ sa cible du tableau ci-dessus. Echo $i$ s'entraîne à :

$$
E_i(p_i)=
\begin{cases}
0.25+0.75\dfrac{p_i}{T_i}, & p_i\le T_i,\\
1+0.05\log_2\left(\dfrac{p_i}{T_i}\right), & p_i>T_i.
\end{cases}
$$

Chaque Echo commence à **25%**, atteint **100%** à sa cible, et gagne cinq points de pourcentage supplémentaires chaque fois que son pic mémorisé dépasse cette cible. L'XP d'Echo est le gain complet actuel en XP de l'aptitude cible multiplié par cette efficacité, y compris le Great XP lorsque la cible est promue.

Les valeurs exactes calibrées de XP maximum de base pour Résonance I–IV sont $0.00030536056011010876$, $0.00003972362997298969$, $0.000004881366014841863$, et $0.00000045896650664729693$.

## Sauvegarde et renaissances

Les pics de résonance mémorisés et les choix ordinaires de E-focus sont enregistrés. Toucher l’Œil, Embrasser le Mal, Transcender, S’effondrer et entrer dans le Métavers effacent tous les focus et affectations, mais chaque pic mémorisé survive.

Voir [Avantages du Mal](../evil-perks/) pour l’autre système débloqué par le premier Embrasser le Mal.
