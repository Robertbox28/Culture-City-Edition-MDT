Config = Config or {}

Config.UsingDefaultQBApartments = true
Config.OnlyShowOnDuty = true
Config.UseCQCMugshot = true

-- Front, Back Side. Use 4 for both sides, we recommend leaving at 1 for default.
Config.MugPhotos = 1

-- Images for mug shots will be uploaded here. Add a Discord webhook. 
Config.MugShotWebhook = '' -- eigenen Discord-Webhook eintragen (nicht öffentlich teilen!)

-- Clock-in notifications for duty. Add a Discord webhook.
-- Command /mdtleaderboard, will display top players per clock-in hours.
Config.ClockinWebhook = '' -- eigenen Discord-Webhook eintragen (nicht öffentlich teilen!)

-- If set to true = Fine gets automatically removed from bank automatically charging the player.
-- If set to false = The fine gets sent as an Invoice to their phone and it us to the player to pay for it, can remain unpaid and ignored.
Config.BillVariation = true

-- Set up your inventory to automatically retrieve images when a weapon is registered at a weapon shop or self-registered.
-- If you're utilizing lj-inventory's latest version from GitHub, no further modifications are necessary. 
-- However, if you're using a different inventory system, please refer to the "Inventory Edit | Automatic Add Weapons with images" section in ps-mdt's README.
Config.InventoryForWeaponsImages = "qb-inventory"

-- "LegacyFuel", "lj-fuel", "ps-fuel"
Config.Fuel = "LegacyFuel"

-- Telefonnummern im MDT (Profile, Beschlagnahmungen)
-- 'lb-phone' = Nummer aus LB Phone, 'qb' = Nummer aus QBCore (charinfo.phone)
-- 'auto'     = LB Phone, wenn die Resource läuft, sonst QBCore
Config.PhoneSystem = 'auto'

-- Nummer im Format von LB Phone anzeigen (z.B. "(555) 123-4567" statt "5551234567")
Config.LBPhoneFormatNumber = true

-- Externe Dienstanweisungen (optional). Leer = die eingebauten Dienstanweisungen im MDT.
-- Beispiel: ['police'] = 'Link zu eurem Dokument'
-- Nicht ausgefüllte Links werden nicht angezeigt.
Config.sopLink = {
    ['police'] = '',
    ['ambulance'] = '',
	['firefighter'] = '',
    ['bcso'] = '',
    ['doj'] = '',
    ['sast'] = '',
    ['sasp'] = '',
    ['doc'] = '',
	['lawyer'] = '',
    ['lssd'] = '',
    ['sapr'] = '',
}

-- Externer Dienstplan, z.B. eine Google-Tabelle (optional).
-- Beispiel: ['police'] = 'Link zu eurer Tabelle'
-- Nicht ausgefüllte Links werden nicht angezeigt.
Config.RosterLink = {
    ['police'] = '',
    ['ambulance'] = '',
	['firefighter'] = '',
    ['bcso'] = '',
    ['doj'] = '',
    ['sast'] = '',
    ['sasp'] = '',
    ['doc'] = '',
    ['lssd'] = '',
	['lawyer'] = '',
    ['sapr'] = '',	
}

Config.PoliceJobs = {
    ['police'] = true,
    ['lspd'] = true,
    ['bcso'] = true,
    ['sast'] = true,
    ['sasp'] = true,
    ['doc'] = true,
    ['lssd'] = true,
    ['sapr'] = true,
	['lawyer'] = true,
    ['pa'] = true
}

Config.AmbulanceJobs = {
    ['ambulance'] = true,
    ['doctor'] = true
}

-- LSFD: eigene Oberfläche & eigene Daten (jobtype 'fire')
Config.FireJobs = {
    ['firefighter'] = true,
}

-- Regierung: eigene Oberfläche & eigene Daten (jobtype 'gov')
-- Trage hier die Jobnamen deiner Regierung ein (wie in qb-core/shared/jobs.lua)
Config.GovJobs = {
    ['regierung'] = true,
    ['government'] = true,
    ['mayor'] = true,
}

-- Taxi: eigene Oberfläche mit Fahrtenbuch (jobtype 'taxi')
-- Kein Zugriff auf Akten, Vorfälle, Haftbefehle oder das Fahrzeugregister.
Config.TaxiJobs = {
    ['taxi'] = true,
}

-- Mechaniker: eigene Oberfläche mit Werkstattaufträgen (jobtype 'mechanic')
-- Kein Zugriff auf Akten, Vorfälle, Haftbefehle oder das Fahrzeugregister.
Config.MechanicJobs = {
    ['mechanic'] = true,
    ['bennys'] = true,
}

Config.DojJobs = {
    ['judge'] = true,
    ['judge'] = true
}

-- This is a workaround solution because the qb-menu present in qb-policejob fills in an impound location and sends it to the event. 
-- If the impound locations are modified in qb-policejob, the changes must also be implemented here to ensure consistency.

Config.ImpoundLocations = {
    [1] = vector4(436.68, -1007.42, 27.32, 180.0),
    [2] = vector4(-436.14, 5982.63, 31.34, 136.0),
}

-- Support for Wraith ARS 2X. 

Config.UseWolfknightRadar = true
Config.WolfknightNotifyTime = 5000 -- How long the notification displays for in milliseconds (30000 = 30 seconds)
Config.PlateScanForDriversLicense = true -- If true, plate scanner will check if the owner of the scanned vehicle has a drivers license

-- IMPORTANT: To avoid making excessive database queries, modify this config to true 'CONFIG.use_sonorancad = true' setting in the configuration file located at 'wk_wars2x/config.lua'. 
-- Enabling this setting will limit plate checks to only those vehicles that have been used by a player.

-- Wer die Personalprotokolle sieht.
-- [rang] = true  -> genau dieser Rang;  min = rang -> dieser Rang und höher
Config.LogPerms = {
	['taxi'] = { min = 3 },
	['mechanic'] = { min = 3 },
	['bennys'] = { min = 3 },
	['regierung'] = { min = 2 },
	['government'] = { min = 2 },
	['mayor'] = { min = 0 },
	['judge'] = { min = 0 },
	['ambulance'] = {
		[9] = true,
	},
	['firefighter'] = {
		[10] = true,
	},
	['police'] = {
		[18] = true,
	},
    ['bcso'] = {
		[4] = true,
	},
    ['sast'] = {
		[4] = true,
	},
    ['sasp'] = {
		[4] = true,
	},
    ['sapr'] = {
		[4] = true,
	},
    ['doc'] = {
		[4] = true,
	},
    ['lssd'] = {
		[4] = true,
	},
}

Config.RemoveIncidentPerms = {
	['ambulance'] = {
		[13] = true,
	},
	['firefighter'] = {
		[9] = true,
	},
	['police'] = {
		[18] = true,
	},
	['lawyer'] = {
		[10] = true,
	},
    ['bcso'] = {
		[4] = true,
	},
    ['sast'] = {
		[4] = true,
	},
    ['sasp'] = {
		[4] = true,
	},
    ['sapr'] = {
		[4] = true,
	},
    ['doc'] = {
		[4] = true,
	},
    ['lssd'] = {
		[4] = true,
	},
}

