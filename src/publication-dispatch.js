import configureStore from './store/configureStore';
import * as actions from './store/publications';
const store = configureStore();

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
