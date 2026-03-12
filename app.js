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

// index Route
app.get("/gigs", async (req, res, next) => {
  const gigs = await Gig.find();
  res.render("gigs/index", { gigs });
});

// new Route
app.get("/gigs/new", (req, res, next) => {
  res.render("gigs/new");
});

// create route
app.post("/gigs", async (req, res, next) => {
  const gigs = req.body.gig;
  await Gig.create(gigs);
  console.log("added");
  res.redirect("/gigs");
});

// show route
app.get("/gigs/:id", async (req, res, next) => {
  const { id } = req.params;
  const gigs = await Gig.findById(id);
  res.render("gigs/show", { gigs });
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
