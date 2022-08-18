import React from 'react'




const Activefriend = ({user,setCurrentfriend}) => {  

  return(

          <>

         
         <div className="activefriendscroll">
                
                <div className="acfriend">
                     
                       <div className="nn" style={{display:'flex',marginBottom:'10px'}}>

              
                         <div onClick={()=>setCurrentfriend({
                            _id:user.userInfo._id,
                            email:user.userInfo.email,
                            image:user.userInfo.image,
                            userName:user.userInfo.userName

                            })}>
                         <img style={{width:'40px',height:'40px',margin:'10px 0px 10px 10px'}} src={user.userInfo.image} className="rounded-circle" alt="Cinque Terre"/>
                         <span style={{color:'yellow',fontWeight:'bold',fontSize:'50px',marginTop:'-37px'}}>.</span>
                        </div>

                     

          
                     
                        </div>



                     

{/*    


<div className="cc" style={{}}>
                      <img style={{width:'40px',height:'40px',margin:'10px 0px 10px 10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1647586200/blank-user_kpsdfd.jpg" className="rounded-circle" alt="Cinque Terre"/>
                      <div className="active" style={{fontWeight:'bold',fontSize:'40px',color:'yellow',marginTop:'-80px',paddingLeft:'45px',overFlow:'hidden'}}>.</div>                
                    </div>

                      <div className="cc" style={{}}>
                      <img style={{width:'40px',height:'40px',margin:'10px 0px 10px 10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1647586200/blank-user_kpsdfd.jpg" className="rounded-circle" alt="Cinque Terre"/>
                      <div className="active" style={{fontWeight:'bold',fontSize:'40px',color:'yellow',marginTop:'-80px',paddingLeft:'45px',overFlow:'hidden'}}>.</div>                
                    </div>




  */}
                    
 
              
                   
                   
                 

                </div>


         </div>



           

     
          </>
  	)

}




export default Activefriend