// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDuMLAWXvU0O2hU_34n4CG2keXEdyeBy4c",
  authDomain: "slack-clone-21a75.firebaseapp.com",
  databaseURL: "https://slack-clone-21a75.firebaseio.com",
  projectId: "slack-clone-21a75",
  storageBucket: "slack-clone-21a75.appspot.com",
  messagingSenderId: "600225654646",
  appId: "1:600225654646:web:0b245c56eaa09a91aefc57",
  measurementId: "G-DCGNQK1HL9"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;

