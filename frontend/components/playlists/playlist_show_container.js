import { connect } from 'react-redux';
import React from 'react';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import { fetchSongs }  from '../../actions/song_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { selectPlaylistSongs } from '../../reducers/selectors.js';

const mapStateToProps = ({ entities: { playlists, songs }}, ownProps) => {
  const playlist = playlists[ownProps.match.params.id];
  return {
    playlist: playlist,
    songs: selectPlaylistSongs(songs,playlist)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    fetchSongs: () => dispatch(fetchSongs()),
    closeModal: () => dispatch(closeModal()),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
