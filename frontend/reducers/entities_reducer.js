import { combineReducers } from 'redux';
import UserReducer from './users_reducer';
import PlaylistReducer from './playlist_reducer';

export default combineReducers({
  users: UserReducer,
  playlists: PlaylistReducer,
});
