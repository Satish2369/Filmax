import React from 'react'
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";


const VideoTitle = (props) => {

    
  return (
    <div className='pt-36 w-full aspect-video h-[100vh]  pl-11 font-["Neue_Montreal"] absolute text-white bg-gradient-to-r from-black  z-20 '>

   <h1 className='text-6xl font-bold   font-["Summer_Loving"]'>{props.title}</h1>
    <h1 className='py-6 w-1/5 text-justify'>{props.overview}</h1>

    <div className='flex gap-5 '>
      <button className='bg-white  px-10  text-black  py-2 flex gap-2 items-center rounded-lg hover:bg-opacity-80'> <FaPlay /> Play</button>




      <button className='bg-white  text-black  px-8 flex gap-2 items-center rounded-lg py-2  hover:bg-opacity-80'> <MdOutlineInfo /> More Info</button>
    </div>



    </div>
  )
}

export default VideoTitle 