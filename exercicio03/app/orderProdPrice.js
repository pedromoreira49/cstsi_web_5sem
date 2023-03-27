import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connectToFB.js";

dbConnect()
.then(db=>{
    const refDb = fb.ref(db, 'produtos')
    const query = fb.query(refDb, fb.orderByChild('preco'))
    fb.onChildAdded(query, datas => {
        console.log(datas.val())
    })
}).catch(err=>console.log(err))