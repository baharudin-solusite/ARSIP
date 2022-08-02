const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnection");

const UserModel = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
    },
    email: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()"),
    },
});

module.exports = UserModel;
const express = require("express");
const app = express();

const sequelize = require("./config/dbConnection");
const UserModel = require("./models/UserModel");

const PORT = process.env.PORT || 8000;

app.use(express.json());

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("sukses");

        await UserModel.sync({ alter: true });
    } catch (error) {
        console.log("error", error);
    }
}

testConnection();

app.listen(PORT, () => {
    console.log("tes koneksi port", PORT);
});
