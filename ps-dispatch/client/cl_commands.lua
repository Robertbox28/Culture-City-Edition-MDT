
local playAnim = false
local phoneProp = 0
local phoneModel = Config.PhoneModel


-- Item checks to return whether or not the client has a phone or not
local function HasPhone()
    return QBCore.Functions.HasItem("phone")
end


-- Loads the animdict so we can execute it on the ped
local function loadAnimDict(dict)
    RequestAnimDict(dict)

    while not HasAnimDictLoaded(dict) do
        Wait(0)
    end
end

local function DeletePhone()
	if phoneProp ~= 0 then
		DeleteObject(phoneProp)
		phoneProp = 0
	end
end

local function NewPropWhoDis()
	DeletePhone()
	RequestModel(phoneModel)
	while not HasModelLoaded(phoneModel) do
		Wait(1)
	end
	phoneProp = CreateObject(phoneModel, 1.0, 1.0, 1.0, 1, 1, 0)

	local bone = GetPedBoneIndex(PlayerPedId(), 28422)
	if phoneModel == Config.PhoneModel then
		AttachEntityToEntity(phoneProp, PlayerPedId(), bone, 0.0, 0.0, 0.0, 15.0, 0.0, 0.0, 1, 1, 0, 0, 2, 1)
	else
		AttachEntityToEntity(phoneProp, PlayerPedId(), bone, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1, 1, 0, 0, 2, 1)
	end
end

-- Does the actual animation of the animation when calling 911
local function PhoneCallAnim()
    loadAnimDict("cellphone@")
    local ped = PlayerPedId()
    CreateThread(function()
        NewPropWhoDis()
        playAnim = true
        while playAnim do
            if not IsEntityPlayingAnim(ped, "cellphone@", 'cellphone_text_to_call', 3) then
                TaskPlayAnim(ped, "cellphone@", 'cellphone_text_to_call', 3.0, 3.0, -1, 50, 0, false, false, false)
            end
            Wait(100)
        end
    end)
end


-- Regular 911 call that goes straight to the Police
RegisterCommand('911', function(source, args, rawCommand)
    local msg = rawCommand:sub(5)
    if string.len(msg) > 0 then
        if not exports['qb-policejob']:IsHandcuffed() then
            if HasPhone() then
                PhoneCallAnim()
                Wait(RandomNum(3,8) * 1000)
                playAnim = false
                local plyData = QBCore.Functions.GetPlayerData()
                local currentPos = GetEntityCoords(PlayerPedId())
                local locationInfo = getStreetandZone(currentPos)
                local gender = GetPedGender()
                TriggerServerEvent("dispatch:server:notify",{
                    dispatchcodename = "911call", -- has to match the codes in sv_dispatchcodes.lua so that it generates the right blip
                    dispatchCode = "911",
                    firstStreet = locationInfo,
                    priority = 2, -- priority
                    name = plyData.charinfo.firstname:sub(1,1):upper()..plyData.charinfo.firstname:sub(2).. " ".. plyData.charinfo.lastname:sub(1,1):upper()..plyData.charinfo.lastname:sub(2),
                    number = plyData.charinfo.phone,
                    origin = {
                        x = currentPos.x,
                        y = currentPos.y,
                        z = currentPos.z
                    },
                    dispatchMessage = "Eingehender Notruf", -- message
                    information = msg,
                    job = {"LEO", "EMS"} -- Notruf 911: Polizei und Rettungsdienst
                })
                Wait(1000)
                DeletePhone()
                StopEntityAnim(PlayerPedId(), 'cellphone_text_to_call', "cellphone@", 3)
            else
                QBCore.Functions.Notify("Du hast kein Telefon dabei!", "error", 4500)
            end
        else
            QBCore.Functions.Notify("Mit Handschellen kannst du keinen Notruf absetzen!", "error", 4500)
        end
    else
        QBCore.Functions.Notify('Please put a reason after the 911', "success")
    end
end)

