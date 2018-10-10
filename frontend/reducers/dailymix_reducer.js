import { RECEIVE_DAILY_MIX } from '../actions/song_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const dailyMixReducer = (state = [], action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_DAILY_MIX:
      return action.songs;
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default dailyMixReducer;
