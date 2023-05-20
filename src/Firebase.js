// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzLpTAhRV_-6omtpyFFhUO-GV_5pM1yTc",
  authDomain: "ecart-flipkart.firebaseapp.com",
  projectId: "ecart-flipkart",
  storageBucket: "ecart-flipkart.appspot.com",
  messagingSenderId: "48636370391",
  appId: "1:48636370391:web:88d60ec961b626059dbf92",
  measurementId: "G-Y25EK98KG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);