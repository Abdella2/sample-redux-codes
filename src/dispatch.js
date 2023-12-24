import {
  addArticle,
  getUnpublishedArticle,
  publishArticle
} from './store/articles';
import configureStore from './store/configureStore';
import * as actions from './store/publications';
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

store.dispatch(publishArticle({ id: 1 }));

unsubscribe();

// store.dispatch(removeArticle(1));
const unpublishedArticle = getUnpublishedArticle(store.getState());

console.log(unpublishedArticle);
