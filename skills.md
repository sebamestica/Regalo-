# Guía de trabajo de Regalo

## Regla principal

Leer `AGENTS.md` y este archivo antes de cambiar el proyecto. Al terminar, actualizar las decisiones y el estado que hayan cambiado. Las instrucciones actuales del usuario prevalecen sobre esta guía. Mantener un único contexto vigente, sin acumular preferencias contradictorias ni registrar secretos.

Este documento es la memoria del proyecto, no una skill instalable de Codex. `skils.md` conserva una referencia a este archivo por compatibilidad con su nombre anterior.

## Proyecto y ubicación

- Carta romántica de Sebastian para Papita, con contador de relación, música, flores y QR para compartir.
- Sitio estático sin framework, build ni dependencias de ejecución instaladas.
- Repositorio: `https://github.com/sebamestica/Regalo-.git`; rama principal: `main`.
- Sitio público: `https://regalo-coni.vercel.app/`.
- Checkout con Git: `C:/dev/Regalo-publish`. Trabajar aquí para commits y publicaciones.
- Carpeta original: `C:/dev/Regalo--main`, descargada sin `.git`. No confundirla con el checkout ni sobrescribir cambios entre copias sin revisar diferencias.
- El push `f814a79` fue confirmado en GitHub. El estado de Vercel debe verificarse por separado: un push no demuestra que el despliegue terminó.

## Diseño y contenido acordados

- Priorizar móviles desde 320 px y conservar una composición cuidada en PC.
- Estética romántica, lavanda, crema, papel claro y detalles rosados/dorados. Reutilizar variables de `css/base.css`.
- Newsreader para títulos y carta; Quicksand para controles, etiquetas y contador. Evitar añadir fuentes o sistemas visuales ajenos sin necesidad.
- No hay marco negro ni dientes alrededor de la pantalla. No restaurar la antigua `css/frame.css`.
- Flores abundantes: 36 adicionales en el fondo y 12 en ramilletes en las esquinas de la carta. Las flores originales giran lentamente; los tulipanes permanecen fijos.
- La decoración no debe tapar texto, controles ni el QR. Usar `pointer-events:none` y ocultarla a lectores de pantalla.
- Castillo con cinco torres, tejados lilas, dorados, banderas y corazón. Sus banderines se mueven suavemente; respetar movimiento reducido.
- Evitar grandes huecos entre castillo y footer. El espacio actual entre el bloque del castillo y el texto es de 24 px.
- Flechas de navegación SVG centradas en sus burbujas con Grid. «Leer más» y «Leer menos» llevan únicamente texto.
- Contador «Llevamos» en dos filas de tres unidades: años/meses/días y horas/minutos/segundos. Cifras tabulares, etiquetas explícitas y singular/plural correcto.
- Fecha inicial configurada: 2 de agosto de 2026, 23:26, interpretada en la zona local del navegador. No cambiar silenciosamente fecha ni interpretación de zona horaria.
- Footer: texto exacto «por si quieres compartir esto mas rapido». QR estático que codifica directamente la URL pública, sin intermediarios ni caducidad propia; depende de que la URL siga disponible.
- No restaurar el párrafo eliminado «Quiero seguir conociendo lugares contigo…». El siguiente comienza «Esos momentos contigo me dan ganas de seguir queriéndote cada día…».
- Al editar la carta, cuidar tono íntimo, ortografía y coherencia entre párrafos. Cambiar únicamente lo pedido.

## Mapa de archivos

| Responsabilidad | Archivos |
| --- | --- |
| Contenido, estructura y carga de recursos | `index.html` |
| Variables y estilos globales | `css/base.css` |
| Portada, carta y álbum | `css/content.css` |
| Flores originales, corazones, orbes | `css/decorations.css` |
| Contador | `css/counter.css`, `js/counter.js` |
| Flores adicionales y tulipanes | `css/flowers.css`, `js/flowers.js` |
| Castillo y movimiento de banderas | `css/castle.css`, `assets/castillo.svg` |
| Controles, navegación y Spotify | `css/interactions.css`, `js/navigation.js` |
| Footer y QR | `css/footer.css`, `assets/compartir-qr.svg` |
| Fecha y fotos del álbum | `js/config.js` |
| Álbum opcional y brillos | `js/album.js`, `js/sparkles.js` |
| Inicialización | `js/app.js` |
| Imagen de portada | `assets/portada.jpg` |
| Alojamiento y documentación | `vercel.json`, `README.md`, `docs/plan-contador.md` |

## Arquitectura que debe mantenerse

- JavaScript encapsulado por archivo, con interfaz compartida en `window.Regalo`.
- Scripts clásicos con `defer`, en orden: `config`, `counter`, `album`, `sparkles`, `navigation`, `flowers`, `app`.
- Mantener apertura directa de `index.html` y ejecución por HTTP. Los imports ES rompieron la apertura local; no reintroducirlos sin un cambio de requisitos.
- Cuando se agregue un componente, darle archivos por responsabilidad y conectar su inicialización en `app.js`. Evitar volver a incrustar CSS o JS extensos en HTML.
- Mantener una regla clara por componente; no añadir capas sucesivas de overrides contradictorios. Revisar la especificidad y la suma de márgenes/paddings.
- Usar SVG/CSS para decoración existente; conservar las imágenes en `assets/`. No incorporar un framework para ajustes pequeños.
- El contador calcula meses completos por calendario y ajusta aniversarios al último día del mes. Días por calendario local; horas/minutos/segundos del tiempo restante. No sustituirlo por meses de 30 días.
- Spotify se carga al abrir su vista. Preservar `hidden`, `inert`, foco, retorno a la posición de lectura y movimiento reducido.

