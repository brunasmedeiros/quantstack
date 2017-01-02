"use strict";

const db = require("../db/config");
const Sequelize = require("sequelize");
const User = require("../db/schema").User;

// Establishes the connection to the database
db.authenticate().then(() => {
  console.log("Connection established with Postgres");
}).catch((err) => {
  console.log("Unable to connect: ", err);
});

module.exports = {
  // exports functions
}