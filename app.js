const dbConnect = require('./mongodb')
const express = require('express');
const app = express();
app.use(express.json())

app.post('/', async (req,resp)=> {
   const db = await dbConnect();
   const userprofile = db.collection('userprofile')
   const data = await userprofile.insertOne({"name":"ajay"})
   console.log(data) //** 
   resp.json({
    data:data})
})

  //userprofile data
app.post('/userprofile', async (req,resp)=> {
    let data = await dbConnect("userprofile",req.body);  //*
console.log(data)
console.log(req.body)  //** 
resp.json({
    data:data})

})



app.get('/userprofile', async (req,resp)=> {
    console.log("ghftyfytfytfyf") 
const db = await dbConnect();
   const userprofile = db.collection('userprofile')
   console.log(userprofile);
   const data = await userprofile.find({ })
   console.log(data)

var dbo = db.db("userprofile");
const findResult = await db.collection("userprofile").find({}).toArray();
console.log('Found documents =>', findResult);


resp.json({
    data:data})


});