Config.RemoveReportPerms = {
	['ambulance'] = {
		[9] = true,
	},
	['firefighter'] = {
		[10] = true,
	},
	['police'] = {
		[18] = true,
	},
	['lawyer'] = {
		[10] = true,
	},
    ['bcso'] = {
		[4] = true,
	},
    ['sast'] = {
		[4] = true,
	},
    ['sasp'] = {
		[4] = true,
	},
    ['sapr'] = {
		[4] = true,
	},
    ['doc'] = {
		[4] = true,
	},
    ['lssd'] = {
		[4] = true,
	},
}

Config.RemoveWeaponsPerms = {
	['ambulance'] = {
		[9] = true,
	},
	['police'] = {
		[10] = true,
	},
	['lawyer'] = {
		[10] = true,
	},
    ['bcso'] = {
		[4] = true,
	},
    ['sast'] = {
		[4] = true,
	},
    ['sasp'] = {
		[4] = true,
	},
    ['sapr'] = {
		[4] = true,
	},
    ['doc'] = {
		[4] = true,
	},
    ['lssd'] = {
		[4] = true,
	},
}

-- Bussgeldkatalog Culture City (Polizei und Justiz · Spielgeld · Haft in Monaten)
-- Bei mehreren Vergehen werden Geldstrafen und Haftmonate addiert.
-- Klasse/Farbe: ohne Haft = Ordnungswidrigkeit (grün), unter 30 Mt. = Vergehen (orange), ab 30 Mt. = Verbrechen (rot)
Config.PenalCodeTitles = {
    [1] = '§ 1 ALLGEMEIN (StVO)',
    [2] = '§ 2 NORMALER STRASSENVERKEHR (StVO)',
    [3] = '§ 3 GESCHWINDIGKEIT INNERORTS UND AUF BUNDESSTRASSEN (StVO)',
    [4] = '§ 4 AUTOBAHN UND HIGHWAY (StVO)',
    [5] = '§ 1 WIRTSCHAFTSKRIMINALITÄT (StGB)',
    [6] = '§ 2 WAFFENGESETZ (StGB)',
    [7] = '§ 3 BETÄUBUNGSMITTELGESETZ (BTMG)',
    [8] = '§ 4 ALLGEMEINES (StGB)',
    [9] = '§ 5 TIERSCHUTZGESETZ (TierSchG)',
    [10] = '§ 6 LUFTVERKEHRSGESETZ (LuftVG)',
    [11] = '§ 7 UMWELTSCHUTZGESETZ (UmweltSG)',
}

