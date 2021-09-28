import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { clientAxios, serverAxios } from "../https";
import { reducer as homeReducer } from "../containers/List/store";
import { reducer as headerReducer } from "../components/Header/store";

const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
});

export const getStore = function () {
  // 所有用户共享一个store
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios))
  );
};

export const getClientStore = function () {
  // 所有用户共享一个store
  let defaultState = window.context.state;
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
};
