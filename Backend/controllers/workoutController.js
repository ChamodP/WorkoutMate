const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// GET all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const allWorkouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(allWorkouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET a single workout
const getSingleWorkout = async (req, res) => {
  const id = req.params.id; // or we can use const {id} = req.params

  //   validating id before going to DB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ObjectId" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json({ workout });
};

// create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await Workout.create({ title, reps, load }); // creating a new document and will return the new doc
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such ObjectId" });
  }

  const deletedWorkout = await Workout.findOneAndDelete({ _id: id });

  if (!deletedWorkout) {
    return res.status(404).json({ error: "Invalid Deletion" });
  }

  res.status(200).json(deletedWorkout);
};

// Update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such ObjectId" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body, // spreading using ...
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
