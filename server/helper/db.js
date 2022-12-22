const mongoose = require("mongoose");

const uri =
  "mongodb+srv://monhoo17:Moojoo1108@cluster0.nfmxs54.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
