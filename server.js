const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const Course = require("./models/course");

//PORT
const PORT = process.env.PORT || 8000;

//MIDDLEWARE
app.use(express.json());

//connecting to mongoDB database and listening to port (whatever that is stored in the .env or default 8000 and the server cannot connect to the server it will log the error message)
mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// routes
const courseRoutes = require("./routes/course");
app.use("/api/courses", courseRoutes);
