// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bcd69.firebaseapp.com",
  projectId: "mern-estate-bcd69",
  storageBucket: "mern-estate-bcd69.appspot.com",
  messagingSenderId: "236404541492",
  appId: "1:236404541492:web:e1e325ec91639719032261",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
