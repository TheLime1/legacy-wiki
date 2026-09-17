---
title: Administrador de la tienda
description: Desbloquear, tarifa de ingresos, presupuesto de recomendación, temporización de actualización y controles de carga manual.
category: systems
---

El primero **Trascender** desbloquea al Administrador de la Tienda en la parte superior de la tienda. Recomienda una propiedad y un conjunto de posesiones misceláneas para la clase, habilidad principal y objetivos de Eco que se estén entrenando actualmente.

## Tarifa y presupuesto

Mientras esté habilitado, el Administrador cobra **el 10% del ingreso bruto de la clase** como gasto diario. Su recomendación debe ajustarse dentro del 90% restante:

$$
\operatorname{budget/day}=0.9\times\operatorname{income/day}.
$$

El Mayordomo compara los multiplicadores útiles que afectan el conjunto de entrenamiento actual, luego elige la combinación más fuerte que pueda permitirse. Actualiza la recomendación cada 30 días activos dentro del juego. Un nuevo desbloqueo o una recomendación no asequible también provoca un recálculo cuando intentas aplicarla.

## Controles

1. **Habilitar** al Mayordomo para comenzar a pagar la tarifa y crear una recomendación.
2. Revisa sus propiedades, posesiones, gastos y presupuesto listados.
3. Seleccionar **Comprar equipamiento** para aplicar la recomendación manualmente.

El Mayordomo nunca compra una recomendación automáticamente. Un cambio manual en la Tienda significa que la carga recomendada ya no se aplica completamente, pero las recomendaciones siguen actualizándose mientras el Mayordomo permanezca habilitado. El Renacimiento elimina las posesiones activas sin eliminar el desbloqueo permanente del Mayordomo ni la opción habilitada.

Deshabilitar al Mayordomo detiene su tarifa y borra todos los elementos activos de la Tienda, devolviendo la propiedad a Sin Hogar.
