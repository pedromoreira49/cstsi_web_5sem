import { MongoClient } from "mongodb";
import { mongo } from "./key.js";

const connect = async () => {
    try{
        const client = new MongoClient(mongo);
        
        await client.connect();

        return client.db('store').collection('produtos');
    }catch(error){
        console.error('Error ', error);
        throw error;
    }
}

export default connect