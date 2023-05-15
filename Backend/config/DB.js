const mongoose = require("mongoose");

//function  to connect mongo db
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Database Connection Successfull ");


} catch (error) {
    console.error(`Error:${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;