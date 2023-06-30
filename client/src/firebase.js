// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-pM8nU1h1C97vAEJ37fGu5Jc-d-1DBVo",
  authDomain: "croatia-advisor.firebaseapp.com",
  projectId: "croatia-advisor",
  storageBucket: "croatia-advisor.appspot.com",
  messagingSenderId: "177235721767",
  appId: "1:177235721767:web:9eb969b89105d633e61802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

