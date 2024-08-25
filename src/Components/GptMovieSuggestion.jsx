
import { useSelector } from 'react-redux';
import MovieList from './MovieList'
import Shimmer from './Shimmer'
import { useState,useEffect } from 'react';

const GptMovieSuggestion = () => {
const {movieResults,movieNames} = useSelector(store => store.gpt)







if(!movieNames) return null;




  return (
    <div className=' m-4 bg-orange-500 text-white font-["Neue_Montreal"] rounded-md'>
      <div>
    { 
     movieNames.map((movieName,index)=>  
     <MovieList
     key={movieName}
      title={movieNames[index]}  
       movies={movieResults[index]}  
       />  )
        
}
     
      </div>
        
    </div>
  )

}

export default GptMovieSuggestion;