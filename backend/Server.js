const express = require("express");
const cors=require("cors");
const { MongoClient } = require("mongodb");
const app = express();
app.use(express.json());
app.use(cors());
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
async function insertData()
 {
    await client.connect();
    console.log("Connected to MongoDB");
   // database name
    const db = client.db("shailendracollege");   
    // collection name
    const collection = db.collection("student"); 
    // POST API (same as your React fetch URL)
    app.post("/Home",async (req,res)=>{
          const data = req.body;
   await collection.insertOne(data);
    res.send("data inserted successfully");
    })
   app.listen(3001, () => {
    console.log("Server running on port 3001");
});
}
insertData();