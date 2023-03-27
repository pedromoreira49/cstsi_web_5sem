import { initializeApp } from "firebase/app";

import * as dotenv from "dotenv";

dotenv.config({path: '../../.env'})

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
export const app = initializeApp(firebaseConfig);

/* let newUser = 1;
let refNode = ref(db, `users${newUser}`);
let newUserData = {
    email: "pedromoreira3@gmail.com",
    username: "Pedro Moreira 3"
} */

/* set(ref(db, 'users/'), {
    email: 'teste@user.com',
    username: 'tester'
}).then(() => {
    console.log('registro adicionado com sucesso!')
    process.exit(0)
}).catch(err => console.log("Erro: " + err)) */

/* const refNode = ref(db, 'users2')
const refAttr = child(refNode, 'username')

set(refAttr, 'luis ricardo').then(() => {
    console.log('sucesso!')
    process.exit(0)
}).catch(err => console.log("Error: " + err)) */

/* set(refNode, newUserData) */
