
//Inicializacion de Firebase/Firestore
//import 'firebase/compat/firestore';

import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore'



//require("dotenv").config()


const app = firebase.initializeApp({
     apiKey: "AIzaSyB2F4R4KkxUwb4GFKs7twRhiHS5i-i51D4",
     authDomain: "scopic-73416.firebaseapp.com",
     projectId: "scopic-73416",
     storageBucket: "scopic-73416.appspot.com",
     messagingSenderId: "475263107333",
     appId: "1:475263107333:web:27180a036864e16618376c"
});



/*
se.firestore().doc();
getDoc(docRef); */


const db = getFirestore(app)
export default db