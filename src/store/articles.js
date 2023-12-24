import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

//   Reducers
let lastId = 0;

const slice = createSlice({
  name: 'articles',
  initialState: [],
  reducers: {
    addArticle: (articles, action) => {
      articles.push({
        id: ++lastId,
        title: action.payload.title,
        authors: action.payload.authors,
        status: 'submitted',
        isPublished: false
      });
    },
    removeArticle: (articles, action) => {
      const index = articles.indexOf(
        (article) => article.id === action.payload.id
      );
      articles.splice(index, 1);
    },
    publishArticle: (articles, action) => {
      const index = articles.findIndex(
        (article) => article.id == action.payload.id
      );
      articles[index].isPublished = true;
    }
  }
});

export const { addArticle, removeArticle, publishArticle } = slice.actions;
export default slice.reducer;

export const getUnpublishedArticle = createSelector(
  (state) => state.entities.articles,
  (state) => state.entities.publications,
  (articles, publications) => articles.filter((article) => !article.isPublished)
);
