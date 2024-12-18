import React from 'react'
import MovieCard from './MovieCard'
import ShimmerList from "./ShimmerList";





const MovieList = ({title,movies}) => {
    
  return (






    <div>
       <div className='pl-4 bg-blend-color-burn'>
            <h1 className='text-3xl py-6 pl-6 text-red-600 font-["Neue_Montreal"]'>{title}</h1>
          <div className='flex overflow-x-auto scrollbar-hide'>
             <div className='flex'>


\


             {movies.length>0 ? movies?.map((movie)  =>  <MovieCard  key={movie.id} movieId={movie.id}  posterPath={movie.poster_path}/>) : <>
             
             
              <ShimmerList/>
             
             
             </> }

             </div>
             </div>
        </div>





    </div>
  )
}

export default MovieList