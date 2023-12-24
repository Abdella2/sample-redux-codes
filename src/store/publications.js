import { createAction, createReducer } from '@reduxjs/toolkit';

// Actions
export const addPublication = createAction('add_publication');
export const removePublication = createAction('remove_publication');

// Reducer
let lastId = 0;
export default createReducer([], (builder) =>
  builder
    .addCase(addPublication.type, (publications, action) => {
      publications.push({
        id: ++lastId,
        volume: action.payload.volume,
        publication_no: action.payload.publication_no
      });
    })
    .addCase(removePublication.type, (publications, action) => {
      const index = publications.findIndex(
        (pub) => pub.id === action.payload.id
      );
      publications.splice(index, 1);
    })
);
