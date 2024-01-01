import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
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
      bugs.lastFetch = Date.now();
    },
    POST_BUG_SUCCESS: (bugs, action) => {
      bugs.list.push(action.payload);
    }
  }
});

export const {
  GET_BUGS_SUCCESS,
  GET_BUG_REQUESTED,
  GET_BUG_REQUEST_FAILED,
  POST_BUG_SUCCESS
} = slice.actions;

export default slice.reducer;

const url = '/bugs';
export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 10) return;

  dispatch(
    apiCallBegin({
      url,
      onStart: GET_BUG_REQUESTED.type,
      onSuccess: GET_BUGS_SUCCESS.type,
      onError: GET_BUG_REQUEST_FAILED.type
    })
  );
};

export const addBug = (bug) =>
  apiCallBegin({
    url,
    method: 'post',
    data: bug,
    onSuccess: POST_BUG_SUCCESS.type
  });
