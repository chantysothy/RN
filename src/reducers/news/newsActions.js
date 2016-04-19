import Constants from '../../lib/constants.js';

const {
    // 获取指定新闻
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS,
    GET_NEWS_FAILURE,
    // 列出新闻列表
    LIST_NEWS_REQUEST,
    LIST_NEWS_SUCCESS,
    LIST_NEWS_FAILURE,
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

import { BackendFactory } from '../../lib/Backend';

export function listNewsRequest() {
    return {
      type: LIST_NEWS_REQUEST
    };
}

export function listNewsSuccess(data) {
    return {
      type: LIST_NEWS_SUCCESS,
      payload: data
    };
}
export function listNewsFailure(error) {
    return {
      type: LIST_NEWS_FAILURE,
      payload: error
    };
}

export function listNews() {
    return dispatch => {
      dispatch(listNewsRequest());
      return  BackendFactory()
            .listNews()
            .then((json) => {
                dispatch(listNewsSuccess(json));
                return json;
            })
            .catch((error) => {
                 dispatch(listNewsFailure(error));
            });

    };
}
