import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegin } from './api';

const slice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    GET_BUG_REQUESTED: (bugs, action) => {
      bugs.loading = true;
    },
    GET_BUG_REQUEST_FAILED: (bugs, action) => {
      bugs.loading = false;
    },
    GET_BUGS_SUCCESS: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
    }
  }
});

export const { GET_BUGS_SUCCESS, GET_BUG_REQUESTED, GET_BUG_REQUEST_FAILED } =
  slice.actions;

export default slice.reducer;

const url = '/bugs';
export const loadBugs = () =>
  apiCallBegin({
    url,
    onStart: GET_BUG_REQUESTED.type,
    onSuccess: GET_BUGS_SUCCESS.type,
    onError: GET_BUG_REQUEST_FAILED.type
  });
