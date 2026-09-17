---
title: Oscuridad y Colapso
description: Colapso recompensas, Materia Oscura, hitos de Oscuridad, doctrinas, Orbes Oscuros y nueva progresión.
category: systems
---

[Heroico XIV](../heroic/) desbloquea **Colapso** a 50,000,000,000 Esencia. El colapso también requiere un premio positivo de Materia Oscura y no puede usarse en la cárcel. Abre la Ascendencia Oscura y la progresión de Oscuridad, luego se convierte en el puente hacia el Metaverso.

## Premio de colapso

Sea $E$ la Esencia actual y $x=E/(5\times10^{10})$. Ningún premio está disponible mientras $x<1$. De lo contrario:

$$
\operatorname{DM}=\left\lfloor
x^{1.12}\left(1+0.15\log_{10}x\right)M_{\mathrm{DM}}
\right\rfloor.
$$

El premio base es 1 en el umbral y 15 a diez veces el umbral. $M_{\mathrm{DM}}$ multiplica Hambre Gravitacional, un Corazón del Abismo activo, Doctrina V, Oscuridad IV y Oscuridad XII cuando corresponde. El posterior Altar de Materia Oscura añade otro factor durante la progresión del Metaverso. Los resultados extremos se saturan en el valor finito más alto.

El premio incrementa tres registros separados:

- **Materia Oscura Actual:** el saldo gastable.
- **Materia Oscura de Vida:** el valor permanente usado por hitos y desbloqueos.
- **Esta corrida:** Materia Oscura bruta obtenida en cada Colapso desde la última entrada del Metaverso.

Las compras reducen solo la Materia Oscura actual. Nunca reducen la vida útil ni la generación de ganancias.

## Reinicio por colapso

Colapso borra la edad, el estado de muerte, cobre, Mal, Esencia, la clase seleccionada, habilidad y propiedad, posesiones misceláneas activas, cada nivel disponible de tareas normales y Great, máximo y XP, depósitos de requisitos ordinarios, y todos los focos y asignaciones de Eco. Las nuevas selecciones son Mendigo, Concentración y Sin Hogar.

Mantiene materia oscura actual, de por vida y de ejecución; conteo de Colapsos; Orbes Oscuros; rangos de generador y mejora de Orb; elecciones de doctrina; promociones Great y registros normales archivados; conversiones de ítems Great; Puntos de Ventaja Maligna y rangos; cumplimiento de hitos; descubrimientos de Maestría, picos trabajados y efectos; memorias de Resonancia; logros; contadores de renacimiento; configuraciones; configuración del Administrador de Tienda; e historia de la Crónica. Saldo de monedas Los requisitos para adquisiciones posteriores deben ganarse nuevamente, mientras que sus requisitos de Materia Oscura de por vida permanecen satisfechos.

## Clases de Ascendencia Oscura

| Clase                            | Materia Oscura de por vida | XP máximo base |     Cobre base/día |
| -------------------------------- | -------------------------: | -------------: | -----------------: |
| Heredero del eclipse             |                          1 |      $10^{29}$ |          $10^{18}$ |
| Regente nulo                     |                         30 |      $10^{31}$ |   $5\times10^{19}$ |
| Imperator abisal                 |                        300 |      $10^{33}$ | $2.5\times10^{21}$ |
| Soberano más allá de la creación |                      3,000 |      $10^{35}$ |          $10^{23}$ |
| La última autoridad              |                     30,000 |      $10^{37}$ |   $5\times10^{24}$ |

Estas clases pueden volverse Great en orden; cada clase después de Eclipse Heir requiere la clase Great anterior en nivel 20. Sus entradas completas también aparecen en el [catálogo de clases](../classes/).

## Habilidades de la Oscuridad

Cada efecto de la Oscuridad usa $1+c\log_{10}(L+1)$ y un máximo base de XP de 100.

