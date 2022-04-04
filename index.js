require("dotenv").config();
const express = require("express");
const app = express();
const connectionDataBase = require("./src/database/connection.js");

connectionDataBase();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
