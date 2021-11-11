import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAWOVfPJ3wSLXbcUMXgADvXkjU_sPPibho",
  authDomain: "firegram-94505.firebaseapp.com",
  projectId: "firegram-94505",
  storageBucket: "firegram-94505.appspot.com",
  messagingSenderId: "1057828626233",
  appId: "1:1057828626233:web:912b28ecc7a4a9f03a12e8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };