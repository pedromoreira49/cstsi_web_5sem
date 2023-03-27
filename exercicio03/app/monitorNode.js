import  * as fb from "firebase/database";// sera preciso usar fb antes de cada funcao
import { dbConnect } from "./connectToFB.js";

dbConnect()
.then(db=>{
    const refDb = fb.ref(db, 'produtos')
    fb.onChildChanged(refDb, (data) => {
        console.table(data.val())
        if(data.key == '-MwSzyJMlNDToTGtPuhc'){
            fb.off(refDb, 'child_changed')
        }
    })
}).catch(err=>console.log(err))