 export const LOGO = "https://brandemia.org/sites/default/files/inline/images/logo-2.jpg"; //older logo 

export const USER_AVATAR ="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"



export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}` 
    }
  };
  
export const BG_URL ="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg"

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";


export const SUPPORTED_LANGUAGES =[{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"}]

export const API_KEY = import.meta.env.VITE_API_KEY;

