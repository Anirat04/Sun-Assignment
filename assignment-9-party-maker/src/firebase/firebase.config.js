// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE9vMcEyw-oFWR_iLuV4PDc9hq3InbV2A",
  authDomain: "assignment-9-party-maker.firebaseapp.com",
  projectId: "assignment-9-party-maker",
  storageBucket: "assignment-9-party-maker.appspot.com",
  messagingSenderId: "14489207842",
  appId: "1:14489207842:web:add8f8bee1d4ebac27367b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;