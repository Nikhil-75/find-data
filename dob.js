const express = require('express');
const app = express();
const dbConnect = require('./mongodb')

app.use(express.json())
app.get('/age', async (req,resp)=> {
    const data = await dbConnect("userprofile",req.body);
console.log(data)
resp.json({
    data:data
})       
          data = await data.find.dob({ }).toArray();
           var dob = [];
         dob.forEach(arrayFunction);
         function arrayFunction() {
            console.log("age")
         

            if(age>25) {
                
            }

         }
    })


app.listen(4000, ()=>console.log("server is up"));