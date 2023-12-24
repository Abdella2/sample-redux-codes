import { combineReducers } from 'redux';
import articlesReducer from './articles';
import publicationsReducer from './publications';

export default combineReducers({
  articles: articlesReducer,
  publications: publicationsReducer
});
