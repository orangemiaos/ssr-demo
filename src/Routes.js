import Home from "./containers/Home";
import Login from "./containers/Login";
import Test from "./containers/Test";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    key: "home",
    loadData: Home.loadData,
    routes: [
      {
        path: "/test",
        component: Test,
        // exact: true,
        key: "test",
      },
    ],
  },
  { path: "/login", component: Login, exact: true, key: "login" },
];
export { routes };
