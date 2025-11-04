import React, { useEffect } from "react";
import { useState } from "react";
import { API_OPTIONS, IMG_CDN } from "../utils/constants";
import CastCard from "./CastCard";

import ShimmerList from "./ShimmerList";

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
        const filteredData = data.cast.filter((actor)=> actor?.profile_path !== null)
    setCast(filteredData);
  };

  return (
    <div className="bg-black  w-screen h-fit ">
            <div className="text-5xl ml-[2vw] mb-[2vw] mt-[1vw]   font-['Neue Montreal'] text-red-500 md:text-6xl ">Casts</div>
            <div className="flex overflow-x-auto scrollbar-hide">
            {cast.length>0 ?
        cast.map((actor) => (
          <CastCard
            key={actor.id}
            image={actor?.profile_path}
            name={actor?.name}
            char={actor?.character}
          /> 
        ))   : <div>
        
        <ShimmerList/>
        
        </div>  }

            </div>

     
    </div>
  );
};

export default CastList;
