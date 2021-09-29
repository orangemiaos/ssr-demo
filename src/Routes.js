import App from "./App";
import List from "./containers/List";
import Test from "./containers/Test";
import NotFound from "./containers/NotFound";

const routes = [
  {
    path: "/",
    component: App,
    loadData: App.loadData,
    key: "app",
    routes: [
      {
        path: "/list",
        component: List,
        exact: true,
        loadData: List.loadData,
        key: "list",
      },
      { path: "/test", component: Test, exact: true, key: "test" },
      { component: NotFound },
    ],
  },
];
export { routes };
