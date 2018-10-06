import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const usersReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_FOLLOW:
      newState = merge({}, state);
      newState[action.payload.currentUser][`followed${action.payload.followableType}`].push(action.payload.followableId);
      return newState;
    case REMOVE_FOLLOW:
      newState = merge({}, state);
      const followList = newState[action.payload.user_id][`followed${action.payload.followable_type}`];
      followList.splice(followList.indexOf(action.payload.followable_id), 1); 
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
