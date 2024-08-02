//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/FvoPdsxERs28sLt7hr50sE";
global.website = process.env.GURL || "https://chat.whatsapp.com/FvoPdsxERs28sLt7hr50sE";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://desmart";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255678292150";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 1;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "feilan";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "255678292150";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUd6Yk5JZ2p4b0ZMZTlaL0gyUGxHTlI0aE4zRWI1VWkvOEtpTmUxVVkxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmVSMDgyTkNwbWk5Nm53ZFU0TnNqck1xSSs0ODIwdkIxS00zQThOZmlDYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVT1JFL3FRbjFUbDNoRWpqSWRhV0VJTm4xd0lPZHRTeU5HY1BpRlJLVGxBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5cVB5YlYrSWUydEZDNVNQUFZXTmVjZEt5Q2k2SmtxZ3NsZmhmWGNVREhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDeERHaFRYU0x6cHFnVHJ4NU5qWEFTUzJUTmNEbmpUaGJSLzIwL0tPVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNMa0tORHdMNHRQTHRoRXRvNHFBRUYzRmZGSWZlVGx5dDdQaHl1blNMbDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0hBSjNza096M09Rc1RvUUVDbVNabFczTkRuSVc0aVl1alZNY0dtNGtWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGk5VEFnalJUSXpyVjdFVHdxdnVLNEk4R3hHYWUyNm52RnFXVzlGNWRXZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjF1NlVNUm9NeW1IQnNvdXJmcmxqcHlpcWJzSkNQZS9uSXlpaE1GYTNMQm1CVlZQRXMyakdOWDhyM2tIRVF2QlArNEVQWlByaVYzdTdPa3VLS09NRERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIzLCJhZHZTZWNyZXRLZXkiOiJxd0puaGh1UzJ1YnI1OXJ2MmRHc21JTGNNS0pxc3FFek1yMk9jMWN2cHhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTY3ODI5MjE1MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNzgzMzhDOTQ0MzI1QUEzNzRBNzExMTc3NDJERDBFRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNTg3MjE0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWY3EteDVjblNWbVc0ejM4RDE4TW13IiwicGhvbmVJZCI6ImU4ZDQ1NWRmLWU5NzAtNGE4Mi05M2Y3LTBlOTZlNmIzNWM0NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpdlE4TkJWdTYxMzVUTUJhNVdLNnhRazNXbHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRzJnK0pLQ1NOOGZEZzJtTGU0RWt3RVQrSXM0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZDUEJXM1NKIiwibWUiOnsiaWQiOiIyNTU2NzgyOTIxNTA6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn5CH8J+FtfCfhbTwn4W48J+Fu/CfhbDwn4W9In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQN2J2bG9RdXJDeXRRWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJJck5QSDZndmZpWnBsRGFVWGs1TGZDbmZvV2JwNVJ6dzhFaFgrZEtaM1ZFPSIsImFjY291bnRTaWduYXR1cmUiOiJEKytBWk5LeDhVck1PUjdha3dXM0Q3d0Z5QUNRbklabWFZcE5tVzloQVlrKzMwVVJBNUxwbVUrVWYvT29VTHVBdjdrc0hBdlp3MDErTkM1OTFHbWFBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZCtoRDNoZE5IeHBQMHgxbVFxZ0RVNVB5YjdBVVkvVFpDNXJLS1cwdm5ycGJTb094T2pSbmxxK2wwL1hlV3F0aXJZRGxLRFVJdU9mSW00ZmJiMDJBQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU2NzgyOTIxNTA6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTS3pUeCtvTDM0bWFaUTJsRjVPUzN3cDM2Rm02ZVVjOFBCSVYvblNtZDFSIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTg3MjA5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNNYiJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "FEILAN",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FEILAN-DESMART",
  ownername: process.env.OWNER_NAME || "FEILAN",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
