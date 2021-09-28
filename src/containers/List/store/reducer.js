import { GET_HOME_LIST } from "./constants";

const defaultState = {
  name: "我是name Lee",
  list: [],
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_HOME_LIST:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
}
