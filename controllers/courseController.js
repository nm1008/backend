const Course = require("../models/course");

<<<<<<< HEAD
=======
//get all courses
>>>>>>> 26c7a24451ebb9d875c5be095c6e461c117e0dc5
module.exports.getAll = () => {
  return Course.find().then((courses) => courses);
};

<<<<<<< HEAD

=======
//get course by id
module.exports.get = (params) => {
  return Course.findById(params).then((course) => course);
};

//add course

//update course

//delete course
>>>>>>> 26c7a24451ebb9d875c5be095c6e461c117e0dc5
