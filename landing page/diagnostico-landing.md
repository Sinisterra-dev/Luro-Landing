# Diagnóstico de la landing page

## Ajustes realizados en esta edición
- Se reemplazaron los fondos externos por imágenes locales de `landing page/imagenes/`.
- Se actualizó la imagen principal del hero con la foto de **Kevin Urrutia**.
- En la sección **Equipo** se dejó la foto local de **Kevin Urrutia** y se agregó la foto de **Alexander Sinisterra**.
- Alexander quedó presentado como **Desarrollador de Software**, manteniendo el enfoque de soporte técnico TI dentro de su descripción.

## Imágenes de fondo que calzan bien
- `FONDO CLARO OFICINA.png` → **1672 x 941 px**
- `FONDO CLARO TA.png` → **1672 x 941 px**
- `FOTO CLARA CORTE.png` → **1672 x 941 px**
- `FOTO CLARA FONDO CALI.png` → **1672 x 941 px**
- `IMAGEN OFICINA LAPICERO.png` → **1672 x 941 px**

Estas cinco imágenes funcionan bien como fondo porque tienen una proporción muy cercana a **16:9**, que encaja correctamente con secciones amplias usando `background-size: cover`.

## Tamaños ideales recomendados
- **Fondos de sección:** ideal entre **1600 x 900 px** y **1920 x 1080 px**.
- **Fotos verticales de personas (hero/equipo):** ideal entre **900 x 1350 px** y **1200 x 1800 px**.

## Observaciones sobre las fotos de Kevin y Alexander
- `KEVIN URRUTIAEN ESCALERAS DE PIE.png` → **1024 x 1536 px**: funciona bien en hero y equipo.
- `Alexander Sinisterra.png` → **683 x 1024 px**: funciona, pero al ser más pequeña podría verse mejor en pantallas grandes si se exporta en una versión un poco mayor.

## Formato ideal para que pesen menos
- **WebP** es el formato más recomendado para fondos y retratos porque reduce bastante el peso sin perder mucha calidad.
- **JPG/JPEG** también sirve para fotografías si se exporta con compresión media/alta.
- **PNG** conviene dejarlo solo cuando la imagen necesita transparencia o cuando se requiere conservarla sin compresión visible.

## Diagnóstico adicional y mejoras sugeridas (sin borrar lo actual)
- Mantener todas las secciones con fondo local ayuda a la coherencia visual, pero conviene definir una guía de contraste por sección para que ningún texto pierda legibilidad sobre imágenes claras.
- Sería recomendable unificar el nivel de opacidad de cada `.section-bg` por tipo de bloque (informativo, testimonios, contacto) para que la lectura sea consistente en desktop y mobile.
- En la sección de **Contacto**, como ahora hay imagen de retrato de fondo, se sugiere reforzar el contraste del formulario (por ejemplo con más opacidad en el contenedor) para mantener buena accesibilidad visual.
- Para mejorar rendimiento, se recomienda exportar los fondos grandes a **WebP** (manteniendo las mismas dimensiones aproximadas 16:9) y dejar PNG solo donde sea estrictamente necesario.
- Revisar que cada sección conserve una “personalidad” visual distinta, evitando que dos bloques consecutivos se perciban iguales por color dominante o encuadre.
- Como mejora de conversión, se puede reforzar el CTA principal con microcopy específico por sección (servicios, testimonios y contacto) sin tocar la estructura base existente.
