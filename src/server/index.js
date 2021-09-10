import express from "express";
import Home from "../components/Home";

import React from "react";
import ReactDOMServer from "react-dom/server";

const content = ReactDOMServer.renderToString(<Home />);

const app = express();
const port = 3000;

// 将静态文件存储在public文件夹上，每当有静态资源的请求时，去public文件夹中找
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
  <html>
    <body>
    <div id='root'>${content}</div>
    <script src='/index.js'></script>
    </body>  
  <html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
