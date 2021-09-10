import React from "react";
import ReactDom from "react-dom";
import Home from "../components/Home";

// hydrate与render相同，用在ReactDOMServer渲染时，绑定事件监听器
ReactDom.hydrate(<Home />, document.getElementById("root"));
