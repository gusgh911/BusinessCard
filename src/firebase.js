import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjQwIT8NksDvVwXOiH2GuksMRbO6TecJE",
    authDomain: "business-card-maker-8ca05.firebaseapp.com",
    databaseURL: "https://business-card-maker-8ca05.firebaseio.com",
    projectId: "business-card-maker-8ca05",
    storageBucket: "business-card-maker-8ca05.appspot.com",
    messagingSenderId: "1092910671946",
    appId: "1:1092910671946:web:7bf8e30ab35195eead9eb3",
    measurementId: "G-QTELN7PMPE"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();;
