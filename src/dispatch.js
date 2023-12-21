import { addArticle, removeArticle } from './actions';
import store from './store';

const unsubscribe = store.subscribe(() =>
  console.log('Store changed!', store.getState())
);

store.dispatch(
  addArticle({
    title: 'Machine learning',
    authors: ['John', 'Sara']
  })
);

unsubscribe();

store.dispatch(removeArticle(1));

console.log(store.getState());
