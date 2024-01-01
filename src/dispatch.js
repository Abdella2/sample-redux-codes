import configureStore from './store/configureStore';
const store = configureStore();

// const unsubscribe = store.subscribe(() =>
//   console.log('Store changed!', store.getState())
// );

// store.dispatch(addReviewer({ name: 'John Doe' }));
// store.dispatch((dispatch, getState) => {
//   dispatch(addReviewer({ name: 'John from middleware' }));
//   console.log(getState());
// });
// store.dispatch({ type: 'error', payload: { message: 'An error occurred' } });
// store.dispatch(addReviewer({ name: 'Sara Doe' }));

// store.dispatch(
//   addArticle({
//     title: 'Machine learning',
//     authors: ['John', 'Sara']
//   })
// );

// store.dispatch(
//   addArticle({
//     title: 'Artificial intelligent',
//     authors: ['John', 'Sara']
//   })
// );

// store.dispatch(
//   assignArticleToReviewer({
//     articleId: 1,
//     reviewerId: 1
//   })
// );
// store.dispatch(
//   assignArticleToReviewer({
//     articleId: 2,
//     reviewerId: 2
//   })
// );

// store.dispatch(
//   actions.addPublication({
//     volume: 1,
//     publication_no: 2
//   })
// );

// store.dispatch(
//   actions.addPublication({
//     volume: 1,
//     publication_no: 2
//   })
// );

// store.dispatch(publishArticle({ id: 1 }));

// unsubscribe();

// store.dispatch(removeArticle(1));
// const unpublishedArticle = getUnpublishedArticle(store.getState());

// console.log(unpublishedArticle);

// const article1 = getUnpublishedArticle(store.getState());
// const article2 = getUnpublishedArticle(store.getState());
// console.log(article1 === article2);

// const articles = getArticleByReviewer(1)(store.getState());
// console.log(articles);

store.dispatch({
  type: 'apiCallBegin',
  payload: {
    url: '/bugs',
    onSuccess: 'GET_BUGS_SUCCESS',
    onError: 'API_REQUEST_FAIL'
  }
});
