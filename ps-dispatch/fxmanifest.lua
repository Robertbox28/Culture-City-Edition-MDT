fx_version 'cerulean'
game 'gta5'

version '1.4.3'
description 'Leitstelle für Culture City, abgestimmt auf ps-mdt – angepasst von Robertbox28 (https://robertbox28.ch/), Grundlage: ps-dispatch von Project Sloth'

shared_scripts {
    'config.lua',
    'locales/locales.lua',
}

client_scripts{
    '@PolyZone/client.lua',
    '@PolyZone/CircleZone.lua',
    '@PolyZone/BoxZone.lua',
    'client/cl_main.lua',
    'client/cl_events.lua',
    'client/cl_eventhandlers.lua',
    'client/cl_extraalerts.lua',
    'client/cl_commands.lua',
    'client/cl_loops.lua',
} 
server_script {
    'server/sv_dispatchcodes.lua',
    'server/sv_main.lua'
}

ui_page 'ui/index.html'

files {
    'ui/index.html',
    'ui/app.js',
    'ui/style.css',
}
