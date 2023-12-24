import { addArticle, publishArticle } from './store/articles';
import configureStore from './store/configureStore';
const store = configureStore();

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

store.dispatch(publishArticle({ id: 1 }));

unsubscribe();

// store.dispatch(removeArticle(1));

console.log(store.getState());
