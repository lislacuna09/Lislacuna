(() => {
  const T = {
    es: {
      title: "Lacuna | Liseth Vargas",
      "nav.home": "HOME",
      "nav.categories": "CATEGORÍAS",
      "nav.contact": "CONTACTO",
      "aria.nav": "Principal",
      "aria.lang": "Idioma",
      "aria.down": "Bajar",
      "alt.logo": "Lacuna",
      "alt.res1": "Moto y cámara",
      "alt.res2": "Portafolio 2026 Liseth Vargas",
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
      "alt.logo": "Lacuna",
      "alt.res1": "Motorcycle and camera",
      "alt.res2": "Portfolio 2026 Liseth Vargas",
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

  let saved = "es";
  try { saved = localStorage.getItem(KEY) || "es"; } catch (e) {}
  setLang(saved);
})();
