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
import BrowseContainer from './browse/browse_container';

const App = () => (
  <div className='all-content'>
     <AuthRoute exact path="/login" component={LoginFormContainer} />
     <AuthRoute exact path="/signup" component={SignupFormContainer} />
     <AuthRoute exact path="/" component={Splash} />
     <ProtectedRoute path="/" component={BrowseContainer}/>
 </div>
);

export default App;
