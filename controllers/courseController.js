const Course = require("../models/course");

//get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    if (!courses) {
      return res.status(404).json({ message: "No courses available" });
    }
    res.status(200).json(courses);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//get course by id
const getCourseById = async (req, res) => {
  try {
    const courseId = await Course.findById(req.params.id);
    if (!courseId) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(courseId);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
};
