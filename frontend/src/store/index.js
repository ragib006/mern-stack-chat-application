import {createStore,combineReducers,applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'

import {authReducer} from './reducers/authReducer'

//import {getfriendReducer,getusermessageReducer} from './reducers/messengerReducer'

import {messengerReducer} from './reducers/messengerReducer'



const reducer = combineReducers({

//productList:productListReducer,
authReducer,
messengerReducer,
//getfriendReducer,
//getusermessageReducer

//userLogin:userLoginReducers,

})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null


const initialState = {

authReducer:{ userInfo: userInfoFromStorage}

}
const middleware = [thunk]


//const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store