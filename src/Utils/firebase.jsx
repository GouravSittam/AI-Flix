// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_CZIq_NIscc3MOFLULnh0H27nHZHBNQk",
  authDomain: "ai-flix-be98d.firebaseapp.com",
  projectId: "ai-flix-be98d",
  storageBucket: "ai-flix-be98d.appspot.com",
  messagingSenderId: "62881284971",
  appId: "1:62881284971:web:584105e2b04a531385422e",
  measurementId: "G-NVHM70Z0ZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);