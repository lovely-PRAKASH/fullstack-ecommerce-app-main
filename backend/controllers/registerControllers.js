const registerModel = require("../models/registerModel");

function calculateAge(dob){
    const birthDate=new Date(dob);
    const today=new Date();
    let age=today.getFullYear()- birthDate.getFullYear();
    return age;
}

exports.createRegisters=async (req, res,next)=>{
    console.log(req.body,"server data");

    try{
        const {username, dob, email, password}=req.body;
        const age=calculateAge(dob);
       
        const user= await registerModel.create({
            username,
            dob,
            age,
            email,
            password
        })

        res.status(200).json({
            success:true,
            user
        })
    }catch (error) {
        if(error.code===11000){
            return res.status(400).json({
                success:false,
                error:"email is already exist"
            })
        }
        res.json({
            success:false,
            error:error.message
        })
    }
}