require("dotenv").config();

const dev = {
  app: {
    port: process.env.PORT,
  },
  db: {
    db_url: process.env.DB_URL,
  },
};

module.exports = dev;
