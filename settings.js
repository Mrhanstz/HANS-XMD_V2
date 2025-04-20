//base by HANSTZ
//YouTube: @HANSTZ-TECH
//Whatsapp https://wa.me/255756530143
//GitHub: @Mrhanstz
//WhatsApp: https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31
//want more free bot scripts? follow my channel : https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31
const fs = require('fs')
const chalk = require('chalk')
//contact details
global.ownernomer = "263789085533"
global.ownername = "𝐷𝐸ℕ𝐵𝙊𝑌☆"
global.ytname = "HANSTZ-TECH"
global.socialm = "GitHub: Mrhanstz"
global.location = "AFRICA, TANZANIA, DODOMA"
global.ownernumber = '255756530143'  //creator number
global.ownername = 'HANSTZ' //owner name
global.botname = 'HANS-XMD' //name of the bot
//sticker details
global.packname = 'Sticker By'
global.author = 'HANS-XMD'
//console view/theme
global.themeemoji = '⚠️'
global.wm = "HANS BOT"
//theme link
global.link = 'https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31'
//custom prefix
global.prefa = ['','!','.','#','&']
//false=disable and true=enable


global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti91 = false //auto block +91 
global.autoswview = true //auto view status/story
global.autoreact = true // This is For Auto React 
global.welcome = true // For Welcome massage groups

global.typemenu = 'v1'
function _0x4ff5(){var _0x1862ca=['461943cvzJyc','606987HWlNfm','120sUPkBN','653808oZuEjX','215144biSZao','wagc','8yNGEiQ','695796mnzkIe','35ymLAiW','https://whatsapp.com/channel/0029VasiOoR3bbUw5aV4qB31','1715190RlHQzX','1756235FQJqPj'];_0x4ff5=function(){return _0x1862ca;};return _0x4ff5();}var _0x5e5818=_0x26ff;function _0x26ff(_0x1f8903,_0x5c6e2a){var _0x4ff5b6=_0x4ff5();return _0x26ff=function(_0x26ff46,_0x4e7621){_0x26ff46=_0x26ff46-0xa5;var _0x3d12dc=_0x4ff5b6[_0x26ff46];return _0x3d12dc;},_0x26ff(_0x1f8903,_0x5c6e2a);}(function(_0x5efd0b,_0x3b60b8){var _0x57cf94=_0x26ff,_0x5dd948=_0x5efd0b();while(!![]){try{var _0x222f31=parseInt(_0x57cf94(0xae))/0x1+parseInt(_0x57cf94(0xa8))/0x2+-parseInt(_0x57cf94(0xab))/0x3+-parseInt(_0x57cf94(0xa7))/0x4*(-parseInt(_0x57cf94(0xac))/0x5)+parseInt(_0x57cf94(0xb0))/0x6+-parseInt(_0x57cf94(0xa9))/0x7*(parseInt(_0x57cf94(0xa5))/0x8)+-parseInt(_0x57cf94(0xad))/0x9*(parseInt(_0x57cf94(0xaf))/0xa);if(_0x222f31===_0x3b60b8)break;else _0x5dd948['push'](_0x5dd948['shift']());}catch(_0x346b15){_0x5dd948['push'](_0x5dd948['shift']());}}}(_0x4ff5,0x6c744),global[_0x5e5818(0xa6)]=_0x5e5818(0xaa));
//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}
global.thumb = fs.readFileSync('./HansTzMedia/thumb.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
