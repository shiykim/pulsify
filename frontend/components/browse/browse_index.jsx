import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistIndexContainer from '../playlists/playlist_index_container';
import PlaylistShowContainer from '../playlists/playlist_show_container';
import SongIndexContainer from '../songs/song_index_container';
import AlbumIndexContainer from '../albums/album_index_container';
import ArtistIndexContainer from '../artists/artist_index_container';

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
        <ProtectedRoute path="/collection/playlists/:id" component={PlaylistShowContainer}/>
        <div className='main'>
          <ul className='playlist-nav'>
            <li><Link to="/collection/playlists">PLAYLISTS</Link></li>
            <li><Link to="/browse">YOUR DAILY MIX</Link></li>
            <li><Link to="/collection/songs">SONGS</Link></li>
            <li><Link to="/collection/albums">ALBUMS</Link></li>
            <li><Link to="/collection/artist">ARTISTS</Link></li>
          </ul>
          <button type="button" id="btn-playlist-new">NEW PLAYLIST</button>
          <ProtectedRoute path="/collection/playlists" component={PlaylistIndexContainer}/>
          <ProtectedRoute path="/collection/songs" component={SongIndexContainer}/>
          <ProtectedRoute path="/collection/albums" component={AlbumIndexContainer}/>
          <ProtectedRoute path="/collection/artist" component={ArtistIndexContainer}/>
      </div>
    </div>
    );
  }
}

export default Browse;
