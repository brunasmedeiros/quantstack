"use strict";

const Sequelize = require("sequelize");
const db = require("./config");

db
  .authenticate()
  .then(() => {
    console.log("Connection established from schema");
  })
  .catch((err) => {
    console.log("Unable to connect: ", err);
  });

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.STRING
  },
  score: {
    type: Sequelize.INTEGER
  }
});

db
  .sync({ force: true })

  .then(() => {
    console.log('All tables created');
})
  .catch((err) => {
    console.log("error creating tables", err);
  })

module.exports = {
  User: User
}