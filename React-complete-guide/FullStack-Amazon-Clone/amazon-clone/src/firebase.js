import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2X4Vjt5EvmuPTdcAZRMz13Um2nQhXn5c",
  authDomain: "challenge-3e0e5.firebaseapp.com",
  databaseURL: "https://challenge-3e0e5-default-rtdb.firebaseio.com",
  projectId: "challenge-3e0e5",
  storageBucket: "challenge-3e0e5.appspot.com",
  messagingSenderId: "196151983307",
  appId: "1:196151983307:web:752108bff0e911879eaf4e",
  measurementId: "G-7ZE9C1KEZQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

// const app = firebase.initializeApp(firebaseConfig);
// const db = firebase.initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });
// const auth = firebase.auth();

export { db, auth };

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB2X4Vjt5EvmuPTdcAZRMz13Um2nQhXn5c",
//   authDomain: "challenge-3e0e5.firebaseapp.com",
//   projectId: "challenge-3e0e5",
//   storageBucket: "challenge-3e0e5.appspot.com",
//   messagingSenderId: "196151983307",
//   appId: "1:196151983307:web:cdaa911e767cfe489eaf4e",
//   measurementId: "G-W60Z81L03W",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
