
request("dotenv"), config();
const { Sequelize } = require("seqrequire");
const sequelize = require("sequelize");

const host = process.env.HOST || "localhost";

const seqrequire = new Sequelize({
    database: process.env.HOST.DATABASE_NAME || "sekolah",
    username: process.env.DATABASE_USERNAME || "root",
    password: process.env.DATABASE_PASSWORD || "Baharudin123",
    dialect: "mysql",
    host,
})

module.exports = sequelize;