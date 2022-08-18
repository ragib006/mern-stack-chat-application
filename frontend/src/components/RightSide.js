import React,{useState,useEffect,useRef} from 'react'

import Message from './Message'
import MessageSend from './MessageSend'

import Friendinfo from './Friendinfo'
import {useDispatch,useSelector} from 'react-redux'
const RightSide = ({currentfriend,inputHandle,newMessage,sendMessage,message,scrollRef,emojiSend,ImageSend,imagepreview,activeUser,typingMessage}) => {



    //show userinfo in top bar
    //const userInformation = useSelector(state=>state.authReducer)
    //const {userInfo} = userInformation

  //console.log(currentfriend)

    return(


              <>

                <div className="rightside">






                    <div className="row">



                       <div className="col-md-8">

               <div className="messageheader" style={{marginBottom:'20px'}}>




                  <img style={{width:'40px',height:'40px'}} src={currentfriend.image} className="rounded-circle" alt="Cinque Terre"/>
                   {activeUser && activeUser.length>0 && activeUser.some(u=>u.userId == currentfriend._id) ?  <span style={{color:'yellow',fontWeight:'bold',fontSize:'50px',marginTop:'-37px'}}>.</span> :''}

                 
                  <span style={{fontWeight:'bold',marginLeft:'20px',fontSize:'20px',fontFamily:'tahoma'}}>{currentfriend.userName}</span>

          </div>






                           <Message 
                           message={message}
                           currentfriend={currentfriend}
                           scrollRef={scrollRef}
                           />

                           <MessageSend 

                               newMessage={newMessage} 
                               inputHandle={inputHandle}
                               sendMessage={sendMessage}
                               emojiSend={emojiSend}
                               ImageSend={ImageSend}
                               imagepreview={imagepreview}
                               typingMessage={typingMessage}
                                currentfriend={currentfriend}



                           />

                        </div>


                        <div className="col-md-3">

                            <Friendinfo currentfriend={currentfriend} activeUser={activeUser}/>

                        </div>
                        
                        

                    </div>
                 </div>
              </>

    	)



}



export default RightSide