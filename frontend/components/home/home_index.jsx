import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class HomeIndex extends React.Component {

  render () {
    return (
      <div className='home-main'>
        <div className='content-main'>
          <ul className='playlist-nav'>
            <li>PLAYLISTS</li>
            <li>SONGS</li>
            <li>ALBUMS</li>
            <li>USERS</li>
          </ul>
        </div>
      </div>
    );
  }

}

export default HomeIndex;
