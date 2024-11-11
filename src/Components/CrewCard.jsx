import React from "react";
import { IMG_CDN } from "../utils/constants";

const CrewCard = ({ image, name, job }) => {
  return (
    <div className="flex flex-col items-center p-2 mb-[2vw]">
       
      {image && (
        <div>
          <div className="w-[40vw] h-[50vw]  overflow-hidden md:w-[15vw] md:h-[20vw]">
            <img
              src={IMG_CDN + image}
              className="object-cover object-top w-full h-full "
              alt={name || "Cast Image"}
            />
          </div>
          <p className=" mt-2  text-center text-red-600 font-bold text-xl">{name}</p>
          <p className="text-gray-400 text-center ">Job  : {job}</p>
        </div>
      )}
    </div>
  );
};

export default CrewCard;
