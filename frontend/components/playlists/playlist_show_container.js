import { connect } from 'react-redux';
import React from 'react';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, updatePlaylist, deletePlaylist } from '../../actions/playlist_actions';
import { fetchSongs }  from '../../actions/song_actions';

const mapStateToProps = ({ entities: { playlists, songs }}, ownProps) => {
  return {
    playlist: playlists[ownProps.match.params.id],
    songs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    fetchSongs: () => dispatch(fetchSongs())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
