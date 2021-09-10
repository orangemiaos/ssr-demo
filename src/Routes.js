import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

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
