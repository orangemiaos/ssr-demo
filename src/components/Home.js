import React from "react";

const Home = () => {
  function handleClick() {
    alert("执行点击事件");
  }

  return (
    <div>
      <span>hello react!</span>
      <button onClick={handleClick}>点击</button>
    </div>
  );
};

export default Home;
