// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "headacheproject-d0751.firebaseapp.com",
  projectId: "headacheproject-d0751",
  storageBucket: "headacheproject-d0751.appspot.com",
  messagingSenderId: "268955034856",
  appId: "1:268955034856:web:86bc5922552418ecc2955d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
