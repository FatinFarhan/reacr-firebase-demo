import firebase from 'firebase'
import'firebase/auth'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDyhlnPJrfEkbV0xl4w_b1TuCpw8qXmvP4",
    authDomain: "upperline-app-47f20.firebaseapp.com",
    databaseURL: "https://upperline-app-47f20.firebaseio.com",
    projectId: "upperline-app-47f20",
    storageBucket: "upperline-app-47f20.appspot.com",
    messagingSenderId: "437252904346",
    appId: "1:437252904346:web:e11d877e7a831f0b885623"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  

  export const auth = firebase.auth()
  export const db=firebase.firestore()

  export default firebase