import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import getStore from "../redux/store";
import Routes from "../Routes";

export const render = (req) => {
  // server端不同于浏览器，无法获取到url的变化，只能通过传入url的方式获取url
  const content = ReactDOMServer.renderToString(
    <Provider store={getStore()}>
      <Router location={req.url}>{Routes}</Router>
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
