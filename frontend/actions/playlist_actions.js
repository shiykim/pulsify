import * as PlaylistApiUtil from '../util/playlist_api_util';

export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

const receiveAllPlaylists = playlists => ({
  type: RECEIVE_ALL_PLAYLISTS,
  playlists
});

const receivePlaylist = playlist => ({
  type: RECEIVE_PLAYLIST,
  playlist
});

const removePlaylist = playlistId => ({
  type: REMOVE_PLAYLIST,
  playlistId
});

export const fetchPlaylists = () => {
  return dispatch => {
    return PlaylistApiUtil.fetchPlaylists().then( playlists => {
      return dispatch(receiveAllPlaylists(playlists));
    });
  };
};

export const fetchPlaylist = id => {
  return dispatch => {
    return PlaylistApiUtil.fetchPlaylist(id).then( playlist => {
      return dispatch(receivePlaylist(playlist));
    });
  };
};

export const createPlaylist = playlist => {
  return dispatch => {
    debugger
    return PlaylistApiUtil.createPlaylist(playlist).then( playlist => {
      return dispatch(receivePlaylist(playlist));
    });
  };
};


export const updatePlaylist = playlist => {
  return dispatch => {
    return PlaylistApiUtil.updatePlaylist(playlist).then( playlist => {
      return dispatch(receivePlaylist(playlist));
    });
  };
};

export const deletePlaylist = playlistId => {
  return dispatch => {
    return PlaylistApiUtil.deletePlaylist(playlistId).then( playlist => {
      return dispatch(removePlaylist(playlistId));
    });
  };
};
