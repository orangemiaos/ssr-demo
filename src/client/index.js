import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import getStore from "../redux/store";
import routes from "../Routes";

const App = () => (
  <Router>
    <Switch>
      {routes.map((item) => (
        <Route {...item} />
      ))}
    </Switch>
  </Router>
);

// hydrate与render相同，用在ReactDOMServer渲染时，绑定事件监听器
ReactDom.hydrate(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
