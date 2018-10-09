import React from 'react';
import { connect } from 'react-redux';
import { Link, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import SongIndexContainer from '../songs/song_index_container';
import AlbumIndexContainer from '../albums/album_index_container';
import ArtistIndexContainer from '../artists/artist_index_container';
import ArtistShow from '../artists/artist_show';
import PlaylistAllIndex from '../playlists/playlist_all_container';
import UsersIndex from '../users/users_index.jsx';
class HomeIndex extends React.Component {


  render () {

    return (
      <div className='home-main'>
        <div className='content-main'>
          <ul className='playlist-nav'>
            <li><Link to="/browse/">PLAYLISTS</Link></li>
            <li><Link to="/browse/songs">SONGS</Link></li>
            <li><Link to="/browse/albums">ALBUMS</Link></li>
            <li><Link to="/browse/artist">ARTISTS</Link></li>
          </ul>
          <ProtectedRoute exact path="/browse" component={PlaylistAllIndex}/>
        </div>
        <ProtectedRoute path="/browse/songs" component={SongIndexContainer}/>
        <ProtectedRoute path="/browse/albums" component={AlbumIndexContainer}/>
        <ProtectedRoute path="/browse/artist" component={ArtistIndexContainer}/>
      </div>
    );
  }

}


export default HomeIndex;
