import merge from 'lodash/merge';
import { PLAY_SONG, RECEIVE_SONG_INDEX } from '../actions/mediaplayer_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
// import { PLAY } from '../actions/song_actions';
// import { PLAY_SONG } from '../actions/song_actions';

const mediaPlayerReducer = (state = {playingSong: null, playing: false, queue:[], current_idx:null}, action) => {

  Object.freeze(state);
  switch(action.type) {
    case PLAY_SONG:
      let newState = merge({}, state);
      newState.playingSong = action.song;
      newState.playing = true;
      return newState;
    case LOGOUT_CURRENT_USER:
      let newState2 = merge({}, state);
      newState2.playingSong = null;
      newState2.playing = false;
      return newState2;
    // case RECEIVE_SONG_INDEX:
    //   let newState = merge({}, state);
    //   newState.playingSong = action.song;
    //   newState.playing = true;
    //   return newState;
    default:
      return state;
  }
};

export default mediaPlayerReducer;
