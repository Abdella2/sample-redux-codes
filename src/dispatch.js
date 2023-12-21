import store from './store';

const unsubscribe = store.subscribe(() =>
  console.log('Store changed!', store.getState())
);

store.dispatch({
  type: 'ADD_ARTICLE',
  payload: {
    title: 'Machine learning',
    authors: ['John', 'Sara']
  }
});
unsubscribe();
store.dispatch({
  type: 'REMOVE_ARTICLE',
  payload: {
    id: 1
  }
});

console.log(store.getState());
