import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";

const receiveAllSongs = songs => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

export const fetchSongs = () => {
  return dispatch => {
    return SongApiUtil.fetchSongs().then( songs => {
      return dispatch(receiveAllSongs(songs));
    });
  };
};
