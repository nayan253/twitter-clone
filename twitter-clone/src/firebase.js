import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDYVK22zWZ0j-_MR46sOcYLqex9T_WFQdI",
    authDomain: "twitter-clone-6a047.firebaseapp.com",
    projectId: "twitter-clone-6a047",
    storageBucket: "twitter-clone-6a047.appspot.com",
    messagingSenderId: "238072874053",
    appId: "1:238072874053:web:6f4eaebdc753e677320f2c",
    measurementId: "G-8EDW3ZHT18"
  };
  const firebaseApp = firebase.initializeApp();
  const db = firebaseApp.firestore(firebaseConfig);

  export default db;