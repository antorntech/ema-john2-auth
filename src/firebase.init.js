// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkYny9wGTaCUdUcGT1xeRZEheEVzM-syk",
  authDomain: "ema-john2-2d499.firebaseapp.com",
  projectId: "ema-john2-2d499",
  storageBucket: "ema-john2-2d499.appspot.com",
  messagingSenderId: "938986248468",
  appId: "1:938986248468:web:78525568fc53fc141d0a01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
