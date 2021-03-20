import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLxiAWCh67dirnJNGYGWGY3d5LKx8lpwc",
  authDomain: "twitter-clone-f7cc2.firebaseapp.com",
  projectId: "twitter-clone-f7cc2",
  storageBucket: "twitter-clone-f7cc2.appspot.com",
  messagingSenderId: "166212766964",
  appId: "1:166212766964:web:12c97cea6e42fae1b462a1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;