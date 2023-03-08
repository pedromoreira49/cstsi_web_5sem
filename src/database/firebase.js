import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from 'firebase/database';

import dotenv from "dotenv";

dotenv.config()

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase()

let newUser = 2;
let refNode = ref(db, `users${newUser}`);
let newUserData = {
    email: "pedromoreira@gmail.com",
    username: "Pedro Moreira 2"
}

set(refNode, newUserData)
