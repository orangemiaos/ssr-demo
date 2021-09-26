import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";

export default function (props) {
  return (
    <Fragment>
      <Header />
      {renderRoutes(props.route.routes)}
    </Fragment>
  );
}
