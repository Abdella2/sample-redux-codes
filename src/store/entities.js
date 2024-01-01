import { combineReducers } from 'redux';
import articlesReducer from './articles';
import bugsReducer from './bugs';
import publicationsReducer from './publications';
import reviewersReducer from './reviewer';

export default combineReducers({
  articles: articlesReducer,
  publications: publicationsReducer,
  reviewer: reviewersReducer,
  bugs: bugsReducer
});
