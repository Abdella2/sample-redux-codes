import reducer from './reducer';
function createStore(reducer) {
  let state;
  const subscriptions = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    subscriptions.forEach((callback) => callback());
  }

  function subscribe(subscription) {
    subscriptions.push(subscription);
    const index = subscriptions.length - 1;
    return () => subscriptions.splice(index, 1);
  }

  return {
    getState,
    dispatch,
    subscribe
  };
}

export default createStore(reducer);
