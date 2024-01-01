import { createAction } from '@reduxjs/toolkit';

export const apiCallBegin = createAction('API/CALL_BEGIN');
export const apiCallSuccess = createAction('API/CALL_SUCCESS');
export const apiCallFail = createAction('API/CALL_FAIL');
