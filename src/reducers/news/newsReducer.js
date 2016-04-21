import Constants from '../../lib/constants.js';
import InitialState from './newsInitialState';
const {
    // 获取指定新闻
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAILURE,
    // 列出新闻列表
    LIST_NEWS_REQUEST,
    LIST_NEWS_SUCCESS,
    LIST_NEWS_FAILURE,

    REFRESH_NEWS_LIST,
    NEXT_PAGE_NEWS_LIST,
    // 点赞
    GOOD_NEWS_REQUEST,
    GOOD_NEWS_SUCCESS,
    GOOD_NEWS_FAILURE,
    // 差评
    BAD_NEWS_REQUEST,
    BAD_NEWS_SUCCESS,
    BAD_NEWS_FAILURE,
    // 评论
    COMMENT_NEWS_REQUEST,
    COMMENT_NEWS_SUCCESS,
    COMMENT_NEWS_FAILURE,
    // 列出新闻评论
    LIST_NEWS_COMMENTS_REQUEST,
    LIST_NEWS_COMMENTS_SUCCESS,
    LIST_NEWS_COMMENTS_FAILURE,
    // 列出指定新闻子评论
    LIST_NEWS_COMMENTS_SUB_REQUEST,
    LIST_NEWS_COMMENTS_SUB_SUCCESS,
    LIST_NEWS_COMMENTS_SUB_FAILURE,
} = Constants;

const initialState = new InitialState;
export default function news(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.merge(state);

  switch (action.type) {

  case LIST_NEWS_REQUEST:
    return state.set('isFetching', true)
    .set('error', null);
  case LIST_NEWS_SUCCESS:
    return state.set('isFetching', false)
    .set('rows', state.rows.concat(action.payload.rows))
    .set('page', action.payload.page)
    .set('pageRows', action.payload.pageRows)
    .set('error', null);
  case LIST_NEWS_FAILURE:
    return state.set('isFetching', false)
    .set('error', action.payload);
  case REFRESH_NEWS_LIST:
    return state.set('rows', []);
  case NEXT_PAGE_NEWS_LIST:
    return state.set('newsList', null);

  case GET_NEWS_REQUEST:
    return state.set('isFetching', true).set('error', null);
  case GET_NEWS_SUCCESS:
    return state.set('isFetching', false)
    .set('detail', action.payload)
    .set('error', null);
  case GET_NEWS_FAILURE:
    return state.set('isFetching', false).set('error', action.payload);
  default:
    return state;
  }
};
