const io = require('socket.io')(8000,{

   cors:{

       origin:'*',
       methods:['GET','POST']

   }


})




let users = [];

//function for add user 

const addUser = (userId,socketId,userInfo)=>{


const checkUser = users.some(u=>u.userId === userId);

   if(!checkUser){

	users.push({userId,socketId,userInfo});

    }


}


//user remove function 

const userRemove = (socketId)=>{

users = users.filter(u=>u.socketId !== socketId)

}


//find receiver id our receiver connect socket or not


const findFriend = (id) =>{

  
  return users.find(u=>u.userId === id)


}


io.on('connection',(socket)=>{

 console.log('Socket is connected');

 //console.log(users)



//receive userId and userInfo in frontend
 socket.on('addUser',(userId,userInfo)=>{




 addUser(userId,socket.id,userInfo)


 console.log('connect socket',userId)

//send all userbackend to frontend
 io.emit('getUser',users)


 })


//receive message from frontend

socket.on('sendMessage',(data)=>{

   const user = findFriend(data.receiverId)

   if(user !== undefined){


   	socket.to(user.socketId).emit('getMessage',data)

    // socket.to(user.socketId).emit('getMessage',{

          // senderId:data.senderId,
          // receiverId:data.receiverId,
         //  senderName:data.senderName,
         //  createAt:data.time,
         //  message:{
              
         //     text:data.message.text,
        //      image:''

     //      }

  //   })




   }

})



////sender kono kisu type kore jate receiver bujte pare typeing......
//fromtend the data nilam

socket.on('typingMessage',(data)=>{

const user = findFriend(data.receiverId)

if(user !== undefined){

    socket.to(user.socketId).emit('typingMessageGet',{

           senderId:data.senderId,
           receiverId:data.receiverId,
           msg:data.msg
        
     })



}


})



 socket.on('disconnect',()=>{

    console.log('user is disconnect......')

    userRemove(socket.id)

    io.emit('getUser',users)


 })




})


console.log(users)
