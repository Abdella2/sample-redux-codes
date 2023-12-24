import store from './store';

store.dispatch({
  type: 'add_publication',
  payload: {
    volume: 1,
    publication_no: 2
  }
});

store.dispatch({
  type: 'add_publication',
  payload: {
    volume: 1,
    publication_no: 2
  }
});

store.dispatch({
  type: 'remove_publication',
  payload: {
    id: 1
  }
});
