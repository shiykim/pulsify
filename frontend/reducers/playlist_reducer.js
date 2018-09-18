import merge from 'lodash/merge';
import { RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST  } from '../actions/playlist_actions';
import { RECEIVE_PLAYLIST_SONG, REMOVE_PLAYLIST_SONG } from '../actions/song_actions';

const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_PLAYLISTS:
      return merge({}, action.playlists);
    case RECEIVE_PLAYLIST:
      return merge({}, state, { [action.playlist.id]: action.playlist });
    case RECEIVE_PLAYLIST_SONG:
       newState = merge({}, state);
       newState[action.payload.playlist_id].song_ids.push(action.payload.song_id);
       return newState;
    case REMOVE_PLAYLIST_SONG:
      newState = merge({}, state);
      const songs = newState[action.payload.playlist_id].song_ids;
      delete songs[songs.indexOf(action.payload.song_id)];
      return newState;
    default:
      return state;
  }
};

export default playlistReducer;
