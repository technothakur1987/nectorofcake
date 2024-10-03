// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFZOAURFG9cbV9O729ps4vbGLVmQYlTJ0",
  authDomain: "nectorofcake.firebaseapp.com",
  projectId: "nectorofcake",
  storageBucket: "nectorofcake.appspot.com",
  messagingSenderId: "754561810894",
  appId: "1:754561810894:web:f6d3444ba8fdeb43d76b9f"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }