import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR90bzXiy17kgnsO79puVBNIk98wtQGtc",
  authDomain: "hotel-app-95eec.firebaseapp.com",
  projectId: "hotel-app-95eec",
  storageBucket: "hotel-app-95eec.appspot.com",
  messagingSenderId: "584007359893",
  appId: "1:584007359893:web:4a4a0e4f68c5e97cddaa9c",
  measurementId: "G-EGP9ZJSNM1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const database = getFirestore(app);

export { auth, database,app }; 