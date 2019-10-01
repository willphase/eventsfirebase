import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDj8BI_4xa0ovRakftFHhPDuuiCUAB_R_g",
  authDomain: "events-adventure.firebaseapp.com",
  databaseURL: "https://events-adventure.firebaseio.com",
  projectId: "events-adventure",
  storageBucket: "events-adventure.appspot.com",
  messagingSenderId: "765304325415",
  appId: "1:765304325415:web:53e33596b659177df61502"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;
