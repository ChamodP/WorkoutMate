import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const jsonResponse = await response.json();

      if (response.ok) {
        setWorkouts(jsonResponse);
      }
    };

    fetchWorkouts();

    // fetch("/api/workouts")
    //   .then((Response) => {
    //     return Response.json()
    //   })
    //   .then((resData) => setWorkouts(resData.allWorkouts));
  }, []);

  // we need a key to loop through an array

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
