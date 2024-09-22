const mongoose = require("mongoose");
const config = require("./config");

const dbUrl = config.db.db_url;

mongoose
  .connect(dbUrl)
  .then(() => console.log("Db Is connected"))
  .catch((err) => console.error("DB connection error:", err));
