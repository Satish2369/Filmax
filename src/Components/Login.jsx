import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';
import SplashScreen from './SplashScreen'; // Import the SplashScreen component

const Login = () => {
    const dispatch = useDispatch();

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [showSplash, setShowSplash] = useState(false); // Splash screen state

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        // Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        // Show splash screen during authentication
        setShowSplash(true);

        // Sign-up and sign-in logic
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            })
                        );
                        setShowSplash(false); // Hide splash screen after successful sign-up
                    }).catch((error) => {
                        setErrorMessage(error.message);
                        setShowSplash(false); // Hide splash screen on error
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    setShowSplash(false); // Hide splash screen on error
                });
        } else {
            // Sign-in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setShowSplash(false); // Hide splash screen after successful sign-in
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    setShowSplash(false); // Hide splash screen on error
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div className='bg-black w-screen h-screen overflow-hidden absolute font-["Neue_Montreal"]'>
            <Header />
            {showSplash ? (
                <SplashScreen /> // Show splash screen when `showSplash` is true
            ) : (
                <form onSubmit={(e) => e.preventDefault()} className='absolute py-14 px-8 m-3  rounded-md bg-zinc-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-white text-xl bg-opacity-90 border-zinc-200 md:px-16 md:m-12'>
                    <h1 className='font-bold text-3xl py-4 mx-1 capitalize mb-3 font-["Neue_Montreal"]'>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {!isSignInForm && (
                        <input
                            ref={name}
                            type="text"
                            placeholder='Full Name'
                            className='py-1 m-2 px-4 bg-zinc-800 font-["Neue_Montreal"]'
                        />
                    )}
                    <input ref={email} type="text" placeholder='Email ' className='py-1 m-2 px-4 bg-zinc-800 font-["Neue_Montreal"]' />
                    <input ref={password} type="password" placeholder='Password' className='py-1 m-2 px-4 mb-4 bg-zinc-800 font-["Neue_Montreal"]' />
                    <p className='text-red-800 semibold p-2 capitalize font-["Neue_Montreal"]'>{errorMessage === null ? " " : errorMessage}</p>
                    <button className='py-1 m-2 text-white bg-red-800 capitalize font-["Neue_Montreal"]' onClick={handleButtonClick}>
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className='p-4 text-[12px] cursor-pointer font-["Neue_Montreal"]' onClick={toggleSignInForm}>
                        {isSignInForm ? "New to Filmax? Sign up now" : "Already Registered? Sign In Now"}
                    </p>
                </form>
            )}
        </div>
    );
};

export default Login;
