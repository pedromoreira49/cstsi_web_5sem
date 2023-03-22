import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connectToFB.js";

dbConnect()
.then(db=>{
    const refDb = fb.ref(db, 'produtos')
    const query = fb.query(refDb, fb.orderByKey())
    fb.onValue(query, datas => {
        let arrayDatas = Object.entries(datas.val())
        let invert = Object.fromEntries(arrayDatas.reverse())
        console.log(invert)
        process.exit(0)
    })
}).catch(err=>console.log(err))