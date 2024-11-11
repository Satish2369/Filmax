
import Login from './Login'
import Browse from  './Browse'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MovieDetails from './MovieDetails'
import WatchTrailer from './WatchTrailer'
import Favourites from './Favourites'
import WatchHistory from './WatchHistory'
const Body = () => {

    
  
    const appRouter = createBrowserRouter([
        {
        path:"/",
        element:<Login/>
    },

    {
        path:"/browse",
        element:<Browse/>
    },
    {
        path: "/movie/:movieId", 
        element: <MovieDetails />
      },
      {
        path: "/movie/:movieId/watchTrailer", 
        element: <WatchTrailer />
      },
      {
        path:"/favourites",
        element:<Favourites/>
      },
      {
        path:"/watchHistory",
        element:<WatchHistory/>
      },
      
  
]);






  return (
   <div> 
    <RouterProvider    router={appRouter}/>
</div>

  )
}

export default Body;
