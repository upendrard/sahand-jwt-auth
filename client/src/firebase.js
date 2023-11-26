// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sahand-jwt-auth.firebaseapp.com",
  projectId: "sahand-jwt-auth",
  storageBucket: "sahand-jwt-auth.appspot.com",
  messagingSenderId: "882407887823",
  appId: "1:882407887823:web:7de8f0356e93ac5322b8ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



