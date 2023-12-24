import { createAction, createReducer } from '@reduxjs/toolkit';

// Action creators
export const addArticle = createAction('add_article');
export const removeArticle = createAction('remove_article');
export const publishArticle = createAction('publish_article');

//   Reducers
let lastId = 0;

export default createReducer([], (builder) => {
  builder
    .addCase(addArticle.type, (articles, action) => {
      articles.push({
        id: ++lastId,
        title: action.payload.title,
        authors: action.payload.authors,
        status: 'submitted',
        isPublished: false
      });
    })
    .addCase(removeArticle.type, (articles, action) => {
      const index = articles.indexOf(
        (article) => article.id === action.payload.id
      );
      articles.splice(index, 1);
    })
    .addCase(publishArticle.type, (articles, action) => {
      const index = articles.findIndex(
        (article) => article.id == action.payload.id
      );
      articles[index].isPublished = true;
    });
});
