

import {react} from 'react'
import {useSelector} from 'react-redux'
import {Route,Redirect} from 'react-router-dom'


const ProtectRoute = (props) => {

    const userInformation = useSelector(state=>state.authReducer)
    const {userInfo,authenticate} = userInformation

    return userInfo?<Route path={props.path} component={props.component} exact={props.exact} />:<Redirect to='/login' />







}

export default ProtectRoute