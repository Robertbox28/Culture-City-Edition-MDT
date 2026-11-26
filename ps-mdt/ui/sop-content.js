// =====================================================================
//  ps-mdt  |  Dienstanweisungen – INHALT
//  Diese Datei kannst du frei bearbeiten. Pro Behörde eine Liste von
//  Kapiteln: { title, icon (Font Awesome), body (HTML) }.
//  police  = alle Polizeibehörden (LSPD, BCSO, LSSD, SASP, SAST, SAPR, DOC)
//  ems     = Pillbox / Rettungsdienst
//  fire    = Los Santos Fire Department
//  doj     = Justiz (Richter, Staatsanwaltschaft, Anwälte)
//  gov     = Regierung
// =====================================================================

// Funkcodes, die der Dispatch (ps-dispatch) auf diesem Server verwendet
const SOP_DISPATCH_CODES = `
<table class="sop-table">
  <tr><th>Code</th><th>Bedeutung im Dispatch</th></tr>
  <tr><td>911</td><td>Notruf (Bürger)</td></tr>
  <tr><td>311</td><td>Nicht dringender Anruf</td></tr>
  <tr><td>10-10</td><td>Schlägerei</td></tr>
  <tr><td>10-11</td><td>Schüsse gemeldet / Raser</td></tr>
  <tr><td>10-13</td><td>Verdächtige Übergabe / illegale Jagd</td></tr>
  <tr><td>10-35</td><td>Fahrzeugdiebstahl, Carjacking, Schilderdiebstahl</td></tr>
  <tr><td>10-50</td><td>Fahrzeug-Boosting</td></tr>
  <tr><td>10-60</td><td>Schüsse aus einem Fahrzeug</td></tr>
  <tr><td>10-65</td><td>Überfall Yacht</td></tr>
  <tr><td>10-66</td><td>Verdächtige Aktivität</td></tr>
  <tr><td>10-69</td><td>Person verletzt / leblos</td></tr>
  <tr><td>10-80</td><td>Explosion</td></tr>
  <tr><td>10-90</td><td>Raubüberfall (Laden, Bank, Juwelier, Ausbruch …)</td></tr>
  <tr><td>10-99</td><td>Beamter / Rettungskraft in Not – alle verfügbaren Einheiten</td></tr>
</table>`;

const SOP_RADIO_CODES = `
<table class="sop-table">
  <tr><th>Code</th><th>Bedeutung im Funk</th></tr>
  <tr><td>10-4</td><td>Verstanden</td></tr>
  <tr><td>10-6</td><td>Beschäftigt, nicht ansprechbar</td></tr>
  <tr><td>10-7</td><td>Ausser Dienst / Pause</td></tr>
  <tr><td>10-8</td><td>Im Dienst, verfügbar</td></tr>
  <tr><td>10-9</td><td>Bitte wiederholen</td></tr>
  <tr><td>10-20</td><td>Standort</td></tr>
  <tr><td>10-23</td><td>Am Einsatzort eingetroffen</td></tr>
  <tr><td>10-32</td><td>Verstärkung benötigt</td></tr>
  <tr><td>10-99</td><td>Notfall – Kollege in Gefahr</td></tr>
  <tr><td>Code 4</td><td>Lage unter Kontrolle, keine weitere Hilfe nötig</td></tr>
</table>`;

