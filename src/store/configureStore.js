import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import reducer from './articles';

export default function configureStore() {
  const store = createStore(
    reducer,
    devToolsEnhancer({
      trace: true
    })
  );

  return store;
}
