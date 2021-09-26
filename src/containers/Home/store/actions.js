import { GET_HOME_LIST } from "./constants";
import axios from "axios";

// 同步action返回的是一个对象，异步action返回的是一个函数
// export const getHomeList = () => ({
//   type: GET_HOME_LIST,
//   list: [
//     { id: 1, name: "我是1" },
//     { id: 2, name: "我是2" },
//     { id: 3, name: "我是3" },
//   ],
// });

const changeList = (list) => {
  return {
    type: GET_HOME_LIST,
    list,
  };
};

export const getHomeList = (server) => {
  // 浏览器
  // /api/getHomeList => http://localhost:3000/api/getHomeList

  // server
  // /api/getHomeList => 服务器根目录下的/api/getHomeList.js

  let url = "";
  if (server) {
    url = "http://192.168.31.6:9000/api/list";
  } else {
    url = "/api/getHomeList";
  }
  return (dispatch) => {
    return axios.get(url).then((res) => {
      // 处理成功情况
      if (res.status === 200) {
        dispatch(changeList(res.data));
      }
    });
  };
};
