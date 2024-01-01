import axios from 'axios';

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== 'apiCallBegin') return next(action);

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    try {
      const result = await axios({
        baseURL: 'http://localhost:9001/api',
        url,
        method,
        data
      });

      dispatch({ type: onSuccess, payload: result.data });
    } catch (err) {
      dispatch({ type: onError, payload: err });
    }
  };

export default api;
