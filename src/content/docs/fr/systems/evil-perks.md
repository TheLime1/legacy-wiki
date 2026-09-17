---
title: Avantages du Mal
description: Génération de points d'avantages du mal, niveaux de mise à niveau permanents, coûts et exigences d'âge effectives.
category: systems
---

Le premier **Embrasser le Mal** débloque des points d'avantages du mal, indiqués comme EPP dans l'Amulette et la barre latérale. EPP n'est gagné que lorsque la vie progresse activement ; le temps en pause, mort, en prison ou fermé ne produit aucun point.

## Génération

Avec le mal actuel $V$ et l'Essence $S$, EPP généré par jour dans le jeu est :

$$
\operatorname{EPP/day}=
\frac{\log_{10}(1+V)\left(1+0.25\log_{10}(1+S)\right)}{365}.
$$

Terminer **Essence VIII** à 250 000 Essence multiplie ce taux par 1,25. Les EPP actuels, les EPP cumulés et les rangs achetés survivent à chaque renaissance normale.

## Améliorations permanentes

Tous les achats sont manuels. Si le rang actuel est $r$, la formule indiquée correspond au coût du rang suivant.

| Avantage                | Effet par rang                    | Maximum | Rang suivant-cost | Déblocage                |
| ----------------------- | --------------------------------- | ------: | ----------------: | ------------------------ |
| Précédent Œil           | Besoin de toucher œil −5          |      10 |       $5\cdot2^r$ | Première embrasse le Mal |
| Ancienne période du mal | Besoin d’embrasser le mal −10 ans |      10 |      $10\cdot3^r$ | Première embrasse le mal |
| Vide Antérieur          | Exigence de Vide −100 ans         |       9 |      $25\cdot3^r$ | Premier Étreinte du Mal  |
| Galactique Antérieur    | Exigence Galactique −1 000 ans    |       9 |      $50\cdot3^r$ | Premier Étreinte du Mal  |
| Marché de l'Essence     | Récompense d'Essence +10%         |      10 |     $100\cdot4^r$ | 150 000 000 d'Essence    |

Au rang maximal, les quatre seuils d'âge deviennent âge 15 pour l'Œil Tactile, âge 100 pour Étreinte du Mal, âge 100 pour le Vide, et âge 1 000 pour le Conseil Galactique. Les valeurs réduites sont utilisées par les vérifications réelles de déverrouillage et de renaissance et sont affichées dans le texte des exigences.

:::caution
Les interrupteurs facultatifs **Pause avant le Vide** et **Pause avant le Conseil Galactique** déclenchent toujours une pause aux âges d'origine de 1 000 et 10 000 ans. Avec les rangs Vide Antérieur ou Galactique Antérieur, le contenu associé peut se débloquer avant cette pause.
:::

Les récompenses de jalons d'Essence qui multiplient le même canal s'appliquent de manière multiplicative. Par exemple, Essence IV et Essence IX se combinent comme $1.10\times1.15=1.265$ avant que les rangs du Marché d'Essence ne soient appliqués.
