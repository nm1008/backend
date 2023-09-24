const User = require("../models/user");

//get all user
const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//register a user
const registerUser = async (req, res) => {
  try {
    const registerUser = await User.create(req.body);
    res.status(200).json(registerUser);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};
module.exports = {
  getAllUser,
  registerUser,
};
