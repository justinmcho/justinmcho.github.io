import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDxgmcLBLhbU7jitxTgK1kYVlt4cr309JI",
  authDomain: "blog-f14cf.firebaseapp.com",
  projectId: "blog-f14cf",
  storageBucket: "blog-f14cf.appspot.com",
  messagingSenderId: "587129750002",
  appId: "1:587129750002:web:4e23b919514d2091336b6b",
  measurementId: "G-FPK1Q6Z9XN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
