// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuKP24F77YfeRtu4xTOxVi0qe3Eo00ZbM",
  authDomain: "splendora-325ca.firebaseapp.com",
  projectId: "splendora-325ca",
  storageBucket: "splendora-325ca.appspot.com",
  messagingSenderId: "626029500740",
  appId: "1:626029500740:web:24ffb64407853a55bd5f11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;