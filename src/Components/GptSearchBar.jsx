
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { model } from '../utils/gpt'
import { API_OPTIONS } from '../utils/constants'
import {addGptMovieResult} from '../utils/gptSlice'


const GptSearchBar = () => {
  const langKey = useSelector((store)=> store.config.lang)
  const dispatch = useDispatch();
  const SearchText = useRef(null);
 
  //search movie in tmdb

  const searchMovieTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching movie from TMDB:', error);
      return [];
    }
  };





  const handleGptSearchClick = async ()=>{

    console.log(SearchText.current.value)

           

    const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query" + SearchText.current.value + "only give name of 5 movies,comma separated like the example result given ahead. Example Result: Gadar,Sholay,Don,Ragini mms,koi mil gya" +"   return me  in the form of strings + Plz dont ask the user for suggestion just show some random movies and if the user is requesting some adult content then Display 'We here don't recommend adult movies here.Search anything else' with a  emoji  and plz suggest movie on the basis of keyword only   "
//Make an api call to gpt api andd get movie results


  const result = await model.generateContent(gptQuery);
  const response = await result.response;
  const text = response.text();
  // console.log(text);

  if(!response){
    //add an error element
  }



  const gptMovies = text.split(",");
  // console.log(gptMovies)
 
  const PromiseArray = gptMovies.map((movie)=> searchMovieTMDB(movie))

const tmdbResults = await Promise.all(PromiseArray)

// console.log(tmdbResults )
dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}))

  }



  return (
    <div className='pt-28 flex justify-center '>




      <form className=' font-["Neue_Montreal"] md:p-2' onSubmit={(e)=> e.preventDefault()}    >
      
      <input  ref={SearchText} type="text" className='mt-[27vw]  p-2 border-2 border-black m-2 outline-blue-500 w-[67vw] px-2    md:mt-0 md:w-[30vw]  md:px-4' placeholder={lang[langKey].GptSearchPlaceholder}/>



      <button className='bg-red-600 rounded-md py-3 px-6 '  onClick={handleGptSearchClick}        >{lang[langKey].search}</button>
         


        </form>
         
        
    </div>
  )

}

export default GptSearchBar