import { configureStore } from '@reduxjs/toolkit';
import reducer from './articles';

export default function () {
  return configureStore({ reducer });
}
