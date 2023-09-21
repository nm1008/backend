const Course = require("../models/course");

module.exports.getAll = () => {
  return Course.find().then((courses) => courses);
};


