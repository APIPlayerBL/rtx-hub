const gpuGames = {
  "rtx-4060": [
    {game:"Cyberpunk 2077", res:"1080p", settings:"Высокие + DLSS Качество", fps:"55-65"},
    {game:"Alan Wake 2", res:"1080p", settings:"Средние + DLSS", fps:"40-50"},
    {game:"Hogwarts Legacy", res:"1080p", settings:"Высокие", fps:"60-70"},
    {game:"Starfield", res:"1080p", settings:"Средние-Высокие", fps:"50-60"},
    {game:"GTA V Enhanced", res:"1080p", settings:"Высокие", fps:"90-100"},
    {game:"Valorant", res:"1080p", settings:"Высокие", fps:"200+"}
  ],
  "rtx-4060ti": [
    {"game":"Cyberpunk 2077", "res":"1080p", "settings":"Ультра + DLSS Качество", "fps":"70-80"},
    {"game":"Alan Wake 2", "res":"1080p", "settings":"Средние + DLSS", "fps":"55-65"},
    {"game":"Hogwarts Legacy", "res":"1080p", "settings":"Ультра", "fps":"75-85"},
    {"game":"Starfield", "res":"1080p", "settings":"Высокие", "fps":"60-70"},
    {"game":"GTA V Enhanced", "res":"1440p", "settings":"Высокие", "fps":"85-95"},
    {"game":"Valorant", "res":"1440p", "settings":"Высокие", "fps":"240+"}
  ],
  "rtx-4070": [
    {"game":"Cyberpunk 2077", "res":"1440p", "settings":"Высокие + DLSS Качество", "fps":"65-75"},
    {"game":"Alan Wake 2", "res":"1440p", "settings":"Средние + DLSS", "fps":"60-70"},
    {"game":"Hogwarts Legacy", "res":"1440p", "settings":"Ультра", "fps":"70-80"},
    {"game":"Starfield", "res":"1440p", "settings":"Высокие", "fps":"55-65"},
    {"game":"GTA V Enhanced", "res":"1440p", "settings":"Ультра", "fps":"90-100"},
    {"game":"Valorant", "res":"1440p", "settings":"Высокие", "fps":"300+"}
  ],
  "rtx-4070s": [
    {"game":"Cyberpunk 2077", "res":"1440p", "settings":"Ультра + DLSS Качество", "fps":"80-90"},
    {"game":"Alan Wake 2", "res":"1440p", "settings":"Средние + DLSS + RT", "fps":"65-75"},
    {"game":"Hogwarts Legacy", "res":"1440p", "settings":"Ультра", "fps":"80-90"},
    {"game":"Starfield", "res":"1440p", "settings":"Высокие", "fps":"65-75"},
    {"game":"GTA V Enhanced", "res":"4K", "settings":"Высокие", "fps":"65-75"},
    {"game":"Valorant", "res":"4K", "settings":"Высокие", "fps":"180+"}
  ],
  "rtx-4070ti-s": [
    {"game":"Cyberpunk 2077", "res":"1440p", "settings":"Ультра + RT + DLSS Качество", "fps":"90-100"},
    {"game":"Alan Wake 2", "res":"1440p", "settings":"Средние + RT + DLSS", "fps":"75-85"},
    {"game":"Hogwarts Legacy", "res":"4K", "settings":"Ультра", "fps":"55-65"},
    {"game":"Starfield", "res":"4K", "settings":"Высокие", "fps":"50-60"},
    {"game":"GTA V Enhanced", "res":"4K", "settings":"Ультра", "fps":"80-90"},
    {"game":"Valorant", "res":"4K", "settings":"Высокие", "fps":"240+"}
  ],
  "rtx-4080s": [
    {"game":"Cyberpunk 2077", "res":"4K", "settings":"Ультра + DLSS Качество", "fps":"75-90"},
    {"game":"Alan Wake 2", "res":"4K", "settings":"Средние + RT + DLSS", "fps":"70-80"},
    {"game":"Hogwarts Legacy", "res":"4K", "settings":"Ультра", "fps":"80-90"},
    {"game":"Starfield", "res":"4K", "settings":"Высокие", "fps":"65-75"},
    {"game":"GTA V Enhanced", "res":"4K", "settings":"Ультра", "fps":"110-125"},
    {"game":"Valorant", "res":"4K", "settings":"Высокие", "fps":"240+"}
  ],
  "rtx-4090": [
    {"game":"Cyberpunk 2077", "res":"4K", "settings":"Ультра + RT Overdrive + DLSS", "fps":"95-115"},
    {"game":"Alan Wake 2", "res":"4K", "settings":"Средние + RT + DLSS", "fps":"90-105"},
    {"game":"Hogwarts Legacy", "res":"4K", "settings":"Ультра", "fps":"95-110"},
    {"game":"Starfield", "res":"4K", "settings":"Высокие", "fps":"85-100"},
    {"game":"GTA V Enhanced", "res":"4K", "settings":"Ультра", "fps":"130-150"},
    {"game":"Valorant", "res":"4K", "settings":"Высокие", "fps":"300+"}
  ],
  "rtx-5090": [
    {"game":"Cyberpunk 2077", "res":"4K", "settings":"Ультра + Path Tracing + DLSS 4", "fps":"120-140"},
    {"game":"Alan Wake 2", "res":"4K", "settings":"Средние + RT + DLSS 4", "fps":"110-130"},
    {"game":"Hogwarts Legacy", "res":"4K", "settings":"Ультра", "fps":"115-135"},
    {"game":"Starfield", "res":"4K", "settings":"Высокие", "fps":"105-125"},
    {"game":"GTA V Enhanced", "res":"4K", "settings":"Ультра", "fps":"150+"},
    {"game":"Valorant", "res":"4K", "settings":"Высокие", "fps":"400+"}
  ]
,
  "rtx-2060": [
    {"game":"Cyberpunk 2077", "res":"1080p", "settings":"Низкие-Средние", "fps":"40-50"},
    {"game":"Alan Wake 2", "res":"1080p", "settings":"Низкие (без RT)", "fps":"35-45"},
    {"game":"Hogwarts Legacy", "res":"1080p", "settings":"Средние", "fps":"45-55"},
    {"game":"Starfield", "res":"1080p", "settings":"Средние", "fps":"40-50"},
    {"game":"GTA V Enhanced", "res":"1080p", "settings":"Высокие", "fps":"75-85"},
    {"game":"Valorant", "res":"1080p", "settings":"Высокие", "fps":"160+"}
  ],
  "rtx-2070s": [
    {"game":"Cyberpunk 2077", "res":"1080p", "settings":"Высокие (без RT)", "fps":"50-60"},
    {"game":"Alan Wake 2", "res":"1080p", "settings":"Средние", "fps":"45-55"},
    {"game":"Hogwarts Legacy", "res":"1080p", "settings":"Высокие", "fps":"60-70"},
    {"game":"Starfield", "res":"1080p", "settings":"Высокие", "fps":"50-60"},
    {"game":"GTA V Enhanced", "res":"1080p", "settings":"Ультра", "fps":"85-95"},
    {"game":"Valorant", "res":"1080p", "settings":"Высокие", "fps":"200+"}
  ],
  "rtx-2080ti": [
    {"game":"Cyberpunk 2077", "res":"1080p", "settings":"Высокие", "fps":"55-65"},
    {"game":"Alan Wake 2", "res":"1080p", "settings":"Средние + RT", "fps":"45-55"},
    {"game":"Hogwarts Legacy", "res":"1080p", "settings":"Ультра", "fps":"70-80"},
    {"game":"Starfield", "res":"1080p", "settings":"Высокие", "fps":"60-70"},
    {"game":"GTA V Enhanced", "res":"1440p", "settings":"Высокие", "fps":"75-85"},
    {"game":"Valorant", "res":"1440p", "settings":"Высокие", "fps":"180+"}
  ],
  "rtx-3060": [
    {"game":"Cyberpunk 2077", "res":"1080p", "settings":"Средние", "fps":"45-55"},
    {"game":"Alan Wake 2", "res":"1080p", "settings":"Низкие (без RT)", "fps":"40-50"},
    {"game":"Hogwarts Legacy", "res":"1080p", "settings":"Средние", "fps":"55-65"},
    {"game":"Starfield", "res":"1080p", "settings":"Средние", "fps":"45-55"},
    {"game":"GTA V Enhanced", "res":"1080p", "settings":"Высокие", "fps":"80-90"},
    {"game":"Valorant", "res":"1080p", "settings":"Высокие", "fps":"180+"}
  ],
  "rtx-3070": [
    {"game":"Cyberpunk 2077", "res":"1080p", "settings":"Ультра (без RT)", "fps":"60-70"},
    {"game":"Alan Wake 2", "res":"1080p", "settings":"Средние + RT", "fps":"50-60"},
    {"game":"Hogwarts Legacy", "res":"1080p", "settings":"Ультра", "fps":"75-85"},
    {"game":"Starfield", "res":"1080p", "settings":"Высокие", "fps":"60-70"},
    {"game":"GTA V Enhanced", "res":"1440p", "settings":"Высокие", "fps":"80-90"},
    {"game":"Valorant", "res":"1440p", "settings":"Высокие", "fps":"220+"}
  ],
  "rtx-3080": [
    {"game":"Cyberpunk 2077", "res":"1440p", "settings":"Высокие (RT на минимуме)", "fps":"60-70"},
    {"game":"Alan Wake 2", "res":"1440p", "settings":"Средние + RT", "fps":"50-60"},
    {"game":"Hogwarts Legacy", "res":"1440p", "settings":"Ультра", "fps":"70-80"},
    {"game":"Starfield", "res":"1440p", "settings":"Высокие", "fps":"55-65"},
    {"game":"GTA V Enhanced", "res":"1440p", "settings":"Ультра", "fps":"90-100"},
    {"game":"Valorant", "res":"1440p", "settings":"Высокие", "fps":"260+"}
  ],
  "rtx-3090": [
    {"game":"Cyberpunk 2077", "res":"1440p", "settings":"Ультра + RT", "fps":"65-75"},
    {"game":"Alan Wake 2", "res":"1440p", "settings":"Средние + RT", "fps":"55-65"},
    {"game":"Hogwarts Legacy", "res":"4K", "settings":"Средние-Высокие", "fps":"50-60"},
    {"game":"Starfield", "res":"4K", "settings":"Средние", "fps":"45-55"},
    {"game":"GTA V Enhanced", "res":"4K", "settings":"Высокие", "fps":"70-80"},
    {"game":"Valorant", "res":"4K", "settings":"Высокие", "fps":"180+"}
  ]
,
  "rtx-5060": [
    {"game":"Cyberpunk 2077", "res":"1080p", "settings":"Высокие", "fps":"65-75"},
    {"game":"Alan Wake 2", "res":"1080p", "settings":"Средние + DLSS", "fps":"55-65"},
    {"game":"Hogwarts Legacy", "res":"1080p", "settings":"Ультра", "fps":"70-80"},
    {"game":"Starfield", "res":"1080p", "settings":"Высокие", "fps":"60-70"},
    {"game":"GTA V Enhanced", "res":"1080p", "settings":"Ультра", "fps":"90-100"},
    {"game":"Valorant", "res":"1080p", "settings":"Высокие", "fps":"220+"}
  ],
  "rtx-5060ti": [
    {"game":"Cyberpunk 2077", "res":"1080p", "settings":"Ультра + DLSS Качество", "fps":"75-85"},
    {"game":"Alan Wake 2", "res":"1080p", "settings":"Средние + DLSS", "fps":"65-75"},
    {"game":"Hogwarts Legacy", "res":"1440p", "settings":"Высокие", "fps":"70-80"},
    {"game":"Starfield", "res":"1440p", "settings":"Высокие", "fps":"60-70"},
    {"game":"GTA V Enhanced", "res":"1440p", "settings":"Ультра", "fps":"90-105"},
    {"game":"Valorant", "res":"1440p", "settings":"Высокие", "fps":"260+"}
  ],
  "rtx-5070": [
    {"game":"Cyberpunk 2077", "res":"1440p", "settings":"Ультра + DLSS Качество", "fps":"80-90"},
    {"game":"Alan Wake 2", "res":"1440p", "settings":"Средние + DLSS", "fps":"70-80"},
    {"game":"Hogwarts Legacy", "res":"1440p", "settings":"Ультра", "fps":"85-95"},
    {"game":"Starfield", "res":"1440p", "settings":"Высокие", "fps":"70-80"},
    {"game":"GTA V Enhanced", "res":"4K", "settings":"Высокие", "fps":"70-80"},
    {"game":"Valorant", "res":"4K", "settings":"Высокие", "fps":"220+"}
  ],
  "rtx-5070ti": [
    {"game":"Cyberpunk 2077", "res":"1440p", "settings":"Ультра + RT + DLSS Качество", "fps":"95-110"},
    {"game":"Alan Wake 2", "res":"1440p", "settings":"Ультра + RT + DLSS", "fps":"85-95"},
    {"game":"Hogwarts Legacy", "res":"4K", "settings":"Ультра", "fps":"60-70"},
    {"game":"Starfield", "res":"4K", "settings":"Высокие", "fps":"55-65"},
    {"game":"GTA V Enhanced", "res":"4K", "settings":"Ультра", "fps":"85-95"},
    {"game":"Valorant", "res":"4K", "settings":"Высокие", "fps":"300+"}
  ],
  "rtx-5080": [
    {"game":"Cyberpunk 2077", "res":"4K", "settings":"Ультра + DLSS Качество", "fps":"90-105"},
    {"game":"Alan Wake 2", "res":"4K", "settings":"Средние + RT + DLSS", "fps":"80-95"},
    {"game":"Hogwarts Legacy", "res":"4K", "settings":"Ультра", "fps":"95-110"},
    {"game":"Starfield", "res":"4K", "settings":"Высокие", "fps":"80-90"},
    {"game":"GTA V Enhanced", "res":"4K", "settings":"Ультра", "fps":"120-135"},
    {"game":"Valorant", "res":"4K", "settings":"Высокие", "fps":"360+"}
  ]


};

