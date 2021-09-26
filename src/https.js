import axios from "axios";

export const clientAxios = axios.create({
  baseURL: "/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const serverAxios = axios.create({
  baseURL: "http://192.168.31.6:9000",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
