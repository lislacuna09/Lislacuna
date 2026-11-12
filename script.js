(() => {
  const IMG = "assets/img/";

  /* ---------- Contenido ---------- */
  const CATS = [
    {
      id: "editorial", tex: "tex-menta",
      name: { es: "EDITORIAL", en: "EDITORIAL" },
      cover: ["ekos-portada", "ekos-pag1", "ekos-pag2"],
      projects: [
        { id: "comic", img: "proy-comic", sub: { es: "INFOGRAFÍA", en: "INFOGRAPHIC" }, title: { es: "CÓMIC", en: "COMIC" },
          desc: { es: "Es un proyecto realizado como ejercicio académico, en donde se diseñó un cómic y todo un universo gráfico que lo acompaña.",
                  en: "An academic project in which I designed a comic and the whole graphic universe around it." },
          credit: { es: "Proyecto grupal.", en: "Group project." },
          section: { type: "slide", src: "sec-comic" } },
        { id: "lexeco", img: "proy-lexeco", sub: { es: "REVISTA", en: "MAGAZINE" }, title: { es: "LEXECO", en: "LEXECO" },
          desc: { es: "Es un proyecto realizado como ejercicio académico, se propuso una revista que fusionara dos campos completamente distintos; Derecho y Cuidado ambiental.",
                  en: "An academic project: a magazine that merges two completely different fields, Law and Environmental care." },
          credit: { es: "Proyecto individual.", en: "Individual project." },
          section: { type: "video", src: "assets/video/lexeco.mp4", poster: "sec-lexeco" } },
        { id: "afiches", img: "proy-afiches", sub: { es: "DISEÑO", en: "POSTER" }, title: { es: "AFICHES", en: "DESIGN" },
          desc: { es: "Son proyectos realizados como ejercicios académicos.", en: "Projects made as academic exercises." },
          credit: { es: "Proyectos grupales.", en: "Group projects." },
          section: { type: "slide", src: "sec-afiches" } }
      ]
    },
    {
      id: "ilustracion", tex: "tex-naranja",
      name: { es: "ILUSTRACIÓN", en: "ILLUSTRATION" },
      cover: "cat-ilustracion",
      projects: [
        { id: "analoga", img: "proy-analoga", sub: { es: "ILUSTRACIÓN", en: "ANALOG" }, title: { es: "ANÁLOGA", en: "ILLUSTRATION" },
          credit: { es: "Proyectos individuales.", en: "Individual projects." }, section: { type: "slide", src: "sec-analoga" } },
        { id: "digital", img: "proy-digital", sub: { es: "ILUSTRACIÓN", en: "DIGITAL" }, title: { es: "DIGITAL", en: "ILLUSTRATION" },
          credit: { es: "Proyectos individuales.", en: "Individual projects." }, section: { type: "slide", src: "sec-digital" } },
        { id: "moda", img: "proy-moda", sub: { es: "ILUSTRACIÓN PARA", en: "ILLUSTRATION FOR" }, title: { es: "LA MODA", en: "FASHION" },
          credit: { es: "Proyectos individuales.", en: "Individual projects." }, section: { type: "slide", src: "sec-moda" } }
      ]
    },
    {
      id: "fotografia", tex: "tex-verde",
      name: { es: "FOTOGRAFÍA", en: "PHOTOGRAPHY" },
      cover: "cat-fotografia",
      projects: [
        { id: "producto", img: "proy-producto", sub: { es: "FOTOGRAFÍA DE", en: "PRODUCT" }, title: { es: "PRODUCTO", en: "PHOTOGRAPHY" },
          credit: { es: "Proyectos individuales.", en: "Individual projects." }, section: { type: "gallery", key: "producto" } },
        { id: "arquitectura", img: "proy-arquitectura", sub: { es: "FOTOGRAFÍA", en: "ARCHITECTURAL" }, title: { es: "ARQUITECTÓNICA", en: "PHOTOGRAPHY" },
          credit: { es: "Proyectos individuales.", en: "Individual projects." }, section: { type: "gallery", key: "arquitectura" } },
        { id: "modelos", img: "proy-modelos", sub: { es: "FOTOGRAFÍA DE", en: "MODEL" }, title: { es: "MODELOS", en: "PHOTOGRAPHY" },
          credit: { es: "Proyectos individuales.", en: "Individual projects." }, section: { type: "gallery", key: "modelos" } }
      ]
    }
  ];

  const T = {
    es: {
      "nav.home": "HOME", "nav.portfolio": "PORTAFOLIO", "nav.contact": "CONTACTO",
      "aria.nav": "Principal", "aria.lang": "Idioma", "aria.down": "Bajar", "aria.prev": "Anterior", "aria.next": "Siguiente", "aria.close": "Cerrar",
      "alt.arc": "Diseño gráfico", "alt.moto": "Ilustración de una moto y una cámara Minolta", "alt.portrait": "Liseth Vargas sosteniendo una cámara", "alt.cat": "Ilustración de un gato",
      bio: "Como <strong>Alquimista visual,</strong> transformo conceptos abstractos como el Barrio donde crecí, mi amor por el café o la idea de libertad que siento cuando voy en mi moto escuchando una buena canción, en un sistema de texturas, colores y formas que generan algo en aquellos ojos que tienen la intención de ver.",
      tools: "HERRAMIENTAS", foot: "DISEÑO WEB",
      "contact.title": "CONTÁCTAME", "contact.name": "Nombre", "contact.email": "Correo", "contact.msg": "Mensaje", "contact.send": "ENVIAR",
      "contact.leave": "Deja tu mensaje", "contact.follow": "Sígueme en",
      "contact.missing": "Completa todos los campos con un correo válido.", "contact.opening": "Abriendo tu aplicación de correo…",
      "contact.subject": "Mensaje desde el portafolio", "contact.from": "De",
      view: "VER PROYECTO", back: "VOLVER", photos: "FOTOS", open: "Ver en tamaño completo"
    },
    en: {
      "nav.home": "HOME", "nav.portfolio": "PORTFOLIO", "nav.contact": "CONTACT",
      "aria.nav": "Main", "aria.lang": "Language", "aria.down": "Scroll down", "aria.prev": "Previous", "aria.next": "Next", "aria.close": "Close",
      "alt.arc": "Graphic design", "alt.moto": "Illustration of a motorcycle and a Minolta camera", "alt.portrait": "Liseth Vargas holding a camera", "alt.cat": "Illustration of a cat",
      bio: "As a <strong>visual alchemist,</strong> I transform abstract concepts like the neighborhood where I grew up, my love for coffee or the feeling of freedom when I ride my motorcycle listening to a good song, into a system of textures, colors and shapes that spark something in the eyes that intend to see.",
      tools: "TOOLS", foot: "WEB DESIGN",
      "contact.title": "CONTACT ME", "contact.name": "Name", "contact.email": "Email", "contact.msg": "Message", "contact.send": "SEND",
      "contact.leave": "Leave me a message", "contact.follow": "Follow me on",
      "contact.missing": "Please fill in every field with a valid email.", "contact.opening": "Opening your email app…",
      "contact.subject": "Message from the portfolio", "contact.from": "From",
      view: "VIEW PROJECT", back: "BACK", photos: "PHOTOS", open: "View full size"
    }
  };

  let lang = "es";
  try { lang = localStorage.getItem("lang") || "es"; } catch (e) {}
  const t = k => T[lang][k] ?? k;
  const L = o => (o && typeof o === "object" ? o[lang] : o) || "";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const el = (tag, attrs = {}, html = "") => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (html) n.innerHTML = html;
    return n;
  };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Estado ---------- */
  let catIdx = 0;
  const projIdx = {};
  let route = { name: "home" };

  /* ---------- Categorías ---------- */
  const cats = { bgs: $(".cats-bgs"), titles: $(".cats-titles"), stage: $(".cats-stage"), dots: $(".cats-dots") };
  CATS.forEach((c, i) => {
    cats.bgs.append(el("div", { class: "cats-bg", style: `background-image:url(${IMG}${c.tex}.jpg)` }));
    cats.titles.append(el("h2", { class: "cats-title" }));
    const slide = el("button", { type: "button", class: "cats-slide", "data-i": i });
    slide.innerHTML = Array.isArray(c.cover)
      ? `<span class="ekos">${c.cover.map(s => `<img src="${IMG}${s}.jpg" alt="" draggable="false" />`).join("")}</span>`
      : `<img src="${IMG}${c.cover}.jpg" alt="" draggable="false" />`;
    slide.addEventListener("click", () => { if (!swallowClick) location.hash = `#portafolio/${c.id}`; });
    cats.stage.append(slide);
    const d = el("button", { type: "button", class: "dot", role: "tab", "data-i": i });
    d.addEventListener("click", () => setCat(i));
    cats.dots.append(d);
  });

  function setCat(i) {
    catIdx = (i + CATS.length) % CATS.length;
    $$(".cats-bg").forEach((b, k) => b.classList.toggle("is-active", k === catIdx));
    $$(".cats-title").forEach((h, k) => { h.classList.toggle("is-active", k === catIdx); h.textContent = L(CATS[k].name); });
    $$(".cats-slide").forEach((s, k) => {
      const on = k === catIdx;
      s.classList.toggle("is-active", on);
      s.tabIndex = on ? 0 : -1;
      s.setAttribute("aria-hidden", String(!on));
      s.setAttribute("aria-label", L(CATS[k].name));
    });
    $$(".dot", cats.dots).forEach((d, k) => { d.setAttribute("aria-selected", String(k === catIdx)); d.setAttribute("aria-label", L(CATS[k].name)); });
  }
  $(".v-cats .arrow-prev").addEventListener("click", () => setCat(catIdx - 1));
  $(".v-cats .arrow-next").addEventListener("click", () => setCat(catIdx + 1));

  /* ---------- Proyectos ---------- */
  const proj = { cards: $(".proj-cards"), dots: $(".proj-dots"), text: $(".proj-text") };
  let projCat = null;

  function renderProj(cat) {
    projCat = cat;
    proj.cards.innerHTML = ""; proj.dots.innerHTML = ""; proj.text.innerHTML = "";
    cat.projects.forEach((p, i) => {
      const card = el("button", { type: "button", class: "card", "data-i": i });
      card.innerHTML = `<img src="${IMG}${p.img}.jpg" alt="" draggable="false" />`;
      card.addEventListener("click", () => {
        if (swallowClick) return;
        if (i === projIdx[cat.id]) location.hash = `#portafolio/${cat.id}/${p.id}`;
        else setProj(i);
      });
      proj.cards.append(card);
      const d = el("button", { type: "button", class: "dot", role: "tab" });
      d.addEventListener("click", () => setProj(i));
      proj.dots.append(d);
      const desc = p.desc ? `<p class="pt-desc">${esc(L(p.desc))}</p>` : "";
      proj.text.append(el("div", { class: "pt" },
        `<p class="pt-sub">${esc(L(p.sub))}</p><h2 class="pt-title">${esc(L(p.title))}</h2>${desc}` +
        `<p class="pt-credit">${esc(L(p.credit))}</p>` +
        `<a class="pt-cta" href="#portafolio/${cat.id}/${p.id}">${t("view")} <span aria-hidden="true">→</span></a>`));
    });
    setProj(projIdx[cat.id] || 0);
  }
  function setProj(i) {
    const n = projCat.projects.length;
    const idx = (i + n) % n;
    projIdx[projCat.id] = idx;
    $$(".card", proj.cards).forEach((c, k) => {
      c.classList.toggle("is-active", k === idx);
      c.setAttribute("aria-label", `${L(projCat.projects[k].sub)} ${L(projCat.projects[k].title)}`);
    });
    $$(".dot", proj.dots).forEach((d, k) => { d.setAttribute("aria-selected", String(k === idx)); d.setAttribute("aria-label", L(projCat.projects[k].title)); });
    $$(".pt", proj.text).forEach((p, k) => { p.classList.toggle("is-active", k === idx); p.toggleAttribute("inert", k !== idx); });
  }
  $(".v-proj .arrow-prev").addEventListener("click", () => setProj(projIdx[projCat.id] - 1));
  $(".v-proj .arrow-next").addEventListener("click", () => setProj(projIdx[projCat.id] + 1));

  /* ---------- Sección ---------- */
  const secView = $(".v-sec"), secBody = $(".sec-body"), secBack = $(".sec-back");
  let galList = [];

  function renderSec(cat, p) {
    secView.style.backgroundImage = `url(${IMG}${cat.tex}.jpg)`;
    secBack.href = `#portafolio/${cat.id}`;
    $("span", secBack).textContent = `${t("back")} · ${L(cat.name)}`;
    secBody.className = "sec-body";
    const s = p.section;
    const label = `${L(p.sub)} ${L(p.title)}`;
    if (s.type === "slide") {
      secBody.innerHTML = `<img class="sec-media" src="${IMG}${s.src}.jpg" alt="${esc(label)}" />` +
        `<a class="sec-zoom" href="${IMG}${s.src}.jpg" target="_blank" rel="noopener">${t("open")} ↗</a>`;
    } else if (s.type === "video") {
      secBody.innerHTML = `<video class="sec-media" src="${s.src}" poster="${IMG}${s.poster}.jpg" autoplay muted loop playsinline controls aria-label="${esc(label)}"></video>`;
    } else {
      secBody.classList.add("is-gal");
      const sizes = (window.GALERIAS || {})[s.key] || [];
      galList = sizes.map((_, i) => `assets/galeria/${s.key}/${String(i + 1).padStart(2, "0")}`);
      secBody.innerHTML = `<header class="gal-head"><div><p>${esc(L(p.sub))}</p><h2>${esc(L(p.title))}</h2></div><p>${sizes.length} ${t("photos")}</p></header>` +
        `<div class="gal">${sizes.map(([w, h], i) =>
          `<button type="button" data-i="${i}" aria-label="${esc(label)} ${i + 1}"><img src="${galList[i]}-t.jpg" width="${w}" height="${h}" loading="lazy" decoding="async" alt="" /></button>`).join("")}</div>`;
      $$(".gal button", secBody).forEach(b => b.addEventListener("click", () => openLb(+b.dataset.i)));
    }
  }

  /* ---------- Lightbox ---------- */
  const lb = $(".lightbox"), lbImg = $(".lb-img"), lbCount = $(".lb-count");
  let lbIdx = 0, lbReturn = null;
  function openLb(i) { lbReturn = document.activeElement; lb.hidden = false; showLb(i); $(".lb-close").focus(); document.body.style.overflow = "hidden"; }
  function showLb(i) {
    lbIdx = (i + galList.length) % galList.length;
    lbImg.src = `${galList[lbIdx]}.jpg`;
    lbCount.textContent = `${lbIdx + 1} / ${galList.length}`;
    [lbIdx + 1, lbIdx - 1].forEach(k => { const im = new Image(); im.src = `${galList[(k + galList.length) % galList.length]}.jpg`; });
  }
  function closeLb() { lb.hidden = true; lbImg.removeAttribute("src"); document.body.style.overflow = ""; if (lbReturn) lbReturn.focus(); }
  $(".lb-close").addEventListener("click", closeLb);
  $(".lb-prev").addEventListener("click", () => showLb(lbIdx - 1));
  $(".lb-next").addEventListener("click", () => showLb(lbIdx + 1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });

  /* ---------- Gestos y teclado ---------- */
  let swallowClick = false;
  function swipe(node, onLeft, onRight) {
    let x0 = null;
    node.addEventListener("pointerdown", e => { x0 = e.clientX; swallowClick = false; });
    node.addEventListener("pointerup", e => {
      if (x0 === null) return;
      const dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 45) { swallowClick = true; (dx < 0 ? onLeft : onRight)(); setTimeout(() => { swallowClick = false; }, 0); }
    });
    node.addEventListener("pointercancel", () => { x0 = null; });
  }
  swipe($(".cats-stage"), () => setCat(catIdx + 1), () => setCat(catIdx - 1));
  swipe(proj.cards, () => setProj(projIdx[projCat.id] + 1), () => setProj(projIdx[projCat.id] - 1));
  swipe(lb, () => showLb(lbIdx + 1), () => showLb(lbIdx - 1));

  document.addEventListener("keydown", e => {
    if (!lb.hidden) {
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") showLb(lbIdx - 1);
      if (e.key === "ArrowRight") showLb(lbIdx + 1);
      return;
    }
    if (e.target.closest("input, textarea")) return;
    const d = e.key === "ArrowLeft" ? -1 : e.key === "ArrowRight" ? 1 : 0;
    if (!d) return;
    if (route.name === "portafolio") setCat(catIdx + d);
    if (route.name === "categoria") setProj(projIdx[projCat.id] + d);
  });

  /* ---------- Rutas ---------- */
  const views = $$(".view");
  function parse() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts[0] === "contacto") return { name: "contacto" };
    if (parts[0] === "portafolio") {
      const cat = CATS.find(c => c.id === parts[1]);
      if (!cat) return { name: "portafolio" };
      const p = cat.projects.find(x => x.id === parts[2]);
      if (!p) return { name: "categoria", cat };
      return { name: "seccion", cat, p };
    }
    return { name: "home" };
  }
  function render(scroll = true) {
    route = parse();
    if (!lb.hidden) closeLb();
    const navKey = route.name === "home" || route.name === "contacto" ? route.name : "portafolio";
    document.body.dataset.route = navKey;
    document.body.dataset.theme = route.name === "categoria" || route.name === "seccion" ? route.cat.id : "";
    $$(".hdr-nav a").forEach(a => {
      const on = a.dataset.nav === navKey;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (route.name === "portafolio") setCat(catIdx);
    if (route.name === "categoria") {
      catIdx = CATS.indexOf(route.cat);
      renderProj(route.cat);
    }
    if (route.name === "seccion") {
      catIdx = CATS.indexOf(route.cat);
      projIdx[route.cat.id] = route.cat.projects.indexOf(route.p);
      renderSec(route.cat, route.p);
    } else {
      secBody.innerHTML = "";
    }
    views.forEach(v => { v.hidden = v.dataset.view !== route.name; });
    if (scroll) window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", () => render());

  /* ---------- Contacto ---------- */
  const form = $(".contact-form"), note = $(".form-note");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const f = form.elements;
    let ok = true;
    [f.nombre, f.correo, f.mensaje].forEach(inp => {
      const bad = !inp.value.trim() || (inp.type === "email" && !inp.checkValidity());
      inp.setAttribute("aria-invalid", String(bad));
      if (bad) ok = false;
    });
    if (!ok) { note.textContent = t("contact.missing"); return; }
    const body = `${f.mensaje.value.trim()}\n\n${t("contact.from")}: ${f.nombre.value.trim()} <${f.correo.value.trim()}>`;
    note.textContent = t("contact.opening");
    location.href = `mailto:lislacuna09@gmail.com?subject=${encodeURIComponent(t("contact.subject"))}&body=${encodeURIComponent(body)}`;
  });
  form.addEventListener("input", e => { if (e.target.getAttribute("aria-invalid") === "true") e.target.setAttribute("aria-invalid", "false"); });

  /* ---------- Idioma ---------- */
  function setLang(l) {
    if (!T[l]) return;
    lang = l;
    document.documentElement.lang = l;
    $$("[data-i18n]").forEach(n => { n.innerHTML = t(n.dataset.i18n); });
    $$("[data-i18n-alt]").forEach(n => { n.alt = t(n.dataset.i18nAlt); });
    $$("[data-i18n-aria]").forEach(n => n.setAttribute("aria-label", t(n.dataset.i18nAria)));
    $$("[data-i18n-ph]").forEach(n => { n.placeholder = t(n.dataset.i18nPh); });
    $$(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
    try { localStorage.setItem("lang", l); } catch (e) {}
    render(false);
  }
  $$(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

  CATS.forEach(c => { const i = new Image(); i.src = `${IMG}${c.tex}.jpg`; });
  setLang(lang);
})();
