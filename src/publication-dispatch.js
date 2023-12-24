import * as actions from './action-types';
import store from './store';

store.dispatch({
  type: actions.ADD_PUBLICATION,
  payload: {
    volume: 1,
    publication_no: 2
  }
});

store.dispatch({
  type: actions.ADD_PUBLICATION,
  payload: {
    volume: 1,
    publication_no: 2
  }
});

store.dispatch({
  type: actions.REMOVE_PUBLICATION,
  payload: {
    id: 1
  }
});
