const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gigSchema = new Schema({
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
      "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg",
    set: (v) =>
      v === ""
        ? "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg"
        : v,
  },
})({ timestamps: true });

module.exports = mongoose.model("Gig", gigSchema);
