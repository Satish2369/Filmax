
import Login from './Login'
import Browse from  './Browse'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MovieDetails from './MovieDetails'
import WatchTrailer from './WatchTrailer'
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
      }
  
]);






  return (
   <div> 
    <RouterProvider    router={appRouter}/>
</div>

  )
}

export default Body;
