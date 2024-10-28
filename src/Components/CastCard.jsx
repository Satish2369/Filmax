import React from "react";
import { IMG_CDN } from "../utils/constants";

const CastCard = ({ image, name, char }) => {
  return (
    <div className="flex flex-col items-center p-2">
       
      {image && (
        <div>
          <div className="w-[15vw] h-[20vw] rounded-full overflow-hidden">
            <img
              src={IMG_CDN + image}
              className="object-cover object-top w-full h-full "
              alt={name || "Cast Image"}
            />
          </div>
          <p className=" mt-2  text-center text-red-600 font-bold text-xl">{name}</p>
          <p className="text-gray-400 text-center">Character  : {char}</p>
        </div>
      )}
    </div>
  );
};

export default CastCard;