
//import {FRIEND_GET_SUCCESS,FRIEND_GET_FAIL,GET_MESSAGE_REQUEST,GET_MESSAGE_SUCCESS,GET_MESSAGE_FAIL} from '../constants/Authconstants'
import {FRIEND_GET_SUCCESS,FRIEND_GET_FAIL,GET_MESSAGE_REQUEST,GET_MESSAGE_SUCCESS,GET_MESSAGE_FAIL,MESSAGE_SEND_SUCCESS,MESSAGE_SEND_FAIL} from '../constants/Authconstants'


const initialState = {

friends : [],
message : [],
messageSendSuccess:false

}


export const messengerReducer = (state = initialState, action) => {

    const {payload,type} = action

   if(type === FRIEND_GET_SUCCESS){

          return {
            
            ...state,
          	friends:payload.friends

          }
   }

    if(type === GET_MESSAGE_SUCCESS){

            return {
            	...state,
            	message:payload.message
            }
    }

     if(type === MESSAGE_SEND_SUCCESS){

            return {
            	...state,
              messageSendSuccess:true,
            	message:[...state.message,payload.message]
            	        //message array er vitor a j message as asegula thekbe ...state.message    and new kore push kokbo paylode.message
            }
    }

    if(type === 'SOCKET_MESSAGE'){

         return {
              ...state,
              message:[...state.message,payload.message]
                      //message array er vitor a j message as asegula thekbe ...state.message    and new kore push kokbo paylode.message
            }

    }


    //update message socaket a message send hoyer por friend er nica ter latest message ta dekhabe  ajonno ai function dispatch korbo
    
    if(type === 'UPDATE_FRIEND_MESSAGE'){


        const index = state.friends.findIndex(f=>f.fndInfo._id === payload.msgInfo.receiverId || f.fndInfo._id === payload.msgInfo.senderId);

        state.friends[index].msgInfo = payload.msgInfo;

        return state;



    }

    if(type === 'MESSAGE_SEND_SUCCESS_CLEAR'){

         return {

            ...state,
            messageSendSuccess:false

         }


    }


        return state
        
  }






//get sidebar friend  reducer
//export const getfriendReducer = (state = {friends : [] }, action) => {

 //   const {payload,type} = action

//   if(type === FRIEND_GET_SUCCESS){

 //         return {loading:false,friends:action.payload}
 //  }

  //   if(type === FRIEND_GET_FAIL){

  //           return {loading:false,authenticate:false,error:action.payload}
  // }

   //     return state
        
  //}


//get usermessage  reducer





//export const getusermessageReducer = (state = instialState, action) => {

//    const {payload,type} = action

//     if(type === GET_MESSAGE_REQUEST){

 //         return {loading:true}
//   }


      // if(type === MESSAGE_SEND_SUCCESS){

       //   return {...state,

      //    	message:[...state.message,payload.message]}
  // }


 //  if(type === GET_MESSAGE_SUCCESS){

  //        return {loading:false,message:action.payload}
 //  }




 //    if(type === GET_MESSAGE_FAIL){

   //          return {loading:false,error:action.payload}
  // }





    //    return state
        
  //}