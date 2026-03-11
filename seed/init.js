const Gig = require("../models/gig");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fiverr");

const gigs = [
  {
    title: "Build a Responsive MERN Stack Website",
    description: "I will build a full responsive MERN stack web application.",
    price: 5000,
    category: "web dev",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },

  {
    title: "Create a Professional Portfolio Website",
    description: "I will design and develop a modern portfolio website.",
    price: 3000,
    category: "web dev",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },

  {
    title: "Fix Bugs in Your JavaScript or React App",
    description:
      "I will debug and fix issues in your JavaScript or React project.",
    price: 2000,
    category: "web dev",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },

  {
    title: "Develop a Full Stack Node.js Application",
    description: "I will build backend APIs using Node.js and MongoDB.",
    price: 4500,
    category: "web dev",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },

  {
    title: "Train a Custom Machine Learning Model",
    description:
      "I will train and evaluate a machine learning model for your dataset.",
    price: 6000,
    category: "aiml",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },

  {
    title: "Build a Deep Learning Model Using TensorFlow",
    description:
      "I will create a deep learning model for image or text classification.",
    price: 7000,
    category: "aiml",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a",
  },

  {
    title: "AI Chatbot Development for Your Website",
    description: "I will develop an AI chatbot using NLP techniques.",
    price: 5500,
    category: "aiml",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
  },

  {
    title: "Build a REST API with Express and MongoDB",
    description:
      "I will develop a scalable REST API using Express and MongoDB.",
    price: 3500,
    category: "web dev",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
  },

  {
    title: "Data Analysis and Visualization with Python",
    description:
      "I will analyze your dataset and create visualizations using Python.",
    price: 4000,
    category: "aiml",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },

  {
    title: "Build a React Frontend UI with Bootstrap",
    description:
      "I will create a clean and responsive React UI using Bootstrap.",
    price: 3200,
    category: "web dev",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2",
  },
];

async function seedDB() {
  await Gig.insertMany(gigs);
  console.log("Sample gigs inserted");
}

seedDB();
