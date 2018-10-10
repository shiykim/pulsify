import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = "RECEIVE_ALL_SONGS";
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG';
export const RECEIVE_DAILY_MIX = 'RECEIVE_DAILY_MIX';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

const receiveAllSongs = songs => ({
  type: RECEIVE_ALL_SONGS,
  songs
});

const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

const receiveDailyMix = songs => ({
  type: RECEIVE_DAILY_MIX,
  songs
});

const receivePlaylistSong = payload => {
  return {
    type: RECEIVE_PLAYLIST_SONG,
    payload
  };
};

const deletePlaylistSong = payload => ({
  type: REMOVE_PLAYLIST_SONG,
  payload
});

export const fetchSongs = () => {
  return dispatch => {
    return SongApiUtil.fetchSongs().then( songs => {
      return dispatch(receiveAllSongs(songs));
    });
  };
};

export const fetchSong = song => {
  return dispatch => {
    return SongApiUtil.fetchSong(song).then( song => {
      return dispatch(receiveSong(song));
    });
  };
};

export const addPlaylistSong = (playlistId, songId) => {
  return dispatch => {
    return SongApiUtil.addPlaylistSong(playlistId, songId).then( payload => {
      return dispatch(receivePlaylistSong(payload));
    });
  };
};

export const removePlaylistSong = (playlistId, songId) => {
  return dispatch => {
    return SongApiUtil.removePlaylistSong(playlistId, songId).then( payload => {
      return dispatch(deletePlaylistSong(payload));
    });
  };
};

export const fetchDailyMix = () => {
  return dispatch => {
    return SongApiUtil.fetchDailyMix().then( songs => {
      return dispatch(receiveDailyMix(songs));
    });
  };
};
