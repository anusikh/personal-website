// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD74JWASJM-d9a6dRI8OVJzMYi54g1DvqQ",
  authDomain: "blog-93a89.firebaseapp.com",
  projectId: "blog-93a89",
  storageBucket: "blog-93a89.appspot.com",
  messagingSenderId: "536715195544",
  appId: "1:536715195544:web:cf1feb57c0cc7705b94ced",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export default db;
