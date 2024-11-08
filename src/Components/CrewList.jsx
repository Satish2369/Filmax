import React, { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN } from "../utils/constants";
import CrewCard from "./CrewCard"; // Rename CastCard to CrewCard if applicable

const CrewList = ({ movieId }) => {
  const [crew, setCrew] = useState([]);
  
  useEffect(() => {
    fetchCrew();
  }, [movieId]);

  const fetchCrew = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      API_OPTIONS
    );
    const data = await response.json();
    console.log(data);
    setCrew(data.crew); // Change to crew
  };

  return (
    <div className="bg-black w-[screen] h-fit">
      <div className="text-5xl ml-[2vw] mb-[2vw] mt-[1vw] font-['Neue_Montreal'] text-red-500 md:text-6xl">
        Crew
      </div>
      <div className="flex overflow-x-auto scrollbar-hide">
        {crew &&
          crew.map((member) => (
            <CrewCard
              key={member.id} // Unique key for each card
              image={member?.profile_path}
              name={member?.name}
              job={member?.job}
            />
          ))}
      </div>
    </div>
  );
};

export default CrewList;
 