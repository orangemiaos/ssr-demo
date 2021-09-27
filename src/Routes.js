import App from "./App";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Test from "./containers/Test";

const routes = [
  {
    path: "/",
    component: App,
    loadData: App.loadData,
    key: "app",
    routes: [
      {
        path: "/login",
        component: Login,
        exact: true,
        loadData: Login.loadData,
        key: "login",
      },
      {
        path: "/home",
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: "home",
      },
      { path: "/test", component: Test, exact: true, key: "test" },
    ],
  },
];
export { routes };
