// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSIROuAfcSl4Xsmpa34cYNBhVjvfIZrcc",
    authDomain: "note-app-15825.firebaseapp.com",
    projectId: "note-app-15825",
    storageBucket: "note-app-15825.appspot.com",
    messagingSenderId: "883323703251",
    appId: "1:883323703251:web:f949f0ae55ce891911a926",
    measurementId: "G-QPED23X5B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);