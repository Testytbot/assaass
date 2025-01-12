const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "auth_info_baileys",
  MONGODB:
    process.env.MONGODB ||
    "mongodb://mongo:dbWwtGuwyiFojnAfllpTJxvzalCVsUGc@:",
  OWNER_NUM: process.env.OWNER_NUM || "94704101989",
};
