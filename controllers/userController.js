const User = require("../models/user");

//bcrypt to hash passwords (check registerUser)
const bcrypt = require("bcrypt");

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
    //bcrypt - generate salt and hash the user's password
    const salt = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create a new user with the hashed password
    let newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      mobileNo: req.body.mobileNo,
      password: hashedPassword,
      // or what we can do is bcrypt.hashSync(req.body.password, 10) // 10 is salt
    });

    //save the newUser to the DB
    const registeredUser = await newUser.save();

    //response
    res.status(200).json(registerUser);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//update user info
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = await User.findByIdAndUpdate(id, req.body);

    if (!userId) {
      return res
        .status(404)
        .json({ message: `Cannot find user with ID ${id}` });
    }

    const updatedUser = await User.findByIdAndUpdate(id);
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

///////////////////////////////////////////////////////////

//log-in user
const loginUser = async (req, res) => {
  try {
    const userEmail = await User.findOne({ email: req.body.email });

    if (!userEmail) {
      return res.send("Incorrect information");
    }
    let comparePasswordResult = await bcrypt.compare(
      req.body.password,
      userEmail.password
    );

    if (!comparePasswordResult) {
      return res.send("Incorrect information");
    } else {
      res.send("Success");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllUser,
  registerUser,
  updateUser,
  loginUser,
};
