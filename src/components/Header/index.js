import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "./store";

class Header extends Component {
  render() {
    let { login, handleLogout, handleLogin } = this.props;
    return (
      <div>
        <Link to="/">首页</Link>
        {login ? (
          <Fragment>
            <div onClick={handleLogout}>退出</div>
            <Link to="/list">列表数据</Link>
          </Fragment>
        ) : (
          <div onClick={handleLogin}>登陆</div>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({ login: state.header.login });

const mapDispatch = (dispatch) => ({
  handleLogin: () => {
    dispatch(actions.login());
  },
  handleLogout: () => {
    dispatch(actions.logout());
  },
});
export default connect(mapState, mapDispatch)(Header);
