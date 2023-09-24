//userSchema for MongoDB Database

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required."],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  mobileNo: {
    type: String,
    required: [true, "Mobile number is required."],
  },
  enrollments: [
    {
      courseId: {
        type: String,
        required: [true, "Course ID is required"],
      },
      enrolledOn: {
        type: Date,
        default: new Date(),
      },
      status: {
        type: String,
        default: "Enrolled",
      },
    },
  ],
});
