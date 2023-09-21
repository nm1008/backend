const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

app.get("/", async(req, res) => {
    console.log("get")
})

//PORT
const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
