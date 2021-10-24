import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA24Flv7uKnQrIo9RlBKUJGLr7DWyLbMOg",
    authDomain: "snapchatclone-3aeaf.firebaseapp.com",
    projectId: "snapchatclone-3aeaf",
    storageBucket: "snapchatclone-3aeaf.appspot.com",
    messagingSenderId: "349460518480",
    appId: "1:349460518480:web:140b689a4a5a740162a355"
  };


firebase.initializeApp(firebaseConfig);
 
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();