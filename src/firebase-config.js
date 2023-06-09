// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { oAuthentication } from './firebase-config';
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs, query, where, doc, getDoc, addDoc, Timestamp, updateDoc, deleteDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB05PVl64wY6FjJM9MaYTpmKWyorBH2Ts",
  authDomain: "mycalendartime.firebaseapp.com",
  projectId: "mycalendartime",
  storageBucket: "mycalendartime.appspot.com",
  messagingSenderId: "1053487361336",
  appId: "1:1053487361336:web:c3a7cace38960f7f7d65cd",
  measurementId: "G-EJQ60E3QZY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const oFirestore = getFirestore(app);

