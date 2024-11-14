import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackGround = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  // console.log(trailerVideo);
  // const trailerVideo = {}

  useMovieTrailer(movieId);
         
  return (
    <div className="w-full h-[92vh] relative flex items-center justify-center overflow-hidden bg-black">
      {trailerVideo?.key ? (
        <iframe
          className="aspect-square w-full"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=" +
            trailerVideo?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black">
          <span className="block font-['Neue_Montreal'] bg-black w-full h-full"></span>
        </div>
      )}
    </div>
  );
};

export default VideoBackGround;
