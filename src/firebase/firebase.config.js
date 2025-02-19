// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL61dntxsmJHpApmcmAtmnhxPWuzosdYk",
  authDomain: "career-scope-fcc32.firebaseapp.com",
  projectId: "career-scope-fcc32",
  storageBucket: "career-scope-fcc32.firebasestorage.app",
  messagingSenderId: "346831284176",
  appId: "1:346831284176:web:93f1258e3aedaa3301fbd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth