import React, { useState } from "react";

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");



  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Workout</h3>
      <label>Exercise title :</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>

      <label>Load (in Kg) :</label>
      <input type="number" onChange={(e) => setLoad(e.target.value)} value={load}/>

      <label>Reps :</label>
      <input type="number" onChange={(e) => setReps(e.target.value)} value={reps}/>

      <button>Add Workout</button>
    </form>
  );
}
