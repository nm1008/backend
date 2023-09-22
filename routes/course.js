const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/courseController");

//get all courses
router.route("/").get(CourseController.getAllCourses);


module.exports = router;
