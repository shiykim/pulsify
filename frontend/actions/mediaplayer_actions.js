import * as SongApiUtil from '../util/song_api_util';
export const PLAY_SONG = 'PLAY_SONG';
export const RECEIVE_SONG_INDEX = 'RECEIVE_SONG_INDEX';
export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';


export const playSong = (song) => {
  return {
    type: PLAY_SONG,
    song
  };
};

export const receiveSongIndex = (idx) => {
  return {
    type: RECEIVE_SONG_INDEX,
    idx
  };
};

export const receiveQueue = (queue) => {
  return {
    type: RECEIVE_QUEUE,
    queue
  };
};

export const fetchPlayingSong = song => {
  return dispatch => {
    return SongApiUtil.fetchSong(song).then( song => {
      return dispatch(playSong(song));
    });
  };
};
