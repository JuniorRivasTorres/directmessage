import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAnncfCtb2urslW_xVzwp76AmPisA4aCIQ",
    authDomain: "imessage-clone-jrt.firebaseapp.com",
    databaseURL: "https://imessage-clone-jrt.firebaseio.com",
    projectId: "imessage-clone-jrt",
    storageBucket: "imessage-clone-jrt.appspot.com",
    messagingSenderId: "631453765476",
    appId: "1:631453765476:web:15913c00a9f86ff2f47471",
    measurementId: "G-H2YKZWHH6F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;