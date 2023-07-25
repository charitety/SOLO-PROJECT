//Mongoose is an object modelling tool for MongoDB and Node.js
const mongoose = require("mongoose");

//Imports `dotenv` module and calls its `config` method
//In order to load environment variables
require("dotenv").config();

//Defines module's defaul export
module.exports = () =>
  //Function Promise handles asynchronous connection
  //Try...catch block handles potential errors
  new Promise(async (resolve, reject) => {
    try {
      // The parameter false allows to query undefined
      mongoose.set("strictQuery", false);
      // Related to dotenv module
      //Connect to MongoDB database using a string
      const URL = process.env.MONGO_DB_STRING;
      await mongoose.connect(URL);

      console.log("MongoDB Connected...");
      //If succesful, promise resolve with value of 'true'
      resolve(true);
      //If the is an error, the promise is rejected and
      //the error is logged to the console
    } catch (error) {
      console.log("MongoDB Connection Error: ", error);
      reject(error);
    }
  });
