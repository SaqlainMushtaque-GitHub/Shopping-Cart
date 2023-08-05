import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import 'firebase/firestore';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_R8Y4foBz4yoySt_joPIWYw_J5jdd3lE",
  authDomain: "cart-eb336.firebaseapp.com",
  projectId: "cart-eb336",
  storageBucket: "cart-eb336.appspot.com",
  messagingSenderId: "812327490014",
  appId: "1:812327490014:web:1fa8d9fbcd8fa5ce984d4f",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export { db };
export default firebase;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
