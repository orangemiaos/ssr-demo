import express from "express";
import Home from "./components/Home";

import React from "react";
import ReactDOMServer from "react-dom/server";
const content = ReactDOMServer.renderToString(<Home />);

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(content);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});