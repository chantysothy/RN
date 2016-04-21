
'use strict';

import { Record, List} from 'immutable';

var InitialState = Record({
  newsList: null,
  isFetching: false,
  error: null,
  page:1,
  pageRows: 10,
  rows:[],
  detail: null,
});
export default InitialState;
