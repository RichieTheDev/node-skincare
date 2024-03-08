const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.get("/", (req, res) => res.json("message"));

mongoose.connect(
  "mongodb+srv://richiemomodu:<bNc79TfmMahrdDZr>@skincare.e7qjo7e.mongodb.net/",
);
app.listen("8008", () => {
  console.log("Connected to localhost");
});
