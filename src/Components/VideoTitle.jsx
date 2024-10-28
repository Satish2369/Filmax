import React from 'react'
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const VideoTitle = (props) => {
   const  navigate = useNavigate();
  const handlePlay = ()=>{

     navigate(`/movie/${props.movieId}/watchTrailer`)


  }

  const handleInfo = ()=>{
    navigate(`/movie/${props.movieId}`)
  }
    
  return (
    <div className='pt-36 w-full aspect-video h-[100vh]  pl-11 font-["Neue_Montreal"] absolute text-white bg-gradient-to-r from-black  z-20 '>

   <h1 className='text-7xl text-red-600  font-["Summer_Loving"]'>{props.title}</h1>
    <h1 className='py-6 w-1/5 text-justify'>{props.overview}</h1>

    <div className='flex gap-5 '>
      <button className='bg-white  px-10  text-black  py-2 flex gap-2 items-center rounded-lg hover:bg-opacity-80' onClick={handlePlay}> <FaPlay /> Play</button>




      <button className='bg-white  text-black  px-8 flex gap-2 items-center rounded-lg py-2  hover:bg-opacity-80' onClick={handleInfo}> <MdOutlineInfo /> More Info</button>
    </div>



    </div>
  )
}

export default VideoTitle 