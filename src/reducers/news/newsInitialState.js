
'use strict';

import {Record} from 'immutable';

var InitialState = Record({
  newsList: null,
  isFetching: false,
  error: null,
});
export default InitialState;
