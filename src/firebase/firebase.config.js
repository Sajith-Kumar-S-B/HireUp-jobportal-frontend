// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmCG3phyMSTse3_-_2E-7JMcJgDEOrpMs",
  authDomain: "hireup-jobportal.firebaseapp.com",
  projectId: "hireup-jobportal",
  storageBucket: "hireup-jobportal.appspot.com",
  messagingSenderId: "111646241308",
  appId: "1:111646241308:web:27af8c6f204e6537c5a5d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {app,auth};