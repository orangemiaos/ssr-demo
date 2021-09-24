import React from "react";
import ReactDOMServer from "react-dom/server";
import {
  StaticRouter as Router,
  Switch,
  Route,
  // matchPath,
} from "react-router-dom";
// react-router-dom 中的 matchPath，只能匹配一级路由，路由内再次嵌套一个route，则匹配不出来，需要使用
import { matchRoutes } from "react-router-config";

import { Provider } from "react-redux";
import getStore from "../redux/store";
import { routes } from "../Routes";

export const render = (req, res) => {
  const store = getStore();
  const matchedRoutes = matchRoutes(routes, req.path);

  let promises = [];
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store));
    }
  });

  Promise.all(promises).then(() => {
 

    // server端不同于浏览器，无法获取到url的变化，只能通过传入url的方式获取url
    const content = ReactDOMServer.renderToString(
      <Provider store={store}>
        <Router location={req.url}>
          <Switch>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Switch>
        </Router>
      </Provider>
    );

    res.send(`
    <html>
      <body>
      <div id='root'>${content}</div>
      <script src='/index.js'></script>
      </body>  
    <html>
    `);
  });
};
