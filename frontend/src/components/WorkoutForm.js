import React, { useState } from "react";

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {// taking event object
    e.preventDefault(); // to prevent reloading the page

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout), // converting object to JSON string
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("New workout added", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Workout👇</h3>
      <label>Exercise title :</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Load (in Kg) :</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      <label>Reps :</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
