import connect from "./connect.js";

const searchGamer = async () => {
    try{
        const db = await connect();
        const result = await db.find({
            $text: {
                $search: "'Camera Dupla'"
            }
        }, {
            sort: { preco: -1},
            projection: {_id: 0}
        }).toArray()

        console.table(result);
    }catch(error){
        console.error('Error: ', error);
        throw error;
    }finally{
        process.exit(0);
    }
}

searchGamer();