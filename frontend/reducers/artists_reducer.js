import merge from 'lodash/merge';
import {
  RECEIVE_ALL_ARTISTS,
  RECEIVE_ARTIST,
} from '../actions/artist_actions';


const artistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ARTISTS:
        return merge({}, action.artists);
    case RECEIVE_ARTIST:
        return merge({}, state, {[action.artist.id]: action.artist});
    default:
      return state;
  }
};

export default artistReducer;
