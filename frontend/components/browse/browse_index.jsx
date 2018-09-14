import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import BrowseContent from './browse_content';
import PlaylistShowContainer from '../playlists/playlist_show_container';

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
        <Switch>
          <ProtectedRoute path="/collection/playlists/:id" component={PlaylistShowContainer}/>
          <ProtectedRoute path="/collection" component={BrowseContent} />
        </Switch>
    </div>
    );
  }
}

export default Browse;
