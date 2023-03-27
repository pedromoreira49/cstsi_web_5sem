import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connectToFB.js";

dbConnect()
.then(db=>{
    const refDb = fb.ref(db)
    fb.onChildChanged(refDb, (data) => {
        console.table(data.val())
    })
}).catch(err=>console.error(err.message))