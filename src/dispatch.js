import { addArticle, publishArticle } from './actions';
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

store.dispatch(
  addArticle({
    title: 'Artificial intelligent',
    authors: ['John', 'Sara']
  })
);

store.dispatch(publishArticle(1));

unsubscribe();

// store.dispatch(removeArticle(1));

console.log(store.getState());