RegisterCommand('911a', function(source, args, rawCommand)
    local msg = rawCommand:sub(5)
    if string.len(msg) > 0 then
        if not exports['qb-policejob']:IsHandcuffed() then
            if HasPhone() then
                PhoneCallAnim()
                Wait(RandomNum(3,8) * 1000)
                playAnim = false
                local plyData = QBCore.Functions.GetPlayerData()
                local currentPos = GetEntityCoords(PlayerPedId())
                local locationInfo = getStreetandZone(currentPos)
                local gender = GetPedGender()
                TriggerServerEvent("dispatch:server:notify",{
                    dispatchcodename = "911call", -- has to match the codes in sv_dispatchcodes.lua so that it generates the right blip
                    dispatchCode = "911",
                    firstStreet = locationInfo,
                    priority = 2, -- priority
                    name = "Anonym",
                    number = "Unterdrückte Nummer",
                    anonymous = true,
                    origin = {
                        x = currentPos.x,
                        y = currentPos.y,
                        z = currentPos.z
                    },
                    dispatchMessage = "Anonymer Notruf", -- message
                    information = msg,
                    job = {"LEO", "EMS"} -- Notruf 911: Polizei und Rettungsdienst
                })
                Wait(1000)
                DeletePhone()
                StopEntityAnim(PlayerPedId(), 'cellphone_text_to_call', "cellphone@", 3)
            else
                QBCore.Functions.Notify("Du hast kein Telefon dabei!", "error", 4500)
            end
        else
            QBCore.Functions.Notify("Mit Handschellen kannst du keinen Notruf absetzen!", "error", 4500)
        end
    else
        QBCore.Functions.Notify('Please put a reason after the 911', "success")
    end
end)

-- Regular 311 call that goes straight to the Police
RegisterCommand('311', function(source, args, rawCommand)
    local msg = rawCommand:sub(5)
    if string.len(msg) > 0 then
        if not exports['qb-policejob']:IsHandcuffed() then
            if HasPhone() then
                PhoneCallAnim()
                Wait(RandomNum(3,8) * 1000)
                playAnim = false
                local plyData = QBCore.Functions.GetPlayerData()
                local currentPos = GetEntityCoords(PlayerPedId())
                local locationInfo = getStreetandZone(currentPos)
                local gender = GetPedGender()
                TriggerServerEvent("dispatch:server:notify",{
                    dispatchcodename = "311call", -- has to match the codes in sv_dispatchcodes.lua so that it generates the right blip
                    dispatchCode = "311",
                    firstStreet = locationInfo,
                    priority = 2, -- priority
                    name = plyData.charinfo.firstname:sub(1,1):upper()..plyData.charinfo.firstname:sub(2).. " ".. plyData.charinfo.lastname:sub(1,1):upper()..plyData.charinfo.lastname:sub(2),
                    number = plyData.charinfo.phone,
                    origin = {
                        x = currentPos.x,
                        y = currentPos.y,
                        z = currentPos.z
                    },
                    dispatchMessage = "Eingehender Notruf", -- message
                    information = msg,
                    job = {"EMS", "FIRE"} -- Notruf 311: Rettungsdienst und LSFD
                })
                Wait(1000)
                DeletePhone()
                StopEntityAnim(PlayerPedId(), 'cellphone_text_to_call', "cellphone@", 3)
            else
                QBCore.Functions.Notify("Du hast kein Telefon dabei!", "error", 4500)
            end
        else
            QBCore.Functions.Notify("Mit Handschellen kannst du keinen Notruf absetzen!", "error", 4500)
        end
    else
        QBCore.Functions.Notify('Please put a reason after the 911', "success")
    end
end)

-- Regular 311 call that goes straight to the Police
RegisterCommand('311a', function(source, args, rawCommand)
    local msg = rawCommand:sub(5)
    if string.len(msg) > 0 then
        if not exports['qb-policejob']:IsHandcuffed() then
            if HasPhone() then
                PhoneCallAnim()
                Wait(RandomNum(3,8) * 1000)
                playAnim = false
                local plyData = QBCore.Functions.GetPlayerData()
                local currentPos = GetEntityCoords(PlayerPedId())
                local locationInfo = getStreetandZone(currentPos)
                local gender = GetPedGender()
                TriggerServerEvent("dispatch:server:notify",{
                    dispatchcodename = "311call", -- has to match the codes in sv_dispatchcodes.lua so that it generates the right blip
                    dispatchCode = "311",
                    firstStreet = locationInfo,
                    priority = 2, -- priority
                    name = "Anonym",
                    number = "Unterdrückte Nummer",
                    anonymous = true,
                    origin = {
                        x = currentPos.x,
                        y = currentPos.y,
                        z = currentPos.z
                    },
                    dispatchMessage = "Eingehender Notruf", -- message
                    information = msg,
                    job = {"EMS", "FIRE"} -- Notruf 311: Rettungsdienst und LSFD
                })
                Wait(1000)
                DeletePhone()
                StopEntityAnim(PlayerPedId(), 'cellphone_text_to_call', "cellphone@", 3)
            else
                QBCore.Functions.Notify("Du hast kein Telefon dabei!", "error", 4500)
            end
        else
            QBCore.Functions.Notify("Mit Handschellen kannst du keinen Notruf absetzen!", "error", 4500)
        end
    else
        QBCore.Functions.Notify('Please put a reason after the 911', "success")
    end
end)


