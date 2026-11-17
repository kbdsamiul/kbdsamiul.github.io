/* Samiul Alam, personal site. No libraries. Content comes from data/content.js */
(function () {
  "use strict";
  var D = window.SITE || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
  var el = function (tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  var get = function (path) { return path.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, D); };

  /* ---------- simple text bindings ---------- */
  $$("[data-bind]").forEach(function (n) { var v = get(n.getAttribute("data-bind")); if (v != null) n.innerHTML = v; });
  $("#year").textContent = new Date().getFullYear();
  document.title = D.name.first + " " + D.name.last + " | " + D.role;

  /* ---------- hero ---------- */
  var nameEl = $("#heroName");
  function word(text, cls, offset) {
    var w = el("span", "word " + cls);
    text.split("").forEach(function (c, i) {
      var ch = el("span", "ch"); var inner = el("span", "", c);
      inner.style.transitionDelay = (offset + i) * 55 + "ms";
      ch.appendChild(inner); w.appendChild(ch);
    });
    w.setAttribute("aria-hidden", "true");
    return w;
  }
  nameEl.setAttribute("aria-label", D.name.first + " " + D.name.last);
  nameEl.appendChild(word(D.name.first, "outline", 0));
  nameEl.appendChild(word(D.name.last, "solid", D.name.first.length));
  $("#portraitImg").src = D.portrait;

  var ABBR = { "LinkedIn": "in", "ResearchGate": "RG", "Google Scholar": "Sc", "ORCID": "iD" };
  var hs = $("#heroSocial");
  ((D.contact || {}).links || []).forEach(function (l) {
    var a = el("a", "social", ABBR[l.label] || l.label.charAt(0));
    a.href = l.url; a.target = "_blank"; a.rel = "noopener"; a.setAttribute("aria-label", l.label); a.title = l.label;
    hs.appendChild(a);
  });
  var mq = $("#heroMarquee");
  if (mq && (D.research || []).length) {
    var words = D.research.map(function (r) { return "<span>" + r.title + "</span>"; }).join("");
    mq.innerHTML = "<div>" + words + words + words + words + "</div>";
  }
  var roles = (D.roles && D.roles.length ? D.roles : [D.role]), roleEl = $("#roleText"), roleI = 0;
  roleEl.textContent = roles[0];
  if (roles.length > 1 && !reduce) {
    setInterval(function () {
      roleEl.classList.add("out");
      setTimeout(function () {
        roleI = (roleI + 1) % roles.length; roleEl.textContent = roles[roleI];
        roleEl.style.transition = "none"; roleEl.style.transform = "translateY(12px)";
        void roleEl.offsetWidth; roleEl.style.transition = ""; roleEl.style.transform = ""; roleEl.classList.remove("out");
      }, 450);
    }, 2800);
  }

  function fitName() {
    var stacked = window.innerWidth <= 700;
    nameEl.style.fontSize = "100px";
    var widths = $$(".word", nameEl).map(function (w) { return w.getBoundingClientRect().width; });
    var measured = stacked ? Math.max.apply(null, widths) : widths.reduce(function (a, b) { return a + b; }, 0) + 26 * (widths.length - 1);
    var size = 100 * nameEl.clientWidth / measured;
    var maxH = window.innerHeight * (stacked ? 0.17 : 0.34);
    nameEl.style.fontSize = Math.floor(Math.min(size, maxH)) + "px";
    var port = $("#heroPortrait");
    if (stacked) {
      var nr = nameEl.getBoundingClientRect(), foot = $(".hero__foot").getBoundingClientRect();
      var top = nr.top + window.scrollY + nr.height * 0.82;
      var footTop = foot.top + window.scrollY;
      port.style.height = Math.max(180, footTop - top) + "px";
    } else { port.style.height = ""; }
  }

  /* ---------- about ---------- */
  var aboutText = $("#aboutText");
  (D.about || []).forEach(function (p) { aboutText.appendChild(el("p", "reveal", p)); });
  var edu = $("#education");
  (D.education || []).forEach(function (e) {
    edu.appendChild(el("div", "edu__item reveal", "<strong>" + e.degree + "</strong><span>" + e.place + "</span><span>" + e.period + (e.note ? " · " + e.note : "") + "</span>" +
      (e.thesis ? "<span class=\"edu__thesis\"><em>Thesis</em> " + e.thesis + "</span>" : "") +
      (e.supervisor ? "<span class=\"edu__thesis\"><em>Supervisor</em> " + e.supervisor + "</span>" : "")));
  });
  var cvBtn = $("#cvButton");
  if (D.cv) { cvBtn.hidden = false; cvBtn.href = D.cv; cvBtn.target = "_blank"; cvBtn.rel = "noopener"; }
  var stats = $("#stats");
  (D.stats || []).forEach(function (s) {
    var n = el("div", "stat reveal", "<b data-to=\"" + s.value + "\" data-dec=\"" + (s.decimals || 0) + "\">" + (reduce ? s.value.toFixed(s.decimals || 0) : (0).toFixed(s.decimals || 0)) + "</b><span>" + s.label + "</span>");
    stats.appendChild(n);
  });

  /* ---------- research ---------- */
  var rr = $("#researchRows");
  (D.research || []).forEach(function (r) {
    rr.appendChild(el("div", "row reveal", "<div class=\"row__title\">" + r.title + "</div><div class=\"row__arrow\" aria-hidden=\"true\">↗</div><p class=\"row__text\">" + r.text + "</p>"));
  });

  /* ---------- publications ---------- */
  var TYPES = [
    { key: "all", label: "All" },
    { key: "article", label: "Research articles", single: "Research article" },
    { key: "review", label: "Review", single: "Review article" },
    { key: "chapter", label: "Book chapters", single: "Book chapter" },
    { key: "review-pending", label: "Under review", single: "Manuscript under review" }
  ];
  var pubs = D.publications || [];
  var me = new RegExp("\\b" + D.name.last + ", " + D.name.first.charAt(0) + "\\.(?! [A-Z]\\.)");
  var boldMe = function (a) { return a.replace(me, "<b>$&</b>"); };
  var filters = $("#filters"), pubRows = $("#pubRows");

  TYPES.forEach(function (t, i) {
    var count = t.key === "all" ? pubs.length : pubs.filter(function (p) { return p.type === t.key; }).length;
    if (!count) return;
    var b = el("button", "pill", t.label + " <sup>" + count + "</sup>");
    b.type = "button"; b.setAttribute("role", "tab"); b.setAttribute("aria-selected", i === 0 ? "true" : "false");
    b.addEventListener("click", function () {
      $$(".pill", filters).forEach(function (x) { x.setAttribute("aria-selected", "false"); });
      b.setAttribute("aria-selected", "true");
      $$(".pub", pubRows).forEach(function (row) {
        row.hidden = !(t.key === "all" || row.dataset.type === t.key);
        if (!row.hidden) row.classList.add("in");
      });
      layoutCurtain();
    });
    filters.appendChild(b);
  });

  pubs.forEach(function (p, i) {
    var b = el("button", "pub reveal",
      "<span class=\"pub__year\">" + p.year + "</span>" +
      "<span class=\"pub__body\"><span class=\"pub__title\">" + p.title + "</span><span class=\"pub__venue\">" + p.venue + (p.impact ? " <span class=\"if\">IF " + p.impact + "</span>" : "") + "</span></span>" +
      "<span class=\"pub__arrow\" aria-hidden=\"true\">↗</span>");
    b.type = "button"; b.dataset.type = p.type;
    b.addEventListener("click", function () { openDetail(i, b); });
    pubRows.appendChild(b);
  });

  /* ---------- publication detail ---------- */
  var detail = $("#detail"), lastFocus = null;
  function openDetail(i, from) {
    var p = pubs[i]; lastFocus = from;
    var t = TYPES.filter(function (x) { return x.key === p.type; })[0];
    $("#detailType").textContent = t ? t.single : "";
    $("#detailTitle").innerHTML = p.title;
    $("#detailAuthors").innerHTML = boldMe(p.authors);
    $("#detailVenue").textContent = p.venue;
    $("#detailYear").textContent = p.year;
    $("#detailImpactRow").hidden = !p.impact; $("#detailImpact").textContent = p.impact ? p.impact + " (2025 JIF)" : "";
    var doi = $("#detailDoi");
    if (p.doi) { doi.hidden = false; doi.href = "https://doi.org/" + p.doi; } else { doi.hidden = true; doi.removeAttribute("href"); }
    detail.hidden = false; document.body.classList.add("is-locked");
    detail.scrollTop = 0;
    requestAnimationFrame(function () { requestAnimationFrame(function () { detail.classList.add("open"); }); });
    $("#detailBack").focus();
  }
  function closeDetail() {
    detail.classList.remove("open"); document.body.classList.remove("is-locked");
    setTimeout(function () { detail.hidden = true; }, reduce ? 0 : 450);
    if (lastFocus) lastFocus.focus();
  }
  $("#detailBack").addEventListener("click", closeDetail);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !detail.hidden) closeDetail(); });

  /* ---------- experience, recognition, skills, gallery ---------- */
  var xp = $("#xpRows");
  (D.experience || []).forEach(function (x) {
    xp.appendChild(el("div", "xp__item reveal",
      "<div><div class=\"xp__org\">" + x.org + "</div><div class=\"xp__role\">" + x.role + "</div></div>" +
      "<div class=\"xp__period\">" + x.period + "</div>" + (x.text ? "<p class=\"xp__text\">" + x.text + "</p>" : "")));
  });
  function list(id, items) {
    var box = $(id);
    (items || []).forEach(function (a) {
      var when = a.year || a.date || "";
      var tag = a.type ? "<span class=\"tag\">" + a.type + "</span>" : "";
      var badge = a.abbr ? "<span class=\"mono\" aria-hidden=\"true\">" + a.abbr + "</span>" : "";
      var n = el("div", "item reveal" + (a.abbr ? " item--mono" : ""), badge + "<strong>" + tag + a.title + "</strong><time>" + when + "</time>" + (a.by ? "<em>" + a.by + "</em>" : ""));
      box.appendChild(n);
    });
  }
  list("#awards", D.awards); list("#conferences", D.conferences);
  list("#trainingList", D.training); list("#memberships", D.memberships);
  list("#leadershipList", D.leadership); list("#countries", D.countries);
  if (!(D.leadership || []).length && !(D.countries || []).length) $("#leadership").hidden = true;
  $("#impactNote").textContent = pubs.some(function (p) { return p.impact; }) ? (D.impactNote || "") : "";
  if (!(D.training || []).length && !(D.memberships || []).length) $("#training").hidden = true;
  var svg = function (d) { return "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\">" + d + "</svg>"; };
  var ICONS = {
    flask: svg("<path d=\"M9 3h6\"/><path d=\"M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3\"/><path d=\"M7 15h10\"/>"),
    gauge: svg("<path d=\"M4 16a8 8 0 1 1 16 0\"/><path d=\"M12 16l4-5\"/><circle cx=\"12\" cy=\"16\" r=\"1.2\"/><path d=\"M4 20h16\"/>"),
    microbe: svg("<ellipse cx=\"12\" cy=\"12\" rx=\"7\" ry=\"4.5\" transform=\"rotate(-30 12 12)\"/><circle cx=\"10\" cy=\"12\" r=\"1\"/><circle cx=\"14\" cy=\"11\" r=\"1\"/><path d=\"M18 5l2-2M6 19l-2 2M17 17l2 2M7 7L5 5\"/>"),
    chart: svg("<path d=\"M4 4v16h16\"/><path d=\"M7 15l4-4 3 3 5-6\"/>"),
    camera: svg("<path d=\"M4 8h3l2-3h6l2 3h3v11H4z\"/><circle cx=\"12\" cy=\"13\" r=\"3.5\"/>")
  };
  var sg = $("#skillGroups");
  (D.skills || []).forEach(function (s) {
    sg.appendChild(el("div", "skill reveal", "<h3>" + (ICONS[s.icon] ? "<span class=\"skill__icon\" aria-hidden=\"true\">" + ICONS[s.icon] + "</span>" : "") + s.group + "</h3><ul>" + s.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"));
  });
  if (D.gallery && D.gallery.length) {
    $("#gallery").hidden = false;
    D.gallery.forEach(function (g) { var im = el("img", "reveal"); im.src = g.src; im.alt = g.alt || ""; im.loading = "lazy"; $("#galleryGrid").appendChild(im); });
  }

  /* ---------- contact ---------- */
  var c = D.contact || {};
  if (c.email) { $("#emailButton").href = "mailto:" + c.email; $("#emailText").textContent = c.email; }
  if (c.phone) { var ph = el("a", "", c.phone); ph.href = "tel:" + c.phone.replace(/\s/g, ""); $("#phoneText").appendChild(document.createTextNode(" · ")); $("#phoneText").appendChild(ph); }
  (c.links || []).forEach(function (l) {
    var a = el("a", "pill", l.label + " <span class=\"arrow\" aria-hidden=\"true\">↗</span>");
    a.href = l.url; a.target = "_blank"; a.rel = "noopener"; $("#contactLinks").appendChild(a);
  });

  /* ---------- nav counts and heading spans ---------- */
  var counts = { research: (D.research || []).length, publications: pubs.filter(function (p) { return p.type !== "review-pending"; }).length, experience: (D.experience || []).length };
  $$("[data-count]").forEach(function (n) { n.textContent = counts[n.getAttribute("data-count")] || ""; });
  $$(".heading h2").forEach(function (h) { h.innerHTML = "<span>" + h.innerHTML + "</span>"; });

  /* ---------- reveal on scroll ---------- */
  function countUp(b) {
    var to = +b.dataset.to, dec = +(b.dataset.dec || 0), t0 = null, dur = 1200;
    function step(t) { if (!t0) t0 = t; var k = clamp((t - t0) / dur, 0, 1); b.textContent = (to * (1 - Math.pow(1 - k, 3))).toFixed(dec); if (k < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  var targets = $$(".reveal, .heading");
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (n) { n.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      var shown = 0;
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var n = e.target; n.style.transitionDelay = Math.min(shown++, 8) * 70 + "ms";
        n.classList.add("in"); io.unobserve(n);
        setTimeout(function () { n.style.transitionDelay = ""; }, 1600);
        var b = $("b[data-to]", n); if (b) countUp(b);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    targets.forEach(function (n) { io.observe(n); });
  }

  /* ---------- curtain footer ---------- */
  var page = $("#page"), footer = $("#contact");
  function layoutCurtain() {
    var fits = footer.offsetHeight <= window.innerHeight + 1 && !reduce;
    document.body.classList.toggle("curtain", fits);
    page.style.marginBottom = fits ? footer.offsetHeight + "px" : "";
  }
  $$("a[href='#contact']").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: reduce ? "auto" : "smooth" });
    });
  });

  /* ---------- scroll driven effects ---------- */
  var bar = $("#progressBar"), topbar = $("#topbar"), portrait = $("#heroPortrait");
  var ghosts = $$(".ghost"), dark = $(".dark-inner"), lastY = 0, ticking = false;
  var heroWords = $$(".word", nameEl), mx = 0, my = 0, tx = 0, ty = 0, pointerLoop = false;
  function heroMotion(y) {
    portrait.style.transform = "translate(calc(-50% + " + (mx * 18).toFixed(1) + "px), " + (y * 0.14 + my * 10).toFixed(1) + "px)";
    var split = Math.min(y * 0.35, window.innerWidth * 0.5);
    heroWords.forEach(function (w, i) {
      var dir = i === 0 ? -1 : 1;
      w.style.transform = "translate(" + (dir * split - mx * 14).toFixed(1) + "px, " + (-my * 8).toFixed(1) + "px)";
    });
  }
  function pointerStep() {
    mx += (tx - mx) * 0.08; my += (ty - my) * 0.08;
    heroMotion(window.scrollY);
    if (Math.abs(tx - mx) > 0.002 || Math.abs(ty - my) > 0.002) requestAnimationFrame(pointerStep); else pointerLoop = false;
  }
  if (!reduce && window.matchMedia("(pointer: fine)").matches) {
    $(".hero").addEventListener("mousemove", function (e) {
      tx = e.clientX / window.innerWidth * 2 - 1; ty = e.clientY / window.innerHeight * 2 - 1;
      if (!pointerLoop) { pointerLoop = true; requestAnimationFrame(pointerStep); }
    });
    $(".hero").addEventListener("mouseleave", function () { tx = 0; ty = 0; if (!pointerLoop) { pointerLoop = true; requestAnimationFrame(pointerStep); } });
  }
  function onFrame() {
    ticking = false;
    var y = window.scrollY, vh = window.innerHeight;
    var max = document.documentElement.scrollHeight - vh;
    bar.style.transform = "scaleX(" + (max > 0 ? clamp(y / max, 0, 1) : 0) + ")";
    topbar.classList.toggle("is-hidden", y > vh * 0.6 && y > lastY + 2);
    if (y < lastY - 2) topbar.classList.remove("is-hidden");
    lastY = y;
    if (reduce) return;
    if (y < vh) heroMotion(y);
    ghosts.forEach(function (g) {
      var r = g.parentNode.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      g.style.setProperty("--gx", ((r.top - vh * 0.5) * -0.18).toFixed(1) + "px");
    });
    if (dark) {
      var d = dark.getBoundingClientRect();
      dark.style.setProperty("--p", clamp((vh - d.top) / (vh * 0.7), 0, 1).toFixed(3));
      dark.style.setProperty("--q", clamp(d.bottom / (vh * 0.7), 0, 1).toFixed(3));
    }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(onFrame); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { fitName(); layoutCurtain(); onScroll(); });

  /* ---------- start ---------- */
  function start() {
    fitName(); layoutCurtain(); onFrame();
    requestAnimationFrame(function () { document.body.classList.remove("is-loading"); });
  }
  var started = false;
  function once() { if (started) return; started = true; start(); }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(once);
  setTimeout(once, 1200);
  window.addEventListener("load", function () { fitName(); layoutCurtain(); });
})();
