import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA5Ph9r-f94pb7gsF569s2vSLssmzVIYik",
    authDomain: "red-onionn.firebaseapp.com",
    projectId: "red-onionn",
    storageBucket: "red-onionn.appspot.com",
    messagingSenderId: "542906467226",
    appId: "1:542906467226:web:2c1ea297b43e79d1c0f023",
    measurementId: "G-GGT3ZMYTD3"
  };
  
  

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;