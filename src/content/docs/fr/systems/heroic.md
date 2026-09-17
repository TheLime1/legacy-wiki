---
title: Progression Héroïque
description: Étapes héroïques, promotions de tâche Great, conversions d'objets Great, formules, et comportement de réinitialisation.
category: systems
---

L'onglet **Héroïque** suivi quatorze étapes héroïques basées sur l'Essence et la progression Great de chaque classe, capacité, propriété et possession diverse éligible.

## Portail de promotion Great

Les classes normales, capacités et possessions originales peuvent devenir Great après que les trois exigences suivantes soient remplies :

1. Transcender au moins une fois.
2. Atteindre 5 000 000 d'Essence et compléter Héroïque I.
3. Atteindre une normale **Celui au-dessus de tous** sommet de 2 000.

La cible doit également être débloquée, et la promotion ou la conversion n'est pas disponible lorsqu'elle est emprisonnée. Un Héroïque I précédemment terminé satisfait définitivement sa partie Essence de la porte.

Les classes du Métavers utilisent leur propre porte séquentielle décrite dans [Le Métavers](../metaverse/).

## Jalons héroïques

Les jalons sont permanents une fois que leur seuil d'Essence est atteint.

| Jalon         |        Essence | Récompense                                     |
| ------------- | -------------: | ---------------------------------------------- |
| Héroïque I    |      5,000,000 | Débloquer les promotions Great                 |
| Héroïque II   |     10,000,000 | ×2 Great XP                                    |
| Héroïque III  |     20,000,000 | ×2 Great XP                                    |
| Héroïque IV   |     30,000,000 | ×2 Great XP                                    |
| Héroïque V    |     50,000,000 | ×2 Great XP                                    |
| Héroïque VI   |    100,000,000 | ×2 Great XP                                    |
| Héroïque VII  |    150,000,000 | ×2 Great XP et débloquer Négociation d'Essence |
| Héroïque VIII |    200,000,000 | ×2 Great XP                                    |
| Héroïque IX   |    300,000,000 | ×2 Great XP                                    |
| Heroic X      |    400,000,000 | ×2 Great XP                                    |
| Heroic XI     |    500,000,000 | ×2 Great XP                                    |
| Heroic XII    |    750,000,000 | ×2 Great XP                                    |
| Heroic XIII   | 10,000,000,000 | ×2 Great XP                                    |
| Héroïque XIV  | 50,000,000,000 | Débloque l'Effondrement                        |

Les douze Great-XP se multiplient entre eux, jusqu’à $2^{12}=4096$ fois Great XP.

## Grandes tâches

La promotion est permanente et archive le niveau normal de la tâche, le maximum, les XP et le plus haut niveau normal atteint. La version Grandes commence au niveau 0 avec ses propres XP et historique de niveau maximum. Les capacités de résonance ne peuvent pas devenir Grandes.

Au sein de chaque classe ou famille de capacités, la première tâche peut être promue immédiatement après le portail. Chaque tâche suivante nécessite la tâche Grande précédente au niveau 20.

| Chaîne Grandes            | Plage de rang | Ordre                                             |
| ------------------------- | ------------: | ------------------------------------------------- |
| Travail commun            |           1–6 | Mendiant à marchand                               |
| Militaire                 |          7–14 | Écuyer par le Lieutenant Général                  |
| L'Association des Arcanes |         15–22 | Étudiant par l'Impérateur                         |
| Le vide                   |         23–30 | Corrompu par le Dieu de l'Abîme                   |
| Conseil Galactique        |         31–35 | Voyageur Éternel par Celui au-dessus de tout      |
| Fondamentaux              |           1–4 | Concentration par la Méditation                   |
| Combat                    |           5–7 | Force grâce à la Mémoire Musculaire               |
| Magie                     |          8–14 | Contrôle du Mana par le Lavage de Cerveau         |
| Magie noire               |         15–24 | Influence Sombre à travers le Mal Incarné         |
| Manipulation du vide      |         25–31 | Vœu Absolu par la Manipulation de l'Abîme         |
| Pouvoirs célestes         |         32–35 | Longévité Cosmique par le Commandement Galactique |
| Toute-Puissance           |         36–39 | Yin Yang à travers l'Épiphanie                    |

Le rang de la tâche est l'ordre de la source plus un, compté séparément pour les classes et les capacités. Ascendance Sombre, Ténèbres et Métavers continuent avec les chaînes décrites sur leurs propres pages.

Pour le rang Great $r$ et le niveau Great $L$, la condition pour le niveau suivant est :

$$
\operatorname{maxXP}_{\mathrm{Great}}=
\operatorname{round}\left(10^{10}(1.7)^r(L+1)(1.01)^L\right).
$$

Grandes capacités calculent leurs effets avec le niveau effectif :

$$
L_{\mathrm{effective}}=\max(P_{\mathrm{normal}},2000)+100L_{\mathrm{Great}},
$$

où $P_{\mathrm{normal}}$ est le sommet normal archivé. Grande Récupération Cosmique est limitée à un effet de rétention ×2.

Pour une classe Grande avec un revenu de base ordinaire $I_0$, niveau Grand $L$, et rang $r$, le revenu avant les multiplicateurs de classe habituels est :

$$
I_{\mathrm{Great}}=I_0\times5\times10^{15}\times10^{r/3}
\left(1+\log_{10}(L+1)\right).
$$

### Comportement de réinitialisation

| Réinitialiser  | Rétention maximale Grande                                         |
| -------------- | ----------------------------------------------------------------- |
| Toucher l’Œil  | Niveau Grand actuel ou enregistré le plus élevé                   |
| Embracing Evil | 0                                                                 |
| Transcend      | $\lfloor\text{Cosmic Recollection}\times\text{Great peak}\rfloor$ |
| Collapse       | 0                                                                 |

Le statut de promotion Great et la progression normale archivée restent permanents lors de ces réinitialisations.

## Conversions d'objets Great

Chaque propriété payante et possession diverse du catalogue d'origine peut être convertie dans sa propre chaîne de la Boutique. Sans-abri et les nouvelles possessions de l'extension ne sont pas éligibles. Convertir un objet actif le retire de l'équipement actuel, mais modifie définitivement ses caractéristiques.

Le rang de l'objet suit l'ordre d'origine des objets payants : Tente vaut 1, Trône Galactique 15, Livre 16 et Fragment du Multivers 33. Pour le rang $r$ :

$$
X_{\mathrm{Great}}=\max\left(10^6X_0,\ 10^{20}\times10^{r/3}\right),
$$

$$
M_{\mathrm{Great}}=1+4(M_0-1).
$$

$X_0$ est une dépense quotidienne ordinaire et $M_0$ est l'effet ordinaire. Les propriétés et possessions diverses progressent à travers des chaînes de conversion séparées ; chaque conversion après la première nécessite l'élément précédent dans cette chaîne.

Héroïque XIV mène directement à [Ténèbres et Effondrement](../darkness/).
