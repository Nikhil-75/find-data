const {MongoClient} = require("mongodb"); 
const url = "mongodb://127.0.0.1:27017/userprofile";
const client = new MongoClient(url);

const insert = async (collectionName, data)=>{
    return await client.connect();
  
}

module.exports = insert