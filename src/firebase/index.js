// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from 'firebase/firestore'
// import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf7kafJHqBMCyDoIKGEcDT_iCyyP9zXOU",
  authDomain: "shop2hand-a0e5b.firebaseapp.com",
  projectId: "shop2hand-a0e5b",
  storageBucket: "shop2hand-a0e5b.appspot.com",
  messagingSenderId: "903484685741",
  appId: "1:903484685741:web:950457a6f6e8ab3867b524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

// init services
const db = getFirestore()

//ref collection
const ref = collection(db, 'products')

//get collection

export default app;
export { db, ref } 