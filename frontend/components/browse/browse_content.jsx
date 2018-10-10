import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ProtectedRoute } from '../../util/route_util';
import { openModal, closeModal } from '../../actions/modal_actions';

import PlaylistIndexContainer from '../playlists/playlist_index_container';
import PlaylistShowContainer from '../playlists/playlist_show_container';
import DailyMixContainer from '../users/daily_mix_container';
import FollowedArtistsContainer from '../users/followed_artists_container';
import FollowedAlbumsContainer from '../users/followed_albums_container';
import FollowedPlaylistsContainer from '../users/followed_playlists_container';

class BrowseContent extends React.Component {

  render () {
    return (
        <div className='main'>
          <div className='content-main'>
            <ul className='playlist-nav'>
              <li><Link to="/collection/playlists">YOUR PLAYLISTS</Link></li>
              <li><Link to="/collection/dailymix">YOUR DAILY MIX</Link></li>
              <li><Link to="/collection/artists">ARTISTS</Link></li>
              <li><Link to="/collection/albums">ALBUMS</Link></li>
              <li><Link to="/collection/followed_playlists">PLAYLISTS</Link></li>
            </ul>
            {this.props.openModal}
            <ProtectedRoute path="/collection/playlists" component={PlaylistIndexContainer}/>
        </div>
        <ProtectedRoute path="/collection/dailymix" component={DailyMixContainer}/>
        <ProtectedRoute path="/collection/artists" component={FollowedArtistsContainer}/>
        <ProtectedRoute path="/collection/albums" component={FollowedAlbumsContainer}/>
        <ProtectedRoute path="/collection/followed_playlists" component={FollowedPlaylistsContainer}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (
      <div className='playlist-new'>
       <button id="btn-playlist-new" onClick={() => dispatch(openModal('createplaylist'))}>
         NEW PLAYLIST
       </button>
     </div>
   )
  };
};

export default connect(null, mapDispatchToProps)(BrowseContent);
