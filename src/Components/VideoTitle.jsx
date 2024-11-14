import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToWatchList } from '../utils/watchSlice';

const VideoTitle = (props) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [isExpanded, setIsExpanded] = useState(false);

   const truncateText = (text) => {
     const words = text.split(' ');
     return words.length > 60 ? words.slice(0, 60).join(' ')  : text;
   };

   const displayText = isExpanded ? props?.overview : truncateText(props?.overview);

   const handlePlay = () => {
     navigate(`/movie/${props?.movieId}/watchTrailer`);
     dispatch(addToWatchList({ id: props?.movieId, title: props?.title }));

   }

   const handleInfo = () => {
     navigate(`/movie/${props.movieId}`);
   }
    
   return (
     <div className='pt-36 mt-[12vw] w-full aspect-video h-[100vh] pl-4 font-["Neue_Montreal"] absolute text-white bg-gradient-to-r from-black z-20 md:pl-11 md:mt-0'>
       <h1 className='text-2xl text-red-600 font-["Summer_Loving"] mt-[6vw] ml-[13vw] md:text-7xl md:mt-0 md:ml-0'>{props.title}</h1>
       
       <h1 className='py-4 w-[50vw] text-justify tracking-tighter font-["Neue_Montreal"] leading-tight md:w-[24vw] md:tracking-wide hidden md:block md:leading-normal'>
         {displayText}
         {props?.overview.split(' ').length > 60 && (
           <button 
             onClick={() => setIsExpanded(!isExpanded)}
             className="text-yellow-400 ml-2 "
           >
             {isExpanded ? 'Show less' : '...more'}
           </button>
         )}
       </h1>

       <div className='flex gap-5 absolute top-[110vw] md:relative ml-[10vw] md:top-0 md:ml-0'>
         <button className='bg-white px-7 text-black py-2 flex gap-2 items-center rounded-lg font-["Neue_Montreal"] hover:bg-opacity-80 md:px-10' onClick={handlePlay}> 
           <FaPlay /> Play
         </button>
         <button className='bg-white text-black px-4 flex gap-2 items-center rounded-lg py-2 font-["Neue_Montreal"]  hover:bg-opacity-80 md:px-8' onClick={handleInfo}> 
           <MdOutlineInfo /> More Info
         </button>
       </div>
     </div>
   );
}

export default VideoTitle;
