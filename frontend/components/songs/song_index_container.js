import { connect } from 'react-redux';
import React from 'react';
import SongIndex from './song_index';
import { fetchSongs } from '../../actions/song_actions';
import { fetchArtists } from '../../actions/artist_actions';

const mapStateToProps = ({ entities: { songs }}) => {
  return {
    songs: Object.values(songs),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchArtists: () => dispatch(fetchArtists()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SongIndex);
