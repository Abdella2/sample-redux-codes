import * as actions from './action-types';

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_ARTICLE:
      return [
        ...state,
        {
          id: ++lastId,
          title: action.payload.title,
          authors: action.payload.authors,
          status: 'submitted',
          isPublished: false
        }
      ];
    case actions.REMOVE_ARTICLE:
      return state.filter((article) => article.id !== action.payload.id);
    case actions.PUBLISH_ARTICLE:
      return state.map((article) =>
        article.id === action.payload.id
          ? { ...article, isPublished: true }
          : article
      );
    default:
      return state;
  }
}
