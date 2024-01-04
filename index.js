const express = require('express');

const {barrouter}=require("./barcode.router")
var cors = require('cors')

 

const {connectDB} = require('./db'); 
//ncdjncdf



const app = express();
app.use(express.json());
app.use(cors())


app.use('/brcodes',barrouter );



app.listen(3000, async() => {
    try {
      await connectDB
      console.log("connected to data-base")
      
  } catch (error) {
     console.log(error) 
  }
  console.log(`server is running at port ${process.env.port}`);
  });
  