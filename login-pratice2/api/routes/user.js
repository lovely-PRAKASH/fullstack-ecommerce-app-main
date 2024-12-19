const express=require("express");
const { addUser, getUsers } = require("../controllers/userController");
const router=express.Router();

router.route("/adduser").post(addUser)
router.route("/users").get(getUsers)


module.exports=router;