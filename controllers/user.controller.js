const { User } = require("../models/user.model");

const userController = {
  getAll: async (req, res) => {
    const users = await User.find();

    res.json(users ? users : { message: "No users found" });
  },
  getOne: async (req, res) => {
    const { userName } = req.params;
    const user = await User.findOne({ userName: userName });
    res.json(user ? user : { message: "No user found" });
  },
  create: async (req, res) => {
    User.create(req.body)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  updateUser: async (req, res) => {
    const { userName } = req.params;
    const user = await User.findOneAndUpdate({ userName: userName }, req.body);
  },
  deleteUser: async (req, res) => {
    const { userName } = req.params;
    await User.findOneAndDelete({ userName: userName });
    res.json({ message: "User deleted successfully" });
  },
};

module.exports = userController;

