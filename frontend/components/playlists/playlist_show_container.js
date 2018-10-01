import { connect } from 'react-redux';
import React from 'react';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, fetchPlaylists } from '../../actions/playlist_actions';
import { fetchSongs }  from '../../actions/song_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { selectPlaylistSongs } from '../../reducers/selectors.js';
import { fetchPlayingSong, receiveQueue } from '../../actions/mediaplayer_actions.js';

const mapStateToProps = ({ session, entities: { playlists, songs, users }}, ownProps) => {
  const playlist = playlists[ownProps.match.params.id];
  return {
    playlist: playlist,
    songs: selectPlaylistSongs(songs,playlist),
    currentUser: users[session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    fetchSongs: () => dispatch(fetchSongs()),
    closeModal: () => dispatch(closeModal()),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
    receiveQueue: (queue) => dispatch(receiveQueue(queue)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
