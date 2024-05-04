// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrnPxqIoEnD6r5kzR25aQW6X7we4T_by8",
    authDomain: "coffee-store-a45ec.firebaseapp.com",
    projectId: "coffee-store-a45ec",
    storageBucket: "coffee-store-a45ec.appspot.com",
    messagingSenderId: "39925736038",
    appId: "1:39925736038:web:343cf5e3ea167f037c43a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;