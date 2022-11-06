/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB1xcEaEmgchd4Hr3NYAlo0KFRPIJHYGA",
  authDomain: "tradenc-3eec6.firebaseapp.com",
  projectId: "tradenc-3eec6",
  storageBucket: "tradenc-3eec6.appspot.com",
  messagingSenderId: "6476957747",
  appId: "1:6476957747:web:4727b892e23dd5c658fb46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
*/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlW9DdMYhLaA91gfF2NBK9_z3x2yUwn_U",
  authDomain: "tradenc-b0f73.firebaseapp.com",
  projectId: "tradenc-b0f73",
  storageBucket: "tradenc-b0f73.appspot.com",
  messagingSenderId: "442302222747",
  appId: "1:442302222747:web:75c7b09f92a2c5ddc8113e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();