import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';

import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';







const Header= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  




  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)



const handleSignOut =()=>{
 
  signOut(auth).then(() => {
  }).catch((error) => {
    navigate("/error")
  });


}


useEffect(()=>{

 const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
      
        
       const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({
              uid: uid,
              email: email,
              displayName:displayName,
              photoURL:photoURL
            }),

          )
          navigate("/browse");
      } 
      else {
        dispatch(removeUser());
          navigate("/")
      }
    });


    // unsusbcribe when componnt unmounts
return () => unsubscribe();


},[])

const handleGptSearchClick =()=>{
//Toggle Gpt search
dispatch(toggleGptSearchView());


}

const handleLanguageChange =(e)=>{
  // console.log(e.target.value)
  dispatch(changeLanguage(e.target.value))
}






  return (
    <div className='w-full absolute px-8 py-2  bg-gradient-to-b from-black z-30 flex justify-between  '>
     <img src={LOGO} className='h-18 w-44 ' alt="logo" />


{ user && (
<div className='flex items-center font-["Neue_Montreal"]'>
 
{showGptSearch && (<>

  <select className='m-2 py-2 px-2 bg-zinc-400 rounded-md' onChange={handleLanguageChange}>

{SUPPORTED_LANGUAGES.map((lang,index)=>    <option key={index} value={lang.identifier}>{lang.name}</option>)}
</select>

</>)}

<button className='p-2 m-1 rounded-md text-white bg-purple-600' onClick={handleGptSearchClick}>{showGptSearch ? "HomePage" :"GPT Search"}</button>



  <img   className='h-10 w-14 m-4 '  src={user.photoURL } alt="user photo" />


  <button className='bg-red-700 text-white p-1 border-zinc-800 px-4 font-bold py-2 rounded-md'
  onClick={handleSignOut}
  >Sign Out</button>
</div>
)
}
    </div>
  )
}

export default Header;