/* samiulalam.site/science. Animated mechanism sketches. No libraries. */
(function () {
  "use strict";
  var S = window.SCIENCE || { projects: [] };
  var NS = "http://www.w3.org/2000/svg";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;"); };
  var on = function (list) { return (list || []).join(","); };
  var strip = function (h) { var d = document.createElement("div"); d.innerHTML = h; return d.textContent; };

  $("#question").textContent = S.question || "";
  $("#intro").textContent = S.intro || "";
  $("#year").textContent = new Date().getFullYear();

  /* ---------- meters (shared) ---------- */
  function meters(list, x) {
    var out = "";
    (list || []).forEach(function (m, k) {
      var y = 62 + k * 56;
      var kind = /defen|growth|water|glyoxalase/i.test(m.label) ? "good" : "warn";
      out += '<text x="' + x + '" y="' + y + '" class="lbl">' + esc(m.label) + '</text>' +
        '<rect x="' + x + '" y="' + (y + 10) + '" width="150" height="6" rx="3" class="mbg"/>' +
        '<rect x="' + x + '" y="' + (y + 10) + '" width="150" height="6" rx="3" class="mfill ' + kind + '" data-vals="' + on(m.vals) + '"/>';
    });
    return out;
  }
  function rods(cx, cy, list, cls, onList) {
    var g = '<g class="tog" data-on="' + on(onList) + '">';
    list.forEach(function (r) {
      g += '<rect x="' + (cx + r[0]) + '" y="' + (cy + r[1]) + '" width="11" height="4.5" rx="2.2" class="' + cls + '" transform="rotate(' + r[2] + ' ' + (cx + r[0] + 5) + ' ' + (cy + r[1] + 2) + ')"/>';
    });
    return g + "</g>";
  }

  /* ---------- templates ---------- */
  var T = {};

  T.root = function (pre, p) {
    var svg = '<rect x="0" y="206" width="640" height="74" class="soil"/>' +
      '<line x1="0" y1="206" x2="640" y2="206" class="soil-line"/>' +
      '<text x="16" y="228" class="lbl">' + esc(p.soil) + '</text>' +
      '<path d="M222 26 C 224 90, 218 150, 222 206 L 224 268" class="root"/>' +
      '<path d="M222 222 C 200 236, 182 248, 160 266" class="root-thin"/>' +
      '<path d="M224 236 C 246 246, 262 256, 284 270" class="root-thin"/>' +
      '<text x="238" y="36" class="lbl">Root</text>' +
      '<rect x="288" y="40" width="152" height="132" rx="16" class="cell"/>' +
      '<text x="300" y="60" class="lbl">Root cell</text>';
    var flows = [];
    p.ions.forEach(function (ion, i) {
      var id = pre + "ion" + i;
      svg += '<path id="' + id + '" class="flowpath" d="M' + (36 + i * 46) + ' ' + (262 - i * 8) + ' C ' + (120 + i * 16) + ' ' + (250 - i * 8) + ', 196 ' + (214 - i * 8) + ', 222 ' + (184 - i * 8) + ' S 326 ' + (118 + i * 20) + ', ' + (372 + i * 26) + ' ' + (104 + i * 24) + '"/>';
      svg += '<text x="' + (16 + i * 56) + '" y="248" class="lbl-hi" fill="' + ion.color + '" style="fill:' + ion.color + '">' + esc(ion.label) + ' in</text>';
      flows.push({ path: id, color: ion.color, counts: ion.counts, r: 3.4, speed: 42 });
    });
    if (p.leak) {
      svg += '<path id="' + pre + 'leak" class="flowpath" d="M410 136 C 352 150, 272 160, 226 196 S 120 252, 30 270"/>';
      svg += '<text x="' + (16 + p.ions.length * 56) + '" y="248" class="lbl-hi" style="fill:' + p.leak.color + '">' + esc(p.leak.label) + ' out</text>';
      flows.push({ path: pre + "leak", color: p.leak.color, counts: p.leak.counts, r: 3, speed: 30 });
    }
    if (p.microbe) {
      svg += rods(222, 222, [[-34, 4, 30], [-24, 22, -20], [10, 10, 60], [18, 30, 15], [-8, 38, 80], [26, -2, -35], [-42, 26, 5]], "microbe", p.microbe.on);
      svg += '<text x="262" y="232" class="lbl-acc tog" data-on="' + on(p.microbe.on) + '">' + esc(p.microbe.label) + '</text>';
    }
    svg += meters(p.meters, 470);
    return { svg: svg, flows: flows };
  };

  T.leaf = function (pre, p) {
    var svg = '<rect x="20" y="36" width="420" height="200" rx="22" class="cell"/>' +
      '<text x="36" y="58" class="lbl">Leaf cell</text>' +
      '<text x="36" y="74" class="lbl" font-style="italic">' + esc(p.where || "") + '</text>' +
      '<ellipse cx="112" cy="124" rx="58" ry="30" class="organelle"/>' +
      '<line x1="74" y1="116" x2="150" y2="116" class="thy"/><line x1="70" y1="124" x2="154" y2="124" class="thy"/><line x1="74" y1="132" x2="150" y2="132" class="thy"/>' +
      '<text x="70" y="172" class="lbl">Chloroplast</text>' +
      '<text x="170" y="104" class="lbl-hi" style="fill:#e0615a">ROS</text>' +
      '<rect x="214" y="96" width="156" height="56" rx="12" class="enz" data-glow="' + on(p.glowOn) + '"/>' +
      '<text x="292" y="128" text-anchor="middle" class="lbl-hi glowtext" data-glow="' + on(p.glowOn) + '">' + esc(p.enzymes) + '</text>' +
      '<text x="216" y="88" class="lbl">Antioxidants</text>' +
      '<text x="420" y="110" text-anchor="end" class="lbl-hi" style="fill:#6aaee8">H₂O</text>' +
      '<line x1="34" y1="214" x2="426" y2="214" class="membrane"/><line x1="34" y1="219" x2="426" y2="219" class="membrane"/>' +
      '<text x="426" y="206" text-anchor="end" class="lbl">Membrane · MDA</text>' +
      '<text x="20" y="24" class="lbl-warn tog" data-on="' + on(stressStates(p)) + '">' + esc(p.stress) + ' stress</text>' +
      '<text x="326" y="22" text-anchor="end" class="lbl-acc tog" data-on="' + on(p.glowOn) + '">+ ' + esc(p.protectant) + '</text>' +
      '<path id="' + pre + 'ros" class="flowpath" d="M126 118 C 160 106, 190 110, 216 122"/>' +
      '<path id="' + pre + 'h2o" class="flowpath" d="M370 124 C 388 124, 404 122, 424 118"/>' +
      '<path id="' + pre + 'dmg" class="flowpath" d="M118 150 C 126 184, 160 204, 214 212"/>' +
      '<path id="' + pre + 'drop" class="flowpath" d="M336 0 C 336 32, 332 64, 330 96"/>';
    svg += meters(p.meters, 470);
    return {
      svg: svg, flows: [
        { path: pre + "ros", color: "#e0615a", counts: p.ros, r: 3.2, speed: 36 },
        { path: pre + "h2o", color: "#6aaee8", counts: p.h2o, r: 3, speed: 30 },
        { path: pre + "dmg", color: "#e0615a", counts: p.damage, r: 2.8, speed: 30 },
        { path: pre + "drop", color: "#3fbf6b", counts: p.drops, r: 3.4, speed: 34 }
      ]
    };
  };
  function stressStates(p) { var a = []; for (var i = 1; i < p.states.length; i++) a.push(i); return a; }

  T.arsenic = function (pre, p) {
    var svg = '<rect x="0" y="214" width="640" height="66" class="soil"/>' +
      '<line x1="0" y1="214" x2="640" y2="214" class="soil-line"/>' +
      '<text x="444" y="236" class="lbl" text-anchor="end">Soil · As(III) / As(V)</text>' +
      '<path d="M150 266 L150 56" class="stem"/>' +
      '<path d="M150 214 C 140 236, 120 250, 100 268" class="root-thin"/><path d="M150 214 C 162 238, 178 252, 198 268" class="root-thin"/>' +
      '<path d="M150 150 C 120 142, 96 122, 80 96 C 110 106, 134 122, 150 140 Z" class="leafshape"/>' +
      '<path d="M150 122 C 180 110, 204 90, 220 64 C 192 80, 168 98, 150 112 Z" class="leafshape"/>' +
      '<ellipse cx="150" cy="42" rx="5" ry="8" class="grain"/><ellipse cx="139" cy="54" rx="5" ry="8" class="grain" transform="rotate(-25 139 54)"/><ellipse cx="161" cy="54" rx="5" ry="8" class="grain" transform="rotate(25 161 54)"/>' +
      '<text x="172" y="44" class="lbl">Grain</text>' +
      '<path d="M156 104 L 278 104" class="dash"/>' +
      '<rect x="278" y="58" width="172" height="140" rx="14" class="cell"/>' +
      '<text x="290" y="78" class="lbl">Shoot cell</text>' +
      '<text x="292" y="108" class="lbl-hi" style="fill:#e0615a">ROS</text><text x="438" y="108" text-anchor="end" class="lbl">MDA</text>' +
      '<text x="292" y="146" class="lbl-hi" style="fill:#e5b45a">MG</text>' +
      '<rect x="360" y="130" width="82" height="24" rx="8" class="enz" data-glow="' + on(p.defenceOn) + '"/>' +
      '<text x="401" y="146" text-anchor="middle" class="lbl-hi glowtext" data-glow="' + on(p.defenceOn) + '">Gly I · II</text>' +
      '<text x="364" y="182" text-anchor="middle" class="lbl-hi glowtext" data-glow="' + on(p.defenceOn) + '">SOD · CAT · APX · GR</text>' +
      '<path id="' + pre + 'as" class="flowpath" d="M40 270 C 90 258, 128 240, 150 226 L 150 60"/>' +
      '<path id="' + pre + 'ros" class="flowpath" d="M318 104 L 412 104"/>' +
      '<path id="' + pre + 'mg" class="flowpath" d="M314 142 L 358 142"/>' +
      '<path id="' + pre + 'drop" class="flowpath" d="M252 0 C 244 30, 226 62, 200 86"/>' +
      '<text x="262" y="22" class="lbl-acc tog" data-on="' + on(p.foliar.on) + '">+ ' + esc(p.foliar.label) + '</text>' +
      rods(150, 222, [[-30, 4, 30], [-22, 22, -20], [12, 8, 60], [20, 28, 15], [-6, 36, 80]], "microbe", p.microbe.on) +
      '<text x="196" y="258" class="lbl-acc tog" data-on="' + on(p.microbe.on) + '">+ ' + esc(p.microbe.label) + '</text>';
    svg += meters(p.meters, 470);
    var drops = p.states.map(function (_, i) { return p.foliar.on.indexOf(i) > -1 ? 6 : 0; });
    return {
      svg: svg, flows: [
        { path: pre + "as", color: "#b38cf0", counts: p.as, r: 3.4, speed: 40 },
        { path: pre + "ros", color: "#e0615a", counts: p.ros, r: 3, speed: 30 },
        { path: pre + "mg", color: "#e5b45a", counts: p.mg, r: 3, speed: 22 },
        { path: pre + "drop", color: "#3fbf6b", counts: drops, r: 3.4, speed: 34 }
      ]
    };
  };

  T.pipeline = function (pre, p) {
    var n = p.stages.length, w = 92, gap = (608 - n * w) / (n - 1), svg = "";
    svg += '<text x="16" y="40" class="lbl">Climate data pipeline</text>';
    svg += '<path id="' + pre + 'flow" class="flowpath" d="M16 166 L 624 166"/>';
    p.stages.forEach(function (st, i) {
      var x = 16 + i * (w + gap), words = st.split(" ");
      svg += '<rect x="' + x + '" y="92" width="' + w + '" height="56" rx="10" class="stage" data-glow="' + i + '"/>';
      if (words.length > 1) {
        svg += '<text x="' + (x + w / 2) + '" y="117" text-anchor="middle" class="lbl-hi">' + esc(words[0]) + '</text>' +
          '<text x="' + (x + w / 2) + '" y="131" text-anchor="middle" class="lbl-hi">' + esc(words.slice(1).join(" ")) + '</text>';
      } else {
        svg += '<text x="' + (x + w / 2) + '" y="124" text-anchor="middle" class="lbl-hi">' + esc(st) + '</text>';
      }
      svg += '<text x="' + (x + w / 2) + '" y="82" text-anchor="middle" class="lbl">0' + (i + 1) + '</text>';
    });
    var pts = [], pts2 = [];
    for (var i = 0; i <= 60; i++) {
      var x = 16 + i * 10.1, noise = Math.sin(i * 1.7) * 9 + Math.sin(i * 0.53) * 7;
      pts.push(x.toFixed(1) + "," + (238 - i * 0.35 + noise).toFixed(1));
      pts2.push(x.toFixed(1) + "," + (240 - i * 0.55).toFixed(1));
    }
    svg += '<text x="16" y="200" class="lbl">Temperature series</text>';
    svg += '<polyline points="' + pts.join(" ") + '" class="series"/>';
    svg += '<polyline points="' + pts2.join(" ") + '" class="series2 tog-line" data-on="5"/>';
    svg += '<text x="624" y="200" text-anchor="end" class="lbl-hi tog" data-on="5" style="fill:#e5b45a">Trend</text>';
    var counts = p.states.map(function () { return 12; });
    return { svg: svg, flows: [{ path: pre + "flow", color: "#edeae3", counts: counts, r: 2.6, speed: 70 }] };
  };

  /* ---------- build cards ---------- */
  var cards = [];
  var host = $("#projects");
  S.projects.forEach(function (p, idx) {
    var make = T[p.template]; if (!make) return;
    var pre = "p" + idx + "-", tpl = make(pre, p);
    var art = document.createElement("article");
    art.className = "proj";
    art.innerHTML =
      '<p class="proj__years">' + esc(p.years) + '</p>' +
      '<h2 class="proj__title">' + p.title + '</h2>' +
      '<p class="proj__ctx">' + esc(p.context) + '</p>' +
      '<div class="panel">' +
      '<svg viewBox="0 0 640 280" role="img" aria-label="' + esc(strip(p.title)) + ', animated schematic"></svg>' +
      (p.meters ? '<div class="hmeters">' + p.meters.map(function (m) {
        var kind = /defen|growth|water|glyoxalase/i.test(m.label) ? "good" : "warn";
        return '<div class="hm"><span>' + esc(m.label) + '</span><i><b class="' + kind + '" data-vals="' + on(m.vals) + '"></b></i></div>';
      }).join("") + '</div>' : "") +
      '<div class="panel__foot"><p class="caption" aria-live="polite"></p><div class="states" role="group" aria-label="Condition"></div></div>' +
      '</div>' +
      (p.doi ? '<a class="proj__link" href="https://doi.org/' + p.doi + '" target="_blank" rel="noopener">Read the paper <span aria-hidden="true">↗</span></a>' : "");
    host.appendChild(art);
    var svg = $("svg", art);
    svg.innerHTML = tpl.svg;
    var layer = document.createElementNS(NS, "g");
    svg.appendChild(layer);

    var flows = tpl.flows.map(function (f) {
      var path = svg.getElementById ? svg.getElementById(f.path) : document.getElementById(f.path);
      var max = Math.max.apply(null, f.counts.concat([0]));
      var dots = [];
      for (var i = 0; i < max; i++) {
        var c = document.createElementNS(NS, "circle");
        c.setAttribute("r", f.r); c.setAttribute("fill", f.color); c.setAttribute("opacity", "0");
        layer.appendChild(c);
        dots.push({ el: c, a: 0, phase: i / Math.max(max, 1) + Math.random() * 0.04 });
      }
      return { f: f, path: path, len: path ? path.getTotalLength() : 0, dots: dots };
    });

    var card = { el: art, p: p, svg: svg, flows: flows, state: -1, visible: false, timer: null, typing: null, hover: false };
    var states = $(".states", art);
    p.states.forEach(function (s, i) {
      var b = document.createElement("button");
      b.type = "button"; b.textContent = s.label; b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () { setState(card, i, true); });
      states.appendChild(b);
    });
    art.addEventListener("mouseenter", function () { card.hover = true; });
    art.addEventListener("mouseleave", function () { card.hover = false; });
    cards.push(card);
    setState(card, reduce ? Math.min(1, p.states.length - 1) : 0, false);
  });

  function fitViews() {
    var narrow = window.innerWidth <= 700;
    cards.forEach(function (c) {
      c.svg.setAttribute("viewBox", narrow && c.p.meters ? "0 0 456 280" : "0 0 640 280");
    });
  }
  fitViews();
  window.addEventListener("resize", fitViews);

  function inList(attr, i) { return attr !== null && attr !== "" && attr.split(",").indexOf(String(i)) > -1; }

  function setState(card, i, manual) {
    card.state = i;
    var svg = card.svg;
    Array.prototype.forEach.call(svg.querySelectorAll("[data-on]"), function (n) {
      n.classList.toggle("on", inList(n.getAttribute("data-on"), i));
    });
    Array.prototype.forEach.call(svg.querySelectorAll("[data-glow]"), function (n) {
      n.classList.toggle("glow", inList(n.getAttribute("data-glow"), i));
    });
    Array.prototype.forEach.call(card.el.querySelectorAll(".hm b"), function (n) {
      n.style.transform = "scaleX(" + (+(n.getAttribute("data-vals").split(",")[i] || 0)) + ")";
    });
    Array.prototype.forEach.call(svg.querySelectorAll(".mfill"), function (n) {
      var v = +(n.getAttribute("data-vals").split(",")[i] || 0);
      n.style.transform = "scaleX(" + v + ")";
    });
    Array.prototype.forEach.call(card.el.querySelectorAll(".states button"), function (b, k) {
      b.setAttribute("aria-pressed", k === i ? "true" : "false");
    });
    type(card, card.p.states[i].caption);
    if (manual) schedule(card, 9000);
    if (reduce && typeof draw === "function") draw(0);
  }

  function type(card, text) {
    var cap = $(".caption", card.el);
    clearInterval(card.typing);
    if (reduce) { cap.textContent = text; return; }
    var n = 0; cap.textContent = "";
    card.typing = setInterval(function () {
      n += 2; cap.textContent = text.slice(0, n);
      if (n >= text.length) clearInterval(card.typing);
    }, 22);
  }

  function schedule(card, delay) {
    clearTimeout(card.timer);
    if (reduce) return;
    card.timer = setTimeout(function tick() {
      if (card.visible && !card.hover) setState(card, (card.state + 1) % card.p.states.length, false);
      card.timer = setTimeout(tick, 5200);
    }, delay);
  }

  /* ---------- visibility ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var card = cards.filter(function (c) { return c.el === e.target; })[0];
        if (!card) return;
        card.visible = e.isIntersecting;
        if (e.isIntersecting) {
          card.el.classList.add("in");
          if (!card.started) { card.started = true; schedule(card, 3800); }
        }
      });
    }, { threshold: 0.2 });
    cards.forEach(function (c) { io.observe(c.el); });
  } else {
    cards.forEach(function (c) { c.visible = true; c.el.classList.add("in"); schedule(c, 3800); });
  }

  /* ---------- particle loop ---------- */
  function draw(now) {
    var t = now / 1000;
    cards.forEach(function (card) {
      if (!card.visible && !reduce) return;
      card.flows.forEach(function (fl) {
        if (!fl.path || !fl.len) return;
        var count = fl.f.counts[card.state] || 0;
        var cycle = fl.len / fl.f.speed;
        fl.dots.forEach(function (d, i) {
          var target = i < count ? 1 : 0;
          d.a = reduce ? target : d.a + (target - d.a) * 0.06;
          var u = reduce ? d.phase % 1 : ((t / cycle) + d.phase) % 1;
          var pt = fl.path.getPointAtLength(u * fl.len);
          var edge = Math.min(1, u * 8, (1 - u) * 8);
          d.el.setAttribute("cx", pt.x.toFixed(1));
          d.el.setAttribute("cy", pt.y.toFixed(1));
          d.el.setAttribute("opacity", (d.a * edge * 0.95).toFixed(3));
        });
      });
    });
    if (!reduce) requestAnimationFrame(draw);
  }
  if (reduce) draw(0); else requestAnimationFrame(draw);
})();
