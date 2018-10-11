import merge from 'lodash/merge';
import { PLAY_SONG, RECEIVE_SONG_INDEX, RECEIVE_QUEUE, TOGGLE_SONG } from '../actions/mediaplayer_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
// import { PLAY } from '../actions/song_actions';
// import { PLAY_SONG } from '../actions/song_actions';

const mediaPlayerReducer = (state = {playingSong: null, playing: false, queue:[], queue_idx:0}, action) => {

  Object.freeze(state);
  let newState;
  let queue_ids;
  switch(action.type) {
    case PLAY_SONG:
      newState = merge({}, state);
      newState.playingSong = action.song;
      queue_ids = newState.queue.map((el) => {
        return el.id;
      });
      newState.queue_idx = queue_ids.indexOf(action.song.id);
      newState.playing = true;
      return newState;
    case TOGGLE_SONG:
      newState = merge({}, state);
      if (newState.playing){
        newState.playing = false;
      } else {
        newState.playing = true;
      }
      return newState;
    case RECEIVE_QUEUE:
      newState = merge({}, state);
      newState.queue = action.queue;
      return newState;
    case LOGOUT_CURRENT_USER:
      newState = merge({}, state);
      newState.playingSong = null;
      newState.playing = false;
      return newState;
    default:
      return state;
  }
};

export default mediaPlayerReducer;
