import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBcGG5ITvsJUVuO7-lSQcxxrLPElAJXtPU",
  authDomain: "revents-246518.firebaseapp.com",
  databaseURL: "https://revents-246518.firebaseio.com",
  projectId: "revents-246518",
  storageBucket: "",
  messagingSenderId: "720330712462",
  appId: "1:720330712462:web:64598961df1573d8"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

// const firestore = firebase.firestore();
// const settings = {
//   timestampInSnapshots: true
// }
// firestore.settings(settings);

export default firebase;