import express from "express";
// react-router-dom 中的 matchPath，只能匹配一级路由，路由内再次嵌套一个route，则匹配不出来，需要使用
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";

import { getStore } from "../redux/store";
import { render } from "./utils";
import { routes } from "../Routes";
import { ip } from "../utils/ip";

const app = express();
const port = 3000;

// 将静态文件存储在public文件夹上，每当有静态资源的请求时，去public文件夹中找
app.use(express.static("public"));

// http://192.168.31.6:9000/api/list

// 浏览器路由命中
app.use(
  "/api",
  proxy(`http://${ip}:9000`, {
    proxyReqPathResolver: function (req) {
      return "/api" + req.url;
    },
  })
);

// * 可匹配所有文件，否则只可以匹配/
app.get("*", (req, res) => {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, req.path);
  let promises = [];
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
    res.send(render(store, routes, req));
  });

  // 将icon放到public文件下，减少一次匹配
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
