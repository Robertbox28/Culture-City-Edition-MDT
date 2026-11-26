
--[[
	["vehicleshots"] -> dispatchcodename that you pass with the event of AlertGunShot
	displayCode -> Code to be displayed on the blip message
	description -> Description of the blip message
	radius -> to draw a circle with radius around blip ( the number need to have a  .0  behind it, for example 150.0 or 75.0 )
        -> if u want to have the radius without the blip just make the blipScale = 0
        -> if u want to have the radius centered, disable the offset
	recipientList -> Gruppen (LEO, EMS, FIRE) oder einzelne Jobnamen, die den Blip sehen
	blipSprite -> blip sprite
	blipColour -> blip colour
	blipScale -> blip scale
	blipLength -> time in seconds at which the blip will fade down, lower the time, faster it will fade. Cannot be 0
        offset -> enable or disable the offset for the radius ( radius on 0 and offset on true does nothing )
        blipflash -> enable or disable the flashing blip
]]--

dispatchCodes = {

	["vehicleshots"] =  {displayCode = '10-13', description = "Schüsse aus Fahrzeug", radius = 0, recipientList = {'LEO'}, blipSprite = 119, blipColour = 1, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["shooting"] =  {displayCode = '10-13', description = "Schüsse gemeldet", radius = 0, recipientList = {'LEO'}, blipSprite = 110, blipColour = 1, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["speeding"] =  {displayCode = '10-13', description = "Rücksichtsloses Fahren", radius = 0, recipientList = {'LEO'}, blipSprite = 326, blipColour = 84, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["fight"] =  {displayCode = '10-10', description = "Schlägerei im Gange", radius = 0, recipientList = {'LEO'}, blipSprite = 685, blipColour = 69, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["civdown"] =  {displayCode = '10-69', description = "Verletzte Person", radius = 0, recipientList = {'EMS', 'FIRE'}, blipSprite = 126, blipColour = 3, blipScale = 0.5, blipLength = 2, sound = "dispatch", offset = "false", blipflash = "false"},
	["civdead"] =  {displayCode = '10-69', description = "Person verblutet", radius = 0, recipientList = {'EMS', 'FIRE'}, blipSprite = 126, blipColour = 3, blipScale = 0.5, blipLength = 2, sound = "dispatch", offset = "false", blipflash = "false"},
	["911call"] =  {displayCode = '911', description = "Notruf 911", radius = 0, recipientList = {'LEO', 'EMS'}, blipSprite = 480, blipColour = 1, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["taxicall"] =  {displayCode = 'TAXI', description = "Taxi bestellt", radius = 0, recipientList = {'TAXI'}, blipSprite = 198, blipColour = 5, blipScale = 0.8, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["mechaniccall"] =  {displayCode = 'MECH', description = "Mechaniker angefordert", radius = 0, recipientList = {'MECH'}, blipSprite = 446, blipColour = 46, blipScale = 0.8, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["311call"] =  {displayCode = '311', description = "Notruf 311", radius = 0, recipientList = {'EMS', 'FIRE'}, blipSprite = 480, blipColour = 3, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["officerdown"] =  {displayCode = '10-99', description = "Beamter am Boden", radius = 15.0, recipientList = {'LEO', 'EMS', 'FIRE'}, blipSprite = 526, blipColour = 1, blipScale = 0.5, blipLength = 2, sound = "panicbutton", offset = "false", blipflash = "false"},
	["emsdown"] =  {displayCode = '10-99', description = "Rettungskraft am Boden", radius = 15.0, recipientList = {'LEO', 'EMS', 'FIRE'}, blipSprite = 526, blipColour = 3, blipScale = 0.5, blipLength = 2, sound = "panicbutton", offset = "false", blipflash = "false"},
	["storerobbery"] =  			{displayCode = '10-90', description = "Ladenraub im Gange", radius = 0, recipientList = {'LEO'}, blipSprite = 52, blipColour = 1, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["mz-storerobbery-register"] =  {displayCode = '10-90', description = "Ladenraub im Gange", radius = 0, recipientList = {'LEO'}, blipSprite = 52, blipColour = 1, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["mz-storerobbery-safe"] =  	{displayCode = '10-90', description = "Ladenraub im Gange", radius = 0, recipientList = {'LEO'}, blipSprite = 52, blipColour = 1, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["mz-storerobbery-liquor"] =  	{displayCode = '10-90', description = "Ladenraub im Gange", radius = 0, recipientList = {'LEO'}, blipSprite = 52, blipColour = 1, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["qb-storerobbery"] =  {displayCode = '10-90', description = "Ladenraub im Gange", radius = 0, recipientList = {'LEO'}, blipSprite = 350, blipColour = 1, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["bankrobbery"] =  {displayCode = '10-90', description = "Bankraub Fleeca", radius = 0, recipientList = {'LEO'}, blipSprite = 500, blipColour = 2, blipScale = 0.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["paletobankrobbery"] =  {displayCode = '10-90', description = "Bankraub Paleto", radius = 0, recipientList = {'LEO'}, blipSprite = 500, blipColour = 12, blipScale = 0.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["pacificbankrobbery"] =  {displayCode = '10-90', description = "Bankraub Pacific Standard", radius = 0, recipientList = {'LEO'}, blipSprite = 500, blipColour = 5, blipScale = 0.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["prisonbreak"] =  {displayCode = '10-90', description = "Gefängnisausbruch", radius = 0, recipientList = {'LEO'}, blipSprite = 189, blipColour = 59, blipScale = 0.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["vangelicorobbery"] =  {displayCode = '10-90', description = "Raub bei Vangelico", radius = 0, recipientList = {'LEO'}, blipSprite = 434, blipColour = 5, blipScale = 0.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["houserobbery"] =  {displayCode = '10-90', description = "Einbruch in Wohnhaus", radius = 0, recipientList = {'LEO'}, blipSprite = 40, blipColour = 5, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["suspicioushandoff"] =  {displayCode = '10-60', description = "Verdächtige Übergabe", radius = 120.0, recipientList = {'LEO'}, blipSprite = 469, blipColour = 52, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "true", blipflash = "false"},
	["yachtheist"] =  {displayCode = '10-65', description = "Überfall auf Yacht", radius = 0, recipientList = {'LEO'}, blipSprite = 455, blipColour = 60, blipScale = 0.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["vehicletheft"] =  {displayCode = '10-35', description = "Fahrzeugdiebstahl", radius = 0, recipientList = {'LEO'}, blipSprite = 595, blipColour = 60, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["signrobbery"] =  {displayCode = '10-35', description = "Diebstahl eines Verkehrsschilds", radius = 0, recipientList = {'LEO'}, blipSprite = 358, blipColour = 60, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["susactivity"] =  {displayCode = '10-66', description = "Verdächtige Aktivität", radius = 0, recipientList = {'LEO'}, blipSprite = 66, blipColour = 37, blipScale = 0.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},

	-- Rainmad Heists

	["artgalleryrobbery"] =  {displayCode = '10-90', description = "Raub in der Kunstgalerie", radius = 0, recipientList = {'LEO'}, blipSprite = 269, blipColour = 59, blipScale = 1.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["humanelabsrobbery"] =  {displayCode = '10-90', description = "Überfall auf Humane Labs", radius = 0, recipientList = {'LEO'}, blipSprite = 499, blipColour = 1, blipScale = 1.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["trainrobbery"] =  {displayCode = '10-90', description = "Zugüberfall", radius = 0, recipientList = {'LEO'}, blipSprite = 667, blipColour = 78, blipScale = 1.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["vanrobbery"] =  {displayCode = '10-90', description = "Überfall auf Geldtransporter", radius = 0, recipientList = {'LEO'}, blipSprite = 67, blipColour = 59, blipScale = 1.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["undergroundrobbery"] =  {displayCode = '10-90', description = "Überfall in den Tunneln", radius = 0, recipientList = {'LEO'}, blipSprite = 486, blipColour = 59, blipScale = 1.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["drugboatrobbery"] =  {displayCode = '10-31', description = "Verdächtige Aktivität auf Boot", radius = 0, recipientList = {'LEO'}, blipSprite = 427, blipColour = 26, blipScale = 1.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["unionrobbery"] =  {displayCode = '10-90', description = "Überfall auf Union Depository", radius = 0, recipientList = {'LEO'}, blipSprite = 500, blipColour = 60, blipScale = 1.5, blipLength = 2, sound = "robberysound", offset = "false", blipflash = "false"},
	["carboosting"] =  {displayCode = '10-50', description = "Car Boosting im Gange", radius = 0, recipientList = {'LEO'}, blipSprite = 595, blipColour = 60, blipScale = 1.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["carjack"] =  {displayCode = '10-35', description = "Fahrzeugdiebstahl", radius = 0, recipientList = {'LEO'}, blipSprite = 595, blipColour = 60, blipScale = 1.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["explosion"] =  {displayCode = '10-80', description = "Explosion gemeldet", radius = 0, recipientList = {'LEO', 'FIRE'}, blipSprite = 436, blipColour = 1, blipScale = 1.5, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
	["hunting"] =  {displayCode = '10-13', description = "Mögliche Wilderei", radius = 0, recipientList = {'LEO'}, blipSprite = 442, blipColour = 1, blipScale = 0, blipLength = 2, sound = "Lose_1st", sound2 = "GTAO_FM_Events_Soundset", offset = "false", blipflash = "false"},
}
