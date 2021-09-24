import React from "react";
import ReactDOMServer from "react-dom/server";
import {
  StaticRouter as Router,
  Switch,
  Route,
  // matchPath,
} from "react-router-dom";

import { Provider } from "react-redux";

export const render = (store, routes, req) => {
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

  return `
<html>
  <body>
  <div id='root'>${content}</div>
  <script src='/index.js'></script>
  </body>  
<html>
`;
};
