import { CHANGE_LOGIN } from "./constants";

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value,
});

const getLoginInfo = () => {
  return (dispatch, getState, axios) => {
    return axios.get("/api/login").then((res) => {
      dispatch(changeLogin(res.data));
    });
  };
};

export default { getLoginInfo };
