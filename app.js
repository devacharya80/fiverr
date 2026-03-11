const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const Gig = require("./models/gig");
const ejsMate = require("ejs-mate");

app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Root Route
app.get("/", (req, res) => {
  res.send("Fiverr App Working");
});

app.get("/gigs", async (req, res, next) => {
  const gigs = await Gig.find();
  console.log(gigs);
  res.render("gigs/index", { gigs });
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
