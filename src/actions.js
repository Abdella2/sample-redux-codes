import * as actions from './action-types';

export const addArticle = (payload) => ({
  type: actions.ADD_ARTICLE,
  payload
});

export const removeArticle = (id) => ({
  type: actions.REMOVE_ARTICLE,
  payload: {
    id
  }
});

export const publishArticle = (id) => ({
  type: actions.PUBLISH_ARTICLE,
  payload: {
    id
  }
});
