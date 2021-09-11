import React, { Fragment } from "react";
import Header from "../components/Header";

const Home = () => {
  function handleClick() {
    alert("执行点击事件");
  }

  return (
    <Fragment>
      <Header />
      <span>hello react! 路由</span>
      <button onClick={handleClick}>点击</button>
    </Fragment>
  );
};

export default Home;
