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

const getStore = function () {
  // 所有用户共享一个store
  return createStore(reducer, applyMiddleware(thunk));
};

export default getStore;
