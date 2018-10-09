import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ProtectedRoute } from '../../util/route_util';
import { openModal, closeModal } from '../../actions/modal_actions';

import PlaylistIndexContainer from '../playlists/playlist_index_container';
import PlaylistShowContainer from '../playlists/playlist_show_container';
import DailyMixContainer from '../users/daily_mix_container.js';

class BrowseContent extends React.Component {

  render () {
    return (
        <div className='main'>
          <div className='content-main'>
            <ul className='playlist-nav'>
              <li><Link to="/collection/playlists">YOUR PLAYLISTS</Link></li>
              <li><Link to="/collection/dailymix">DAILY MIX</Link></li>
              <li><Link to="/collection/playlists">ARTISTS</Link></li>
              <li><Link to="/collection/playlists">ALBUMS</Link></li>
              <li><Link to="/collection/playlists">PLAYLISTS</Link></li>
            </ul>
            {this.props.openModal}
            <ProtectedRoute path="/collection/playlists" component={PlaylistIndexContainer}/>
        </div>
        <ProtectedRoute path="/collection/dailymix" component={DailyMixContainer}/>
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
