import { combineReducers } from 'redux';
import articlesReducer from './articles';
import publicationsReducer from './publications';
import reviewersReducer from './reviewer';

export default combineReducers({
  articles: articlesReducer,
  publications: publicationsReducer,
  reviewer: reviewersReducer
});
