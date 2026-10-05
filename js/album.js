(() => {
"use strict";
const { FOTOS } = window.Regalo;
/* ---- Álbum opcional ---- */
  function initAlbum(){
    if (!FOTOS.length) return;
    const caja = document.getElementById("collage");
    FOTOS.forEach(function(f){
      const fig = document.createElement("figure");
      fig.className = "recuerdo";
      const img = document.createElement("img");
      img.src = f.src; img.alt = f.texto || ""; img.loading = "lazy";
      fig.appendChild(img);
      if (f.texto){
        const cap = document.createElement("figcaption");
        cap.textContent = f.texto;
        fig.appendChild(cap);
      }
      caja.appendChild(fig);
    });
    document.getElementById("album").hidden = false;
  }

Object.assign(window.Regalo = window.Regalo || {}, { initAlbum });
})();
