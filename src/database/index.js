// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAinhPOx_j82bp9khWujpF1IY5RDCOPLfY",
  authDomain: "vch-consult-aid-ae6f6.firebaseapp.com",
  projectId: "vch-consult-aid-ae6f6",
  storageBucket: "vch-consult-aid-ae6f6.appspot.com",
  messagingSenderId: "27650884465",
  appId: "1:27650884465:web:bfda51a22eeeee06c36cd0",
  measurementId: "G-B8Q18L4V0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);