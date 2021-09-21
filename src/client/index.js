import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import getStore from "../redux/store";
import Routes from "../Routes";

const App = () => (
  <Router>
    <Switch>
      {Routes.map((item) => (
        <Route key={item.key} exact={item.exact} path={item.path}>
          {item.component}
        </Route>
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