Config.PenalCode = {
    [1] = {
        [1] = {title = 'Missbrauch von Sonder- und Wegerechten', class = 'Ordnungswidrigkeit', id = 'StVO §1 Abs. 1', months = 0, fine = 2000, color = 'green', description = 'Missbrauch von Sonder- und Wegerechten'},
        [2] = {title = 'Fahren ohne Führerschein', class = 'Ordnungswidrigkeit', id = 'StVO §1 Abs. 2', months = 0, fine = 500, color = 'green', description = 'Fahren ohne Führerschein'},
        [3] = {title = 'Falschparken', class = 'Ordnungswidrigkeit', id = 'StVO §1 Abs. 3', months = 0, fine = 500, color = 'green', description = 'Falschparken'},
        [4] = {title = 'Fahren abseits der Strasse', class = 'Ordnungswidrigkeit', id = 'StVO §1 Abs. 4', months = 0, fine = 300, color = 'green', description = 'Fahren abseits der Strasse'},
        [5] = {title = 'Fahren ohne Zulassung', class = 'Ordnungswidrigkeit', id = 'StVO §1 Abs. 5', months = 0, fine = 100, color = 'green', description = 'Fahren ohne Zulassung'},
        [6] = {title = 'Fahren ohne Licht bei Nacht', class = 'Ordnungswidrigkeit', id = 'StVO §1 Abs. 6', months = 0, fine = 100, color = 'green', description = 'Fahren ohne Licht bei Nacht'},
        [7] = {title = 'Defekte Scheinwerfer oder Rückleuchten', class = 'Ordnungswidrigkeit', id = 'StVO §1 Abs. 7', months = 0, fine = 250, color = 'green', description = 'Defekte Scheinwerfer oder Rückleuchten'},
        [8] = {title = 'Fahren unter Betäubungsmitteln', class = 'Ordnungswidrigkeit', id = 'StVO §1 Abs. 8', months = 0, fine = 650, color = 'green', description = 'Fahren unter Betäubungsmitteln'},
        [9] = {title = 'Fahren unter Alkohol', class = 'Ordnungswidrigkeit', id = 'StVO §1 Abs. 9', months = 0, fine = 500, color = 'green', description = 'Fahren unter Alkohol'},
    },
    [2] = {
        [1] = {title = 'Gezieltes Rammen von Fahrzeugen', class = 'Vergehen', id = 'StVO §2 Abs. 1', months = 10, fine = 1500, color = 'orange', description = 'Gezieltes Rammen von Fahrzeugen'},
        [2] = {title = 'Teilnahme an illegalen Strassenrennen', class = 'Vergehen', id = 'StVO §2 Abs. 2', months = 5, fine = 7500, color = 'orange', description = 'Teilnahme an illegalen Strassenrennen'},
        [3] = {title = 'Stoppschild überfahren', class = 'Ordnungswidrigkeit', id = 'StVO §2 Abs. 3', months = 0, fine = 500, color = 'green', description = 'Stoppschild überfahren'},
        [4] = {title = 'Missachtung von Rechtsvortritt (rechts vor links)', class = 'Ordnungswidrigkeit', id = 'StVO §2 Abs. 4', months = 0, fine = 100, color = 'green', description = 'rechts vor links'},
        [5] = {title = 'Strassenschilder beschädigen oder umfahren', class = 'Ordnungswidrigkeit', id = 'StVO §2 Abs. 5', months = 0, fine = 500, color = 'green', description = 'Strassenschilder beschädigen oder umfahren'},
        [6] = {title = 'Durchbrechen einer Polizeisperre (Sperrzone)', class = 'Vergehen', id = 'StVO §2 Abs. 6', months = 25, fine = 2500, color = 'orange', description = 'Sperrzone'},
        [7] = {title = 'Unachtsames Fahren', class = 'Ordnungswidrigkeit', id = 'StVO §2 Abs. 7', months = 0, fine = 350, color = 'green', description = 'Zusatz: 10 Sozialstunden'},
        [8] = {title = 'Rote Ampel überfahren', class = 'Ordnungswidrigkeit', id = 'StVO §2 Abs. 8', months = 0, fine = 500, color = 'green', description = 'Rote Ampel überfahren'},
        [9] = {title = 'Gefährdung des Strassenverkehrs', class = 'Vergehen', id = 'StVO §2 Abs. 9', months = 10, fine = 1500, color = 'orange', description = 'Gefährdung des Strassenverkehrs'},
    },
    [3] = {
        [1] = {title = 'Geschwindigkeitsüberschreitung (1 bis 25 km/h)', class = 'Ordnungswidrigkeit', id = 'StVO §3 Abs. 1', months = 0, fine = 250, color = 'green', description = '1 bis 25 km/h'},
        [2] = {title = 'Geschwindigkeitsüberschreitung (25 bis 50 km/h)', class = 'Ordnungswidrigkeit', id = 'StVO §3 Abs. 2', months = 0, fine = 500, color = 'green', description = '25 bis 50 km/h'},
        [3] = {title = 'Geschwindigkeitsüberschreitung (50 bis 100 km/h)', class = 'Ordnungswidrigkeit', id = 'StVO §3 Abs. 3', months = 0, fine = 750, color = 'green', description = '50 bis 100 km/h'},
        [4] = {title = 'Geschwindigkeitsüberschreitung (100 bis 150 km/h)', class = 'Ordnungswidrigkeit', id = 'StVO §3 Abs. 4', months = 0, fine = 1000, color = 'green', description = '100 bis 150 km/h · Zusatz: Führerscheinentzug'},
        [5] = {title = 'Geschwindigkeitsüberschreitung (150 bis 200 km/h)', class = 'Ordnungswidrigkeit', id = 'StVO §3 Abs. 5', months = 0, fine = 1500, color = 'green', description = '150 bis 200 km/h · Zusatz: Führerscheinentzug'},
        [6] = {title = 'Geschwindigkeitsüberschreitung (über 200 km/h)', class = 'Ordnungswidrigkeit', id = 'StVO §3 Abs. 6', months = 0, fine = 2000, color = 'green', description = 'über 200 km/h · Zusatz: Führerscheinentzug'},
    },
    [4] = {
        [1] = {title = 'Wenden oder Rückwärtsfahren', class = 'Ordnungswidrigkeit', id = 'StVO §4 Abs. 1', months = 0, fine = 1250, color = 'green', description = 'Wenden oder Rückwärtsfahren'},
        [2] = {title = 'Fahren auf der Gegenfahrbahn', class = 'Ordnungswidrigkeit', id = 'StVO §4 Abs. 2', months = 0, fine = 300, color = 'green', description = 'Fahren auf der Gegenfahrbahn'},
        [3] = {title = 'Halten und Parken', class = 'Ordnungswidrigkeit', id = 'StVO §4 Abs. 3', months = 0, fine = 800, color = 'green', description = 'Halten und Parken'},
        [4] = {title = 'Fahren auf dem Seitenstreifen', class = 'Ordnungswidrigkeit', id = 'StVO §4 Abs. 4', months = 0, fine = 500, color = 'green', description = 'Fahren auf dem Seitenstreifen'},
        [5] = {title = 'Zu Fuss auf der Autobahn', class = 'Ordnungswidrigkeit', id = 'StVO §4 Abs. 5', months = 0, fine = 150, color = 'green', description = 'Zusatz: 30 Sozialstunden'},
        [6] = {title = 'Mit dem Fahrrad auf der Autobahn', class = 'Ordnungswidrigkeit', id = 'StVO §4 Abs. 6', months = 0, fine = 150, color = 'green', description = 'Zusatz: 30 Sozialstunden'},
        [7] = {title = 'Offroad-Fahren ohne geeignetes Fahrzeug', class = 'Ordnungswidrigkeit', id = 'StVO §4 Abs. 7', months = 0, fine = 1000, color = 'green', description = 'Offroad-Fahren ohne geeignetes Fahrzeug'},
        [8] = {title = 'Befahren von Fuss- oder Wanderwegen (mit einem Fahrzeug)', class = 'Ordnungswidrigkeit', id = 'StVO §4 Abs. 8', months = 0, fine = 2500, color = 'green', description = 'mit einem Fahrzeug'},
    },
    [5] = {
        [1] = {title = 'Diebstahl', class = 'Vergehen', id = 'StGB §1 Abs. 1', months = 10, fine = 1000, color = 'orange', description = 'Diebstahl'},
        [2] = {title = 'Einbruchdiebstahl', class = 'Vergehen', id = 'StGB §1 Abs. 2', months = 15, fine = 1500, color = 'orange', description = 'Einbruchdiebstahl'},
        [3] = {title = 'Versuchter Diebstahl', class = 'Vergehen', id = 'StGB §1 Abs. 3', months = 5, fine = 500, color = 'orange', description = 'Versuchter Diebstahl'},
        [4] = {title = 'Fahrzeugdiebstahl', class = 'Vergehen', id = 'StGB §1 Abs. 4', months = 20, fine = 1750, color = 'orange', description = 'Fahrzeugdiebstahl'},
        [5] = {title = 'Raub', class = 'Vergehen', id = 'StGB §1 Abs. 5', months = 20, fine = 2000, color = 'orange', description = 'Raub'},
        [6] = {title = 'Schwerer Raub', class = 'Verbrechen', id = 'StGB §1 Abs. 6', months = 40, fine = 4000, color = 'red', description = 'Schwerer Raub'},
        [7] = {title = 'Korruption oder Bestechung', class = 'Verbrechen', id = 'StGB §1 Abs. 7', months = 60, fine = 80000, color = 'red', description = 'Korruption oder Bestechung'},
        [8] = {title = 'Keine Business-Lizenz', class = 'Vergehen', id = 'StGB §1 Abs. 8', months = 20, fine = 25000, color = 'orange', description = 'Keine Business-Lizenz'},
        [9] = {title = 'Keine ordnungsgemässe Buchhaltung', class = 'Vergehen', id = 'StGB §1 Abs. 9', months = 10, fine = 15000, color = 'orange', description = 'Keine ordnungsgemässe Buchhaltung'},
        [10] = {title = 'Hausfriedensbruch', class = 'Ordnungswidrigkeit', id = 'StGB §1 Abs. 10', months = 0, fine = 500, color = 'green', description = 'Hausfriedensbruch'},
        [11] = {title = 'Verletzung der Business-Lizenz (1. Verstoss)', class = 'Verbrechen', id = 'StGB §1 Abs. 11', months = 45, fine = 50000, color = 'red', description = '1. Verstoss · Zusatz: Lizenz weg, 1 Woche Sperre als Unternehmensleitung'},
        [12] = {title = 'Verletzung der Business-Lizenz (2. Verstoss)', class = 'Verbrechen', id = 'StGB §1 Abs. 12', months = 90, fine = 100000, color = 'red', description = '2. Verstoss · Zusatz: Lizenz weg, 2 Wochen Sperre als Unternehmensleitung'},
        [13] = {title = 'Verletzung der Business-Lizenz (3. Verstoss)', class = 'Verbrechen', id = 'StGB §1 Abs. 13', months = 135, fine = 150000, color = 'red', description = '3. Verstoss · Zusatz: Lizenz weg, 3 Wochen Sperre als Unternehmensleitung'},
        [14] = {title = 'Verletzung der Business-Lizenz (4. Verstoss)', class = 'Verbrechen', id = 'StGB §1 Abs. 14', months = 270, fine = 350000, color = 'red', description = '4. Verstoss · Zusatz: Lizenz weg, 4 Wochen Sperre als Unternehmensleitung'},
        [15] = {title = 'Betrug, leicht (bis 100\'000 $)', class = 'Vergehen', id = 'StGB §1 Abs. 15', months = 20, fine = 100000, color = 'orange', description = 'bis 100\'000 $'},
        [16] = {title = 'Betrug, mittel (bis 500\'000 $)', class = 'Verbrechen', id = 'StGB §1 Abs. 16', months = 35, fine = 500000, color = 'red', description = 'bis 500\'000 $'},
        [17] = {title = 'Betrug, schwer (ab 1\'000\'000 $)', class = 'Verbrechen', id = 'StGB §1 Abs. 17', months = 50, fine = 1000000, color = 'red', description = 'ab 1\'000\'000 $'},
        [18] = {title = 'Illegale Einreise', class = 'Verbrechen', id = 'StGB §1 Abs. 18', months = 60, fine = 25000, color = 'red', description = 'Illegale Einreise'},
        [19] = {title = 'Hehlerei (Kauf oder Verkauf gestohlener Ware)', class = 'Vergehen', id = 'StGB §1 Abs. 19', months = 15, fine = 2000, color = 'orange', description = 'Kauf oder Verkauf gestohlener Ware'},
        [20] = {title = 'Steuerhinterziehung', class = 'Vergehen', id = 'StGB §1 Abs. 20', months = 10, fine = 15000, color = 'orange', description = 'Steuerhinterziehung'},
        [21] = {title = 'Urkundenfälschung', class = 'Vergehen', id = 'StGB §1 Abs. 21', months = 20, fine = 5000, color = 'orange', description = 'Urkundenfälschung'},
        [22] = {title = 'Cyberkriminalität', class = 'Verbrechen', id = 'StGB §1 Abs. 22', months = 30, fine = 10000, color = 'red', description = 'Cyberkriminalität'},
    },
    [6] = {
        [1] = {title = 'Waffenhandel', class = 'Verbrechen', id = 'StGB §2 Abs. 1', months = 60, fine = 25000, color = 'red', description = 'Waffenhandel'},
        [2] = {title = 'Waffengebrauch', class = 'Verbrechen', id = 'StGB §2 Abs. 2', months = 45, fine = 16000, color = 'red', description = 'Waffengebrauch'},
        [3] = {title = 'Illegaler Waffenbesitz', class = 'Verbrechen', id = 'StGB §2 Abs. 3', months = 30, fine = 10000, color = 'red', description = 'Illegaler Waffenbesitz'},
        [4] = {title = 'Missbrauch von Handfeuerwaffen', class = 'Verbrechen', id = 'StGB §2 Abs. 4', months = 35, fine = 9500, color = 'red', description = 'Missbrauch von Handfeuerwaffen'},
        [5] = {title = 'Waffe tragen ohne Waffenschein', class = 'Vergehen', id = 'StGB §2 Abs. 5', months = 15, fine = 5000, color = 'orange', description = 'Waffe tragen ohne Waffenschein'},
        [6] = {title = 'Waffe offen in der Stadt tragen', class = 'Vergehen', id = 'StGB §2 Abs. 6', months = 10, fine = 2500, color = 'orange', description = 'Waffe offen in der Stadt tragen'},
        [7] = {title = 'Schuss in der Öffentlichkeit', class = 'Vergehen', id = 'StGB §2 Abs. 7', months = 25, fine = 8000, color = 'orange', description = 'Schuss in der Öffentlichkeit'},
    },
    [7] = {
        [1] = {title = 'Drogenbesitz (leicht)', class = 'Vergehen', id = 'BTMG §3 Abs. 1', months = 5, fine = 50, color = 'orange', description = 'leicht'},
        [2] = {title = 'Drogenbesitz (mittel)', class = 'Vergehen', id = 'BTMG §3 Abs. 2', months = 15, fine = 3000, color = 'orange', description = 'mittel'},
        [3] = {title = 'Drogenbesitz (schwer)', class = 'Verbrechen', id = 'BTMG §3 Abs. 3', months = 30, fine = 5000, color = 'red', description = 'schwer'},
        [4] = {title = 'Drogenhandel (leicht)', class = 'Vergehen', id = 'BTMG §3 Abs. 4', months = 10, fine = 1000, color = 'orange', description = 'leicht'},
        [5] = {title = 'Drogenhandel (mittel)', class = 'Verbrechen', id = 'BTMG §3 Abs. 5', months = 30, fine = 3000, color = 'red', description = 'mittel'},
        [6] = {title = 'Drogenhandel (schwer)', class = 'Verbrechen', id = 'BTMG §3 Abs. 6', months = 60, fine = 8000, color = 'red', description = 'schwer'},
        [7] = {title = 'Weitergabe oder Verkauf von BTM mit ärztlichem Attest', class = 'Verbrechen', id = 'BTMG §3 Abs. 7', months = 35, fine = 7500, color = 'red', description = 'Weitergabe oder Verkauf von BTM mit ärztlichem Attest'},
        [8] = {title = 'BTM-Nutzung ohne mitgeführtes oder mit abgelaufenem Attest', class = 'Vergehen', id = 'BTMG §3 Abs. 8', months = 15, fine = 2500, color = 'orange', description = 'BTM-Nutzung ohne mitgeführtes oder mit abgelaufenem Attest'},
        [9] = {title = 'Drogenherstellung', class = 'Verbrechen', id = 'BTMG §3 Abs. 9', months = 60, fine = 10000, color = 'red', description = 'Drogenherstellung'},
        [10] = {title = 'Drogenkonsum in der Öffentlichkeit', class = 'Vergehen', id = 'BTMG §3 Abs. 10', months = 5, fine = 500, color = 'orange', description = 'Drogenkonsum in der Öffentlichkeit'},
    },
    [8] = {
        [1] = {title = 'Körperverletzung', class = 'Vergehen', id = 'StGB §4 Abs. 1', months = 10, fine = 500, color = 'orange', description = 'Körperverletzung'},
        [2] = {title = 'Gefährliche Körperverletzung', class = 'Vergehen', id = 'StGB §4 Abs. 2', months = 25, fine = 1250, color = 'orange', description = 'Gefährliche Körperverletzung'},
        [3] = {title = 'Mord', class = 'Verbrechen', id = 'StGB §4 Abs. 3', months = 90, fine = 10000, color = 'red', description = 'Mord'},
        [4] = {title = 'Missbrauch von Notrufen', class = 'Ordnungswidrigkeit', id = 'StGB §4 Abs. 4', months = 0, fine = 800, color = 'green', description = 'Missbrauch von Notrufen'},
        [5] = {title = 'Amtsanmassung', class = 'Ordnungswidrigkeit', id = 'StGB §4 Abs. 5', months = 0, fine = 12500, color = 'green', description = 'Amtsanmassung'},
        [6] = {title = 'Betreten einer Sperrzone', class = 'Ordnungswidrigkeit', id = 'StGB §4 Abs. 6', months = 0, fine = 2500, color = 'green', description = 'Betreten einer Sperrzone'},
        [7] = {title = 'Kein Ausweis', class = 'Verbrechen', id = 'StGB §4 Abs. 7', months = 45, fine = 1000, color = 'red', description = 'Kein Ausweis'},
        [8] = {title = 'Widerstand gegen die Staatsgewalt', class = 'Vergehen', id = 'StGB §4 Abs. 8', months = 15, fine = 2500, color = 'orange', description = 'Widerstand gegen die Staatsgewalt'},
        [9] = {title = 'Tätlicher Angriff gegen die Staatsgewalt', class = 'Verbrechen', id = 'StGB §4 Abs. 9', months = 30, fine = 5000, color = 'red', description = 'Tätlicher Angriff gegen die Staatsgewalt'},
        [10] = {title = 'Geiselnahme', class = 'Vergehen', id = 'StGB §4 Abs. 10', months = 15, fine = 1500, color = 'orange', description = 'Geiselnahme'},
        [11] = {title = 'Freiheitsberaubung', class = 'Vergehen', id = 'StGB §4 Abs. 11', months = 5, fine = 1000, color = 'orange', description = 'Freiheitsberaubung'},
        [12] = {title = 'Unterlassene Hilfeleistung', class = 'Vergehen', id = 'StGB §4 Abs. 12', months = 15, fine = 1500, color = 'orange', description = 'Unterlassene Hilfeleistung'},
        [13] = {title = 'Versuchter Mord', class = 'Verbrechen', id = 'StGB §4 Abs. 13', months = 60, fine = 8000, color = 'red', description = 'Versuchter Mord'},
        [14] = {title = 'Sexueller Übergriff oder Nötigung', class = 'Verbrechen', id = 'StGB §4 Abs. 14', months = 95, fine = 11500, color = 'red', description = 'Sexueller Übergriff oder Nötigung'},
        [15] = {title = 'Erregung öffentlichen Ärgernisses', class = 'Verbrechen', id = 'StGB §4 Abs. 15', months = 80, fine = 10500, color = 'red', description = 'Erregung öffentlichen Ärgernisses'},
        [16] = {title = 'Beleidigung', class = 'Vergehen', id = 'StGB §4 Abs. 16', months = 15, fine = 2500, color = 'orange', description = 'Beleidigung'},
        [17] = {title = 'Fahrerflucht', class = 'Verbrechen', id = 'StGB §4 Abs. 17', months = 40, fine = 9000, color = 'red', description = 'Fahrerflucht'},
        [18] = {title = 'Sachbeschädigung', class = 'Ordnungswidrigkeit', id = 'StGB §4 Abs. 18', months = 0, fine = 3500, color = 'green', description = 'Sachbeschädigung'},
        [19] = {title = 'Falschaussage', class = 'Vergehen', id = 'StGB §4 Abs. 19', months = 10, fine = 5500, color = 'orange', description = 'Falschaussage'},
        [20] = {title = 'Selbstjustiz', class = 'Ordnungswidrigkeit', id = 'StGB §4 Abs. 20', months = 0, fine = 14500, color = 'green', description = 'Zusatz: Einweisung'},
        [21] = {title = 'Mittäterschaft', class = 'Ordnungswidrigkeit', id = 'StGB §4 Abs. 21', months = 0, fine = 3500, color = 'green', description = 'Mittäterschaft'},
        [22] = {title = 'Verstoss gegen das Vermummungsverbot', class = 'Ordnungswidrigkeit', id = 'StGB §4 Abs. 22', months = 0, fine = 17000, color = 'green', description = 'Verstoss gegen das Vermummungsverbot'},
        [23] = {title = 'Anstiftung zu einer Straftat', class = 'Verbrechen', id = 'StGB §4 Abs. 23', months = 35, fine = 10250, color = 'red', description = 'Anstiftung zu einer Straftat'},
        [24] = {title = 'Verleugnung', class = 'Vergehen', id = 'StGB §4 Abs. 24', months = 15, fine = 8250, color = 'orange', description = 'Verleugnung'},
        [25] = {title = 'Gaffen', class = 'Vergehen', id = 'StGB §4 Abs. 25', months = 16, fine = 6500, color = 'orange', description = 'Ordnungswidrigkeit'},
        [26] = {title = 'Behinderung der Einsatzkräfte', class = 'Vergehen', id = 'StGB §4 Abs. 26', months = 25, fine = 5000, color = 'orange', description = 'Behinderung der Einsatzkräfte'},
        [27] = {title = 'Fahrlässige Brandstiftung', class = 'Verbrechen', id = 'StGB §4 Abs. 27', months = 50, fine = 9500, color = 'red', description = 'Fahrlässige Brandstiftung'},
        [28] = {title = 'Androhung einer Straftat gegen die Staatsgewalt', class = 'Verbrechen', id = 'StGB §4 Abs. 28', months = 45, fine = 8500, color = 'red', description = 'Androhung einer Straftat gegen die Staatsgewalt'},
        [29] = {title = 'Androhung einer Straftat', class = 'Verbrechen', id = 'StGB §4 Abs. 29', months = 30, fine = 6500, color = 'red', description = 'Androhung einer Straftat'},
        [30] = {title = 'Totschlag', class = 'Verbrechen', id = 'StGB §4 Abs. 30', months = 75, fine = 9000, color = 'red', description = 'Totschlag'},
        [31] = {title = 'Entführung', class = 'Verbrechen', id = 'StGB §4 Abs. 31', months = 40, fine = 5000, color = 'red', description = 'Entführung'},
        [32] = {title = 'Flucht vor der Polizei', class = 'Vergehen', id = 'StGB §4 Abs. 32', months = 20, fine = 3000, color = 'orange', description = 'Flucht vor der Polizei'},
        [33] = {title = 'Behinderung der Justiz', class = 'Vergehen', id = 'StGB §4 Abs. 33', months = 20, fine = 4000, color = 'orange', description = 'Behinderung der Justiz'},
        [34] = {title = 'Mitgliedschaft in einer kriminellen Vereinigung', class = 'Verbrechen', id = 'StGB §4 Abs. 34', months = 60, fine = 20000, color = 'red', description = 'Mitgliedschaft in einer kriminellen Vereinigung'},
        [35] = {title = 'Ruhestörung', class = 'Ordnungswidrigkeit', id = 'StGB §4 Abs. 35', months = 0, fine = 500, color = 'green', description = 'Ruhestörung'},
    },
    [9] = {
        [1] = {title = 'Wilderei, exotische Tiere', class = 'Vergehen', id = 'TierSchG §5 Abs. 1', months = 20, fine = 10000, color = 'orange', description = 'Wilderei, exotische Tiere'},
        [2] = {title = 'Töten exotischer Tiere', class = 'Vergehen', id = 'TierSchG §5 Abs. 2', months = 25, fine = 13000, color = 'orange', description = 'Töten exotischer Tiere'},
        [3] = {title = 'Besitz exotischer Tiere', class = 'Verbrechen', id = 'TierSchG §5 Abs. 3', months = 30, fine = 15000, color = 'red', description = 'Besitz exotischer Tiere'},
        [4] = {title = 'Hehlerei mit exotischen Tieren', class = 'Verbrechen', id = 'TierSchG §5 Abs. 4', months = 40, fine = 20000, color = 'red', description = 'Hehlerei mit exotischen Tieren'},
        [5] = {title = 'Tierquälerei', class = 'Vergehen', id = 'TierSchG §5 Abs. 5', months = 25, fine = 2000, color = 'orange', description = 'Tierquälerei'},
        [6] = {title = 'Nicht artgerechte Haltung', class = 'Verbrechen', id = 'TierSchG §5 Abs. 6', months = 35, fine = 3000, color = 'red', description = 'Nicht artgerechte Haltung'},
        [7] = {title = 'Verstoss gegen ein Tierhalteverbot', class = 'Verbrechen', id = 'TierSchG §5 Abs. 7', months = 45, fine = 4000, color = 'red', description = 'Verstoss gegen ein Tierhalteverbot'},
    },
    [10] = {
        [1] = {title = 'Landen ausserhalb ausgewiesener Landeplätze', class = 'Ordnungswidrigkeit', id = 'LuftVG §6 Abs. 1', months = 0, fine = 15000, color = 'green', description = 'Landen ausserhalb ausgewiesener Landeplätze'},
        [2] = {title = 'Überfliegen von Sperrzonen', class = 'Verbrechen', id = 'LuftVG §6 Abs. 2', months = 50, fine = 5000, color = 'red', description = 'Überfliegen von Sperrzonen'},
        [3] = {title = 'Unachtsames Fliegen', class = 'Verbrechen', id = 'LuftVG §6 Abs. 3', months = 50, fine = 25000, color = 'red', description = 'Unachtsames Fliegen'},
        [4] = {title = 'Führen eines Fluggeräts ohne Lizenz', class = 'Ordnungswidrigkeit', id = 'LuftVG §6 Abs. 4', months = 0, fine = 1000, color = 'green', description = 'Führen eines Fluggeräts ohne Lizenz'},
        [5] = {title = 'Fliegen bei Nacht ohne Licht (defekte Beleuchtung)', class = 'Ordnungswidrigkeit', id = 'LuftVG §6 Abs. 5', months = 0, fine = 1500, color = 'green', description = 'defekte Beleuchtung'},
        [6] = {title = 'Unterschreiten der Mindestflughöhe (100 Meter)', class = 'Ordnungswidrigkeit', id = 'LuftVG §6 Abs. 6', months = 0, fine = 1000, color = 'green', description = '100 Meter'},
        [7] = {title = 'Fliegen unter Alkohol', class = 'Verbrechen', id = 'LuftVG §6 Abs. 7', months = 60, fine = 1500, color = 'red', description = 'Fliegen unter Alkohol'},
        [8] = {title = 'Fliegen unter Betäubungsmitteln', class = 'Verbrechen', id = 'LuftVG §6 Abs. 8', months = 60, fine = 1650, color = 'red', description = 'Fliegen unter Betäubungsmitteln'},
    },
    [11] = {
        [1] = {title = 'Bodenverunreinigung (mittel)', class = 'Verbrechen', id = 'UmweltSG §7 Abs. 1', months = 30, fine = 5000, color = 'red', description = 'mittel'},
        [2] = {title = 'Bodenverunreinigung (schwer)', class = 'Verbrechen', id = 'UmweltSG §7 Abs. 2', months = 55, fine = 11000, color = 'red', description = 'schwer'},
        [3] = {title = 'Gewässerverunreinigung (mittel)', class = 'Verbrechen', id = 'UmweltSG §7 Abs. 3', months = 40, fine = 7000, color = 'red', description = 'mittel'},
        [4] = {title = 'Gewässerverunreinigung (schwer)', class = 'Verbrechen', id = 'UmweltSG §7 Abs. 4', months = 75, fine = 13000, color = 'red', description = 'schwer'},
        [5] = {title = 'Luftverunreinigung (mittel)', class = 'Verbrechen', id = 'UmweltSG §7 Abs. 5', months = 50, fine = 9000, color = 'red', description = 'mittel'},
        [6] = {title = 'Luftverunreinigung (schwer)', class = 'Verbrechen', id = 'UmweltSG §7 Abs. 6', months = 95, fine = 15000, color = 'red', description = 'schwer'},
        [7] = {title = 'Littering (Abfall in der Öffentlichkeit entsorgen)', class = 'Ordnungswidrigkeit', id = 'UmweltSG §7 Abs. 7', months = 0, fine = 500, color = 'green', description = 'Abfall in der Öffentlichkeit entsorgen'},
    },
}

