import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyByNZ8BUjA1irqszara-aZZ_iCzhlQce-g",
    authDomain: "discord-315b2.firebaseapp.com",
    projectId: "discord-315b2",
    storageBucket: "discord-315b2.appspot.com",
    messagingSenderId: "539766452695",
    appId: "1:539766452695:web:00d46689d19f29f5889b92"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;
