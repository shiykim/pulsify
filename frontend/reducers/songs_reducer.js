import merge from 'lodash/merge';
import {
  RECEIVE_ALL_SONGS,
  RECEIVE_SONG,
  RECEIVE_PLAYLIST_SONG,
  REMOVE_PLAYLIST_SONG
} from '../actions/song_actions';

const songReducer = (state = {}, action) => {
  let newState;

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_SONGS:
      return merge({}, action.songs);
    case RECEIVE_SONG:
      return merge({}, state, { [action.song.id]: action.song });
    case RECEIVE_PLAYLIST_SONG:
      return merge({}, state, { [action.payload.song_id]: action.payload.songs });
    case REMOVE_PLAYLIST_SONG:
      newState = merge({}, state);
      delete newState[action.payload.song_id];
      return newState;
    default:
      return state;
  }
};

export default songReducer;
