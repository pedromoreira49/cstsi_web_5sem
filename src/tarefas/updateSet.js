import { app } from "../database/firebase.js";
import { getDatabase } from "firebase/database";
import { ref, set } from "firebase/database";

const db = getDatabase()

set(ref(db, 'clientes/-NQ7gfuzBAyh_jjh5zEv'), {
    nome: 'João Pedro',
    idade: 22
}).then(() => {
    console.log("Registro alterado!")
    process.exit(0)
}).catch(err => console.error("Erro: "+ err.message))
