import { combineReducers } from 'redux';
import UserReducer from './users_reducer';

export default combineReducers({
  users: UserReducer,
});
