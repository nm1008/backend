const Course = require("../models/course");

//get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCourses,
};
