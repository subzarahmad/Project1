const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

mongoose.connect("mongodb://127.0.0.1:27017/PROJECT1")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

 const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
 }

 initDB();
