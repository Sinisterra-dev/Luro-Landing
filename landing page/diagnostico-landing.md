# Diagnóstico de la landing page

## Qué tiene actualmente la página
- Secciones principales: Inicio, Quiénes somos, Servicios, Clientes recurrentes, Testimonios, Equipo, Contacto y Footer.
- Fondo visual por sección con imágenes distintas y estilo oscuro corporativo.
- Componentes de interacción: modal del equipo, testimonios dinámicos y botón flotante de WhatsApp.
- Navegación fija superior con CTA de agendamiento.

## Qué le faltaba y qué se ajustó
- Faltaba el enlace de **Equipo** en la barra superior.
- Se agregó el hipervínculo `#equipo` en el menú principal para que la sección quede visible desde la navegación superior.
- Se aplicó una transición visual por sombra/degradado en cada sección para reducir el corte brusco entre fondos.

## Comportamiento en móviles (estado actual)
- En pantallas menores a 980px se ocultan los links del menú superior (`.nav-links`).
- El layout se adapta a una sola columna en hero, about, contacto, footer y modal.
- Grillas (servicios, equipo, estadísticas) se reducen progresivamente hasta 1 columna en pantallas pequeñas.
- El botón de WhatsApp permanece flotante y accesible.

## Qué se puede mejorar
- Implementar menú hamburguesa en móviles para no perder acceso directo a secciones.
- Optimizar peso y carga de imágenes de fondo para mejorar rendimiento (especialmente en red móvil).
- Definir estados `:focus-visible` más claros para accesibilidad por teclado.
- Ajustar contraste de textos secundarios en algunas tarjetas para legibilidad en pantallas con brillo bajo.
- Reemplazar `https://wa.me/yournumber` por el número real de contacto.
