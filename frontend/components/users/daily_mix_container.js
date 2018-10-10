import { connect } from 'react-redux';
import React from 'react';
import DailyMixIndex from './daily_mix_index';
import { fetchSongs, fetchSong, fetchDailyMix } from '../../actions/song_actions';
import { fetchArtists } from '../../actions/artist_actions';
import { fetchPlayingSong, receiveQueue } from '../../actions/mediaplayer_actions';

const mapStateToProps = (state) => {
  return {
    songs: Object.values(state.ui.dailyMix),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs()),
    fetchArtists: () => dispatch(fetchArtists()),
    fetchPlayingSong: (id) => dispatch(fetchPlayingSong(id)),
    fetchSong: (id) => dispatch(fetchSong(id)),
    receiveQueue: (queue) => dispatch(receiveQueue(queue)),
    fetchDailyMix: () => dispatch(fetchDailyMix()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(DailyMixIndex);
