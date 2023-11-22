import { useEffect, useState } from "react";

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

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => <p key={workout._id}> {workout.title} </p>)}
      </div>
    </div>
  );
};

export default Home;
