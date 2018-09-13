import merge from 'lodash/merge';
import {
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ALBUM,
} from '../actions/album_actions';


const albumReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_ALBUMS:
        return merge({}, action.albums);
    case RECEIVE_ALBUM:
        return merge({}, state, {[action.album.id]: action.album});
    default:
      return state;
  }
};

export default albumReducer;
