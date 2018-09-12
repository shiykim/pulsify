import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import test from './test';

const App = () => (
  <div className='all-content'>
  <ProtectedRoute path="/" component={test}/>
   <Switch>
     <AuthRoute exact path="/login" component={LoginFormContainer} />
     <AuthRoute exact path="/signup" component={SignupFormContainer} />
     <AuthRoute path="/" component={SplashContainer} />
   </Switch>
 </div>
);

export default App;
