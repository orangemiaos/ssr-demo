import { GET_HOME_LIST } from "./constants";

export const getHomeList = {
  type: GET_HOME_LIST,
  list: [
    { id: 1, name: "我是1" },
    { id: 2, name: "我是2" },
    { id: 3, name: "我是3" },
  ],
};
