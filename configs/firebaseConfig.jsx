// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "wifreframe-7bcc9.firebaseapp.com",
  projectId: "wifreframe-7bcc9",
  storageBucket: "wifreframe-7bcc9.firebasestorage.app",
  messagingSenderId: "276877120241",
  appId: "1:276877120241:web:61033b74f4ea00327d0f50",

  measurementId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app);

export { db };