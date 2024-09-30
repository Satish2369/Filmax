import React from 'react'
import { useSelector } from 'react-redux'
import ReactPlayer from 'react-player'
import { API_OPTIONS } from '../utils/constants'
import { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { IMG_CDN } from '../utils/constants'
import MovieList from './MovieList'



const MovieDetails = () => {

const movies = useSelector((store)=>store.movies)





const {movieId} = useParams();
const navigate = useNavigate();
const [similarMovies, setSimilarMovies] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loadingTrailer, setLoadingTrailer] = useState(true);
  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);


const nowPlaying = movies.nowPlayingMovies;
const popular = movies.popularMovies;
const topRated = movies.topRated;
const upcoming = movies.upcoming;






useEffect(() => {
  const movieFromStore = [
    ...nowPlaying,
    ...topRated,
    ...upcoming,
    ...popular,
  
  ].find((movie) => movie.id === parseInt(movieId));

  if (movieFromStore) {
    setSelectedMovie(movieFromStore);
  } else {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        API_OPTIONS
      );
      const data = await response.json();
      
      setSelectedMovie(data);
      setGenres(data.genres.map((genre) => genre.name));
       
    };


    fetchMovieDetails();
  }

  const fetchCast = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      API_OPTIONS
    );
    const data = await response.json();
     console.log(data)
    setCast(data.cast.slice(0, 5));
  };

  const fetchSimilarMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar`,
      API_OPTIONS
    );
    const data = await response.json();
  
    setSimilarMovies(data.results);
  };

  const fetchTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await response.json();
    const trailerVideo = data.results.find(
      (video) => video.type === "Trailer"
    );
    // console.log(data)
    setTrailer(trailerVideo);
    setLoadingTrailer(false);
  };

  fetchCast();
  fetchSimilarMovies();
  fetchTrailer();
}, [movieId, nowPlaying,popular,upcoming,topRated]);


useEffect(() => {
  if (selectedMovie) {
    const titleInterval = setInterval(() => {
      document.title =
        document.title === " Movie Details"
          ?  `${selectedMovie.title}`
          : "🎬 Movie Details";
    }, 2000);

    return () => clearInterval(titleInterval);
  }
}, [selectedMovie])




  return (

    <div className='bg-black  w-screen h-fit p-9 font-["Neue_Montreal"] text-white '>
     <div className="movieHeading  text-center m-0">
      <h1 className='text-6xl underline mb-7 font-["Summer_Loving"] text-orange-500 '>{selectedMovie?.title}</h1>
     </div>
<div className='flex gap-10'>

<div className='MovieTrailer  mt-[1.3vw]'>
{trailer && (
  <div className='MovieTrailer  w-[50vw] h-[30vw]'>
  <iframe 
         className='aspect-video  w-[100%] h-[100%]  rounded-md '
         src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&playlist=${trailer.key}`}

         
         title="YouTube video player" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe> 
   </div>
)}
{
      !trailer && (
        <div className='w-[50vw] h-[30vw] bg-white flex justify-center items-center uppercase text-red-600  text-7xl font-["Summer_Loving"]'> 
             no trailer found
           </div>
      )      
}

<div className=' w-full h-[20vw] mt-5'>
         <h1 className='font-["Summer_Loving"] text-8xl text-center text-orange-600'>Genres</h1>
          <div className=' text-center ml-4'>
              {genres.map((genre)=>( <div key={genre} > 

                <h3 className='font-["Kajiro"] text-5xl'>{genre}</h3>

              </div>)

)}

          </div>
</div>




</div>
<div className='w-[35vw] ml-[7rem]'>
  <h1 className='text-center underline w-[30vw] text-7xl m-4 cursor-pointer text-orange-500 font-["Summer_Loving"]  '>Overview</h1>
    <h3 className='text-justify '>{selectedMovie?.overview}</h3>
     <div className=' w-full h-[25vw] mt-5 '>

       <img src={IMG_CDN  + selectedMovie?.backdrop_path}  className='object-cover w-full h-full rounded-md'     alt="" />


     </div>
    




</div>
</div>



<div className='overflow-x-scroll scrollbar-hide  mt-5'>

   <MovieList title={"Similar Movies"} movies={similarMovies} />




</div>




















    </div>
  )
}

export default MovieDetails