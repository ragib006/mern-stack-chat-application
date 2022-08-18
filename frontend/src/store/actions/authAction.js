import { USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,USER_LOGIN_REQUEST,USER_LOGIN_FAIL,USER_LOGIN_SUCCESS,USER_LOGOUT} from '../constants/Authconstants'

import axios from 'axios'


//user register
export const userregister = (userName,email,password,image) => async (dispatch) => {

    try{

        dispatch({ type:USER_REGISTER_REQUEST })

        const config = {

           headers : {

            'Content-Type':'application/json'

           }

        }

        const {data} = await axios.post('/api/user/register',{userName,email,password,image},config)


       dispatch({

             type:USER_REGISTER_SUCCESS,
             payload:data
       })


       
        localStorage.setItem('userInfo',JSON.stringify(data))


    }catch(error){

      dispatch({

              type:USER_REGISTER_FAIL,
              payload:error.response.data.message
      })


    }


}





//user login
export const userlogin = (email,password) => async (dispatch) => {

    try{

        dispatch({ type:USER_LOGIN_REQUEST })

        const config = {

           headers : {

            'Content-Type':'application/json'

           }

        }

        const {data} = await axios.post('/api/user/login',{email,password},config)


       dispatch({

             type:USER_LOGIN_SUCCESS,
             payload:data
       })



      //   dispatch({

       //     type:USER_LOGIN_SUCCESS,
       //     payload:data

      //  })
       
        localStorage.setItem('userInfo',JSON.stringify(data))


    }catch(error){

      dispatch({

              type:USER_LOGIN_FAIL,
              payload:error.response.data.message
      })


    }


}








  export const Logoutaction = () =>  async (dispatch) => {



  console.log('logout user....................')

   
       localStorage.removeItem('userInfo')

      dispatch({type:USER_LOGOUT})

  }