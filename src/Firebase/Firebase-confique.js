// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBWZivu--mv-CpCzffDmH3t8UJWO0_afk",
  authDomain: "fresh-pik.firebaseapp.com",
  projectId: "fresh-pik",
  storageBucket: "fresh-pik.appspot.com",
  messagingSenderId: "438933094082",
  appId: "1:438933094082:web:c550c0db3fae40903a455b",
  measurementId: "G-MD2B20Q1HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
export default Auth