-- =====================================================================
-- Besetzung / Einteilung (Seite "Besetzung" im MDT)
-- =====================================================================
-- Ab welchem Rang (grade.level) darf die Einteilung bearbeitet werden?
-- Alle anderen sehen sie nur. "default" gilt für Jobs ohne eigenen Eintrag.
Config.AssignmentEditGrade = {
    default = 0,
    -- ['police'] = 2,
    -- ['firefighter'] = 1,
}

-- Maximale Anzahl Personen pro Einheit/Fahrzeug
Config.AssignmentMaxMembers = 6

-- Vorschläge im Feld "Fahrzeug" (frei überschreibbar), getrennt nach Behördentyp
Config.AssignmentVehicles = {
    police = { 'Streifenwagen', 'Interceptor', 'SUV', 'Motorrad', 'Zivilfahrzeug', 'Transporter', 'Helikopter' },
    ambulance = { 'Rettungswagen (RTW)', 'Notarzteinsatzfahrzeug (NEF)', 'Rettungshelikopter' },
    fire = { 'Löschfahrzeug (Engine)', 'Drehleiter (Ladder)', 'Rüstwagen', 'Tanklöschfahrzeug', 'Kommandowagen' },
    doj = { 'Dienstwagen' },
    gov = { 'Dienstlimousine', 'Gepanzerter SUV', 'Begleitfahrzeug', 'Regierungshelikopter' },
    taxi = { 'Taxi', 'Taxi-Van', 'Limousine', 'Shuttlebus' },
    mechanic = { 'Abschleppwagen', 'Flatbed', 'Pannenhilfe-Van', 'Werkstattwagen' },
}

