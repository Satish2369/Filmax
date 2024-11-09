
import { useSelector } from 'react-redux';
import MovieList from './MovieList'
import Shimmer from './Shimmer'
import { useState,useEffect } from 'react';

const GptMovieSuggestion = () => {
const {movieResults,movieNames} = useSelector(store => store.gpt)


const movies = useSelector(store => store.movies)

// console.log(movieNames)

// console.log(movieResults)

if(!movieNames) return null;




  return (
    <div className=' m-4 bg-black text-white font-["Neue_Montreal"] rounded-md'>
       <div>
      {
        movieNames.length === 0 ? (
          <>
          <MovieList title={"Top rated"}  movies={movies.topRated}  />
          <MovieList title={"Popular"}  movies={movies?.popularMovies}  />
        </> 
        ) :(
          movieNames.map((movieName,index)=>  
            <MovieList
            key={movieName}
             title={movieNames[index]}  
             movies={movieResults[index]}  
            />  )

        )

      
       
        
}
     
      </div>
        
    </div>
  )

}

export default GptMovieSuggestion;