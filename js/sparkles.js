(() => {
"use strict";
/* ---- Brillos cayendo ---- */
  function initSparkles(){
    const c = document.getElementById("brillos");
    const ctx = c.getContext("2d");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducir = motion.matches;
    const colores = ["255,255,255","176,140,245","244,150,210","246,214,130","150,185,245"];
    let w, h, dpr, parts = [], ultimo = 0, raf = null;

    const sprites = colores.map(col => {
      const sprite = document.createElement("canvas"); sprite.width = sprite.height = 64;
      const paint = sprite.getContext("2d");
      const glow = paint.createRadialGradient(32,32,0,32,32,30);
      glow.addColorStop(0,"rgba("+col+",.7)"); glow.addColorStop(1,"rgba("+col+",0)");
      paint.fillStyle=glow; paint.fillRect(0,0,64,64);
      return sprite;
    });
    function nueva(inicial){
      return {
        x: Math.random() * w,
        y: inicial ? Math.random() * h : -12,
        r: 1 + Math.random() * 2.4,
        v: 14 + Math.random() * 34,
        a: Math.random() * 6.28,
        s: .4 + Math.random() * 1.2,
        amp: 6 + Math.random() * 14,
        tw: Math.random() * 6.28,
        ts: .8 + Math.random() * 1.8,
        colorIndex: (Math.random() * colores.length) | 0,
        estrella: Math.random() < .45
      };
    }

    function medir(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.max(26, Math.min(70, Math.round(w * h / 13000)));
      while (parts.length < n) parts.push(nueva(true));
      parts.length = n;
    }

    function estrella(x, y, r){
      const k = r * 2.6;
      ctx.beginPath();
      ctx.moveTo(x, y - k);
      ctx.quadraticCurveTo(x, y, x + k, y);
      ctx.quadraticCurveTo(x, y, x, y + k);
      ctx.quadraticCurveTo(x, y, x - k, y);
      ctx.quadraticCurveTo(x, y, x, y - k);
      ctx.fill();
    }

    function dibujar(t, avanzar, dt){
      ctx.clearRect(0, 0, w, h);
      for (const p of parts){
        if (avanzar){
          p.y += p.v * dt;
          p.a += p.s * dt;
          if (p.y > h + 14){ Object.assign(p, nueva(false)); }
        }
        const x = p.x + Math.sin(p.a) * p.amp;
        const brillo = .35 + .6 * (.5 + .5 * Math.sin(p.tw + t / 1000 * p.ts));
        ctx.globalAlpha = brillo;
        const size = p.r * 9;
        ctx.drawImage(sprites[p.colorIndex],x-size/2,p.y-size/2,size,size);
        ctx.fillStyle = "rgba(" + colores[p.colorIndex] + "," + brillo + ")";
        ctx.globalAlpha = 1;
        if (p.estrella){ estrella(x, p.y, p.r); }
        else { ctx.beginPath(); ctx.arc(x, p.y, p.r * .8, 0, 6.283); ctx.fill(); }
      }
    }

    function paso(t){
      const dt = Math.min((t - ultimo) / 1000, .05);
      ultimo = t;
      dibujar(t, true, dt);
      raf = requestAnimationFrame(paso);
    }

    medir();
    window.addEventListener("resize", function(){medir();if(reducir) dibujar(0,false,0);});

    function iniciar(){
      if (raf !== null) cancelAnimationFrame(raf);
      raf = null;
      if (reducir || document.hidden){dibujar(0,false,0);return;}
      raf = requestAnimationFrame(function(t){ultimo=t;paso(t);});
    }
    motion.addEventListener("change",function(e){reducir=e.matches;iniciar();});
    iniciar();
    document.addEventListener("visibilitychange", function(){
      if (document.hidden){ cancelAnimationFrame(raf); raf = null; }
      else { iniciar(); }
    });
  }

Object.assign(window.Regalo = window.Regalo || {}, { initSparkles });
})();
