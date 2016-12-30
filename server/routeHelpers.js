"use strict";

const db = require("../db/config");
const Sequelize = require("sequelize");
// const Score = require("../db/schema").Score;

// Establishes the connection to the database
db.authenticate().then(() => {
  console.log("Connection established");
}).catch((err) => {
  console.log("Unable to connect: ", err);
});

module.exports = {}