import { combineReducers } from 'redux';

import modal from './modal_reducer';
import currentSong from './currentsong_reducer';
import mediaPlayerReducer from './mediaplayer_reducer';
import dailyMix from './dailymix_reducer';

export default combineReducers({
  modal,
  currentSong,
  mediaplayer: mediaPlayerReducer,
  dailyMix
});
