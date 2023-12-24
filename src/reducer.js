import * as actions from './action-types';
// Action types
// Reducer
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_PUBLICATION:
      return [
        ...state,
        {
          id: ++lastId,
          volume: action.payload.volume,
          publication_no: action.payload.publication_no
        }
      ];
    case actions.REMOVE_PUBLICATION:
      return state.filter((pub) => pub.id !== action.payload.id);
    default:
      break;
  }
}
