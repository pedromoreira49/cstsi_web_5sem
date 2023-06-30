import { MongoClient } from "mongodb";
import { mongo } from "./key.js";

const connect = async () => {
    
    const client = new MongoClient(mongo);

    try{
        await client.connect();

        const collection = client.db('store').collection('produtos');

        const result = await collection.find().toArray();

        console.table(result);
    }catch(error){
        console.error('Error ', error);
        throw error;
    }finally{
        await client.close();
        process.exit(0);
    }
}

export default connect