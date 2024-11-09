import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IMG_CDN } from "../utils/constants";
import MovieList from "./MovieList";
import CastList from "./CastList";
import { IoChevronBackSharp } from "react-icons/io5";
import CrewList from "./CrewList";
import { addToFavourites } from "../utils/favouriteSlice";
import { removeFromFavourites } from "../utils/favouriteSlice";
const MovieDetails = () => {
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();
   const favouriteList = useSelector((store)=> store?.favourite?.favouriteList)
 
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [similarMovies, setSimilarMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

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

    const fetchSimilarMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/similar`,
        API_OPTIONS
      );
      const data = await response.json();

      setSimilarMovies(data.results);
    };

    fetchSimilarMovies();
  }, [movieId, nowPlaying, popular, upcoming, topRated]);

  const handleWatchTrailer = () => {
    navigate(`/movie/${movieId}/watchTrailer`);
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  const isFavourite = favouriteList.some((fav) => fav.id === parseInt(movieId));


  const handleAddOrRemoveFavourites = () => {
    if (isFavourite) {
      dispatch(removeFromFavourites({ id: selectedMovie.id }));
    } else {
      dispatch(addToFavourites({ id: selectedMovie?.id, title: selectedMovie.title }));
    }
  };


  const handleFavouritesRoute =()=>{
    navigate('/favourites')
  }

  return (
    <div className=" bg-black  text-white w-screen min-h-screen p-[2vw] font-['Neue_Montreal']">
      <div className="flex flex-col justify-between m-0 md:flex-row">
        <div
          className="flex items-center bg-red-600 h-[8vw] w-[20vw] px-3 rounded-md justify-center cursor-pointer md:w-[8vw] md:h-[2vw]"
          onClick={handleBackButton}
        >
          <IoChevronBackSharp size={15} /> Back
        </div>
        <div>
          <h1 className='text-2xl  mb-7 font-["Summer_Loving"] text-center text-red-600 underline pt-[3vw] md:text-6xl md:pt-0'>
            {selectedMovie?.title}
          </h1>
        </div>
        <div className=" bg-red-600  h-[3vw] flex justify-center items-center text-xl rounded-md cursor-pointer md:w-[12vw] md:mt-0" onClick={handleFavouritesRoute}>
              Favourites
            </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[2vw] md:gap-0">
        <div className="first  w-[100%] h-[100%]   rounded-md  md:h-[39vw] md:w-[32%] md:ml-[3vw]">
          {selectedMovie?.backdrop_path && (
            <>
              <img
                src={IMG_CDN + selectedMovie?.poster_path}
                className="object-cover h-full w-full  rounded-md "
                alt="not loaded"
              />
            </>
          )}
        </div>

        <div className="second    w-[100%] h-fit p-[1vw] mt-0 md:w-[50%] md:m-[4vw] ">
          <div className="">
            <h3 className="text-justify text-xl font-bold text-white  md:">
              {selectedMovie?.overview}
            </h3>
          </div>

          <div className=" flex m-[1vw] gap-[1vw] ml-0">
            <h3 className="font-bold text-orange-400 text-xl">
              Release Date :
            </h3>
            {
              <h3 className="text-xl">
                {selectedMovie?.release_date.split("-").reverse().join("-")}
              </h3>
            }
          </div>
          <div className="flex">
            <div
              className=" flex justify-center items-center h-[3vw] w-[40vw] mt-[4vw] bg-red-600  text-xl rounded-md cursor-pointer md:w-[10vw] md:mt-0 "
              onClick={handleWatchTrailer}
            >
              Watch Trailer
            </div>
            <div
              className="m-2  py-2 w-[40vw] mt-[4vw] bg-red-600 text-center text-xl rounded-md cursor-pointer md:w-[14vw] md:mt-0"
              onClick={() =>
                handleAddOrRemoveFavourites()
              }
            >
              { isFavourite  ?   "Remove from favourite":"Add To Favourite" }
            </div>
           
          </div>
        </div>
      </div>
      <div className="mt-[55vw]  md:mt-[5vw]">
        <CastList movieId={movieId} />
      </div>
      <div className="mt-[40vw]  md:mt-[5vw]">
        <CrewList movieId={movieId} />
      </div>

      <div className="overflow-x-scroll scrollbar-hide  md:mt-5">
        <MovieList title={"Similar Movies"} movies={similarMovies} />
      </div>
    </div>
  );
};

export default MovieDetails;
