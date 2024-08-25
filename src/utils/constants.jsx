 export const LOGO = "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png";

export const USER_AVATAR ="https://prompti.ai/wp-content/uploads/2023/07/pcboi2.png"



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

