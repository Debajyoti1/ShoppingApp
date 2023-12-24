// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCX5SY-v0ymVu9SO7Da2c2hxlG_e-4P-FY",
  authDomain: "react-4c35a.firebaseapp.com",
  projectId: "react-4c35a",
  storageBucket: "react-4c35a.appspot.com",
  messagingSenderId: "24561947084",
  appId: "1:24561947084:web:a152a1abbd163beb39cd69",
  measurementId: "G-DH2YW0SEDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);