---
title: Progresión Heroica
description: Hitos heroicos, promociones de tareas Great, conversiones de objetos Great, fórmulas y comportamiento de reinicio.
category: systems
---

La **pestaña Heroica** realiza un seguimiento de catorce hitos heroicos basados en la Esencia y la progresión Great de cada clase, habilidad, propiedad y posesión miscelánea elegible.

## Puerta de promoción Great

Las clases normales, habilidades y posesiones originales pueden volverse Great después de cumplir los tres requisitos:

1. Trascender al menos una vez.
2. Alcanzar 5.000.000 de Esencia y completar Heroico I.
3. Alcanzar un normal **Uno Sobre Todos** pico de 2,000.

El objetivo también debe estar desbloqueado, y la promoción o conversión no está disponible mientras esté encarcelado. Un Heroico I previamente completado satisface permanentemente su parte de Esencia de la puerta.

Las clases del Metaverso usan su propia puerta secuencial descrita en [El Metaverso](../metaverse/).

## Hitos heroicos

Los hitos son permanentes una vez que se alcanza su umbral de Esencia.

| Hito         |        Esencia | Recompensa                                      |
| ------------ | -------------: | ----------------------------------------------- |
| Heroico I    |      5,000,000 | Desbloquear promociones Great                   |
| Heroico II   |     10,000,000 | ×2 Great XP                                     |
| Heroico III  |     20,000,000 | ×2 Great XP                                     |
| Heroico IV   |     30,000,000 | ×2 Great XP                                     |
| Heroico V    |     50,000,000 | ×2 Great XP                                     |
| Heroico VI   |    100,000,000 | ×2 Great XP                                     |
| Heroico VII  |    150,000,000 | ×2 Great XP y desbloquea Intercambio de Esencia |
| Heroico VIII |    200,000,000 | ×2 Great XP                                     |
| Heroico IX   |    300,000,000 | ×2 Great XP                                     |
| Heroico X    |    400,000,000 | ×2 Great XP                                     |
| Heroico XI   |    500,000,000 | ×2 Great XP                                     |
| Heroico XII  |    750,000,000 | ×2 Great XP                                     |
| Heroico XIII | 10,000,000,000 | ×2 Great XP                                     |
| Heroico XIV  | 50,000,000,000 | Desbloquear Colapso                             |

Los doce hitos de Great-XP se multiplican entre sí, hasta $2^{12}=4096$ veces Great XP.

## Grandes tareas

La promoción es permanente y archiva el nivel normal de la tarea, máximo, XP y el pico normal más alto. La versión Grandes comienza en el nivel 0 con su propio XP e historial de nivel máximo. Las habilidades de resonancia no pueden convertirse en Grandes.

Dentro de cada clase o familia de habilidades, la primera tarea puede ser promovida inmediatamente después de la puerta. Cada tarea siguiente requiere que la Gran tarea anterior esté en nivel 20.

| Cadena Grandes         | Rango de nivel | Orden                                                 |
| ---------------------- | -------------: | ----------------------------------------------------- |
| Trabajos comunes       |            1–6 | Desde Mendigo hasta Comerciante                       |
| Militar                |           7–14 | Escudero hasta Teniente General                       |
| La Asociación Arcana   |          15–22 | Estudiante hasta Emperador                            |
| El vacío               |          23–30 | Corrupto hasta Dios del Abismo                        |
| Consejo Galáctico      |          31–35 | Viajero Eterno hasta Uno Sobre Todos                  |
| Fundamentos            |            1–4 | Concentración hasta Meditación                        |
| Combate                |            5–7 | Fuerza hasta Memoria Muscular                         |
| Magia                  |           8–14 | Control de Mana hasta Lavado de Cerebro               |
| Magia Oscura           |          15–24 | Influencia Oscura a través del Mal Encarnado          |
| Manipulación del vacío |          25–31 | Deseo Absoluto a través de la Manipulación del Abismo |
| Poderes celestiales    |          32–35 | Longevidad Cósmica a través del Comando Galáctico     |
| Omnipotencia           |          36–39 | Yin Yang a través de la Epifanía                      |

El rango de la tarea es el orden de la fuente más uno, contado por separado para clases y habilidades. Ascendencia Oscura, Oscuridad y Metaverso continúan con las cadenas descritas en sus propias páginas.

Para el rango Great $r$ y el nivel Great $L$, el requisito de siguiente nivel es:

$$
\operatorname{maxXP}_{\mathrm{Great}}=
\operatorname{round}\left(10^{10}(1.7)^r(L+1)(1.01)^L\right).
$$

Great habilidades calculan sus efectos con nivel efectivo:

$$
L_{\mathrm{effective}}=\max(P_{\mathrm{normal}},2000)+100L_{\mathrm{Great}},
$$

donde $P_{\mathrm{normal}}$ es el pico normal archivado. Great Recolección Cósmica está limitada a un efecto de retención de ×2.

Para una clase Great con ingresos base ordinarios $I_0$, nivel Great $L$, y rango $r$, los ingresos antes de los multiplicadores de clase habituales son:

$$
I_{\mathrm{Great}}=I_0\times5\times10^{15}\times10^{r/3}
\left(1+\log_{10}(L+1)\right).
$$

### Comportamiento de reinicio

| Reiniciar      | Máximo retenido Great                                             |
| -------------- | ----------------------------------------------------------------- |
| Tocar el Ojo   | Nivel Great más alto actual o registrado                          |
| Abrazar el Mal | 0                                                                 |
| Trascender     | $\lfloor\text{Cosmic Recollection}\times\text{Great peak}\rfloor$ |
| Colapso        | 0                                                                 |

El estado de promoción Great y el progreso normal archivado permanecen permanentes a través de estos reinicios.

## Great conversiones de objetos

Cada propiedad paga y posesión diversa del catálogo original puede ser convertida en su propia cadena de Tienda. Los desamparados y las nuevas posesiones de la expansión no son elegibles. Convertir un objeto activo lo elimina de la carga actual pero cambia permanentemente sus estadísticas.

El rango del artículo sigue el orden original de la fuente de artículos de pago: la Tienda es 1, el Trono Galáctico es 15, el Libro es 16 y el Fragmento del Multiverso es 33. Para el rango $r$:

$$
X_{\mathrm{Great}}=\max\left(10^6X_0,\ 10^{20}\times10^{r/3}\right),
$$

$$
M_{\mathrm{Great}}=1+4(M_0-1).
$$

$X_0$ es el gasto diario ordinario y $M_0$ es el efecto ordinario. Las propiedades y las posesiones diversas avanzan a través de cadenas de conversión separadas; cada conversión después de la primera requiere el artículo anterior en esa cadena.

Heroico XIV conduce directamente a [Oscuridad y Colapso](../darkness/).
