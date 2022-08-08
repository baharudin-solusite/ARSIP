const UserModel = require("../models/UserModel");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await UserModel.findAll();

    res.json({
      message: "sukses ambil data",
      data: users,
    });
  },
};
