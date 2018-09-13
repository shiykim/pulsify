import merge from 'lodash/merge';
import {
  RECEIVE_ALL_SONGS,
} from '../actions/song_actions';


const songReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_SONGS:
        return merge({}, action.songs);
    default:
      return state;
  }
};

export default songReducer;
