import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GPTSearchPage = () => {




  return (
    <div className=''>
      <div className='-z-10 fixed h-full w-full bg-black'>

        </div>
      
        
<GptSearchBar/>


<GptMovieSuggestion/>
        
        
    </div>
  )
}

export default GPTSearchPage;