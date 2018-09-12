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
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
   <header>
     <Link to="/" className="header-link">

     </Link>
     <SplashContainer />
   </header>

   <Switch>
     <AuthRoute exact path="/login" component={LoginFormContainer} />
     <AuthRoute exact path="/signup" component={SignupFormContainer} />
   </Switch>
 </div>
);

export default App;
