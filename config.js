import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {

 apiKey: "AIzaSyBAIXWOlrk2UIJ8EmMU8Qr39AAzBcb6zlI",
 authDomain: "virtualbookreader-4fd9f.firebaseapp.com",
 projectId: "virtualbookreader-4fd9f",
 storageBucket: "virtualbookreader-4fd9f.appspot.com",
 messagingSenderId: "419496650115",
 appId: "1:419496650115:web:5574ad26aa6d05c98e02b6"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()