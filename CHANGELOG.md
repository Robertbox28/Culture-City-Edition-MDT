# Changelog – MDT und Leitstelle für Culture City

Erstellt von [Robertbox28](https://robertbox28.ch/).
Grundlage: ps-mdt 2.5 und ps-dispatch von Project Sloth.

---

## Version 1.1 – 17.11.2026

### Neue Oberflächen

- **Taxi** (`Config.TaxiJobs`: `taxi`): eigenes MDT in Schwarz und Taxigelb mit eigenem Logo.
  - **Fahrtenbuch** mit Taxi, Fahrgast, Strecke, Preis und Status.
  - **Schichtberichte** mit Fahrten, Einnahmen und Vorkommnissen.
  - Eigener **Taxifunk**, Besetzung mit Taxi, Taxi-Van, Limousine und Shuttlebus.
  - 7 Kapitel Dienstanweisungen.
- **Mechaniker – East Customs** (`Config.MechanicJobs`: `mechanic`, `bennys`): eigenes MDT in Schwarz und Gelb mit dem Logo von East Customs.
  - **Werkstattaufträge** mit Kennzeichen, Kunde, zuständigem Mechaniker, Arbeiten und Kosten.
  - **Rechnungen** mit Positionen, Total und Zahlungsart.
  - Eigener **East-Customs-Funk**, Besetzung mit Abschleppwagen, Flatbed, Pannenhilfe-Van und Werkstattwagen.
  - 7 Kapitel Dienstanweisungen.
- Taxi und Mechaniker haben **keinen Zugriff** auf Akten, Vorfälle, Haftbefehle, Waffen, Kameras und die Zulassungsstelle. Das ist auch auf dem Server gesperrt.
- Sie sehen keine Einsätze und keine Einheiten der Behörden. Umgekehrt erscheinen sie nicht bei den Behörden.

### Leitstelle

- **Auftrags-Dispatch für Taxi und Mechaniker:** Spieler bestellen mit `/taxi` oder `/mechaniker` und optionaler Nachricht. Telefon nötig, 60 Sekunden Wartezeit.
  - Der Auftrag kommt als eigenes Popup (Taxi in Taxigelb, East Customs im eigenen Gelb), als Kartenpunkt und unter „Offene Aufträge“ im MDT.
  - Mit **E** nimmt man den Auftrag an und bekommt den Wegpunkt.
  - Jeder sieht nur die Aufträge seines Jobs. Polizei und Rettung sehen sie nicht.
  - Für Handy-Apps: `exports['ps-dispatch']:TaxiCall()` und `MechanicCall()`.
- **Anwälte hören mit:** Sie bekommen alle Einsätze, die an Polizei oder Feuerwehr gehen, als Popup („Justiz · mithören“), Kartenpunkt und im MDT.
- Anwälte werden nicht als Einheit angehängt.
- Einsätze nur für den Rettungsdienst sehen sie nicht.
- Einstellbar in `ps-dispatch/config.lua` unter `Config.DispatchListeners`.

### Profile in allen Oberflächen

- Auch **Taxi** und **East Customs** haben jetzt Profile.
  - Sie sehen Name, Foto, Telefon und Beruf und führen eigene Notizen, Tags und Fotos zu Kunden.
  - East Customs sieht zusätzlich die Fahrzeuge der Person; per Rechtsklick sucht man direkt in den Werkstattaufträgen.
  - Gesperrt bleiben Geburtsdatum, Wohnung, Fingerabdruck, Lizenzen, Vorstrafen und Haftbefehle, auch auf dem Server.
- **Profile pro Behörde:** Notizen, Tags und Galerie werden je Behörde gespeichert.
  - Bisher überschrieb zum Beispiel eine EMS-Notiz die Polizeinotizen und das Polizeifoto derselben Person.
  - Die Tabelle `mdt_data` wird beim ersten Start automatisch umgestellt, die vorhandenen Daten bleiben erhalten.
  - Die Justiz arbeitet mit den Polizeiprofilen.
- Fehlt ein eigenes Foto, zeigt das Profil das Polizeifoto.

### Personalprotokolle in allen Oberflächen

- Taxi und East Customs haben jetzt auch **Personalprotokolle**.
- **Einträge pro Behörde:** Protokolleinträge werden mit der Behörde gespeichert.
  - Bisher landeten alle Einträge bei der Polizei. Rettungsdienst, LSFD, Regierung und Justiz sahen in ihren Personalprotokollen nichts.
- **Dienstzeiten pro Behörde:** Die Rangliste „Dienstzeiten“ zeigt nur die eigene Behörde. Bisher sah jeder die Dienstzeiten aller Behörden.
  - Dienstbeginn und -ende werden jetzt für alle Behörden mit MDT erfasst, auch für Taxi und East Customs.
  - Die Tabelle `mdt_clocking` bekommt beim Start automatisch die Spalte `jobtype`.
- `Config.LogPerms` kennt jetzt auch `min = Rang` (ab diesem Rang). Neu eingetragen sind Taxi, Mechaniker, Bennys, Regierung, Bürgermeister und Richter.
- Ohne Berechtigung erscheint ein Hinweis statt einer leeren Seite.
- Protokolltexte und Dienstzeiten sind auf Deutsch.
- Protokolleinträge können nicht mehr von Spielern (Clients) gefälscht werden.

### Regierung

- Der Job `regierung` ist in `Config.GovJobs` und in `ui/app.js` eingetragen und bekommt die Regierungs-Oberfläche.

### Verbesserungen

- Die Suche in den Dienstanweisungen zeigt je Behörde passende Beispiele.
- Die Besetzung zeigt je Behörde passende Beispiele für Einheit, Kennzeichen und Notiz.

### Behobene Fehler

- Neue Einträge auf der Pinnwand erschienen live bei allen Behörden statt nur bei der eigenen.
- Ein Bericht konnte über seine Nummer von einer anderen Behörde überschrieben werden.
- Berichte der Justiz wurden gespeichert, waren danach aber nicht sichtbar.
- Lizenzen in einem Profil konnten ohne Berechtigung geändert werden.
- Die Liste der Haftbefehle war ohne Berechtigung abrufbar.

---

## Version 1.0 – 15.11.2026

Erste Ausgabe der Culture-City-Fassung von **ps-mdt** und **ps-dispatch**.

### Neue Behörden-Oberflächen

- **LSFD (Feuerwehr):** eigene Oberfläche mit Farben, Logo und eigener Jobgruppe (`Config.FireJobs`). „BOLO“ heisst hier **Brandschau**, die Einsatzleitung heisst **Funkverkehr**. Die Daten werden getrennt vom Rettungsdienst gespeichert.
- **Regierung:** eigene Oberfläche in Marineblau und Gold mit dem Siegel des Staates San Andreas (`Config.GovJobs`: `government`, `mayor`).
  - Gewerberegister für Business-Lizenzen mit Lizenznummer, Branche, Inhaber und Geschäftsführung.
  - Vorlagen für Sitzungsprotokolle und Erlasse.
  - Waffen, Vorfälle und Kameras sind ausgeblendet, das Fahrzeugregister ist nur lesbar.
- **Justiz:** arbeitet im Gewerberegister der Regierung mit. Sie kann Anträge anlegen und bearbeiten, löschen kann nur die Regierung.

### Design

- Modernes Design für alle Behörden mit neuer Schrift, Verläufen, Icons in der Navigation und abgerundeten Karten.
- Die Kopfzeile ist schmaler als die Box mit Uhrzeit und Datum, die Schrift sitzt direkt auf dem Balken.
- Darstellungsfehler behoben: Knöpfe brechen nicht mehr um, Einheitenzähler laufen nicht mehr über, das Menü wird nicht mehr abgeschnitten.
- Der Hinweis „Erstellt von Robertbox28“ steht im Menü.

### Sprache

- Das ganze MDT ist auf Deutsch: Menüs, Vorlagen, Statusangaben, Kontextmenüs, Datum und Uhrzeit (Schweizer Format) und Zeitangaben wie „vor 5 Minuten“.

### Karte

- Die eigene GTA-V-Karte (6258 × 8000) ist eingebaut und auf die Spielkoordinaten abgestimmt, mit Korrektur für Cayo Perico.
- Einsatz-Markierungen funktionieren mit allen Polizei-, EMS- und LSFD-Jobs.
- Beim Öffnen erscheinen auch laufende Einsätze der letzten 20 Minuten.
- Eine abweichende Server-Uhr blendet keine Einsätze mehr aus.
- „Leeren“ und Rechtsklick entfernen Markierungen dauerhaft.

### Besetzung (ersetzt die Seite „Strafgesetzbuch“)

- Zuteilungsliste: welcher Beamte mit wem in welchem Fahrzeug arbeitet.
- Die Fahrzeuglisten sind pro Behörde einstellbar (`Config.AssignmentVehicles`), ebenso die maximale Anzahl Personen pro Einheit (`Config.AssignmentMaxMembers`).
- Ab welchem Rang man die Liste bearbeiten darf, steht in `Config.AssignmentEditGrade`.
- Alle Behörden sehen Änderungen sofort, jede Änderung wird protokolliert.
- Die Tabelle `mdt_assignments` wird beim Start automatisch angelegt.

### Strafgesetzbuch

- Der Bussgeldkatalog von Culture City ist mit 128 Tatbeständen in 11 Kapiteln (StVO und StGB) übernommen.
- Die Einteilung ergibt sich aus der Haftzeit: Ordnungswidrigkeit (ohne Haft, grün), Vergehen (unter 30 Monaten, orange), Verbrechen (ab 30 Monaten, rot).

### Dienstanweisungen

- Eingebaute Dienstanweisungen für alle Behörden:

  | Behörde | Kapitel |
  |---|---|
  | Polizei | 12 |
  | Rettungsdienst | 8 |
  | LSFD | 9 |
  | Justiz | 10 |
  | Regierung | 9 |

- Die Dienstanweisungen haben eine Suche mit Hervorhebung, Funkcodes und die 10-Codes aus ps-dispatch.
- Die Justiz unterstützt die Regierung bei der Vergabe der Business-Lizenzen. Ablauf und Aufgabenteilung sind bei beiden Behörden beschrieben.
- Die Justiz unterstützt die Strafverfolgungsbehörden und das Gefängnis (DOC). Dafür gibt es ein eigenes Kapitel, ergänzt um die Zusammenarbeit bei der Polizei.

### Telefon

- Telefonnummern kommen aus **LB Phone**, sowohl in Profilen als auch bei Beschlagnahmungen (`Config.PhoneSystem = 'auto'`). Ohne LB Phone wird die QBCore-Nummer verwendet.

### Leitstelle (ps-dispatch)

- Die Behörden stehen jetzt in Gruppen statt einzelner Jobnamen: `LEO` (Polizei, Sheriff, Highway Patrol, Ranger, DOC), `EMS` und neu `FIRE` (LSFD). Die Gruppen entsprechen den Jobs im MDT.
- Wer welche Einsätze bekommt:

  | Einsatz | Empfänger |
  |---|---|
  | Notruf 911 | Polizei und EMS |
  | Notruf 311 | EMS und LSFD |
  | Verletzte Person | EMS und LSFD |
  | Beamter oder Rettungskraft am Boden | alle drei |
  | Explosion | Polizei und LSFD |

- Alle Meldungen, Kartenpunkte, Fahrzeugfarben, Fahrtrichtungen und Chat-Hinweise sind auf Deutsch, das Tempo steht in km/h.
- Das Popup hat ein neues Design passend zum MDT, mit einer Farbe je Behörde.
- Mit **E** fährst du den Einsatz an, solange das Popup sichtbar ist.
- Bei `/911` und `/311` kommt die Telefonnummer aus LB Phone, anonyme Anrufe bleiben unterdrückt.
- Angehängte Einheiten stehen im MDT als Polizei, EMS oder LSFD.

### Behobene Fehler

- Eine neue Brandschau wurde als bestehender Eintrag gespeichert.
- Die Karte war nach dem Öffnen grau oder verschoben.
- Markierungen erschienen bei allen Jobs statt nur bei der zuständigen Behörde.
- Das Löschen eines Eintrags konnte Einträge anderer Behörden mit derselben Nummer treffen.
- Die Suche im BOLO- und Gewerberegister zeigte Einträge anderer Behörden.
- Das Geschlecht im Einsatz stand immer auf „Männlich“.
- `/togglealerts` hat nie funktioniert.
- Beim Abhängen vom Einsatz entstanden Lücken in der Einheitenliste.
- Notruf 311 erschien auf der Karte als 911.
- Bei „Person am Boden“ wurde eine falsche Einstellung verwendet.
- Die Konsole wurde bei jeder Meldung mit Debug-Ausgaben gefüllt.

### Hinweise zum Update

- Neue Jobs immer an zwei Stellen eintragen: in `ps-mdt/shared/config.lua` und in `ps-dispatch/config.lua`.
- Bestehende Feuerwehr-Einträge liegen noch unter dem Rettungsdienst. Mit dem SQL-Befehl in der Anleitung lassen sie sich zum LSFD verschieben.
- Nach dem Ersetzen in der Konsole ausführen: `refresh`, `restart ps-dispatch`, `restart ps-mdt`.
