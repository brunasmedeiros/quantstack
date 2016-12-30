"use strict";

// establish mysql connection

const mysql = require("mysql")
const Sequelize = require("sequelize")

const db = new Sequelize(process.env.CLEARDB_DATABASE_URL || "quantstack", "root", "test", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false
  }
})

module.exports = db