Citizen.CreateThread(function()
    TriggerEvent('chat:addSuggestion', '/911', 'Notruf an Polizei und Rettungsdienst', {{ name="Nachricht", help="Was ist passiert?"}})
    TriggerEvent('chat:addSuggestion', '/911a', 'Anonymer Notruf an Polizei und Rettungsdienst', {{ name="Nachricht", help="Was ist passiert?"}})
    TriggerEvent('chat:addSuggestion', '/311', 'Notruf an Rettungsdienst und LSFD', {{ name="Nachricht", help="Was ist passiert?"}})
    TriggerEvent('chat:addSuggestion', '/311a', 'Anonymer Notruf an Rettungsdienst und LSFD', {{ name="Nachricht", help="Was ist passiert?"}})
end)


-- ============================================================
--  Taxi und Mechaniker bestellen
--  /taxi [Nachricht]        -> alle Taxifahrer im Dienst
--  /mechaniker [Nachricht]  -> alle Mechaniker im Dienst
--  Andere Skripte (z.B. eine Handy-App) können exports['ps-dispatch']:TaxiCall(msg)
--  bzw. exports['ps-dispatch']:MechanicCall(msg) nutzen.
-- ============================================================
local lastServiceCall = 0

local SERVICES = {
    taxi = {
        codename = "taxicall", code = "TAXI", group = "TAXI",
        message = "Taxi bestellt", default = "Bitte ein Taxi an meinen Standort.",
        sent = "Taxi bestellt. Ein Fahrer meldet sich.",
    },
    mechanic = {
        codename = "mechaniccall", code = "MECH", group = "MECH",
        message = "Mechaniker angefordert", default = "Panne, bitte einen Mechaniker an meinen Standort.",
        sent = "Mechaniker angefordert. East Customs meldet sich.",
    },
}

local function ServiceCall(kind, msg)
    local service = SERVICES[kind]
    if not service then return end
    local now = GetGameTimer()
    local cooldown = (Config.ServiceCallCooldown or 60) * 1000
    if lastServiceCall > 0 and now - lastServiceCall < cooldown then
        QBCore.Functions.Notify("Bitte warte kurz, bevor du erneut bestellst.", "error", 4500)
        return
    end
    if not HasPhone() then
        QBCore.Functions.Notify("Du hast kein Telefon dabei!", "error", 4500)
        return
    end
    lastServiceCall = now
    PhoneCallAnim()
    Wait(RandomNum(2, 5) * 1000)
    playAnim = false
    local plyData = QBCore.Functions.GetPlayerData()
    local currentPos = GetEntityCoords(PlayerPedId())
    local locationInfo = getStreetandZone(currentPos)
    TriggerServerEvent("dispatch:server:notify", {
        dispatchcodename = service.codename,
        dispatchCode = service.code,
        firstStreet = locationInfo,
        priority = 3,
        name = plyData.charinfo.firstname:sub(1,1):upper()..plyData.charinfo.firstname:sub(2).. " ".. plyData.charinfo.lastname:sub(1,1):upper()..plyData.charinfo.lastname:sub(2),
        number = plyData.charinfo.phone,
        origin = { x = currentPos.x, y = currentPos.y, z = currentPos.z },
        dispatchMessage = service.message,
        information = (msg and msg ~= "") and msg or service.default,
        job = { service.group },
    })
    Wait(1000)
    DeletePhone()
    StopEntityAnim(PlayerPedId(), 'cellphone_text_to_call', "cellphone@", 3)
    QBCore.Functions.Notify(service.sent, "success", 5000)
end

RegisterCommand('taxi', function(_, args)
    ServiceCall('taxi', table.concat(args, " "))
end, false)

RegisterCommand('mechaniker', function(_, args)
    ServiceCall('mechanic', table.concat(args, " "))
end, false)

exports('TaxiCall', function(msg) ServiceCall('taxi', msg) end)
exports('MechanicCall', function(msg) ServiceCall('mechanic', msg) end)

CreateThread(function()
    TriggerEvent('chat:addSuggestion', '/taxi', 'Taxi an deinen Standort bestellen', {{ name = "Nachricht", help = "Optional: Ziel, Anzahl Personen ..." }})
    TriggerEvent('chat:addSuggestion', '/mechaniker', 'Mechaniker an deinen Standort rufen', {{ name = "Nachricht", help = "Optional: Was ist kaputt?" }})
end)
