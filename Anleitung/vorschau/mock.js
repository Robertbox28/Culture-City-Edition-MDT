// ---- Vorschau-Ersatz für FiveM-NUI (nur für die Live-Vorschau, nicht für den Server) ----
window.GetParentResourceName = function () { return "ps-mdt"; };
(function () {
  var now = Date.now(), min = 60000, day = 24 * 60 * min;

  var JOBS = [
    { key: "police", hash: "lspd", label: "LSPD – Los Santos Police" },
    { key: "bcso", hash: "bcso", label: "BCSO – Blaine County Sheriff" },
    { key: "lssd", hash: "lssd", label: "LSSD – Los Santos Sheriff" },
    { key: "sasp", hash: "sasp", label: "SASP – State Police" },
    { key: "sast", hash: "sast", label: "SAST – State Troopers" },
    { key: "sapr", hash: "sapr", label: "SAPR – Park Rangers" },
    { key: "doc", hash: "doc", label: "DOC – Strafvollzug" },
    { key: "ambulance", hash: "ems", label: "EMS – Pillbox Medical" },
    { key: "firefighter", hash: "lsfd", label: "LSFD – Fire Department" },
    { key: "judge", hash: "doj", label: "DOJ – Justiz (Richter)" },
    { key: "government", hash: "regierung", label: "Regierung" },
    { key: "taxi", hash: "taxi", label: "Taxi Los Santos" },
    { key: "mechanic", hash: "mechaniker", label: "East Customs (Mechaniker)" },
    { key: "lawyer", hash: "anwalt", label: "DOJ – Anwalt" }
  ];

  function kind(job) {
    if (job === "ambulance") return "ems";
    if (job === "firefighter") return "fire";
    if (job === "judge" || job === "lawyer") return "doj";
    if (job === "government" || job === "mayor") return "gov";
    if (job === "taxi") return "taxi";
    if (job === "mechanic" || job === "bennys") return "mechanic";
    return "police";
  }

  var people = [
    { citizenid: "KJH221", firstname: "Karl", lastname: "Huber", dob: "1990-04-12", phone: "555-0182", job: "Mechaniker", grade: "Angestellter", warrant: true, convictions: 6,
      licences: { driver: true, weapon: false, business: false, pilot: false }, fingerprint: "FP-88213" },
    { citizenid: "ROT551", firstname: "Leon", lastname: "Roth", dob: "1985-09-30", phone: "555-0144", job: "Vanilla Unicorn", grade: "Geschäftsführer", warrant: false, convictions: 1,
      licences: { driver: true, weapon: true, business: true, pilot: false }, fingerprint: "FP-11902" },
    { citizenid: "MEY903", firstname: "Nina", lastname: "Meyer", dob: "1998-01-05", phone: "555-0119", job: "Arbeitslos", grade: "-", warrant: false, convictions: 0,
      licences: { driver: false, weapon: false, business: false, pilot: false }, fingerprint: "" }
  ];

  window.__mock = {
    penal: {"titles": ["§ 1 ALLGEMEIN (StVO)", "§ 2 NORMALER STRASSENVERKEHR (StVO)", "§ 3 GESCHWINDIGKEIT INNERORTS UND AUF BUNDESSTRASSEN (StVO)", "§ 4 AUTOBAHN UND HIGHWAY (StVO)", "§ 1 WIRTSCHAFTSKRIMINALITÄT (StGB)", "§ 2 WAFFENGESETZ (StGB)", "§ 3 BETÄUBUNGSMITTELGESETZ (BTMG)", "§ 4 ALLGEMEINES (StGB)", "§ 5 TIERSCHUTZGESETZ (TierSchG)", "§ 6 LUFTVERKEHRSGESETZ (LuftVG)", "§ 7 UMWELTSCHUTZGESETZ (UmweltSG)"], "penalcode": [[{"title": "Missbrauch von Sonder- und Wegerechten", "class": "Ordnungswidrigkeit", "id": "StVO §1 Abs. 1", "months": 0, "fine": 2000, "color": "green", "description": "Missbrauch von Sonder- und Wegerechten"}, {"title": "Fahren ohne Führerschein", "class": "Ordnungswidrigkeit", "id": "StVO §1 Abs. 2", "months": 0, "fine": 500, "color": "green", "description": "Fahren ohne Führerschein"}, {"title": "Falschparken", "class": "Ordnungswidrigkeit", "id": "StVO §1 Abs. 3", "months": 0, "fine": 500, "color": "green", "description": "Falschparken"}, {"title": "Fahren abseits der Strasse", "class": "Ordnungswidrigkeit", "id": "StVO §1 Abs. 4", "months": 0, "fine": 300, "color": "green", "description": "Fahren abseits der Strasse"}, {"title": "Fahren ohne Zulassung", "class": "Ordnungswidrigkeit", "id": "StVO §1 Abs. 5", "months": 0, "fine": 100, "color": "green", "description": "Fahren ohne Zulassung"}, {"title": "Fahren ohne Licht bei Nacht", "class": "Ordnungswidrigkeit", "id": "StVO §1 Abs. 6", "months": 0, "fine": 100, "color": "green", "description": "Fahren ohne Licht bei Nacht"}, {"title": "Defekte Scheinwerfer oder Rückleuchten", "class": "Ordnungswidrigkeit", "id": "StVO §1 Abs. 7", "months": 0, "fine": 250, "color": "green", "description": "Defekte Scheinwerfer oder Rückleuchten"}, {"title": "Fahren unter Betäubungsmitteln", "class": "Ordnungswidrigkeit", "id": "StVO §1 Abs. 8", "months": 0, "fine": 650, "color": "green", "description": "Fahren unter Betäubungsmitteln"}, {"title": "Fahren unter Alkohol", "class": "Ordnungswidrigkeit", "id": "StVO §1 Abs. 9", "months": 0, "fine": 500, "color": "green", "description": "Fahren unter Alkohol"}], [{"title": "Gezieltes Rammen von Fahrzeugen", "class": "Vergehen", "id": "StVO §2 Abs. 1", "months": 10, "fine": 1500, "color": "orange", "description": "Gezieltes Rammen von Fahrzeugen"}, {"title": "Teilnahme an illegalen Strassenrennen", "class": "Vergehen", "id": "StVO §2 Abs. 2", "months": 5, "fine": 7500, "color": "orange", "description": "Teilnahme an illegalen Strassenrennen"}, {"title": "Stoppschild überfahren", "class": "Ordnungswidrigkeit", "id": "StVO §2 Abs. 3", "months": 0, "fine": 500, "color": "green", "description": "Stoppschild überfahren"}, {"title": "Missachtung von Rechtsvortritt (rechts vor links)", "class": "Ordnungswidrigkeit", "id": "StVO §2 Abs. 4", "months": 0, "fine": 100, "color": "green", "description": "rechts vor links"}, {"title": "Strassenschilder beschädigen oder umfahren", "class": "Ordnungswidrigkeit", "id": "StVO §2 Abs. 5", "months": 0, "fine": 500, "color": "green", "description": "Strassenschilder beschädigen oder umfahren"}, {"title": "Durchbrechen einer Polizeisperre (Sperrzone)", "class": "Vergehen", "id": "StVO §2 Abs. 6", "months": 25, "fine": 2500, "color": "orange", "description": "Sperrzone"}, {"title": "Unachtsames Fahren", "class": "Ordnungswidrigkeit", "id": "StVO §2 Abs. 7", "months": 0, "fine": 350, "color": "green", "description": "Zusatz: 10 Sozialstunden"}, {"title": "Rote Ampel überfahren", "class": "Ordnungswidrigkeit", "id": "StVO §2 Abs. 8", "months": 0, "fine": 500, "color": "green", "description": "Rote Ampel überfahren"}, {"title": "Gefährdung des Strassenverkehrs", "class": "Vergehen", "id": "StVO §2 Abs. 9", "months": 10, "fine": 1500, "color": "orange", "description": "Gefährdung des Strassenverkehrs"}], [{"title": "Geschwindigkeitsüberschreitung (1 bis 25 km/h)", "class": "Ordnungswidrigkeit", "id": "StVO §3 Abs. 1", "months": 0, "fine": 250, "color": "green", "description": "1 bis 25 km/h"}, {"title": "Geschwindigkeitsüberschreitung (25 bis 50 km/h)", "class": "Ordnungswidrigkeit", "id": "StVO §3 Abs. 2", "months": 0, "fine": 500, "color": "green", "description": "25 bis 50 km/h"}, {"title": "Geschwindigkeitsüberschreitung (50 bis 100 km/h)", "class": "Ordnungswidrigkeit", "id": "StVO §3 Abs. 3", "months": 0, "fine": 750, "color": "green", "description": "50 bis 100 km/h"}, {"title": "Geschwindigkeitsüberschreitung (100 bis 150 km/h)", "class": "Ordnungswidrigkeit", "id": "StVO §3 Abs. 4", "months": 0, "fine": 1000, "color": "green", "description": "100 bis 150 km/h · Zusatz: Führerscheinentzug"}, {"title": "Geschwindigkeitsüberschreitung (150 bis 200 km/h)", "class": "Ordnungswidrigkeit", "id": "StVO §3 Abs. 5", "months": 0, "fine": 1500, "color": "green", "description": "150 bis 200 km/h · Zusatz: Führerscheinentzug"}, {"title": "Geschwindigkeitsüberschreitung (über 200 km/h)", "class": "Ordnungswidrigkeit", "id": "StVO §3 Abs. 6", "months": 0, "fine": 2000, "color": "green", "description": "über 200 km/h · Zusatz: Führerscheinentzug"}], [{"title": "Wenden oder Rückwärtsfahren", "class": "Ordnungswidrigkeit", "id": "StVO §4 Abs. 1", "months": 0, "fine": 1250, "color": "green", "description": "Wenden oder Rückwärtsfahren"}, {"title": "Fahren auf der Gegenfahrbahn", "class": "Ordnungswidrigkeit", "id": "StVO §4 Abs. 2", "months": 0, "fine": 300, "color": "green", "description": "Fahren auf der Gegenfahrbahn"}, {"title": "Halten und Parken", "class": "Ordnungswidrigkeit", "id": "StVO §4 Abs. 3", "months": 0, "fine": 800, "color": "green", "description": "Halten und Parken"}, {"title": "Fahren auf dem Seitenstreifen", "class": "Ordnungswidrigkeit", "id": "StVO §4 Abs. 4", "months": 0, "fine": 500, "color": "green", "description": "Fahren auf dem Seitenstreifen"}, {"title": "Zu Fuss auf der Autobahn", "class": "Ordnungswidrigkeit", "id": "StVO §4 Abs. 5", "months": 0, "fine": 150, "color": "green", "description": "Zusatz: 30 Sozialstunden"}, {"title": "Mit dem Fahrrad auf der Autobahn", "class": "Ordnungswidrigkeit", "id": "StVO §4 Abs. 6", "months": 0, "fine": 150, "color": "green", "description": "Zusatz: 30 Sozialstunden"}, {"title": "Offroad-Fahren ohne geeignetes Fahrzeug", "class": "Ordnungswidrigkeit", "id": "StVO §4 Abs. 7", "months": 0, "fine": 1000, "color": "green", "description": "Offroad-Fahren ohne geeignetes Fahrzeug"}, {"title": "Befahren von Fuss- oder Wanderwegen (mit einem Fahrzeug)", "class": "Ordnungswidrigkeit", "id": "StVO §4 Abs. 8", "months": 0, "fine": 2500, "color": "green", "description": "mit einem Fahrzeug"}], [{"title": "Diebstahl", "class": "Vergehen", "id": "StGB §1 Abs. 1", "months": 10, "fine": 1000, "color": "orange", "description": "Diebstahl"}, {"title": "Einbruchdiebstahl", "class": "Vergehen", "id": "StGB §1 Abs. 2", "months": 15, "fine": 1500, "color": "orange", "description": "Einbruchdiebstahl"}, {"title": "Versuchter Diebstahl", "class": "Vergehen", "id": "StGB §1 Abs. 3", "months": 5, "fine": 500, "color": "orange", "description": "Versuchter Diebstahl"}, {"title": "Fahrzeugdiebstahl", "class": "Vergehen", "id": "StGB §1 Abs. 4", "months": 20, "fine": 1750, "color": "orange", "description": "Fahrzeugdiebstahl"}, {"title": "Raub", "class": "Vergehen", "id": "StGB §1 Abs. 5", "months": 20, "fine": 2000, "color": "orange", "description": "Raub"}, {"title": "Schwerer Raub", "class": "Verbrechen", "id": "StGB §1 Abs. 6", "months": 40, "fine": 4000, "color": "red", "description": "Schwerer Raub"}, {"title": "Korruption oder Bestechung", "class": "Verbrechen", "id": "StGB §1 Abs. 7", "months": 60, "fine": 80000, "color": "red", "description": "Korruption oder Bestechung"}, {"title": "Keine Business-Lizenz", "class": "Vergehen", "id": "StGB §1 Abs. 8", "months": 20, "fine": 25000, "color": "orange", "description": "Keine Business-Lizenz"}, {"title": "Keine ordnungsgemässe Buchhaltung", "class": "Vergehen", "id": "StGB §1 Abs. 9", "months": 10, "fine": 15000, "color": "orange", "description": "Keine ordnungsgemässe Buchhaltung"}, {"title": "Hausfriedensbruch", "class": "Ordnungswidrigkeit", "id": "StGB §1 Abs. 10", "months": 0, "fine": 500, "color": "green", "description": "Hausfriedensbruch"}, {"title": "Verletzung der Business-Lizenz (1. Verstoss)", "class": "Verbrechen", "id": "StGB §1 Abs. 11", "months": 45, "fine": 50000, "color": "red", "description": "1. Verstoss · Zusatz: Lizenz weg, 1 Woche Sperre als Unternehmensleitung"}, {"title": "Verletzung der Business-Lizenz (2. Verstoss)", "class": "Verbrechen", "id": "StGB §1 Abs. 12", "months": 90, "fine": 100000, "color": "red", "description": "2. Verstoss · Zusatz: Lizenz weg, 2 Wochen Sperre als Unternehmensleitung"}, {"title": "Verletzung der Business-Lizenz (3. Verstoss)", "class": "Verbrechen", "id": "StGB §1 Abs. 13", "months": 135, "fine": 150000, "color": "red", "description": "3. Verstoss · Zusatz: Lizenz weg, 3 Wochen Sperre als Unternehmensleitung"}, {"title": "Verletzung der Business-Lizenz (4. Verstoss)", "class": "Verbrechen", "id": "StGB §1 Abs. 14", "months": 270, "fine": 350000, "color": "red", "description": "4. Verstoss · Zusatz: Lizenz weg, 4 Wochen Sperre als Unternehmensleitung"}, {"title": "Betrug, leicht (bis 100'000 $)", "class": "Vergehen", "id": "StGB §1 Abs. 15", "months": 20, "fine": 100000, "color": "orange", "description": "bis 100'000 $"}, {"title": "Betrug, mittel (bis 500'000 $)", "class": "Verbrechen", "id": "StGB §1 Abs. 16", "months": 35, "fine": 500000, "color": "red", "description": "bis 500'000 $"}, {"title": "Betrug, schwer (ab 1'000'000 $)", "class": "Verbrechen", "id": "StGB §1 Abs. 17", "months": 50, "fine": 1000000, "color": "red", "description": "ab 1'000'000 $"}, {"title": "Illegale Einreise", "class": "Verbrechen", "id": "StGB §1 Abs. 18", "months": 60, "fine": 25000, "color": "red", "description": "Illegale Einreise"}, {"title": "Hehlerei (Kauf oder Verkauf gestohlener Ware)", "class": "Vergehen", "id": "StGB §1 Abs. 19", "months": 15, "fine": 2000, "color": "orange", "description": "Kauf oder Verkauf gestohlener Ware"}, {"title": "Steuerhinterziehung", "class": "Vergehen", "id": "StGB §1 Abs. 20", "months": 10, "fine": 15000, "color": "orange", "description": "Steuerhinterziehung"}, {"title": "Urkundenfälschung", "class": "Vergehen", "id": "StGB §1 Abs. 21", "months": 20, "fine": 5000, "color": "orange", "description": "Urkundenfälschung"}, {"title": "Cyberkriminalität", "class": "Verbrechen", "id": "StGB §1 Abs. 22", "months": 30, "fine": 10000, "color": "red", "description": "Cyberkriminalität"}], [{"title": "Waffenhandel", "class": "Verbrechen", "id": "StGB §2 Abs. 1", "months": 60, "fine": 25000, "color": "red", "description": "Waffenhandel"}, {"title": "Waffengebrauch", "class": "Verbrechen", "id": "StGB §2 Abs. 2", "months": 45, "fine": 16000, "color": "red", "description": "Waffengebrauch"}, {"title": "Illegaler Waffenbesitz", "class": "Verbrechen", "id": "StGB §2 Abs. 3", "months": 30, "fine": 10000, "color": "red", "description": "Illegaler Waffenbesitz"}, {"title": "Missbrauch von Handfeuerwaffen", "class": "Verbrechen", "id": "StGB §2 Abs. 4", "months": 35, "fine": 9500, "color": "red", "description": "Missbrauch von Handfeuerwaffen"}, {"title": "Waffe tragen ohne Waffenschein", "class": "Vergehen", "id": "StGB §2 Abs. 5", "months": 15, "fine": 5000, "color": "orange", "description": "Waffe tragen ohne Waffenschein"}, {"title": "Waffe offen in der Stadt tragen", "class": "Vergehen", "id": "StGB §2 Abs. 6", "months": 10, "fine": 2500, "color": "orange", "description": "Waffe offen in der Stadt tragen"}, {"title": "Schuss in der Öffentlichkeit", "class": "Vergehen", "id": "StGB §2 Abs. 7", "months": 25, "fine": 8000, "color": "orange", "description": "Schuss in der Öffentlichkeit"}], [{"title": "Drogenbesitz (leicht)", "class": "Vergehen", "id": "BTMG §3 Abs. 1", "months": 5, "fine": 50, "color": "orange", "description": "leicht"}, {"title": "Drogenbesitz (mittel)", "class": "Vergehen", "id": "BTMG §3 Abs. 2", "months": 15, "fine": 3000, "color": "orange", "description": "mittel"}, {"title": "Drogenbesitz (schwer)", "class": "Verbrechen", "id": "BTMG §3 Abs. 3", "months": 30, "fine": 5000, "color": "red", "description": "schwer"}, {"title": "Drogenhandel (leicht)", "class": "Vergehen", "id": "BTMG §3 Abs. 4", "months": 10, "fine": 1000, "color": "orange", "description": "leicht"}, {"title": "Drogenhandel (mittel)", "class": "Verbrechen", "id": "BTMG §3 Abs. 5", "months": 30, "fine": 3000, "color": "red", "description": "mittel"}, {"title": "Drogenhandel (schwer)", "class": "Verbrechen", "id": "BTMG §3 Abs. 6", "months": 60, "fine": 8000, "color": "red", "description": "schwer"}, {"title": "Weitergabe oder Verkauf von BTM mit ärztlichem Attest", "class": "Verbrechen", "id": "BTMG §3 Abs. 7", "months": 35, "fine": 7500, "color": "red", "description": "Weitergabe oder Verkauf von BTM mit ärztlichem Attest"}, {"title": "BTM-Nutzung ohne mitgeführtes oder mit abgelaufenem Attest", "class": "Vergehen", "id": "BTMG §3 Abs. 8", "months": 15, "fine": 2500, "color": "orange", "description": "BTM-Nutzung ohne mitgeführtes oder mit abgelaufenem Attest"}, {"title": "Drogenherstellung", "class": "Verbrechen", "id": "BTMG §3 Abs. 9", "months": 60, "fine": 10000, "color": "red", "description": "Drogenherstellung"}, {"title": "Drogenkonsum in der Öffentlichkeit", "class": "Vergehen", "id": "BTMG §3 Abs. 10", "months": 5, "fine": 500, "color": "orange", "description": "Drogenkonsum in der Öffentlichkeit"}], [{"title": "Körperverletzung", "class": "Vergehen", "id": "StGB §4 Abs. 1", "months": 10, "fine": 500, "color": "orange", "description": "Körperverletzung"}, {"title": "Gefährliche Körperverletzung", "class": "Vergehen", "id": "StGB §4 Abs. 2", "months": 25, "fine": 1250, "color": "orange", "description": "Gefährliche Körperverletzung"}, {"title": "Mord", "class": "Verbrechen", "id": "StGB §4 Abs. 3", "months": 90, "fine": 10000, "color": "red", "description": "Mord"}, {"title": "Missbrauch von Notrufen", "class": "Ordnungswidrigkeit", "id": "StGB §4 Abs. 4", "months": 0, "fine": 800, "color": "green", "description": "Missbrauch von Notrufen"}, {"title": "Amtsanmassung", "class": "Ordnungswidrigkeit", "id": "StGB §4 Abs. 5", "months": 0, "fine": 12500, "color": "green", "description": "Amtsanmassung"}, {"title": "Betreten einer Sperrzone", "class": "Ordnungswidrigkeit", "id": "StGB §4 Abs. 6", "months": 0, "fine": 2500, "color": "green", "description": "Betreten einer Sperrzone"}, {"title": "Kein Ausweis", "class": "Verbrechen", "id": "StGB §4 Abs. 7", "months": 45, "fine": 1000, "color": "red", "description": "Kein Ausweis"}, {"title": "Widerstand gegen die Staatsgewalt", "class": "Vergehen", "id": "StGB §4 Abs. 8", "months": 15, "fine": 2500, "color": "orange", "description": "Widerstand gegen die Staatsgewalt"}, {"title": "Tätlicher Angriff gegen die Staatsgewalt", "class": "Verbrechen", "id": "StGB §4 Abs. 9", "months": 30, "fine": 5000, "color": "red", "description": "Tätlicher Angriff gegen die Staatsgewalt"}, {"title": "Geiselnahme", "class": "Vergehen", "id": "StGB §4 Abs. 10", "months": 15, "fine": 1500, "color": "orange", "description": "Geiselnahme"}, {"title": "Freiheitsberaubung", "class": "Vergehen", "id": "StGB §4 Abs. 11", "months": 5, "fine": 1000, "color": "orange", "description": "Freiheitsberaubung"}, {"title": "Unterlassene Hilfeleistung", "class": "Vergehen", "id": "StGB §4 Abs. 12", "months": 15, "fine": 1500, "color": "orange", "description": "Unterlassene Hilfeleistung"}, {"title": "Versuchter Mord", "class": "Verbrechen", "id": "StGB §4 Abs. 13", "months": 60, "fine": 8000, "color": "red", "description": "Versuchter Mord"}, {"title": "Sexueller Übergriff oder Nötigung", "class": "Verbrechen", "id": "StGB §4 Abs. 14", "months": 95, "fine": 11500, "color": "red", "description": "Sexueller Übergriff oder Nötigung"}, {"title": "Erregung öffentlichen Ärgernisses", "class": "Verbrechen", "id": "StGB §4 Abs. 15", "months": 80, "fine": 10500, "color": "red", "description": "Erregung öffentlichen Ärgernisses"}, {"title": "Beleidigung", "class": "Vergehen", "id": "StGB §4 Abs. 16", "months": 15, "fine": 2500, "color": "orange", "description": "Beleidigung"}, {"title": "Fahrerflucht", "class": "Verbrechen", "id": "StGB §4 Abs. 17", "months": 40, "fine": 9000, "color": "red", "description": "Fahrerflucht"}, {"title": "Sachbeschädigung", "class": "Ordnungswidrigkeit", "id": "StGB §4 Abs. 18", "months": 0, "fine": 3500, "color": "green", "description": "Sachbeschädigung"}, {"title": "Falschaussage", "class": "Vergehen", "id": "StGB §4 Abs. 19", "months": 10, "fine": 5500, "color": "orange", "description": "Falschaussage"}, {"title": "Selbstjustiz", "class": "Ordnungswidrigkeit", "id": "StGB §4 Abs. 20", "months": 0, "fine": 14500, "color": "green", "description": "Zusatz: Einweisung"}, {"title": "Mittäterschaft", "class": "Ordnungswidrigkeit", "id": "StGB §4 Abs. 21", "months": 0, "fine": 3500, "color": "green", "description": "Mittäterschaft"}, {"title": "Verstoss gegen das Vermummungsverbot", "class": "Ordnungswidrigkeit", "id": "StGB §4 Abs. 22", "months": 0, "fine": 17000, "color": "green", "description": "Verstoss gegen das Vermummungsverbot"}, {"title": "Anstiftung zu einer Straftat", "class": "Verbrechen", "id": "StGB §4 Abs. 23", "months": 35, "fine": 10250, "color": "red", "description": "Anstiftung zu einer Straftat"}, {"title": "Verleugnung", "class": "Vergehen", "id": "StGB §4 Abs. 24", "months": 15, "fine": 8250, "color": "orange", "description": "Verleugnung"}, {"title": "Gaffen", "class": "Vergehen", "id": "StGB §4 Abs. 25", "months": 16, "fine": 6500, "color": "orange", "description": "Ordnungswidrigkeit"}, {"title": "Behinderung der Einsatzkräfte", "class": "Vergehen", "id": "StGB §4 Abs. 26", "months": 25, "fine": 5000, "color": "orange", "description": "Behinderung der Einsatzkräfte"}, {"title": "Fahrlässige Brandstiftung", "class": "Verbrechen", "id": "StGB §4 Abs. 27", "months": 50, "fine": 9500, "color": "red", "description": "Fahrlässige Brandstiftung"}, {"title": "Androhung einer Straftat gegen die Staatsgewalt", "class": "Verbrechen", "id": "StGB §4 Abs. 28", "months": 45, "fine": 8500, "color": "red", "description": "Androhung einer Straftat gegen die Staatsgewalt"}, {"title": "Androhung einer Straftat", "class": "Verbrechen", "id": "StGB §4 Abs. 29", "months": 30, "fine": 6500, "color": "red", "description": "Androhung einer Straftat"}, {"title": "Totschlag", "class": "Verbrechen", "id": "StGB §4 Abs. 30", "months": 75, "fine": 9000, "color": "red", "description": "Totschlag"}, {"title": "Entführung", "class": "Verbrechen", "id": "StGB §4 Abs. 31", "months": 40, "fine": 5000, "color": "red", "description": "Entführung"}, {"title": "Flucht vor der Polizei", "class": "Vergehen", "id": "StGB §4 Abs. 32", "months": 20, "fine": 3000, "color": "orange", "description": "Flucht vor der Polizei"}, {"title": "Behinderung der Justiz", "class": "Vergehen", "id": "StGB §4 Abs. 33", "months": 20, "fine": 4000, "color": "orange", "description": "Behinderung der Justiz"}, {"title": "Mitgliedschaft in einer kriminellen Vereinigung", "class": "Verbrechen", "id": "StGB §4 Abs. 34", "months": 60, "fine": 20000, "color": "red", "description": "Mitgliedschaft in einer kriminellen Vereinigung"}, {"title": "Ruhestörung", "class": "Ordnungswidrigkeit", "id": "StGB §4 Abs. 35", "months": 0, "fine": 500, "color": "green", "description": "Ruhestörung"}], [{"title": "Wilderei, exotische Tiere", "class": "Vergehen", "id": "TierSchG §5 Abs. 1", "months": 20, "fine": 10000, "color": "orange", "description": "Wilderei, exotische Tiere"}, {"title": "Töten exotischer Tiere", "class": "Vergehen", "id": "TierSchG §5 Abs. 2", "months": 25, "fine": 13000, "color": "orange", "description": "Töten exotischer Tiere"}, {"title": "Besitz exotischer Tiere", "class": "Verbrechen", "id": "TierSchG §5 Abs. 3", "months": 30, "fine": 15000, "color": "red", "description": "Besitz exotischer Tiere"}, {"title": "Hehlerei mit exotischen Tieren", "class": "Verbrechen", "id": "TierSchG §5 Abs. 4", "months": 40, "fine": 20000, "color": "red", "description": "Hehlerei mit exotischen Tieren"}, {"title": "Tierquälerei", "class": "Vergehen", "id": "TierSchG §5 Abs. 5", "months": 25, "fine": 2000, "color": "orange", "description": "Tierquälerei"}, {"title": "Nicht artgerechte Haltung", "class": "Verbrechen", "id": "TierSchG §5 Abs. 6", "months": 35, "fine": 3000, "color": "red", "description": "Nicht artgerechte Haltung"}, {"title": "Verstoss gegen ein Tierhalteverbot", "class": "Verbrechen", "id": "TierSchG §5 Abs. 7", "months": 45, "fine": 4000, "color": "red", "description": "Verstoss gegen ein Tierhalteverbot"}], [{"title": "Landen ausserhalb ausgewiesener Landeplätze", "class": "Ordnungswidrigkeit", "id": "LuftVG §6 Abs. 1", "months": 0, "fine": 15000, "color": "green", "description": "Landen ausserhalb ausgewiesener Landeplätze"}, {"title": "Überfliegen von Sperrzonen", "class": "Verbrechen", "id": "LuftVG §6 Abs. 2", "months": 50, "fine": 5000, "color": "red", "description": "Überfliegen von Sperrzonen"}, {"title": "Unachtsames Fliegen", "class": "Verbrechen", "id": "LuftVG §6 Abs. 3", "months": 50, "fine": 25000, "color": "red", "description": "Unachtsames Fliegen"}, {"title": "Führen eines Fluggeräts ohne Lizenz", "class": "Ordnungswidrigkeit", "id": "LuftVG §6 Abs. 4", "months": 0, "fine": 1000, "color": "green", "description": "Führen eines Fluggeräts ohne Lizenz"}, {"title": "Fliegen bei Nacht ohne Licht (defekte Beleuchtung)", "class": "Ordnungswidrigkeit", "id": "LuftVG §6 Abs. 5", "months": 0, "fine": 1500, "color": "green", "description": "defekte Beleuchtung"}, {"title": "Unterschreiten der Mindestflughöhe (100 Meter)", "class": "Ordnungswidrigkeit", "id": "LuftVG §6 Abs. 6", "months": 0, "fine": 1000, "color": "green", "description": "100 Meter"}, {"title": "Fliegen unter Alkohol", "class": "Verbrechen", "id": "LuftVG §6 Abs. 7", "months": 60, "fine": 1500, "color": "red", "description": "Fliegen unter Alkohol"}, {"title": "Fliegen unter Betäubungsmitteln", "class": "Verbrechen", "id": "LuftVG §6 Abs. 8", "months": 60, "fine": 1650, "color": "red", "description": "Fliegen unter Betäubungsmitteln"}], [{"title": "Bodenverunreinigung (mittel)", "class": "Verbrechen", "id": "UmweltSG §7 Abs. 1", "months": 30, "fine": 5000, "color": "red", "description": "mittel"}, {"title": "Bodenverunreinigung (schwer)", "class": "Verbrechen", "id": "UmweltSG §7 Abs. 2", "months": 55, "fine": 11000, "color": "red", "description": "schwer"}, {"title": "Gewässerverunreinigung (mittel)", "class": "Verbrechen", "id": "UmweltSG §7 Abs. 3", "months": 40, "fine": 7000, "color": "red", "description": "mittel"}, {"title": "Gewässerverunreinigung (schwer)", "class": "Verbrechen", "id": "UmweltSG §7 Abs. 4", "months": 75, "fine": 13000, "color": "red", "description": "schwer"}, {"title": "Luftverunreinigung (mittel)", "class": "Verbrechen", "id": "UmweltSG §7 Abs. 5", "months": 50, "fine": 9000, "color": "red", "description": "mittel"}, {"title": "Luftverunreinigung (schwer)", "class": "Verbrechen", "id": "UmweltSG §7 Abs. 6", "months": 95, "fine": 15000, "color": "red", "description": "schwer"}, {"title": "Littering (Abfall in der Öffentlichkeit entsorgen)", "class": "Ordnungswidrigkeit", "id": "UmweltSG §7 Abs. 7", "months": 0, "fine": 500, "color": "green", "description": "Abfall in der Öffentlichkeit entsorgen"}]]},
    JOBS: JOBS,
    kind: kind,
    bulletin: [
      { id: 3, title: "Übung Samstag", desc: "Samstag 18:00 gemeinsame Übung aller Blaulichtorganisationen am Hafen.", author: "Leitung", time: now - 50 * min },
      { id: 4, title: "Neue Funkrufnamen", desc: "Ab Montag gelten die neuen Rufnamen. Liste in den Dienstanweisungen.", author: "Leitstelle", time: now - 3 * 60 * min }
    ],
    bulletinService: {
      taxi: [{ id: 21, title: "Neue Tarife ab Montag", desc: "Grundpreis 25 $, danach 3 $ pro 100 m. Flughafen-Pauschale 120 $.", author: "Taxi-Leitung", time: now - 2 * 60 * min }],
      mechanic: [{ id: 31, title: "Lieferung Ersatzteile", desc: "Bremsbeläge und Reifen kommen Donnerstag. Bis dahin sparsam einsetzen.", author: "Werkstattleitung", time: now - 90 * min }]
    },
    units: {
      a: { cid: "PD01", duty: 1, unitType: "police", callSign: "114", firstName: "Tim", lastName: "Fischer", radio: "1" },
      b: { cid: "SO01", duty: 1, unitType: "bcso", callSign: "402", firstName: "Eva", lastName: "Wolf", radio: "4" },
      c: { cid: "SP01", duty: 0, unitType: "sasp", callSign: "221", firstName: "Jan", lastName: "Baumann", radio: "2" },
      d: { cid: "EMS01", duty: 1, unitType: "ambulance", callSign: "302", firstName: "Sara", lastName: "Graf", radio: "3" },
      e: { cid: "LSF01", duty: 1, unitType: "firefighter", callSign: "701", firstName: "Lena", lastName: "Keller", radio: "3" },
      f: { cid: "LSF02", duty: 1, unitType: "firefighter", callSign: "712", firstName: "Marco", lastName: "Brunner", radio: "3" },
      g: { cid: "DOJ01", duty: 1, unitType: "judge", callSign: "900", firstName: "Anna", lastName: "Steiner", radio: "0" },
      h: { cid: "PD02", duty: 1, unitType: "police", callSign: "115", firstName: "Max", lastName: "Weber", radio: "1" },
      i: { cid: "PD03", duty: 1, unitType: "police", callSign: "118", firstName: "Lara", lastName: "Kunz", radio: "1" },
      j: { cid: "PD04", duty: 1, unitType: "police", callSign: "121", firstName: "Noah", lastName: "Frei", radio: "1" },
      k: { cid: "SO02", duty: 1, unitType: "bcso", callSign: "405", firstName: "Mia", lastName: "Arnold", radio: "4" },
      l: { cid: "EMS02", duty: 1, unitType: "ambulance", callSign: "305", firstName: "Luca", lastName: "Moser", radio: "3" },
      m: { cid: "EMS03", duty: 0, unitType: "ambulance", callSign: "311", firstName: "Elena", lastName: "Suter", radio: "0" },
      n: { cid: "LSF03", duty: 1, unitType: "firefighter", callSign: "725", firstName: "Jonas", lastName: "Meier", radio: "3" },
      o: { cid: "LSF04", duty: 1, unitType: "firefighter", callSign: "730", firstName: "Sofia", lastName: "Gerber", radio: "3" },
      p: { cid: "GOV01", duty: 1, unitType: "government", callSign: "G1", firstName: "Helena", lastName: "Brandt", radio: "9" },
      q: { cid: "GOV02", duty: 1, unitType: "government", callSign: "G4", firstName: "David", lastName: "Kälin", radio: "9" },
      r: { cid: "GOV03", duty: 0, unitType: "mayor", callSign: "M1", firstName: "Viktor", lastName: "Hess", radio: "9" },
      s: { cid: "TX01", duty: 1, unitType: "taxi", callSign: "T07", firstName: "Mila", lastName: "Hofer", radio: "0" },
      t: { cid: "TX02", duty: 1, unitType: "taxi", callSign: "T12", firstName: "Ben", lastName: "Kaufmann", radio: "0" },
      u: { cid: "TX03", duty: 0, unitType: "taxi", callSign: "T03", firstName: "Aylin", lastName: "Demir", radio: "0" },
      v: { cid: "ME01", duty: 1, unitType: "mechanic", callSign: "W1", firstName: "Rico", lastName: "Bianchi", radio: "0" },
      w: { cid: "ME02", duty: 1, unitType: "mechanic", callSign: "W4", firstName: "Jana", lastName: "Lüthi", radio: "0" },
      x: { cid: "ME03", duty: 1, unitType: "bennys", callSign: "B2", firstName: "Benny", lastName: "Weller", radio: "0" }
    },
    calls: [
      { callId: 4021, dispatchCode: "10-70", priority: 1, dispatchMessage: "Gebäudebrand – Rauch aus Dachstuhl", firstStreet: "Grove Street", time: now - 4 * min, units: [1, 2], origin: { x: 85, y: -1940 }, information: "Personen vermutlich im Gebäude" },
      { callId: 4022, dispatchCode: "10-50", priority: 2, dispatchMessage: "Verkehrsunfall – Person eingeklemmt", firstStreet: "Senora Freeway", time: now - 2 * min, units: [], origin: { x: 2010, y: 2860 } },
      { callId: 4023, dispatchCode: "10-71", priority: 1, dispatchMessage: "Schüsse gefallen", firstStreet: "Strawberry Ave", time: now - 6 * min, units: [3], origin: { x: 240, y: -1290 }, weapon: "Pistole", gender: 1, automaticGunfire: false },
      { callId: 4030, dispatchCode: "TAXI", priority: 3, dispatchMessage: "Taxi bestellt", firstStreet: "Vespucci Blvd, Legion Square", time: now - 3 * min, units: [], origin: { x: 195, y: -935 }, name: "Leon Roth", number: "555-0144", information: "Zwei Personen zum Flughafen, mit Gepäck.", job: ["TAXI", "taxi"] },
      { callId: 4031, dispatchCode: "TAXI", priority: 3, dispatchMessage: "Taxi bestellt", firstStreet: "Del Perro Pier", time: now - 1 * min, units: [{ cid: "TX02", fullname: "Ben Kaufmann", job: "Taxi", department: "taxi", callsign: "T12" }], origin: { x: -1640, y: -1030 }, name: "Nina Meyer", number: "555-0119", information: "Bitte ein Taxi an meinen Standort.", job: ["TAXI", "taxi"] },
      { callId: 4032, dispatchCode: "MECH", priority: 3, dispatchMessage: "Mechaniker angefordert", firstStreet: "Route 68, Harmony", time: now - 4 * min, units: [], origin: { x: 1180, y: 2690 }, name: "Karl Huber", number: "555-0182", information: "Reifen geplatzt, Ersatzrad fehlt.", job: ["MECH", "mechanic", "bennys"] },
      { callId: 4024, dispatchCode: "911", priority: 3, dispatchMessage: "Notruf – Rauchmelder ausgelöst", firstStreet: "Alhambra Dr", time: now - 1 * min, units: [], origin: { x: 1862, y: 3700 }, name: "Anrufer", number: "555-0182" },
      { callId: 4025, dispatchCode: "10-60", priority: 2, dispatchMessage: "Verdächtiges Fahrzeug", firstStreet: "Paleto Blvd", time: now - 8 * min, units: [], origin: { x: -420, y: 6050 }, model: "Sultan", plate: "8ABC123", firstColor: "Schwarz", heading: "Nord" }
    ],
    reports: {
      police: [
        { id: 210, title: "Raub Fleeca Legion Square", type: "Ermittlung", author: "Tim Fischer", time: now - 3 * 60 * min,
          details: "<p><strong>Sachverhalt:</strong> Zwei Täter, maskiert, Flucht Richtung Vespucci.</p>", tags: ["Raub"], officersinvolved: ["(114) Tim Fischer"], civsinvolved: ["Karl Huber"], gallery: [] },
        { id: 209, title: "Verkehrskontrolle Route 68", type: "Verkehr", author: "Eva Wolf", time: now - day,
          details: "<p>Fahrer ohne Führerschein angetroffen.</p>", tags: ["Verkehr"], officersinvolved: ["(402) Eva Wolf"], civsinvolved: ["Nina Meyer"], gallery: [] }
      ],
      taxi: [
        { id: 501, title: "Schichtbericht Mila Hofer – Spätschicht", type: "Schichtbericht", author: "Mila Hofer", time: now - 5 * 60 * min,
          details: "<p><strong>Schicht:</strong> 16:00 – 23:30, Taxi 07</p><p><strong>Fahrten:</strong> 14 – <strong>Einnahmen:</strong> 1'840 $ (davon 260 $ Trinkgeld)</p><p><strong>Vorkommnisse:</strong> Ein Zechpreller am Pier, der Polizei gemeldet.</p>", tags: ["Zechpreller"], officersinvolved: ["(T07) Mila Hofer"], civsinvolved: [], gallery: [] },
        { id: 500, title: "Schichtbericht Ben Kaufmann – Frühschicht", type: "Schichtbericht", author: "Ben Kaufmann", time: now - day,
          details: "<p><strong>Fahrten:</strong> 9 – <strong>Einnahmen:</strong> 1'120 $</p><p><strong>Vorkommnisse:</strong> keine</p>", tags: [], officersinvolved: ["(T12) Ben Kaufmann"], civsinvolved: [], gallery: [] }
      ],
      mechanic: [
        { id: 611, title: "Rechnung 2026-118 – Sultan RS", type: "Rechnung", author: "Rico Bianchi", time: now - 3 * 60 * min,
          details: "<p><strong>Kunde:</strong> Leon Roth – 555-0144</p><p><strong>Positionen:</strong> Motorreparatur 850 $, Bremsen vorne 320 $</p><p><strong>Total:</strong> 1'170 $ – bezahlt mit Karte</p><p><strong>Zum Auftrag:</strong> 73</p>", tags: ["Bezahlt"], officersinvolved: ["(W1) Rico Bianchi"], civsinvolved: [], gallery: [] }
      ],
      ems: [
        { id: 77, title: "Sturz vom Gerüst – Mirror Park", type: "Notfalleinsatz", author: "Sara Graf", time: now - 2 * 60 * min,
          details: "<p><strong>Verletzungen:</strong> Fraktur Unterarm, Prellungen.</p>", tags: ["Trauma"], officersinvolved: ["Sara Graf"], civsinvolved: ["Nina Meyer"], gallery: [] }
      ],
      gov: [
        { id: 301, title: "Regierungssitzung November", type: "Sitzungsprotokoll", author: "Helena Brandt", time: now - 5 * 60 * min,
          details: "<p><strong>Traktanden:</strong></p><p><em>1. Budget Rettungsdienste</em></p><p><em>2. Neue Lizenzvergabe Gastronomie</em></p><p><strong>Beschlüsse:</strong> Budget LSFD +15 % (3 Ja / 0 Nein)</p>",
          tags: ["Sitzung"], officersinvolved: ["Helena Brandt", "David Kälin"], civsinvolved: [], gallery: [] },
        { id: 300, title: "Erlass: Vermummungsverbot an Kundgebungen", type: "Erlass", author: "Viktor Hess", time: now - 2 * day,
          details: "<p><strong>Inkrafttreten:</strong> sofort</p><p><strong>Betroffene Stellen:</strong> LSPD, DOJ</p>", tags: ["Erlass"], officersinvolved: ["Viktor Hess"], civsinvolved: [], gallery: [] }
      ],
      fire: [
        { id: 118, title: "Gebäudebrand Grove Street", type: "Brandeinsatz", author: "Lena Keller", time: now - 2 * 60 * min,
          details: "<p><strong>🚒 Einsatznummer:</strong> 4021</p><p><strong>Einsatzart:</strong> Brand – Alarmstufe B2</p><p><em>· Menschenrettung über Drehleiter, Innenangriff mit 2 Trupps</em></p>",
          tags: ["B2", "Menschenrettung"], officersinvolved: ["Lena Keller", "Marco Brunner"], civsinvolved: ["Karl Huber"], gallery: [] },
        { id: 117, title: "VU mit eingeklemmter Person – Route 68", type: "Technische Hilfe", author: "Marco Brunner", time: now - day,
          details: "<p><strong>Einsatzart:</strong> Technische Hilfe – TH2</p>", tags: ["TH2"], officersinvolved: ["Marco Brunner"], civsinvolved: [], gallery: [] }
      ]
    },
    bolos: {
      police: [
        { id: 31, title: "Schwarzer Sultan nach Raub", plate: "8ABC123", owner: "Karl Huber", individual: "Karl Huber", author: "Tim Fischer", time: now - 5 * 60 * min,
          detail: "<p>Fahrzeug nach Raub geflüchtet. Vorsicht, Insassen bewaffnet.</p>", tags: ["Raub"], gallery: [], officersinvolved: ["(114) Tim Fischer"] }
      ],
      ems: [
        { id: 12, title: "ICU – Zimmer 3", plate: "ca. 2 Tage", owner: "Leon Roth (555-0144)", individual: "Nina Meyer (MEY903)", author: "Sara Graf", time: now - 6 * 60 * min,
          detail: "<p><strong>Verletzungen:</strong> Fraktur Unterarm, Beobachtung über Nacht.</p>", tags: ["Stabil"], gallery: [], officersinvolved: ["Sara Graf"] }
      ],
      taxi: [
        { id: 88, title: "Flughafen → Vinewood Hills", plate: "Taxi 07 / 12TXI007", owner: "Leon Roth (555-0144)", individual: "LSIA Terminal 1 → North Rockford Dr", author: "Mila Hofer", time: now - 40 * min,
          detail: "<p><strong>Fahrpreis:</strong> 145 $ – <strong>Trinkgeld:</strong> 20 $</p><p><strong>Bezahlt mit:</strong> Karte</p><p><strong>Status:</strong> bezahlt</p>", tags: ["Bezahlt", "Stammkunde"], gallery: [], officersinvolved: ["(T07) Mila Hofer"] },
        { id: 87, title: "Pier → Davis", plate: "Taxi 07 / 12TXI007", owner: "unbekannt", individual: "Del Perro Pier → Grove Street", author: "Mila Hofer", time: now - 3 * 60 * min,
          detail: "<p><strong>Fahrpreis:</strong> 60 $</p><p><strong>Status:</strong> offen – Fahrgast ohne Bezahlung geflüchtet, Polizei informiert</p>", tags: ["Offen", "Zechpreller"], gallery: [], officersinvolved: ["(T07) Mila Hofer"] },
        { id: 86, title: "Vorbestellung Pillbox → Sandy Shores", plate: "Taxi 12 / 12TXI012", owner: "Nina Meyer (555-0119)", individual: "Pillbox Hill Medical → Sandy Shores", author: "Ben Kaufmann", time: now - 5 * 60 * min,
          detail: "<p><strong>Abholung:</strong> 21:30</p><p><strong>Status:</strong> bestellt</p>", tags: ["Vorbestellung"], gallery: [], officersinvolved: ["(T12) Ben Kaufmann"] }
      ],
      mechanic: [
        { id: 73, title: "Sultan RS – Motor und Bremsen", plate: "46EEK572 / Sultan RS", owner: "Leon Roth (555-0144)", individual: "Rico Bianchi", author: "Rico Bianchi", time: now - 5 * 60 * min,
          detail: "<p><strong>Auftrag:</strong> Reparatur</p><p><strong>Arbeiten:</strong> Motor instand gesetzt, Bremsbeläge vorne ersetzt</p><p><strong>Kosten:</strong> 1'170 $</p><p><strong>Status:</strong> abgeholt und bezahlt</p>", tags: ["Reparatur", "Bezahlt"], gallery: [], officersinvolved: ["(W1) Rico Bianchi"] },
        { id: 74, title: "Pannenhilfe Route 68 – Reifen", plate: "88KLM204 / Bison", owner: "Nina Meyer (555-0119)", individual: "Jana Lüthi", author: "Jana Lüthi", time: now - 60 * min,
          detail: "<p><strong>Ort:</strong> Route 68, Postal 3021</p><p><strong>Arbeiten:</strong> Reifen gewechselt</p><p><strong>Status:</strong> fertig – Rechnung offen</p>", tags: ["Pannenhilfe", "Offen"], gallery: [], officersinvolved: ["(W4) Jana Lüthi"] },
        { id: 75, title: "Kuruma – Tuning Stufe 2", plate: "21RTX990 / Kuruma", owner: "Werkstatt-Kunde (555-0170)", individual: "Benny Weller", author: "Benny Weller", time: now - 20 * min,
          detail: "<p><strong>Auftrag:</strong> Tuning – Motor, Getriebe, Turbo</p><p><strong>Status:</strong> in Arbeit</p>", tags: ["Tuning"], gallery: [], officersinvolved: ["(B2) Benny Weller"] }
      ],
      gov: [
        { id: 41, title: "Benny's Original Motor Works", plate: "BL-0421 / Werkstatt", owner: "Benny Weller (KJH221)", individual: "Benny Weller", author: "David Kälin", time: now - 4 * day,
          detail: "<p><strong>Status:</strong> aktiv – gültig bis 31.12.2026</p><p><strong>Auflagen:</strong> Notausgang freihalten (Brandschau LSFD)</p><p><strong>Verstösse:</strong> 0</p>", tags: ["Aktiv"], gallery: [], officersinvolved: ["David Kälin"] },
        { id: 42, title: "Vanilla Unicorn", plate: "BL-0388 / Gastronomie", owner: "Vanilla Unicorn LLC", individual: "Leon Roth (ROT551)", author: "Helena Brandt", time: now - 9 * day,
          detail: "<p><strong>Status:</strong> aktiv</p><p><strong>Verstösse:</strong> 1. Verstoss (StGB §1 Abs. 11) – Sperre abgelaufen</p>", tags: ["Aktiv", "1. Verstoss"], gallery: [], officersinvolved: ["Helena Brandt"] }
      ],
      fire: [
        { id: 21, title: "Brandschau Benny's Garage", plate: "Strawberry Ave / Postal 8122", owner: "Benny Weller", individual: "Benny Weller (CID KJH221)", author: "Lena Keller", time: now - 3 * day,
          detail: "<p><strong>Ergebnis:</strong> Nachkontrolle</p><p><em>· Notausgang mit Reifen verstellt</em></p>", tags: ["Nachkontrolle"], gallery: [], officersinvolved: ["Lena Keller"] },
        { id: 22, title: "Brandschau Vanilla Unicorn", plate: "Strawberry / Postal 9058", owner: "Vanilla Unicorn LLC", individual: "Leon Roth", author: "Marco Brunner", time: now - day,
          detail: "<p><strong>Ergebnis:</strong> bestanden</p>", tags: ["Bestanden"], gallery: [], officersinvolved: ["Marco Brunner"] }
      ]
    },
    incidents: [
      { id: 55, title: "Karl Huber - Raub - 13.11.2026", author: "Tim Fischer", time: now - 3 * 60 * min,
        details: "<p><strong>📝 Zusammenfassung:</strong> Raub auf Fleeca-Filiale.</p>", tags: ["Raub"], officersinvolved: ["(114) Tim Fischer"], civsinvolved: [], evidence: [] }
    ],
    warrants: [{ cid: "KJH221", name: "Karl Huber", linkedincident: 55 }],
    vehicles: [
      { id: 1, dbid: 1, plate: "8ABC123", model: "Sultan", owner: "Karl Huber", color: "black", colorName: "Schwarz", state: "Out", bolo: true, code: false, stolen: false, image: "img/not-found.webp" },
      { id: 2, dbid: 2, plate: "46LRT892", model: "Bison", owner: "Leon Roth", color: "white", colorName: "Weiss", state: "Impounded", bolo: false, code: false, stolen: false, image: "img/not-found.webp" }
    ],
    weapons: [
      { id: 7, serial: "PX-55821", image: "img/not-found.webp", weapModel: "Pistole", weapClass: "1", owner: "Leon Roth", information: "Registriert bei Ammu-Nation." }
    ],
    logs: {
      police: [
        { text: "Tim Fischer hat einen neuen Eintrag angelegt: Schwarzer Sultan nach Raub (ID 31)", time: now - 5 * 60 * min },
        { text: "Eva Wolf hat einen neuen Bericht angelegt: Verkehrskontrolle Route 68 (ID 209)", time: now - day }
      ],
      ems: [{ text: "Sara Graf hat einen neuen Bericht angelegt: Sturz vom Gerüst – Mirror Park (ID 77)", time: now - 2 * 60 * min }],
      fire: [{ text: "Lena Keller hat einen neuen Bericht angelegt: Gebäudebrand Grove Street (ID 118)", time: now - 2 * 60 * min }],
      gov: [{ text: "David Kälin hat einen Eintrag bearbeitet: Benny's Original Motor Works (ID 41)", time: now - 4 * day }],
      doj: [{ text: "Anna Steiner hat einen neuen Bericht angelegt: Urteil Huber (ID 212)", time: now - 3 * 60 * min }],
      taxi: [
        { text: "Mila Hofer hat einen neuen Eintrag angelegt: Flughafen → Vinewood Hills (ID 88)", time: now - 40 * min },
        { text: "Einteilung \"Taxi 07\" wurde von Mila Hofer gespeichert.", time: now - 7 * min },
        { text: "Ben Kaufmann hat einen neuen Bericht angelegt: Schichtbericht Ben Kaufmann – Frühschicht (ID 500)", time: now - day }
      ],
      mechanic: [
        { text: "Benny Weller hat einen neuen Eintrag angelegt: Kuruma – Tuning Stufe 2 (ID 75)", time: now - 20 * min },
        { text: "Rico Bianchi hat einen neuen Bericht angelegt: Rechnung 2026-118 – Sultan RS (ID 611)", time: now - 3 * 60 * min }
      ]
    },
    people: people,
    messages: [
      { name: "(114) Tim Fischer", job: "lspd", profilepic: "img/male.png", message: "Strasse am Legion Square gesperrt.", time: now - 3 * min },
      { name: "(701) Lena Keller", job: "fire", profilepic: "img/male.png", message: "Engine 7-1 an Einsatzstelle Grove Street.", time: now - 2 * min },
      { name: "(302) Sara Graf", job: "ambulance", profilepic: "img/male.png", message: "RTW übernimmt Patient, Fahrt nach Pillbox.", time: now - 1 * min },
      { name: "(G1) Helena Brandt", job: "gov", profilepic: "img/male.png", message: "Sitzung um 20 Uhr im Rathaus, Personenschutz bitte bereit.", time: now - 30000 },
      { name: "(T07) Mila Hofer", job: "taxi", channel: "taxi", profilepic: "img/female.png", message: "Taxi 07 frei am Flughafen, übernehme die nächste Fahrt.", time: now - 4 * min },
      { name: "(T12) Ben Kaufmann", job: "taxi", channel: "taxi", profilepic: "img/male.png", message: "Vorbestellung 21:30 Pillbox → Sandy übernehme ich.", time: now - 2 * min },
      { name: "(W4) Jana Lüthi", job: "mechanic", channel: "mechanic", profilepic: "img/female.png", message: "Pannenhilfe Route 68 erledigt, komme zurück in die Werkstatt.", time: now - 3 * min },
      { name: "(B2) Benny Weller", job: "bennys", channel: "mechanic", profilepic: "img/male.png", message: "Kuruma ist auf der Bühne, brauche später Hilfe beim Getriebe.", time: now - 1 * min }
    ]
  };

  var t = Math.floor(now / 1000);
  window.__mock.assign = {
    police: [
      { id: 1, unit: "Adam-12", vehicle: "Streifenwagen", plate: "LSPD 012", status: "busy", note: "Raub Fleeca, Verfolgung Richtung Vespucci",
        members: [{ cid: "PD01", name: "Tim Fischer", callsign: "114" }, { cid: "PD02", name: "Max Weber", callsign: "115" }], updated_by: "Tim Fischer", updated_at: t - 600 },
      { id: 2, unit: "Lincoln-4", vehicle: "Interceptor", plate: "LSPD 044", status: "available", note: "",
        members: [{ cid: "PD03", name: "Lara Kunz", callsign: "118" }], updated_by: "Lara Kunz", updated_at: t - 1800 },
      { id: 3, unit: "Sheriff-2", vehicle: "SUV", plate: "BCSO 402", status: "pause", note: "Bereich Sandy Shores",
        members: [{ cid: "SO01", name: "Eva Wolf", callsign: "402" }], updated_by: "Eva Wolf", updated_at: t - 3600 }
    ],
    ems: [
      { id: 11, unit: "Medic-1", vehicle: "Rettungswagen (RTW)", plate: "EMS 301", status: "busy", note: "Transport nach Pillbox",
        members: [{ cid: "EMS01", name: "Sara Graf", callsign: "302" }], updated_by: "Sara Graf", updated_at: t - 400 }
    ],
    fire: [
      { id: 21, unit: "Engine 7-1", vehicle: "Löschfahrzeug (Engine)", plate: "LSFD 71", status: "busy", note: "Gebäudebrand Grove Street",
        members: [{ cid: "LSF01", name: "Lena Keller", callsign: "701" }, { cid: "LSF02", name: "Marco Brunner", callsign: "712" }], updated_by: "Lena Keller", updated_at: t - 300 },
      { id: 22, unit: "Ladder 7-2", vehicle: "Drehleiter (Ladder)", plate: "LSFD 72", status: "available", note: "",
        members: [{ cid: "LSF03", name: "Jonas Meier", callsign: "725" }], updated_by: "Jonas Meier", updated_at: t - 2000 }
    ],
    doj: [],
    taxi: [
      { id: 61, unit: "Taxi 07", vehicle: "Taxi", plate: "12TXI007", status: "busy", note: "Fahrt LSIA → Vinewood Hills",
        members: [{ cid: "TX01", name: "Mila Hofer", callsign: "T07" }], updated_by: "Mila Hofer", updated_at: t - 400 },
      { id: 62, unit: "Taxi 12", vehicle: "Taxi-Van", plate: "12TXI012", status: "available", note: "Standplatz Legion Square",
        members: [{ cid: "TX02", name: "Ben Kaufmann", callsign: "T12" }], updated_by: "Ben Kaufmann", updated_at: t - 1200 }
    ],
    mechanic: [
      { id: 71, unit: "Abschlepp 1", vehicle: "Flatbed", plate: "WS 001", status: "busy", note: "Pannenhilfe Route 68",
        members: [{ cid: "ME02", name: "Jana Lüthi", callsign: "W4" }], updated_by: "Jana Lüthi", updated_at: t - 800 },
      { id: 72, unit: "Werkstatt", vehicle: "Werkstattwagen", plate: "WS 004", status: "available", note: "Hebebühne 2 frei",
        members: [{ cid: "ME01", name: "Rico Bianchi", callsign: "W1" }, { cid: "ME03", name: "Benny Weller", callsign: "B2" }], updated_by: "Rico Bianchi", updated_at: t - 300 }
    ],
    gov: [
      { id: 51, unit: "Personenschutz 1", vehicle: "Gepanzerter SUV", plate: "GOV 001", status: "busy", note: "Begleitung Bürgermeister, Rathaus → Pillbox",
        members: [{ cid: "GOV02", name: "David Kälin", callsign: "G4" }], updated_by: "David Kälin", updated_at: t - 900 }
    ]
  };
  var nextAssignId = 100;
  var VEHICLES = {
    police: ["Streifenwagen", "Interceptor", "SUV", "Motorrad", "Zivilfahrzeug", "Transporter", "Helikopter"],
    ems: ["Rettungswagen (RTW)", "Notarzteinsatzfahrzeug (NEF)", "Rettungshelikopter"],
    fire: ["Löschfahrzeug (Engine)", "Drehleiter (Ladder)", "Rüstwagen", "Tanklöschfahrzeug", "Kommandowagen"],
    doj: ["Dienstwagen"],
    gov: ["Dienstlimousine", "Gepanzerter SUV", "Begleitfahrzeug", "Regierungshelikopter"],
    taxi: ["Taxi", "Taxi-Van", "Limousine", "Shuttlebus"],
    mechanic: ["Abschleppwagen", "Flatbed", "Pannenhilfe-Van", "Werkstattwagen"]
  };
  // Wie auf dem Server: Taxi und Mechaniker sehen nur sich selbst, keine Akten und Einsätze
  function isService(k) { return k === "taxi" || k === "mechanic"; }
  function channelOf(k) { return isService(k) ? k : "emergency"; }
  window.__mock.isService = isService;
  window.__mock.visibleUnits = function (k) {
    var M = window.__mock, out = {};
    Object.keys(M.units).forEach(function (key) {
      var uk = kind(M.units[key].unitType);
      if (isService(k) ? uk === k : !isService(uk)) out[key] = M.units[key];
    });
    return out;
  };
  window.__mock.messagesFor = function (k) {
    return window.__mock.messages.filter(function (m) { return (m.channel || "emergency") === channelOf(k); });
  };
  function unitsFor(k) {
    var M = window.__mock;
    return Object.keys(M.units).map(function (key) { return M.units[key]; })
      .filter(function (u) { return kind(u.unitType) === k; })
      .map(function (u) { return { cid: u.cid, name: u.firstName + " " + u.lastName, callsign: u.callSign, job: u.unitType, grade: "", duty: !!u.duty }; });
  }

  function send(msg) { setTimeout(function () { window.postMessage(msg, "*"); }, 30); }
  window.__send = send;

  function profileData(p) {
    return {
      cid: p.citizenid, firstname: p.firstname, lastname: p.lastname, dob: p.dob, phone: p.phone, job: p.job, grade: p.grade,
      apartment: "Alta Street 12", profilepic: "img/male.png", mdtinfo: "Testprofil für die Vorschau.", warrant: p.warrant,
      licences: p.licences, vehicles: window.__mock.vehicles.filter(function (v) { return v.owner === p.firstname + " " + p.lastname; }),
      tags: p.warrant ? ["Gewaltbereit"] : [], gallery: [], convictions: p.convictions ? ["Raub", "Fahren ohne Ausweis"] : [],
      incidents: p.warrant ? [{ id: 55, title: "Raub Fleeca", time: Date.now() - 3 * 3600000 }] : [], properties: [], fingerprint: p.fingerprint, isLimited: false
    };
  }

  var realPost = jQuery.post;
  jQuery.post = function (url, data) {
    if (typeof url === "string" && url.indexOf("https://ps-mdt/") === 0) {
      var ep = url.split("/").pop(), body = {};
      try { body = JSON.parse(data || "{}"); } catch (e) {}
      var M = window.__mock, k = kind(window.playerJob || "police");
      var reports = M.reports[k] || M.reports.police, bolos = M.bolos[k === "doj" ? "gov" : k] || M.bolos.police;
      var result = true;
      function find(list, id) { return list.filter(function (x) { return x.id == id; })[0]; }
      if (ep === "getAllDashboardData") { send({ type: "reports", data: reports }); send({ type: "warrants", data: isService(k) ? [] : M.warrants }); }
      else if (ep === "getAllReports") send({ type: "reports", data: reports });
      else if (ep === "getAllBolos") send({ type: "bolos", data: bolos });
      else if (ep === "getBoloData") { var b = find(bolos, body.id); if (b) send({ type: "boloData", data: b }); }
      else if (ep === "getReportData") { var r = find(reports, body.id); if (r) send({ type: "reportData", data: r }); }
      else if (ep === "getAllIncidents") send({ type: "incidents", data: M.incidents });
      else if (ep === "getIncidentData") {
        var i = find(M.incidents, body.id);
        if (i) send({ type: "incidentData", data: i, convictions: [{ cid: "KJH221", name: "Karl Huber", warrant: 1, guilty: 0, processed: 0, associated: 0,
          fine: 0, sentence: 0, recfine: 2000, recsentence: 20, charges: ["Raub"] }] });
      }
      else if (ep === "getPenalCode") send({ type: "getPenalCode", titles: M.penal.titles, penalcode: M.penal.penalcode });
      else if (ep === "getAllLogs") {
        var sorted = (M.logs[k] || []).slice().sort(function (x, y) { return y.time - x.time; });
        send({ type: "getAllLogs", data: sorted });
        // Dienstzeiten der eigenen Behörde (wie mdt:requestOfficerData)
        var staff = Object.keys(M.units).map(function (key) { return M.units[key]; }).filter(function (u) { return kind(u.unitType) === k; });
        send({ action: "updateOfficerData", data: staff.map(function (u, i) { return { name: u.firstName + " " + u.lastName, callsign: u.cid, totalTime: (14 - i * 3) + " Std. " + (10 + i * 7) + " Min." }; }) });
      }
      else if (ep === "refreshDispatchMsgs") send({ type: "dispatchmessages", data: M.messagesFor(k) });
      else if (ep === "searchProfiles") {
        var q = String(body.name || "").toLowerCase();
        result = M.people.filter(function (p) { return (p.firstname + " " + p.lastname + " " + p.citizenid).toLowerCase().indexOf(q) >= 0; })
          .map(function (p) {
            // Wie auf dem Server: Taxi und Mechaniker bekommen keine Akten
            if (isService(k)) return { citizenid: p.citizenid, charinfo: { firstname: p.firstname, lastname: p.lastname }, metadata: { licences: {} }, warrant: false, convictions: 0, pp: "img/male.png", fingerprint: "" };
            return { citizenid: p.citizenid, charinfo: { firstname: p.firstname, lastname: p.lastname }, metadata: { licences: p.licences }, warrant: p.warrant, convictions: p.convictions, pp: "img/male.png", fingerprint: p.fingerprint };
          });
      }
      else if (ep === "getProfileData") {
        var p = M.people.filter(function (x) { return x.citizenid == body.id; })[0];
        if (p) {
          result = profileData(p);
          if (isService(k)) {
            var notes = { taxi: "Stammkunde, fährt oft zum Flughafen. Zahlt meist mit Karte.", mechanic: "Kunde seit 2025. Wünscht vor grösseren Arbeiten einen Anruf." };
            result = { cid: result.cid, firstname: result.firstname, lastname: result.lastname, phone: result.phone, job: result.job, grade: result.grade,
              profilepic: result.profilepic, mdtinfo: notes[k], tags: k === "taxi" ? ["Stammkunde"] : ["Kunde"], gallery: [], licences: {}, convictions: [], incidents: [],
              properties: [], vehicles: k === "mechanic" ? result.vehicles : [], isLimited: k !== "mechanic" };
          }
        }
      }
      else if (ep === "searchVehicles") {
        var v = String(body.name || "").toLowerCase();
        result = M.vehicles.filter(function (x) { return (x.plate + " " + x.model + " " + x.owner).toLowerCase().indexOf(v) >= 0; });
      }
      else if (ep === "getVehicleData") {
        var veh = M.vehicles.filter(function (x) { return x.plate == body.plate; })[0];
        if (veh) send({ type: "getVehicleData", data: { dbid: veh.dbid, plate: veh.plate, name: veh.owner, class: "Sport", model: veh.model, image: veh.image, points: 3,
          information: "", color: veh.color, colorName: veh.colorName, impound: veh.state === "Impounded", bolo: veh.bolo, code: veh.code, stolen: veh.stolen } });
      }
      else if (ep === "searchWeapons") result = M.weapons;
      else if (ep === "getAssignments") {
        result = { assignments: JSON.parse(JSON.stringify(M.assign[k] || [])), units: unitsFor(k), canEdit: true, vehicles: VEHICLES[k] || [], maxMembers: 6 };
      }
      else if (ep === "saveAssignment") {
        var list = M.assign[k] = M.assign[k] || [];
        var row = list.filter(function (x) { return x.id == body.id; })[0];
        if (!row) { row = { id: nextAssignId++ }; list.push(row); }
        var cids = {};
        (body.members || []).forEach(function (m) { cids[m.cid] = true; });
        list.forEach(function (o) { if (o !== row) o.members = (o.members || []).filter(function (m) { return !cids[m.cid]; }); });
        row.unit = body.unit; row.vehicle = body.vehicle; row.plate = String(body.plate || "").toUpperCase(); row.status = body.status;
        row.note = body.note; row.members = body.members || []; row.updated_by = "Testperson"; row.updated_at = Math.floor(Date.now() / 1000);
        send({ type: "assignmentSaved", id: row.id });
        send({ type: "assignments", data: JSON.parse(JSON.stringify(list)), units: unitsFor(k) });
      }
      else if (ep === "deleteAssignment") {
        M.assign[k] = (M.assign[k] || []).filter(function (x) { return x.id != body.id; });
        send({ type: "assignments", data: JSON.parse(JSON.stringify(M.assign[k])), units: unitsFor(k) });
      }
      else if (ep === "clearAssignments") {
        M.assign[k] = [];
        send({ type: "assignments", data: [], units: unitsFor(k) });
      }
      else if (ep === "getCurrentVehicle") {
        result = { police: { model: "Streifenwagen", plate: "LSPD 077" }, ems: { model: "Rettungswagen (RTW)", plate: "EMS 305" },
                   fire: { model: "Rüstwagen", plate: "LSFD 75" }, doj: { model: "Dienstwagen", plate: "DOJ 1" },
                   gov: { model: "Dienstlimousine", plate: "GOV 002" }, taxi: { model: "Taxi", plate: "12TXI007" },
                   mechanic: { model: "Abschleppwagen", plate: "WS 002" } }[k] || {};
      }
      else if (ep === "getWeaponData") { var w = M.weapons.filter(function (x) { return x.serial == body.serial; })[0]; if (w) send({ type: "getWeaponData", data: w }); }
      return jQuery.Deferred().resolve(result).promise();
    }
    return realPost.apply(this, arguments);
  };
})();
