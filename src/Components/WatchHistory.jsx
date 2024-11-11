import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

const WatchHistory = () => {
  const navigate = useNavigate();
  const watchList = useSelector((store) => store?.watch?.watchList || []);


  const handleBackButton = () => {
    navigate(-1);
  };

  const handleHomePageClick = () => {
    navigate("/browse");
  };

  return (
    <div className="bg-black text-white w-screen min-h-screen p-6">
      <div className="flex justify-between">
        <div
          className="flex items-center bg-red-600 h-[8vw] w-[20vw] px-3 rounded-md justify-center cursor-pointer md:w-[8vw] md:h-[2vw]"
          onClick={handleBackButton}
        >
          <IoChevronBackSharp size={15} /> Back
        </div>
        <div className="text-red-600 text-4xl cursor-pointer">Watch List</div>
        <div
          className="flex items-center bg-red-600 h-[8vw] w-[20vw] px-3 rounded-md justify-center cursor-pointer md:w-[8vw] md:h-[2vw]"
          onClick={handleHomePageClick}
        >
          Home page
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-[5vw]">
        {
          watchList.map((movie) => (
            <div
              key={movie?.id}
              className="bg-yellow-400 h-[5vw] p-6 w-3/6 flex items-center m-2 rounded-md shadow-lg cursor-pointer"
            >
              <Link to={`/movie/${movie?.id}/watchTrailer`} className="block">
                <div className="text-3xl flex gap-[2vw] justify-center items-center text-red-700 font-['Neue Montreal']">
                  <div>
                    <GoDotFill />
                  </div>
                  <div>{movie?.title}</div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WatchHistory;
