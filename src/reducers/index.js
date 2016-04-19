import { combineReducers } from 'redux';
import { reducer as router } from 'react-native-router-redux';
import counter from './counter';
import news from './news/newsReducer';

const rootReducer = combineReducers({
  router,
  counter,
  news,
});

export default rootReducer;