Config.AllowedJobs = {}
for index, value in pairs(Config.PoliceJobs) do
    Config.AllowedJobs[index] = value
end
for index, value in pairs(Config.AmbulanceJobs) do
    Config.AllowedJobs[index] = value
end
for index, value in pairs(Config.DojJobs) do
    Config.AllowedJobs[index] = value
end
for index, value in pairs(Config.FireJobs) do
    Config.AllowedJobs[index] = value
end
for index, value in pairs(Config.GovJobs) do
    Config.AllowedJobs[index] = value
end
for index, value in pairs(Config.TaxiJobs) do
    Config.AllowedJobs[index] = value
end
for index, value in pairs(Config.MechanicJobs) do
    Config.AllowedJobs[index] = value
end

Config.ColorNames = {
    [0] = "Metallisch Schwarz",
    [1] = "Metallisch Graphitschwarz",
    [2] = "Metallisch Stahlschwarz",
    [3] = "Metallisch Dunkelsilber",
    [4] = "Metallisch Silber",
    [5] = "Metallisch Blausilber",
    [6] = "Metallisch Stahlgrau",
    [7] = "Metallisch Schattensilber",
    [8] = "Metallisch Steinsilber",
    [9] = "Metallisch Mitternachtssilber",
    [10] = "Metallisch Waffengrau",
    [11] = "Metallisch Anthrazitgrau",
    [12] = "Matt Schwarz",
    [13] = "Matt Grau",
    [14] = "Matt Hellgrau",
    [15] = "Util Schwarz",
    [16] = "Util Schwarz Poly",
    [17] = "Util Dunkelsilber",
    [18] = "Util Silber",
    [19] = "Util Waffengrau",
    [20] = "Util Schattensilber",
    [21] = "Abgenutzt Schwarz",
    [22] = "Abgenutzt Graphit",
    [23] = "Abgenutzt Silbergrau",
    [24] = "Abgenutzt Silber",
    [25] = "Abgenutzt Blausilber",
    [26] = "Abgenutzt Schattensilber",
    [27] = "Metallisch Rot",
    [28] = "Metallisch Torino Rot",
    [29] = "Metallisch Formel Rot",
    [30] = "Metallisch Glühend Rot",
    [31] = "Metallisch Anmutig Rot",
    [32] = "Metallisch Granatrot",
    [33] = "Metallisch Wüstenrot",
    [34] = "Metallisch Cabernet Rot",
    [35] = "Metallisch Bonbon Rot",
    [36] = "Metallisch Sonnenaufgang Orange",
    [37] = "Metallisch Klassisches Gold",
    [38] = "Metallisch Orange",
    [39] = "Matt Rot",
    [40] = "Matt Dunkelrot",
    [41] = "Matt Orange",
    [42] = "Matt Gelb",
    [43] = "Util Rot",
    [44] = "Util Leuchtend Rot",
    [45] = "Util Granatrot",
    [46] = "Abgenutzt Rot",
    [47] = "Abgenutzt Golden Rot",
    [48] = "Abgenutzt Dunkelrot",
    [49] = "Metallisch Dunkelgrün",
    [50] = "Metallisch Renngrün",
    [51] = "Metallisch Seegrün",
    [52] = "Metallisch Olivgrün",
    [53] = "Metallisch Grün",
    [54] = "Metallisch Benzin Blaugrün",
    [55] = "Matt Limonengrün",
    [56] = "Util Dunkelgrün",
    [57] = "Util Grün",
    [58] = "Abgenutzt Dunkelgrün",
    [59] = "Abgenutzt Grün",
    [60] = "Abgenutzt Seewaschung",
    [61] = "Metallisch Mitternachtsblau",
    [62] = "Metallisch Dunkelblau",
    [63] = "Metallisch Sachsenblau",
    [64] = "Metallisch Blau",
    [65] = "Metallisch Seemannsblau",
    [66] = "Metallisch Hafenblau",
    [67] = "Metallisch Diamantblau",
    [68] = "Metallisch Surfblau",
    [69] = "Metallisch Nautisch Blau",
    [70] = "Metallisch Leuchtend Blau",
    [71] = "Metallisch Lila Blau",
    [72] = "Metallisch Spinnaker Blau",
    [73] = "Metallisch Ultrablau",
    [74] = "Metallisch Leuchtend Blau",
    [75] = "Util Dunkelblau",
    [76] = "Util Mitternachtsblau",
    [77] = "Util Blau",
    [78] = "Util Meeresschaum Blau",
    [79] = "Util Blitzblau",
    [80] = "Util Maui Blau Poly",
    [81] = "Util Leuchtend Blau",
    [82] = "Matt Dunkelblau",
    [83] = "Matt Blau",
    [84] = "Matt Mitternachtsblau",
    [85] = "Abgenutzt Dunkelblau",
    [86] = "Abgenutzt Blau",
    [87] = "Abgenutzt Hellblau",
    [88] = "Metallisch Taxi Gelb",
    [89] = "Metallisch Renn Gelb",
    [90] = "Metallisch Bronze",
    [91] = "Metallisch Gelb Vogel",
    [92] = "Metallisch Limette",
    [93] = "Metallisch Champagner",
    [94] = "Metallisch Pueblo Beige",
    [95] = "Metallisch Dunkel Elfenbein",
    [96] = "Metallisch Schoko Braun",
    [97] = "Metallisch Golden Braun",
    [98] = "Metallisch Hellbraun",
    [99] = "Metallisch Stroh Beige",
    [100] = "Metallisch Moos Braun",
    [101] = "Metallisch Biston Braun",
    [102] = "Metallisch Buchenholz",
    [103] = "Metallisch Dunkel Buchenholz",
    [104] = "Metallisch Schoko Orange",
    [105] = "Metallisch Strand Sand",
    [106] = "Metallisch Sonnenverblasster Sand",
    [107] = "Metallisch Creme",
    [108] = "Util Braun",
    [109] = "Util Mittelbraun",
    [110] = "Util Hellbraun",
    [111] = "Metallisch Weiß",
    [112] = "Metallisch Frost Weiß",
    [113] = "Abgenutzt Honig Beige",
    [114] = "Abgenutzt Braun",
    [115] = "Abgenutzt Dunkelbraun",
    [116] = "Abgenutzt Stroh Beige",
    [117] = "Gebürsteter Stahl",
    [118] = "Gebürsteter Schwarzstahl",
    [119] = "Gebürstetes Aluminium",
    [120] = "Chrom",
    [121] = "Abgenutzt Off Weiß",
    [122] = "Util Off Weiß",
    [123] = "Abgenutzt Orange",
    [124] = "Abgenutzt Hellorange",
    [125] = "Metallisch Securicor Grün",
    [126] = "Abgenutzt Taxi Gelb",
    [127] = "Polizeiwagen Blau",
    [128] = "Matt Grün",
    [129] = "Matt Braun",
    [130] = "Abgenutzt Orange",
    [131] = "Matt Weiß",
    [132] = "Abgenutzt Weiß",
    [133] = "Abgenutzt Oliven Armeegrün",
    [134] = "Reines Weiß",
    [135] = "Heißes Pink",
    [136] = "Lachsrosa",
    [137] = "Metallisch Vermillion Pink",
    [138] = "Orange",
    [139] = "Grün",
    [140] = "Blau",
    [141] = "Metallisch Schwarz Blau",
    [142] = "Metallisch Schwarz Lila",
    [143] = "Metallisch Schwarz Rot",
    [144] = "Jägergrün",
    [145] = "Metallisch Lila",
    [146] = "Metallisch V Dunkelblau",
    [147] = "MODSHOP SCHWARZ1",
    [148] = "Matt Lila",
    [149] = "Matt Dunkellila",
    [150] = "Metallisch Lava Rot",
    [151] = "Matt Waldgrün",
    [152] = "Matt Oliv Drab",
    [153] = "Matt Wüstenbraun",
    [154] = "Matt Wüstensand",
    [155] = "Matt Laubgrün",
    [156] = "STANDARD ALUFARBEN",
    [157] = "Epsilon Blau",
    [158] = "Unbekannt",
}

