import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtESeflHNL8lJWHhS68BbuCUZW9Rw-cVY",
    authDomain: "twitter-clone-34677.firebaseapp.com",
    projectId: "twitter-clone-34677",
    storageBucket: "twitter-clone-34677.appspot.com",
    messagingSenderId: "829679153400",
    appId: "1:829679153400:web:7ae1565c5fabecbbf34b0d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;