function renderGpuGames() {
  const pick = document.getElementById("gpu-pick");
  const host = document.getElementById("gpu-games");
  if (!pick || !host) return;
  const rows = (gpuGames && gpuGames[pick.value]) || [];
  host.textContent = "";
  const header = document.createElement("div");
  header.className = "gpu-row header";
  header.setAttribute("role", "row");
  ["Игра", "Разрешение", "Настройки", "FPS"].forEach(function (t) {
    const c = document.createElement("div");
    c.setAttribute("role", "columnheader");
    c.textContent = t;
    header.appendChild(c);
  });
  host.appendChild(header);
  if (!rows.length) {
    const empty = document.createElement("div");
    empty.className = "gpu-row";
    empty.setAttribute("role", "row");
    const cell = document.createElement("div");
    cell.setAttribute("role", "cell");
    cell.style.gridColumn = "1 / -1";
    cell.textContent = "Данных для этой карты пока нет.";
    empty.appendChild(cell);
    host.appendChild(empty);
    return;
  }
  rows.forEach(function (r) {
    const row = document.createElement("div");
    row.className = "gpu-row";
    row.setAttribute("role", "row");
    const cells = [
      {label: "Игра", value: r.game, cls: "gpu-game"},
      {label: "Разрешение", value: r.res},
      {label: "Настройки", value: r.settings},
      {label: "FPS", value: r.fps, cls: "gpu-fps"}
    ];
    cells.forEach(function (cinfo) {
      const cell = document.createElement("div");
      cell.setAttribute("role", "cell");
      cell.setAttribute("data-label", cinfo.label);
      if (cinfo.cls) cell.className = cinfo.cls;
      cell.textContent = cinfo.value;
      row.appendChild(cell);
    });
    host.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const pick = document.getElementById("gpu-pick");
  if (pick) {
    pick.addEventListener("change", renderGpuGames);
    renderGpuGames();
  }
});

// ---------- Accessible custom GPU picker ----------
function setupGpuCustomPicker() {
  const cs = document.getElementById("gpu-custom");
  const hidden = document.getElementById("gpu-pick");
  if (!cs || !hidden) return;
  const trigger = cs.querySelector(".custom-select-trigger");
  const label = trigger.querySelector("span");
  const options = Array.from(cs.querySelectorAll(".custom-select-option"));
  function selectValue(val) {
    const opt = options.find(function (o) { return o.dataset.value === val; });
    if (!opt) return;
    options.forEach(function (o) {
      o.classList.remove("selected");
      o.setAttribute("aria-selected", "false");
    });
    opt.classList.add("selected");
    opt.setAttribute("aria-selected", "true");
    label.textContent = opt.textContent;
    hidden.value = val;
    hidden.dispatchEvent(new Event("change", { bubbles: true }));
    cs.classList.remove("open");
    trigger.setAttribute("aria-expanded", "false");
  }
  const initialValue = hidden.value || (options[0] ? options[0].dataset.value : "");
  if (initialValue) selectValue(initialValue);
  function close() { cs.classList.remove("open"); trigger.setAttribute("aria-expanded", "false"); }
  trigger.addEventListener("click", function (e) {
    e.stopPropagation();
    cs.classList.contains("open") ? close() : (cs.classList.add("open"), trigger.setAttribute("aria-expanded", "true"), (cs.querySelector(".custom-select-option.selected") || options[0]).focus());
  });
  trigger.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); trigger.click(); }
    if (e.key === "ArrowDown") { e.preventDefault(); cs.classList.add("open"); trigger.setAttribute("aria-expanded", "true"); if (options[0]) options[0].focus(); }
    if (e.key === "Escape") { close(); }
  });
  options.forEach(function (opt, i) {
    opt.setAttribute("tabindex", "-1");
    opt.addEventListener("click", function (e) {
      e.stopPropagation();
      selectValue(opt.dataset.value);
      trigger.focus();
    });
    opt.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectValue(opt.dataset.value); trigger.focus(); }
      if (e.key === "ArrowDown") { e.preventDefault(); var n = Math.min(options.length - 1, i + 1); options[n].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); var p = Math.max(0, i - 1); options[p].focus(); }
      if (e.key === "Escape") { e.preventDefault(); close(); trigger.focus(); }
    });
  });
  document.addEventListener("click", function (e) {
    if (!cs.contains(e.target)) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
}
document.addEventListener("DOMContentLoaded", function () {
  setupGpuCustomPicker();
});
