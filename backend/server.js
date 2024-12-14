const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors=require("cors")
const createDatabase = require("./config/connectDatabase");

dotenv.config({path: path.join(__dirname,"config","config.env")})
const server = express();
createDatabase();
server.use(express.json());
server.use(cors());

const register=require("./routes/register");
const login=require("./routes/login");
server.use("/api/",register);
server.use("/api/",login);



server.listen(process.env.PORT,()=>{
    console.log(`server is listening in port ${process.env.PORT}`)
})