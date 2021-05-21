import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDPCAAi9nHUaPrG5jML9pHJ88dLgl9b498",
    authDomain: "prueba-react-6f76b.firebaseapp.com",
    projectId: "prueba-react-6f76b",
    storageBucket: "prueba-react-6f76b.appspot.com",
    messagingSenderId: "996121822317",
    appId: "1:996121822317:web:aefe91cdee869f661b2b64",
    measurementId: "G-PQJ8HC8GVS"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()
//firebase.analytics();

export {auth}