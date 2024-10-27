
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

 import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


const useNowPLayingMovies = ()=>{
  const dispatch = useDispatch();
    
const  nowPlayingMovies = useSelector(store=> store.movies.nowPlayingMovies)

const getNowPlayingMovies = async ()=>{

const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)

const json = await data.json();



dispatch(addNowPlayingMovies(json.results))

}

useEffect(()=>{

  getNowPlayingMovies();



},[])


  
}


export default useNowPLayingMovies;