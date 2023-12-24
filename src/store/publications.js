import { createAction } from '@reduxjs/toolkit';

// Actions
export const addPublication = createAction('add_publication');
export const removePublication = createAction('remove_publication');

// Reducer
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case addPublication.type:
      return [
        ...state,
        {
          id: ++lastId,
          volume: action.payload.volume,
          publication_no: action.payload.publication_no
        }
      ];
    case removePublication.type:
      return state.filter((pub) => pub.id !== action.payload.id);
    default:
      break;
  }
}
