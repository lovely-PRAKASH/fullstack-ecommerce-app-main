const userModel = require("../Models/UserModel");

exports.addUser=async(req,res)=>{
    try {
        console.log(req.body);
        const {username, email, password}=req.body;
        const user=await userModel.create({username, email, password});

        res.status(200).json({
            success:true,
            user,
            message:"user created successfully"
        })

    } catch (error) {
       res.status(400).json({
        success:false,
       error:error.message
       })
    }
}