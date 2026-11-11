(() => {
  /* ---------- i18n ---------- */
  const T = {
    es: {
      title: "Lacuna | Liseth Vargas",
      "nav.home": "HOME",
      "nav.categories": "CATEGORÍAS",
      "nav.contact": "CONTACTO",
      "aria.nav": "Principal",
      "aria.lang": "Idioma",
      "aria.down": "Bajar",
      "aria.cats": "Categorías",
      "aria.prev": "Anterior",
      "aria.next": "Siguiente",
      "alt.logo": "Lacuna",
      "alt.res1": "Moto y cámara",
      "alt.res2": "Portafolio 2026 Liseth Vargas",
      "cat.editorial": "Editorial",
      "cat.photo": "Fotografía",
      "cat.illustration": "Ilustración",
      bio: "Como <strong>Alquimista visual,</strong> transformo conceptos abstractos como el Barrio donde crecí, mi amor por el café o la idea de libertad que siento cuando voy en mi moto escuchando una buena canción, en un sistema de texturas, colores y formas que generan algo en aquellos ojos que tienen la intención de ver.",
      footer: 'DISEÑO WEB LISETH VARGAS <span class="year">2026</span>'
    },
    en: {
      title: "Lacuna | Liseth Vargas",
      "nav.home": "HOME",
      "nav.categories": "CATEGORIES",
      "nav.contact": "CONTACT",
      "aria.nav": "Main",
      "aria.lang": "Language",
      "aria.down": "Scroll down",
      "aria.cats": "Categories",
      "aria.prev": "Previous",
      "aria.next": "Next",
      "alt.logo": "Lacuna",
      "alt.res1": "Motorcycle and camera",
      "alt.res2": "Portfolio 2026 Liseth Vargas",
      "cat.editorial": "Editorial",
      "cat.photo": "Photography",
      "cat.illustration": "Illustration",
      bio: "As a <strong>visual alchemist,</strong> I transform abstract concepts like the neighborhood where I grew up, my love for coffee, or the feeling of freedom when riding my motorcycle listening to good music, into a system of textures, colors, and shapes that spark something in eyes willing to see.",
      footer: 'WEB DESIGN LISETH VARGAS <span class="year">2026</span>'
    }
  };
  const KEY = "lang";

  function setLang(lang) {
    const d = T[lang];
    if (!d) return;
    document.documentElement.lang = lang;
    document.title = d.title;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = d[el.dataset.i18n]; });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => { el.alt = d[el.dataset.i18nAlt]; });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", d[el.dataset.i18nAria]));
    document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  document.querySelectorAll(".lang button").forEach(b => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });

  /* ---------- Vistas HOME / CATEGORÍAS ---------- */
  const views = {
    home: document.getElementById("home"),
    categorias: document.getElementById("categorias")
  };
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "home";
  let timer;

  function showView(name, instant) {
    const next = views[name];
    if (!next) return;
    current = name;
    clearTimeout(timer);
    navLinks.forEach(l => l.classList.toggle("is-active", l.dataset.view === name));
    try { history.replaceState(null, "", "#" + name); } catch (e) {}

    const swap = () => {
      Object.values(views).forEach(v => { v.hidden = v !== next; });
      void next.offsetWidth;
      next.classList.add("is-active");
      window.scrollTo(0, 0);
    };

    Object.values(views).forEach(v => v.classList.remove("is-active"));
    if (instant) swap();
    else timer = setTimeout(swap, 400);
  }

  document.querySelectorAll("[data-view]").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      showView(a.dataset.view);
    });
  });

  /* ---------- Carrusel de categorías ---------- */
  const slides = [...document.querySelectorAll(".slide")];
  const bgs = [...document.querySelectorAll(".cat-bg")];
  const bars = [...document.querySelectorAll(".slider .bar")];
  const hits = [...document.querySelectorAll(".hit")];
  const total = slides.length;
  let idx = 0;

  ["FondoEditorial.png", "FondoFotografia.png", "FondoIlustracion.png"].forEach(src => {
    const i = new Image();
    i.src = src;
  });

  function go(n) {
    idx = (n + total) % total;
    slides.forEach((s, i) => {
      const active = i === idx;
      s.classList.toggle("is-active", active);
      s.classList.toggle("is-next", i > idx);
      s.setAttribute("aria-hidden", String(!active));
      s.tabIndex = active ? 0 : -1;
    });
    bgs.forEach((b, i) => b.classList.toggle("is-active", i === idx));
    bars.forEach((b, i) => b.classList.toggle("is-active", i === idx));
    hits.forEach((h, i) => h.setAttribute("aria-current", String(i === idx)));
  }

  document.querySelector(".arrow--prev").addEventListener("click", () => go(idx - 1));
  document.querySelector(".arrow--next").addEventListener("click", () => go(idx + 1));
  hits.forEach((h, i) => h.addEventListener("click", () => go(i)));

  const row = document.querySelector(".carousel-row");
  let startX = null;
  let swiped = false;

  row.addEventListener("pointerdown", e => { startX = e.clientX; swiped = false; });
  row.addEventListener("pointerup", e => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 45) {
      swiped = true;
      go(dx < 0 ? idx + 1 : idx - 1);
    }
  });
  row.addEventListener("pointercancel", () => { startX = null; });

  slides.forEach(s => s.addEventListener("click", () => {
    if (swiped) { swiped = false; return; }
    go(idx + 1);
  }));

  document.addEventListener("keydown", e => {
    if (current !== "categorias") return;
    if (e.key === "ArrowLeft") go(idx - 1);
    if (e.key === "ArrowRight") go(idx + 1);
  });

  /* ---------- Init ---------- */
  let saved = "es";
  try { saved = localStorage.getItem(KEY) || "es"; } catch (e) {}
  setLang(saved);
  go(0);
  const hash = location.hash.slice(1);
  showView(views[hash] ? hash : "home", true);
})();
