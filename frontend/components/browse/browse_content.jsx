import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ProtectedRoute } from '../../util/route_util';
import { openModal, closeModal } from '../../actions/modal_actions';

import PlaylistIndexContainer from '../playlists/playlist_index_container';
import PlaylistShowContainer from '../playlists/playlist_show_container';
import SongIndexContainer from '../songs/song_index_container';
import AlbumIndexContainer from '../albums/album_index_container';
import ArtistIndexContainer from '../artists/artist_index_container';

class BrowseContent extends React.Component {

  render () {
    return (
        <div className='main'>
          <ul className='playlist-nav'>
            <li><Link to="/collection/playlists">PLAYLISTS</Link></li>
            <li><Link to="/browse">YOUR DAILY MIX</Link></li>
            <li><Link to="/collection/songs">SONGS</Link></li>
            <li><Link to="/collection/albums">ALBUMS</Link></li>
            <li><Link to="/collection/artist">ARTISTS</Link></li>
          </ul>
          {this.props.openModal}
          <ProtectedRoute path="/collection/playlists" component={PlaylistIndexContainer}/>
          <ProtectedRoute path="/collection/songs" component={SongIndexContainer}/>
          <ProtectedRoute path="/collection/albums" component={AlbumIndexContainer}/>
          <ProtectedRoute path="/collection/artist" component={ArtistIndexContainer}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (
     <button id="btn-playlist-new" onClick={() => dispatch(openModal('createplaylist'))}>
       New Playlist
     </button>
   )
  };
};

export default connect(null, mapDispatchToProps)(BrowseContent);
