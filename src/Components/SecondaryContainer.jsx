import React from 'react'

import { useSelector } from 'react-redux'
import MovieList from './MovieList'






const SecondaryContainer = () => {


const movies = useSelector(store => store.movies)

  console.log(movies.nowPlayingMovies)
  return (

    movies.nowPlayingMovies && (
    <div className=' bg-black font-["Neue_Montreal"]'>   
      
      <div className='-mt-32 relative z-20'>
      <MovieList title={"Now Playing"}  movies={movies?.nowPlayingMovies}  />
      </div>
       {/* {console.log(movies.PopularMovies)
       } */}
   <MovieList title={"Upcoming"}  movies={movies.upcoming}  />
<MovieList title={"Top rated"}  movies={movies.topRated}  />
      <MovieList title={"Popular"}  movies={movies?.popularMovies}  />
   
 


     






    </div>
    )
  )
}

export default SecondaryContainer