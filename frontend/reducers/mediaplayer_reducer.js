import merge from 'lodash/merge';
import { PLAY_SONG } from '../actions/mediaplayer_actions';
// import { PLAY } from '../actions/song_actions';
// import { PLAY_SONG } from '../actions/song_actions';

const mediaPlayerReducer = (state = {playingSong: null, playing: false}, action) => {

  Object.freeze(state);
  switch(action.type) {
    case PLAY_SONG:
      let newState = merge({}, state);
      newState.playingSong = action.song;
      newState.playing = true;
      return newState;
    default:
      return state;
  }
};

export default mediaPlayerReducer;