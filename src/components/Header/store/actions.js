import axios from "axios";
import { CHANGE_LOGIN } from "./constants";

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value,
});

const getLoginInfo = () => {
  return (dispatch, getState, axios) => {
    return axios.get("/api/getLoginInfo").then((res) => {
      dispatch(changeLogin(res.data.login));
    });
  };
};

const login = () => {
  return (dispatch, getState, axios) => {
    return axios.get("/api/login").then((res) => {
      dispatch(changeLogin(res.data.success));
    });
  };
};

const logout = () => {
  return (dispatch, getState, axios) => {
    dispatch(changeLogin(false));
  };
};
export default { getLoginInfo, login, logout };
