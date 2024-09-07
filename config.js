const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255754640857";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255749750707";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_33_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNixcbiAgICAgICAgOTksXG4gICAgICAgIDkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg5LFxuICAgICAgICA1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg4LFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NixcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NixcbiAgICAgICAgMTA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDkxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICA4MixcbiAgICAgICAgNzksXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMyxcbiAgICAgICAgODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MSxcbiAgICAgICAgMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtMFRlZmpxbG9BZnN2cWx4aTZLTVVOdWVIanFNbWU5cTIwV3IraGVienl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkQUdoeE5kNlIxNnhtN2FoSGdXZzl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdlNWQ3ZmYwLTc4YTEtNDAyMC1hZThlLTYyYTM5YzYzNjdmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDIyNSxcbiAgICAgIDEzNyxcbiAgICAgIDE0OCxcbiAgICAgIDIzNSxcbiAgICAgIDEyMCxcbiAgICAgIDExOCxcbiAgICAgIDE0OCxcbiAgICAgIDk0LFxuICAgICAgNjQsXG4gICAgICAyMTksXG4gICAgICAxMjYsXG4gICAgICAyMjEsXG4gICAgICAxODcsXG4gICAgICAyMTcsXG4gICAgICAyMjQsXG4gICAgICAxNzgsXG4gICAgICAxNDEsXG4gICAgICAzLFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU0LFxuICAgICAgODUsXG4gICAgICAyMSxcbiAgICAgIDMsXG4gICAgICA3LFxuICAgICAgMjU1LFxuICAgICAgNTAsXG4gICAgICA4LFxuICAgICAgOSxcbiAgICAgIDM0LFxuICAgICAgMjQ2LFxuICAgICAgMjI0LFxuICAgICAgNzUsXG4gICAgICAzNyxcbiAgICAgIDUyLFxuICAgICAgMjExLFxuICAgICAgNzcsXG4gICAgICAxMDEsXG4gICAgICAxODEsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlY3MjRXSjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1NDY0MDg1Nzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVkBsbHlcIixcbiAgICBcImxpZFwiOiBcIjE1NTEyMTg1Mzk4NDk3NDo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09uL3YvSUZFT0x6OExZR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN3FmUTVsemFYSGxhWmlBZjhndVpmSkhSQVgvaVFPS2ZlR1A5UHVQR016Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEa2EwMHpzaVZESGdMaEU3a2RkaWk0R3JNYjJzY0pZREF5Q1krRW01QklsU1g2MlQ3eHFXOW1YaHVLN25rVnZRMWUxTkRCcGpNNHVScml2cml5ZXBDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6cFg3eWdUcmQ0UkNObGptZUxxbDhzd0xXajVPNU1CQWxuL0paOXBqWEFLaWUwNzdNdVp5c3ZWY2FYL094SEVMRkxXMW05NzRRTTMzcHNoUC83c0hCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NTQ2NDA4NTc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NzA4Nzc4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
