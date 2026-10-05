(() => {
  "use strict";
  const colors = ["#f4b8e0", "#d3bff8", "#f4a9c8", "#bcd2f8", "#e6b5ef"];

  function flower(index, size) {
    const element = document.createElement("div");
    element.className = index % 2 ? "tulipan" : "flor";
    element.style.setProperty("--s", `${size}px`);
    element.style.setProperty("--p", colors[index % colors.length]);
    element.style.setProperty("--spin", `${14 + index % 5 * 2}s`);
    element.style.setProperty("--delay", `${-index * 2}s`);
    element.style.setProperty("--direction", index % 3 ? "normal" : "reverse");
    if (index % 2) {
      element.innerHTML = '<svg viewBox="0 0 64 80" aria-hidden="true"><path class="tulip-stem" d="M32 36v39"/><path class="tulip-leaf" d="M32 65C15 66 10 52 11 45c13 1 21 11 21 20Zm0 7c17-1 22-16 20-24-12 3-20 13-20 24Z"/><path class="tulip-petal" d="M12 10 24 20 32 5 40 20 52 10v18c0 15-9 23-20 23s-20-8-20-23Z"/><path class="tulip-highlight" d="M20 26c0 9 3 14 7 16"/></svg>';
    } else {
      for (let rotation = 0; rotation < 360; rotation += 72) {
        const petal = document.createElement("i");
        petal.style.setProperty("--r", rotation);
        element.appendChild(petal);
      }
      element.appendChild(document.createElement("b"));
    }
    return element;
  }

  function initFlowers() {
    const background = document.querySelector(".flower-background");
    if (!background || background.childElementCount) return;
    const fragment = document.createDocumentFragment();
    // A staggered, deterministic layout keeps decorations stable on resize.
    for (let index = 0; index < 36; index++) {
      const wrapper = document.createElement("span");
      wrapper.className = "background-flower";
      const column = index % 6, row = Math.floor(index / 6);
      wrapper.style.left = `${3 + column * 17 + (row % 2 ? 4 : 0)}%`;
      wrapper.style.top = `${3 + row * 17 + column % 3 * 2}%`;
      wrapper.appendChild(flower(index, 32 + index % 4 * 7));
      fragment.appendChild(wrapper);
    }
    background.appendChild(fragment);

    const corners = document.createElement("div");
    corners.className = "letter-flowers";
    corners.setAttribute("aria-hidden", "true");
    ["top-left", "top-right", "bottom-left", "bottom-right"].forEach((position, corner) => {
      const bouquet = document.createElement("div");
      bouquet.className = `flower-corner flower-corner--${position}`;
      for (let index = 0; index < 3; index++) bouquet.appendChild(flower(corner * 3 + index, index === 1 ? 38 : 30));
      corners.appendChild(bouquet);
    });
    document.querySelector(".carta")?.appendChild(corners);
  }

  Object.assign(window.Regalo = window.Regalo || {}, { initFlowers });
})();
