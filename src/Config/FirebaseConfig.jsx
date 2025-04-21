// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// Replace with your actual Firebase config values
const firebaseConfig = {
  apiKey: "AIzaSyDOjB-Uv1_S6ba2D-dkH7sQoll-wPlAauo",
  authDomain: "irctc-c0458.firebaseapp.com",
  projectId: "irctc-c0458",
  storageBucket: "irctc-c0458.firebasestorage.app",
  messagingSenderId: "866477370445",
  appId: "1:866477370445:web:6e45f55466930cf0020004"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };