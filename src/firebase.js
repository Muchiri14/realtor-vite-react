// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzEXnZcRVztwUQDmB7UimOG1wD6i5QaYk",
  authDomain: "real-source-77566.firebaseapp.com",
  projectId: "real-source-77566",
  storageBucket: "real-source-77566.appspot.com",
  messagingSenderId: "384456324408",
  appId: "1:384456324408:web:e3667e2df1548fe10fbdcd"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();