const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gigSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      required: true,
      enum: ["web dev", "aiml"],
    },

    image: {
      type: String,
      default:
        "https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_hybrid&w=740&q=80",
      set: (v) =>
        v === ""
          ? "https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_hybrid&w=740&q=80"
          : v,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Gig", gigSchema);
