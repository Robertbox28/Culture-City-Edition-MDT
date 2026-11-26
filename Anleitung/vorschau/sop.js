// =====================================================================
//  ps-mdt  |  Dienstanweisungen – Anzeige
//  Inhalte stehen in sop-content.js
// =====================================================================
(function () {
  const KIND_LABEL = { police: "Polizei", ems: "Rettungsdienst", fire: "Feuerwehr", doj: "Justiz", gov: "Regierung" };
  let current = { kind: null, index: 0, query: "" };

  function kind() {
    if (typeof IsTaxiUI === "function" && IsTaxiUI()) return "taxi";
    if (typeof IsMechanicUI === "function" && IsMechanicUI()) return "mechanic";
    if (typeof IsGovUI === "function" && IsGovUI()) return "gov";
    if (typeof IsFireUI === "function" && IsFireUI()) return "fire";
    if (typeof IsMedicalUI === "function" && IsMedicalUI()) return "ems";
    if (typeof DojJobs !== "undefined" && DojJobs[playerJob] !== undefined) return "doj";
    return "police";
  }

  const chapters = () => (window.SOP_CONTENT && window.SOP_CONTENT[current.kind]) || [];
  const plain = (html) => $("<div>").html(html).text();
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function highlight(html, q) {
    if (!q) return html;
    const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    // nur Text ausserhalb von Tags markieren
    return html.replace(/>([^<]+)</g, (m, text) => ">" + text.replace(re, "<mark>$1</mark>") + "<");
  }

  function renderList() {
    const q = current.query.toLowerCase();
    const list = chapters().map((c, i) => ({ c, i, hit: !q || (c.title + " " + plain(c.body)).toLowerCase().includes(q) }));
    const visible = list.filter((x) => x.hit);
    $(".sop-chapters").html(visible.length
      ? visible.map(({ c, i }) => `<div class="sop-chapter ${i === current.index ? "active" : ""}" data-index="${i}">
          <span class="sop-chapter-num">${i + 1}</span>
          <i class="fa-solid ${esc(c.icon || "fa-file-lines")}"></i>
          <span class="sop-chapter-title">${esc(c.title)}</span></div>`).join("")
      : '<div class="sop-empty">Nichts gefunden.</div>');
    if (visible.length && !visible.some((x) => x.i === current.index)) {
      current.index = visible[0].i;
      renderList();
      return;
    }
    renderContent();
  }

  function renderContent() {
    const c = chapters()[current.index];
    if (!c) { $(".sop-content").html('<div class="sop-empty">Für diese Behörde sind noch keine Dienstanweisungen hinterlegt.</div>'); return; }
    const total = chapters().length;
    $(".sop-content").html(`
      <div class="sop-content-head">
        <span class="sop-content-kicker">${esc(KIND_LABEL[current.kind] || "")} · Kapitel ${current.index + 1} von ${total}</span>
        <h2><i class="fa-solid ${esc(c.icon || "fa-file-lines")}"></i> ${esc(c.title)}</h2>
      </div>
      <div class="sop-body">${highlight(c.body, current.query)}</div>
      <div class="sop-pager">
        ${current.index > 0 ? `<div class="sop-page-btn" data-go="${current.index - 1}"><i class="fa-solid fa-arrow-left"></i> ${esc(chapters()[current.index - 1].title)}</div>` : "<span></span>"}
        ${current.index < total - 1 ? `<div class="sop-page-btn" data-go="${current.index + 1}">${esc(chapters()[current.index + 1].title)} <i class="fa-solid fa-arrow-right"></i></div>` : "<span></span>"}
      </div>`);
    $(".sop-content").scrollTop(0);
  }

  function open() {
    const k = kind();
    if (k !== current.kind) { current = { kind: k, index: 0, query: "" }; $("#sop-search").val(""); }
    const HINT = { taxi: "Suchen, z.B. Fahrpreis, Zechpreller ...", mechanic: "Suchen, z.B. Abschleppen, Rechnung ...",
                   ems: "Suchen, z.B. Triage, ICU ...", fire: "Suchen, z.B. Atemschutz, Brandschau ...",
                   gov: "Suchen, z.B. Lizenz, Sitzung ...", doj: "Suchen, z.B. Haftbefehl, Urteil ..." };
    $("#sop-search").attr("placeholder", HINT[k] || "Suchen, z.B. Festnahme, 10-99 ...");
    $(".sop-external-btn").toggle(!!(typeof sopLink === "string" && sopLink && sopLink !== "about:blank"));
    $(".sop-external").hide();
    $(".sop-wrap").css("display", "flex");
    renderList();
  }

  $(document).on("click", '.nav-item[data-page=".sop-page-container"]', () => setTimeout(open, 50));
  $(document).on("click", ".sop-chapter", function () { current.index = Number($(this).data("index")); renderList(); });
  $(document).on("click", ".sop-page-btn", function () { current.index = Number($(this).data("go")); renderList(); });
  $(document).on("input", "#sop-search", function () { current.query = $(this).val().trim(); renderList(); });
  $(document).on("click", ".sop-external-btn", () => { $(".sop-wrap").hide(); $(".sop-external").css("display", "flex"); });
  $(document).on("click", ".sop-back", () => { $(".sop-external").hide(); $(".sop-wrap").css("display", "flex"); });

  window.addEventListener("message", (e) => {
    if (e.data && e.data.type === "show" && e.data.enable) setTimeout(open, 0);
  });
})();
