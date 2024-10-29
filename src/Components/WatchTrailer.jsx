import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";
import { IoChevronBackSharp } from "react-icons/io5";

const WatchTrailer = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState(null);
  const [loadingTrailer, setLoadingTrailer] = useState(true);

  useEffect(() => {
    fetchTrailer();
  }, []);

  const fetchTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await response.json();
    const trailerVideo = data.results.find((video) => video.type === "Trailer");
    setTrailer(trailerVideo);
    setLoadingTrailer(false);
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className="bg-black w-screen h-screen text-white p-2 relative overflow-hidden" >
      <div
        className="flex items-center  bg-red-600 h-[8vw] w-[20vw] px-3 rounded-md justify-center cursor-pointer md:w-[8vw] md:h-[2vw]"
        onClick={handleBackButton}
      >
        <IoChevronBackSharp size={15} /> Back
      </div>
      <div className="MovieTrailer w-full h-full absolute top-0 left-0 mt-[13vw]  md:mt-[4vw] ">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-md"
          src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&playlist=${trailer?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default WatchTrailer;
