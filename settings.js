//base by HANSTZ
//YouTube: @HANSTZ-TECH
//Whatsapp https://whatsapp.com/channel/0029VbARrVYATRSr196egF2P
//GitHub: @Mrhanstz
//WhatsApp: https://whatsapp.com/channel/0029VbARrVYATRSr196egF2P
//want more free bot scripts? follow my channel : 
const fs = require('fs')
const chalk = require('chalk')
require('dotenv').config()

//contact details - sensitive info moved to .env
global.SESSION_ID = process.env.SESSION_ID || "HansTz&utQkhaga#H_0hXo_AIQX4AF5iz0r_xRp2wevRIbyh0goLruZGKfM" //fallback to default if not in .env
global.ownernomer = process.env.OWNER_NUMBER || "263785785040"

global.ownername = process.env.OWNER_NAME || "HansTech"

global.ytname = "Drewzulex"

global.socialm = "GitHub: Mrhanstz"

global.location = "AFRICA, TANZANIA, DODOMA"

global.ownernumber = process.env.OWNER_NUMBER || '263785785040'  //Owner number

global.ownername = process.env.OWNER_NAME || 'Drewzulex //owner name
global.botname = 'HANS-XMD' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = 'HANS-XMD'

//console view/theme
global.themeemoji = '⚠️'
global.wm = "HANS BOT"

//theme link
global.link = 'https://whatsapp.com/channel/0029VbARrVYATRSr196egF2P'

//custom prefix
global.prefa = ['','!','.','#','/']


//bot settings
global.autolikestatus = false //For auto react Status Random
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti91 = false //auto block +91 
global.autoswview = false //auto view status/story
global.autoreact = false // This is For Auto React 
global.welcome = false // For Welcome massage groups


global.wagc = "https://whatsapp.com/channel/0029VbARrVYATRSr196egF2P";

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
