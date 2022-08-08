const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnection");

const UserModel = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
    },
    email: DataTypes.STRING,
    birth_date: DataTypes.DATE,

  },
  {
    timestamps: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = UserModel;
