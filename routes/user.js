const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

//get all users
router.route("/").get(UserController.getAllUser)

//register a user
router.route("/").post(UserController.registerUser)

module.exports = router;