## Habilidades y criterio de trabajo

- Diseño frontend: composición, jerarquía tipográfica, contraste, espaciado y adaptación móvil usando la identidad ya acordada.
- Creatividad: proponer detalles propios del tema romántico y del castillo; evitar cambios visuales amplios cuando el pedido es puntual.
- CSS: Grid/Flex, tamaños fluidos, SVG, capas decorativas y animación mediante transformaciones, con `prefers-reduced-motion`.
- JavaScript: DOM accesible, inicialización ordenada, cálculo de fechas, eventos y animaciones sin dependencias innecesarias.
- Accesibilidad: botones semánticos, etiquetas útiles, foco visible, navegación por teclado y ausencia de anuncios del reloj cada segundo.
- Validación: revisar en navegador y capturas cuando cambie el diseño; distinguir una revisión visual de una prueba de sintaxis.
- Git: preservar historial y cambios existentes; revisar rama, remoto y diff antes de commit/push.

Skills instaladas útiles: `frontend-design` de `anthropics/skills` y `brainstorming` de `obra/superpowers`. Leer su `SKILL.md` al aplicarlas e informar al usuario. Adaptar el proceso al alcance y a las aprobaciones ya dadas; no repetir preguntas resueltas. Usar `skill-installer` para instalar skills y `skill-creator` únicamente para crear una skill real, no para editar esta memoria.

## Flujo por cambio

1. Leer contexto y pedido actual. Revisar el archivo afectado y el estado de Git; identificar cuál copia se está modificando.
2. Implementar la petición completa dentro de su alcance. Si el usuario pide un plan, entregar primero el plan y respetar esa fase; si ya lo aprobó, proceder.
3. Validar según el cambio. Para texto/documentación, revisar contenido, referencias y diff; no ejecutar una batería visual innecesaria.
4. Actualizar esta guía cuando cambien preferencias, arquitectura o estado; actualizar README si cambia la estructura o el uso.
5. Informar qué quedó hecho, qué se verificó y si está local, en GitHub o desplegado. No presentar una publicación como confirmada sin evidencia.

## Validación de cambios funcionales o visuales

- Revisar 320, 390, 768 y 1440 px según el alcance, sin desbordamiento ni texto tapado.
- Verificar contador, expansión de carta, ida y vuelta a Spotify y conservación de foco/scroll cuando se toque ese flujo.
- Revisar carga de imágenes, CSS y JS y errores del navegador. Comprobar apertura local y HTTP cuando se modifique carga de scripts.
- Verificar movimiento reducido cuando se agregue animación; tulipanes siempre sin giro.
- Si cambia el QR, decodificarlo para comprobar la URL y conservar negro sobre blanco y margen de cuatro módulos.
- Si cambia el cálculo de fechas, comprobar inicio futuro, aniversario anual, fin de mes, año bisiesto y cambio de año. La zona local y el horario de verano requieren atención.
- Usar `node --check` para JS modificado y pruebas controladas para cálculos. No repetir verificaciones que ya pasaron salvo nuevos cambios o dudas concretas.

## Publicación

Trabajar en el checkout Git. Antes de subir, revisar `git status`, remoto, rama y diff; incluir archivos nuevos referenciados y comprobar que no falten assets. Hacer commit claro, push sin forzar y confirmar el hash remoto. La autorización para publicar debe venir del pedido y contexto de la sesión; no asumir que toda edición futura implica push.

Vercel usa un sitio estático con preset Other, sin compilación. Puede desplegar al actualizar la rama conectada, pero hay que comprobar su estado antes de afirmar que está publicado. No modificar alojamiento para una mejora de contenido.

## Estado y decisiones recientes

- Diseño modular, QR, flores, castillo, contador, eliminación del marco y edición de la carta subidos a `main` en `f814a79`.
- Validaciones realizadas: navegador Edge en móvil/PC, carga local/HTTP, QR decodificado, seis casos de calendario y movimiento reducido.
- Guía reorganizada en `skills.md`; `skils.md` queda como referencia compatible.
- Revisión de margaritas: en la página pública la animación estaba activa, con vueltas de 24–42 segundos. Ajustada a 14–22 segundos para que el giro sea perceptible; las originales usan 18 segundos. Tulipanes fijos y movimiento reducido conservados. Arreglo y guía preparados para publicación conjunta.
- Banderines: la animación existente era poco perceptible en móvil. Aumentado el ondeo a ±14 grados y variación de ancho 78–100%, con ciclos de 1.4/1.8 segundos anclados al mástil. Se conserva movimiento reducido.
- Validación de estos ajustes: todas las margaritas cambian de transformación a 320, 390 y 1440 px, tulipanes quietos y animación detenida con movimiento reducido. El SVG del castillo dentro de su imagen cambia entre capturas de vista móvil, comprobando el movimiento real en la página.

Para próximas entradas registrar fecha, decisión vigente, archivos afectados y validación real. Resumir resultados antiguos; no conservar tareas pendientes que ya terminaron como si siguieran abiertas.
