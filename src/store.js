import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import reducer from './reducer';

export default createStore(reducer, devToolsEnhancer({ trace: true }));
