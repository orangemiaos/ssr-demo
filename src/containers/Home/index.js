import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { getHomeList } from "./store/actions";

class Home extends Component {
  // 服务端渲染是不执行，所以服务端渲染时，list为undefined
  componentDidMount() {
    this.props.getHomeList();
  }

  render() {
    const { name, list } = this.props;
    return (
      <div>
        <Header />
        <span>hello react! ，{name}</span>
        <ul>
          {list && list.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    );
  }
}

Home.loadData = (store) => {
  return store.dispatch(getHomeList());
};

const mapStateToProps = (state) => ({
  name: state.home.name,
  list: state.home.list,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList: () => {
    dispatch(getHomeList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
