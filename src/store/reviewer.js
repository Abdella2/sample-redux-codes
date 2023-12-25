import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
  name: 'authors',
  initialState: [],
  reducers: {
    addReviewer: (authors, action) => {
      authors.push({
        id: ++lastId,
        name: action.payload.name
      });
    }
  }
});

export const { addReviewer } = slice.actions;
export default slice.reducer;
