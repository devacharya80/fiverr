const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const gigSchema = require("./models/gig");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Root Route
app.get("/", (req, res) => {
  res.send("Fiverr App Working");
});

// Fake data
const sampleGig = new gigSchema({
  title: "Build a MERN website",
  description: "I will build a full stack website",
  price: 5000,
  category: "web dev",
});
sampleGig.save().then(() => {
  console.log("saved");
});

// Port defining and DB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/fiverr")
  .then(() => {
    app.listen(8080, () => {
      console.log("Listening and connected to DB");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
