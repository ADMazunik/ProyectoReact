import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF5I_gyCwGMa31s2Yx0jyjJdYzyMDKGxI",
  authDomain: "prueba-vapor-gaming.firebaseapp.com",
  projectId: "prueba-vapor-gaming",
  storageBucket: "prueba-vapor-gaming.appspot.com",
  messagingSenderId: "806523846971",
  appId: "1:806523846971:web:6efe9f43082d46c036b71e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
