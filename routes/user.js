const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

//get all users
router.route("/").get(UserController.getAllUser)

//register a user
router.route("/").post(UserController.registerUser)

//update a user
router.route("/:id").put(UserController.updateUser)

module.exports = router;