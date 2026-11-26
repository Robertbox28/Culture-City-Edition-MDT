// =====================================================================
//  ps-mdt  |  Besetzung / Einteilung
//  Wer arbeitet mit wem, in welchem Fahrzeug – live für die ganze Behörde
// =====================================================================
(function () {
  const STATUS = {
    available: { label: "Verfügbar", cls: "st-available" },
    busy: { label: "Im Einsatz", cls: "st-busy" },
    pause: { label: "Pause", cls: "st-pause" },
    off: { label: "Ausser Dienst", cls: "st-off" },
  };
  const JOB_TAGS = {
    police: "LSPD", lspd: "LSPD", bcso: "BCSO", lssd: "LSSD", sasp: "SASP", sast: "SAST", sapr: "SAPR", doc: "DOC",
    ambulance: "EMS", firefighter: "LSFD", judge: "DOJ", lawyer: "DOJ", government: "GOV", regierung: "GOV", mayor: "GOV",
    taxi: "TAXI", mechanic: "MECH", bennys: "MECH",
  };

  const state = {
    assignments: [],
    units: [],
    canEdit: false,
    vehicles: [],
    maxMembers: 6,
    filter: "free",
    edit: { id: 0, status: "available", members: [] },
  };

  const esc = (v) => String(v == null ? "" : v)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  const post = (name, body) => $.post(`https://${GetParentResourceName()}/${name}`, JSON.stringify(body || {}));

  function memberLabel(m) {
    return m.callsign ? `(${esc(m.callsign)}) ${esc(m.name)}` : esc(m.name);
  }

  function assignedUnitOf(cid) {
    return state.assignments.find((a) => (a.members || []).some((m) => m.cid === cid));
  }

  // ---------------------------------------------------------------- Laden
  async function load() {
    $(".assign-list").html('<div class="profile-loader"></div>');
    let res = {};
    try { res = await post("getAssignments"); } catch (e) { res = {}; }
    if (typeof res === "string") { try { res = JSON.parse(res); } catch (e) { res = {}; } }
    state.assignments = res.assignments || [];
    state.units = res.units || [];
    state.canEdit = !!res.canEdit;
    state.vehicles = res.vehicles || [];
    state.maxMembers = Number(res.maxMembers) || 6;
    $("#assign-vehicle-list").html(state.vehicles.map((v) => `<option value="${esc(v)}">`).join(""));
    $(".assign-wrap").toggleClass("readonly", !state.canEdit);
    $(".assign-edit-col input, .assign-edit-col textarea").prop("readonly", !state.canEdit);
    if (state.edit.id && !state.assignments.some((a) => a.id === state.edit.id)) resetEditor();
    render();
  }

  // ---------------------------------------------------------------- Anzeige
  function render() {
    renderList();
    renderPeople();
    renderEditorMembers();
  }

  function renderList() {
    const list = state.assignments;
    const onDuty = state.units.filter((u) => u.duty);
    const assignedCount = onDuty.filter((u) => assignedUnitOf(u.cid)).length;
    $(".assign-summary").html(
      `<span><b>${list.length}</b> ${list.length === 1 ? "Einheit" : "Einheiten"}</span>` +
      `<span><b>${assignedCount}</b> von <b>${onDuty.length}</b> im Dienst eingeteilt</span>`
    );

    if (!list.length) {
      $(".assign-list").html(`<div class="assign-empty">Noch keine Einheiten eingeteilt.${state.canEdit ? "<br>Rechts eine neue Einheit anlegen." : ""}</div>`);
      return;
    }

    const order = { busy: 0, available: 1, pause: 2, off: 3 };
    const sorted = list.slice().sort((a, b) => (order[a.status] ?? 9) - (order[b.status] ?? 9) || String(a.unit).localeCompare(String(b.unit)));

    $(".assign-list").html(sorted.map((a) => {
      const st = STATUS[a.status] || STATUS.available;
      const members = (a.members || []).length
        ? a.members.map((m) => `<span class="assign-tag">${memberLabel(m)}</span>`).join("")
        : '<span class="assign-muted">Keine Besatzung</span>';
      const veh = [a.vehicle ? esc(a.vehicle) : "", a.plate ? `<b>${esc(a.plate)}</b>` : ""].filter(Boolean).join(" · ");
      const changed = a.updated_at ? `${esc(a.updated_by || "")} · ${timeAgo(Number(a.updated_at) * 1000)}` : "";
      return `<div class="assign-card ${a.id === state.edit.id ? "selected" : ""}" data-id="${a.id}">
          <div class="assign-card-top">
            <span class="assign-unit">${esc(a.unit)}</span>
            <span class="assign-status ${st.cls}">${st.label}</span>
          </div>
          <div class="assign-card-veh"><span class="fas fa-car-side"></span> ${veh || '<span class="assign-muted">Kein Fahrzeug</span>'}</div>
          <div class="assign-card-members">${members}</div>
          ${a.note ? `<div class="assign-card-note">${esc(a.note)}</div>` : ""}
          ${changed ? `<div class="assign-card-foot">${changed}</div>` : ""}
        </div>`;
    }).join(""));
  }

  function renderPeople() {
    let people = state.units.slice();
    if (state.filter === "free") people = people.filter((u) => !assignedUnitOf(u.cid));
    if (!people.length) {
      $(".assign-people").html(`<div class="assign-empty">${state.filter === "free" ? "Alle sind eingeteilt." : "Niemand online."}</div>`);
      return;
    }
    people.sort((a, b) => (b.duty - a.duty) || String(a.callsign).localeCompare(String(b.callsign)));
    const inEditor = new Set(state.edit.members.map((m) => m.cid));
    $(".assign-people").html(people.map((u) => {
      const unit = assignedUnitOf(u.cid);
      const tag = JOB_TAGS[u.job] || String(u.job || "").toUpperCase();
      return `<div class="assign-person ${u.duty ? "" : "offduty"} ${inEditor.has(u.cid) ? "picked" : ""}" data-cid="${esc(u.cid)}">
          <span class="assign-dot ${u.duty ? "on" : "off"}" title="${u.duty ? "Im Dienst" : "Nicht im Dienst"}"></span>
          <span class="assign-person-name">${u.callsign ? `(${esc(u.callsign)}) ` : ""}${esc(u.name)}</span>
          <span class="assign-jobtag">${esc(tag)}</span>
          ${unit ? `<span class="assign-person-unit">${esc(unit.unit)}</span>` : ""}
        </div>`;
    }).join(""));
  }

  function renderEditorMembers() {
    const m = state.edit.members;
    $(".assign-member-count").text(m.length ? `(${m.length})` : "");
    $(".assign-members").html(m.length
      ? m.map((x) => {
          const other = assignedUnitOf(x.cid);
          const moving = other && other.id !== state.edit.id ? ` <span class="assign-moving">wechselt von ${esc(other.unit)}</span>` : "";
          return `<span class="assign-tag removable" data-cid="${esc(x.cid)}">${memberLabel(x)}${moving}</span>`;
        }).join("")
      : '<span class="assign-muted">Noch niemand zugeteilt</span>');
    $(".assign-status-opt").removeClass("active").filter(`[data-status="${state.edit.status}"]`).addClass("active");
  }

  // ---------------------------------------------------------------- Editor
  function resetEditor() {
    state.edit = { id: 0, status: "available", members: [] };
    $("#assign-unit, #assign-vehicle, #assign-plate, #assign-note").val("");
    $(".assign-editing").text("Neue Einheit").data("id", 0);
    $(".assign-card").removeClass("selected");
    renderEditorMembers();
    renderPeople();
  }

  function openUnit(id) {
    const a = state.assignments.find((x) => x.id === id);
    if (!a) return;
    state.edit = { id: a.id, status: a.status || "available", members: (a.members || []).map((m) => ({ ...m })) };
    $("#assign-unit").val(a.unit || "");
    $("#assign-vehicle").val(a.vehicle || "");
    $("#assign-plate").val(a.plate || "");
    $("#assign-note").val(a.note || "");
    $(".assign-editing").text(`Du bearbeitest ${a.unit}`);
    $(".assign-card").removeClass("selected").filter(`[data-id="${a.id}"]`).addClass("selected");
    renderEditorMembers();
    renderPeople();
  }

  function flash(el, text) {
    const $el = $(el), old = $el.data("label") || $el.html();
    $el.data("label", old).html(text);
    setTimeout(() => $el.html(old), 1200);
  }

  function confirmClick($btn, text, action) {
    if ($btn.hasClass("confirm")) {
      $btn.removeClass("confirm").html($btn.data("label"));
      action();
      return;
    }
    $btn.data("label", $btn.html()).addClass("confirm").html(text);
    setTimeout(() => { if ($btn.hasClass("confirm")) $btn.removeClass("confirm").html($btn.data("label")); }, 3000);
  }

  // ---------------------------------------------------------------- Events
  $(document).on("click", '.nav-item[data-page=".penalcode-page-container"]', () => setTimeout(load, 300));
  $(document).on("click", ".assign-refresh", load);

  $(document).on("click", ".assign-roster-toggle", () => { $(".assign-wrap").hide(); $(".roster-embed").css("display", "flex"); });
  $(document).on("click", ".assign-roster-back", () => { $(".roster-embed").hide(); $(".assign-wrap").css("display", "flex"); });

  $(document).on("click", ".assign-card", function () { openUnit(Number($(this).data("id"))); });
  $(document).on("click", ".assign-new", resetEditor);

  $(document).on("click", ".assign-status-opt", function () {
    if (!state.canEdit) return;
    state.edit.status = $(this).data("status");
    renderEditorMembers();
  });

  $(document).on("click", ".assign-person", function () {
    if (!state.canEdit) return;
    const cid = String($(this).data("cid"));
    if (state.edit.members.some((m) => m.cid === cid)) return;
    if (state.edit.members.length >= state.maxMembers) { $(this).effect && $(this).effect("shake", { times: 2, distance: 2 }, 300); return; }
    const u = state.units.find((x) => x.cid === cid);
    if (!u) return;
    state.edit.members.push({ cid: u.cid, name: u.name, callsign: u.callsign });
    renderEditorMembers();
    renderPeople();
  });

  $(document).on("click", ".assign-members .assign-tag.removable", function () {
    if (!state.canEdit) return;
    const cid = String($(this).data("cid"));
    state.edit.members = state.edit.members.filter((m) => m.cid !== cid);
    renderEditorMembers();
    renderPeople();
  });

  $(document).on("click", ".assign-filter-opt", function () {
    $(".assign-filter-opt").removeClass("active");
    $(this).addClass("active");
    state.filter = $(this).data("filter");
    renderPeople();
  });

  $(document).on("click", ".assign-current-veh", async function () {
    let v = {};
    try { v = await post("getCurrentVehicle"); } catch (e) { v = {}; }
    if (typeof v === "string") { try { v = JSON.parse(v); } catch (e) { v = {}; } }
    if (!v || !v.model) { flash(this, "Kein Fahrzeug gefunden"); return; }
    $("#assign-vehicle").val(v.model);
    $("#assign-plate").val(v.plate || "");
    flash(this, '<span class="fas fa-check"></span> Übernommen');
  });

  $(document).on("click", ".assign-save", function () {
    const unit = $("#assign-unit").val().trim();
    if (!unit) {
      $("#assign-unit").closest(".assign-input").addClass("invalid");
      setTimeout(() => $(".assign-input.invalid").removeClass("invalid"), 1200);
      return;
    }
    post("saveAssignment", {
      id: state.edit.id,
      unit: unit,
      vehicle: $("#assign-vehicle").val().trim(),
      plate: $("#assign-plate").val().trim(),
      status: state.edit.status,
      note: $("#assign-note").val().trim(),
      members: state.edit.members,
    });
    $(".assign-editing").text(`Du bearbeitest ${unit}`);
    flash(this, '<span class="fas fa-check"></span>');
  });

  $(document).on("click", ".assign-delete", function () {
    if (!state.edit.id) { resetEditor(); return; }
    const id = state.edit.id;
    confirmClick($(this), "Wirklich löschen?", () => { post("deleteAssignment", { id: id }); resetEditor(); });
  });

  $(document).on("click", ".assign-clear", function () {
    confirmClick($(this), "Wirklich alles zurücksetzen?", () => { post("clearAssignments"); resetEditor(); });
  });

  window.addEventListener("message", (event) => {
    const d = event.data || {};
    if (d.type === "assignments") {
      state.assignments = d.data || [];
      if (d.units) state.units = d.units;
      if (state.edit.id && !state.assignments.some((a) => a.id === state.edit.id)) resetEditor();
      render();
    } else if (d.type === "assignmentSaved") {
      state.edit.id = Number(d.id) || state.edit.id;
      $(".assign-card").removeClass("selected").filter(`[data-id="${state.edit.id}"]`).addClass("selected");
    } else if (d.type === "show" && d.enable && currentTab === ".penalcode-page-container") {
      setTimeout(load, 300);
    }
  });

  resetEditor();
})();
