import { connect } from 'react-redux';
import React from 'react';
import { createPlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import PlaylistIndex from './playlist_index';

const mapStateToProps = ({ session, entities: { playlists, users }}) => {
  return {
    playlists: Object.values(playlists),
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
