import React from 'react';
import { Link } from 'react-router-dom';

class SplashIndex extends React.Component {

  render () {

    return (
      <div className='main-splash-page'>
          <div className='splash-whole'>
            <div className='splash-left'>
              <h1 id='header'>Pulsify</h1>
              <Link to='/signup'>
                <button type="button" className="btn-signup">SIGN UP</button>
              </Link>

              <p id='left-separator'> -- ALREADY HAVE AN ACCOUNT? --</p>

              <Link to='/login'>
                <button type="button" className="btn-login">LOG IN</button>
              </Link>

            </div>

            <div className='splash-middle'></div>

            <div className='splash-right'>
              <h2> Get the right music, right now</h2>
              <h3> Listen to millions of songs for free.</h3>
              <ul>
                <li> Search & discover music you'll love</li>
                <li> Create playlists of your favorite music</li>
              </ul>
            </div>

          </div>
      </div>
    );
  }
}

export default SplashIndex;
