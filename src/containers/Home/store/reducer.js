import { GET_HOME_LIST } from "./constants";

const defaultState = {
  newList: [],
  name: "我是name Lee",
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_HOME_LIST:
      return {
        ...state,
        newList: action.list,
      };
    default:
      return state;
  }
}
