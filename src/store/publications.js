import { createSlice } from '@reduxjs/toolkit';

// Reducer
let lastId = 0;

const slice = createSlice({
  name: 'publication',
  initialState: [],
  reducers: {
    addPublication: (publications, action) => {
      publications.push({
        id: ++lastId,
        volume: action.payload.volume,
        publication_no: action.payload.publication_no
      });
    },
    removePublication: (publications, action) => {
      const index = publications.findIndex(
        (pub) => pub.id === action.payload.id
      );
      publications.splice(index, 1);
    }
  }
});

export const { addPublication, removePublication } = slice.actions;
export default slice.reducer;
