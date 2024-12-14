const express= require("express");
const donenv=require("dotenv");
const path=require("path");
donenv.config({path:path.join(__dirname,"config","config.env")})

const server=express();




server.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})