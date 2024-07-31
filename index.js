// const fs = require("fs");
// const jsonData = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// const products = jsonData.products;
// above exports are moved to ./Controllers/product.js
const mongoose=require('mongoose')
const cors=require('cors')
const path=require('path')


require('dotenv').config()

//! Connecting to db
main().catch(err=>console.log("err=",err))
async function main(){
  await mongoose.connect(process.env.MONGO)
  console.log("db connected")
}

// defining schema
// Model 
// above both are shifted to Model folder

const express = require("express");
const productRouter=require('./routes/productRoute.js')
const userRouter=require('./routes/usersRoute.js')



const server = express();
server.use(cors())
server.use(express.json());
server.use(express.static(path.resolve(__dirname,process.env.STATIC_FOLDER)))

//CRUD API routes for products
server.use('/products',productRouter.router)

//CRUD API routes for users
server.use('/users',userRouter.router)
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'dist','index.html'))
})






server.listen(process.env.PORT, () => {
  console.log("server started");
});
