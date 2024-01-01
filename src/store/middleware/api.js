import axios from 'axios';
import * as actions from '../api';

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegin.type) return next(action);

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    try {
      const result = await axios({
        baseURL: 'http://localhost:9001/api',
        url,
        method,
        data
      });

      // General
      dispatch(actions.apiCallSuccess(result.data));
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: result.data });
    } catch (err) {
      // General
      dispatch(actions.apiCallFail(err));
      // Specific
      dispatch({ type: onError, payload: err });
    }
  };

export default api;
