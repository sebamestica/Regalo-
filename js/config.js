(() => {
"use strict";
/* ═════════════ CONFIGURACIÓN ═════════════ */
  // Inicio: 2 de agosto de 2026, 11:26 PM  (año, mes 0-11, día, hora, min, seg)
  const INICIO = new Date(2026, 7, 2, 23, 26, 0);

  // Álbum opcional. Sube tus fotos a la carpeta assets/ y agrégalas aquí, por ejemplo:
  // { src: "assets/foto1.jpg", texto: "nuestro primer paseo" }
  const FOTOS = [];
  /* ═══════════════════════════════════════════ */

Object.assign(window.Regalo = window.Regalo || {}, { INICIO, FOTOS });
})();
