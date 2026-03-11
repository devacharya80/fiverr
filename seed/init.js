const Gig = require("./models/gig");

const sampleGig = new gigSchema({
  title: "Build a MERN website",
  description: "I will build a full stack website",
  price: 5000,
  category: "web dev",
});
sampleGig.save().then(() => {
  console.log("saved");
});
