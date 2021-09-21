import React from "react";
import ReactDOMServer from "react-dom/server";
import {
  StaticRouter as Router,
  Switch,
  Route,
  matchPath,
} from "react-router-dom";
import { Provider } from "react-redux";
import getStore from "../redux/store";
import routes from "../Routes";

export const render = (req) => {
  const promises = [];
  routes.some((route) => {
    const match = matchPath(req.path, route);
    if (match) promises.push(route);
    return match;
  });
  console.log("promises", promises);

  // Promise.all(promises).then((data) => {
  //   // do something w/ the data so the client
  //   // can access it then render the app
  // });

  const store = getStore();
  // server端不同于浏览器，无法获取到url的变化，只能通过传入url的方式获取url
  const content = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Router location={req.url}>
        <Switch>
          {routes.map((item) => {
            return <Route {...item} />;
          })}
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
