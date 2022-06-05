// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from"firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey:"AIzaSyAJZ65PmtExx7DRF6aC16wF0JPg3ZLtNtU",
  authDomain: "dashboard-auth-firebase.firebaseapp.com",
  projectId: "dashboard-auth-firebase",
  storageBucket: "dashboard-auth-firebase.appspot.com",
  messagingSenderId: "142318569531",
  appId: "1:142318569531:web:f1095ec02691c91399b41e",
  measurementId: "G-XQ4ECMD660"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);