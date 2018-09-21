import { connect } from 'react-redux';
import React from 'react';
import SongIndex from './song_index';
import { fetchSongs } from '../../actions/song_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchPlayingSong } from '../../actions/mediaplayer_actions';
import { userSongs, userPlaylists } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  let playlists = userPlaylists(state);
  return {
    songs: userSongs(state, playlists),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);
