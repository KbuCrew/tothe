import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'
import Home from '../../screens/Home'
const Routes = () => (
  <Router>

      {/* { <AuthButton/> } */}
      
        <Route exact={true} path="/" component={ Home }/>
        {/* <Route path="/login" component={ loginScreen }/> */}
        {/* <PrivateRoute path="/ayarlar" component={ Ayarlar }/> */}
    
  </Router>
)

// const SERVERURL = 'http://localhost:3000/'
// const Home = () => <Redirect to="/home/" />
export { Routes }