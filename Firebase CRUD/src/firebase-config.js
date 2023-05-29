// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCErI1vGqB24xxDd0bTxJqBVeIIlpsGEwo",
  authDomain: "hostel-cl3.firebaseapp.com",
  projectId: "hostel-cl3",
  storageBucket: "hostel-cl3.appspot.com",
  messagingSenderId: "879036446977",
  appId: "1:879036446977:web:d47a91ae914d01d0df8300",
  measurementId: "G-3GXC0JX96E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
