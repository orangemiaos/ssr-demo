import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import Routes from "../Routes";

export const render = (req) => {
  // server端不同于浏览器，无法获取到url的变化，只能通过传入url的方式获取url
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>{Routes}</StaticRouter>
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
