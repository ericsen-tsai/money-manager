import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBN0rk1GlxR5vdXDUuEeLxAYKXn60OUP0I",
  authDomain: "mymoney-b9425.firebaseapp.com",
  projectId: "mymoney-b9425",
  storageBucket: "mymoney-b9425.appspot.com",
  messagingSenderId: "761257103631",
  appId: "1:761257103631:web:ea49b54b02a15b640e6e7a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// init services

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }