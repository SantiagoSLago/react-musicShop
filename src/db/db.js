
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBxoag_iYxAT03rEQ-8GVJcvEQ8_Qyh3M0",
  authDomain: "ecommerce-react-a504a.firebaseapp.com",
  projectId: "ecommerce-react-a504a",
  storageBucket: "ecommerce-react-a504a.appspot.com",
  messagingSenderId: "465625345727",
  appId: "1:465625345727:web:dd9a0750a987f3e8b9200a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()


export default db
