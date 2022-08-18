import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import moment from 'moment';


const Message = ({message,currentfriend,scrollRef}) => { 


    const userInformation = useSelector(state=>state.authReducer)
    const {userInfo} = userInformation


  //console.log('our message is',message)



  console.log('my Id is',userInfo._id)

  return(

        <>


          


        <div className="messagescrollbar">

        
    
 {message && message.length>0 ? message.map(m=>

         m.senderId === userInfo._id ? 

                <div ref={scrollRef} className="mymessage" style={{marginTop:'10px'}}>
                 <img style={{width:'40px',height:'40px'}} src={userInfo.image} className="rounded-circle" alt="Cinque Terre"/>
                 <div className="mymessagetext bg-primary" style={{borderRadius:'5px',width:'50%',marginTop:'2px'}}>
                  <span style={{color:'white',padding:'10px 10px 0px 10px',display:'block'}}>{m.message.text}</span>
                  <span style={{color:'black',padding:'0px 0px 0px 9px'}}>{moment(m.createdAt).startOf('mini').fromNow()}</span>
                </div>
                </div>

                :

                <div ref={scrollRef} className="friendmessage" style={{marginLeft:'40%',marginTop:'10px'}}>
                 <img style={{width:'40px',height:'40px'}} src={currentfriend.image} className="rounded-circle" alt="Cinque Terre"/>
                 <div className="friendmessagetext bg-success" style={{borderRadius:'5px',width:'83%',marginTop:'2px'}}>
                  <span style={{color:'white',padding:'10px 10px 0px 10px',display:'block'}}>{m.message.text}</span>
                  <span style={{color:'black',padding:'0px 0px 0px 9px'}}>{moment(m.createdAt).startOf('mini').fromNow()}</span>                 
                </div>
              </div>





          

      ):''


 


}
     

     


      

                 

              

         




            








      




         









            </div>


 
          




        </>
  	)

}


export default Message