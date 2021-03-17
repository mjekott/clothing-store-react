import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyBACTArxq8hy46ab8BSTPkiUnMlaZ5XrQQ",
  authDomain: "crwn-db-67294.firebaseapp.com",
  projectId: "crwn-db-67294",
  storageBucket: "crwn-db-67294.appspot.com",
  messagingSenderId: "282890958312",
  appId: "1:282890958312:web:0d4de50e31c1196a09205d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
