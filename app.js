console.log("RUNNING FILE:", __filename);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

mongoose.connect("mongodb://127.0.0.1:27017/PROJECT1")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

  //INDEX route

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) =>{
    res.send("Hi , i am root");
});
   app.get("/Listing", async (req, res) =>{
    const allListings = await Listing.find({});
    res.render("listings/index", {allListings});
   });
   
   //show route

   app.get("/listing/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});


/*app.get("/testListing", async (req, res) => {
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
});*/

console.log("Listing value = ", Listing);

app.listen(5000, () => {
    console.log("server is listening to port 5000");
});

