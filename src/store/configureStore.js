import { configureStore } from '@reduxjs/toolkit';
import api from './middleware/api';
import error from './middleware/error';
import logger from './middleware/logger';
import reducer from './reducer';

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      logger({ destination: 'console' }),
      error,
      api
    ]
  });
}
