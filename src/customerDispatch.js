import * as actions from './actions';
import store from './customStore';

store.dispatch(
  actions.addArticle({
    title: 'customer store article',
    authors: ['author 1', 'author 2']
  })
);

console.log(store.getState());

store.dispatch(actions.removeArticle(1));

console.log(store.getState());
