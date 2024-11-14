
import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'
import SplashScreen from './SplashScreen'



 

const MainContainer = () => {

  const trailerVideo = useSelector(store=> store.movies?.trailerVideo)

const movies = useSelector(store=> store?.movies?.nowPlayingMovies)
if (!movies || movies.length === 0) return <div>Loading...</div>;

if(movies === null) return;

const mainMovie = movies[0];
 
// console.log(mainMovie);

const {original_title,overview,id} = mainMovie;

  return (

    <div className='bg-black min-h-fit w-screen'>

        <VideoTitle  title={original_title}  overview = {overview} movieId={id}  />
        <VideoBackGround  movieId={id} />
    
    </div>


  )
}

export default MainContainer;