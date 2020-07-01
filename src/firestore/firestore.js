import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAdH9dZJTjKKugwhfhaIERdzkytD2NAXpk",
  authDomain: "appcotizador.firebaseapp.com",
  databaseURL: "https://appcotizador.firebaseio.com",
  projectId: "appcotizador",
  storageBucket: "appcotizador.appspot.com",
  messagingSenderId: "41400734898",
  appId: "1:41400734898:web:682c4dcaab1c4ceddca5ab",
});

const db = firebase.firestore();

export default db;
