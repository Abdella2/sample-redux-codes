import store from './store';

store.dispatch({
  type: 'ADD_ARTICLE',
  payload: {
    title: 'Machine learning',
    authors: ['John', 'Sara']
  }
});

store.dispatch({
  type: 'REMOVE_ARTICLE',
  payload: {
    id: 1
  }
});

console.log(store.getState());
