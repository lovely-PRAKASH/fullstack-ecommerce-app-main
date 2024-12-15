const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: [true, "name is require"]
    },
    email:{
        type:String,
        required:[true, "email is required"]
    },
    password:{
        type:String,
        required:[true, "password is required"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const userModel=mongoose.model("users",userSchema);
module.exports=userModel