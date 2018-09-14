import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class HomeIndex extends React.Component {

  render () {
    return (
      <div className='home-main'>
        <div className='content-main'>
          <ul className='playlist-nav'>
            <li><Link to="/playlists">PLAYLISTS</Link></li>
            <li><Link to="/songs">SONGS</Link></li>
            <li><Link to="/albums">ALBUMS</Link></li>
            <li><Link to="/discover">USERS</Link></li>
          </ul>
        </div>
      </div>
    );
  }

}

export default HomeIndex;
