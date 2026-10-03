(() => {
  "use strict";

  const SVGNS = "http://www.w3.org/2000/svg";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const forceCut = new URLSearchParams(location.search).has("cut");

  /* ---------- i18n ---------- */
  const EN = {
    "skip": "Skip to the quote form",
    "notice": "Demo website for a portfolio · the company, products and all figures are fictional",
    "nav.make": "Capabilities", "nav.machines": "Machines", "nav.quality": "Quality", "nav.process": "Process", "nav.contact": "Contact",
    "cta.quote": "Request a quote",
    "hero.l1": "Send the drawing.", "hero.l2": "Get a price in 24 h.",
    "hero.lead": "CNC milling and turning plus sheet metal: laser cutting, bending and welding. From a single prototype to 10,000-piece runs, all under one roof.",
    "dim.tol": "Machining tolerance", "unit.pcs": "pcs", "dim.qty": "per lot, prototype to production",
    "rfq.title": "Request a quote", "rfq.sub": "Attach your drawing, material and quantity. Sales replies within 24 working hours.",
    "rfq.drop": "Drop your drawing here or click to choose", "rfq.dropHint": "PDF, DWG, DXF, STEP, IGES · up to 20 MB",
    "rfq.process": "Process", "rfq.choose": "Choose",
    "opt.mill": "CNC milling", "opt.turn": "CNC turning", "opt.sheet": "Laser cut + bending", "opt.weld": "Welding / assembly", "opt.unsure": "Not sure, please advise",
    "rfq.material": "Material", "opt.other": "Other (add in notes)",
    "rfq.qty": "Quantity (pcs)", "rfq.qtyPh": "e.g. 200", "rfq.contact": "Email or LINE ID",
    "rfq.submit": "Send drawing for a quote", "rfq.sending": "Sending…",
    "rfq.privacy": "Demo site: this form really validates, but sends nothing anywhere.",
    "done.title": "Drawing received", "done.body": "Request {no}. Sales will send a quotation within 24 working hours. (Demo, nothing was sent.)", "done.again": "Send another part",
    "err.file": "Attach a drawing file (PDF, DWG, DXF, STEP or IGES).", "err.process": "Choose a process.", "err.material": "Choose a material.",
    "err.qty": "Enter a quantity of at least 1 piece.", "err.contact": "Enter an email or LINE ID so we can reply.", "err.size": "That file is over 20 MB. Send a smaller file or a PDF.",
    "make.title": "What we make",
    "cap.mill": "CNC milling", "spec.size": "Max part size", "unit.mm": "mm", "spec.tol": "Tolerance", "spec.axis": "Axes", "spec.axisVal": "3-axis and 5-axis",
    "cap.turn": "CNC turning", "spec.dia": "Diameter", "spec.len": "Max length",
    "cap.sheet": "Laser cut + bending", "spec.thk": "Thickness", "spec.table": "Cutting table", "spec.bend": "Bend length",
    "cap.weld": "Welding & finishing", "spec.weld": "Welding", "spec.finish": "Finishing", "spec.finishVal": "Anodizing, zinc plating, powder coat, polishing",
    "mat.label": "Common materials",
    "mach.title": "Machine list", "t.machine": "Machine", "t.model": "Model", "t.qty": "Qty", "t.range": "Working range",
    "m.mc5": "5-axis machining center", "m.mc3": "3-axis machining center", "m.lathe": "CNC lathe", "m.laser": "Fiber laser 6 kW", "m.brake": "Press brake 130 t", "m.brakeRange": "Bend length 3,100", "m.cmm": "CMM",
    "mach.foot": "Units in mm · the machine list is demo data",
    "q.title": "Inspected before it ships", "q.lead": "The first piece of every lot is measured on the CMM and the report ships with the goods, so you see real numbers before you sign.",
    "q.c1": "First article inspection (FAI) report for every lot", "q.c2": "Mill certificates from the steel supplier", "q.c3": "ISO 9001:2015 quality system (demo data)",
    "i.title": "Inspection report", "i.pass": "Result: all features pass", "i.feature": "Feature", "i.nominal": "Nominal", "i.actual": "Actual", "i.dev": "Dev.", "i.result": "Result",
    "ind.title": "Industries we supply", "ind.auto": "Automotive parts", "ind.elec": "Electrical appliances", "ind.food": "Food machinery", "ind.auto2": "Factory automation", "ind.med": "Medical devices",
    "p.title": "From drawing to delivery",
    "s1.t": "Send the drawing", "s1.d": "PDF, DWG or STEP with material and quantity",
    "s2.t": "Quotation", "s2.d": "Within 24 working hours, with lead time",
    "s3.t": "First article", "s3.d": "5–7 days, with a first article inspection report",
    "s4.t": "Production & delivery", "s4.d": "Delivered on the agreed schedule across the Eastern region and Bangkok",
    "c.title": "Talk to sales", "c.addr": "Address", "c.addrVal": "99/9 Moo 5, Demo Industrial Estate, Chonburi 20160", "c.tel": "Phone", "c.sample": "(demo)",
    "c.mail": "Email", "c.hours": "Hours", "c.hoursVal": "Mon–Sat 08:00–17:00",
    "plan.plant": "Plant 1", "plan.qc": "QC", "plan.road": "Road 3", "plan.cap": "Plant layout (illustration)",
    "foot.disclaimer": "PIKUL Precision Parts is a fictional company. This site is a portfolio sample of company-website design and development. No data is collected or sent."
  };
  const TH_EXTRA = {
    "rfq.sending": "กำลังส่ง…",
    "done.body": "เลขที่คำขอ {no} ทีมขายจะส่งใบเสนอราคาภายใน 24 ชม. ทำการ (ตัวอย่าง ไม่มีการส่งข้อมูลจริง)",
    "err.file": "แนบไฟล์แบบก่อน (PDF, DWG, DXF, STEP หรือ IGES)", "err.process": "เลือกประเภทงาน", "err.material": "เลือกวัสดุ",
    "err.qty": "ใส่จำนวนอย่างน้อย 1 ชิ้น", "err.contact": "ใส่อีเมลหรือ LINE ID เพื่อให้เราติดต่อกลับ", "err.size": "ไฟล์ใหญ่เกิน 20 MB ส่งไฟล์ที่เล็กลงหรือเป็น PDF"
  };
  const TH = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => { TH[el.dataset.i18n] = el.textContent; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { TH[el.dataset.i18nPlaceholder] = el.placeholder; });
  Object.assign(TH, TH_EXTRA);
  const TITLE = { th: document.title, en: "PIKUL Precision Parts · CNC & sheet metal (demo website)" };

  let lang = "th";
  try { lang = localStorage.getItem("pikul-lang") === "en" ? "en" : "th"; } catch (e) { /* storage blocked */ }
  const t = (key) => (lang === "en" ? EN : TH)[key] ?? TH[key] ?? key;

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = TITLE[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (el.dataset.i18n === "done.body") return;
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    // Stacked mobile tables read their labels from the header row
    document.querySelectorAll(".table-wrap table").forEach((tbl) => {
      const heads = [...tbl.querySelectorAll("thead th")].map((th) => th.textContent.trim());
      tbl.querySelectorAll("tbody tr").forEach((tr) => [...tr.children].forEach((td, i) => td.setAttribute("data-label", heads[i] || "")));
    });
    renderDone();
    requestAnimationFrame(redrawAll);
  }
  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("pikul-lang", lang); } catch (e) { /* ignore */ }
    applyLang();
  }));

  /* ---------- rulers ---------- */
  const rx = document.querySelector(".ruler-x");
  function drawRuler() {
    rx.textContent = "";
    const w = rx.clientWidth;
    for (let x = 100; x < w - 30; x += 100) {
      const s = document.createElement("span");
      s.style.left = x + "px";
      s.textContent = x;
      rx.appendChild(s);
    }
  }

  /* ---------- part outlines ---------- */
  const defs = document.createElementNS(SVGNS, "svg");
  defs.setAttribute("width", "0"); defs.setAttribute("height", "0");
  defs.setAttribute("aria-hidden", "true"); defs.style.position = "absolute";
  defs.innerHTML = '<defs><linearGradient id="partFill" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#d7dce1"/><stop offset=".55" stop-color="#c9cfd5"/><stop offset="1" stop-color="#bcc3ca"/></linearGradient></defs>';
  document.body.prepend(defs);

  const parts = [...document.querySelectorAll(".part")];

  function outlinePath(el, w, h) {
    if (el.dataset.shape === "round") {
      const r = Math.min(h / 2, 70);
      return `M${r} 0H${w - r}A${r} ${r} 0 0 1 ${w} ${r}V${h - r}A${r} ${r} 0 0 1 ${w - r} ${h}H${r}A${r} ${r} 0 0 1 0 ${h - r}V${r}A${r} ${r} 0 0 1 ${r} 0Z`;
    }
    const c = Math.min(+el.dataset.chamfer || 0, w / 4, h / 4);
    if (el.dataset.notch) {
      // L-bracket: a stepped notch along the top edge, right of the tag
      const nx = Math.min(w * 0.42, 220), nw = Math.min(w * 0.22, 120), nd = 12;
      return `M${c} 0H${nx}V${-nd}H${nx + nw}V0H${w}V${h - c}L${w - c} ${h}H0V${c}Z`;
    }
    return `M${c} 0H${w}V${h - c}L${w - c} ${h}H0V${c}Z`;
  }
  function holePoints(el, w, h) {
    const list = (el.dataset.holes || "").split(",").filter(Boolean);
    const o = 18;
    const map = { tl: [o + 6, o], tr: [w - o, o], bl: [o, h - o], br: [w - o - 6, h - o], l: [o + 4, h / 2], r: [w - o - 4, h / 2] };
    return list.map((k) => map[k]).filter(Boolean);
  }

  function buildOutline(el) {
    let svg = el.querySelector(":scope > .outline-svg");
    if (!svg) {
      svg = document.createElementNS(SVGNS, "svg");
      svg.setAttribute("class", "outline-svg");
      svg.setAttribute("aria-hidden", "true");
      el.prepend(svg);
    }
    const w = el.offsetWidth, h = el.offsetHeight;
    if (!w || !h) return;
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    const d = outlinePath(el, w, h);
    const holes = holePoints(el, w, h).map(([x, y]) => `<circle class="hole" cx="${x}" cy="${y}" r="5.5"/>`).join("");
    svg.innerHTML = `<path class="body" d="${d}"/>${holes}<path class="edge" d="${d}"/><path class="trace" d="${d}"/>`;
    const trace = svg.querySelector(".trace");
    const start = trace.getPointAtLength(0);
    svg.insertAdjacentHTML("beforeend", `<circle class="pierce" cx="${start.x}" cy="${start.y}" r="3.2"/>`);
    const len = trace.getTotalLength();
    el._len = len;
    trace.style.strokeDasharray = `${len}`;
    trace.style.strokeDashoffset = el.classList.contains("is-cut") ? "0" : `${len}`;
  }
  function redrawAll() { drawRuler(); parts.forEach(buildOutline); }

  /* ---------- laser trace (signature) ---------- */
  const head = document.querySelector(".laser");
  const queue = [];
  let busy = false;

  function cut(el) {
    if (el.classList.contains("is-cut") || el._queued) return;
    el._queued = true;
    queue.push(el);
    if (!busy) next();
  }
  function next() {
    const el = queue.shift();
    if (!el) { busy = false; head.classList.remove("on"); return; }
    busy = true;
    const trace = el.querySelector(".outline-svg .trace");
    if (!trace) { el.classList.add("is-cut"); next(); return; }
    const len = el._len || trace.getTotalLength();
    const dur = Math.max(650, Math.min(1700, len * 0.55));
    el.classList.add("is-cutting");
    head.classList.add("on");
    const t0 = performance.now();
    const ease = (p) => 1 - Math.pow(1 - p, 3);
    function frame(now) {
      const p = Math.min(1, (now - t0) / dur);
      const tr = el.querySelector(".outline-svg .trace") || trace;
      const at = Math.min(len * ease(p), tr.getTotalLength());
      tr.style.strokeDashoffset = `${tr.getTotalLength() - at}`;
      const pt = tr.getPointAtLength(at);
      const box = tr.ownerSVGElement.getBoundingClientRect();
      head.style.transform = `translate(${box.left + pt.x}px, ${box.top + pt.y}px)`;
      if (p < 1) { requestAnimationFrame(frame); return; }
      el.classList.remove("is-cutting");
      el.classList.add("is-cut");
      setTimeout(next, 120);
    }
    requestAnimationFrame(frame);
  }

  /* ---------- RFQ form ---------- */
  const form = document.getElementById("rfq");
  const fileInput = form.querySelector("#file");
  const drop = form.querySelector(".drop");
  const fileLabel = form.querySelector(".drop-file");
  const errorBox = form.querySelector(".form-error");
  const done = form.querySelector(".rfq-done");
  const submitBtn = form.querySelector('button[type="submit"]');
  let rfqNo = "";

  function renderDone() {
    const p = done.querySelector('[data-i18n="done.body"]');
    p.textContent = "";
    const [a, b] = t("done.body").split("{no}");
    const no = document.createElement("b");
    no.textContent = rfqNo || "RFQ-0000";
    p.append(a, no, b || "");
  }
  ["dragenter", "dragover"].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add("is-over"); }));
  ["dragleave", "drop"].forEach((ev) => drop.addEventListener(ev, () => drop.classList.remove("is-over")));
  drop.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer && e.dataTransfer.files.length) { fileInput.files = e.dataTransfer.files; showFile(); }
  });
  fileInput.addEventListener("change", showFile);
  function showFile() {
    const f = fileInput.files[0];
    fileLabel.textContent = f ? `${f.name} · ${(f.size / 1048576).toFixed(1)} MB` : "";
    drop.classList.remove("is-invalid");
  }

  function validate() {
    const checks = [
      [() => fileInput.files.length > 0, "err.file", drop, fileInput],
      [() => fileInput.files.length === 0 || fileInput.files[0].size <= 20 * 1048576, "err.size", drop, fileInput],
      [() => form.process.value !== "", "err.process", form.process, form.process],
      [() => form.material.value !== "", "err.material", form.material, form.material],
      [() => +form.qty.value >= 1, "err.qty", form.qty, form.qty],
      [() => form.contact.value.trim().length >= 3, "err.contact", form.contact, form.contact]
    ];
    form.querySelectorAll("[aria-invalid]").forEach((el) => el.removeAttribute("aria-invalid"));
    drop.classList.remove("is-invalid");
    for (const [ok, key, mark, focus] of checks) {
      if (!ok()) {
        if (mark === drop) drop.classList.add("is-invalid"); else mark.setAttribute("aria-invalid", "true");
        errorBox.textContent = t(key);
        focus.focus();
        return false;
      }
    }
    errorBox.textContent = "";
    return true;
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) return;
    submitBtn.disabled = true;
    const label = submitBtn.querySelector("span");
    label.textContent = t("rfq.sending");
    setTimeout(() => {
      rfqNo = "RFQ-" + String(Math.floor(1000 + Math.random() * 9000));
      renderDone();
      done.hidden = false;
      form.classList.add("is-sent");
      submitBtn.disabled = false;
      label.textContent = t("rfq.submit");
      requestAnimationFrame(() => { buildOutline(form); done.querySelector("h3").focus?.(); });
    }, 900);
  });
  done.querySelector("button").addEventListener("click", () => {
    form.reset(); showFile();
    done.hidden = true;
    form.classList.remove("is-sent");
    requestAnimationFrame(() => { buildOutline(form); fileInput.focus(); });
  });
  done.querySelector("h3").tabIndex = -1;

  /* ---------- boot ---------- */
  applyLang();
  if (reduceMotion || forceCut) {
    parts.forEach((p) => p.classList.add("is-cut"));
    redrawAll();
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { cut(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.35 });
    parts.forEach((p) => io.observe(p));
  }
  let rt;
  const ro = new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(redrawAll, 60); });
  ro.observe(document.body);
  document.fonts && document.fonts.ready.then(redrawAll);
})();
