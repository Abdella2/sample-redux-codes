import * as actions from './actions';
import store from './customStore';

const unsubscribe = store.subscribe(() =>
  console.log('Store changed!', store.getState())
);
store.subscribe(() => console.log('Updating the UI.'));

store.dispatch(
  actions.addArticle({
    title: 'customer store article',
    authors: ['author 1', 'author 2']
  })
);

unsubscribe();

console.log('');
console.log('After unsubscribing the first subscription.');
console.log('');

// console.log(store.getState());

store.dispatch(actions.removeArticle(1));

// console.log(store.getState());
