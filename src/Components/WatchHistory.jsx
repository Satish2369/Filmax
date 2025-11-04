import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { clearWatchList, removeWatchList } from "../utils/watchSlice";
const WatchHistory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const watchList = useSelector((store) => store?.watch?.watchList );


  const handleBackButton = () => {
    navigate(-1);
  };

  const handleClearHistory = () => {
     dispatch(clearWatchList());
  };

 const handleRemoveHistory = (id,title)=>{
    dispatch(removeWatchList({id,title}))
    console.log("runned")

 }



  return (
    <div className="bg-black text-white w-screen min-h-screen p-6">
      <div className="flex justify-between">
        <div
          className="flex items-center bg-red-600 h-[8vw] w-[20vw] px-3 font-['Neue_Montreal'] rounded-md justify-center cursor-pointer md:w-[8vw] md:h-[2vw]"
          onClick={handleBackButton}
        >
          <IoChevronBackSharp size={15} /> Back
        </div>
        <div className="text-red-600 text-4xl cursor-pointer font-['Neue_Montreal']">Watch History</div>
        <div
          className="flex items-center font-['Neue_Montreal'] bg-red-600 h-[8vw] w-[20vw] px-3 rounded-md justify-center cursor-pointer md:w-[8vw] md:h-[2vw]"
          onClick={handleClearHistory}
        >
          Clear History
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-[5vw]">
        { watchList.length >0 &&
          watchList.map((movie) => (
            <div
              key={movie?.id}
              className="bg-yellow-400 h-[5vw] p-6 w-4/6 flex items-center m-2 rounded-md shadow-lg cursor-pointer box-border relative"
            >
             
                <div className="text-3xl flex gap-[2vw] justify-between items-center text-red-700 font-['Neue Montreal']">
                  <div className="text-3xl flex gap-[2vw] justify-center items-center text-red-700 font-['Neue Montreal']">
                  <div>
                    <GoDotFill />
                  </div>
                  <Link to={`/movie/${movie?.id}/watchTrailer`} className="block font-['Neue_Montreal']"><div>{movie?.title}</div></Link>
                  <div className=" absolute right-4 p-2 rounded-full bg-black font-['Neue_Montreal'] " onClick={() =>handleRemoveHistory(movie?.id,movie?.title)}><RxCross2 /></div>
                  </div>

                 
                </div>
              
            </div>
          ))}
          {

     watchList.length ===0 && (
      <div className="text-zinc-400 text-2xl mt-[10vw] font-['Neue_Montreal']">"Your watch list is empty. Browse movies and start watching trailers!"</div>

     )




          }
           









      </div>
    </div>
  );
};

export default WatchHistory;
