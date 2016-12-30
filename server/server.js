"use strict";

const express = require("express");
const path = require("path");
const routes = require('./routes');
const app = express();

app.use(express.static(path.join(__dirname, "../")))

app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), () => {
  console.log("listening on port: ", app.get("port"))
});
