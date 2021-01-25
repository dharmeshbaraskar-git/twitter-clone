import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQR8d5WgvVClkAD9KVBpTHwB95Q5IqYuE",
    authDomain: "twitter-clone-64993.firebaseapp.com",
    projectId: "twitter-clone-64993",
    storageBucket: "twitter-clone-64993.appspot.com",
    messagingSenderId: "273487605222",
    appId: "1:273487605222:web:422aab97cc22f62149ba27"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
