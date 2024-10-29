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
    <div className='pt-36 mt-[12vw] w-full aspect-video h-[100vh]  pl-4 font-["Neue_Montreal"] absolute text-white bg-gradient-to-r from-black  z-20 md:pl-11  md:mt-0'>

   <h1 className='text-3xl text-red-600  font-["Summer_Loving"] mt-[8vw] ml-[15vw]  md:text-7xl md:mt-0 md:ml-0'>{props.title}</h1>
    <h1 className='py-6 w-[50vw] text-justify  tracking-tighter leading-tight md:w-1/5 md:tracking-wide hidden md:block md:leading-normal '>{props.overview}</h1>

    <div className='flex gap-5 absolute top-[110vw] md:relative ml-[10vw]  md:top-0 md:ml-0'>
      <button className='bg-white  px-7  text-black  py-2 flex gap-2 items-center rounded-lg hover:bg-opacity-80 md:px-10' onClick={handlePlay}> <FaPlay /> Play</button>


 

      <button className='bg-white  text-black  px-4 flex gap-2 items-center rounded-lg py-2  hover:bg-opacity-80 md:px-8' onClick={handleInfo}> <MdOutlineInfo /> More Info</button>
    </div>



    </div>
  )
}

export default VideoTitle 