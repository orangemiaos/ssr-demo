import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";

const App = () => <Router>{Routes}</Router>;

// hydrate与render相同，用在ReactDOMServer渲染时，绑定事件监听器
ReactDom.hydrate(<App />, document.getElementById("root"));
