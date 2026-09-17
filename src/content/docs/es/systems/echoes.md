---
title: Ecos y Resonancia
description: Los cuatro Ecos, memorias de Resonancia, entrenamiento automático, E enfoques, eficiencia y reinicios.
category: systems
---

Los Ecos entrenan habilidades adicionales desbloqueadas al mismo tiempo que la habilidad principal. Cada Eco se desbloquea con una habilidad de Resonancia correspondiente:

| Eco     | Desbloquear                  | Resonancia     | Pico de eficiencia al 100% |
| ------- | ---------------------------- | -------------- | -------------------------: |
| Eco I   | Primer Abrazo del Mal        | resonancia I   |                      1,000 |
| Eco II  | Primera Trascendencia        | Resonancia II  |                      1,250 |
| Eco III | Primer Colapso               | Resonancia III |                      1,500 |
| Eco IV  | Primera entrada al Metaverso | Resonancia IV  |                      1,750 |

## Eligiendo una habilidad

Sin un enfoque E, cada Eco elige automáticamente la habilidad elegible con el tiempo estimado más corto para alcanzar su siguiente nivel. Esta ruta es independiente del Aprendizaje automático primario.

- Un Eco no puede entrenar la habilidad primaria actualmente seleccionada.
- Un Eco no puede entrenar su propia Resonancia correspondiente, pero puede entrenar la Resonancia de otro Eco.
- Una habilidad no puede ser entrenada por más de un Eco.
- El Aprendizaje automático evita habilidades ya asignadas a un Eco.

Haga clic en el **E** control en una fila de habilidad para añadir o eliminar un foco. Los focos mantienen su orden de selección y se asignan primero a los Ecos disponibles más fuertes. Los focos extra permanecen en cola hasta que un Eco esté disponible. **E es un control de fila, no un atajo de teclado.**

Seleccionar una habilidad enfocada como la habilidad principal elimina su foco de Eco. La barra lateral muestra el objetivo actual de cada Eco desbloqueado, el progreso de nivel y la tasa de XP. **Borrar Ecos** elimina todos los focos y devuelve el enrutamiento al modo automático.

## Eficiencia de resonancia

Sea $p_i$ el nivel más alto recordado de Resonancia $i$ y $T_i$ su objetivo de la tabla anterior. Echo $i$ entrena en:

$$
E_i(p_i)=
\begin{cases}
0.25+0.75\dfrac{p_i}{T_i}, & p_i\le T_i,\\
1+0.05\log_2\left(\dfrac{p_i}{T_i}\right), & p_i>T_i.
\end{cases}
$$

Cada Echo comienza en **25%**, alcanza **100%** en su objetivo, y gana otros cinco puntos porcentuales cada vez que su pico recordado se duplica más allá de ese objetivo. La XP de Echo es la ganancia completa de XP actual de la habilidad objetivo multiplicada por esta eficiencia, incluyendo la Great XP cuando el objetivo es promovido.

Los valores máximos base exactos calibrados de XP para Resonance I–IV son $0.00030536056011010876$, $0.00003972362997298969$, $0.000004881366014841863$, y $0.00000045896650664729693$.

## Guardando y renaciendo

Los picos de Resonancia recordados y las elecciones ordinarias de E-enfoque se guardan. Tocar Ojo, Abrazar el Mal, Trascender, Colapsar y la entrada al Metaverso borran todos los enfoques y asignaciones, pero cada pico recordado sobrevive.

Ver [Beneficios del Mal](../evil-perks/) para el otro sistema desbloqueado por el primer Abrazar el Mal.
