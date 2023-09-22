const Course = require("../models/course");

//get all courses
module.exports.getAll = () => {
  return Course.find().then((courses) => courses);
};

//get course by id
module.exports.get = (params) => {
  return Course.findById(params).then((course) => course);
};

//add course

//update course

//delete course
