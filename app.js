const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// Root Route
app.get("/", (req, res) => {
  res.send("Fiverr App Working");
});

// Port defining and DB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    app.listen(8080, () => {
      console.log("Listening and connected to DB");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
