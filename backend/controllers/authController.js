const asyncHandler = require('express-async-handler')
const User = require('../models/authModel')
const Message = require('../models/messageModel')


const bcrypt = require('bcryptjs');
const generateToken = require("../config/generateToken")
const cloudinary = require('cloudinary')
//module.exports.

//user register
//localhost:5000/api/user/register
       const userRegister = asyncHandler(async(req,res)=>{
          
          const result = await cloudinary.v2.uploader.upload(req.body.image,{

             folder:'avater'
            
          })

          const {userName,email,password,image}= req.body

          const userExists = await User.findOne({email})

          if(userExists){

            res.status(400).json({message:'User Already Exist'})

          }else{

              const user = await User.create({

                  userName,
                  email,
                  image:result.secure_url,
                  password:bcrypt.hashSync(password,10),

              })

               if(user){

                 res.json({

                     _id:user._id,
                     userName:user.userName,
                     email:user.email,
                     image:user.image,
                     token:generateToken(user._id)

                 })

               }else{

                 res.status(401).json({message:'Invalid User Data'})

               }

          }

})



//user login
//localhost:5000/api/user/login
const userLogin = asyncHandler( async (req,res) => {

      const {email,password} = req.body;

      if(!email || !password){

         res.status(404).json({message:'Require All The Field'})

      }else{


       const user = await User.findOne({email})

             if(!user){

              res.status(401).json({message:'Invalid Email or Password'})

              }else{


                    if( user && (await user.matchPassword(password))){

                           res.json({

                             _id:user._id,
                              userName:user.userName,
                              email:user.email,
                              image:user.image,
                              token:generateToken(user._id)

                            })

                     }else{

                       res.status(401).json({message:'Invalid Email or Password'})

                      }


              }


      }


})





//latest message function   

const getLastMessage = async (myId,fdId) => {

       
   const msg = await Message.findOne({
          
          $or:[
        
                {
                   
                    $and:[{senderId:{$eq:myId}},{receiverId:{$eq:fdId}}]

                },

               {

                   $and:[{senderId:{$eq:fdId}},{receiverId:{$eq:myId}}]

                }

              ]

       }).sort({updatedAt:-1});


       return msg;



}


//getFriend
 //localhost:5000/api/user/getfriend

const getFriend = asyncHandler( async (req,res)=>{   

  
 const myId = req.myId._id.valueOf()

 //valueOf na dile new ObjectId("62716403c48ecbfad7a4faa9") a vabe asbe r 
 //value of dile 62716403c48ecbfad7a4faa9 a vabe asbe
  //console.log(senderId._id)

let fnd_msg = [];



  const allfriends = await User.find({_id:{$ne:req.myId}}).select('-password')
       

                            //login kora user bad a dekhabe



   for(i=0;i<allfriends.length;i++){
     
       let Imsg = await getLastMessage(myId,allfriends[i]._id)

       fnd_msg = [...fnd_msg,{fndInfo:allfriends[i],msgInfo:Imsg}]

   }


  // console.log(fnd_msg)

    // res.status(200).json({friends:allfriends})

    res.status(200).json({success:true,friends:fnd_msg})


     // if(friends){

  //res.status(200).json(friends)

   //   }else{


     //     res.status(401).json({message:'Not Any Friend'})
    //  }


})


//send message  
//localhost:5000/api/user/sendmessage


const sendMessage = asyncHandler( async (req,res)=>{  

  const {senderName,receiverId,message} = req.body
  //const senderId = req.myId;

 const senderId = req.myId._id.valueOf()

 //valueOf na dile new ObjectId("62716403c48ecbfad7a4faa9") a vabe asbe r 
 //value of dile 62716403c48ecbfad7a4faa9 a vabe asbe
  //console.log(senderId._id)

  const insertMessage = await Message.create({  
 
       senderId:senderId,
       senderName:senderName,
       receiverId:receiverId,
       message:{
            
             text:message,
             image:''

       }

  })



 res.status(200).json({message:insertMessage})






 //res.status(200).json({

  //        message:{

  //              senderId:senderId,
 //               senderName:senderName,
  //              receiverId:receiverId,
  //              message:{

  //                    text:message,
   //                   image:''
//

  //          }
  //        }
  // })


 // if(insertMessage){

 //    res.status(200).json(insertMessage)
//  }else{

//   res.status(401).json({message:'Server Error'})

//  }

   



})






//get message  


const getMessage = asyncHandler( async (req,res)=>{

 const myId = req.myId._id.valueOf()
 const fdId = req.params.id;
// console.log(myId)

    const getAllMessage = await Message.find({})


   const specepicmessage = await Message.find({
          
          $or:[
        
              {
                   
                   $and:[{senderId:{$eq:myId}},{receiverId:{$eq:fdId}}]

              },
              {

                   $and:[{senderId:{$eq:fdId}},{receiverId:{$eq:myId}}]


              }

          ]

     })


res.status(200).json({message:specepicmessage})

                                                  //ame send krci           //friend receive korce    //ame receive korci     //friend send korce
   // const specepicmessage = getAllMessage.filter(m=>m.senderId === myId && m.receiverId === fdId || m.receiverId === myId && m.senderId === fdId)
    
   // res.status(200).json(specepicmessage)

 // console.log(specepicmessage)


})





const sendImageMessage = asyncHandler(async(req,res)=>{
          
          const result = await cloudinary.v2.uploader.upload(req.body.image,{

             folder:'avater'
            
          })

          //const {image}= req.body


 // const {senderName,receiverId,image,imageName} = req.body



  const {image} = req.body



  //const senderId = req.myId;

 const senderId = req.myId._id.valueOf()

 //valueOf na dile new ObjectId("62716403c48ecbfad7a4faa9") a vabe asbe r 
 //value of dile 62716403c48ecbfad7a4faa9 a vabe asbe
  //console.log(senderId._id)

 // const insertMessage = await Message.create({  
 
  //     senderId:senderId,
  //     senderName:senderName,
   //    receiverId:receiverId,
   //    imageName:imageName,
   //    message:{
            
   //          text:'',
    //         image:image
//
    //   }

 // })



// res.status(200).json({message:insertMessage})

     console.log(image)

})




module.exports = {userRegister,userLogin,getFriend,sendMessage,getMessage,sendImageMessage}