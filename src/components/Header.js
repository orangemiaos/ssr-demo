import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <Link to="/">首页</Link>
      <br />
      <Link to="/login">login</Link>
    </div>
  );
}
