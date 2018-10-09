import { connect } from 'react-redux';
import React from 'react';
import DailyMixIndex from './daily_mix_index';
import { fetchSongs, fetchSong } from '../../actions/song_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchPlayingSong, receiveQueue } from '../../actions/mediaplayer_actions';
import { userDailyMix } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return {
    songs: userDailyMix(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
    fetchSong: (id) => dispatch(fetchSong(id)),
    receiveQueue: (queue) => dispatch(receiveQueue(queue)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(DailyMixIndex);
