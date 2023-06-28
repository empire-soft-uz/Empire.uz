// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/database"
import "firebase/compat/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGBR5InXx7zHpxzAXjwQNp4XOJz_Wa3Fo",
  authDomain: "empire-300bd.firebaseapp.com",
  databaseURL: "https://empire-300bd-default-rtdb.firebaseio.com",
  projectId: "empire-300bd",
  storageBucket: "empire-300bd.appspot.com",
  messagingSenderId: "154548584614",
  appId: "1:154548584614:web:390e3eb15f49880dee7467",
  measurementId: "G-K7PMP2FKGY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database()
export const storage = firebase.storage()
export default firebase;