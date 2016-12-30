"use strict";

// establish mysql connection

const mysql = require("mysql")
const Sequelize = require("sequelize")

const db = new Sequelize(process.ENV.DATABASE_URL || "MYSQL URL LOCAL", {
  dialect: 'mysql',
  define: {
    timestamps: false
  }
})

module.exports = db