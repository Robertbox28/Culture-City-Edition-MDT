QBCore = exports['qb-core']:GetCoreObject()

Config = {}

Config.Enable = {}
Config.Timer = {}
Config.Locale = 'de'

-- Sets waypoint on map to most recent call and attachs you to the call. 
Config.RespondsKey = "E"

-- Enable if you only want to send alerts to onDuty officers
Config.OnDutyOnly = true

Config.PhoneModel = 'prop_npc_phone_02'

-- sets report chance to 100%
Config.DebugChance = true

-- Explosion Alert Types (Gas Pumps by default)
-- Ex.  Config.ExplosionTypes = {1, 2, 3, 4, 5}
Config.ExplosionTypes = {9}

-- Enable default alerts
Config.Enable.Speeding = false
Config.Enable.Shooting = true
Config.Enable.Autotheft = true
Config.Enable.Melee = true
Config.Enable.PlayerDowned = true

-- Enable alerts when cops break the law, also prints to console.
Config.Debug = false

-- Changes the min and max offset for the radius
Config.MinOffset = 1
Config.MaxOffset = 120

-- Locations for the Hunting Zones and No Dispatch Zones( Label: Name of Blip // Radius: Radius of the Alert and Blip)
Config.Locations = {
    ["hunting"] = {
        [1] = {label = "Hunting Zone", radius = 250.0, coords = vector3(-1261.14, 4681.87, 86.62)},
    },
    ["NoDispatch"] = {
        [1] = {label = "Ammunation 1", coords = vector3(13.53, -1097.92, 29.8), length = 14.0, width = 5.0, heading = 70, minZ = 28.8, maxZ = 32.8},
        [2] = {label = "Ammunation 2", coords = vector3(821.96, -2163.09, 29.62), length = 14.0, width = 5.0, heading = 270, minZ = 28.62, maxZ = 32.62},
		[3] = {label = "Ammunation 2", coords = vector3(-2141.76, 3276.51, 32.81), length = 30.0, width = 20.0, heading = 270, minZ = 28.62, maxZ = 32.62},
		[4] = {label = "Ammunation 2", coords = vector3(-2257.63, 3220.74, 32.81), length = 30.0, width = 20.0, heading = 270, minZ = 28.62, maxZ = 32.62},
    },
}

-- ============================================================
--  Behörden – abgestimmt auf ps-mdt (shared/config.lua)
--  LEO  = Config.PoliceJobs (ohne Anwälte)
--  EMS  = Config.AmbulanceJobs
--  FIRE = Config.FireJobs (LSFD)
--  Neue Jobs immer in BEIDEN Ressourcen eintragen.
-- ============================================================
local function MakeGroup(name)
    return function(PlyData)
        PlyData = PlyData or QBCore.Functions.GetPlayerData()
        if not PlyData or not PlyData.job then return false end
        local group = Config.AuthorizedJobs[name]
        return (group.Jobs[PlyData.job.name] or (PlyData.job.type and group.Types[PlyData.job.type])) and true or false
    end
end

Config.AuthorizedJobs = {
    LEO = { -- Polizei, Sheriff, Highway Patrol, Ranger, Gefängnis
        Label = 'Polizei',
        Jobs = {['police'] = true, ['lspd'] = true, ['bcso'] = true, ['lssd'] = true, ['sasp'] = true, ['sast'] = true, ['sapr'] = true, ['doc'] = true, ['fib'] = true, ['sheriff'] = true},
        Types = {['leo'] = true, ['police'] = true},
    },
    EMS = { -- Rettungsdienst
        Label = 'EMS',
        Jobs = {['ambulance'] = true, ['doctor'] = true},
        Types = {['ems'] = true},
    },
    FIRE = { -- Los Santos Fire Department
        Label = 'LSFD',
        Jobs = {['firefighter'] = true, ['fire'] = true},
        Types = {['fire'] = true},
    },
}
-- Dienstleister mit eigenem Auftrags-Dispatch (/taxi, /mechaniker).
-- Sie zählen NICHT als Einsatzkräfte (FirstResponder).
Config.AuthorizedJobs.TAXI = {
    Label = 'Taxi',
    Jobs = {['taxi'] = true},
    Types = {},
}
Config.AuthorizedJobs.MECH = {
    Label = 'East Customs',
    Jobs = {['mechanic'] = true, ['bennys'] = true},
    Types = {['mechanic'] = true},
}
Config.AuthorizedJobs.TAXI.Check = MakeGroup('TAXI')
Config.AuthorizedJobs.MECH.Check = MakeGroup('MECH')

-- Wartezeit zwischen zwei Bestellungen pro Spieler (Sekunden)
Config.ServiceCallCooldown = 60

Config.AuthorizedJobs.LEO.Check = MakeGroup('LEO')
Config.AuthorizedJobs.EMS.Check = MakeGroup('EMS')
Config.AuthorizedJobs.FIRE.Check = MakeGroup('FIRE')
Config.AuthorizedJobs.FirstResponder = { -- nicht ändern: Polizei, EMS oder LSFD
    Check = function(PlyData)
        return Config.AuthorizedJobs.LEO.Check(PlyData) or Config.AuthorizedJobs.EMS.Check(PlyData) or Config.AuthorizedJobs.FIRE.Check(PlyData)
    end
}

-- Mithörer: bekommen die Einsätze dieser Gruppen (Popup, Kartenpunkt, MDT),
-- werden aber nicht als Einheit an Einsätze angehängt.
Config.DispatchListeners = {
    ['lawyer'] = { 'LEO', 'FIRE' }, -- Anwälte hören Polizei und Feuerwehr mit
}

-- Hört dieser Spieler die Gruppe mit?
function IsDispatchListener(PlyData, group)
    PlyData = PlyData or QBCore.Functions.GetPlayerData()
    if not PlyData or not PlyData.job then return false end
    local groups = Config.DispatchListeners[PlyData.job.name]
    if not groups then return false end
    if not group then return true end
    for _, g in ipairs(groups) do
        if g == group then return true end
    end
    return false
end

-- Abteilung eines Spielers (für Farben im Popup und Einheiten im MDT)
function GetDispatchDepartment(PlyData)
    if Config.AuthorizedJobs.LEO.Check(PlyData) then return 'police' end
    if Config.AuthorizedJobs.FIRE.Check(PlyData) then return 'fire' end
    if Config.AuthorizedJobs.EMS.Check(PlyData) then return 'ems' end
    if Config.AuthorizedJobs.TAXI.Check(PlyData) then return 'taxi' end
    if Config.AuthorizedJobs.MECH.Check(PlyData) then return 'mechanic' end
    return nil
end

-- Gruppen (LEO, EMS, FIRE) in einzelne Jobnamen auflösen.
-- Das MDT filtert Einsätze nach Jobnamen, deshalb wird jede Liste erweitert.
function ExpandDispatchJobs(list)
    local out, seen = {}, {}
    local function add(v) if v and not seen[v] then seen[v] = true; out[#out + 1] = v end end
    for _, entry in ipairs(list or {}) do
        add(entry)
        local group = Config.AuthorizedJobs[entry]
        if group and group.Jobs then
            for job in pairs(group.Jobs) do add(job) end
        end
        -- Mithörer dieser Gruppe (z.B. Anwälte bei LEO und FIRE)
        for job, groups in pairs(Config.DispatchListeners or {}) do
            for _, g in ipairs(groups) do
                if g == entry then add(job) end
            end
        end
    end
    return out
end

for k, v in pairs(Config.Enable) do
    if Config.Enable[k] then
        Config[k] = {}
        Config.Timer[k] = 0 -- Default to 0 seconds
        Config[k].Success = 30 -- Default to 30 seconds
        Config[k].Fail = 2 -- Default to 2 seconds
    end
end

-- If you want to set specific timers, do it here
if Config.Shooting then
    Config.Shooting.Success = 10 -- 10 seconds
    Config.Shooting.Fail = 0 -- 0 seconds
end

if Config.PlayerDowned then
    Config.PlayerDowned.Success = 5 -- 5 seconds 
    Config.PlayerDowned.Fail = 0 -- 0 seconds
end

Config.WeaponBlacklist = {
    'WEAPON_GRENADE',
    'WEAPON_BZGAS',
    'WEAPON_MOLOTOV',
    'WEAPON_STICKYBOMB',
    'WEAPON_PROXMINE',
    'WEAPON_SNOWBALL',
    'WEAPON_PIPEBOMB',
    'WEAPON_BALL',
    'WEAPON_SMOKEGRENADE',
    'WEAPON_FLARE',
    'WEAPON_PETROLCAN',
    'WEAPON_FIREEXTINGUISHER',
    'WEAPON_HAZARDCAN',
    'WEAPON_RAYCARBINE',
    'WEAPON_STUNGUN'
}

Config.Colours = {
    ['0'] = "Schwarz metallic",
    ['1'] = "Schwarz metallic",
    ['2'] = "Schwarz-Stahl metallic",
    ['3'] = "Dunkelsilber metallic",
    ['4'] = "Silber metallic",
    ['5'] = "Silber metallic",
    ['6'] = "Grau metallic",
    ['7'] = "Silber metallic",
    ['8'] = "Silber metallic",
    ['9'] = "Dunkelsilber metallic",
    ['10'] = "Anthrazit metallic",
    ['11'] = "Grau metallic",
    ['12'] = "Schwarz matt",
    ['13'] = "Grau matt",
    ['14'] = "Hellgrau matt",
    ['15'] = "Schwarz matt",
    ['16'] = "Schwarz matt",
    ['17'] = "Dunkelsilber matt",
    ['18'] = "Silber matt",
    ['19'] = "Anthrazit matt",
    ['20'] = "Silber matt",
    ['21'] = "Schwarz verwittert",
    ['22'] = "Graphit verwittert",
    ['23'] = "Grau verwittert",
    ['24'] = "Silber verwittert",
    ['25'] = "Silber verwittert",
    ['26'] = "Silber verwittert",
    ['27'] = "Rot metallic",
    ['28'] = "Rot metallic",
    ['29'] = "Rot metallic",
    ['30'] = "Rot metallic",
    ['31'] = "Rot metallic",
    ['32'] = "Rot metallic",
    ['33'] = "Rot metallic",
    ['34'] = "Rot metallic",
    ['35'] = "Rot metallic",
    ['36'] = "Orange metallic",
    ['37'] = "Gold metallic",
    ['38'] = "Orange metallic",
    ['39'] = "Rot matt",
    ['40'] = "Dunkelrot matt",
    ['41'] = "Orange matt",
    ['42'] = "Gelb matt",
    ['43'] = "Rot matt",
    ['44'] = "Hellrot matt",
    ['45'] = "Rot matt",
    ['46'] = "Rot verwittert",
    ['47'] = "Rot verwittert",
    ['48'] = "Dunkelrot verwittert",
    ['49'] = "Dunkelgrün metallic",
    ['50'] = "Grün metallic",
    ['51'] = "Grün metallic",
    ['52'] = "Grün metallic",
    ['53'] = "Grün metallic",
    ['54'] = "Grün metallic",
    ['55'] = "Grün matt",
    ['56'] = "Dunkelgrün matt",
    ['57'] = "Grün matt",
    ['58'] = "Dunkelgrün verwittert",
    ['59'] = "Grün verwittert",
    ['60'] = "Grün verwittert",
    ['61'] = "Dunkelblau metallic",
    ['62'] = "Dunkelblau metallic",
    ['63'] = "Blau metallic",
    ['64'] = "Blau metallic",
    ['65'] = "Blau metallic",
    ['66'] = "Blau metallic",
    ['67'] = "Blau metallic",
    ['68'] = "Blau metallic",
    ['69'] = "Blau metallic",
    ['70'] = "Hellblau metallic",
    ['71'] = "Blau metallic",
    ['72'] = "Blau metallic",
    ['73'] = "Blau metallic",
    ['74'] = "Hellblau metallic",
    ['75'] = "Dunkelblau matt",
    ['76'] = "Dunkelblau matt",
    ['77'] = "Blau matt",
    ['78'] = "Blau matt",
    ['79'] = "Blau matt",
    ['80'] = "Blau matt",
    ['81'] = "Hellblau matt",
    ['82'] = "Dunkelblau matt",
    ['83'] = "Blau matt",
    ['84'] = "Dunkelblau matt",
    ['85'] = "Dunkelblau verwittert",
    ['86'] = "Blau verwittert",
    ['87'] = "Hellblau verwittert",
    ['88'] = "Gelb metallic",
    ['89'] = "Gelb metallic",
    ['90'] = "Bronze metallic",
    ['91'] = "Gelb metallic",
    ['92'] = "Limettengrün metallic",
    ['93'] = "Champagner metallic",
    ['94'] = "Beige metallic",
    ['95'] = "Elfenbein metallic",
    ['96'] = "Braun metallic",
    ['97'] = "Braun metallic",
    ['98'] = "Hellbraun metallic",
    ['99'] = "Beige metallic",
    ['100'] = "Braun metallic",
    ['101'] = "Braun metallic",
    ['102'] = "Braun metallic",
    ['103'] = "Dunkelbraun metallic",
    ['104'] = "Orange metallic",
    ['105'] = "Sandfarben metallic",
    ['106'] = "Sandfarben metallic",
    ['107'] = "Creme metallic",
    ['108'] = "Braun matt",
    ['109'] = "Braun matt",
    ['110'] = "Hellbraun matt",
    ['111'] = "Weiss metallic",
    ['112'] = "Weiss metallic",
    ['113'] = "Beige verwittert",
    ['114'] = "Braun verwittert",
    ['115'] = "Dunkelbraun verwittert",
    ['116'] = "Beige verwittert",
    ['117'] = "Stahl gebürstet",
    ['118'] = "Schwarz-Stahl gebürstet",
    ['119'] = "Aluminium gebürstet",
    ['120'] = "Chrom",
    ['121'] = "Altweiss verwittert",
    ['122'] = "Altweiss matt",
    ['123'] = "Orange verwittert",
    ['124'] = "Hellorange verwittert",
    ['125'] = "Grün metallic",
    ['126'] = "Gelb verwittert",
    ['127'] = "Polizeiblau",
    ['128'] = "Grün matt",
    ['129'] = "Braun matt",
    ['130'] = "Orange verwittert",
    ['131'] = "Weiss matt",
    ['132'] = "Weiss verwittert",
    ['133'] = "Grün verwittert",
    ['134'] = "Weiss",
    ['135'] = "Pink",
    ['136'] = "Lachsrosa",
    ['137'] = "Pink metallic",
    ['138'] = "Orange",
    ['139'] = "Grün",
    ['140'] = "Blau",
    ['141'] = "Schwarz-Blau metallic",
    ['142'] = "Schwarz-Lila metallic",
    ['143'] = "Schwarz-Rot metallic",
    ['144'] = "Dunkelgrün",
    ['145'] = "Lila metallic",
    ['146'] = "Dunkelblau metallic",
    ['147'] = "Schwarz",
    ['148'] = "Lila matt",
    ['149'] = "Dunkellila matt",
    ['150'] = "Rot metallic",
    ['151'] = "Grün matt",
    ['152'] = "Oliv matt",
    ['153'] = "Braun matt",
    ['154'] = "Sandfarben matt",
    ['155'] = "Grün matt",
    ['156'] = "Standard-Legierung",
    ['157'] = "Blau",
    ['158'] = "Gold",
    ['159'] = "Gold gebürstet",
    ['160'] = "Spezialfarbe"
}
