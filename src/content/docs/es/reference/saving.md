---
title: Guardado y Progreso
description: Autoguardados, exportaciones, importaciones y lo que se conserva entre sesiones.
category: reference
---

Legacy realiza autoguardados cada cinco segundos mientras se ejecuta. Si un cuadro largo cruza varios intervalos de guardado, el juego realiza un único guardado actual en lugar de una ráfaga de guardados repetidos.

El progreso se mantiene en el formato de guardado firmado v11. El idioma de interfaz seleccionado se almacena por separado en versiones `legacy/preferences.json` y se excluye de las firmas de progresión, huellas de integridad en tiempo de ejecución y estado de la tabla de líderes. Un archivo de preferencias faltante, dañado o sin posibilidad de escritura no puede borrar el progreso ni activar el anti-trampas.

El progreso utiliza dos ranuras de guardado para que una escritura interrumpida, como un bloqueo o una pérdida de energía, no invalide la última copia verificada. Si cualquiera de las ranuras se verifica, Legacy carga esa ranura confiable sin una condena de anti-trampas incluso cuando su hermana está truncada, malformada o tiene una firma que no coincide. El informe de carga registra `RecoveredTrustedSibling`, luego solo se vuelve a escribir y verificar la ranura rechazada; la ranura confiable superviviente nunca se sobrescribe primero. Un desajuste de firma estructuralmente válido se trata como manipulación solo cuando no existe una hermana confiable.

La pestaña de Configuración te permite exportar una copia de seguridad o importar una anterior. Guarda las partidas exportadas en un lugar seguro antes de reiniciar el progreso o cambiar de dispositivo. Si se rechaza una importación, verifica que la exportación completa se haya copiado sin caracteres faltantes.

## Persistido

- monedas, edad, registros de por vida, todas las tareas lanzadas, máximos registrados, todos los picos trabajados de las 44 clases, descubrimientos de maestría, desbloqueos, logros y conteos de renacimiento;
- clase actual, habilidad, propiedad y posesiones misceláneas activas;
- todas las 42 metas completadas, registros de la Crónica, cuatro asignaciones Eco y enfoques ordenados, cuatro picos de Resonancia recordados, saldos de EPP y rangos de ventajas, y configuraciones del Administrador de Tienda;
- la bandera de promoción de cada tarea Great, nivel Great/ XP/máximo en vivo, nivel normal archivado/XP/máximo/pico, y cada conversión de objeto Great;
- actual, de por vida y ejecutar Materia Oscura; conteo de Colapso; Orbes Oscuros; rangos de generador y mejoras; elecciones de doctrina; Puntos de Metaverso actuales y de por vida; conteo de Metaverso; elecciones de ventajas; Hipercubos; rangos de altar; temporizadores de Impulso de Realidad; instantáneas de preservación pendientes; y finalización de la partida;
- cabecera de tarea fija y configuración de audio;
- mejor clase, propiedad y récords de duración de vida usados por las tablas de clasificación.

## Solo sesión

- elección de tema claro;
- alternancias de automatización, incluidas ambas opciones de pausa automática;
- tres ranuras de configuración;
- opciones de omisión de habilidad;
- progreso de temporización corto entre elecciones automáticas.

El tiempo pasado con el juego cerrado no genera progreso.

Las partidas actuales utilizan el esquema firmado v11. La localización no cambia ese esquema, sus rutas ni ningún ID de contenido canónico en inglés. Una partida válida firmada v10 sigue siendo cargable, pero todos los campos exclusivos de expansiones comienzan en sus valores predeterminados porque el formato antiguo no contenía ese bloque. La migración v9 no firmada solo se acepta cuando contiene un estado base válido y, de manera similar, inicia los nuevos sistemas con los valores predeterminados. Los datos heredados mal formados se rechazan sin eliminar la partida fuente.

Los valores de expansión importados deben ser finitos y no negativos; la Materia Oscura de por vida no puede ser inferior a la Materia Oscura actual o a la de la partida en curso; los rangos de generador, mejora de Orbe y altar deben estar entre 0 y 10; las claves y ramas de doctrina deben ser válidas; y los contadores no pueden ser negativos. Las importaciones no válidas no reemplazan la partida guardada actual.

Los niveles de maestría no se almacenan como un segundo valor. El juego deriva los seis niveles a partir de los picos trabajados guardados de la clase. Los renacimientos normales preservan los descubrimientos de maestría, los picos trabajados, los niveles y los bonos. Un reinicio completo o un reinicio por liberación anti-trucos preserva el descubrimiento de cartas pero borra las evidencias de picos trabajados, devolviendo esas cartas a gris y deshabilitando sus bonos hasta que se vuelvan a obtener.

Los focos de eco se guardan durante el juego normal, pero Touch Eye, Embrace Evil, Transcend, Collapse y Metaverse eliminan deliberadamente todos los enfoques y asignaciones. Los cuatro picos de Resonancia recordados sobreviven.

Los datos guardados de las tareas Great conservan el estado de promoción, el nivel, XP y máximo Great actuales, y el nivel, XP, máximo y pico normales archivados. Cada reinicio conserva el estado de promoción y el progreso normal archivado incluso cuando borra los niveles Great actuales. Los identificadores de conversión de objetos Great son permanentes.
