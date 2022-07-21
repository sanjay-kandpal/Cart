import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const root = ReactDOM.createRoot(document.getElementById('root'));

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt0UZsPN_3Iw6xdaGjz_NmFaHNxaiNANo",
  authDomain: "cart-1ee4c.firebaseapp.com",
  projectId: "cart-1ee4c",
  storageBucket: "cart-1ee4c.appspot.com",
  messagingSenderId: "165578168570",
  appId: "1:165578168570:web:ac7899b4da62604eadd143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


