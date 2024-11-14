import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IoChevronBackSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { useEffect } from 'react';
import { clearFavourites } from '../utils/favouriteSlice';
const Favourites = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
    const favouriteList = useSelector((store)=>store?.favourite?.favouriteList)
      
  const filteredList =  favouriteList.filter((movie,index,self)=> index === self.findIndex((m)=> m.id === movie.id) );

       
  const handleBackButton = () => {
    navigate(-1);
  };
  
  const handleClear = ()=>{
     dispatch(clearFavourites())
  }
  
  return (
    <div className='bg-black text-white w-screen min-h-screen p-6'>

        <div className='flex justify-between'>
        <div
          className="flex items-center bg-red-600 h-[8vw] w-[20vw] px-3 rounded-md justify-center cursor-pointer font-['Neue_Montreal'] md:w-[8vw] md:h-[2vw]"
          onClick={handleBackButton}
        >
          <IoChevronBackSharp size={15} /> Back
        </div>
            <div className='text-red-600 text-4xl text-center   cursor-pointer font-["Neue_Montreal"]'>Favourites</div>
            <div className='flex items-center bg-red-600 h-[8vw] w-[20vw] px-3 rounded-md justify-center font-["Neue_Montreal"] cursor-pointer md:w-[10vw] md:h-[2.5vw]' onClick={handleClear}>Clear Favourites</div>
            
        </div>
         <div className='flex  flex-col justify-center items-center mt-[5vw]'>

             { filteredList.length >0 &&   filteredList?.map((movie)=>  
             <div key={movie?.id}  className='bg-yellow-400 h-[5vw] p-6 w-3/6 flex  items-center m-2 rounded-md shadow-lg cursor-pointer font-["Neue_Montreal"]'>
              <Link to={`/movie/${movie?.id}`} className='block' > 
               <div className=' text-3xl flex gap-[2vw] justify-center items-center text-red-700 font-["Neue Montreal"]  '>
                
                 <div><GoDotFill /></div>
                 <div>{movie?.title}</div>


                </div>
                </Link>
             </div>
             
             
     )}

     {
        filteredList.length === 0 && <div className=' flex  gap-4  p-2 font-["Neue_Montreal"]'>
               <div>
               <img src="https://cdn2.iconfinder.com/data/icons/bluegem-ui-set-4/64/No_Favorites-512.png" alt="No Favourites yet" className='object-fit w-full h-full'/>
               </div>
             <div className='mt-[10vw]'>
                <span className=' text-2xl ml-[3vw]  p-3 block bg-blue-800 font-["Neue_Montreal"] rounded-md'>No Favourites yet</span>
             </div>
           
        
        
        </div>
     }
             

         </div>
       





    </div>
  )
}

export default Favourites;
