local QBCore = exports['qb-core']:GetCoreObject()

function GetPlayerData(source)
	local Player = QBCore.Functions.GetPlayer(source)
	return Player.PlayerData
end

function UnpackJob(data)
	local job = {
		name = data.name,
		label = data.label
	}
	local grade = {
		name = data.grade.name,
	}

	return job, grade
end

-- Taxi und Mechaniker: nur eigene Daten, keine Akten der Behörden
function IsServiceJob(job)
	return (Config.TaxiJobs[job] or Config.MechanicJobs[job]) and true or false
end

-- Darf dieser Spieler Personenakten, Haftbefehle und Lizenzen sehen?
function CanSeeRecords(src, PlayerData)
	if not PlayerData or not PlayerData.job then return false end
	if IsServiceJob(PlayerData.job.name) then return false end
	return Config.AllowedJobs[PlayerData.job.name] and true or false
end

function PermCheck(src, PlayerData)
	local result = true

	if not Config.AllowedJobs[PlayerData.job.name] then
		print(("UserId: %s(%d) tried to access the mdt even though they are not authorised (server direct)"):format(GetPlayerName(src), src))
		result = false
	end

	return result
end

-- Telefonnummer einer Person: zuerst LB Phone, sonst QBCore
-- target = Server-ID (online) oder Citizen-ID (auch offline)
local function UseLBPhone()
	local mode = Config.PhoneSystem or 'auto'
	if mode == 'qb' then return false end
	return GetResourceState('lb-phone') == 'started'
end

function GetPhoneNumber(target, fallback)
	if target and UseLBPhone() then
		local ok, number = pcall(function()
			return exports['lb-phone']:GetEquippedPhoneNumber(target)
		end)
		if ok and number and number ~= '' then
			if Config.LBPhoneFormatNumber then
				local okFormat, formatted = pcall(function()
					return exports['lb-phone']:FormatNumber(number)
				end)
				if okFormat and formatted and formatted ~= '' then return formatted end
			end
			return number
		end
	end
	return fallback
end

function ProfPic(gender, profilepic)
	if profilepic then return profilepic end;
	if gender == "f" then return "img/female.png" end;
	return "img/male.png"
end

function IsJobAllowedToMDT(job)
	if Config.PoliceJobs[job] then
		return true
	elseif Config.AmbulanceJobs[job] then
		return true
	elseif Config.FireJobs[job] then
		return true
	elseif Config.GovJobs[job] then
		return true
	elseif Config.TaxiJobs[job] or Config.MechanicJobs[job] then
		return true
	elseif Config.DojJobs[job] then
		return true
	else
		return false
	end
end

function GetNameFromPlayerData(PlayerData)
	return ('%s %s'):format(PlayerData.charinfo.firstname, PlayerData.charinfo.lastname)
end
