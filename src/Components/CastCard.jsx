import React from "react";
import { IMG_CDN } from "../utils/constants";

const CastCard = ({ image, name, char }) => {
  return (
    <div className="flex flex-col items-center p-2">
       
      {image && (
        <div>
          <div className="w-[48vw] h-[53vw]  overflow-hidden md:w-[18vw] md:h-[25vw]   mb-2">
            <img
              src={IMG_CDN + image}
              className="object-cover object-top w-full h-full "
              alt={name || "Cast Image"}
            />
          </div>
          <p className=" mt-2   text-red-600 text-center font-bold text-xl font-['Neue Montreal']">{name}</p>
          <p className="text-gray-400  text-center font-['Neue Montreal'] md:w-[16vw]">Character  : {char}</p>
        </div>
      )}
    </div>
  );
};

export default CastCard;
