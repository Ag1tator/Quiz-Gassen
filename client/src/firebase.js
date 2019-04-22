import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCtEkeyRrSIElte8qoZZ_tZNIK9MhFB3jE",
  authDomain: "ca-hackathon-f0cb4.firebaseapp.com",
  databaseURL: "https://ca-hackathon-f0cb4.firebaseio.com",
  projectId: "ca-hackathon-f0cb4",
  storageBucket: "ca-hackathon-f0cb4.appspot.com",
  messagingSenderId: "53872148783"
};
firebase.initializeApp(config);
const firestore = firebase.firestore()


export {
  firebase,
  firestore
}



