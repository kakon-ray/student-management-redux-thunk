// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeqGYXFxXjGIyyzian1gs_1iIeUCIQs-4",
  authDomain: "content-management-ed528.firebaseapp.com",
  projectId: "content-management-ed528",
  storageBucket: "content-management-ed528.appspot.com",
  messagingSenderId: "657720644829",
  appId: "1:657720644829:web:908f196eaca0f20fb73734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;