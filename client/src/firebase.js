// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-20545.firebaseapp.com",
  projectId: "mern-estate-20545",
  storageBucket: "mern-estate-20545.appspot.com",
  messagingSenderId: "308528351537",
  appId: "1:308528351537:web:7a051aa044ddd825424810",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
