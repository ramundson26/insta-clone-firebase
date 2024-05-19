import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBWTA1P5tIM5JeQGm91gxEnkbcTM3lssl8",
  authDomain: "react-insta-clone-da7ac.firebaseapp.com",
  projectId: "react-insta-clone-da7ac",
  storageBucket: "react-insta-clone-da7ac.appspot.com",
  messagingSenderId: "390794280645",
  appId: "1:390794280645:web:4536409ca081a4c44c3aac"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth