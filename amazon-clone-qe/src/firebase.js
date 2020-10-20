import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAuUHAj4-DbR6__uvu2lCyyvh8aCDTe4NY",
    authDomain: "clone-qe.firebaseapp.com",
    databaseURL: "https://clone-qe.firebaseio.com",
    projectId: "clone-qe",
    storageBucket: "clone-qe.appspot.com",
    messagingSenderId: "29990911346",
    appId: "1:29990911346:web:7f0225f2eb487b2f9371eb",
    measurementId: "G-FWHCNDRF8J"
});

  const auth = firebase.auth();

  export { auth };