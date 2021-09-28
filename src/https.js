import axios from "axios";
import { ip } from "./utils/ip";
export const clientAxios = axios.create({
  baseURL: "/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export const serverAxios = axios.create({
  baseURL: `http://${ip}:9000"`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
