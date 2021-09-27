import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { actions } from "./components/Header/store";

const App = function (props) {
  return (
    <Fragment>
      <Header />
      {renderRoutes(props.route.routes)}
    </Fragment>
  );
};

App.loadData = (store) => {
  return store.dispatch(actions.getLoginInfo());
};

export default App;