| Habilidad                 | Materia Oscura de por vida | Coeficiente $c$ | Efecto                     |
| ------------------------- | -------------------------: | --------------: | -------------------------- |
| Disciplina de las Sombras |                          3 |               1 | Toda la XP de habilidades  |
| Hambre gravitacional      |                         10 |           $2/3$ | Ganancia de Materia Oscura |
| Impulso inmortal          |                         25 |           $1/3$ | Todo XP                    |
| Eclipse del alma          |                        100 |           $2/3$ | ganancia de esencia        |
| Arcanos desatados         |                      1,000 |           $4/3$ | Magia XP                   |
| Cegado por la oscuridad   |                     10,000 |           $1/3$ | Todo XP                    |

Impulso inmortal se desbloquea independientemente a las 25 unidades de Materia Oscura de por vida en lugar de mediante un hito nombrado. Oscuridad IX duplica XP para esta familia de habilidades. La promoción Great sigue la misma cadena a nivel 20 dentro de la familia. Vea el [catálogo de habilidades](../abilities/) para la lista combinada.

## Orbes Oscuros

Oscuridad III al desbloquear 10 Materias Oscuras de por vida **Un Milagro** y las cuatro mejoras de Orbe. Un Milagro tiene diez niveles. Comprar el nivel $r+1$ cuesta $\lceil3^r\rceil$ Materia Oscura: 1, 3, 9, 27, 81, 243, 729, 2,187, 6,561 y luego 19,683.

$$
\operatorname{Orbs/day}=0.01(2^r-1)\left(1+0.25\sqrt{D}\right)M_{11},
$$

donde $D$ es Materia Oscura de por vida y $M_{11}=1.5$ después de Oscuridad XI, de lo contrario $1$. El nivel 0 no produce nada. La generación avanza solo durante el juego activo, vivo y sin estar encarcelado, se cita por día en el juego y no tiene progreso sin conexión.

Cada mejora de Orbe tiene diez niveles y el costo del siguiente nivel $B\times4^r$ Orbes Oscuros:

| Actualizar           | Costo base $B$ | Efecto por nivel            |
| -------------------- | -------------: | --------------------------- |
| Orbes encantados     |             10 | +25% de XP mágica           |
| Orbes de esencia     |             25 | +20% de ganancia de esencia |
| Orbes de prosperidad |             50 | +25% de ingresos            |
| Orbes de distorsión  |            100 | +5% de distorsión           |

Los Orbes oscuros, el nivel del generador y los cuatro niveles de mejora sobreviven al Colapso.

## Doctrinas

Cada doctrina se desbloquea con Materia Oscura de por vida y carga Materia Oscura gastable para su rama. Solo se puede poseer una rama por doctrina. Para cambiar, borra la rama actual y vuelve a comprarla; borrar nunca reembolsa su costo. Las elecciones sobreviven al Colapso y todos los efectos relevantes se multiplican.

| Doctrina | Desbloquear | Costo | Rama A                            | Rama B                            |
| -------- | ----------: | ----: | --------------------------------- | --------------------------------- |
| I        |           1 |    10 | ×1.5 distorsión, ×0.9 Esencia     | ×1.5 duración de vida, ×0.9 Mal   |
| II       |         100 |    30 | ×2 clase XP, ×0.9 ingresos        | ×2 habilidad XP, ×0.9 ingresos    |
| III      |       1,000 |   100 | ×1.5 Esencia, ×0.9 Mal            | ×1.5 Malvado, ×0.9 Esencia        |
| IV       |      10,000 |   300 | ×2 todo XP, ×0.75 ingresos        | ×2 ingresos, ×0.75 todo XP        |
| V        |     300,000 | 1,000 | ×1.5 Materia Oscura, ×0.9 Esencia | ×1.5 Esencia, ×0.9 Materia Oscura |

[Beneficios del metaverso](../metaverse/#run-perks) pueden luego eliminar desventajas, permitir ambas ramas, o restaurar selecciones de doctrina entre partidas. Ver [Crónica](../chronicle/#darkness-milestones) para todas las trece recompensas permanentes de Oscuridad.
