const express = require("express");
const donenv = require("dotenv");
const path = require("path");
const connectDatabase = require("./config/databaseConnection");
donenv.config({ path: path.join(__dirname, "config", "config.env") })

connectDatabase();
const server = express();
server.use(express.json());
const user = require("./routes/user");

server.use("/api/auth/", user);


server.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})