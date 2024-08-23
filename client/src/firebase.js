// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-d7d9e.firebaseapp.com",
  projectId: "real-estate-d7d9e",
  storageBucket: "real-estate-d7d9e.appspot.com",
  messagingSenderId: "385216592271",
  appId: "1:385216592271:web:c54b5cfce85ceca96d33fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);