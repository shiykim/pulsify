import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import Browse from './browse_index';
import { fetchSongs, fetchPlayingSong }  from '../../actions/song_actions';
import { fetchAlbums } from '../../actions/album_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';

const mapStateToProps = ({ ui, session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
    playingSong: ui.playingSong
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlaylists: () => dispatch(fetchPlaylists())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Browse);
