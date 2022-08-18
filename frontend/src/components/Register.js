import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {userregister} from '../store/actions/authAction'
import {useDispatch,useSelector} from 'react-redux'
import Loader from './Loader'

const Register = ({history}) => {  

     const [showpassword,Setshowpassword] = useState(false);
     const [showconfirmpassword,Setshowconfirmpassword] = useState(false);
     const [message,setMessage] = useState('')
     const [image,setImage] = useState('')
     const [imagepreview,setImagePreview] = useState('')


     const [state,setState] = useState({
           
           userName:'',
           email:'',
           password:'',
           confirmpassword:''
        

     })

     const {userName,email,password,confirmpassword} = state




     const dispatch = useDispatch()

     const authReducer = useSelector(state=>state.authReducer)

    // const userLogin = useSelector(state => state.userLogin)

     const {loading,error,userInfo,authenticate} = authReducer



useEffect(() =>{


      //console.log(userInfo)

      if(userInfo){


        // history.push(redirect)
        //   history.push('/cart')
           history.push('/')

      }

      //else{

    //     history.push('/register')

     // }


    },[userInfo])






	const handlepasswordshowandhide = (e) =>{
            e.preventDefault();
            Setshowpassword(!showpassword)
 
	}

		const handleconfirmpasswordshowandhide = (e) =>{
            e.preventDefault();
            Setshowconfirmpassword(!showconfirmpassword)
 
	}


const inputHandle = (e) => {  

     if(e.target.name === 'image'){

  	   const reader = new FileReader();

	   reader.onload = () => {  
              
            if(reader.readyState === 2){
                 
                   setImagePreview(reader.result)
                   setImage(reader.result)
              }
  	     }

 	   reader.readAsDataURL(e.target.files[0])

   }else{

         setState({

          ...state,
             [e.target.name] : e.target.value
 
     })

 }

 

     


  }




const SubmitHandler = (e) =>{
e.preventDefault();
 
  if(password !== confirmpassword){

     setMessage('Password Do Not Match')

    }else{

     dispatch(userregister(userName,email,password,image))

      

      //  history.push('/')

   
    

  }

  
  
}





   return(

   	   <>

   	     {loading ? <Loader/> : 


   	    <div className="container">

    
           <div className="my-register-form" style={{width:'35%',margin:'10px auto',marginTop:'150px'}}>
              <h3 style={{fontWeight:'bold',marginBottom:'20px',color:'green'}}>Register</h3>
               
               <form onSubmit={SubmitHandler} enctype="multipart/form-data">




                  {error && <div class="alert alert-success alert-dismissible fade show" role="alert">
           <strong>{error}</strong>
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           </div>}

           {message && <div class="alert alert-success alert-dismissible fade show" role="alert" style={{width:'380px'}}>
           <strong>{message}</strong>
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           </div>}


                <div className="mb-3">
                  <p for="exampleInputPassword1" className="form-label">Name</p>
                 <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                  placeholder="Enter Name"  style={{width:'380px'}}
                  name='userName'
                  value={userName}
                  onChange={inputHandle}


                 />
                </div>

                <div className="mb-3">
                 <p for="exampleInputPassword1" className="form-label">Email</p>
                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required
                  placeholder="Enter Email Address"  style={{width:'380px'}}
                  name='email'
                  value={email}
                  onChange={inputHandle}
                 />
                </div>



                <div className="mb-4" >
                 <p for="exampleInputPassword1" className="form-label">Password</p>
                 <input  type={showpassword ? "text" : "password"} className="form-control" id="exampleInputPassword1" required 
                  placeholder="Enter Password" style={{width:'380px',float:'left'}}
                  name='password'
                  value={password}
                  onChange={inputHandle}


                 />        
                  <span ><i className="fa fa-eye" style={{paddingTop:'10px',paddingLeft:'5px',color:'blue'}} onClick={handlepasswordshowandhide}></i></span>
                </div>



                <div className="mb-3">
                 <p for="exampleInputPassword1" className="form-label">Confirm Password</p>
                 <input  type={showconfirmpassword ? "text" : "password"} className="form-control" id="exampleInputPassword1" required
                  placeholder="Enter Password" style={{width:'380px',float:'left'}}
                     name='confirmpassword'
                  value={confirmpassword}
                  onChange={inputHandle}

                 />

                 <span ><i className="fa fa-eye" style={{paddingTop:'10px',paddingLeft:'5px',color:'blue'}} onClick={handleconfirmpasswordshowandhide}></i></span>
                </div>



               {imagepreview ? 
               
                 <img style={{width:'50px',height:'50px',marginBottom:'10px'}} src={imagepreview} className="rounded-circle" alt="Cinque Terre"/>

                :<img style={{width:'50px',height:'50px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1647586200/blank-user_kpsdfd.jpg" className="rounded-circle" alt="Cinque Terre"/>
}


                
           <div className="input-group mb-3" style={{width:'380px'}}>
                <input type="file" className="form-control" id="inputGroupFile02" required
                    accept="images/*"
                 
                   name="image"
                   onChange={inputHandle}


                />
                <label className="input-group-text" for="inputGroupFile02">Upload</label>
               </div>







{/*                 
               {loadImage ? 
               
                 <img style={{width:'50px',height:'50px',marginBottom:'10px'}} src={loadImage} className="rounded-circle" alt="Cinque Terre"/>

                :<img style={{width:'50px',height:'50px',marginBottom:'10px'}} src="https://res.cloudinary.com/ragibhasan006/image/upload/v1647586200/blank-user_kpsdfd.jpg" className="rounded-circle" alt="Cinque Terre"/>
}

          

               <div className="input-group mb-3" style={{width:'380px'}}>
                <input type="file" className="form-control" id="inputGroupFile02" required
                    accept="image/*"
                   onChange = {(e)=>picDetails(e.target.files[0])}

                />
                <label className="input-group-text" for="inputGroupFile02">Upload</label>
               </div>
  */}








                <div className="sub" style={{marginTop:'30px',paddingBottom:'200px'}}>

                 <button type="submit" disabled={loading ? true : false} className="btn btn-primary">Signup</button>
  
                 <span style={{marginLeft:'70px'}}><Link to='/login' style={{textDecoration:'none'}}>Already Have an Account ?</Link></span>

                </div>

                </form>
    
   	      </div>

   	  </div>




   	     }
      


       </>
   	)

}



export default Register