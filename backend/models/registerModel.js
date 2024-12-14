const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "name is required"]
    },
    dob: {
        type: String,
        require: [true, "Date of birth is required"]
    },
    age:{
        type: Number,
        require:[true, "age is required"]
    },
    email: {
        type: String,
        require: [true, "email is required"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "password is not empty"]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const registerModel=mongoose.model("Users",registerSchema)

module.exports=registerModel