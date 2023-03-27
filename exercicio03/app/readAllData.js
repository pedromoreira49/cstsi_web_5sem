import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connectToFB.js";

dbConnect()
.then(db=>{
    const refDb = fb.ref(db)
    fb.get(fb.child(refDb, `produtos/`)).then((data) => {
        if(data.exists()){
            console.table(data.val())
        }else{
            console.log("Dados não encontrados")
        }
    }).catch(err => {
        console.error(err.message)
    }).finally(() => {
        process.exit()
    })
}).catch(err=>console.log(err))