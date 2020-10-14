import React from 'react';
import firebase from 'firebase';

const FirebaseConfig = {
  apiKey: AIzaSyCjQwIT8NksDvVwXOiH2GuksMRbO6TecJE,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const firebaseApp = firebase.initializeApp(FirebaseConfig);


export default firebaseApp;