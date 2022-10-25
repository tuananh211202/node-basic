import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

// viewEngine
configViewEngine(app);

// initWebRoute
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
