let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case 'add_publication':
      return [
        ...state,
        {
          id: ++lastId,
          volume: action.payload.volume,
          publication_no: action.payload.publication_no
        }
      ];
    case 'remove_publication':
      return state.filter((pub) => pub.id !== action.payload.id);
    default:
      break;
  }
}
