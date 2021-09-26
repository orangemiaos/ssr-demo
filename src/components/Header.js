import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <Link to="/home">home</Link>
      <Link to="/test">test</Link>
      <Link to="/login">login</Link>
    </div>
  );
}
