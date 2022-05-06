// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHgxh3vNHfLZij_espEjigJ5QxK6m5B6s",
    authDomain: "slack-clone-2af5b.firebaseapp.com",
    projectId: "slack-clone-2af5b",
    storageBucket: "slack-clone-2af5b.appspot.com",
    messagingSenderId: "584080600240",
    appId: "1:584080600240:web:04779377c6a403b1ca5f75",
    measurementId: "G-ZWNF9BLM5W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
