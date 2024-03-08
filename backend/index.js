const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.get("/", (req, res) => res.json("message"));


app.listen("8008", () => {
  console.log("Connected to localhost");
});
