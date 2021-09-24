import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { reducer as homeReducer } from "../containers/Home/store";

function countReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const reducer = combineReducers({
  home: homeReducer,
  count: countReducer,
});

export const getStore = function () {
  // 所有用户共享一个store
  return createStore(reducer, applyMiddleware(thunk));
};

export const getClientStore = function () {
  // 所有用户共享一个store
  let defaultState = window.context.state;
  return createStore(reducer, defaultState, applyMiddleware(thunk));
};
