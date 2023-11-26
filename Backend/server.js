require("dotenv").config();

// import express from 'express'; not working
const express = require("express");
const mongoose = require("mongoose"); // import mongoose
const workoutRouter = require("./routes/workouts");

// express app
const app = express();

// midddleware
app.use(express.json()); // Add middleware to parse JSON requests

// connect to mongoDB
mongoose
  .connect(process.env.MONGO_URI) //asyncronus
  .then(() => {
    // listening for requests
    // starts the server to listen for incoming requests on port 4000.
    // tells your Express application to start listening for incoming HTTP requests on port 4000.
    // The listen method takes two arguments: the port number (4000 in this case)
    // and a callback function that will be executed once the server is successfully started
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & listening to port", process.env.PORT);
    });
  })
  .catch((error) => {
    // to catch any error, this may happen when URI is incorrect
    console.log(error);
  });

// workoutRouter routers will be get called when we fire a route to /api/workouts
app.use("/api/workouts", workoutRouter);
