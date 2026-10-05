(() => {
  "use strict";
  const { INICIO } = window.Regalo;
  function monthAnniversary(start, months) {
    const date = new Date(start);
    date.setDate(1);
    date.setMonth(start.getMonth() + months);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    date.setDate(Math.min(start.getDate(), lastDay));
    return date;
  }
  function elapsedTime(start, now) {
    if (now < start) return [0, 0, 0, 0, 0, 0];
    let months = (now.getFullYear() - start.getFullYear()) * 12 + now.getMonth() - start.getMonth();
    if (monthAnniversary(start, months) > now) months--;
    const anchor = monthAnniversary(start, months);
    let days = 0;
    let next = new Date(anchor);
    next.setDate(anchor.getDate() + 1);
    while (next <= now) {
      days++;
      anchor.setTime(next.getTime());
      next.setDate(next.getDate() + 1);
    }
    const seconds = Math.floor((now - anchor) / 1000);
    return [Math.floor(months / 12), months % 12, days, Math.floor(seconds / 3600), Math.floor(seconds % 3600 / 60), seconds % 60];
  }
  function initCounter() {
    const units = [
      ["years", "año", "años"], ["months", "mes", "meses"], ["days", "día", "días"],
      ["hours", "hora", "horas"], ["minutes", "minuto", "minutos"], ["seconds", "segundo", "segundos"]
    ].map(([key, singular, plural]) => ({
      number: document.getElementById(`cd-${key}`), label: document.getElementById(`cd-${key}-label`), singular, plural
    }));
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    const time = `${INICIO.getHours() % 12 || 12}:${String(INICIO.getMinutes()).padStart(2, "0")} ${INICIO.getHours() >= 12 ? "PM" : "AM"}`;
    document.getElementById("desde").textContent = `Desde el ${INICIO.getDate()} de ${months[INICIO.getMonth()]} de ${INICIO.getFullYear()} a las ${time}`;
    function update() {
      elapsedTime(INICIO, new Date()).forEach((value, index) => {
        const unit = units[index];
        const text = index >= 3 ? String(value).padStart(2, "0") : String(value);
        if (unit.number.textContent !== text) unit.number.textContent = text;
        unit.label.textContent = value === 1 ? unit.singular : unit.plural;
        unit.number.parentElement.classList.toggle("contador-unit--wide", text.length > 3);
      });
    }
    update();
    setInterval(update, 1000);
  }
  Object.assign(window.Regalo = window.Regalo || {}, { initCounter, elapsedTime });
})();
