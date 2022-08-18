import {FRIEND_GET_SUCCESS,FRIEND_GET_FAIL,GET_MESSAGE_REQUEST,GET_MESSAGE_SUCCESS,GET_MESSAGE_FAIL,MESSAGE_SEND_SUCCESS,MESSAGE_SEND_FAIL,IMAGE_MESSAGE_SEND_SUCCESS} from '../constants/Authconstants'

import axios from 'axios'


//get all friend in sidebar
export const getFriendsAction = () => async (dispatch,getState) => {

    try{

      //  dispatch({ type:USER_REGISTER_REQUEST })


      const {authReducer:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       // localhost:5000/api/user/getfriend

        const response = await axios.get('/api/user/getfriend',config)

       // console.log('friend data',data)


       console.log(response.data)


        dispatch({

              type:FRIEND_GET_SUCCESS,
              payload:{

                   friends:response.data.friends
              }
        })



         

    }catch(error){


     console.log(error)

     // dispatch({

     //         type:FRIEND_GET_FAIL,
     //         payload:error.response.data.message
     // })


    }


}




//sendmessage
export const messageSendAction = (datainfo) => async (dispatch,getState) => {

      try{

      //  dispatch({ type:USER_REGISTER_REQUEST })


      const {authReducer:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       // localhost:5000/api/user/getfriend

        const response = await axios.post('/api/user/sendmessage',datainfo,config)

          
    //   console.log(response.data.message.message)



     dispatch({

           type:MESSAGE_SEND_SUCCESS,
            payload:{

              message:response.data.message
           }
        })



    }catch(error){

       // dispatch({

        //      type:MESSAGE_SEND_FAIL,
         //    payload:error.response.data
      //})

      // console.log(error.response.data.message)

    console.log(error)

    }
    


}








//getusermessage
export const getUserMessageAction = (id) => async (dispatch,getState) => {

      try{

       // dispatch({ type:GET_MESSAGE_REQUEST })


      const {authReducer:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       // localhost:5000/api/user/getfriend

        const response = await axios.get(`/api/user/getmessage/${id}`,config)

         
             console.log(response.data)
        // console.log(id)
        dispatch({

             type:GET_MESSAGE_SUCCESS,
              payload:{

                   message:response.data.message
              }
             
           })



    }catch(error){

      //  dispatch({

       //         type:GET_MESSAGE_FAIL,
       //         payload:error.response.data
       // })

      // console.log(error.response.data.message)

      console.log(error)

    }
    


}





//sendimage
export const imagemessageSendAction = (formData) => async (dispatch,getState) => {

      try{

      //  dispatch({ type:USER_REGISTER_REQUEST })


      const {authReducer:{userInfo}} = getState()

        const config = {

           headers : {

            'Content-Type':'application/json',
            'Authorization':`Bearer ${userInfo.token}`

           }

        }

       // localhost:5000/api/user/getfriend

      const response = await axios.post('/api/user/sendimagemessage',formData,config)

        
       // console.log(response.data)
        console.log(response.data)



   //  dispatch({

   //        type:IMAGE_MESSAGE_SEND_SUCCESS,
    //        payload:{

    //          message:response.data.message
    //       }
     //   })
//


    }catch(error){

       // dispatch({

        //      type:MESSAGE_SEND_FAIL,
         //    payload:error.response.data
      //})

      // console.log(error.response.data.message)

    console.log(error.response.data)

    }
    


}