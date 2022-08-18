//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'

import Register from './components/Register.js'
import Login from './components/Login.js'
import Messenger from './components/Messenger.js'

import ProtectRoute from './components/ProtectRoute.js'


function App() {
  return (
    <>
      
      <Router>
              <Route path='/register' component={Register} exact/>
              <Route path='/login' component={Login} exact/>
        
                  

                   <ProtectRoute path='/' component={Messenger} exact />


           {/*
           	    <Route path='/' component={Messenger} exact/>
                         */}
        
     
      </Router>
     
    </>
  );
}

export default App;
