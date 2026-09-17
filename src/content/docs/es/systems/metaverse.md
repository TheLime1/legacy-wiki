---
title: El Metaverso
description: Premios del Metaverso, configuraciones de ventajas, Hipercubos, altares, Impulso de Realidad, clases y el final.
category: systems
---

Darkness XIII al desbloquear 1,000,000 de Materia Oscura de por vida **Metaverso** entrada. El premio usa Materia Oscura bruta obtenida durante la corrida actual, por lo que gastar Materia Oscura no la reduce.

## Premio de Puntos del Metaverso

Sea $R$ la Materia Oscura obtenida en la corrida actual y $y=R/1000$. Ningún premio está disponible mientras $y<1$. De lo contrario:

$$
\operatorname{MP}=\left\lfloor
y^{1.1}\left(1+0.1\log_{10}y\right)M_{\mathrm{MP}}
\right\rfloor,
$$

donde $M_{\mathrm{MP}}=1.25$ con el **ganancia del Metaverso +25%** ventaja y $1$ de lo contrario.

Entrar al Metaverso realiza un Colapso, luego borra la Materia Oscura y Orbes Oscuros disponibles, Hipercubos, altares, el Impulso de Realidad, y las actualizaciones oscuras y doctrinas no preservadas. La Materia Oscura, Puntos del Metaverso, estado de promoción Great, conversiones de ítems Great, progreso de maestría, recuerdos de Resonancia, hitos, ventajas del Mal y registros de la Crónica de por vida sobreviven.

El juego se pausa en una pantalla de preparación antes de la siguiente ejecución. Allí se pueden seleccionar y reembolsar ventajas, que luego permanecen fijas hasta la siguiente entrada al Metaverso.

## Ventajas de ejecución

La carga de ventajas reembolsables se desbloquea con 3 Puntos del Metaverso de por vida.

| Ventaja                             |  Costo | Efecto                                                                                                                         |
| ----------------------------------- | -----: | ------------------------------------------------------------------------------------------------------------------------------ |
| Duplicar Hipercubos                 |   5 MP | ×2 Generación de Hípercubo                                                                                                     |
| Semilla de Materia Oscura           |  10 MP | Comenzar con $\min(1000,\lfloor0.001\times\text{lifetime DM}\rfloor)$ DM disponible que no cuenta como ganancias de la partida |
| Preservar rangos de Orbe            |  25 MP | Restaurar el generador de Orbes anterior y los rangos de mejora de Orbe                                                        |
| Ganancia en el Metaverso +25%       |  50 MP | ×1.25 Ganancia de Puntos del Metaverso                                                                                         |
| Eliminar desventajas de la doctrina | 100 MP | Mantener los beneficios de la doctrina seleccionada sin sus penalizaciones                                                     |
| Doctrinas duales                    | 200 MP | Permitir la compra de ambas ramas de cada doctrina                                                                             |
| Preservar doctrinas                 | 300 PM | Restaurar selecciones de doctrina de la ejecución anterior                                                                     |

Preservar una doctrina que posee ambas ramas también requiere Doctrinas Dobles.

## Hipercubos y altares

Metaverso I desbloquea Hipercubos. Con altar de rango de tasa de Hipercubo $a$:

$$
\operatorname{Hypercubes/day}=0.03M_{\mathrm{item}}M_{\mathrm{perk}}(1.25)^a,
$$

donde el Rompedor de Axiomas suministra $M_{\mathrm{item}}=2$ mientras está activo y suministra Doble Hipercubos $M_{\mathrm{perk}}=2$. El límite de almacenamiento es:

$$
10{,}000(1+\text{lifetime MP})^2.
$$

Cada altar tiene diez rangos y cuesta $B\times3^r$ Hipercubos por rango $r+1$:

| Altar                   | Costo base $B$ | Efecto por rango                                                             |
| ----------------------- | -------------: | ---------------------------------------------------------------------------- |
| Altar del Hipercubo     |            100 | +25% de generación de Hipercubos                                             |
| Altar de Recurrencia    |            500 | ×0,95 de tiempo de reutilización de Impulso de Realidad, mínimo 120 segundos |
| Altar de Duración       |          1,000 | +10 segundos activos de Impulso de Realidad                                  |
| Altar de Esencia        |          2,500 | +25% de ganancia de Esencia                                                  |
| Altar de Materia Oscura |          5,000 | +25% de ganancia de Materia Oscura                                           |

## Impulso de Realidad

El Impulso de Realidad multiplica la velocidad del juego por **5**. Su duración es de $60+10d$ segundos activos en el rango del Altar de Duración $d$. Su tiempo de reutilización es $\max(120,600\times0.95^c)$ segundos activos en el rango del Altar de Recurrencia $c$. Solo se puede activar mientras estés vivo, sin pausa y fuera de la cárcel.

## Cadena de clases del metaverso

| Clase                    | PM de por vida | Requisito adicional                     | XP máximo base |     Cobre base/día |
| ------------------------ | -------------: | --------------------------------------- | -------------: | -----------------: |
| Jugador Uno              |              1 | Ninguno                                 |      $10^{39}$ | $2.5\times10^{26}$ |
| Usurpador de la realidad |             10 | Great Jugador Uno nivel 20              |      $10^{41}$ |          $10^{28}$ |
| Soberano del Axioma      |             30 | Great Usurpador de la realidad nivel 20 |      $10^{43}$ |   $5\times10^{29}$ |
| El Absoluto No Escrito   |            100 | Great Soberano del Axioma nivel 20      |      $10^{45}$ | $2.5\times10^{31}$ |

Estas clases usan su propia cadena Great. La primera puede ser promovida cuando se desbloquea; cada clase siguiente requiere la clase Great anterior al nivel 20.

## Final

Metaverso VI se completa con 300 Puntos del Metaverso acumulados. Alcanzar el nivel Great 20 con **The Unwritten Absolute** desbloquea **Legacy completo**. Confirmar el final registra permanentemente la finalización y deja la simulación abierta para seguir jugando.
