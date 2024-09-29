import React from 'react';
import Header from './Header';
import { useState,useRef } from 'react';
import { checkValidData } from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import {updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {



const dispatch = useDispatch();

const [isSignInForm,setIsSignInForm] = useState(true);

const [errorMessage,setErrorMessage] = useState(null)


 const email  = useRef(null);
const password = useRef(null);
const name = useRef(null);
const handleButtonClick = ()=>{

//validate the form data

// checkValidData(email,password)  

// console.log(email.current.value);
// console.log(password.current.value)
 
const message = checkValidData(email.current.value,password.current.value)
setErrorMessage(message);


if(message) return;


//sign up and sign in logic

if(!isSignInForm){

createUserWithEmailAndPassword(
   auth,
    email.current.value, 
    password.current.value)
  .then((userCredential) => {

    const user = userCredential.user;


    updateProfile(user, {

      displayName:name.current.value,
       photoURL: USER_AVATAR
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
     
     
         dispatch(
          addUser({
            uid: uid,
             email: email,displayName:displayName,photoURL:photoURL
            
            }))
 



     
    }).catch((error) => {
       setErrorMessage(error.message)
    });





    console.log(user)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage(errorCode + "-" +  errorMessage)
    
  });


}


else{

//sign in logic
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" +  errorMessage)
  });

}




}


const toggleSignInForm =()=>{


setIsSignInForm(!isSignInForm);


}



return (
<div className='bg-black w-full h-full absolute'>

<Header/>

 

<form  onSubmit={(e)=> e.preventDefault()}  className='absolute py-14 px-16 m-12 rounded-md bg-zinc-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-white text-xl bg-opacity-90 border-zinc-200'>

<h1 className='font-bold text-3xl py-4 mx-1 capitalize mb-3'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

{!isSignInForm && (
   
   <input 
   ref={name}
   type="text" 
   placeholder='Full Name' 
   className='py-1 m-2 px-4  bg-zinc-800' />
   
   
   
   )}
<input  ref={email}          type="text" placeholder='Email or phone number' className='py-1 m-2 px-4 bg-zinc-800' />

<input  ref={password}         type="text" placeholder='Password' className='py-1 m-2 px-4 mb-4  bg-zinc-800' />
<p className='text-red-800 semibold p-2 capitalize'>{errorMessage === null ? " " : errorMessage}</p>

<button className='py-1 m-2 text-white bg-red-800 capitalize'  onClick={handleButtonClick}    >{isSignInForm ? "Sign In" : "Sign Up"}</button>

<p className='p-4  text-[12px] cursor-pointer'  onClick={toggleSignInForm}>{isSignInForm ? "New to filmax? Sign up now": "Already Registered? Sign In Now"}</p>

</form>



 


</div>


)









}

export default Login;