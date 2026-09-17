---
title: Le Métavers
description: Récompenses du métavers, configurations d'avantages, hypercubes, autels, boost de réalité, classes et la fin.
category: systems
---

Darkness XIII à 1 000 000 de Matière Sombre cumulée débloquée **Métavers** entrée. La récompense utilise la Matière Sombre brute gagnée pendant le run actuel, donc dépenser de la Matière Sombre ne la réduit pas.

## Récompense de points du Métavers

Soit $R$ la Matière Sombre gagnée pendant le run actuel et $y=R/1000$. Aucune récompense n'est disponible pendant $y<1$. Sinon :

$$
\operatorname{MP}=\left\lfloor
y^{1.1}\left(1+0.1\log_{10}y\right)M_{\mathrm{MP}}
\right\rfloor,
$$

où $M_{\mathrm{MP}}=1.25$ avec le **gain de Métavers +25%** avantage et $1$ sinon.

Entrer dans le Metaverse entraîne un Effondrement, puis efface la Matière Noire et les Orbes Noires utilisées, les Hypercubes, les autels, le Booster de Réalité, ainsi que les améliorations et doctrines noires non conservées. La Matière Noire à vie, les Points Metaverse, le statut de promotion Great, les conversions d'objet Great, la progression de maîtrise, les souvenirs de Résonance, les jalons, les avantages du Mal et les archives de la Chronique sont conservés.

Le jeu se met en pause sur un écran de préparation avant la prochaine partie. Les avantages peuvent être sélectionnés et remboursés à cet endroit, puis deviennent fixes jusqu'à la prochaine entrée dans le Metaverse.

## Avantages de la partie

La charge d'avantages remboursable se débloque à 3 Points Metaverse à vie.

| Avantage                                   |   Coût | Effet                                                                                                                         |
| ------------------------------------------ | -----: | ----------------------------------------------------------------------------------------------------------------------------- |
| Doubler les Hypercubes                     |   5 MP | ×2 Génération d'Hypercube                                                                                                     |
| Matière Noire de Graine                    |  10 MP | Commencer avec $\min(1000,\lfloor0.001\times\text{lifetime DM}\rfloor)$ DM dépensable qui ne compte pas comme gains de course |
| Conserver les rangs de l'Orbe              |  25 MP | Restaurer les rangs précédents du générateur d'Orbe et des améliorations d'Orbe                                               |
| Gain de Métaverse +25%                     |  50 MP | ×1,25 Gain de Points Métaverse                                                                                                |
| Supprimer les inconvénients de la doctrine | 100 MP | Conserver les avantages de la doctrine sélectionnée sans leurs pénalités                                                      |
| Doctrines doubles                          | 200 MP | Permet d'acheter les deux branches de chaque doctrine                                                                         |
| Préserver les doctrines                    | 300 PM | Restaurer les sélections de doctrine de la session précédente                                                                 |

Préserver une doctrine qui possède les deux branches nécessite également des doctrines doubles.

## Hypercubes et autels

Le Metaverse I débloque les hypercubes. Avec le rang d'autel hypercube-taux $a$:

$$
\operatorname{Hypercubes/day}=0.03M_{\mathrm{item}}M_{\mathrm{perk}}(1.25)^a,
$$

où le Briseur d'Axiom fournit $M_{\mathrm{item}}=2$ pendant qu'il est actif et Double Hypercubes fournit $M_{\mathrm{perk}}=2$. La limite de stockage est :

$$
10{,}000(1+\text{lifetime MP})^2.
$$

Chaque autel a dix rangs et coûte $B\times3^r$ Hypercubes par rang $r+1$:

| Autel                     | Coût de base $B$ | Effet par rang                                                           |
| ------------------------- | ---------------: | ------------------------------------------------------------------------ |
| Autel de l'Hypercube      |              100 | +25% de génération d'Hypercube                                           |
| Autel de la Récurrence    |              500 | ×0,95 sur le temps de recharge du Boost de Réalité, minimum 120 secondes |
| Autel de la Durée         |            1,000 | +10 secondes actives du Boost de Réalité                                 |
| Autel de l'Essence        |            2,500 | +25% de gain d'Essence                                                   |
| Autel de la Matière Noire |            5,000 | +25% de gain de Matière Noire                                            |

## Boost de Réalité

Le Boost de Réalité multiplie la vitesse du jeu par **5**. Sa durée est de $60+10d$ secondes actives au rang de l'Autel de la Durée $d$. Son temps de recharge est de $\max(120,600\times0.95^c)$ secondes actives au rang de l'Autel de la Récurrence $c$. Il ne peut être activé que lorsqu'on est vivant, non en pause et en dehors de la prison.

## Chaîne de classes du métavers

| Classe                   | PM à vie | Exigence supplémentaire                  | XP maximum de base | Cuivre de base/jour |
| ------------------------ | -------: | ---------------------------------------- | -----------------: | ------------------: |
| Joueur un                |        1 | Aucun                                    |          $10^{39}$ |  $2.5\times10^{26}$ |
| Usurpateur de la réalité |       10 | Joueur un Great niveau 20                |          $10^{41}$ |           $10^{28}$ |
| Axiome Souverain         |       30 | Usurpateur de la réalité Great niveau 20 |          $10^{43}$ |    $5\times10^{29}$ |
| L'absolu non écrit       |      100 | Great Axiom Sovereign niveau 20          |          $10^{45}$ |  $2.5\times10^{31}$ |

Ces classes utilisent leur propre chaîne Great. La première peut être promue dès son déblocage ; chaque classe suivante exige que la classe Great précédente atteigne le niveau 20.

## Fin

Métavers VI se termine à 300 Points du Métavers cumulés. Atteindre le niveau Great 20 avec **L'absolu non écrit** débloque alors **Legacy terminé**. Confirmer la fin enregistre définitivement l'achèvement et laisse la simulation ouverte pour continuer à jouer.
