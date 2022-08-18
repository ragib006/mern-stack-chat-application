import React,{useState,useEffect,useRef} from 'react'
import Header from './Header'
import Footer from './Footer'
import Activefriend from './Activefriend'
import Friends from './Friends'
import Message from './Message'
import RightSide from './RightSide'
import {useDispatch,useSelector} from 'react-redux'

import {io} from "socket.io-client"




import {getFriendsAction,messageSendAction,getUserMessageAction,imagemessageSendAction} from '../store/actions/messengerAction'



//message notification show korar jonno  

import toast, { Toaster } from 'react-hot-toast'

//sound  

import useSound from 'use-sound'

import notificationSound from '../audio/Messagereceivesound.mp3'

import sendingSound from '../audio/Messagesendsound.mp3'

const Messenger = () =>{  



//sound 
 
 const [mynotificationSound] = useSound(notificationSound)

 const [mysendingSound] = useSound(sendingSound)





// message scroll

const scrollRef = useRef()


//chat select korar jonnjo
const [currentfriend,setCurrentfriend] = useState('')

//message er jonno state
const [newMessage,setNewMessage] = useState('')

//image er jonno state

const [image,setImage] = useState('')

//image preview er jonno state  

const [imagepreview,setImagePreview] = useState('')

//socket server theke socket a connect hoya user gula akta state a rakbo agula amader avtive online user

const [activeUser,setActiveUser] = useState([])

//socket message state

const [socketMessage,setSocketMessage] = useState('')


//typing message show er jonno state  

const[typingMessage,setTypingMessage] = useState('')


//console.log('current friend is',currentfriend)


const dispatch = useDispatch()

//console.log(newMessage)







     //show all friend in sidebar
    const messengerruducer = useSelector(state=>state.messengerReducer)
    const {friends,message,messageSendSuccess} = messengerruducer

    //show userinfo in top bar
    const userInformation = useSelector(state=>state.authReducer)
    const {userInfo} = userInformation
   // const {userName,email,image} = userInfo

   //show user message 











//start socket work

const socket = useRef();

//backend theke ai 8000 port deya data asbe
useEffect(()=>{

socket.current = io('ws://localhost:8000')

},[])

//socket userid and user information pathabo jate kara kara socket a add bujte pare


useEffect(()=>{


socket.current.emit('addUser',userInfo._id,userInfo)

//console.log('user information.......',userInfo._id)


},[])

//socket server a connect hoya user gula   socket server theke tule anbo


useEffect(()=>{

socket.current.on('getUser',(users)=>{

//console.log('socket connected user is........',users)

//akhane users array ke filter korlam jate login user k active friend a na dekhai
const filterUser = users.filter(u=>u.userId !== userInfo._id)

//console.log('filter user is',filterUser)
 setActiveUser(filterUser)


})

})


//socket message backend theke tulbo

useEffect(()=>{

socket.current.on('getMessage',(data)=>{

setSocketMessage(data)

console.log('socketmessage is--------------',data)


})

},[])



//socket send message  


useEffect(()=>{

   if(messageSendSuccess){

    socket.current.emit('sendMessage',message[message.length-1])

    dispatch({

      type:'UPDATE_FRIEND_MESSAGE',
      payload:{

         
         msgInfo : message[message.length-1]


      }

    })



    dispatch({

       type:'MESSAGE_SEND_SUCCESS_CLEAR'

    })


  }


},[messageSendSuccess])












//akhone jake message dibo ter window er vitor  message ta dakhate hobe  
//ai useEffect kaj korbe ja k message dibo tar window er vitor

useEffect(()=>{

   if(socketMessage && currentfriend){
         
        if(socketMessage.senderId === currentfriend._id && socketMessage.receiverId === userInfo._id){
             
             dispatch({
                
                type:'SOCKET_MESSAGE',

                payload:{
                  
                  message:socketMessage

                }

            })

         }



       //update socket message  

  dispatch({
                
                type:'UPDATE_FRIEND_MESSAGE',

                payload:{
                  
                 msgInfo:socketMessage

                }

            })

     




   }

   setSocketMessage('')



},[socketMessage])





//nessage notification   

useEffect(()=>{

if(socketMessage && socketMessage.senderId !== currentfriend._id && socketMessage.receiverId === userInfo._id){

    //toast.success(`${socketMessage.senderName} send a message`)
//toast('Here is your toast.');

mynotificationSound()
toast.success(`${socketMessage.senderName} send a message`)

}


},[socketMessage])



//end socket






//message er inputfield handle
//message input field handle function 
 const inputHandle = (e) => { 
    
    setNewMessage(e.target.value)

//sender kono kisu type kore jate receiver bujte pare typeing......
//frontend theke data socket server a pathalam
socket.current.emit('typingMessage',{
      

      senderId:userInfo._id,
      receiverId:currentfriend._id,
      msg:e.target.value


})



 }


//receive typeing message from socket server
//typing message show er jonno socket server theke data frontend receive korlam

useEffect(()=>{


socket.current.on('typingMessageGet',(data)=>{

//ata j message receive ter brawser a poya jabe
setTypingMessage(data)


})



},[])

















   // const usermessage = useSelector(state=>state.getusermessageReducer)
    //const {message} = usermessage

   // console.log(message)


    // console.log(userInfo.userName)

     // console.log(currentfriend)

//get all sidebar conversion
useEffect(()=>{

dispatch(getFriendsAction())

},[])




//get all sidebar conversion
useEffect(()=>{
 
 if(friends && friends.length>0){
 
  setCurrentfriend(friends[0].fndInfo)

 }


},[friends])




//message send function 

  const sendMessage = (e) => { 

        e.preventDefault()


        mysendingSound()

        const data = {

             senderName:userInfo.userName,
             receiverId:currentfriend._id,
             message:newMessage?newMessage:'❤'

        }


//send message socket server

//ata useEffect er vitor likte hobe na karon message kokhon send korbo ata user er baper

//socket.current.emit('sendMessage',{
       
   //    senderId:userInfo._id,
    //   senderName:userInfo.userName,
    //   receiverId:currentfriend._id,
    //   time:new Date(),
    //   message:{
          
    //      text:newMessage?newMessage:'❤',
    //      image:''


    //   }
      // message:newMessage?newMessage:'❤'


//})





//message send korar porao typing message dekhai karon typing message state a data theke ajonno msg empty korte hobe

socket.current.emit('typingMessage',{
      

      senderId:userInfo._id,
      receiverId:currentfriend._id,
      msg:''


})



 








        dispatch(messageSendAction(data))

        setNewMessage('')
        //console.log(newMessage)

  }


//emoji send 

const emojiSend = (emu) => {  

  
   setNewMessage(`${newMessage}`+emu)

socket.current.emit('typingMessage',{
      

      senderId:userInfo._id,
      receiverId:currentfriend._id,
      msg:emu


})


  

}



//image send 


const ImageSend = (e) =>{

//console.log(e.target.files[0])

    // e.preventDefault()

     if(e.target.name === 'image'){

       const reader = new FileReader();

     reader.onload = () => {  
              
            if(reader.readyState === 2){
                 
                   setImagePreview(reader.result)
                   setImage(reader.result)
                
          

              }
         }

            reader.readAsDataURL(e.target.files[0])


                const formData = new FormData();
                formData.append('image',image);

               dispatch(imagemessageSendAction(formData))


     //const data = {

              //senderName:userInfo.userName,
             // receiverId:currentfriend._id
     //         imageName:e.target.files[0].name,
    //            image:e.target.files[0]

   //    }
       
       
      // console.log(e.target.files[0])


   //  dispatch(imagemessageSendAction(data))

 //  console.log(e.target.files[0].name)
//const formData = new FormData();

//formData.append('senderName',userInfo.userName);
//formData.append('receiverId',currentfriend._id);
//formData.append('imageName',e.target.files[0].name);
//formData.append('image',e.target.files[0].name);
//formData.append('image',image);
//formData.append('image',fileInputElement.files[0]);





// dispatch(imagemessageSendAction(data))



//console.log(e.target.files[0])
    




   }





}




//get message

useEffect(()=>{

 //getMessageAction(())

         dispatch(getUserMessageAction(currentfriend._id))


},[currentfriend?._id])


//scroll message  when send sessage the scroll ber down 
//dependence message dici karaon message

useEffect(()=>{


scrollRef.current?.scrollIntoView({behavior:'smooth'})


},[message])




//search 

const search = (e) => { 

//console.log(e.target.value)

const getFriendClass = document.getElementsByClassName('bar');

const FriendNameClass = document.getElementsByClassName('fd-name');


for(var i = 0 ; i<getFriendClass.length,i<FriendNameClass.length;i++){

      let text = FriendNameClass[i].innerText.toLowerCase();

      if(text.indexOf(e.target.value.toLowerCase())>-1){
         
         getFriendClass[i].style.display = '';

      }else{

          getFriendClass[i].style.display = 'none';

      }

     // console.log(text)

}


}



//const notify = () => toast('Here is your toast.');


   return(

       <>





<div className="toaster">
         <Toaster

             position={'top-right'}
             reverseOrder={false}
             toastOptions={{  
                  
                  style:{

                       fontSize:'18px'


                  }



             }}

         />

</div>


      <Header/>

         

     

            <div className="row">

              <div className="col-md-3" style={{backgroundColor:'#282923'}}>

                     <div className="bartop" style={{marginBottom:'20px',marginTop:'20px'}}>
                         
                         <span>

                          <img style={{width:'40px',height:'40px',margin:'10px 10px 10px 10px'}} src={userInfo.image} className="rounded-circle" alt="Cinque Terre"/>
                          <span style={{fontWeight:'bold',color:'white',fontFamily:'tahoma'}}>{userInfo.userName}</span>

                         </span>

                           <div className="mysearch" style={{margin:'10px 10px 10px 0px'}}>
                              
                                    <input onChange={search} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{marginLeft:'10px'}}/>
                                
                                

                           </div>
                      

                      </div>

              {activeUser && activeUser.length>0 ? 

              activeUser.map(u=> <Activefriend user={u} setCurrentfriend={setCurrentfriend} />):''


              }

                

               <div className="rightbarscrool">

                    { friends && friends.length > 0 ? 

                    friends.map(fd=> 
                  
                    <div className={currentfriend._id === fd.fndInfo._id ? "aaaaaa" : "bbbbb"} onClick={()=>setCurrentfriend(fd.fndInfo)}>
                      <Friends friend={fd} value={fd._id}   myId={userInfo._id}/>
                    </div>

                   )

                   :'No friend'}

              </div>



             
              </div>



              





<div className="col-md-9">

 {currentfriend ? 

  <RightSide 

  currentfriend={currentfriend}
  inputHandle={inputHandle}
  newMessage={newMessage}
  sendMessage={sendMessage}
  message={message}
  scrollRef={scrollRef}
  emojiSend={emojiSend}
  activeUser={activeUser}






  ImageSend={ImageSend}
  imagepreview={imagepreview}
  typingMessage={typingMessage}




  /> : 

  <h1 style={{color:'#FFE0E6',fontFamily:'tahoma',fontSize:'70px',padding:'20px 20px 20px 20px'}}>Please Open The Conversion</h1>

}



</div>





{/* 


   <div className="col-md-6">


                   <Message/>


               </div>

               <div className="col-md-3">
                   <p>ccccccccccccccc</p>
               </div>



*/}
             
              
            </div>



     <Footer/>
        

       </>

   	)


}



export default Messenger