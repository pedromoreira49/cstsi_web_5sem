import { app } from "../database/firebase.js";
import { getDatabase } from "firebase/database";
import { push, ref } from "firebase/database";

const db = getDatabase()


const addCliente = (nome, idade) => {
    push(ref(db, 'clientes/'), {
        nome,
        idade,
    }).then(() => {
        console.log("Cliente registrado(a): " + nome)
    }).catch(err => 
        console.error("Erro: " + err.message)
    )
}

addCliente('Maria', 15)
addCliente('João', 25)
addCliente('Ana', 23)
