// Action types
export const ADD_PUBLICATION = 'add_publication';
export const REMOVE_PUBLICATION = 'remove_publication';

// Actions
export function addPublication(payload) {
  return {
    type: ADD_PUBLICATION,
    payload: payload
  };
}

// Actions
export function removePublication(id) {
  return {
    type: REMOVE_PUBLICATION,
    payload: {
      id
    }
  };
}

// Reducer
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_PUBLICATION:
      return [
        ...state,
        {
          id: ++lastId,
          volume: action.payload.volume,
          publication_no: action.payload.publication_no
        }
      ];
    case REMOVE_PUBLICATION:
      return state.filter((pub) => pub.id !== action.payload.id);
    default:
      break;
  }
}
