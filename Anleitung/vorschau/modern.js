// =====================================================================
//  ps-mdt  |  Modernes Design – Icons in der Navigation
// =====================================================================
(function () {
  const BY_PAGE = {
    ".dashboard-page-container": "fa-gauge-high",
    ".profile-page-container": "fa-id-card",
    ".incidents-page-container": "fa-folder-open",
    ".reports-page-container": "fa-file-lines",
    ".map-page-container": "fa-map-location-dot",
    ".penalcode-page-container": "fa-people-group",
    ".sop-page-container": "fa-book",
    ".dmv-page-container": "fa-car",
    ".weapons-page-container": "fa-gun",
    ".cams-page-container": "fa-video",
    ".stafflogs-page-container": "fa-clipboard-list",
  };
  // Ladebildschirm hat keine data-page Attribute
  const BY_TEXT = {
    "Übersicht": "fa-gauge-high", "Profile": "fa-id-card", "Vorfälle": "fa-folder-open", "Berichte": "fa-file-lines",
    "Karte": "fa-map-location-dot", "Besetzung": "fa-people-group", "Dienstanweisungen": "fa-book",
    "Zulassungsstelle": "fa-car", "Waffen": "fa-gun", "Kameras": "fa-video", "Personalprotokolle": "fa-clipboard-list",
  };

  function boloIcon() {
    if (typeof IsTaxiUI === "function" && IsTaxiUI()) return "fa-route";
    if (typeof IsMechanicUI === "function" && IsMechanicUI()) return "fa-screwdriver-wrench";
    if (typeof IsGovRegistryUI === "function" && IsGovRegistryUI()) return "fa-store";
    if (typeof IsFireUI === "function" && IsFireUI()) return "fa-fire-extinguisher";
    if (typeof IsMedicalUI === "function" && IsMedicalUI()) return "fa-bed-pulse";
    return "fa-triangle-exclamation";
  }

  function decorate() {
    $(".nav-item").each(function () {
      const $el = $(this);
      let icon = $el.hasClass("bolo-nav-item") ? boloIcon() : BY_PAGE[$el.data("page")] || BY_TEXT[$el.text().trim()];
      if ($el.data("page") === ".reports-page-container" && typeof IsMechanicUI === "function" && IsMechanicUI()) icon = "fa-file-invoice-dollar";
      if (!icon) return;
      const $existing = $el.children(".nav-icon");
      if ($existing.length && $existing.data("icon") === icon) return;
      $existing.remove();
      $el.prepend(`<i class="fa-solid ${icon} nav-icon" data-icon="${icon}"></i>`);
    });
  }

  // Credit unten in der Navigation
  function credit() {
    $(".nav-menu").each(function () {
      if (!$(this).children(".nav-credit").length) {
        $(this).append('<div class="nav-credit">Erstellt von Robertbox28</div>');
      }
    });
  }
  $(credit);

  // Nach jedem Öffnen neu setzen (die Job-Einstellung überschreibt den BOLO-Text)
  window.addEventListener("message", (event) => {
    if (event.data && event.data.type === "show") setTimeout(decorate, 0);
  });
  $(decorate);
})();
