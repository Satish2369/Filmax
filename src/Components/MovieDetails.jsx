import React from 'react'
import { useSelector } from 'react-redux'
import ReactPlayer from 'react-player'
import { API_OPTIONS } from '../utils/constants'
import { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { IMG_CDN } from '../utils/constants'



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
      console.log(data)
    };


    fetchMovieDetails();
  }

  const fetchCast = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      API_OPTIONS
    );
    const data = await response.json();
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

    <div className='flex justify-center items-center bg-blue-200 w-screen h-screen'>


     <div className='movie poster-path '>

       { <img src={IMG_CDN + selectedMovie?.backdrop_path} alt="" /> }

     
     </div> 

























    </div>
  )
}

export default MovieDetails