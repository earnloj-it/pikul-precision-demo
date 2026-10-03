(() => {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- i18n: Thai lives in the HTML, English here ---------- */
  const EN = {
    "skip": "Skip to main content", "skip.form": "Skip to the quote form",
    "notice": "Demo website for a portfolio · the company, data and figures are fictional · images are AI-generated",
    "nav.home": "Home", "nav.services": "Services", "nav.works": "Our Work", "nav.quality": "Quality", "nav.contact": "Contact",
    "menu.open": "Open menu", "menu.close": "Close menu", "nav.label": "Main menu",
    "cta.quote": "Request a quote", "cta.services": "Our services",
    "hero.tagline": "CNC machining and sheet metal to ±0.01 mm, all under one roof.",
    "quick.title": "Quick quote", "quick.sub": "Reply within 24 hours", "quick.next": "Next: attach drawing", "quick.label": "Quick quote",
    "f.process": "Process", "f.choose": "Choose", "f.material": "Material", "f.qty": "Quantity (pcs)", "f.qtyPh": "e.g. 200",
    "f.name": "Name / company", "f.contact": "Email or LINE ID", "f.note": "Details", "f.notePh": "e.g. black anodizing, needed by month end",
    "opt.mill": "CNC milling", "opt.turn": "CNC turning", "opt.sheet": "Laser cut + bending", "opt.weld": "Welding / assembly", "opt.unsure": "Not sure, please advise", "opt.other": "Other (add in details)",
    "about.title": "About us",
    "about.lead": "PIKUL Precision Parts was founded in 2008 in an industrial estate in Chonburi. We make high-precision metal parts for automotive, electrical-appliance and food-machinery manufacturers: CNC milling and turning, laser cutting, bending, welding and finishing.",
    "about.expTitle": "Our experience",
    "about.exp": "Engineers and machinists who work with part drawings every day. We read your tolerances and choose the most cost-effective way to make the part, from a single prototype to monthly production runs.",
    "fact.years": "years in the industry", "fact.machines": "CNC machines", "fact.tol": "mm precision",
    "about.comTitle": "Our commitment",
    "about.com": "On-time delivery, every lot inspected before it ships, and clear status updates. A good supplier is one you never have to chase.",
    "about.c1": "Quotation within 24 working hours", "about.c2": "Inspection report with every lot", "about.c3": "Progress updates by LINE and email",
    "svc.title": "Our services", "svc.lead": "Every step in one plant, so you never coordinate multiple subcontractors.",
    "svc.mill": "CNC milling", "svc.millD": "3- and 5-axis, from aluminum to tool steel",
    "svc.turn": "CNC turning", "svc.turnD": "Shafts, bushings and fittings, Ø 3–350 mm",
    "svc.sheet": "Laser cut + bending", "svc.sheetD": "Sheet 0.5–20 mm, bends up to 3.1 m",
    "svc.weld": "Welding & finishing", "svc.weldD": "TIG / MIG, anodizing, powder coat",
    "svc.more": "See all service details",
    "works.title": "Recent work", "works.lead": "Examples of parts we make for customers across industries.", "works.all": "See all work",
    "w1.alt": "Navy anodized aluminum bracket", "w1.title": "Anodized aluminum motor bracket", "w1.meta": "Automotive parts · 2,000 pcs per month", "w1.proc": "5-axis CNC milling + anodizing", "w1.card": "AL6061-T6 · 5-axis milling · 2,000 pcs/month",
    "w2.alt": "Powder-coated sheet-metal control cabinet", "w2.title": "Sheet-metal control cabinet", "w2.meta": "Factory automation · 150 cabinets per lot", "w2.proc": "Laser cut + bending + powder coat", "w2.lead": "10 working days", "w2.card": "SPCC t1.6 · laser cut + bend + powder coat · 150 per lot",
    "w3.alt": "Turned stainless steel flange", "w3.title": "Stainless steel flange", "w3.card": "SUS304 · CNC turning + drilling · 500 per lot",
    "w4.alt": "Stepped stainless steel shaft", "w4.title": "Conveyor drive shaft", "w4.card": "SUS420 · turning + keyway milling · ±0.01 mm",
    "w5.alt": "TIG-welded stainless frame", "w5.title": "Stainless machine frame", "w5.card": "SUS304 square tube · TIG welding + weld finishing",
    "w6.alt": "Turned brass fittings", "w6.title": "Brass fittings", "w6.card": "C3604 · automatic CNC turning · 20,000 pcs/month",
    "spec.material": "Material", "spec.process": "Process", "spec.tol": "Tolerance", "spec.lead": "Lead time", "unit.mm": "mm",
    "spec.size": "Max part size", "spec.dia": "Diameter", "spec.len": "Max length", "spec.thk": "Thickness", "spec.table": "Cutting table", "spec.bend": "Bend length",
    "spec.weld": "Welding", "spec.finish": "Finishing", "spec.finishVal": "Anodizing, zinc plating, powder coat, polishing",
    "q.alt": "CMM measuring a machined part", "q.title": "Every part inspected before it ships",
    "q.body": "The first piece of every lot is measured on a CMM in a temperature-controlled room, and the report ships with the goods, so you see real numbers before you sign.",
    "q.c1": "First article inspection (FAI) report for every lot", "q.c2": "Mill certificates from the steel supplier", "q.c3": "ISO 9001:2015 quality system (demo data)",
    "band.title": "Send the drawing. Get a price in 24 hours.", "band.body": "Attach a PDF, DWG or STEP file with the quantity you need. Sales will send back a quotation and lead time.",
    "band.title2": "Have a similar part on your desk?", "band.body2": "Send us the drawing. Our engineers will suggest the most cost-effective material and process, with a quotation.",
    "foot.motto": "“Parts that match the drawing, from the first piece”", "foot.info": "Information", "foot.contact": "Contact",
    "foot.disclaimer": "Fictional company. This website is a web-design portfolio sample with AI-generated images. No data is collected or sent.",
    "slider.label": "Featured services", "slider.prev": "Previous", "slider.next": "Next", "slider.go": "Go to slide",
    "sl1.t": "3- and 5-axis CNC milling", "sl1.d": "Complex parts in aluminum, stainless and tool steel, in a single setup.",
    "sl2.t": "Fiber laser cutting", "sl2.d": "3,000 × 1,500 mm table, sheets up to 20 mm, clean edges ready for bending.",
    "sl3.t": "Welding and assembly", "sl3.d": "Stainless and steel machine frames with clean TIG welds, dimension-checked before delivery.",
    "svcp.title": "Our services", "svcp.detail": "Service details",
    "svcp.lead": "We make metal parts to your drawing end to end: reading the drawing, choosing material, machining, inspection, finishing and delivery, with precision, controlled cost and on-time delivery.",
    "turn.alt": "CNC lathe turning a stainless shaft", "floor.alt": "A clean, well-organized CNC machining hall", "turn.alt2": "Turning a stainless shaft", "mill.alt": "End mill cutting an aluminum block", "bend.alt": "Press brake bending a stainless sheet", "weld.alt": "Welder TIG-welding a stainless frame",
    "mill.body": "3- and 5-axis machining centers for multi-face, complex parts. Fewer setups and consistent accuracy across the whole lot.",
    "turn.body": "Shafts, bushings, fittings and round parts, both plain turning and mill-turn with drilling and milling in one machine.",
    "sheet.body": "6 kW fiber laser cutting followed by CNC bending: cabinets, covers, brackets and sheet parts with accurate bend angles on every piece.",
    "weld.body": "Structural welding and assembly, with finishing through vetted partners. Delivered ready to install.",
    "mach.title": "Machine list", "mach.lead": "The main machines we use to make our customers’ parts.", "mach.note": "The machine list is demo data.",
    "t.machine": "Machine", "t.model": "Model", "t.qty": "Qty", "t.range": "Working range (mm)",
    "m.mc5": "5-axis machining center", "m.mc3": "3-axis machining center", "m.lathe": "CNC lathe", "m.laser": "Fiber laser 6 kW", "m.brake": "Press brake 130 t", "m.brakeRange": "Bend length 3,100", "m.cmm": "CMM",
    "worksp.title": "Our work", "worksp.lead": "Parts made for customers in automotive, electrical appliances, food machinery and factory automation.",
    "filter.label": "Filter work", "filter.all": "All", "filter.cnc": "CNC", "filter.sheet": "Sheet metal", "filter.weld": "Welding",
    "ind.auto": "Automotive", "ind.food": "Food machinery", "ind.fa": "Automation", "ind.elec": "Electrical appliances",
    "works.note": "Part photos are AI-generated for this demo website.",
    "c.title": "Contact us", "c.lead": "Have a drawing or a question? Send it over. Sales replies within 24 working hours.",
    "c.addr": "Address", "c.addrVal": "99/9 Moo 5, Demo Industrial Estate, Chonburi 20160", "c.tel": "Phone", "c.sample": "(demo)",
    "c.mail": "Email", "c.hours": "Hours", "c.hoursVal": "Mon–Sat 08:00–17:00",
    "map.alt": "Aerial view of a factory in an industrial estate (illustration)", "map.cap": "AI-generated illustration, not a real location",
    "rfq.title": "Request a quote", "rfq.sub": "Attach your drawing, material and quantity and we’ll send a price back.",
    "rfq.drop": "Drop your drawing here or click to choose", "rfq.dropHint": "PDF, DWG, DXF, STEP, IGES · up to 20 MB",
    "rfq.submit": "Send drawing for a quote", "rfq.sending": "Sending…",
    "rfq.privacy": "Demo site: this form really validates, but sends nothing anywhere.",
    "done.title": "Drawing received", "done.body": "Request {no}. Sales will send a quotation within 24 working hours. (Demo: nothing was sent.)", "done.again": "Send another part",
    "err.file": "Attach a drawing file (PDF, DWG, DXF, STEP or IGES).", "err.size": "That file is over 20 MB. Send a smaller file or a PDF.",
    "err.process": "Choose a process.", "err.material": "Choose a material.", "err.qty": "Enter a quantity of at least 1 piece.", "err.contact": "Enter an email or LINE ID so we can reply."
  };
  const TH_EXTRA = {
    "menu.open": "เปิดเมนู", "menu.close": "ปิดเมนู", "slider.go": "ไปที่สไลด์", "rfq.sending": "กำลังส่ง…",
    "done.body": "เลขที่คำขอ {no} ทีมขายจะส่งใบเสนอราคาภายใน 24 ชม. ทำการ (ตัวอย่าง ไม่มีการส่งข้อมูลจริง)",
    "err.file": "แนบไฟล์แบบก่อน (PDF, DWG, DXF, STEP หรือ IGES)", "err.size": "ไฟล์ใหญ่เกิน 20 MB ส่งไฟล์ที่เล็กลงหรือเป็น PDF",
    "err.process": "เลือกประเภทงาน", "err.material": "เลือกวัสดุ", "err.qty": "ใส่จำนวนอย่างน้อย 1 ชิ้น", "err.contact": "ใส่อีเมลหรือ LINE ID เพื่อให้เราติดต่อกลับ"
  };
  const TH = { ...TH_EXTRA };
  const grab = (sel, attr, key) => document.querySelectorAll(sel).forEach((el) => { TH[el.dataset[key]] = attr ? el.getAttribute(attr) : el.textContent; });
  grab("[data-i18n]", null, "i18n");
  grab("[data-i18n-alt]", "alt", "i18nAlt");
  grab("[data-i18n-placeholder]", "placeholder", "i18nPlaceholder");
  grab("[data-i18n-aria]", "aria-label", "i18nAria");
  const TITLE_TH = document.title;
  const TITLE_EN = {
    home: "PIKUL Precision Parts · CNC & sheet metal (demo website)", services: "Services · PIKUL Precision Parts (demo)",
    works: "Our work · PIKUL Precision Parts (demo)", contact: "Contact · PIKUL Precision Parts (demo)"
  }[document.body.dataset.page] || TITLE_TH;

  let lang = "th";
  try { if (localStorage.getItem("pikul-lang") === "en") lang = "en"; } catch (e) { /* storage blocked */ }
  const t = (k) => (lang === "en" ? EN[k] : TH[k]) ?? TH[k] ?? EN[k] ?? k;

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = lang === "en" ? TITLE_EN : TITLE_TH;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    const nav = document.getElementById("nav");
    if (nav) nav.setAttribute("aria-label", lang === "en" ? EN["nav.label"] : "เมนูหลัก");
    document.querySelectorAll(".table-card table").forEach((tbl) => {
      const heads = [...tbl.querySelectorAll("thead th")].map((th) => th.textContent.trim());
      tbl.querySelectorAll("tbody tr").forEach((tr) => [...tr.children].forEach((td, n) => td.setAttribute("data-label", heads[n] || "")));
    });
    syncMenuLabel();
    renderDone();
    labelDots();
  }
  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("pikul-lang", lang); } catch (e) { /* ignore */ }
    applyLang();
  }));

  /* ---------- mobile menu ---------- */
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.getElementById("nav");
  function syncMenuLabel() {
    if (!menuBtn) return;
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-label", t(open ? "menu.close" : "menu.open"));
  }
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = menuBtn.getAttribute("aria-expanded") !== "true";
      menuBtn.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      syncMenuLabel();
    });
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) { menuBtn.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); syncMenuLabel(); } });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && nav.classList.contains("is-open")) { menuBtn.click(); menuBtn.focus(); } });
  }

  // ?static (used for full-page screenshots): load every image now
  if (new URLSearchParams(location.search).has("static")) document.querySelectorAll("img[loading=lazy]").forEach((im) => { im.loading = "eager"; });

  /* ---------- reveal on scroll (content visible without JS) ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window) || new URLSearchParams(location.search).has("static")) {
    reveals.forEach((el) => el.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  }

  /* ---------- services slider ---------- */
  const slider = document.querySelector(".slider");
  let labelDots = () => {};
  if (slider) {
    const slides = [...slider.querySelectorAll(".slide")];
    const dotsBox = slider.querySelector(".dots");
    let i = 0, timer = null;
    const dots = slides.map((_, n) => {
      const b = document.createElement("button");
      b.type = "button";
      b.addEventListener("click", () => { go(n); restart(); });
      dotsBox.appendChild(b);
      return b;
    });
    labelDots = () => dots.forEach((b, n) => b.setAttribute("aria-label", `${t("slider.go")} ${n + 1}`));
    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => { s.classList.toggle("is-active", k === i); s.setAttribute("aria-hidden", String(k !== i)); });
      dots.forEach((d, k) => d.setAttribute("aria-current", String(k === i)));
    }
    function restart() {
      clearInterval(timer);
      if (!reduceMotion) timer = setInterval(() => go(i + 1), 6000);
    }
    slider.querySelector(".prev").addEventListener("click", () => { go(i - 1); restart(); });
    slider.querySelector(".next").addEventListener("click", () => { go(i + 1); restart(); });
    slider.addEventListener("mouseenter", () => clearInterval(timer));
    slider.addEventListener("mouseleave", restart);
    slider.addEventListener("focusin", () => clearInterval(timer));
    go(0); restart();
  }

  /* ---------- works filter ---------- */
  const filterBtns = document.querySelectorAll(".filters button");
  filterBtns.forEach((b) => b.addEventListener("click", () => {
    const f = b.dataset.filter;
    filterBtns.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    document.querySelectorAll(".work").forEach((w) => { w.hidden = f !== "all" && w.dataset.cat !== f; });
  }));

  /* ---------- RFQ form (contact page) ---------- */
  const rfq = document.getElementById("rfq");
  let rfqNo = "";
  function renderDone() {
    const p = rfq && rfq.querySelector(".done-body");
    if (!p) return;
    const [a, b] = t("done.body").split("{no}");
    const no = document.createElement("b");
    no.textContent = rfqNo || "RFQ-0000";
    p.textContent = "";
    p.append(a, no, b || "");
  }
  if (rfq) {
    const form = rfq.querySelector("form");
    const file = form.querySelector("#file");
    const drop = form.querySelector(".drop");
    const fileName = form.querySelector(".file-name");
    const err = form.querySelector(".form-error");
    const submit = form.querySelector('button[type="submit"]');
    const done = rfq.querySelector(".done");

    // Prefill from the home page quick-quote bar
    const qs = new URLSearchParams(location.search);
    ["process", "material", "qty"].forEach((k) => { if (qs.get(k)) form.elements[k].value = qs.get(k); });
    if (qs.get("process") || qs.get("material") || qs.get("qty")) setTimeout(() => drop.scrollIntoView({ block: "center" }), 50);

    const showFile = () => {
      const f = file.files[0];
      fileName.textContent = f ? `${f.name} · ${(f.size / 1048576).toFixed(1)} MB` : "";
      drop.classList.remove("is-invalid");
    };
    file.addEventListener("change", showFile);
    ["dragenter", "dragover"].forEach((ev) => drop.addEventListener(ev, (e) => { e.preventDefault(); drop.classList.add("is-over"); }));
    ["dragleave", "drop"].forEach((ev) => drop.addEventListener(ev, () => drop.classList.remove("is-over")));
    drop.addEventListener("drop", (e) => { e.preventDefault(); if (e.dataTransfer && e.dataTransfer.files.length) { file.files = e.dataTransfer.files; showFile(); } });

    function validate() {
      const rules = [
        [() => file.files.length > 0, "err.file", drop, file],
        [() => !file.files.length || file.files[0].size <= 20 * 1048576, "err.size", drop, file],
        [() => form.process.value !== "", "err.process", form.process, form.process],
        [() => form.material.value !== "", "err.material", form.material, form.material],
        [() => +form.qty.value >= 1, "err.qty", form.qty, form.qty],
        [() => form.contact.value.trim().length >= 3, "err.contact", form.contact, form.contact]
      ];
      form.querySelectorAll("[aria-invalid]").forEach((el) => el.removeAttribute("aria-invalid"));
      drop.classList.remove("is-invalid");
      for (const [ok, key, mark, focus] of rules) {
        if (!ok()) {
          if (mark === drop) drop.classList.add("is-invalid"); else mark.setAttribute("aria-invalid", "true");
          err.textContent = t(key);
          focus.focus();
          return false;
        }
      }
      err.textContent = "";
      return true;
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validate()) return;
      submit.disabled = true;
      const label = submit.querySelector("span");
      label.textContent = t("rfq.sending");
      setTimeout(() => {
        rfqNo = "RFQ-" + String(Math.floor(1000 + Math.random() * 9000));
        renderDone();
        rfq.classList.add("is-sent");
        done.hidden = false;
        submit.disabled = false;
        label.textContent = t("rfq.submit");
        done.querySelector("h2").focus();
      }, 900);
    });
    done.querySelector("button").addEventListener("click", () => {
      form.reset(); showFile();
      rfq.classList.remove("is-sent");
      done.hidden = true;
      file.focus();
    });
  }

  applyLang();
})();
