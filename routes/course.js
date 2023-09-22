const express = require("express");
const router = express.Router();
const CourseController = require("../controllers/courseController");

//get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await CourseController.getAll();
    res.status(200).json({ courses });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

//get course by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const course = await CourseController.get(id);
    res.status(200).json({ course });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

//add course

//update course

//delete course

module.exports = router;

// CourseController.getAll().then((courses) => res.send(courses));
