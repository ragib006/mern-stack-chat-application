import React,{useState,useEffect} from 'react'



const MessageSend = ({newMessage,inputHandle,sendMessage,emojiSend,ImageSend,imagepreview,typingMessage,currentfriend}) => { 



//console.log(newMessage)

const emojis = [


'😀','😄','😁','😆','😅','😂',
'🤣','😊','😇','🙂','🙃','😉',
'😌','😍','🥰','😘','😗','😙',
'😚','😋','😛','😝','😜','🤪',
'🤨','🧐','🤓','😎','🤩','🥳',
'😬','🙄','😯','😦','😧','😮'


]




     return(
 
            <>







    
    {imagepreview ?

    
      <img style={{width:'100px',height:'100px',border:'1px solid blue',marginTop:'20px'}} src={imagepreview}/> : <img src="" />
      
    }


<input type="checkbox" name="mycheckbox" id="mycheckbox2" />

<div id="toggle-content2" style={{width:'250px',marginLeft:'300px'}}>
   {emojis.map(e=><span onClick={()=>emojiSend(e)}>{e}</span>)}
</div>







<div className="msgsendmain" style={{paddingBottom:'30px'}}>







{typingMessage && typingMessage.msg && typingMessage.senderId === currentfriend._id ? 
     
<>
  <img className="rounded-circle"  style={{width:'40px',height:'40px'}} src={currentfriend.image}/> 
      
  <span style={{marginLeft:'10px',fontWeight:'bold'}}>Typeing........</span>



 </>
  : ''}

<div className="sendmsmaindiv" style={{paddingTop:'20px',marginLeft:'100px'}}>



{/*

<span style={{float:'left',paddingTop:'15px',paddingRight:'10px'}}>
   <label for="fileInputa"> 
   <i className="fa fa-image" style={{fontSize:'30px',color:'green'}}></i>
   </label>


   <input id="fileInputa" 
     style={{display:'none'}} type="file" accept="images/*"
     
     name="image"
     onChange={ImageSend} 
 
 

   />

</span>

*/}

 <span style={{float:'left'}}>
  <input type="text" style={{width:'350px',height:'60px'}} className="form-control" placeholder="Write Message"

         name="message"
       value={newMessage}
       onChange={inputHandle}



  />
</span>



 <span style={{paddingLeft:'10px'}}>
   <button onClick={sendMessage} className="btn btn-success" style={{marginTop:'10px'}}type="submit">Send</button>
</span>

 <span style={{float:'left',fontSize:'22px',paddingTop:'10px',paddingLeft:'10px'}}>
  <label htmlFor="mycheckbox2"> 🙁 </label>
</span>


</div>


</div>








{/*



<div className="emojisection" style={{width:'200px',float:'left',paddingBottom:'10px'}}>
             
             {emojis.map(e=><span>{e}</span>)}

  </div>








<div className="messagesendtext" style={{paddingBottom:'50px'}}>

   <input style={{width:'400px',height:'70px',float:'left'}} type="text" className="form-control"
       
   
   />
 <button type="submit" className="btn btn-success" style={{marginTop:'100px'}}>Send</button>

<span>
 <label htmlFor="emoji" style={{fontSize:'22px',marginLeft:'10px',float:'left',marginTop:'20px',paddingBottom:'50px'}}>🙂</label>
 </span>


 




  </div>








*/}






            </>

     	)

}



export default MessageSend