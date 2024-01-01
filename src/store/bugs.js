import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegin, apiCallFail } from './api';

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    GET_BUGS_SUCCESS: (bugs, action) => {
      bugs.list = action.payload;
    }
  }
});

export const { GET_BUGS_SUCCESS } = slice.actions;

export default slice.reducer;

const url = '/bugs';
export const loadBugs = () =>
  apiCallBegin({
    url,
    onSuccess: GET_BUGS_SUCCESS.type,
    onFail: apiCallFail.type
  });
