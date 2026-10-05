# Plan: contador «Llevamos»

Estado: aprobado por el usuario e implementado. Validado en móvil y PC, incluyendo límites de calendario.

## Objetivo

Mostrar cuánto tiempo llevamos juntos con seis unidades explícitas: años, meses, días, horas, minutos y segundos. Mantener el aspecto romántico en lavanda y crema, con prioridad en móviles.

## Skills instaladas

- `frontend-design`, de `anthropics/skills`: diseño visual de interfaces.
- `brainstorming`, de `obra/superpowers`: explorar ideas y concretar decisiones de diseño.

Instaladas en la carpeta de skills del usuario; estarán disponibles en el próximo turno. Consultarlas antes de implementar, junto con `skils.md`, adaptando su alcance a esta mejora puntual.

## Diseño propuesto

Encabezado «Llevamos» con Newsreader en cursiva. Debajo, una cuadrícula de tres columnas y dos filas:

```text
             Llevamos

       0        2        1
      años    meses     días

      23       08       42
     horas   minutos  segundos
```

Los números son ilustrativos. La primera fila tendrá números lilas y la segunda números blancos con la sombra suave del reloj actual. Etiquetas pequeñas en Quicksand, con buen contraste. Separar las filas con espacio y una línea tenue. Conservar la fecha «Desde el…» debajo.

Evitar seis tarjetas individuales para mantener la continuidad visual de la portada. Usar cifras tabulares y columnas de ancho estable para que los segundos no muevan el diseño. No añadir nuevas fuentes, librerías ni animaciones cada segundo.

En PC, conservar la misma composición centrada dentro de la portada, con mayor espacio entre valores. En móvil, permitir que las etiquetas y cifras se reduzcan mediante `clamp()` sin desbordar desde 320 px. Para años de más dígitos, permitir ajuste de tamaño y espacio.

## Implementación

1. HTML: sustituir los dos bloques del contador por un encabezado y seis pares de número/unidad, con identificadores propios. Mantener la semántica y evitar anunciar cambios cada segundo mediante `aria-live`.
2. CSS: crear `css/counter.css`, retirar del archivo de contenido las reglas del reloj anterior y cargar los estilos nuevos en el HTML. Reutilizar variables de color y tipografía existentes.
3. JS: mantener `js/counter.js` y `window.Regalo`. Actualizar únicamente números y singular/plural; almacenar referencias a los elementos al inicializar. Conservar fecha de inicio y actualización cada segundo.
4. Revisar el cálculo por calendario: años y meses completos desde `INICIO`, luego días, horas, minutos y segundos restantes. Probar cambios de mes, año bisiesto y fechas anteriores al inicio. No aproximar todos los meses a 30 días ni los años a 365 días.
5. Verificar el contador con fechas controladas y revisar visualmente 320, 390, 768 y 1440 px, apertura directa del HTML, expansión de carta y navegación a Spotify.
6. Registrar implementación y resultados en `skils.md` y actualizar el mapa de archivos en `README.md`.

## Criterios de aceptación

- «Llevamos» visible y seis unidades comprensibles, con singular/plural correcto.
- Sin desbordamiento horizontal ni saltos de tamaño cada segundo.
- Se conservan los colores, tipografías, decoración y estilo de la portada.
- Fecha de inicio intacta y cálculo validado en límites de calendario.
- Sin errores JavaScript y funcionamiento tanto en archivo local como en HTTP.

## Alcance

Plan implementado en el proyecto local. No incluye despliegue.
