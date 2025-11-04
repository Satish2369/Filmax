import React from "react";
import { IMG_CDN } from "../utils/constants";

const CrewCard = ({ image, name, job }) => {
  return (
    <div className="flex flex-col items-center p-2 mb-[2vw] font-['Neue Montreal']">
       
      {image && (
        <div>
          <div className="w-[48vw] h-[53vw]  overflow-hidden md:w-[18vw] md:h-[25vw]   mb-2">
            <img
              src={IMG_CDN + image}
              className="object-cover object-top w-full h-full "
              alt={name || "Cast Image"}
            />
          </div>
          <p className=" mt-2  text-center text-red-600 font-bold text-xl font-['Neue Montreal']">{name}</p>
          <p className="text-gray-400 text-center font-['Neue_Montreal'] ">Job  : {job}</p>
        </div>
      )}
    </div>
  );
};

export default CrewCard;
