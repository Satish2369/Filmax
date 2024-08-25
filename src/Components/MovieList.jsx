import React from 'react'
import MovieCard from './MovieCard'






const MovieList = ({title,movies}) => {
    
  return (






    <div>
       <div className='pl-4 bg-blend-color-burn'>
            <h1 className='text-3xl py-4 pl-4 text-white'>{title}</h1>
          <div className='flex overflow-x-scroll scrollbar-hide'>
             <div className='flex'>


             {movies?.map((movie)  =>  <MovieCard  key={movie.id} movieId={movie.id}  posterPath={movie.poster_path}/>)}




             </div>
             </div>
        </div>





    </div>
  )
}

export default MovieList