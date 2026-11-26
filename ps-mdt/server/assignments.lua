-- =====================================================================
--  ps-mdt  |  Besetzung / Einteilung
--  Wer fährt mit wem in welchem Fahrzeug – getrennt pro Behörde (JobType)
-- =====================================================================
local QBCore = exports['qb-core']:GetCoreObject()

local STATUS = {
    available = true,  -- Verfügbar (10-8)
    busy      = true,  -- Im Einsatz
    pause     = true,  -- Pause (10-7)
    off       = true,  -- Ausser Dienst
}

-- Tabelle automatisch anlegen, damit kein SQL von Hand nötig ist
CreateThread(function()
    MySQL.query.await([[
        CREATE TABLE IF NOT EXISTS `mdt_assignments` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `jobtype` varchar(25) NOT NULL DEFAULT 'police',
            `unit` varchar(50) NOT NULL DEFAULT '',
            `vehicle` varchar(50) DEFAULT '',
            `plate` varchar(12) DEFAULT '',
            `status` varchar(20) DEFAULT 'available',
            `members` longtext DEFAULT NULL,
            `note` varchar(255) DEFAULT '',
            `updated_by` varchar(100) DEFAULT '',
            `updated_at` int(11) DEFAULT 0,
            PRIMARY KEY (`id`),
            KEY `jobtype` (`jobtype`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ]])
end)

local function Trim(value, maxLen)
    if type(value) ~= 'string' then return '' end
    value = value:gsub('^%s+', ''):gsub('%s+$', '')
    if #value > maxLen then value = value:sub(1, maxLen) end
    return value
end

local function Capitalize(str)
    if type(str) ~= 'string' or str == '' then return '' end
    return str:sub(1, 1):upper() .. str:sub(2)
end

local function CanEdit(PlayerData)
    local perms = Config.AssignmentEditGrade or {}
    local minGrade = perms[PlayerData.job.name]
    if minGrade == nil then minGrade = perms.default or 0 end
    local level = (PlayerData.job.grade and PlayerData.job.grade.level) or 0
    return level >= minGrade
end

local function DecodeMembers(raw)
    if type(raw) ~= 'string' or raw == '' then return {} end
    local ok, data = pcall(json.decode, raw)
    if ok and type(data) == 'table' then return data end
    return {}
end

local function GetAssignments(jobType)
    local rows = MySQL.query.await('SELECT * FROM `mdt_assignments` WHERE `jobtype` = ? ORDER BY `unit`, `id`', { jobType }) or {}
    for _, row in ipairs(rows) do
        row.members = DecodeMembers(row.members)
    end
    return rows
end

-- Alle Spieler dieser Behörde, die gerade online sind (unabhängig davon, ob das MDT offen ist)
local function GetUnits(jobType)
    local units = {}
    for _, src in pairs(QBCore.Functions.GetPlayers()) do
        local Player = QBCore.Functions.GetPlayer(src)
        if Player then
            local pd = Player.PlayerData
            if GetJobType(pd.job.name) == jobType then
                units[#units + 1] = {
                    cid = pd.citizenid,
                    name = Capitalize(pd.charinfo.firstname) .. ' ' .. Capitalize(pd.charinfo.lastname),
                    callsign = pd.metadata and pd.metadata['callsign'] or '',
                    job = pd.job.name,
                    grade = pd.job.grade and pd.job.grade.name or '',
                    duty = pd.job.onduty and true or false,
                }
            end
        end
    end
    table.sort(units, function(a, b) return (a.callsign or '') < (b.callsign or '') end)
    return units
end

local function Broadcast(jobType)
    local rows = GetAssignments(jobType)
    local units = GetUnits(jobType)
    for _, src in pairs(QBCore.Functions.GetPlayers()) do
        local Player = QBCore.Functions.GetPlayer(src)
        if Player and GetJobType(Player.PlayerData.job.name) == jobType then
            TriggerClientEvent('mdt:client:assignments', src, rows, units)
        end
    end
end

QBCore.Functions.CreateCallback('mdt:server:getAssignments', function(source, cb)
    local Player = QBCore.Functions.GetPlayer(source)
    if not Player then return cb({}) end
    local PlayerData = Player.PlayerData
    if not PermCheck(source, PlayerData) then return cb({}) end
    local jobType = GetJobType(PlayerData.job.name)
    cb({
        assignments = GetAssignments(jobType),
        units = GetUnits(jobType),
        canEdit = CanEdit(PlayerData),
        vehicles = (Config.AssignmentVehicles or {})[jobType] or {},
        maxMembers = Config.AssignmentMaxMembers or 6,
        me = PlayerData.citizenid,
    })
end)

RegisterNetEvent('mdt:server:saveAssignment', function(data)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    if not Player or type(data) ~= 'table' then return end
    local PlayerData = Player.PlayerData
    if not PermCheck(src, PlayerData) then return end
    if not CanEdit(PlayerData) then
        TriggerClientEvent('QBCore:Notify', src, 'Du darfst die Einteilung nicht bearbeiten.', 'error')
        return
    end

    local jobType = GetJobType(PlayerData.job.name)
    local unit = Trim(data.unit, 50)
    if unit == '' then
        TriggerClientEvent('QBCore:Notify', src, 'Bitte einen Funkrufnamen angeben.', 'error')
        return
    end

    local status = STATUS[data.status] and data.status or 'available'
    local maxMembers = Config.AssignmentMaxMembers or 6

    -- Besatzung prüfen: nur Spieler derselben Behörde, keine Doppelten
    local valid, seen = {}, {}
    local units = GetUnits(jobType)
    local unitByCid = {}
    for _, u in ipairs(units) do unitByCid[u.cid] = u end

    if type(data.members) == 'table' then
        for _, m in ipairs(data.members) do
            local cid = type(m) == 'table' and Trim(m.cid, 20) or ''
            if cid ~= '' and not seen[cid] and #valid < maxMembers then
                seen[cid] = true
                local online = unitByCid[cid]
                valid[#valid + 1] = {
                    cid = cid,
                    name = online and online.name or Trim(m.name, 60),
                    callsign = online and online.callsign or Trim(m.callsign, 10),
                }
            end
        end
    end

    local id = tonumber(data.id) or 0
    local editor = GetNameFromPlayerData(PlayerData)
    local params = {
        unit = unit,
        vehicle = Trim(data.vehicle, 50),
        plate = Trim(data.plate, 12):upper(),
        status = status,
        members = json.encode(valid),
        note = Trim(data.note, 255),
        by = editor,
        at = os.time(),
        jt = jobType,
    }

    if id > 0 then
        params.id = id
        MySQL.update.await('UPDATE `mdt_assignments` SET `unit`=:unit, `vehicle`=:vehicle, `plate`=:plate, `status`=:status, `members`=:members, `note`=:note, `updated_by`=:by, `updated_at`=:at WHERE `id`=:id AND `jobtype`=:jt', params)
    else
        id = MySQL.insert.await('INSERT INTO `mdt_assignments` (`jobtype`, `unit`, `vehicle`, `plate`, `status`, `members`, `note`, `updated_by`, `updated_at`) VALUES (:jt, :unit, :vehicle, :plate, :status, :members, :note, :by, :at)', params)
    end

    -- Ein Beamter kann nur in einer Einheit sein: aus allen anderen Einheiten entfernen
    if next(seen) then
        for _, row in ipairs(GetAssignments(jobType)) do
            if row.id ~= id then
                local keep, changed = {}, false
                for _, m in ipairs(row.members) do
                    if seen[m.cid] then changed = true else keep[#keep + 1] = m end
                end
                if changed then
                    MySQL.update.await('UPDATE `mdt_assignments` SET `members` = ? WHERE `id` = ?', { json.encode(keep), row.id })
                end
            end
        end
    end

    AddLog(('Einteilung "%s" wurde von %s gespeichert.'):format(unit, editor), jobType)
    TriggerClientEvent('mdt:client:assignmentSaved', src, id)
    Broadcast(jobType)
end)

RegisterNetEvent('mdt:server:deleteAssignment', function(id)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    if not Player then return end
    local PlayerData = Player.PlayerData
    if not PermCheck(src, PlayerData) or not CanEdit(PlayerData) then return end
    id = tonumber(id)
    if not id then return end
    local jobType = GetJobType(PlayerData.job.name)
    MySQL.query.await('DELETE FROM `mdt_assignments` WHERE `id` = ? AND `jobtype` = ?', { id, jobType })
    AddLog(('Einteilung #%d wurde von %s gelöscht.'):format(id, GetNameFromPlayerData(PlayerData)), jobType)
    Broadcast(jobType)
end)

RegisterNetEvent('mdt:server:clearAssignments', function()
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    if not Player then return end
    local PlayerData = Player.PlayerData
    if not PermCheck(src, PlayerData) or not CanEdit(PlayerData) then return end
    local jobType = GetJobType(PlayerData.job.name)
    MySQL.query.await('DELETE FROM `mdt_assignments` WHERE `jobtype` = ?', { jobType })
    AddLog(('Die gesamte Einteilung wurde von %s zurückgesetzt.'):format(GetNameFromPlayerData(PlayerData)), jobType)
    Broadcast(jobType)
end)
