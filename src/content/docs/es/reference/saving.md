---
title: 'Guardado y progreso'
description: 'Guardado automático, importación y protección del progreso.'
category: reference
---

Legacy guarda automáticamente cada cinco segundos. El progreso mantiene el esquema firmado v11; el idioma se almacena aparte en las preferencias, por lo que cambiar de idioma o perder ese archivo no puede borrar el progreso.

Dos ranuras protegen frente a un corte durante la escritura. Si una está truncada, mal formada o no supera la verificación, pero la otra es de confianza, el juego carga la copia fiable sin penalización antitrampas y repara solo la ranura rechazada. Una firma no válida sin copia de confianza sigue considerándose manipulación. Se mantienen la exportación e importación, el formato v10 firmado y la migración desde v9.
