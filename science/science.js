/* samiulalam.site/science. Animated mechanism sketches drawn as biological illustrations. No libraries. */
(function () {
  "use strict";
  var S = window.SCIENCE || { projects: [] };
  var NS = "http://www.w3.org/2000/svg";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;"); };
  var on = function (list) { return (list || []).join(","); };
  var strip = function (h) { var d = document.createElement("div"); d.innerHTML = h; return d.textContent; };
  var COL = { na: "#e0a64b", k: "#7ed6a0", cr: "#5ec4c4", as: "#b38cf0", ros: "#e0615a", h2o: "#6aaee8", mg: "#e5b45a", treat: "#3fbf6b", data: "#edeae3" };

  $("#question").textContent = S.question || "";
  $("#intro").textContent = S.intro || "";
  if ($("#note")) $("#note").textContent = S.note || "";
  $("#year").textContent = new Date().getFullYear();

  /* ======================================================
     DRAWING HELPERS
     ====================================================== */
  function defs(pre) {
    return '<defs>' +
      '<pattern id="' + pre + 'soil" width="14" height="14" patternUnits="userSpaceOnUse">' +
      '<rect width="14" height="14" fill="#16130e"/>' +
      '<circle cx="3" cy="4" r="1.6" fill="rgba(229,180,90,.22)"/><circle cx="10" cy="9" r="2.2" fill="rgba(229,180,90,.14)"/>' +
      '<circle cx="6" cy="12" r="1" fill="rgba(237,234,227,.12)"/></pattern>' +
      '<radialGradient id="' + pre + 'vac" cx="50%" cy="45%" r="60%"><stop offset="0" stop-color="rgba(106,174,232,.14)"/><stop offset="1" stop-color="rgba(106,174,232,.04)"/></radialGradient>' +
      '<radialGradient id="' + pre + 'chl" cx="45%" cy="40%" r="70%"><stop offset="0" stop-color="rgba(90,200,120,.32)"/><stop offset="1" stop-color="rgba(40,120,70,.18)"/></radialGradient>' +
      '<radialGradient id="' + pre + 'cyt" cx="40%" cy="40%" r="80%"><stop offset="0" stop-color="rgba(237,234,227,.045)"/><stop offset="1" stop-color="rgba(237,234,227,.015)"/></radialGradient>' +
      '</defs>';
  }
  function cell(pre, x, y, w, h, r) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + r + '" class="wall"/>' +
      '<rect x="' + (x + 5) + '" y="' + (y + 5) + '" width="' + (w - 10) + '" height="' + (h - 10) + '" rx="' + (r - 4) + '" fill="url(#' + pre + 'cyt)" class="pm"/>' +
      '<rect x="' + (x + 8) + '" y="' + (y + 8) + '" width="' + (w - 16) + '" height="' + (h - 16) + '" rx="' + (r - 6) + '" class="pm pm2"/>';
  }
  function vacuole(pre, cx, cy, rx, ry) {
    var d = "M" + (cx - rx) + " " + cy +
      " C " + (cx - rx) + " " + (cy - ry * 0.9) + ", " + (cx - rx * 0.2) + " " + (cy - ry * 1.05) + ", " + (cx + rx * 0.3) + " " + (cy - ry) +
      " C " + (cx + rx * 1.02) + " " + (cy - ry * 0.85) + ", " + (cx + rx * 1.05) + " " + (cy + ry * 0.4) + ", " + (cx + rx * 0.7) + " " + (cy + ry * 0.8) +
      " C " + (cx + rx * 0.2) + " " + (cy + ry * 1.1) + ", " + (cx - rx * 0.9) + " " + (cy + ry * 1.0) + ", " + (cx - rx) + " " + cy + " Z";
    return '<path d="' + d + '" fill="url(#' + pre + 'vac)" class="vac"/>';
  }
  function nucleus(cx, cy, r) {
    var pores = "";
    for (var a = 0; a < 12; a++) {
      var t = a / 12 * Math.PI * 2;
      pores += '<circle cx="' + (cx + Math.cos(t) * r).toFixed(1) + '" cy="' + (cy + Math.sin(t) * r).toFixed(1) + '" r="1.1" class="pore"/>';
    }
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" class="nuc"/>' +
      '<circle cx="' + (cx + r * 0.2) + '" cy="' + (cy - r * 0.15) + '" r="' + (r * 0.33) + '" class="nucleolus"/>' + pores +
      '<path d="M' + (cx - r * 0.6) + ' ' + (cy + r * 0.3) + ' q 6 -6 12 0 t 12 0" class="chromatin"/>';
  }
  function mito(cx, cy, rx, ry, rot) {
    var cr = "M" + (cx - rx * 0.75) + " " + cy;
    for (var i = 0; i < 6; i++) {
      var x = cx - rx * 0.75 + (i + 0.5) * (rx * 1.5 / 6);
      cr += " L " + x.toFixed(1) + " " + (cy + (i % 2 ? ry * 0.55 : -ry * 0.55)).toFixed(1);
    }
    return '<g transform="rotate(' + (rot || 0) + ' ' + cx + ' ' + cy + ')"><ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" class="mito"/>' +
      '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (rx - 2.5) + '" ry="' + (ry - 2.5) + '" class="mito-in"/>' +
      '<path d="' + cr + '" class="cristae"/></g>';
  }
  function chloroplast(pre, cx, cy, rx, ry, rot) {
    var g = '<g transform="rotate(' + (rot || 0) + ' ' + cx + ' ' + cy + ')">' +
      '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="url(#' + pre + 'chl)" class="chl"/>' +
      '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + (rx - 3) + '" ry="' + (ry - 3) + '" class="chl-in"/>' +
      '<line x1="' + (cx - rx * 0.8) + '" y1="' + cy + '" x2="' + (cx + rx * 0.8) + '" y2="' + cy + '" class="lamella"/>';
    var n = Math.max(2, Math.round(rx / 13));
    for (var i = 0; i < n; i++) {
      var gx = cx - rx * 0.6 + i * (rx * 1.2 / (n - 1 || 1));
      var hh = ry * (0.9 - Math.abs(i - (n - 1) / 2) / n);
      for (var k = 0; k < 4; k++) {
        g += '<rect x="' + (gx - 4).toFixed(1) + '" y="' + (cy - hh / 2 + k * (hh / 4)).toFixed(1) + '" width="8" height="' + Math.max(1.6, hh / 4 - 1.2).toFixed(1) + '" rx="1" class="grana"/>';
      }
    }
    g += '<circle cx="' + (cx + rx * 0.45) + '" cy="' + (cy + ry * 0.45) + '" r="2.4" class="plasto"/></g>';
    return g;
  }
  function peroxisome(cx, cy, r) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" class="perox"/><rect x="' + (cx - r * 0.45) + '" y="' + (cy - r * 0.3) + '" width="' + (r * 0.9) + '" height="' + (r * 0.6) + '" rx="1.5" class="perox-core"/>';
  }
  function tpV(x, y, glowList) {
    return '<g class="tp" data-glow="' + on(glowList) + '">' +
      '<rect x="' + (x - 8) + '" y="' + (y - 10) + '" width="7" height="20" rx="3.5"/>' +
      '<rect x="' + (x + 1) + '" y="' + (y - 10) + '" width="7" height="20" rx="3.5"/></g>';
  }
  function tpH(x, y, glowList) {
    return '<g class="tp" data-glow="' + on(glowList) + '">' +
      '<rect x="' + (x - 10) + '" y="' + (y - 8) + '" width="20" height="7" rx="3.5"/>' +
      '<rect x="' + (x - 10) + '" y="' + (y + 1) + '" width="20" height="7" rx="3.5"/></g>';
  }
  function bacterium(x, y, rot) {
    return '<g transform="rotate(' + rot + ' ' + x + ' ' + y + ')">' +
      '<path d="M' + (x - 9) + ' ' + y + ' q -5 -3 -9 0 t -9 0" class="flag"/>' +
      '<rect x="' + (x - 9) + '" y="' + (y - 3.5) + '" width="18" height="7" rx="3.5" class="bact"/>' +
      '<rect x="' + (x - 6) + '" y="' + (y - 1) + '" width="8" height="2" rx="1" class="bact-in"/></g>';
  }
  function colony(list, onList) {
    return '<g class="tog" data-on="' + on(onList) + '">' + list.map(function (b) { return bacterium(b[0], b[1], b[2]); }).join("") + '</g>';
  }
  function droplet(x, y) {
    return '<path d="M' + x + ' ' + (y - 6) + ' C ' + (x + 4) + ' ' + (y - 1) + ', ' + (x + 4) + ' ' + (y + 3) + ', ' + x + ' ' + (y + 4) + ' C ' + (x - 4) + ' ' + (y + 3) + ', ' + (x - 4) + ' ' + (y - 1) + ', ' + x + ' ' + (y - 6) + ' Z" class="drop"/>';
  }
  function goodKind(label) { return /defen|growth|water|glyoxalase|antiox/i.test(label) ? "good" : "warn"; }
  function meters(list, x) {
    var out = '<line x1="' + (x - 14) + '" y1="20" x2="' + (x - 14) + '" y2="260" class="divider"/>';
    (list || []).forEach(function (m, k) {
      var y = 52 + k * 62;
      out += '<text x="' + x + '" y="' + y + '" class="lbl">' + esc(m.label) + '</text>' +
        '<rect x="' + x + '" y="' + (y + 10) + '" width="150" height="6" rx="3" class="mbg"/>' +
        '<rect x="' + x + '" y="' + (y + 10) + '" width="150" height="6" rx="3" class="mfill ' + goodKind(m.label) + '" data-vals="' + on(m.vals) + '"/>' +
        '<text x="' + (x + 150) + '" y="' + (y + 32) + '" class="lbl tiny mval" text-anchor="end" data-vals="' + on(m.vals) + '"></text>';
    });
    return out;
  }
  function stressStates(p) { var a = []; for (var i = 1; i < p.states.length; i++) a.push(i); return a; }

  /* ======================================================
     TEMPLATES
     ====================================================== */
  var T = {};

  /* ---------- ROOT EPIDERMAL CELL: ion transport ---------- */
  T.root = function (pre, p) {
    var svg = defs(pre) +
      '<rect x="0" y="0" width="96" height="280" fill="url(#' + pre + 'soil)"/>' +
      '<line x1="96" y1="0" x2="96" y2="280" class="soil-line"/>' +
      '<text x="8" y="18" class="lbl tiny">Rhizosphere</text>' +
      '<text x="8" y="272" class="lbl tiny">' + esc(p.soil) + '</text>' +
      '<path d="M100 150 C 70 152, 46 160, 14 172" class="hair"/><path d="M100 150 C 70 152, 46 160, 14 172" class="hair-in"/>' +
      cell(pre, 98, 14, 344, 252, 20) +
      vacuole(pre, 340, 150, 82, 84) +
      '<text x="352" y="154" text-anchor="middle" class="lbl">Vacuole</text>' +
      nucleus(196, 214, 22) +
      '<text x="196" y="252" text-anchor="middle" class="lbl tiny">Nucleus</text>' +
      mito(222, 56, 20, 10, -12) + mito(272, 240, 16, 8, 18) +
      '<path d="M152 180 q 8 -7 16 0 t 16 0 t 16 0" class="er"/><path d="M156 190 q 8 -7 16 0 t 16 0 t 16 0" class="er"/>' +
      '<text x="246" y="46" class="lbl tiny">Mitochondrion</text>' +
      '<text x="434" y="30" text-anchor="end" class="lbl tiny">Root epidermal cell</text>';
    var flows = [];
    (p.channels || []).forEach(function (c, i) {
      var id = pre + "ch" + i, y = c.y, x = 106;
      svg += tpV(x, y, c.glow || []);
      svg += '<text x="' + (x + 12) + '" y="' + (y - 1) + '" class="tpname">' + esc(c.name) + '</text>' +
        '<text x="' + (x + 12) + '" y="' + (y + 10) + '" class="lbl tiny" style="fill:' + c.color + '">' + esc(c.ion) + (c.dir === "out" ? " out" : " in") + '</text>';
      var d = c.dir === "out"
        ? "M" + (x + 74) + " " + (y + 4) + " C " + (x + 40) + " " + (y + 2) + ", " + (x + 14) + " " + y + ", " + x + " " + y + " S " + (x - 50) + " " + (y + 8) + ", " + (x - 96) + " " + (y + 18)
        : "M" + (x - 96) + " " + (y - 16) + " C " + (x - 50) + " " + (y - 8) + ", " + (x - 16) + " " + y + ", " + x + " " + y + " S " + (x + 60) + " " + (y + 2) + ", " + (x + 118) + " " + (y + (150 - y) * 0.25);
      svg += '<path id="' + id + '" class="flowpath" d="' + d + '"/>';
      flows.push({ path: id, color: c.color, counts: c.counts, r: 3.2, speed: 34 });
    });
    if (p.nhx) {
      svg += tpV(258, 136, p.nhx.glow || []) +
        '<text x="268" y="122" class="tpname">NHX</text><text x="268" y="112" class="lbl tiny">tonoplast</text>' +
        '<path id="' + pre + 'nhx" class="flowpath" d="M214 142 C 236 140, 250 136, 258 136 S 296 138, 324 132"/>';
      flows.push({ path: pre + "nhx", color: COL.na, counts: p.nhx.counts, r: 3, speed: 26 });
    }
    if (p.ros) {
      svg += '<path id="' + pre + 'ros" class="flowpath" d="M236 62 C 254 78, 258 92, 250 108"/>' +
        '<text x="262" y="92" class="lbl tiny tog" data-on="' + on(p.ros.on) + '" style="fill:' + COL.ros + '">ROS</text>';
      flows.push({ path: pre + "ros", color: COL.ros, counts: p.ros.counts, r: 2.6, speed: 18 });
    }
    if (p.microbe) {
      svg += colony([[34, 128, 20], [62, 196, -30], [26, 214, 70], [74, 116, -10], [46, 238, 35], [78, 222, 10]], p.microbe.on);
      var words = p.microbe.label.split(" ");
      svg += '<text x="6" y="34" class="lbl-acc tiny tog" data-on="' + on(p.microbe.on) + '">' + words.map(function (w, k) { return '<tspan x="6" dy="' + (k ? 10 : 0) + '">' + esc(w) + '</tspan>'; }).join("") + '</text>';
    }
    svg += meters(p.meters, 470);
    return { svg: svg, flows: flows };
  };

  /* ---------- LEAF: cuticle, epidermis, stoma and a mesophyll cell ---------- */
  T.leaf = function (pre, p) {
    var svg = defs(pre);
    svg += '<path d="M14 40 L 446 40" class="cuticle"/>';
    for (var i = 0; i < 9; i++) {
      if (i === 6) continue;
      svg += '<rect x="' + (16 + i * 48) + '" y="43" width="44" height="20" rx="7" class="epi"/>';
    }
    var sx = 326;
    svg += '<g class="tog" data-on="' + on(p.stomaOpen) + '">' +
      '<path d="M' + (sx - 18) + ' 53 C ' + (sx - 18) + ' 42, ' + (sx - 4) + ' 41, ' + (sx - 3) + ' 53 C ' + (sx - 4) + ' 65, ' + (sx - 18) + ' 64, ' + (sx - 18) + ' 53 Z" class="guard"/>' +
      '<path d="M' + (sx + 18) + ' 53 C ' + (sx + 18) + ' 42, ' + (sx + 4) + ' 41, ' + (sx + 3) + ' 53 C ' + (sx + 4) + ' 65, ' + (sx + 18) + ' 64, ' + (sx + 18) + ' 53 Z" class="guard"/></g>' +
      '<g class="tog" data-on="' + on(p.stomaClosed) + '">' +
      '<path d="M' + (sx - 16) + ' 53 C ' + (sx - 16) + ' 43, ' + (sx - 1) + ' 43, ' + (sx - 0.5) + ' 53 C ' + (sx - 1) + ' 63, ' + (sx - 16) + ' 63, ' + (sx - 16) + ' 53 Z" class="guard"/>' +
      '<path d="M' + (sx + 16) + ' 53 C ' + (sx + 16) + ' 43, ' + (sx + 1) + ' 43, ' + (sx + 0.5) + ' 53 C ' + (sx + 1) + ' 63, ' + (sx + 16) + ' 63, ' + (sx + 16) + ' 53 Z" class="guard"/></g>' +
      '<text x="' + (sx + 24) + '" y="34" class="lbl tiny">Stoma</text>' +
      '<text x="' + (sx + 24) + '" y="76" class="lbl tiny tog" data-on="' + on(p.stomaClosed) + '" style="fill:' + COL.ros + '">closing</text>' +
      '<text x="18" y="34" class="lbl tiny">Cuticle · upper epidermis</text>';
    svg += cell(pre, 24, 82, 418, 190, 26) +
      vacuole(pre, 340, 180, 78, 60) +
      '<text x="356" y="184" text-anchor="middle" class="lbl">Vacuole</text>' +
      chloroplast(pre, 98, 140, 50, 22, -6) + chloroplast(pre, 66, 216, 30, 13, 20) + chloroplast(pre, 200, 110, 30, 12, 8) +
      '<text x="58" y="178" class="lbl tiny">Chloroplast</text>' +
      mito(176, 242, 18, 9, -10) + peroxisome(250, 124, 12) +
      '<text x="266" y="114" class="lbl tiny">Peroxisome · CAT</text>' +
      nucleus(256, 234, 17) +
      '<text x="186" y="98" class="lbl tiny" style="fill:' + COL.ros + '">O₂•⁻</text>';
    svg += '<circle cx="198" cy="174" r="22" class="ring" data-glow="' + on(p.glowOn) + '"/>' +
      '<text x="198" y="172" text-anchor="middle" class="lbl-hi tiny glowtext" data-glow="' + on(p.glowOn) + '">AsA-GSH</text>' +
      '<text x="198" y="182" text-anchor="middle" class="lbl tiny">cycle</text>' +
      '<text x="198" y="210" text-anchor="middle" class="tpname glowtext" data-glow="' + on(p.glowOn) + '">' + esc(p.enzymes) + '</text>' +
      '<text x="150" y="150" class="lbl tiny" style="fill:' + COL.ros + '">H₂O₂</text>' +
      '<text x="234" y="166" class="lbl tiny" style="fill:' + COL.h2o + '">H₂O</text>' +
      '<line x1="34" y1="264" x2="432" y2="264" class="membrane-hot tog" data-on="' + on(p.damageOn) + '"/>' +
      '<text x="432" y="258" text-anchor="end" class="lbl tiny">Plasma membrane · lipid peroxidation → MDA</text>' +
      '<text x="14" y="16" class="lbl-warn tog" data-on="' + on(stressStates(p)) + '">' + esc(p.stress) + ' stress</text>' +
      '<text x="442" y="16" text-anchor="end" class="lbl-acc tog" data-on="' + on(p.glowOn) + '">+ ' + esc(p.protectant) + '</text>' +
      '<text x="18" y="76" class="lbl tiny"><tspan font-style="italic">' + esc(p.where || "") + '</tspan> · mesophyll cell</text>';
    if (p.ions) {
      svg += '<path id="' + pre + 'na" class="flowpath" d="M426 124 C 410 136, 400 146, 384 156"/>' +
        '<text x="394" y="134" class="lbl tiny tog" data-on="' + on(stressStates(p)) + '" style="fill:' + COL.na + '">Na⁺</text>';
    }
    svg += '<path id="' + pre + 'ros" class="flowpath" d="M134 130 C 150 142, 162 154, 176 168"/>' +
      '<path id="' + pre + 'ros2" class="flowpath" d="M208 120 C 206 132, 202 142, 200 152"/>' +
      '<path id="' + pre + 'h2o" class="flowpath" d="M220 176 C 240 176, 256 178, 272 182"/>' +
      '<path id="' + pre + 'dmg" class="flowpath" d="M110 162 C 118 200, 136 238, 150 262"/>' +
      '<path id="' + pre + 'drop" class="flowpath" d="M262 20 C 262 28, 262 34, 262 40"/>';
    svg += '<g class="tog" data-on="' + on(p.glowOn) + '">' + droplet(232, 33) + droplet(250, 33) + droplet(274, 33) + droplet(292, 33) + '</g>';
    svg += meters(p.meters, 470);
    var flows = [
      { path: pre + "ros", color: COL.ros, counts: p.ros, r: 3, speed: 22 },
      { path: pre + "ros2", color: COL.ros, counts: p.ros.map(function (v) { return Math.ceil(v / 2); }), r: 2.6, speed: 16 },
      { path: pre + "h2o", color: COL.h2o, counts: p.h2o, r: 2.8, speed: 20 },
      { path: pre + "dmg", color: COL.ros, counts: p.damage, r: 2.6, speed: 22 },
      { path: pre + "drop", color: COL.treat, counts: p.drops, r: 3.2, speed: 24 }
    ];
    if (p.ions) flows.push({ path: pre + "na", color: COL.na, counts: p.ions, r: 3, speed: 22 });
    return { svg: svg, flows: flows };
  };

  /* ---------- RICE PLANT with shoot and root cell insets: arsenic ---------- */
  T.arsenic = function (pre, p) {
    var svg = defs(pre) +
      '<rect x="0" y="200" width="456" height="80" fill="url(#' + pre + 'soil)"/>' +
      '<line x1="0" y1="200" x2="456" y2="200" class="soil-line"/>' +
      '<text x="8" y="272" class="lbl tiny">Paddy soil · As(V) and As(III)</text>';
    [[-46, 60], [-30, 72], [-14, 78], [0, 80], [14, 76], [30, 70], [46, 58], [-56, 40], [58, 42]].forEach(function (r) {
      svg += '<path d="M100 202 C ' + (100 + r[0] * 0.3) + ' ' + (202 + r[1] * 0.5) + ', ' + (100 + r[0] * 0.8) + ' ' + (202 + r[1] * 0.8) + ', ' + (100 + r[0]) + ' ' + (202 + r[1] * 0.9) + '" class="rootline"/>';
    });
    [[-26, 70], [-12, 50], [0, 34], [12, 52], [26, 74]].forEach(function (t) {
      svg += '<path d="M100 202 C ' + (100 + t[0] * 0.2) + ' 160, ' + (100 + t[0] * 0.7) + ' ' + (t[1] + 40) + ', ' + (100 + t[0]) + ' ' + t[1] + '" class="tiller"/>';
    });
    ["M96 170 C 70 150, 46 132, 18 128", "M102 150 C 128 128, 156 116, 188 112", "M94 130 C 74 104, 58 84, 44 60", "M104 116 C 124 92, 140 74, 164 58", "M98 98 C 86 78, 80 60, 78 40"].forEach(function (b) {
      svg += '<path d="' + b + '" class="blade"/><path d="' + b + '" class="blade-mid"/>';
    });
    svg += '<path d="M100 34 C 104 22, 116 16, 128 22 C 138 28, 142 40, 140 54" class="rachis"/>';
    [[104, 26, -40], [112, 20, -10], [121, 19, 15], [129, 23, 35], [135, 30, 55], [138, 40, 75], [139, 50, 90], [116, 28, 20], [126, 32, 50], [131, 42, 70]].forEach(function (g) {
      svg += '<ellipse cx="' + g[0] + '" cy="' + g[1] + '" rx="2.6" ry="5" class="grain" transform="rotate(' + g[2] + ' ' + g[0] + ' ' + g[1] + ')"/>';
    });
    svg += '<text x="148" y="30" class="lbl tiny">Panicle</text>' +
      '<path d="M156 112 L 226 72" class="dash"/><path d="M124 240 L 226 222" class="dash"/>' +
      '<circle cx="150" cy="114" r="6" class="lens"/><circle cx="118" cy="240" r="6" class="lens"/>';

    /* shoot cell inset */
    svg += cell(pre, 226, 8, 222, 132, 16) +
      chloroplast(pre, 264, 54, 24, 11, -4) +
      '<text x="240" y="30" class="lbl tiny">Leaf cell</text>' +
      '<text x="294" y="46" class="lbl tiny" style="fill:' + COL.ros + '">ROS</text>' +
      '<text x="374" y="58" text-anchor="middle" class="tpname glowtext" data-glow="' + on(p.defenceOn) + '">SOD · CAT · APX · GR</text>' +
      '<path id="' + pre + 'ros" class="flowpath" d="M288 54 C 300 56, 314 56, 328 54"/>' +
      '<text x="240" y="96" class="lbl tiny" style="fill:' + COL.mg + '">MG</text>' +
      '<rect x="260" y="82" width="38" height="18" rx="6" class="enz" data-glow="' + on(p.defenceOn) + '"/><text x="279" y="95" text-anchor="middle" class="tpname glowtext" data-glow="' + on(p.defenceOn) + '">Gly I</text>' +
      '<text x="316" y="95" text-anchor="middle" class="lbl tiny">SLG</text>' +
      '<rect x="334" y="82" width="42" height="18" rx="6" class="enz" data-glow="' + on(p.defenceOn) + '"/><text x="355" y="95" text-anchor="middle" class="tpname glowtext" data-glow="' + on(p.defenceOn) + '">Gly II</text>' +
      '<text x="412" y="95" text-anchor="middle" class="lbl tiny">D-lactate</text>' +
      '<text x="240" y="126" class="lbl tiny">Glyoxalase system · GSH-dependent</text>' +
      '<path id="' + pre + 'mg" class="flowpath" d="M254 91 L 392 91"/>';

    /* root cell inset */
    svg += cell(pre, 226, 150, 222, 122, 16) +
      vacuole(pre, 350, 220, 44, 28) +
      '<text x="350" y="224" text-anchor="middle" class="lbl tiny">Vacuole</text>' +
      tpV(234, 186, []) + '<text x="246" y="184" class="tpname">PT</text><text x="246" y="194" class="lbl tiny" style="fill:' + COL.as + '">As(V)</text>' +
      tpV(234, 236, []) + '<text x="246" y="234" class="tpname">Lsi1</text><text x="246" y="244" class="lbl tiny" style="fill:' + COL.as + '">As(III)</text>' +
      tpV(440, 210, []) + '<text x="430" y="200" text-anchor="end" class="tpname">Lsi2</text><text x="430" y="190" text-anchor="end" class="lbl tiny">to xylem</text>' +
      tpH(350, 190, p.defenceOn) + '<text x="320" y="182" text-anchor="end" class="tpname">ABCC1</text><text x="320" y="192" text-anchor="end" class="lbl tiny">As-PC</text>' +
      '<text x="240" y="166" class="lbl tiny">Root cell</text>' +
      '<path id="' + pre + 'as1" class="flowpath" d="M200 180 C 216 184, 226 186, 234 186 S 300 196, 336 204 S 420 210, 440 210 S 452 204, 462 198"/>' +
      '<path id="' + pre + 'as2" class="flowpath" d="M200 242 C 216 240, 226 236, 234 236 S 300 230, 340 218 S 420 210, 440 210 S 452 204, 462 198"/>' +
      '<path id="' + pre + 'asv" class="flowpath" d="M300 196 C 330 192, 344 190, 350 190 S 352 202, 350 210"/>' +
      '<path id="' + pre + 'as" class="flowpath" d="M60 266 C 80 246, 96 226, 100 204 C 102 160, 100 90, 104 40"/>';
    svg += '<g class="tog" data-on="' + on(p.foliar.on) + '">' + droplet(170, 94) + droplet(184, 86) + droplet(156, 102) + '</g>' +
      '<path id="' + pre + 'drop" class="flowpath" d="M200 4 C 190 40, 178 70, 168 104"/>' +
      '<text x="8" y="16" class="lbl-acc tog" data-on="' + on(p.foliar.on) + '">+ ' + esc(p.foliar.label) + '</text>' +
      colony([[64, 228, 30], [136, 232, -20], [80, 254, 60], [122, 258, -40], [150, 216, 10]], p.microbe.on) +
      '<text x="8" y="216" class="lbl-acc tog" data-on="' + on(p.microbe.on) + '">+ ' + esc(p.microbe.label) + '</text>';
    svg += meters(p.meters, 470);
    var drops = p.states.map(function (_, i) { return p.foliar.on.indexOf(i) > -1 ? 5 : 0; });
    var half = p.as.map(function (v) { return Math.ceil(v / 2); });
    return {
      svg: svg, flows: [
        { path: pre + "as", color: COL.as, counts: p.as, r: 3, speed: 34 },
        { path: pre + "as1", color: COL.as, counts: half, r: 3, speed: 30 },
        { path: pre + "as2", color: COL.as, counts: half, r: 3, speed: 30 },
        { path: pre + "asv", color: COL.as, counts: p.vac, r: 2.6, speed: 16 },
        { path: pre + "ros", color: COL.ros, counts: p.ros, r: 2.6, speed: 16 },
        { path: pre + "mg", color: COL.mg, counts: p.mg, r: 2.6, speed: 30 },
        { path: pre + "drop", color: COL.treat, counts: drops, r: 3, speed: 24 }
      ]
    };
  };

  /* ---------- CLIMATE DATA: one chart that changes at each stage ---------- */
  T.pipeline = function (pre, p) {
    var svg = defs(pre), n = p.stages.length, w = 96, gap = (608 - n * w) / (n - 1);
    p.stages.forEach(function (st, i) {
      var x = 16 + i * (w + gap);
      svg += '<rect x="' + x + '" y="14" width="' + w + '" height="30" rx="15" class="stage" data-glow="' + i + '"/>' +
        '<text x="' + (x + w / 2) + '" y="33" text-anchor="middle" class="lbl-hi tiny">' + esc(st) + '</text>';
    });
    svg += '<path id="' + pre + 'flow" class="flowpath" d="M16 52 L 624 52"/>';
    var X0 = 56, X1 = 620, Y0 = 250, Y1 = 80;
    svg += '<line x1="' + X0 + '" y1="' + Y0 + '" x2="' + X1 + '" y2="' + Y0 + '" class="axis"/><line x1="' + X0 + '" y1="' + Y1 + '" x2="' + X0 + '" y2="' + Y0 + '" class="axis"/>';
    for (var g = 0; g < 4; g++) { var gy = Y1 + g * (Y0 - Y1) / 4; svg += '<line x1="' + X0 + '" y1="' + gy + '" x2="' + X1 + '" y2="' + gy + '" class="grid"/>'; }
    function rnd(i) { var x = Math.sin(i * 12.9898) * 43758.5453; return x - Math.floor(x); }
    var N = 120, obs = [], mod = [];
    for (var i = 0; i < N; i++) {
      var season = Math.sin(i / N * Math.PI * 4 - 1.2) * 30;
      obs.push(season + (rnd(i) - 0.5) * 20 + i * 0.1);
      mod.push(season * 0.8 + (rnd(i + 300) - 0.5) * 12 + 22);
    }
    var sx = function (i) { return X0 + 8 + i * (X1 - X0 - 16) / (N - 1); };
    var sy = function (v) { return (Y0 + Y1) / 2 + 8 - v * 1.25; };
    function line(arr, from, to) { var s = ""; for (var i = Math.max(0, from); i < Math.min(N, to); i++) s += (i === Math.max(0, from) ? "M" : " L ") + sx(i).toFixed(1) + " " + sy(arr[i]).toFixed(1); return s; }
    var gaps = [[22, 31], [61, 66], [92, 99]], segs = [], last = 0;
    gaps.forEach(function (gp) { segs.push(line(obs, last, gp[0])); last = gp[1]; });
    segs.push(line(obs, last, N));
    var title = function (t) { return '<text x="' + (X0 + 6) + '" y="' + (Y1 - 8) + '" class="lbl tiny">' + t + '</text>'; };
    svg += '<g class="tog" data-on="0,1,2"><path d="' + segs.join(" ") + '" class="series"/></g>';
    svg += '<g class="tog" data-on="0">' +
      gaps.map(function (gp) { return '<rect x="' + sx(gp[0]) + '" y="' + Y1 + '" width="' + (sx(gp[1]) - sx(gp[0])) + '" height="' + (Y0 - Y1) + '" class="gapband"/>'; }).join("") +
      [40, 77].map(function (i) { return '<circle cx="' + sx(i).toFixed(1) + '" cy="' + sy(obs[i] + 44).toFixed(1) + '" r="3.5" class="outlier"/>'; }).join("") +
      title("Observed daily Tmax · missing days and outliers") + '</g>';
    svg += '<g class="tog" data-on="1">' + gaps.map(function (gp) { return '<path d="' + line(obs, gp[0] - 1, gp[1] + 1) + '" class="series-fill"/>'; }).join("") +
      title('<tspan style="fill:' + COL.mg + '">Gaps filled by imputation</tspan>') + '</g>';
    var corr = mod.map(function (v, i) { return (v - 22) + (obs[i] - (v - 22)) * 0.55; });
    svg += '<g class="tog" data-on="2"><path d="' + line(mod, 0, N) + '" class="series-model"/><path d="' + line(corr, 0, N) + '" class="series-fill"/>' +
      title('Model (grey) vs observed (white) · <tspan style="fill:' + COL.mg + '">bias-corrected model</tspan>') + '</g>';
    function heat(x0, y0, cells, size, seed) {
      var out = "";
      for (var r = 0; r < cells; r++) for (var c = 0; c < cells; c++) {
        var v = (Math.sin(c / cells * 3 + 0.4) + Math.cos(r / cells * 2.6) + rnd(r * 31 + c + seed) * 0.6) / 2.6;
        var a = Math.max(0.08, Math.min(0.9, 0.45 + v * 0.45));
        out += '<rect x="' + (x0 + c * size) + '" y="' + (y0 + r * size) + '" width="' + (size - 1) + '" height="' + (size - 1) + '" fill="rgba(229,140,70,' + a.toFixed(2) + ')"/>';
      }
      return out;
    }
    svg += '<g class="tog" data-on="3">' + heat(110, 100, 4, 36, 4) + heat(400, 100, 16, 9, 16) +
      '<path d="M270 172 L 380 172" class="arrow"/><path d="M372 166 L 382 172 L 372 178" class="arrow"/>' +
      '<text x="110" y="94" class="lbl tiny">GCM grid · coarse (about 100 km)</text><text x="400" y="94" class="lbl tiny">Downscaled · local (a few km)</text></g>';
    var bars = '<g class="tog" data-on="4">';
    for (var y = 0; y < 20; y++) {
      var v = 18 + y * 1.1 + (rnd(y + 77) - 0.5) * 14;
      bars += '<rect x="' + (X0 + 14 + y * 27.5) + '" y="' + (Y0 - v * 3.2).toFixed(1) + '" width="18" height="' + (v * 3.2).toFixed(1) + '" rx="2" class="bar"/>';
    }
    svg += bars + title("TX90p · warm days per year (ETCCDI index)") + '</g>';
    var tr = '<g class="tog" data-on="5">';
    for (var t = 0; t < 30; t++) {
      var vv = 28 + t * 0.9 + (rnd(t + 140) - 0.5) * 16;
      tr += '<circle cx="' + (X0 + 16 + t * 18.6).toFixed(1) + '" cy="' + (Y0 - vv * 2.8).toFixed(1) + '" r="3" class="dot"/>';
    }
    tr += '<line x1="' + (X0 + 16) + '" y1="' + (Y0 - 28 * 2.8) + '" x2="' + (X0 + 16 + 29 * 18.6) + '" y2="' + (Y0 - (28 + 29 * 0.9) * 2.8) + '" class="trendline"/>' +
      title('Annual index · <tspan style="fill:' + COL.mg + '">Sen\'s slope with Mann-Kendall test</tspan>') + '</g>';
    svg += tr + '<text x="' + X1 + '" y="270" text-anchor="end" class="lbl tiny">time →</text>';
    return { svg: svg, flows: [{ path: pre + "flow", color: COL.data, counts: p.states.map(function () { return 10; }), r: 2.2, speed: 80 }] };
  };

  /* ======================================================
     BUILD CARDS
     ====================================================== */
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
      '<svg viewBox="0 0 640 280" role="img" aria-label="' + esc(strip(p.title)) + ', animated illustration"></svg>' +
      (p.meters ? '<div class="hmeters">' + p.meters.map(function (m) {
        return '<div class="hm"><span>' + esc(m.label) + '</span><i><b class="' + goodKind(m.label) + '" data-vals="' + on(m.vals) + '"></b></i></div>';
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
      var path = svg.querySelector('[id="' + f.path + '"]');
      var max = Math.max.apply(null, (f.counts || []).concat([0]));
      var dots = [];
      for (var i = 0; i < max; i++) {
        var c = document.createElementNS(NS, "circle");
        c.setAttribute("r", f.r); c.setAttribute("fill", f.color); c.setAttribute("opacity", "0");
        c.setAttribute("class", "particle");
        layer.appendChild(c);
        dots.push({ el: c, a: 0, phase: i / Math.max(max, 1) + Math.random() * 0.05 });
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
      c.svg.setAttribute("viewBox", narrow && c.p.meters ? "0 0 452 280" : "0 0 640 280");
    });
  }
  fitViews();
  window.addEventListener("resize", fitViews);

  function inList(attr, i) { return attr !== null && attr !== "" && attr.split(",").indexOf(String(i)) > -1; }

  function setState(card, i, manual) {
    card.state = i;
    var svg = card.svg;
    Array.prototype.forEach.call(svg.querySelectorAll("[data-on]"), function (n) { n.classList.toggle("on", inList(n.getAttribute("data-on"), i)); });
    Array.prototype.forEach.call(svg.querySelectorAll("[data-glow]"), function (n) { n.classList.toggle("glow", inList(n.getAttribute("data-glow"), i)); });
    Array.prototype.forEach.call(svg.querySelectorAll(".mfill"), function (n) {
      n.style.transform = "scaleX(" + (+(n.getAttribute("data-vals").split(",")[i] || 0)) + ")";
    });
    Array.prototype.forEach.call(svg.querySelectorAll(".mval"), function (n) {
      var v = +(n.getAttribute("data-vals").split(",")[i] || 0);
      n.textContent = v < 0.34 ? "low" : v < 0.67 ? "moderate" : "high";
    });
    Array.prototype.forEach.call(card.el.querySelectorAll(".hm b"), function (n) {
      n.style.transform = "scaleX(" + (+(n.getAttribute("data-vals").split(",")[i] || 0)) + ")";
    });
    Array.prototype.forEach.call(card.el.querySelectorAll(".states button"), function (b, k) { b.setAttribute("aria-pressed", k === i ? "true" : "false"); });
    type(card, card.p.states[i].caption);
    if (manual) schedule(card, 9000);
    if (reduce) draw(0);
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
      card.timer = setTimeout(tick, 5600);
    }, delay);
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var card = cards.filter(function (c) { return c.el === e.target; })[0];
        if (!card) return;
        card.visible = e.isIntersecting;
        if (e.isIntersecting) {
          card.el.classList.add("in");
          if (!card.started) { card.started = true; schedule(card, 4200); }
        }
      });
    }, { threshold: 0.2 });
    cards.forEach(function (c) { io.observe(c.el); });
  } else {
    cards.forEach(function (c) { c.visible = true; c.el.classList.add("in"); schedule(c, 4200); });
  }

  function draw(now) {
    var t = now / 1000;
    cards.forEach(function (card) {
      if (!card.visible && !reduce) return;
      card.flows.forEach(function (fl) {
        if (!fl.path || !fl.len) return;
        var count = (fl.f.counts || [])[card.state] || 0;
        var cycle = fl.len / fl.f.speed;
        fl.dots.forEach(function (d, i) {
          var target = i < count ? 1 : 0;
          d.a = reduce ? target : d.a + (target - d.a) * 0.06;
          var u = reduce ? d.phase % 1 : ((t / cycle) + d.phase) % 1;
          var pt = fl.path.getPointAtLength(u * fl.len);
          var edge = Math.min(1, u * 7, (1 - u) * 7);
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
