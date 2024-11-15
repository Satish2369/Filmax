import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import ShimmerList from './ShimmerList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // const movies = [];
  return (
    <div className='bg-black'>
      {movies?.nowPlayingMovies &&
      movies?.upcoming &&
      movies?.topRated &&
      movies?.popularMovies ? (
        <div className='bg-black font-["Neue_Montreal"]'>
          {movies.nowPlayingMovies.length > 0 && (
            <div className='-mt-28 relative z-20'>
              <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
            </div>
          )}
          {movies.upcoming.length > 0 && (
            <MovieList title="Upcoming" movies={movies.upcoming} />
          )}
          {movies.topRated.length > 0 && (
            <MovieList title="Top Rated" movies={movies.topRated} />
          )}
          {movies.popularMovies.length > 0 && (
            <MovieList title="Popular" movies={movies.popularMovies} />
          )}
        </div>
      ) : (
        <>
          <div className='-mt-28 relative z-20 bg-black'>
            <ShimmerList />
            <ShimmerList />
          <ShimmerList />
          <ShimmerList />
          </div>

        </>
      )}
    </div>
  );
};

export default SecondaryContainer;
