"use strict";

// establish mysql connection

const pg = require("pg")
const Sequelize = require("sequelize")

const db = new Sequelize(process.env.DATABASE_URL || "postgresql://localhost/quantstack" , {
  dialect: "postgres"
})

module.exports = db