const mongoose=require("mongoose");

const createDatabase=()=>{
    mongoose.connect(process.env.DB_URI).then((con)=>{
        console.log(`mongodb is connect to the host ${con.connection.host} on ${con.connection.port}`)
    }).catch((err)=>{
        console.log(err);
    })
    
}
module.exports=createDatabase