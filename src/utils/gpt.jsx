
import { API_KEY } from "./constants";


import { GoogleGenerativeAI } from "@google/generative-ai";

      // Fetch your API_KEY


      // Access your API key (see "Set up your API key" above)
      const genAI = new GoogleGenerativeAI(API_KEY);

export  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});