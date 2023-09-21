const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/courseController");

//get all courses
router.get("/", (req, res) => {
  CourseController.getAll().then((courses) => res.send(courses));
});

module.exports = router;
