---
title: Bucle de Juego Principal
description: Cómo avanzan el tiempo, el trabajo de clase, el entrenamiento de habilidades, los ingresos y los gastos.
category: systems
---

El progreso sigue este orden:

1. Avanza la edad según la velocidad del juego.
2. Promoción automática cuando esté habilitada y sea elegible.
3. Aplica el candidato actual de autoaprendizaje.
4. Mientras el tiempo avanza, entrena la clase actual, agrega sus ingresos de cobre, registra su pico trabajado y revela su objeto de maestría después de su primer tick de trabajo completado.
5. Mientras el tiempo avanza, entrena la habilidad principal.
6. Genera Puntos de Ventaja Maligna, entrena todos los Ecos desbloqueados, actualiza los recuerdos de Resonancia, genera Orbes Oscuros e Hipercubos, avanza la Crónica y evalúa todas las familias de hitos.
7. Registra la esperanza de vida calculada más alta.
8. Actualiza al Representante de la Tienda cuando su temporizador de 30 días expire y avanza los temporizadores de Impulso de Realidad cuando estén disponibles.
9. Resta la tarifa del Representante y los gastos recurrentes de posesión.
10. Evalúa los desbloqueos y logros.
11. Registra la propiedad ocupada durante un intervalo de trabajo activo.

La velocidad base es de cuatro días del juego por segundo real. Pausar, morir o estar en la cárcel puede reducir la velocidad efectiva a cero. Un intervalo de velocidad cero no puede generar XP de clase o habilidad, descubrimiento de maestría, progreso de pico trabajado ni evidencia de ocupación de propiedad.

Las ganancias de XP de clase y habilidad utilizan productos redondeados de muchos multiplicadores. La felicidad afecta a ambos. Las habilidades y posesiones específicas de categoría luego agregan más términos multiplicativos. Los porcentajes de dominio aplicables se suman en un solo multiplicador de dominio antes de que ese multiplicador se una al producto. Los [hitos](../chronicle/) permanentes agregan sus multiplicadores de XP después. Consulte [Fórmulas](../../reference/formulas/) para el orden exacto de apilamiento.

Cuando la edad alcanza la esperanza de vida calculada, la edad se limita a esa esperanza de vida y la vida se considera muerta. El jugador debe usar un camino de reencarnación disponible para comenzar una nueva vida.
