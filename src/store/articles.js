import { createAction } from '@reduxjs/toolkit';

// Action creators
export const addArticle = createAction('add_article');
export const removeArticle = createAction('remove_article');
export const publishArticle = createAction('publish_article');

//   Reducers
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case addArticle.type:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          authors: action.payload.authors,
          status: 'submitted',
          isPublished: false
        }
      ];
    case removeArticle.type:
      return state.filter((article) => article.id !== action.payload.id);
    case publishArticle.type:
      return state.map((article) =>
        article.id === action.payload.id
          ? { ...article, isPublished: true }
          : article
      );
    default:
      return state;
  }
}