window.SOP_CONTENT = {
  // =================================================================== POLIZEI
  police: [
    { title: "Grundsätze", icon: "fa-scale-balanced", body: `
      <p>Die Polizei schützt Bürgerinnen und Bürger, setzt Gesetze durch und handelt dabei stets <b>verhältnismässig, respektvoll und nachvollziehbar</b>.</p>
      <ul>
        <li>Jede Person wird gleich behandelt – unabhängig von Herkunft, Gruppe oder Ruf.</li>
        <li>Wir lösen Situationen bevorzugt durch Kommunikation, Gewalt ist immer das letzte Mittel.</li>
        <li>Private Angelegenheiten haben im Dienst keinen Platz.</li>
        <li>Fehler werden offen angesprochen und im Bericht festgehalten.</li>
        <li>Rollenspiel geht vor Gewinnen: Wir geben Gegenspielern faire Chancen.</li>
      </ul>` },

    { title: "Dienstbeginn und Dienstende", icon: "fa-clock", body: `
      <h4>Dienstbeginn</h4>
      <ol>
        <li>Auf der Wache einstempeln und Ausrüstung aufnehmen.</li>
        <li>Im MDT Rufzeichen und Funkkanal prüfen (Rechtsklick auf deinen Namen unter „Aktive Einheiten“).</li>
        <li>Unter <b>Besetzung</b> in eine Einheit eintragen oder eine neue Einheit mit Fahrzeug anlegen.</li>
        <li>Im Funk melden: „<i>[Rufzeichen] 10-8</i>“.</li>
      </ol>
      <h4>Dienstende</h4>
      <ol>
        <li>Offene Berichte abschliessen.</li>
        <li>Fahrzeug in die Garage, Ausrüstung abgeben.</li>
        <li>Aus der Einteilung austragen, „<i>[Rufzeichen] 10-7</i>“ melden und ausstempeln.</li>
      </ol>` },

    { title: "Funk und Codes", icon: "fa-tower-broadcast", body: `
      <p>Funksprüche sind <b>kurz, klar und sachlich</b>. Zuerst wer spricht, dann die Information. Der Notruf-Kanal bleibt für Notfälle frei.</p>
      <p>Beispiel: „<i>Adam-12, 10-23 bei Fleeca Legion Square, zwei Verdächtige, benötigen 10-32.</i>“</p>
      ${SOP_RADIO_CODES}
      <h4>Codes aus dem Dispatch</h4>
      ${SOP_DISPATCH_CODES}` },

    { title: "Anfahrtsstufen", icon: "fa-gauge-high", body: `
      <table class="sop-table">
        <tr><th>Stufe</th><th>Bedeutung</th></tr>
        <tr><td>Code 1</td><td>Normale Fahrt, keine Sonderrechte, Verkehrsregeln einhalten.</td></tr>
        <tr><td>Code 2</td><td>Dringend: Blaulicht ohne Sirene, zügig, aber vorsichtig.</td></tr>
        <tr><td>Code 3</td><td>Notfall: Blaulicht und Sirene. Sonderrechte nur mit grösster Vorsicht.</td></tr>
      </table>
      <p>Auch mit Sonderrechten haftest du für Schäden. Rote Ampeln nur im Schritttempo überqueren.</p>` },

    { title: "Verkehrskontrolle", icon: "fa-car-on", body: `
      <ol>
        <li>Kennzeichen und Standort im Funk durchgeben.</li>
        <li>Fahrzeug an sicherer Stelle anhalten, Streifenwagen leicht versetzt dahinter.</li>
        <li>Begrüssung, Grund der Kontrolle nennen, Ausweis und Fahrzeugpapiere verlangen.</li>
        <li>Person und Kennzeichen im MDT prüfen (Profile, Zulassungsstelle, BOLOs).</li>
        <li>Verwarnung oder Busse gemäss Bussgeldkatalog aussprechen.</li>
        <li>Bei Verdacht (Alkohol, Drogen, Waffen) die Kontrolle erweitern und Verstärkung anfordern.</li>
      </ol>` },

    { title: "Festnahme und Rechte", icon: "fa-handcuffs", body: `
      <p>Eine Festnahme erfolgt nur bei <b>konkretem Tatverdacht</b> oder laufendem Haftbefehl.</p>
      <h4>Rechtsbelehrung (vor der Befragung vorlesen)</h4>
      <blockquote>Sie sind vorläufig festgenommen. Sie haben das Recht zu schweigen. Alles, was Sie sagen, kann vor Gericht gegen Sie verwendet werden. Sie haben das Recht auf einen Anwalt. Können Sie sich keinen leisten, wird Ihnen einer gestellt. Haben Sie Ihre Rechte verstanden?</blockquote>
      <ul>
        <li>Festgenommene werden durchsucht, bevor sie ins Fahrzeug steigen.</li>
        <li>Verletzte Personen werden zuerst medizinisch versorgt (EMS anfordern).</li>
        <li>Auf der Wache: Personalien prüfen, Fotos/Fingerabdruck, Vorfall im MDT anlegen.</li>
        <li>Wird ein Anwalt verlangt, wird die Befragung bis zu dessen Eintreffen unterbrochen.</li>
      </ul>` },

    { title: "Gewaltanwendung", icon: "fa-shield-halved", body: `
      <p>Es gilt immer das <b>mildeste wirksame Mittel</b>. Die Stufe richtet sich nach dem Verhalten des Gegenübers.</p>
      <ol>
        <li><b>Präsenz und Ansprache</b> – Auftreten, klare Anweisungen.</li>
        <li><b>Körperliche Gewalt</b> – Festhalten, Zugriff, Handschellen.</li>
        <li><b>Taser</b> – bei aktivem Widerstand oder Fluchtgefahr zu Fuss.</li>
        <li><b>Schusswaffe</b> – nur bei unmittelbarer Gefahr für Leib und Leben.</li>
      </ol>
      <p>Jeder Schusswaffeneinsatz wird im Funk gemeldet und im Bericht begründet.</p>` },

    { title: "Verfolgungen", icon: "fa-route", body: `
      <ul>
        <li>Maximal <b>drei Fahrzeuge</b> direkt in der Verfolgung, weitere sperren ab.</li>
        <li>Die erste Einheit meldet laufend Richtung, Strasse und Fahrzeugbeschreibung.</li>
        <li>PIT-Manöver nur nach Freigabe und nicht in dicht befahrenen Bereichen.</li>
        <li>Ein Helikopter übernimmt die Führung, sobald er Sicht hat.</li>
        <li>Abbruch, wenn die Gefahr für Unbeteiligte zu gross wird.</li>
      </ul>` },

    { title: "Raub und Geiselnahme", icon: "fa-people-robbery", body: `
      <ol>
        <li>Erste Einheit sichert den Bereich und baut Absperrungen auf.</li>
        <li>Ein Verhandlungsführer wird bestimmt, nur er spricht mit den Tätern.</li>
        <li>Forderungen und Geiseln werden im Funk mitgeteilt und dokumentiert.</li>
        <li>Das Leben der Geiseln hat oberste Priorität.</li>
        <li>Nach Freilassung: Geiseln zum EMS, Täter festnehmen oder verfolgen.</li>
      </ol>` },

    { title: "Durchsuchung und Beschlagnahmung", icon: "fa-magnifying-glass", body: `
      <ul>
        <li>Durchsuchung von Personen bei Festnahme, Gefahr oder begründetem Verdacht.</li>
        <li>Fahrzeuge und Häuser nur mit Verdacht oder Durchsuchungsbeschluss des Gerichts.</li>
        <li>Beschlagnahmte Gegenstände werden im Vorfall unter „Beweise“ festgehalten.</li>
        <li>Fahrzeuge werden über die Zulassungsstelle im MDT beschlagnahmt (Bericht verknüpfen, Gebühr, Dauer).</li>
      </ul>` },

    { title: "Berichte und MDT", icon: "fa-file-lines", body: `
      <ul>
        <li><b>Vorfälle</b>: für jede Festnahme oder Anzeige – Anklagen aus dem Katalog wählen, Busse und Haft eintragen.</li>
        <li><b>Berichte</b>: für Einsätze ohne Festnahme, z. B. Unfälle, Hinweise, Ermittlungen.</li>
        <li><b>BOLOs</b>: gesuchte Fahrzeuge und Personen.</li>
        <li>Berichte sachlich und vollständig: Wer, Was, Wann, Wo, Wie, Warum.</li>
        <li>Geldstrafen und Haftmonate werden bei mehreren Vergehen addiert. Der Katalog ist ein Leitfaden.</li>
      </ul>` },

    { title: "Zusammenarbeit", icon: "fa-handshake", body: `
      <ul>
        <li><b>EMS</b>: Bei Verletzten immer anfordern. Bei Gefahr sichert die Polizei, bevor das EMS eintrifft.</li>
        <li><b>LSFD</b>: Absperrungen bei Bränden und Unfällen übernehmen, Übergabe bei Brandstiftung.</li>
        <li><b>Justiz</b>: Haftbefehle und Durchsuchungsbeschlüsse beim Gericht beantragen. Die Justiz unterstützt mit rechtlicher Beratung bei Ermittlungen und Festnahmen und bereitet die Anklage aus dem Vorfall vor.</li>
        <li><b>Gefängnis (DOC)</b>: Überstellung nur mit abgeschlossenem Vorfall im MDT (Anklagen, Haftmonate). Bei Unklarheiten zur Haftdauer oder Entlassung entscheidet die Justiz.</li>
        <li>Behördenübergreifend gilt: höflich, klar, Informationen teilen.</li>
      </ul>` },
  ],

  // =================================================================== EMS
  ems: [
    { title: "Grundsätze", icon: "fa-heart-pulse", body: `
      <p>Der Rettungsdienst hilft <b>jedem Menschen</b>, unabhängig davon, wer er ist oder was er getan hat.</p>
      <ul>
        <li><b>Eigenschutz geht vor</b>: Keine Einsatzstelle betreten, solange geschossen wird.</li>
        <li>Wir sind neutral und geben keine Informationen an Dritte weiter (Schweigepflicht).</li>
        <li>Patienten werden respektvoll behandelt und über Massnahmen informiert.</li>
      </ul>` },

    { title: "Dienstbeginn und Dienstende", icon: "fa-clock", body: `
      <ol>
        <li>Einstempeln, Ausrüstung und Medikamente prüfen.</li>
        <li>Unter <b>Besetzung</b> in ein Fahrzeug eintragen (RTW, NEF, Heli).</li>
        <li>Im Funk „<i>[Rufzeichen] 10-8</i>“ melden.</li>
        <li>Bei Dienstende Berichte abschliessen, austragen, „10-7“ melden.</li>
      </ol>` },

    { title: "Funk und Codes", icon: "fa-tower-broadcast", body: `
      ${SOP_RADIO_CODES}
      <h4>Für das EMS wichtige Dispatch-Codes</h4>
      <p><b>10-69</b> Person verletzt/leblos, <b>10-80</b> Explosion, <b>10-99</b> Rettungskraft oder Beamter in Not, <b>911</b> Notruf.</p>
      ${SOP_DISPATCH_CODES}` },

    { title: "Einsatzablauf", icon: "fa-truck-medical", body: `
      <ol>
        <li>Einsatz übernehmen („Ausrücken“ im MDT) und Anfahrtsstufe wählen.</li>
        <li>Am Einsatzort: Lage erkunden, Gefahren erkennen, bei Bedarf Polizei anfordern.</li>
        <li>Bei mehreren Verletzten: <b>Triage</b> – rot (sofort), gelb (dringend), grün (leicht).</li>
        <li>Patient versorgen, Transport entscheiden.</li>
        <li>Übergabe im Krankenhaus, Bericht im MDT.</li>
      </ol>` },

    { title: "Patientenversorgung (ABCDE)", icon: "fa-stethoscope", body: `
      <table class="sop-table">
        <tr><th></th><th>Prüfen</th></tr>
        <tr><td>A</td><td>Atemwege frei?</td></tr>
        <tr><td>B</td><td>Atmung vorhanden und ausreichend?</td></tr>
        <tr><td>C</td><td>Kreislauf, starke Blutungen stoppen</td></tr>
        <tr><td>D</td><td>Bewusstsein und neurologischer Zustand</td></tr>
        <tr><td>E</td><td>Ganzkörper-Untersuchung, Wärmeerhalt</td></tr>
      </table>
      <p>Bewusstlose Patienten werden nicht ohne Versorgung bewegt, ausser die Umgebung ist gefährlich.</p>` },

    { title: "Transport und ICU", icon: "fa-bed-pulse", body: `
      <ul>
        <li>Schwer verletzte Patienten werden ins Pillbox gebracht.</li>
        <li>Längere Behandlungen werden als <b>ICU-Check-in</b> im MDT erfasst (Zimmer, Verletzungen, Notfallkontakt).</li>
        <li>Festgenommene Patienten bleiben unter Polizeiaufsicht.</li>
        <li>Entlassung erst nach Freigabe durch das behandelnde Personal.</li>
      </ul>` },

    { title: "Berichte", icon: "fa-file-medical", body: `
      <p>Jeder Einsatz mit Behandlung wird als Bericht im MDT festgehalten: Unfallhergang, Verletzungen, Massnahmen, Medikamente, beteiligtes Personal. Die Vorlage füllt sich beim Klick auf „Neu“ automatisch aus.</p>` },

    { title: "Zusammenarbeit", icon: "fa-handshake", body: `
      <ul>
        <li><b>Polizei</b>: sichert gefährliche Einsatzstellen. Auskünfte zu Patienten nur mit Einwilligung oder Gerichtsbeschluss.</li>
        <li><b>LSFD</b>: übernimmt technische Rettung und Brandbekämpfung, das EMS die medizinische Versorgung.</li>
      </ul>` },
  ],

  // =================================================================== LSFD
  fire: [
    { title: "Grundsätze", icon: "fa-fire-extinguisher", body: `
      <p>Das LSFD rettet, löscht, birgt und schützt. Reihenfolge: <b>Menschen – Tiere – Umwelt – Sachwerte</b>.</p>
      <ul>
        <li>Eigenschutz geht vor Fremdschutz.</li>
        <li>Niemand geht allein in ein Gebäude – immer im Trupp (mindestens zwei Personen).</li>
        <li>Der Einsatzleiter hat am Einsatzort das letzte Wort.</li>
      </ul>` },

    { title: "Dienstbeginn und Dienstende", icon: "fa-clock", body: `
      <ol>
        <li>Einstempeln, Schutzausrüstung und Atemschutz prüfen.</li>
        <li>Unter <b>Besetzung</b> ins Fahrzeug eintragen (Engine, Ladder, Rüstwagen …).</li>
        <li>Fahrzeugcheck: Wasser, Schläuche, Werkzeug.</li>
        <li>Im Funk „<i>[Rufzeichen] 10-8</i>“ melden. Bei Dienstende austragen und „10-7“.</li>
      </ol>` },

    { title: "Funk und Codes", icon: "fa-tower-broadcast", body: `
      ${SOP_RADIO_CODES}
      <h4>Für das LSFD wichtige Dispatch-Codes</h4>
      <p><b>10-80</b> Explosion, <b>10-69</b> verletzte Person, <b>10-99</b> Kollege in Not, <b>911</b> Notruf.</p>
      ${SOP_DISPATCH_CODES}` },

    { title: "Alarmstufen", icon: "fa-bell", body: `
      <table class="sop-table">
        <tr><th>Stufe</th><th>Beispiel</th><th>Kräfte</th></tr>
        <tr><td>B1</td><td>Kleinbrand, Müll, Fahrzeug</td><td>1 Löschfahrzeug</td></tr>
        <tr><td>B2</td><td>Wohnungs- oder Gebäudebrand</td><td>Löschfahrzeug + Drehleiter + EMS</td></tr>
        <tr><td>B3</td><td>Grossbrand, Menschenleben in Gefahr</td><td>Alle verfügbaren Kräfte + Polizei</td></tr>
        <tr><td>TH1</td><td>Kleine technische Hilfe</td><td>1 Fahrzeug</td></tr>
        <tr><td>TH2</td><td>Verkehrsunfall mit eingeklemmter Person</td><td>Rüstwagen + Löschfahrzeug + EMS</td></tr>
        <tr><td>G</td><td>Gefahrgut</td><td>Alle Kräfte, Polizei sperrt weiträumig</td></tr>
      </table>` },

    { title: "Einsatzablauf", icon: "fa-list-check", body: `
      <ol>
        <li><b>Erkunden</b>: Was brennt? Sind Personen in Gefahr? Gefahren (Gas, Strom, Einsturz)?</li>
        <li><b>Rückmeldung</b> an die Leitstelle, Alarmstufe bei Bedarf erhöhen.</li>
        <li><b>Absichern</b> der Einsatzstelle (Polizei für Absperrung anfordern).</li>
        <li><b>Retten</b> vor Löschen.</li>
        <li><b>Löschen</b>, Nachlöschen, Brandwache.</li>
        <li><b>Übergabe</b> und Einsatzbericht im MDT.</li>
      </ol>` },

    { title: "Atemschutz", icon: "fa-mask-ventilator", body: `
      <ul>
        <li>Atemschutz ist Pflicht in verrauchten Bereichen.</li>
        <li>Einsatz nur im Trupp mit Sicherheitstrupp in Bereitschaft.</li>
        <li>Rückzug spätestens bei halbem Luftvorrat.</li>
        <li>Notfall im Innenangriff: „<i>Mayday</i>“ im Funk, der Sicherheitstrupp geht sofort vor.</li>
      </ul>` },

    { title: "Technische Hilfe und Unfälle", icon: "fa-car-burst", body: `
      <ul>
        <li>Fahrzeug sichern (Motor aus, Unterlegkeile), Brandschutz bereitstellen.</li>
        <li>Eingeklemmte Person zuerst vom EMS beurteilen lassen.</li>
        <li>Rettungsöffnung schaffen (Schere, Spreizer), patientenschonend arbeiten.</li>
        <li>Ausgelaufene Betriebsstoffe binden.</li>
      </ul>` },

    { title: "Brandschau", icon: "fa-clipboard-check", body: `
      <p>Betriebe und öffentliche Gebäude werden regelmässig geprüft. Jede Brandschau wird im MDT unter <b>Brandschau</b> erfasst.</p>
      <ul>
        <li>Prüfen: Rauchmelder, Feuerlöscher, Fluchtwege, Notausgänge, Gefahrstoffe.</li>
        <li>Mängel mit Frist festhalten, Nachkontrolle planen.</li>
        <li>Bei schweren Mängeln kann die Nutzung untersagt werden.</li>
      </ul>` },

    { title: "Brandursache und Übergabe an die Polizei", icon: "fa-magnifying-glass", body: `
      <ul>
        <li>Brandstelle nach dem Löschen möglichst unverändert lassen.</li>
        <li>Bei Verdacht auf Brandstiftung sofort die Polizei informieren und den Bereich sichern.</li>
        <li>Im Einsatzbericht „Übergabe an LSPD: Ja“ eintragen.</li>
      </ul>` },
  ],

  // =================================================================== JUSTIZ
  doj: [
    { title: "Grundsätze", icon: "fa-scale-balanced", body: `
      <p>Die Justiz entscheidet <b>unabhängig, unparteiisch und nach dem Gesetz</b>. Jede angeklagte Person gilt bis zum Urteil als unschuldig.</p>
      <ul>
        <li>Richter sind an keine Weisung von Polizei oder Regierung gebunden.</li>
        <li>Jede Partei hat Anspruch auf rechtliches Gehör.</li>
        <li>Urteile werden begründet und im MDT dokumentiert.</li>
      </ul>` },

    { title: "Rollen", icon: "fa-users", body: `
      <table class="sop-table">
        <tr><th>Rolle</th><th>Aufgabe</th></tr>
        <tr><td>Richter</td><td>Leitet die Verhandlung, entscheidet und verkündet das Urteil.</td></tr>
        <tr><td>Staatsanwaltschaft</td><td>Erhebt Anklage, vertritt die Beweise der Polizei und berät die Strafverfolgungsbehörden.</td></tr>
        <tr><td>Verteidigung</td><td>Vertritt die angeklagte Person und deren Rechte.</td></tr>
        <tr><td>Gerichtsdiener</td><td>Sorgt für Ordnung und Sicherheit im Saal.</td></tr>
      </table>` },

    { title: "Ablauf einer Verhandlung", icon: "fa-gavel", body: `
      <ol>
        <li>Eröffnung durch den Richter, Feststellung der Anwesenden.</li>
        <li>Verlesung der Anklage.</li>
        <li>Stellungnahme der angeklagten Person (Recht zu schweigen).</li>
        <li>Beweisaufnahme: Zeugen, Berichte, Bilder aus dem MDT.</li>
        <li>Plädoyers von Anklage und Verteidigung.</li>
        <li>Letztes Wort der angeklagten Person.</li>
        <li>Urteil mit Begründung.</li>
      </ol>` },

    { title: "Haftbefehle und Beschlüsse", icon: "fa-file-signature", body: `
      <ul>
        <li>Haftbefehle und Durchsuchungsbeschlüsse werden von der Polizei mit Begründung beantragt.</li>
        <li>Der Richter prüft, ob ein hinreichender Verdacht besteht.</li>
        <li>Ein Haftbefehl wird im Vorfall im MDT markiert und erscheint dann unter „Haftbefehle“.</li>
        <li>Beschlüsse sind zeitlich und örtlich begrenzt.</li>
      </ul>` },

    { title: "Strafzumessung", icon: "fa-calculator", body: `
      <ul>
        <li>Grundlage ist der <b>Bussgeldkatalog</b>. Er ist ein Leitfaden, das Gericht kann abweichen.</li>
        <li>Bei mehreren Vergehen werden Geldstrafen und Haftmonate addiert.</li>
        <li>Mildernd: Geständnis, Kooperation, erstmalige Tat.</li>
        <li>Erschwerend: Wiederholung, Gewalt gegen Beamte, Gefährdung Unbeteiligter.</li>
        <li>Ersatzweise können Sozialstunden angeordnet werden.</li>
      </ul>` },

    { title: "Einspruch", icon: "fa-rotate-left", body: `
      <p>Gegen eine Busse oder Strafe der Polizei kann im Rollenspiel beim Gericht <b>Einspruch</b> eingelegt werden. Das Gericht prüft den Vorfall und kann die Strafe bestätigen, ändern oder aufheben.</p>` },

    { title: "Anwälte", icon: "fa-briefcase", body: `
      <ul>
        <li>Anwälte haben Anspruch auf ein ungestörtes Gespräch mit ihren Mandanten.</li>
        <li>Akteneinsicht in Vorfälle und Berichte erfolgt über das MDT.</li>
        <li>Anwälte sind an die Wahrheitspflicht vor Gericht gebunden.</li>
      </ul>` },

    { title: "Strafverfolgung und Gefängnis", icon: "fa-handshake", body: `
      <p>Die Justiz <b>unterstützt die Strafverfolgungsbehörden und das Gefängnis</b>. Sie bleibt dabei unabhängig: Sie berät und entscheidet, führt aber keine Einsätze.</p>
      <h4>Strafverfolgungsbehörden (LSPD, BCSO, LSSD, SASP, SAST, SAPR)</h4>
      <ul>
        <li><b>Rechtliche Beratung</b> bei Ermittlungen, Festnahmen und Beschlagnahmungen, auch kurzfristig über Funk oder Telefon.</li>
        <li><b>Haftbefehle und Durchsuchungsbeschlüsse</b> zügig prüfen. Ein Richter ist im Dienst als Bereitschaft erreichbar.</li>
        <li><b>Anklage vorbereiten</b>: Die Staatsanwaltschaft prüft den Vorfall im MDT auf Vollständigkeit (Anklagen, Beweise, Berichte) und meldet Mängel an den zuständigen Beamten zurück.</li>
        <li>Rückmeldung zu Verfahren: Urteile und Einstellungen werden im Vorfall vermerkt, damit die Behörde den Stand kennt.</li>
      </ul>
      <h4>Gefängnis (DOC)</h4>
      <ul>
        <li><b>Haftantritt</b> nur auf Grundlage eines abgeschlossenen Vorfalls oder Urteils im MDT. Die Justiz bestätigt bei Bedarf die Haftdauer.</li>
        <li><b>Haftprüfung</b>: Fragen zu Haftdauer, Anrechnung und Entlassung entscheidet die Justiz.</li>
        <li><b>Vorzeitige Entlassung</b>, Auflagen oder Sozialstunden ordnet nur das Gericht an.</li>
        <li><b>Vorführung</b>: Für Verhandlungen fordert das Gericht Insassen beim DOC an. Das DOC übernimmt Transport und Bewachung.</li>
        <li>Beschwerden von Insassen über die Haftbedingungen werden von der Justiz geprüft.</li>
      </ul>
      <h4>Grenzen</h4>
      <ul>
        <li>Die Justiz gibt Polizei und DOC keine Weisungen im laufenden Einsatz und nimmt nicht an Festnahmen teil.</li>
        <li>Wer in einem Fall berät, entscheidet als Richter nicht über denselben Fall (Ausstand).</li>
      </ul>` },

    { title: "Business-Lizenzen", icon: "fa-store", body: `
      <p>Die Justiz <b>unterstützt die Regierung bei der Vergabe der Business-Lizenzen</b>. Die Anträge stehen im MDT unter <b>Gewerberegister</b>, das sich Justiz und Regierung teilen.</p>
      <h4>Aufgaben der Justiz</h4>
      <ol>
        <li>Anträge entgegennehmen und im Gewerberegister anlegen (Tag „In Prüfung“).</li>
        <li>Geschäftsführung im MDT prüfen: offene Haftbefehle, Vorstrafen, frühere Lizenzsperren.</li>
        <li>Rechtsform, Gesellschaftsverträge und Auflagen prüfen.</li>
        <li>Prüfvermerk mit Empfehlung (erteilen, mit Auflagen, ablehnen) in den Eintrag schreiben und sich unter „Bearbeitet von“ eintragen.</li>
        <li>Den Antrag an die Regierung zum Entscheid übergeben.</li>
      </ol>
      <h4>Grenzen</h4>
      <ul>
        <li>Die Justiz erteilt keine Lizenzen selbst und löscht keine Einträge. Das bleibt bei der Regierung.</li>
        <li>Wer an einem Unternehmen beteiligt ist, prüft dessen Antrag nicht (Ausstand).</li>
        <li>Verstösse gegen die Business-Lizenz (StGB §1 Abs. 8–14) werden vor Gericht verhandelt. Das Urteil wird im Gewerberegister vermerkt.</li>
      </ul>` },

    { title: "Verhalten im Gerichtssaal", icon: "fa-building-columns", body: `
      <ul>
        <li>Alle erheben sich beim Eintreten des Richters.</li>
        <li>Es spricht nur, wem das Wort erteilt wurde.</li>
        <li>Waffen sind im Gerichtsgebäude verboten (ausser Gerichtsdiener).</li>
        <li>Störungen können mit Ordnungsbusse oder Saalverweis geahndet werden.</li>
      </ul>` },
  ],

  // =================================================================== REGIERUNG
  gov: [
    { title: "Grundsätze", icon: "fa-landmark", body: `
      <p>Die Regierung dient der ganzen Bevölkerung von Los Santos. Sie handelt <b>transparent, unparteiisch und im Rahmen der Gesetze</b>.</p>
      <ul>
        <li>Entscheide werden begründet und im MDT protokolliert.</li>
        <li>Private Interessen und Amt werden strikt getrennt. Wer befangen ist, tritt in den Ausstand.</li>
        <li>Geschenke oder Vorteile im Zusammenhang mit dem Amt werden abgelehnt (siehe Korruption, StGB §1 Abs. 7).</li>
      </ul>` },

    { title: "Gewaltenteilung und Zuständigkeiten", icon: "fa-sitemap", body: `
      <table class="sop-table">
        <tr><th>Stelle</th><th>Zuständig für</th></tr>
        <tr><td>Regierung</td><td>Gesetze und Erlasse, Gewerbe und Lizenzen, Haushalt, Vertretung der Stadt.</td></tr>
        <tr><td>Justiz (DOJ)</td><td>Rechtsprechung. Unterstützt die Regierung bei der Vergabe der Business-Lizenzen (rechtliche Prüfung). Die Regierung greift nicht in laufende Verfahren ein.</td></tr>
        <tr><td>Polizei</td><td>Durchsetzung der Gesetze. Die Regierung erteilt keine Weisungen in Einzelfällen.</td></tr>
        <tr><td>EMS und LSFD</td><td>Rettung und Brandschutz. Die Regierung sorgt für Rahmenbedingungen und Mittel.</td></tr>
      </table>` },

    { title: "Dienstbeginn und Dienstende", icon: "fa-clock", body: `
      <ol>
        <li>Im Rathaus einstempeln.</li>
        <li>Unter <b>Besetzung</b> eintragen, z.B. Personenschutz oder Dienstfahrzeug.</li>
        <li>Offene Gewerbeanträge und Protokolle im MDT prüfen.</li>
        <li>Bei Dienstende Einträge abschliessen, austragen und ausstempeln.</li>
      </ol>` },

    { title: "Gewerberegister und Business-Lizenzen", icon: "fa-store", body: `
      <p>Jedes Unternehmen braucht eine gültige Business-Lizenz. Alle Lizenzen werden im MDT unter <b>Gewerberegister</b> geführt. Die Regierung vergibt die Lizenzen, die <b>Justiz (DOJ) unterstützt</b> sie dabei und arbeitet im selben Gewerberegister.</p>
      <h4>Ablauf der Vergabe</h4>
      <ol>
        <li><b>Antrag</b> mit Firmenname, Standort, Branche und Geschäftsführung entgegennehmen (Regierung oder Justiz). Eintrag im Gewerberegister mit Tag „In Prüfung“ anlegen.</li>
        <li><b>Rechtliche Prüfung durch die Justiz:</b> Profil der Geschäftsführung im MDT (offene Haftbefehle, Vorstrafen, frühere Lizenzsperren), Rechtsform und Verträge.</li>
        <li><b>Brandschau</b> durch das LSFD bei Betrieben mit Publikumsverkehr.</li>
        <li><b>Entscheid durch die Regierung:</b> Lizenz erteilen, mit Auflagen erteilen oder ablehnen. Der Entscheid wird im Eintrag begründet.</li>
        <li>Lizenznummer und Gültigkeit eintragen, Tag auf „Aktiv“ setzen.</li>
        <li>Regelmässig Buchhaltung und Auflagen kontrollieren.</li>
      </ol>
      <h4>Aufgabenteilung im MDT</h4>
      <table class="sop-table">
        <tr><th>Aufgabe</th><th>Regierung</th><th>Justiz</th></tr>
        <tr><td>Einträge ansehen und suchen</td><td>ja</td><td>ja</td></tr>
        <tr><td>Anträge anlegen, Prüfvermerke ergänzen</td><td>ja</td><td>ja</td></tr>
        <tr><td>Lizenz erteilen oder ablehnen</td><td>ja</td><td>nein, gibt eine Empfehlung ab</td></tr>
        <tr><td>Einträge löschen</td><td>ja</td><td>nein</td></tr>
      </table>
      <h4>Verstösse (aus dem Bussgeldkatalog)</h4>
      <table class="sop-table">
        <tr><th>Paragraph</th><th>Tatbestand</th><th>Folge</th></tr>
        <tr><td>StGB §1 Abs. 8</td><td>Keine Business-Lizenz</td><td>$ 25'000 · 20 Mt.</td></tr>
        <tr><td>StGB §1 Abs. 9</td><td>Keine ordnungsgemässe Buchhaltung</td><td>$ 15'000 · 10 Mt.</td></tr>
        <tr><td>StGB §1 Abs. 11–14</td><td>Verletzung der Business-Lizenz, 1. bis 4. Verstoss</td><td>Lizenz weg, 1 bis 4 Wochen Sperre als Unternehmensleitung</td></tr>
      </table>
      <p>Über bestrittene Verstösse entscheidet das Gericht. Der Lizenzentzug wird im Gewerberegister mit Datum, Aktenzeichen und Dauer der Sperre festgehalten.</p>` },

    { title: "Gesetze und Erlasse", icon: "fa-scroll", body: `
      <ol>
        <li>Entwurf ausarbeiten und Betroffene anhören (Polizei, Justiz, Rettungsdienste).</li>
        <li>Beratung und Abstimmung in der Regierungssitzung.</li>
        <li>Beschluss als Bericht im MDT erfassen (Typ „Beschluss“ oder „Erlass“).</li>
        <li>Bekanntmachung an die Bevölkerung und Mitteilung an alle Behörden.</li>
        <li>Änderungen am Bussgeldkatalog werden mit der Justiz abgestimmt.</li>
      </ol>` },

    { title: "Sitzungen und Protokolle", icon: "fa-file-signature", body: `
      <ul>
        <li>Jede Sitzung hat Traktanden, die vorab bekannt gegeben werden.</li>
        <li>Ein Mitglied führt Protokoll. Die Vorlage erscheint unter <b>Berichte</b> mit „Neu“.</li>
        <li>Beschlüsse werden mit Abstimmungsergebnis festgehalten.</li>
        <li>Protokolle sind nach der Genehmigung für alle Mitglieder einsehbar.</li>
      </ul>` },

    { title: "Haushalt und Steuern", icon: "fa-coins", body: `
      <ul>
        <li>Ausgaben über einer festgelegten Grenze brauchen einen Beschluss.</li>
        <li>Jede Ausgabe wird mit Zweck, Betrag und Empfänger protokolliert.</li>
        <li>Verdacht auf Steuerhinterziehung (StGB §1 Abs. 20) wird an Polizei und Justiz gemeldet.</li>
      </ul>` },

    { title: "Personenschutz und Sicherheit", icon: "fa-user-shield", body: `
      <ul>
        <li>Öffentliche Auftritte werden mit der Polizei abgesprochen.</li>
        <li>Der Personenschutz wird unter <b>Besetzung</b> eingeteilt (Fahrzeug und Begleitung).</li>
        <li>Bei Bedrohung sofort die Polizei informieren. Drohungen gegen Amtsträger sind strafbar (StGB §4 Abs. 28–29).</li>
      </ul>` },

    { title: "Öffentlichkeit und Datenschutz", icon: "fa-bullhorn", body: `
      <ul>
        <li>Mitteilungen an die Presse nur durch dafür bestimmte Mitglieder.</li>
        <li>Personendaten aus dem MDT werden nur für amtliche Zwecke genutzt und nicht weitergegeben.</li>
        <li>Laufende Ermittlungen von Polizei und Justiz werden nicht öffentlich kommentiert.</li>
      </ul>` },
  ],

  // ===================================================================== TAXI
  taxi: [
    { title: "Grundsätze", icon: "fa-scale-balanced", body: `
      <p>Taxi Los Santos bringt Fahrgäste sicher, pünktlich und zu einem fairen Preis ans Ziel.</p>
      <ul>
        <li>Freundlich und respektvoll gegenüber allen Fahrgästen.</li>
        <li>Die Verkehrsregeln gelten auch für Taxis, ohne Ausnahme.</li>
        <li>Was im Taxi gesprochen wird, bleibt im Taxi.</li>
        <li>Im Dienst keine Waffen, kein Alkohol und keine Drogen.</li>
      </ul>` },

    { title: "Dienstbeginn und Fahrzeug", icon: "fa-car-side", body: `
      <ol>
        <li>Im MDT anmelden und unter <b>Besetzung</b> das Fahrzeug eintragen.</li>
        <li>Fahrzeug kurz prüfen: Tank, Schäden, Sauberkeit.</li>
        <li>Funk einschalten und im <b>Taxifunk</b> melden: „Taxi 07 im Dienst“.</li>
        <li>Schäden am Fahrzeug sofort im Schichtbericht festhalten.</li>
      </ol>` },

    { title: "Fahrtaufträge annehmen", icon: "fa-phone", body: `
      <p>Kunden bestellen mit <b>/taxi</b> und einer kurzen Nachricht. Der Auftrag erscheint als gelbes Popup, auf der Karte und unter <b>Offene Aufträge</b> in der Übersicht.</p>
      <ol>
        <li>Mit <b>E</b> nimmst du den Auftrag an, solange das Popup sichtbar ist. Der Wegpunkt wird gesetzt und du stehst als Fahrer am Auftrag.</li>
        <li>Später geht es auch per Rechtsklick auf den Auftrag in der Übersicht.</li>
        <li>Bei telefonischen Bestellungen: Name, Telefonnummer, Abholort, Ziel und Anzahl Personen notieren.</li>
        <li>Im Taxifunk ansagen, wer die Fahrt übernimmt. Wer am nächsten ist, fährt.</li>
        <li>Voraussichtliche Ankunftszeit an den Kunden durchgeben.</li>
        <li>Kommt der Fahrgast nicht, nach 5 Minuten anrufen und die Fahrt im Fahrtenbuch als „storniert“ eintragen.</li>
      </ol>` },

    { title: "Fahrpreis und Bezahlung", icon: "fa-money-bill-wave", body: `
      <ul>
        <li>Der Preis wird <b>vor der Fahrt</b> genannt oder läuft über das Taxameter.</li>
        <li>Bezahlung bar, mit Karte oder auf Rechnung (nur Firmenkunden).</li>
        <li>Trinkgeld gehört dem Fahrer, wird aber im Fahrtenbuch vermerkt.</li>
        <li>Überhöhte Preise oder Umwege sind verboten.</li>
      </ul>` },

    { title: "Fahrtenbuch", icon: "fa-route", body: `
      <p>Jede Fahrt kommt ins <b>Fahrtenbuch</b> im MDT.</p>
      <ul>
        <li><b>Taxi / Kennzeichen</b>, <b>Fahrgast</b> und <b>Strecke</b> ausfüllen.</li>
        <li>Preis, Zahlungsart und Besonderheiten stehen in der Vorlage, die bei „Neu“ erscheint.</li>
        <li>Tags helfen bei der Suche, zum Beispiel <i>bezahlt</i>, <i>offen</i>, <i>Stammkunde</i>.</li>
        <li>Am Ende der Schicht schreibt jeder Fahrer einen <b>Schichtbericht</b>.</li>
      </ul>` },

    { title: "Schwierige Fahrgäste und Notfälle", icon: "fa-triangle-exclamation", body: `
      <ul>
        <li>Bei Bedrohung anhalten, aussteigen und über <b>911</b> die Polizei rufen.</li>
        <li>Zechpreller nicht verfolgen. Beschreibung, Ort und Zeit notieren und der Polizei melden.</li>
        <li>Verletzte oder kranke Fahrgäste: <b>311</b> rufen, nicht selbst ins Spital fahren, ausser der Rettungsdienst sagt es.</li>
        <li>Fahrten für offensichtliche Straftaten (Flucht, Transport von Diebesgut) werden abgelehnt.</li>
        <li>Jeder Vorfall kommt in den Schichtbericht.</li>
      </ul>` },

    { title: "Datenschutz", icon: "fa-user-lock", body: `
      <ul>
        <li>Namen, Telefonnummern und Fahrtziele von Fahrgästen werden nur für die Fahrt genutzt.</li>
        <li>Auskunft über Fahrten nur an die Polizei, wenn sie danach fragt.</li>
        <li>Das MDT zeigt Taxi keine Akten der Behörden. Das ist Absicht.</li>
      </ul>` },
  ],

  // ===================================================================== MECHANIKER
  mechanic: [
    { title: "Grundsätze", icon: "fa-scale-balanced", body: `
      <p>East Customs repariert, wartet und schleppt Fahrzeuge ab. Sauber, ehrlich und nachvollziehbar.</p>
      <ul>
        <li>Nur Arbeiten ausführen, die der Kunde bestellt hat.</li>
        <li>Preise und Arbeiten werden vor dem Start abgesprochen.</li>
        <li>Kundenfahrzeuge werden nur für Probefahrten bewegt.</li>
        <li>Im Dienst keine Waffen, kein Alkohol und keine Drogen.</li>
      </ul>` },

    { title: "Werkstattaufträge", icon: "fa-screwdriver-wrench", body: `
      <p>Jedes Fahrzeug bekommt einen <b>Werkstattauftrag</b> im MDT.</p>
      <ol>
        <li>Kennzeichen, Modell, Kunde und zuständigen Mechaniker eintragen.</li>
        <li>Gewünschte Arbeiten und Kostenschätzung in die Vorlage schreiben.</li>
        <li>Status pflegen: <i>angenommen</i>, <i>in Arbeit</i>, <i>fertig</i>, <i>abgeholt</i>, <i>bezahlt</i>.</li>
        <li>Mit Tags arbeiten, zum Beispiel <i>Tuning</i>, <i>Unfall</i>, <i>Abschleppen</i>.</li>
      </ol>` },

    { title: "Rechnungen", icon: "fa-file-invoice-dollar", body: `
      <ul>
        <li>Jede abgeschlossene Arbeit bekommt eine Rechnung unter <b>Rechnungen</b>.</li>
        <li>Auf der Rechnung stehen alle Positionen, das Total und die Zahlungsart.</li>
        <li>Die Rechnung verweist auf die Auftrags-ID.</li>
        <li>Rabatte nur mit Zustimmung der Werkstattleitung.</li>
      </ul>` },

    { title: "Pannenhilfe und Abschleppen", icon: "fa-truck-pickup", body: `
      <p>Kunden rufen mit <b>/mechaniker</b> und einer kurzen Nachricht an. Der Auftrag erscheint als gelbes East-Customs-Popup, auf der Karte und unter <b>Offene Aufträge</b> in der Übersicht. Mit <b>E</b> nimmst du ihn an und bekommst den Wegpunkt.</p>
      <ol>
        <li>Einsatz im <b>Werkstattfunk</b> ansagen und unter <b>Besetzung</b> das Fahrzeug eintragen.</li>
        <li>An der Unfallstelle zuerst sichern: Warnblinker, Abstand, auf den Verkehr achten.</li>
        <li>Bei Verletzten zuerst <b>311</b>, bei Unfällen mit Sachschaden die Polizei informieren.</li>
        <li>Fahrzeuge an Unfallstellen erst abschleppen, wenn die Polizei es freigibt.</li>
      </ol>` },

    { title: "Zusammenarbeit mit der Polizei", icon: "fa-handshake", body: `
      <ul>
        <li>Abschleppaufträge der Polizei haben Vorrang. Beschlagnahmte Fahrzeuge werden nur an die Polizei herausgegeben.</li>
        <li>Fahrzeuge mit fehlendem Kennzeichen, beschädigtem Schloss oder offensichtlich gestohlen: nicht reparieren, sondern die Polizei rufen.</li>
        <li>Illegale Umbauten (z.B. verdunkelte Scheiben über der Grenze, Nitro im Strassenverkehr) werden nicht ausgeführt.</li>
      </ul>` },

    { title: "Sicherheit in der Werkstatt", icon: "fa-helmet-safety", body: `
      <ul>
        <li>Hebebühne nur von geschultem Personal bedienen.</li>
        <li>Werkzeug nach der Arbeit zurücklegen, Öl und Flüssigkeiten sofort aufnehmen.</li>
        <li>Bei Brand den Feuerlöscher nutzen und das <b>LSFD</b> alarmieren.</li>
      </ul>` },

    { title: "Datenschutz", icon: "fa-user-lock", body: `
      <ul>
        <li>Kundendaten und Fahrzeugdaten werden nur für den Auftrag genutzt.</li>
        <li>Auskunft über Kunden nur an die Polizei, wenn sie danach fragt.</li>
        <li>Das MDT zeigt der Werkstatt keine Akten der Behörden. Das ist Absicht.</li>
      </ul>` },
  ],
};
