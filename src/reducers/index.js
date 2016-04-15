import { combineReducers } from 'redux';
import { reducer as router } from 'react-native-router-redux';
import counter from './counter';

const rootReducer = combineReducers({
  router,
  counter
});

export default rootReducer;
