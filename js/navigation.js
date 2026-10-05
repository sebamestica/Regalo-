(() => {
"use strict";
/* Carta expandible y navegación entre carta y música */
  function initNavigation(){
    const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
    const toggle = document.querySelector(".read-more");
    const more = document.getElementById("letter-more");
    toggle.addEventListener("click",function(){
      const open = toggle.getAttribute("aria-expanded") !== "true";
      more.hidden = !open;
      toggle.setAttribute("aria-expanded",String(open));
      toggle.textContent = open ? "Leer menos" : "Leer más";
      if(open && !reduced()) more.animate([{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}],{duration:280,easing:"ease-out"});
      if(!open) document.querySelector(".carta").scrollIntoView({behavior:reduced()?"instant":"smooth",block:"start"});
    });
    const letter = document.getElementById("letter-view");
    const music = document.getElementById("spotify-view");
    const next = document.getElementById("to-music");
    const back = document.getElementById("to-letter");
    const player = document.getElementById("spotify-player");
    let active = letter, busy = false, savedScroll = 0, loadedAt = 0;
    function refresh(){player.src=player.dataset.src;loadedAt=Date.now();}
    async function show(to){
      if(busy || active===to)return;
      busy=true;
      const outgoing=active, isMusic=to===music;
      if(isMusic){savedScroll=scrollY;if(!player.src || Date.now()-loadedAt>60000)refresh();}
      next.hidden=true;back.hidden=true;outgoing.inert=true;
      if(!reduced()) await outgoing.animate([{opacity:1,transform:"translateX(0)"},{opacity:0,transform:`translateX(${isMusic?-48:48}px)`}],{duration:180,easing:"ease-in",fill:"forwards"}).finished;
      outgoing.hidden=true;outgoing.getAnimations().forEach(a=>a.cancel());
      to.hidden=false;to.inert=false;
      window.scrollTo({top:isMusic?0:savedScroll,behavior:"instant"});
      if(!reduced()) await to.animate([{opacity:0,transform:`translateX(${isMusic?48:-48}px)`},{opacity:1,transform:"translateX(0)"}],{duration:280,easing:"cubic-bezier(.2,.7,.2,1)"}).finished;
      active=to;next.hidden=isMusic;back.hidden=!isMusic;to.focus({preventScroll:true});busy=false;
    }
    next.addEventListener("click",()=>show(music));back.addEventListener("click",()=>show(letter));
    document.querySelector(".refresh-playlist").addEventListener("click",refresh);
    document.addEventListener("keydown",e=>{if(e.key==="Escape" && active===music)show(letter);});
  }

Object.assign(window.Regalo = window.Regalo || {}, { initNavigation });
})();
