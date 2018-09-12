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
          <div className='splash-links'>
            <Link to='/signup'>Sign Up</Link>
            <p> -- ALREADY HAVE AN ACCOUNT? --</p>
            <Link to='/login'>Login</Link>
          </div>
          <div className='splash-description'>
          <h2> Get the right music, right now</h2>
          <h3> Listen to millions of songs for free.</h3>
          <ul>
            <li> Search & discover music you'll love</li>
            <li> Create playlists of your favorite music</li>
          </ul>
          </div>
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
