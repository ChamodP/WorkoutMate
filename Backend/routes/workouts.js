const express = require("express");
const {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')

// instance of router
const router = express.Router();

// GET all workouts
router.get("/", getAllWorkouts);

// GET particular workout
router.get("/:id", getSingleWorkout);

// create a new workout
// we sending data to the server
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// Update a workout
// we sending data to the server
router.patch("/:id", updateWorkout);

// exporting
module.exports = router;
