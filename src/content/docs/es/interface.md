---
title: Interface
description: Pestañas, información de la barra lateral, ajustes y comportamiento de accesibilidad.
category: start
---

El orden principal del contenido es **Clases, Habilidades, Tienda, Amuleto, Heroico, Objetos, Chronicle**. La Tienda aparece tras su desbloqueo y el Amuleto aparece desde los 25 años. Heroico resume el progreso de los hitos y cada Gran clase, habilidad y cadena de objetos. Las flechas izquierda y derecha solo pasan por las pestañas de contenido visibles.

Empire, Clasificación, Logros, Ajustes y el enlace Wiki son botones de utilidad en la cabecera superior en lugar de entradas en la fila de la pestaña de contenido.

Items es un inventario de maestría de solo lectura agrupado en Trabajo Común, Militar, La Asociación Arcana, El Vacío, Consejo Galáctico, Ascendencia Oscura y Metaverso. La tarjeta de una clase aparece después de un tick de trabajo real. Pasa el cursor o enfoca una tarjeta para ver su ítem, efectos actuales, pico trabajado y el siguiente nivel a través de Ruby. El inventario permanece legible mientras se está encarcelado.

La barra lateral informa la edad, la clase y habilidad actuales, cobre, ingresos, gastos, flujo neto, Felicidad, expectativa de vida y valores de distorsión temporal. El progreso de expansión agrega EPP, cada objetivo Echo desbloqueado, Materia Oscura, Orbes Oscuros, Puntos del Metaverso e Hipercubos donde corresponda. Los grandes valores de cobre usan denominaciones nombradas compactas, incluyendo Esmeralda en $10^{30}$ y Ruby en $10^{60}$.

Después de 1 Dark Matter de por vida, el Amuleto muestra el Dark Matter actual, de por vida y de la partida; la próxima recompensa del Colapso; el generador de Orbes y las filas de mejoras; y las cartas de doctrina. Su vista del Metaverso agrega la próxima recompensa de Puntos, ventajas de preparación reembolsables, controles del Hipercubo y del altar, y el estado de Impulso de la Realidad. La Crónica muestra los días de juego de por vida, las mayores recompensas, los hitos permanentes y vidas recientes.

El **Encabezado pegajoso** guardado fija el encabezado de la columna de Clases o Habilidades mientras su tabla se desplaza y está habilitado por defecto. El modo oscuro es el predeterminado; el tema claro opcional es solo para la sesión.

La configuración ofrece opciones de inglés, francés y ruso usando tarjetas de bandera del Reino Unido, Francia y Rusia. Un nuevo perfil debe elegir un idioma antes de que comience la simulación, la entrada o el guardado automático. Los perfiles existentes continúan en inglés y pueden cambiar en cualquier momento. Un cambio de idioma actualiza inmediatamente toda la interfaz sin cambiar el idioma global de s&box.

La configuración también proporciona volumen de música y de sonidos de la interfaz, controles de silencio por separado, controles de pista y la referencia de atajos de teclado. El estado del audio y la elección del encabezado fijo se incluyen en el guardado local. El idioma se almacena por separado en `legacy/preferences.json`; si esa preferencia no puede escribirse, el idioma seleccionado permanece activo para la sesión actual y aparece una advertencia sin interrumpir el juego.

Los números visibles usan los separadores de decimales y de miles del idioma seleccionado. Los sufijos de magnitud compactos y los símbolos de monedas permanecen sin cambios. Los controles pueden crecer y el texto creado se ajusta para que las etiquetas traducidas y los valores numéricos válidos más cortos o más largos sigan siendo legibles; solo los nombres de jugador y las URL sin límite pueden acortarse visualmente, conservando su texto completo para accesibilidad.

Los encabezados de clase y categoría de habilidad usan arte de patrón temático, y las filas de tareas son más grandes para mejorar la legibilidad. La tabla de habilidades muestra un **Omitir** control cuando el aprendizaje automático está habilitado, un **E** control después de que Echo I se desbloquee, y los controles de promoción Great cuando sean elegibles. La Tienda proporciona controles de conversión Great separados. Omitir cambios solo afecta la elegibilidad de aprendizaje automático; E encola un enfoque de Echo; hacer clic en el resto de la fila selecciona manualmente la habilidad y desactiva el aprendizaje automático. Las cartas de Echo y la barra lateral muestran eficiencia, objetivo, progreso de nivel, tasa de XP y el pico de Resonancia recordado; **Borrar Ecos** elimina todos los enfoques.
