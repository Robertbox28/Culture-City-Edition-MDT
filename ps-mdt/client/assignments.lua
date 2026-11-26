-- =====================================================================
--  ps-mdt  |  Besetzung / Einteilung (Client)
-- =====================================================================
local QBCore = exports['qb-core']:GetCoreObject()

RegisterNUICallback('getAssignments', function(_, cb)
    QBCore.Functions.TriggerCallback('mdt:server:getAssignments', function(result)
        cb(result or {})
    end)
end)

RegisterNUICallback('saveAssignment', function(data, cb)
    TriggerServerEvent('mdt:server:saveAssignment', data)
    cb(true)
end)

RegisterNUICallback('deleteAssignment', function(data, cb)
    TriggerServerEvent('mdt:server:deleteAssignment', data and data.id)
    cb(true)
end)

RegisterNUICallback('clearAssignments', function(_, cb)
    TriggerServerEvent('mdt:server:clearAssignments')
    cb(true)
end)

-- Fahrzeug, in dem der Spieler gerade sitzt (oder das zuletzt benutzte)
RegisterNUICallback('getCurrentVehicle', function(_, cb)
    local ped = PlayerPedId()
    local veh = GetVehiclePedIsIn(ped, false)
    if veh == 0 then veh = GetVehiclePedIsIn(ped, true) end
    if veh == 0 or not DoesEntityExist(veh) then return cb({}) end

    local model = GetEntityModel(veh)
    local label = GetLabelText(GetDisplayNameFromVehicleModel(model))
    if not label or label == 'NULL' then label = GetDisplayNameFromVehicleModel(model) end
    local plate = (GetVehicleNumberPlateText(veh) or ''):gsub('^%s+', ''):gsub('%s+$', '')
    cb({ model = label, plate = plate })
end)

RegisterNetEvent('mdt:client:assignments', function(rows, units)
    SendNUIMessage({ type = 'assignments', data = rows, units = units })
end)

RegisterNetEvent('mdt:client:assignmentSaved', function(id)
    SendNUIMessage({ type = 'assignmentSaved', id = id })
end)
