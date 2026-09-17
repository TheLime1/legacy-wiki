---
title: Beneficios Malvados
description: Generación de Puntos de Beneficio Malvado, rangos de mejora permanentes, costos y requisitos de edad efectivos.
category: systems
---

El primero **Abrazar el Mal** desbloquea Puntos de Beneficio Malvado, mostrados como EPP en el Amuleto y la barra lateral. EPP se gana solo mientras una vida avanza activamente; el tiempo pausado, muerto, encarcelado o con el juego cerrado no produce ninguno.

## Generación

Con el Mal actual $V$ y la Esencia $S$, EPP generado por día en el juego es:

$$
\operatorname{EPP/day}=
\frac{\log_{10}(1+V)\left(1+0.25\log_{10}(1+S)\right)}{365}.
$$

Completando **Esencia VIII** a 250,000 Esencia multiplica esta tasa por 1,25. La EPP actual, la EPP de por vida y los rangos comprados sobreviven a cada renacimiento normal.

## Mejoras permanentes

Todas las compras son manuales. Si el rango actual es $r$, la fórmula indicada es el costo del siguiente rango.

| Beneficio          | Efecto por rango                         | Máximo | Costo del siguiente rango | Desbloqueo adicional      |
| ------------------ | ---------------------------------------- | -----: | ------------------------: | ------------------------- |
| Ojo temprano       | Requisito del Ojo del Toque −5 años      |     10 |               $5\cdot2^r$ | Primer Abrazo a la Maldad |
| Maldad temprana    | Requisito de Abrazo a la Maldad −10 años |     10 |              $10\cdot3^r$ | Primer Abrazo a la Maldad |
| Vacío Anterior     | Requisito de Vacío −100 años             |      9 |              $25\cdot3^r$ | Primera Abraza el Mal     |
| Galáctico Anterior | Requisito Galáctico −1,000 años          |      9 |              $50\cdot3^r$ | Primera Abraza el Mal     |
| Trato de Esencia   | Recompensa de Esencia +10%               |     10 |             $100\cdot4^r$ | 150,000,000 Esencia       |

Al alcanzar el rango máximo, los cuatro umbrales de edad se convierten en edad 15 para Ojo Tocado, edad 100 para Abraza el Mal, edad 100 para el Vacío y edad 1,000 para el Consejo Galáctico. Los valores reducidos se usan en la verificación real de desbloqueo y renacimiento y se muestran en el texto del requisito.

:::caution
Los interruptores opcionales **Pausa antes del Vacío** y **Pausa antes del Consejo Galáctico** siguen pausando en las edades originales de 1,000 y 10,000. Con rangos de Vacío Temprano o Galáctico Temprano, el contenido relacionado puede desbloquearse antes de que ocurra esa pausa.
:::

Las recompensas de hitos de Esencia que multiplican el mismo canal se aplican de manera multiplicativa. Por ejemplo, Esencia IV y Esencia IX se combinan como $1.10\times1.15=1.265$ antes de que se apliquen los rangos de Acuerdo de Esencia.
