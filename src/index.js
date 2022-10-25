import configViewEngine from "./configs/viewEngine";
const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
