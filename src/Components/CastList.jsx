import React, { useEffect } from "react";
import { useState } from "react";
import { API_OPTIONS, IMG_CDN } from "../utils/constants";
import CastCard from "./CastCard";

const CastList = ({movieId}) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    fetchCast();
  },[movieId]);

  const fetchCast = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      API_OPTIONS
    );
    const data = await response.json();
          console.log(data)
    setCast(data.cast);
  };

  return (
    <div className="bg-black  w-[screen] h-fit ">
            <div className="text-6xl ml-[2vw] mb-[2vw] mt-[1vw]   font-['Neue_Montreal'] text-red-500">Casts</div>
            <div className="flex overflow-x-auto scrollbar-hide">
            {cast &&
        cast.map((actor) => (
          <CastCard
            key={actor.id} // Unique key for each card
            image={actor?.profile_path}
            name={actor?.name}
            char={actor?.character}
          />
        ))}

            </div>

     
    </div>
  );
};

export default CastList;
