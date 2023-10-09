const Course = require("../models/course");
const auth = require("../auth")
//get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return !courses || courses.length === 0
      ? res.status(404).json({ message: "No courses available" })
      : res.status(200).json(courses);
  } catch (err) {
    // console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//get course by id
const getCourseById = async (req, res) => {
  try {
    const courseId = await Course.findById(req.params.id);
    return !courseId
      ? res.status(404).json({ message: "Course not found" })
      : res.status(200).json(courseId);
  } catch (err) {
    // console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//add course
const addCourse = async (req, res) => {
  try {
    //verifies if there is a token
    auth.verifyAuth(req)

    const addCourse = await Course.create(req.body);
    res.status(201).json(addCourse); //status code 201 because of request is success and file has been created in the database
  } catch (err) {
    // console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//update course
const updateCourse = async (req, res) => {
  try {
    auth.verifyAuth(req)

    const { id } = req.params;
    const course = await Course.findByIdAndUpdate(id, req.body);

    if (!course) {
      return res
        .status(404)
        .json({ message: `Cannot find course with ID ${id}` });
    }
    const updatedCourse = await Course.findByIdAndUpdate(id);
    res.status(200).json(updatedCourse);
  } catch (err) {
    // console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//delete course
const deleteCourse = async (req, res) => {
  try {
    auth.verifyAuth(req)

    const course = await Course.findByIdAndDelete(req.params.id);
    return !course
      ? res
          .status(404)
          .json({ message: `Cannot find the course ID ${req.params.id}` })
      : res.status(200).json(`${req.body.name} course has been deleted`);
  } catch (err) {
    // console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

//exporting variables to routes folder
module.exports = {
  getAllCourses,
  getCourseById,
  addCourse,
  updateCourse,
  deleteCourse,
};
