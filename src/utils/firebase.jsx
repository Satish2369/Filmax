// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD31c8T5b7ued7BWHqHbh9wZt76Ebg9JIE",
  authDomain: "netflix-gpt-4c87b.firebaseapp.com",
  projectId: "netflix-gpt-4c87b",
  storageBucket: "netflix-gpt-4c87b.appspot.com",
  messagingSenderId: "749615845170",
  appId: "1:749615845170:web:acbd90f136e4e1a7d8912b",
  measurementId: "G-N5NBXRZQ2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
