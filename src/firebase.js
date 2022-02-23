import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBshwstLsPkqouwrlvyQaMZq7kR-ZefRvQ",

    authDomain: "crystal-tools-wiki.firebaseapp.com",

    databaseURL: "https://crystal-tools-wiki-default-rtdb.firebaseio.com",

    projectId: "crystal-tools-wiki",

    storageBucket: "crystal-tools-wiki.appspot.com",

    messagingSenderId: "992172481290",

    appId: "1:992172481290:web:631e7b6453d5d4ffc138f3",

    measurementId: "G-E2JM0DJFC1"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
