import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Splash from './splash/splash_index';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';

const App = () => (
  <div className='all-content'>
   <Switch>
     <AuthRoute exact path="/login" component={LoginFormContainer} />
     <AuthRoute exact path="/signup" component={SignupFormContainer} />
     <AuthRoute path="/" component={Splash} />
   </Switch>
   <ProtectedRoute path="/" component={NavbarContainer}/>
 </div>
);

export default App;
