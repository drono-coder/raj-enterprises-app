// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (from the console)
const firebaseConfig = {
  apiKey: "AIzaSyAOW9WOH4i6_T29Kfz0fEW-HIr0Fih_yjU",
  authDomain: "raj-enterprises-4a9b1.firebaseapp.com",
  projectId: "raj-enterprises-4a9b1",
  storageBucket: "raj-enterprises-4a9b1.firebasestorage.app",
  messagingSenderId: "1085563539961",
  appId: "1:1085563539961:web:2043adf90fe116f055ad28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore DB
const db = getFirestore(app);

export { db };