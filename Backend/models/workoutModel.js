const mongoose = require('mongoose');

const schema = mongoose.Schema

// creates a new schema for workoutSchema
const workoutSchema = new schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true // if this is missing that record will not be added to the DB
    }

}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)