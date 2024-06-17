// src/firebase/firebase.config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdVDyNNkjk4E9vlnO9_bO77sErhL0rfus",
  authDomain: "b9-a9-real-estate-19fb4.firebaseapp.com",
  projectId: "b9-a9-real-estate-19fb4",
  storageBucket: "b9-a9-real-estate-19fb4.appspot.com",
  messagingSenderId: "267214987110",
  appId: "1:267214987110:web:2b2fc846f2abc039a532a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);
export { auth };