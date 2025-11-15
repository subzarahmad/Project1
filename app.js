console.log("RUNNING FILE:", __filename);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

mongoose.connect("mongodb://127.0.0.1:27017/PROJECT1")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

app.get("/", (req, res) =>{
    res.send("Hi , i am root");
});

app.get("/testListing", async (req, res) => {
  try {
    let sampleListing = new Listing({
      title: "My Home",
      description: "By the London",
      price: 1200,
      location: "London",
      country: "India",
    });

    await sampleListing.save();
    res.send("Listing saved successfully!");
  } catch (err) {
    console.log(err);
    res.send("Error: " + err);
  }
});

console.log("Listing value = ", Listing);


app.listen(5000, () => {
    console.log("server is listening to port 5000");
});
