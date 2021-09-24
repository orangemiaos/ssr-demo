import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { getClientStore } from "../redux/store";
import { routes } from "../Routes";

const store = getClientStore();
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </Router>
  </Provider>
);
// hydrate与render相同，用在ReactDOMServer渲染时，绑定事件监听器
ReactDom.hydrate(<App />, document.getElementById("root"));
