// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsh0AAdCs73L4WtEE7UG-ZnwyfkQNRcTg",
    authDomain: "health-services-4u-3f8d4.firebaseapp.com",
    projectId: "health-services-4u-3f8d4",
    storageBucket: "health-services-4u-3f8d4.appspot.com",
    messagingSenderId: "581093798774",
    appId: "1:581093798774:web:b46a21a40004f11ea14057"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;