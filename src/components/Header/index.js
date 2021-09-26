import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    let { login } = this.props;
    return (
      <div>
        <Link to="/">首页</Link>
        {login ? (
          <Fragment>
            <Link to="/out">退出</Link>
            <Link to="/list">列表数据</Link>
          </Fragment>
        ) : (
          <Link to="/login">登陆</Link>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({ login: state.header.login });
export default connect(mapState, null)(Header);
