const express = require("express");

const router = express.Router();

const {protect} = require('../middleware/authMiddleware')

//const {registerUser,loginUser,alluserSearch,createchate,getuserchat,allusershow,groupchat,Renamegroupchat,Addmemberingroup,removeMemberingroup} = require('../controllers/userControllers')

const {userRegister,userLogin,getFriend,sendMessage,getMessage,sendImageMessage} = require('../controllers/authController')
//const {protect} = require('../middleware/authMiddleware')

//router.get("/ragib",(req,res)=> {   

//   res.send("Hellow")

//})

 //localhost:5000/api/user/register
 router.post("/register",userRegister)
//localhost:5000/api/user/login
 router.post("/login",userLogin)
//localhost:5000/api/user/getfriend
 router.get("/getfriend",protect,getFriend)
//localhost:5000/api/user/sendmessage
 router.post("/sendmessage",protect,sendMessage)
 //localhost:5000/api/user/getmessage
 router.get("/getmessage/:id",protect,getMessage)
 
 //localhost:5000/api/user/sendimagemessage
 router.post("/sendimagemessage",protect,sendImageMessage)



module.exports = router;

