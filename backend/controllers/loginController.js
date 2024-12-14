const registerModel = require("../models/registerModel");

exports.userLogin=async (req,res,next)=>{

    console.log(req.body);
    try {
        const {email, password}=req.body;
        if(!email){
            return res.status(400).json({
                success:false,
                message:"email is required"
            })
        }
       const user= await registerModel.findOne({email:email});

       if(!user){
        return res.status(400).json({
            success:false,
            message:"user not exist"
        })
       }
       if(user.password===password){
        return res.status(200).json({
            success:true,
            message:"login success from server",
            user,
           })
       }else{
        return res.status(400).json({
            success:false,
            message:"email or password is incorrect"
        })
       }
       
       console.log(userdata,"from db")
    } catch (error) {
        res.status(400).json({
            success:false,
            error: error.message,
        })
    }
}

