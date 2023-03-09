import { app } from "../database/firebase.js";
import { getDatabase } from "firebase/database";
import { ref, child, set } from "firebase/database";

const db = getDatabase()

const refNode = ref(db, 'clientes/-NQ7gfuj8phe4O3NtiEo')
const refAttr = child(refNode, 'nome')
set(refAttr, "Maria Antonia Santos").then(() => {
    console.log("Sobrenome adicionado!")
    process.exit(0)
}).catch(err => console.error("Erro: " + err.message))