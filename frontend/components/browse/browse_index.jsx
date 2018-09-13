import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexContainer from '../playlists/playlist_index_container';
import { ProtectedRoute } from '../../util/route_util';

class Browse extends React.Component {

  render () {
    return (
      <div className='browse-main'>
        <div className='navbar-main'>
          <section className='navbar-content'>
            <h1 id='navbar-header'>Pulsify</h1>
            <ul className='navbar-links'>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/browse">Home</Link></li>
              <li><Link to="/collection/playlists">Your Library</Link></li>
            </ul>
            <section className='navbar-user'>
              <h1 className='na'>hello! {this.props.currentUser.username}</h1>
              <button onClick={this.props.logout}>Log Out</button>
            </section>
          </section>
        </div>
        <div className='main'>
          <ProtectedRoute path="/collection/playlists" component={PlaylistIndexContainer}/>
        </div>
    </div>
    );
  }
}

export default Browse;
