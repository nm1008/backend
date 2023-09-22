const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/courseController");

//get all courses
router.route("/").get(CourseController.getAllCourses);

//get course by id
router.route("/:id").get(CourseController.getCourseById)

module.exports = router;