import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"; // 限于客户端重定向
import { getList } from "./store/actions";

class List extends Component {
  // 服务端渲染是不执行，所以服务端渲染时，list为undefined
  componentDidMount() {
    // 防止重复请求
    if (!this.props.list.length) {
      this.props.getHomeList();
    }
  }

  render() {
    const { name, list, login } = this.props;
    return login ? (
      <div>
        <span>hello react! ，{name}</span>
        <ul>
          {list && list.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

List.loadData = (store) => {
  return store.dispatch(getList());
};

const mapStateToProps = (state) => ({
  name: state.home.name,
  list: state.home.list,
  login: state.header.login,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList: () => {
    dispatch(getList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
