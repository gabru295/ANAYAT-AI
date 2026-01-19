const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pnMFVyY2kyUHJBTWNGUjBMYk9UMW0wd1hEMEMwaWFydkpNclhZc0VYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVNrWjBRcENuTnR2WlhUN1REQm53Zk4xbEN3cTZYUXhBUFRDU0RHZ01GWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUHJXa0RWakM2VHFLTE8wbkNqd0FDZzhsSzBtZkpWSHNWS21ucEZROG1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3QWd6SkdMUThQUjRTTGJrQXAxUnhORlVvU2pGUjRVTDVBMWpISlMwaGlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktCUTNRaXBaMkRhWWxCd08zbWdHVHRIK0oyWTBXL3NHcHdsNEtPSStQWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCSlBIYzFXdnpEcWN1MTErdEFTaWV6L0s4OTdvZGxka2YvTXlIM3ZjeW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ZWa3FBVnRLaVZ1OVhKVkpRaVgydzY0cU8xNkEzQWxBeFZ6M3FHOTQxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1lNU2R5MHhGNTduMXhRTjlHQWdhMUZQemcycnV1eThWVUtnVGJPODIzYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5QMFA3VHJYN0hMMjQ3UU5rTE9tTkRHVit2bURhTWNJaERZajZTVk52aWYrb1VUOE9TMjNuc211MDJvbGE0UDdXZWozTjVsNExvYlhkZU1YSlFkSkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiJzMU81cmVIMGdDVnA5K2U2QWljcXZkUFlVOVlCZ3ptNXNVMWUzZ3RBbTYwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAxNzkxOTc4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzgzOTJFNTIwNEQwNDNDN0E5QURFRDJFRjIxMUI0RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY4ODIwNTg1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwMTc5MTk3ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM5QTk2NkY0Q0M4OTYyNkFBRDA2QUE3QjY4OEI5RDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2ODgyMDU4NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMDE3OTE5Nzg4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNjg2RTVDNENGMDg0NTY0NDY5RjM2MEEzRTUxNkI3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njg4MjA1ODZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzAxNzkxOTc4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0EzNUFGNDkyOTZBODY4N0I1NDA1RkNCRTZEOEQ0NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY4ODIwNTg3fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllVUFJBREVWIiwibWUiOnsiaWQiOiI5MjMwMTc5MTk3ODg6MTJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI4NjM3Njk5Mzg3NTI5OjEyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT09EMjZnQ0VOcWV1TXNHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQlNidGtkUHQ3MTVFaGFmRkE4SDdtVk50ekMvKzlPZWlEV0JwdVVVVk5URT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZVdtWUVUeGRTMTQwT1FmV3AxcXBwVllnSTZya0FjbE9CZ3ZqdEw0WnNXMGJTL0lnd2JITWNTRXRxaHRCTWVpWjVnM1lqRVZFa2tzUTdHVzZMamg5Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IjZaWjYrWGxGenM4T0FVemw2REtnTUJRY3VmeTFheXlzcDJ4eUVzQXhCMDdaVUQwTmZMRWtNTTI4VlIzN1hZSldIcDI3dW5DTEtMdUI0MlNXRnU5MURnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDE3OTE5Nzg4OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFVbTdaSFQ3ZTllUklXbnhRUEIrNWxUYmN3di92VG5vZzFnYWJsRkZUVXgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZ2dTIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2ODgyMDU4NCwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEQmkifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*𝚂𝙴𝙴𝙽 𝚈𝙾𝚄𝚁 𝚂𝚃𝙰𝚃𝚄𝚂 𝙱𝚈 𝙰𝙽𝙰𝚈𝙰𝚃-𝙰𝙸 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/adhn5v.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ANAYAT-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ANAYAT-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923452401207",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝙰𝙽𝙰𝚈𝙰𝚃 𝙷𝙰𝙲𝙺𝙴𝚁",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙰𝙽𝙰𝚈𝙰𝚃-𝙰𝙸 ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://files.catbox.moe/2myos8.mp4",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "𝚉𝙸𝙽𝙳𝙰 𝙷𝚄𝙽 𝚈𝙰𝚁 🤖",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923452401207",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