Config.ColorInformation = {
    [0] = "schwarz",
    [1] = "schwarz",
    [2] = "schwarz",
    [3] = "dunkelsilber",
    [4] = "silber",
    [5] = "blausilber",
    [6] = "silber",
    [7] = "dunkelsilber",
    [8] = "silber",
    [9] = "blausilber",
    [10] = "dunkelsilber",
    [11] = "dunkelsilber",
    [12] = "mattschwarz",
    [13] = "grau",
    [14] = "hellgrau",
    [15] = "schwarz",
    [16] = "schwarz",
    [17] = "dunkelsilber",
    [18] = "silber",
    [19] = "utilgunmetal",
    [20] = "silber",
    [21] = "schwarz",
    [22] = "schwarz",
    [23] = "dunkelsilber",
    [24] = "silber",
    [25] = "blausilber",
    [26] = "dunkelsilber",
    [27] = "rot",
    [28] = "torinorot",
    [29] = "formularot",
    [30] = "blazerot",
    [31] = "gracefulrot",
    [32] = "granatrot",
    [33] = "wüstenrot",
    [34] = "cabernetrot",
    [35] = "candyrot",
    [36] = "orange",
    [37] = "gold",
    [38] = "orange",
    [39] = "rot",
    [40] = "mattedunkelrot",
    [41] = "orange",
    [42] = "mattegelb",
    [43] = "rot",
    [44] = "hellrot",
    [45] = "granatrot",
    [46] = "rot",
    [47] = "rot",
    [48] = "dunkelrot",
    [49] = "dunkelgrün",
    [50] = "racingreen",
    [51] = "seagrün",
    [52] = "olivgrün",
    [53] = "grün",
    [54] = "gasolinebluegreen",
    [55] = "mattlimonengrün",
    [56] = "dunkelgrün",
    [57] = "grün",
    [58] = "dunkelgrün",
    [59] = "grün",
    [60] = "seawash",
    [61] = "midnightblue",
    [62] = "dunkelblau",
    [63] = "sachsenblau",
    [64] = "blau",
    [65] = "blau",
    [66] = "blau",
    [67] = "diamantblau",
    [68] = "blau",
    [69] = "blau",
    [70] = "hellblau",
    [71] = "lilablau",
    [72] = "blau",
    [73] = "ultrablau",
    [74] = "hellblau",
    [75] = "dunkelblau",
    [76] = "midnightblau",
    [77] = "blau",
    [78] = "blau",
    [79] = "lightningblue",
    [80] = "blau",
    [81] = "hellblau",
    [82] = "mattedunkelblau",
    [83] = "mattblau",
    [84] = "mattblau",
    [85] = "dunkelblau",
    [86] = "blau",
    [87] = "lightningblue",
    [88] = "gelb",
    [89] = "gelb",
    [90] = "bronze",
    [91] = "gelb",
    [92] = "limone",
    [93] = "champagner",
    [94] = "beige",
    [95] = "dunkelivory",
    [96] = "braun",
    [97] = "braun",
    [98] = "hellbraun",
    [99] = "beige",
    [100] = "braun",
    [101] = "braun",
    [102] = "buchenholz",
    [103] = "buchenholz",
    [104] = "schokoladenorange",
    [105] = "gelb",
    [106] = "gelb",
    [107] = "creme",
    [108] = "braun",
    [109] = "braun",
    [110] = "braun",
    [111] = "weiß",
    [112] = "weiß",
    [113] = "beige",
    [114] = "braun",
    [115] = "braun",
    [116] = "beige",
    [117] = "stahl",
    [118] = "schwarzstahl",
    [119] = "aluminium",
    [120] = "chrom",
    [121] = "abgenutztweiß",
    [122] = "offweiß",
    [123] = "orange",
    [124] = "hellorange",
    [125] = "grün",
    [126] = "gelb",
    [127] = "blau",
    [128] = "grün",
    [129] = "braun",
    [130] = "orange",
    [131] = "weiß",
    [132] = "weiß",
    [133] = "dunkelgrün",
    [134] = "weiß",
    [135] = "rosa",
    [136] = "rosa",
    [137] = "rosa",
    [138] = "orange",
    [139] = "grün",
    [140] = "blau",
    [141] = "schwarzblau",
    [142] = "schwarzlila",
    [143] = "schwarzrot",
    [144] = "dunkelgrün",
    [145] = "lila",
    [146] = "dunkelblau",
    [147] = "schwarz",
    [148] = "lila",
    [149] = "dunkellila",
    [150] = "rot",
    [151] = "dunkelgrün",
    [152] = "olivgrün",
    [153] = "braun",
    [154] = "beige",
    [155] = "grün",
    [156] = "silber",
    [157] = "blau",
    [158] = "schwarz",
}

