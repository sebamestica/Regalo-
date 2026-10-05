# Regalo

Sitio estático sin compilación. Diseño pensado primero para móviles, adaptable a PC.

## Estructura

- `index.html`: contenido y estructura.
- `assets/portada.jpg`: fotografía de portada.
- `css/base.css`: variables y estilos globales.
- `css/decorations.css`: flores, corazones, orbes y brillos.
- `css/content.css`: portada, contador, carta y álbum.
- `css/counter.css`: contador «Llevamos» con seis unidades.
- `css/interactions.css`: botones, navegación, Spotify y ajustes móviles.
- `css/footer.css`: footer para compartir; QR estático en `assets/compartir-qr.svg`.
- `css/flowers.css` y `js/flowers.js`: flores giratorias, tulipanes y ramilletes de la carta.
- `css/castle.css` y `assets/castillo.svg`: castillo decorativo.
- `js/config.js`: configuración de fecha (`INICIO`) y fotos (`FOTOS`).
- `js/counter.js`, `js/album.js`, `js/sparkles.js`, `js/navigation.js`: funciones independientes.
- `js/app.js`: inicializa los módulos.
- `skills.md`: contexto, preferencias y registro de cambios.
- `AGENTS.md`: instrucciones de trabajo para próximas sesiones.

## Vista local

Puedes abrir `index.html` directamente en el navegador. Para usar un servidor local, ejecuta `python -m http.server 8000` y abre http://localhost:8000.

## Personalizar

Edita la fecha y el álbum en `js/config.js` y el texto en `index.html`. Agrega las fotos del álbum en `assets/`.

## Vercel

Selecciona el preset Other, sin comando de compilación. Publica la carpeta completa, incluidos CSS, JS y assets.
