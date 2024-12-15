const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/loginPratice2").then(
        (con) => console.log(`mongodb is running on host ${con.connection.host} in PORT ${con.connection.port}`)).catch((err)=>{
            console.log(err);
        })
}

module.exports =connectDatabase