Config.ClassList = {
    [0] = "Kompakt",
    [1] = "Limousine",
    [2] = "SUV",
    [3] = "Coupé",
    [4] = "Muscle-Car",
    [5] = "Sportklassiker",
    [6] = "Sportwagen",
    [7] = "Super",
    [8] = "Motorrad",
    [9] = "Geländewagen",
    [10] = "Industriefahrzeug",
    [11] = "Nutzfahrzeug",
    [12] = "Van",
    [13] = "Fahrrad",
    [14] = "Boot",
    [15] = "Hubschrauber",
    [16] = "Flugzeug",
    [17] = "Dienstfahrzeug",
    [18] = "Einsatzfahrzeuge",
    [19] = "Militär",
    [20] = "Handelsfahrzeug",
    [21] = "Zug"
}

function GetJobType(job)
	if Config.PoliceJobs[job] then
		return 'police'
	elseif Config.AmbulanceJobs[job] then
		return 'ambulance'
	elseif Config.FireJobs[job] then
		return 'fire'
	elseif Config.GovJobs[job] then
		return 'gov'
	elseif Config.TaxiJobs[job] then
		return 'taxi'
	elseif Config.MechanicJobs[job] then
		return 'mechanic'
	elseif Config.DojJobs[job] then
		return 'doj'
	else
		return nil
	end
end
