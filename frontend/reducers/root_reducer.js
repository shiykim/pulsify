import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';
import UiReducer from './ui_reducer'

const rootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  entities: EntitiesReducer,
  ui: UiReducer,
});

export default rootReducer;
