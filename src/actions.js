import * as actions from './action-types';
export function addPublication(payload) {
  return {
    type: actions.ADD_PUBLICATION,
    payload: payload
  };
}

export function removePublication(id) {
  return {
    type: actions.REMOVE_PUBLICATION,
    payload: {
      id
    }
  };
}

export default {
  addPublication,
  removePublication
};
