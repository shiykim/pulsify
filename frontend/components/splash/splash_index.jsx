import React from 'react';
import { Link } from 'react-router-dom';

class SplashIndex extends React.Component {

  render () {

    return (
      <div className='main-splash-page'>
          <div className='splash-whole'>
            <section className='splash-left'>
              <div id='header'>
                <div id='logo'> </div>
                <h1 >Pulsify</h1>
               </div>
              <Link to='/signup'>
                <button type="button" className="btn-signup">SIGN UP</button>
              </Link>

              <p id='left-separator'> ALREADY HAVE AN ACCOUNT? </p>

              <Link to='/login'>
                <button type="button" className="btn-login">LOG IN</button>
              </Link>

            </section>

            <section className='splash-middle'></section>

            <section className='splash-right'>
              <h2> Get the right music, </h2>
              <h2> right now</h2>
              <h3> Listen to millions of songs for free.</h3>
              <ul>
                <li id='ticks'> </li>
                <li> Search & discover music you'll love</li>
                <li id='ticks'> </li>
                <li> Create playlists of your favorite music</li>
              </ul>
            </section>

          </div>
      </div>
    );
  }
}

export default SplashIndex;
