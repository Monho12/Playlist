const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.uri;

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("Successfully connected to DataBase");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
