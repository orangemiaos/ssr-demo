import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

export default (
  <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </div>
);
