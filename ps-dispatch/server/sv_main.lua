local QBCore = exports['qb-core']:GetCoreObject()
local calls = {}

function _U(entry)
	return Locales[Config.Locale][entry] 
end

-- Telefonnummer aus LB Phone (falls installiert), sonst QBCore
local function GetCallerNumber(src, fallback)
	if GetResourceState('lb-phone') ~= 'started' then return fallback end
	local ok, number = pcall(function() return exports['lb-phone']:GetEquippedPhoneNumber(src) end)
	if not ok or not number then return fallback end
	local okFmt, formatted = pcall(function() return exports['lb-phone']:FormatNumber(number) end)
	return (okFmt and formatted) or number
end

RegisterServerEvent("dispatch:server:notify", function(data)
	local src = source
	if type(data) ~= 'table' then return end

	-- Gruppen (LEO, EMS, FIRE) in Jobnamen auflösen, damit das MDT die Einsätze anzeigt
	data.job = ExpandDispatchJobs(data.job or {'LEO'})
	if data.alert and data.alert.recipientList then
		data.alert.recipientList = ExpandDispatchJobs(data.alert.recipientList)
	end

	-- Nummer des Anrufers aus LB Phone (nicht bei anonymen Anrufen)
	if data.number and not data.anonymous then
		local Player = QBCore.Functions.GetPlayer(src)
		if Player and data.number == Player.PlayerData.charinfo.phone then
			data.number = GetCallerNumber(src, data.number)
		end
	end

	local newId = #calls + 1
	calls[newId] = data
    calls[newId]['source'] = source
    calls[newId]['callId'] = newId
    calls[newId]['units'] = {}
    calls[newId]['responses'] = {}
    calls[newId]['time'] = os.time() * 1000

	TriggerClientEvent('dispatch:clNotify', -1, data, newId, source)
    if not data.alert then 
        TriggerClientEvent("ps-dispatch:client:AddCallBlip", -1, data.origin, dispatchCodes[data.dispatchcodename], newId)
    else
        TriggerClientEvent("ps-dispatch:client:AddCallBlip", -1, data.origin, data.alert, newId)
    end
end)

function GetDispatchCalls() return calls end
exports('GetDispatchCalls', GetDispatchCalls) -- 

-- this is mdt call
AddEventHandler("dispatch:addUnit", function(callid, player, cb)
    if calls[callid] then
        if #calls[callid]['units'] > 0 then
            for i=1, #calls[callid]['units'] do
                if calls[callid]['units'][i]['cid'] == player.cid then
                    cb(#calls[callid]['units'])
                    return
                end
            end
        end

        local Player = QBCore.Functions.GetPlayerByCitizenId(player.cid) 
        if not Player then
            cb(#calls[callid]['units'])
            return
        end

        local department = GetDispatchDepartment(Player.PlayerData)
        if department then
            local labels = { police = 'Polizei', ems = 'EMS', fire = 'LSFD', taxi = 'Taxi', mechanic = 'Mechaniker' }
            calls[callid]['units'][#calls[callid]['units']+1] = { cid = player.cid, fullname = player.fullname, job = labels[department], department = department, callsign = player.callsign }
        end
        cb(#calls[callid]['units'])
    end
end)

AddEventHandler("dispatch:sendCallResponse", function(player, callid, message, time, cb)
    local Player = QBCore.Functions.GetPlayer(player)
    local name = Player.PlayerData.charinfo.firstname.. " " ..Player.PlayerData.charinfo.lastname
    if calls[callid] then
        calls[callid]['responses'][#calls[callid]['responses']+1] = {
            name = name,
            message = message,
            time = time
        }
        local player = calls[callid]['source']
        if GetPlayerPing(player) > 0 then
            TriggerClientEvent('dispatch:getCallResponse', player, message)
        end
        cb(true)
    else
        cb(false)
    end
end)

-- this is mdt call
AddEventHandler("dispatch:removeUnit", function(callid, player, cb)
    if calls[callid] then
        if #calls[callid]['units'] > 0 then
            for i = #calls[callid]['units'], 1, -1 do
                if calls[callid]['units'][i]['cid'] == player.cid then
                    table.remove(calls[callid]['units'], i)
                end
            end
        end
        cb(#calls[callid]['units'])
    end    
end)


RegisterCommand('togglealerts', function(source, args, user)
	local Player = QBCore.Functions.GetPlayer(source)
	if Player and (Config.AuthorizedJobs.FirstResponder.Check(Player.PlayerData) or IsDispatchListener(Player.PlayerData) or GetDispatchDepartment(Player.PlayerData)) then
		TriggerClientEvent('dispatch:manageNotifs', source, args[1])
	end
end)

-- Explosion Handler
local ExplosionCooldown = false
AddEventHandler('explosionEvent', function(source, info)
    if ExplosionCooldown then return end

    for i = 1, (#Config.ExplosionTypes) do
        if info.explosionType == Config.ExplosionTypes[i] then
            TriggerClientEvent("ps-dispatch:client:Explosion", source)
            ExplosionCooldown = true
            SetTimeout(1500, function()
                ExplosionCooldown = false
            end)
        end
    end
end)

QBCore.Commands.Add("cleardispatchblips", "Alle Einsatz-Markierungen entfernen", {}, false, function(source, args)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    if Config.AuthorizedJobs.FirstResponder.Check(Player.PlayerData) then
        TriggerClientEvent('ps-dispatch:client:clearAllBlips', src)
    end
end)
