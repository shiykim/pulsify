import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities_reducer';
import ErrorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  entities: EntitiesReducer,
});

export default rootReducer;
