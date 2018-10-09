import { connect } from 'react-redux';
import React from 'react';
import { createPlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import PlaylistAllIndex from '../playlists/playlist_all_index';
import { userFollowedPlaylists } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    playlists: userFollowedPlaylists(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistAllIndex);
