import actions from './actions';
import store from './store';

store.dispatch(
  actions.addPublication({
    volume: 1,
    publication_no: 2
  })
);

store.dispatch(
  actions.addPublication({
    volume: 1,
    publication_no: 2
  })
);

store.dispatch(actions.removePublication(1));
