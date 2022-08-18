
import { USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,USER_LOGIN_REQUEST,USER_LOGIN_FAIL,USER_LOGIN_SUCCESS,USER_LOGOUT} from '../constants/Authconstants'

//export const userRegisterReducer = (state = {userInfo : {} }, action) => {


//  switch(action.type){

//       case USER_REGISTER_REQUEST || USER_LOGIN_REQUEST:

//          return { loading:true,authenticate:false }
       


//         case USER_REGISTER_SUCCESS || USER_LOGIN_SUCCESS:

//           return {loading:false,authenticate:true,userInfo:action.payload}

    
//         case USER_REGISTER_FAIL || USER_LOGIN_FAIL:

//           return {loading:false,authenticate:false,error:action.payload}

//         default:

 //        return state


//  }


//}



export const authReducer = (state = {userInfo : {} }, action) => {

    const {payload,type} = action



   if(type === USER_REGISTER_REQUEST || type === USER_LOGIN_REQUEST){


          return { loading:true,authenticate:false }

   }


   if(type === USER_REGISTER_SUCCESS || type === USER_LOGIN_SUCCESS){


          return {loading:false,authenticate:true,userInfo:action.payload}

   }


     if(type === USER_REGISTER_FAIL || type === USER_LOGIN_FAIL){


             return {loading:false,authenticate:false,error:action.payload}

   }

     if(type === USER_LOGOUT){


            return {}

     }








         return state




}



