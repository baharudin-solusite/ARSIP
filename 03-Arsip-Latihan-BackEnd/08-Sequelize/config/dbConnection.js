require("dotenv").config();
const { Sequelize } = require("sequelize");

const host = process.env.HOST || "localhost";

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME || "sekolah",
  username: process.env.DATABASE_USERNAME || "root",
  password: process.env.DATABASE_PASSWORD || "Baharudin123",
  dialect: "mysql",
  host,
});

module.exports = sequelize;
