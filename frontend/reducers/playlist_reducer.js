import merge from 'lodash/merge';
import { RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST  } from '../actions/playlist_actions';

const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, action.playlists);
    case RECEIVE_PLAYLIST:
      return merge({}, state, { [action.playlist.id]: action.playlist });
    case REMOVE_PLAYLIST:
      const newState = merge({}, state);
      delete newState[action.playlistId];
      return newState;
    default:
      return state;
  }
};

export default playlistReducer;
