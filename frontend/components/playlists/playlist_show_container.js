import { connect } from 'react-redux';
import React from 'react';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, updatePlaylist, deletePlaylist } from '../../actions/playlist_actions';

const mapStateToProps = ({ entities: { playlists }}, ownProps) => {
  return {
    playlist: playlists[ownProps.match.params.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
