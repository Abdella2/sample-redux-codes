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
