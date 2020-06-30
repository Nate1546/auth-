// Config file
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyALEr1ldbl3RUwZDCERZW2B9uPeh6jAylU",
  authDomain: "willy-app-ea472.firebaseapp.com",
  databaseURL: "https://willy-app-ea472.firebaseio.com",
  projectId: "willy-app-ea472",
  storageBucket: "willy-app-ea472.appspot.com",
  messagingSenderId: "234403080173",
  appId: "1:234403080173:web:75a01a068b4f1e063029e4"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

// Other file
//import firebase from '../firebase';

console.log(firebase.name);
console.log(firebase.database());