import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import Logo from "../utils/Logo.png"; // Adjust the path based on your folder structure

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsusbcribe when componnt unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle Gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
  };
  
  const handleFavouritesRoute =()=>{
    navigate('/favourites')
  }
  const handleWatchHistoryRoute =()=>{
    navigate('/watchHistory')
  }

  return (
    <div className='w-full fixed     bg-gradient-to-b from-black z-30 flex flex-col  justify-between font-["Neue_Montreal"]  md:flex-row  md:px-8   md:py-2'>
      <img src={Logo} className="h-18 w-44  ml-[22vw] md:ml-0" alt="logo" />

      {user && (
        <div className='flex items-center px-1 gap-1 font-["Neue_Montreal"] md:gap-0 '>
          {showGptSearch && (
            <>
              <select
                className=" py-1 md:mr-8   rounded-md  md:m-2  md:px-2 text-zinc-400 hover:text-red-600"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang, index) => (
                  <option key={index} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </>
          )}

          <button
            className="p-2 m-1 rounded-md text-zinc-300  text-xl ml-[8vw] font-['Neue_Montreal'] mr-[5vw] md:ml-0 md:mr-2 hover:text-red-600"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>

          {/* <img
            className="h-10 w-14 m-4 "
            src={user.photoURL}
            alt="user photo"
          /> */}
            <div className="   h-[2.6vw]  text-zinc-300 flex justify-center  items-center text-xl font-['Neue_Montreal'] rounded-md cursor-pointer md:w-[11vw] md:mt-0 md:mx-3 hover:text-red-600" onClick={handleFavouritesRoute}>
              Favourite Movies
            </div>
            <div className="   h-[2.6vw]  text-zinc-300 flex justify-center items-center text-xl font-['Neue_Montreal'] rounded-md cursor-pointer md:w-[11vw] md:mt-0 md:mx-3 hover:text-red-600" onClick={handleWatchHistoryRoute}>
              Watch History
            </div>
          <button
            className=" text-zinc-300 px-[7px] text-xl  py-2  rounded-md  md:px-4  hover:text-red-600 "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
