// ---- Start der Vorschau + Umschalter zwischen allen Behörden ----
(function () {
  if (jQuery.trumbowyg) jQuery.trumbowyg.svgPath = false;
  var M = window.__mock;
  var allJobs = M.JOBS.map(function (j) { return j.key; }).filter(function (j) { return !M.isService(M.kind(j)); });
  M.calls.forEach(function (c) { if (!c.job) c.job = allJobs.slice(); });

  function jobFromHash() {
    var h = (location.hash || "").replace("#", "");
    var hit = M.JOBS.filter(function (j) { return j.hash === h; })[0];
    return hit ? hit.key : "police";
  }

  var callsDrawn = false;
  function openAs(job) {
    // Seiten, die eine andere Behörde nicht hat, sauber zurücksetzen
    $(".close-all").hide();
    $(".manage-profile-licenses-container, .manage-profile-vehs-container, .manage-profile-houses-container").addClass("display_hidden");
    $("#home-warrants-container").css("height", "");
    $(".nav-item").removeClass("active-nav");
    $('.nav-item[data-page=".dashboard-page-container"]').addClass("active-nav");
    currentTab = ".dashboard-page-container";

    __send({ type: "show", enable: true, job: job, rosterLink: "about:blank", sopLink: "about:blank" });
    var k = M.kind(job), service = M.isService(k);
    __send({ type: "data", name: "Testperson", location: "Mission Row, Los Santos", fullname: "Testperson",
             bulletin: service ? M.bulletinService[k] : M.bulletin, activeUnits: M.visibleUnits(k), citizenid: "PD01", ondutyonly: false });
    __send({ type: "reports", data: M.reports[k] || M.reports.police });
    __send({ type: "warrants", data: service ? [] : M.warrants });
    __send({ type: "dispatchmessages", data: M.messagesFor(k) });
    if (service) {
      // Wie auf dem Server: nur Aufträge für den eigenen Job
      var mine = M.calls.filter(function (c) { return c.job.indexOf(job) >= 0; });
      mine.forEach(function (c) { __send({ type: "call", data: c }); });
      __send({ type: "calls", data: mine });
    } else if (!callsDrawn) {
      M.calls.forEach(function (c) { __send({ type: "call", data: c }); });
      callsDrawn = true;
    } else {
      __send({ type: "calls", data: M.calls });
    }
  }

  // Umschalter (nur Vorschau)
  var box = document.createElement("div");
  box.style.cssText = "position:fixed;left:2.6%;bottom:3.5%;z-index:100000;background:rgba(0,0,0,.72);color:#fff;" +
    "font:12px Montserrat,sans-serif;padding:8px 10px;border-radius:8px;box-shadow:0 4px 14px rgba(0,0,0,.5);width:20vh;min-width:170px";
  var opts = M.JOBS.map(function (j) { return '<option value="' + j.key + '">' + j.label + "</option>"; }).join("");
  box.innerHTML = '<div style="opacity:.8;margin-bottom:4px">Vorschau – Behörde</div>' +
    '<select id="preview-job" style="width:100%;padding:4px;border-radius:4px;border:0;font:12px Montserrat,sans-serif">' + opts + "</select>" +
    '<div style="opacity:.6;margin-top:5px;line-height:1.35">Testdaten. Die Einteilung unter „Besetzung“ lässt sich ausprobieren, sonst wird nichts gespeichert.</div>';
  document.body.appendChild(box);

  var sel = document.getElementById("preview-job");
  var start = jobFromHash();
  sel.value = start;
  sel.addEventListener("change", function () {
    var hit = M.JOBS.filter(function (j) { return j.key === sel.value; })[0];
    try { history.replaceState(null, "", "#" + hit.hash); } catch (e) { location.hash = hit.hash; }
    openAs(sel.value);
  });
  window.addEventListener("hashchange", function () { var j = jobFromHash(); sel.value = j; openAs(j); });

  openAs(start);
})();
