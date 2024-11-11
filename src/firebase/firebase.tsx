// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDD_rLjFk0o7WvoZS1DK7qV9Fo1HMcXAEc",
  authDomain: "moviefinder-512ac.firebaseapp.com",
  projectId: "moviefinder-512ac",
  storageBucket: "moviefinder-512ac.appspot.com",
  messagingSenderId: "922961282620",
  appId: "1:922961282620:web:a091430be6bc69014fa539"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
