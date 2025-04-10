// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO6PBRPTlYBYmd1YqugX9mRQXvKEN0SjI",
  authDomain: "ecolife2-45cba.firebaseapp.com",
  projectId: "ecolife2-45cba",
  storageBucket: "ecolife2-45cba.firebasestorage.app",
  messagingSenderId: "362642754603",
  appId: "1:362642754603:web:bf5d59306e453641fa6e6e",
  measurementId: "G-PCC8M5EM5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
