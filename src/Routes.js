import App from "./App";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Test from "./containers/Test";

const routes = [
  {
    path: "/",
    component: App,
    key: "app",
    routes: [
      { path: "/login", component: Login, exact: true, key: "login" },
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
