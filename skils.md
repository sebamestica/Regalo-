# Contexto y preferencias del proyecto

Este archivo debe consultarse antes de cada cambio y actualizarse al finalizar. Es la memoria de trabajo del proyecto; `AGENTS.md` establece esta instrucción para próximas sesiones.

## Preferencias del usuario

- Diseñar primero para dispositivos móviles, sin descuidar PC.
- Mantener el estilo romántico de la carta para Papita.
- Sin marco negro ni bordes con dientes: el usuario pidió eliminar por completo el marco anterior.
- Las flechas de navegación deben estar centradas dentro de sus burbujas.
- El botón «Leer más» / «Leer menos» debe mostrar únicamente texto, sin flecha.
- Mantener CSS y JavaScript en archivos separados por responsabilidad para facilitar próximos cambios.
- Decoración floral abundante: mezclar las flores originales con tulipanes y añadir flores al fondo y a las esquinas de la carta, manteniendo legible el texto. Solo las flores originales giran; los tulipanes permanecen fijos, sin giro.
- URL pública del sitio: `https://regalo-coni.vercel.app/`. Footer con el texto exacto «por si quieres compartir esto mas rapido» y QR estático, sin vencimiento ni intermediarios.
- Repositorio: `https://github.com/sebamestica/Regalo-.git`, rama principal `main`. La carpeta original procede de una descarga sin `.git`; checkout de publicación en `C:/dev/Regalo-publish`.

## Arquitectura

- HTML: contenido en `index.html`.
- CSS: `base`, `decorations`, `content`, `counter`, `castle`, `footer`, `flowers`, `interactions` dentro de `css/`.
- JavaScript: módulos `config`, `counter`, `album`, `sparkles`, `navigation`; entrada `js/app.js`.
- Decoración floral adicional: `css/flowers.css` y `js/flowers.js`, cargado antes de `js/app.js` y encapsulado en `window.Regalo`.
- Fecha y fotos opcionales se editan en `js/config.js`.
- Imagen de portada en `assets/portada.jpg`.
- Sitio estático sin build, compatible con apertura directa de `index.html` y con HTTP. Los archivos JS se cargan con `defer` en orden: configuración, componentes y entrada. Comparten únicamente el espacio de nombres `window.Regalo`; cada archivo encapsula su implementación.

## Validación esperada

Revisar pantalla móvil estrecha, móvil habitual y PC. Comprobar marco, centrado de ambas flechas, expansión de la carta y navegación a Spotify. Respetar movimiento reducido y accesibilidad de los controles.

## Registro de cambios

### 2026-10-04

- Separación de CSS y JS en módulos; extracción de imagen incrustada a `assets/`.
- Sustitución de reglas contradictorias del marco por un patrón uniforme en cuatro lados.
- Iconos SVG centrados mediante CSS Grid en las burbujas de navegación.
- Eliminación de la flecha de «Leer más» y sus estilos asociados.
- Documentación de estructura y vista local en `README.md`.
- Verificada la sintaxis de los módulos JavaScript con Node.
- Revisado en Edge a 320, 390 y 1440 px: sin desbordamiento horizontal, iconos centrados, expansión y navegación funcionales, sin errores JavaScript.

### Corrección de carga de JavaScript

- Reemplazados los imports ES por archivos encapsulados y scripts `defer` ordenados para permitir abrir el HTML directamente desde la carpeta.
- Mantener compatibilidad con apertura local en próximos cambios.
- Verificado en Edge abriendo `file:///C:/dev/Regalo--main/index.html`: contador, expansión de carta y navegación de ida y vuelta funcionales, sin errores JavaScript.

### Footer para compartir

- Footer compartido al final de las vistas, con estilos propios en `css/footer.css`.
- QR generado localmente en `assets/compartir-qr.svg`, codificando directamente la URL pública. Negro sobre blanco, con margen de seguridad de cuatro módulos.
- Validado en Edge a 320, 390 y 1440 px: imagen cargada, QR decodificado a la URL exacta, sin desbordamiento horizontal ni errores JavaScript. Cambios locales pendientes de despliegue en Vercel.

### Flores y tulipanes animados

- Giro lento continuo de las flores originales; dirección y duración variadas para las nuevas flores. Corrección posterior: tulipanes fijos, sin giro.
- 36 flores adicionales en el fondo fijo y 12 en ramilletes distribuidos entre las cuatro esquinas de la carta.
- Decoración en CSS y SVG local, sin imágenes remotas ni dependencias. Capas decorativas sin interacción y ocultas a lectores de pantalla.
- Validado en Edge a 320, 390 y 1440 px: sin desbordamiento ni errores JS, carta expandible funcional. Revisada captura móvil y comprobada la desactivación del giro con movimiento reducido.
- Corrección de tulipanes: verificado en Edge móvil que todos tienen `animation-name: none`, mientras las flores conservan `flower-turn`.

### Castillo y planificación del contador

- Castillo rediseñado en `assets/castillo.svg`: cinco torres, tejados lilas, detalles dorados, banderas, escudo de corazón, entrada y halo. Estilos independientes en `css/castle.css`.
- Validada la carga y adaptación del castillo a 320, 390 y 1440 px, sin desbordamiento.
- Nueva preferencia: contador con «Llevamos» y años, meses, días, horas, minutos y segundos explícitos; conservar estética y prioridad móvil.
- Plan aprobado e implementado en `docs/plan-contador.md`: dos filas de tres valores, diseño integrado en portada.
- Instaladas las skills `frontend-design` (anthropics/skills) y `brainstorming` (obra/superpowers) en la carpeta de skills del usuario, disponibles a partir del próximo turno.

### Contador aprobado, banderines y eliminación del marco

- Implementado «Llevamos» con seis unidades explícitas en `css/counter.css` y `js/counter.js`; números tabulares y singular/plural.
- Cálculo por meses de calendario con ajuste al último día del mes; días por calendario local y tiempo restante. Fecha inicial conservada.
- Reducido a 24 px el espacio entre el castillo y el texto del footer, eliminando la acumulación de padding.
- Banderines con animación suave anclada al mástil en el SVG; respetan movimiento reducido.
- Eliminado el HTML del marco y `css/frame.css` por instrucción del usuario.
- Validado en Edge a 320, 390, 768 y 1440 px: seis unidades, actualización del reloj, navegación, sin marco ni desbordamiento ni errores JS. Revisadas capturas móviles.
- Seis comprobaciones del cálculo pasaron: fecha futura, aniversario anual, febrero bisiesto, aniversario del 29 de febrero, cambio de año y fin de mes.

### Edición de la carta

- Eliminado completo, por petición del usuario, el párrafo que comenzaba «Quiero seguir conociendo lugares contigo». No restaurarlo en futuras ediciones.
- Ajustado el párrafo siguiente para conectar con los momentos y recuerdos compartidos: comienza «Esos momentos contigo me dan ganas de seguir queriéndote cada día…».

### Publicación en GitHub

- Preparado el conjunto completo de cambios en un clon del repositorio indicado por el usuario, conservando el historial de `main`.
- Verificaciones previas: diseño y navegación revisados en móvil/PC, QR decodificado, cálculo de calendario comprobado y funcionamiento local/HTTP.
