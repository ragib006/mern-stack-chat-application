import React from 'react'

import moment from 'moment';

const Friends = (props) => {


  const {fndInfo,msgInfo} = props.friend
  const {myId} = props

  return(

         <>




            <ul className="list-group">

                        <div className="bar">

                         <div className="lkfk" style={{float:'left',width:'45px'}}>
                          <img style={{width:'40px',height:'45px',margin:'10px 10px 10px 10px',}} src={fndInfo.image} className="rounded-circle" alt="Cinque Terre"/>
                         </div>


                       
                       <div className="fdjfd" style={{paddingTop:'5px'}}>
                        
                        <span className="fd-name" style={{color:'white',marginLeft:'20px'}}>{fndInfo.userName}</span>
                                               

                          <p>
                         
                           {msgInfo && msgInfo.senderId === myId ? <span style={{color:'white',marginLeft:'20px',fontSize:'13px'}}>You :</span>:<span style={{color:'white',marginLeft:'20px',fontSize:'13px'}}>{fndInfo.userName} : </span>}

                           {msgInfo && msgInfo.message.text ? <span style={{color:'white',marginLeft:'4px',fontSize:'13px'}}>{msgInfo.message.text.slice(0,12)}...</span>: msgInfo && msgInfo.message.image ? <span style={{color:'white',marginLeft:'20px',fontSize:'13px'}}>Send a Image</span> : <span style={{color:'white',marginLeft:'2px',fontSize:'13px'}}>Connect You</span>}

                           <span style={{color:'white',marginLeft:'20px',fontSize:'13px'}}>{msgInfo?moment(msgInfo.createdAt).startOf('mini').fromNow():moment(fndInfo.createdAt).startOf('mini').fromNow()}</span>
         
                           </p>
                          
                        </div>
                            


                        </div>

            </ul>




         </>
  	)


}


export default Friends;