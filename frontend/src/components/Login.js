import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Loader from './Loader'
import {userlogin} from '../store/actions/authAction'

const Login = ({history}) => {  

	const [showpassword,Setshowpassword] = useState(false);

  const [state,setState] = useState({
     
     email:"",
     password:""

  })

   const {email,password} = state;



  const dispatch = useDispatch()

     const authReducer = useSelector(state=>state.authReducer)

    // const userLogin = useSelector(state => state.userLogin)

     const {loading,error,userInfo,authenticate} = authReducer

   useEffect(() =>{

       if(userInfo){

        history.push('/')
        //  history.push(redirect)

       }

        // history.push('/login')


   },[userInfo])




   const inputHandle = (e) =>{  

      
         setState({

          ...state,
             [e.target.name] : e.target.value
 
         })

    }

    const SubmitHandler = (e) =>{

          e.preventDefault();
          
          dispatch(userlogin(email,password))


    }


	const handlepasswordshowandhide = (e) =>{
            e.preventDefault();
            Setshowpassword(!showpassword)
 
	}

   return(

   	   <>


          {loading ? <Loader/> : 



                      <div className="container">

                   <div className="my-register-form" style={{width:'35%',margin:'10px auto',marginTop:'150px'}}>
              <h3 style={{fontWeight:'bold',marginBottom:'20px',color:'green'}}>Login</h3>
               
               <form  onSubmit={SubmitHandler}>

           {error && <div class="alert alert-success alert-dismissible fade show" role="alert" style={{width:'380px'}}>
           <strong>{error}</strong>
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           </div>}

                <div className="mb-3">
                          <p for="exampleInputPassword1" className="form-label">Email</p>
                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Enter Email Address"  style={{width:'380px'}} required

                  name='email'
                  value={email}
                  onChange={inputHandle}


                 />
                </div>

                <div className="mb-3">
                 <p for="exampleInputPassword1" className="form-label">Password</p>

                 <input  type={showpassword ? "text" : "password"} className="form-control" id="exampleInputPassword1" 
                  placeholder="Enter Password" style={{width:'380px',float:'left'}}  required

                  name='password'
                  value={password}
                  onChange={inputHandle}

                 />
                   
                
              <span ><i className="fa fa-eye" style={{paddingTop:'10px',paddingLeft:'5px',color:'blue'}} onClick={handlepasswordshowandhide}></i></span>

                
                 </div>

                 <div className="sub" style={{marginTop:'30px'}}>

                

            <button type="submit" disabled={loading ? true : false} className="btn btn-primary">Login</button>
  
  
                 <span style={{marginLeft:'70px'}}><Link to='/register' style={{textDecoration:'none'}}>Create a new account ?</Link></span>

                 </div>
                </form>
    
          </div>
     
      </div>




          }
      







       </>
   	)

}



export default Login