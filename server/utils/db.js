const mongoose = require("mongoose");

const URL = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);

    console.log("connection successful");
  } catch (error) {
    console.error("failed to connect database");
  }
};
module.exports = connectDB;
