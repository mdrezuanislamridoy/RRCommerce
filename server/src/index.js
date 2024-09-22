const express = require("express");
const config = require("../config/config");
require("../config/db");
const routes = require("../routes/userRouter");
const cors = require("cors");

const app = express();
const port = config.app.port || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const path = require("path");

app.get("/user", (req, res) => {
  const filePath = path.join(__dirname, "../view/index.html");
  res.sendFile(filePath);
});

app.get((req, res) => {
  res.send("Server not find");
});

app.listen(port, () => {
  console.log("Db is running on port ", port);
});
