import React from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IMG_CDN } from "../utils/constants";
import MovieList from "./MovieList";
import CastList from "./CastList";

const MovieDetails = () => {
  const movies = useSelector((store) => store.movies);

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



  return (
    <div className=" bg-black  text-white w-screen min-h-screen p-[2vw] font-['Neue_Montreal']">
      <div className="text-center m-0">
        <h1 className='text-6xl  mb-7 font-["Summer_Loving"] text-red-600 underline'>
          {selectedMovie?.title}
        </h1>
      </div>
      <div className="flex">
        <div className="first ml-[3vw] w-[32%] h-[39vw]   rounded-md">
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

        <div className="second m-[4vw]   w-[50%] h-[39vw] p-[1vw] mt-0">
          <div className="">
            <h3 className="text-justify text-xl font-bold text-white ">
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

          <div
            className="px-3 py-2 w-[10vw]  bg-red-500 text-center text-xl rounded-md cursor-pointer"
            onClick={handleWatchTrailer}
          >
            Watch Trailer
          </div>
        </div>
      </div>
             <div>
            <CastList   movieId={movieId}/>
              


             </div>
      <div className="overflow-x-scroll scrollbar-hide  mt-5">
        <MovieList title={"Similar Movies"} movies={similarMovies} />
      </div>
    </div>
  );
};

export default MovieDetails;
