import React, { Fragment } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";

const Home = (props) => {
  function handleClick() {
    console.log(props);
  }

  return (
    <Fragment>
      <Header />
      <span>hello react! ，{props.name}</span>
      <button onClick={handleClick}>点击增加数字</button>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log("state");
  return {
    name: state.home.name,
  };
};

export default connect(mapStateToProps)(Home);
