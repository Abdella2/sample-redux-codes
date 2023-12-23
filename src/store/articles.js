// Action types
const ADD_ARTICLE = 'add_article';
const REMOVE_ARTICLE = 'remove_article';
const PUBLISH_ARTICLE = 'publish_article';

// Action creators
export const addArticle = (payload) => ({
  type: ADD_ARTICLE,
  payload
});

export const removeArticle = (id) => ({
  type: REMOVE_ARTICLE,
  payload: {
    id
  }
});

export const publishArticle = (id) => ({
  type: PUBLISH_ARTICLE,
  payload: {
    id
  }
});

//   Reducers
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_ARTICLE:
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
    case REMOVE_ARTICLE:
      return state.filter((article) => article.id !== action.payload.id);
    case PUBLISH_ARTICLE:
      return state.map((article) =>
        article.id === action.payload.id
          ? { ...article, isPublished: true }
          : article
      );
    default:
      return state;
  }
}
