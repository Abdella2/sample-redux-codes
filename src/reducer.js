let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_ARTICLE':
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
    case 'REMOVE_ARTICLE':
      return state.filter((article) => article.id !== action.payload.id);
    default:
      return state;
  }
}
