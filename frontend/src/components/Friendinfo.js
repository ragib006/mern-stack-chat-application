import React from 'react'
import {useDispatch,useSelector} from 'react-redux'

import toast, { Toaster } from 'react-hot-toast'



import {Logoutaction} from '../store/actions/authAction.js'

//import {Logoutaction} from '../store/actions/authAction'


const Friendinfo = ({currentfriend,activeUser}) =>{

const dispatch = useDispatch()


  const logout = () => { 

   // e.preventDefault()
    //toast.success('send a message')
    dispatch(Logoutaction())





  }


  return(

        <>


    


            <div className="mainfrindinfo">

                  <center>

                         <img style={{width:'60px',height:'60px',marginLeft:'80px',marginTop:'20px'}} src={currentfriend.image} className="rounded-circle" alt="Cinque Terre"/>
                      

                           {activeUser && activeUser.length>0 && activeUser.some(u=>u.userId == currentfriend._id) ?  <span style={{color:'yellow',fontWeight:'bold',fontSize:'50px',marginTop:'-37px'}}>.</span> : ''}
                         

                          <p style={{fontWeight:'bold',fontSize:'20px',fontFamily:'tahoma',marginLeft:'70px',marginTop:'10px'}}>{currentfriend.userName}</p>



                          {activeUser && activeUser.length>0 && activeUser.some(u=>u.userId == currentfriend._id) ?  <p style={{fontWeight:'bold',fontSize:'15px',fontFamily:'tahoma',marginLeft:'70px',color:'blue'}}>Active</p> : ''}
                          

                    
                          <span style={{marginLeft:'70px',color:'blue',fontWeight:'bold',fontFamily:'tahoma'}} onClick={logout}>Logout</span>
                      
               
            </center>



{/* 



  <div className="setting" style={{marginTop:'20px'}}>
          
          <span style={{fontWeight:'bold',marginRight:'7px',color:'green',fontSize:'18px'}}>Share Media</span>
         
           <span style={{}}>
             <label htmlFor="mycheckgallerybox3"><i className="fas fa-arrow-right"></i></label>
          </span>


          <input type="checkbox" name="mycheckbox" id="mycheckgallerybox3" />

          <div id="togglegallery">

             <div className="galleryscroll">

                 <div class="galimg">
                 
               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>
               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>
               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>

               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>
               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>
               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>


               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>
               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>
               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>

               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>
               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>
               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>


               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>
               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>
               <img  style={{height:'100px',width:'100px',margin:'5px 5px 5px 5px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1650106678/xhdtjjcvsc5txqdctyyh.jpg"/>


                 </div>
              </div>

          </div>


       </div>
















*/}

    



            </div>

        </>

  	)


}


export default Friendinfo