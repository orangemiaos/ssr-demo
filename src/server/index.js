import express from "express";

import { render } from "./utils";

const app = express();
const port = 3000;

// 将静态文件存储在public文件夹上，每当有静态资源的请求时，去public文件夹中找
app.use(express.static("public"));

// * 可匹配所有文件，否则只可以匹配/
app.get("*", (req, res) => {
  res.send(render(req));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
