import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'



const GPTSearchPage = () => {



  return (
    <div className=''>
      <div className='-z-10 fixed '>
        <img src={BG_URL} alt="background" />
        </div>
      
        
<GptSearchBar/>
<GptMovieSuggestion/>
        
        
    </div>
  )
}

export default GPTSearchPage;