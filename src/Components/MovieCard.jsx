import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { Navigate, useNavigate } from 'react-router-dom';





const MovieCard = ({posterPath,movieId}) => {


  const navigate = useNavigate();



const handleClickMovieDetail = ()=>{

    navigate(`/movie/${movieId}`)
  
}


if(!posterPath) return null;


  return (
    <div className='pr-3 h-82 w-72 flex-shrink-0 bg-blend-color-burn  mb-4'     onClick={handleClickMovieDetail}>
        
  


        <img 
        className='h-[100%] w-[100%] aspect-6/10  '
        src={IMG_CDN + posterPath}
         alt="Movie Card"
          />
       </div>
  )
}

export default MovieCard;