import { GET_HOME_LIST } from "./constants";

// 同步action返回的是一个对象，异步action返回的是一个函数
// export const getHomeList = () => ({
//   type: GET_HOME_LIST,
//   list: [
//     { id: 1, name: "我是1" },
//     { id: 2, name: "我是2" },
//     { id: 3, name: "我是3" },
//   ],
// });

export const getHomeList = () => {
  return (dispatch) => {
    // 返回一个promise
    return new Promise((resolve) => {
      console.log("发送数据请求");
      setTimeout(() => {
        dispatch({
          type: GET_HOME_LIST,
          list: [
            { id: 1, name: "我是1" },
            { id: 2, name: "我是2" },
            { id: 3, name: "我是3" },
          ],
        });
        resolve();
      }, 1000);
    });
  };
};
