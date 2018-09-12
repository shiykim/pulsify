import React from 'react';
import { Link } from 'react-router-dom';

class SplashIndex extends React.Component {

  constructor(props){
    super(props);
  }

  handleClick(){
    this.props.logout();
  }

  render () {
    let button;
    if (Boolean(this.props.currentUser)) {
       button = (
        <div>
          <h1>{this.props.currentUser.username}</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      button = (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Login</Link>
        </div>
      );
    }
    return (
      <div className='main-splash-page'>
        <h1>Pulsify</h1>
        {button}
      </div>
    );
  }
}

export default SplashIndex;
