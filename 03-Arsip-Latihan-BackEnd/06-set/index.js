const express = require("express");
const sequelize = require("./config/dbConnection");
const UserModel = require("./models/UserModel");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json);

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("sukses");

        await UserModel.sync({ alter: true });
    } catch (error) {
        console.log("error " + error);
    }
}

testConnection();

app.listen(PORT, () => {
    console.log("TEST KONEKSI PORT " + PORT);
});