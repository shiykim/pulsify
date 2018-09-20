import * as SongApiUtil from '../util/song_api_util';
export const PLAY_SONG = 'PLAY_SONG';


export const playSong = (song) => {
  return {
    type: PLAY_SONG,
    song
  };
};

export const fetchPlayingSong = song => {
  return dispatch => {
    return SongApiUtil.fetchSong(song).then( song => {
      return dispatch(playSong(song));
    });
  };
};
